import { google } from 'googleapis'

export interface ShootMeta {
  title: string
  location: string
  year: number
  camera: string
  look: string
  description: string
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

    const metaFile = files.find(f => f.name === 'meta.json')
    let meta: ShootMeta = {
      title: folder.name,
      location: '',
      year: new Date().getFullYear(),
      camera: '',
      look: 'warm & golden',
      description: '',
    }

    if (metaFile?.id) {
      try {
        const metaRes = await drive.files.get(
          { fileId: metaFile.id, alt: 'media' },
          { responseType: 'json' }
        )
        meta = { ...meta, ...(metaRes.data as object) }
      } catch { /* use defaults */ }
    }

    const imageFiles = files.filter(f => f.mimeType?.startsWith('image/'))
    const coverImageId = imageFiles[0]?.id ?? null

    shoots.push({ slug: folder.name, folderId: folder.id, meta, coverImageId })
  }

  return shoots
}

export async function getShootImages(slug: string): Promise<{ meta: ShootMeta; images: DriveImage[] } | null> {
  const drive = getDriveClient()
  const rootId = process.env.GOOGLE_DRIVE_FOLDER_ID!

  const foldersRes = await drive.files.list({
    q: `'${rootId}' in parents and name = '${slug}' and mimeType = 'application/vnd.google-apps.folder' and trashed = false`,
    fields: 'files(id, name)',
  })

  const folder = foldersRes.data.files?.[0]
  if (!folder?.id) return null

  const filesRes = await drive.files.list({
    q: `'${folder.id}' in parents and trashed = false`,
    fields: 'files(id, name, mimeType)',
    orderBy: 'name',
  })
  const files = filesRes.data.files ?? []

  const metaFile = files.find(f => f.name === 'meta.json')
  let meta: ShootMeta = {
    title: slug,
    location: '',
    year: new Date().getFullYear(),
    camera: '',
    look: 'warm & golden',
    description: '',
  }

  if (metaFile?.id) {
    try {
      const metaRes = await drive.files.get(
        { fileId: metaFile.id, alt: 'media' },
        { responseType: 'json' }
      )
      meta = { ...meta, ...(metaRes.data as object) }
    } catch { /* use defaults */ }
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
