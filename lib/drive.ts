import { google } from 'googleapis'

export interface ShootMeta {
  title: string
  location: string
  year: number
  camera: string
  look: string
  description: string
}

function parseFolderName(name: string): Partial<ShootMeta> {
  const parts = name.split(' - ')
  return {
    title: parts[0]?.trim() || name,
    location: parts[1]?.trim() || '',
    year: parseInt(parts[2]?.trim() || '') || new Date().getFullYear(),
    look: parts[3]?.trim() || '',
  }
}

export interface DriveShoot {
  slug: string
  folderId: string
  meta: ShootMeta
  coverImageId: string | null
}

export interface DriveImage {
  id: string
  name: string
  alt: string
}

function getDriveClient() {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON
  if (!raw) throw new Error('GOOGLE_SERVICE_ACCOUNT_JSON is not set')
  const credentials = JSON.parse(raw)
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  })
  return google.drive({ version: 'v3', auth })
}

export function isDriveConfigured() {
  return !!(process.env.GOOGLE_SERVICE_ACCOUNT_JSON && process.env.GOOGLE_DRIVE_FOLDER_ID)
}

export async function listShoots(): Promise<DriveShoot[]> {
  const drive = getDriveClient()
  const rootId = process.env.GOOGLE_DRIVE_FOLDER_ID!

  const foldersRes = await drive.files.list({
    q: `'${rootId}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false`,
    fields: 'files(id, name)',
    orderBy: 'name desc',
  })

  const folders = foldersRes.data.files ?? []
  const shoots: DriveShoot[] = []

  for (const folder of folders) {
    if (!folder.id || !folder.name) continue

    const filesRes = await drive.files.list({
      q: `'${folder.id}' in parents and trashed = false`,
      fields: 'files(id, name, mimeType)',
      orderBy: 'name',
    })
    const files = filesRes.data.files ?? []

    const parsed = parseFolderName(folder.name)
    const meta: ShootMeta = {
      title: parsed.title || folder.name,
      location: parsed.location || '',
      year: parsed.year || new Date().getFullYear(),
      camera: '',
      look: parsed.look || '',
      description: '',
    }

    const imageFiles = files.filter(f => f.mimeType?.startsWith('image/'))
    const coverImageId = imageFiles[0]?.id ?? null

    shoots.push({ slug: folder.id, folderId: folder.id, meta, coverImageId })
  }

  return shoots
}

export async function getShootImages(slug: string): Promise<{ meta: ShootMeta; images: DriveImage[] } | null> {
  const drive = getDriveClient()

  const folderRes = await drive.files.get({
    fileId: slug,
    fields: 'id, name',
  })

  const folder = folderRes.data
  if (!folder?.id || !folder?.name) return null

  const filesRes = await drive.files.list({
    q: `'${folder.id}' in parents and trashed = false`,
    fields: 'files(id, name, mimeType)',
    orderBy: 'name',
  })
  const files = filesRes.data.files ?? []

  const parsed = parseFolderName(folder.name)
  const meta: ShootMeta = {
    title: parsed.title || slug,
    location: parsed.location || '',
    year: parsed.year || new Date().getFullYear(),
    camera: '',
    look: parsed.look || '',
    description: '',
  }

  const images: DriveImage[] = files
    .filter(f => f.mimeType?.startsWith('image/'))
    .map(f => ({
      id: f.id!,
      name: f.name!,
      alt: `${meta.title}, ${meta.location}`,
    }))

  return { meta, images }
}

export async function getFileBuffer(fileId: string): Promise<{ data: Buffer; contentType: string }> {
  const drive = getDriveClient()
  const res = await drive.files.get(
    { fileId, alt: 'media' },
    { responseType: 'arraybuffer' }
  )
  return {
    data: Buffer.from(res.data as ArrayBuffer),
    contentType: (res.headers as Record<string, string>)['content-type'] || 'image/jpeg',
  }
}
