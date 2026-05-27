import type { Metadata } from 'next'
import Link from 'next/link'
import GalleryLightbox from '@/components/gallery/GalleryLightbox'
import { isDriveConfigured, getShootImages } from '@/lib/drive'

export const revalidate = 0
export const dynamicParams = true

// Fallback static data — used when Drive is not configured
const staticShootData: Record<string, {
  title: string
  location: string
  year: number
  camera: string
  look: string
  description: string
  images: { src: string; alt: string }[]
}> = {
  'carter-elise-moab-2024': {
    title: 'Carter & Elise',
    location: 'Moab, Utah',
    year: 2024,
    camera: 'Sony A7R V',
    look: 'vivid & saturated',
    description: 'shot over two days in the canyon. the light in late october in moab is unrepeatable — golden, long, and unforgiving in the best way.',
    images: [
      { src: 'https://picsum.photos/id/659/800/1000', alt: 'Carter & Elise, Moab' },
      { src: 'https://picsum.photos/id/91/800/1000', alt: 'Carter & Elise, Moab' },
      { src: 'https://picsum.photos/id/64/800/1000', alt: 'Carter & Elise, Moab' },
      { src: 'https://picsum.photos/id/453/800/1000', alt: 'Carter & Elise, Moab' },
      { src: 'https://picsum.photos/id/550/800/1000', alt: 'Carter & Elise, Moab' },
      { src: 'https://picsum.photos/id/577/800/1000', alt: 'Carter & Elise, Moab' },
    ],
  },
  'marisol-oaxaca-2024': {
    title: 'Marisol',
    location: 'Oaxaca, Mexico',
    year: 2024,
    camera: 'Sony A7R V',
    look: 'warm & golden',
    description: 'marisol wanted something that felt like a record — not a photo shoot. we wandered for half a day and let the city do most of the work.',
    images: [
      { src: 'https://picsum.photos/id/64/800/1000', alt: 'Marisol, Oaxaca' },
      { src: 'https://picsum.photos/id/292/800/1000', alt: 'Marisol, Oaxaca' },
      { src: 'https://picsum.photos/id/618/800/1000', alt: 'Marisol, Oaxaca' },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(staticShootData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params

  if (isDriveConfigured()) {
    try {
      const shoot = await getShootImages(slug)
      if (shoot) {
        return {
          title: `${shoot.meta.title} — ${shoot.meta.location}, ${shoot.meta.year}`,
          description: shoot.meta.description,
        }
      }
    } catch { /* fall through */ }
  }

  const shoot = staticShootData[slug]
  if (!shoot) return { title: 'shoot not found' }
  return {
    title: `${shoot.title} — ${shoot.location}, ${shoot.year}`,
    description: shoot.description,
  }
}

export default async function ShootPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  let shoot: {
    title: string; location: string; year: number; camera: string
    look: string; description: string
    images: { src: string; alt: string }[]
  } | null = null

  if (isDriveConfigured()) {
    try {
      const driveShoot = await getShootImages(slug)
      if (driveShoot) {
        shoot = {
          title: driveShoot.meta.title,
          location: driveShoot.meta.location,
          year: driveShoot.meta.year,
          camera: driveShoot.meta.camera,
          look: driveShoot.meta.look,
          description: driveShoot.meta.description,
          images: driveShoot.images.map((img) => ({
            src: `/api/drive-image/${img.id}`,
            alt: img.alt,
          })),
        }
      }
    } catch { /* fall through to static */ }
  }

  if (!shoot) {
    const s = staticShootData[slug]
    shoot = s ? { ...s } : null
  }

  if (!shoot) {
    return (
      <div className="container-site" style={{ padding: '120px 0', textAlign: 'center' }}>
        <p className="t-body" style={{ color: 'var(--slate)' }}>shoot not found.</p>
        <Link href="/gallery" className="t-link" style={{ marginTop: 16, display: 'inline-block' }}>
          back to all work →
        </Link>
      </div>
    )
  }

  return (
    <div style={{ padding: '80px 0 120px' }}>
      <div className="container-site">
        <div style={{ marginBottom: 64, maxWidth: 720 }}>
          <Link
            href="/gallery"
            className="t-caption"
            style={{ color: 'var(--slate)', textDecoration: 'none', display: 'block', marginBottom: 32 }}
          >
            ← all work
          </Link>
          <h1 className="t-h1">{shoot.title}</h1>
          <p className="t-caption" style={{ marginTop: 12 }}>
            {shoot.location} · {shoot.year}{shoot.camera ? ` · ${shoot.camera}` : ''}
          </p>
          <p className="t-caption" style={{ marginTop: 6, color: 'var(--slate)' }}>
            edited in the {shoot.look} look. every image hand-edited.
          </p>
          {shoot.description && (
            <p className="t-body" style={{ marginTop: 24 }}>{shoot.description}</p>
          )}
        </div>

        <GalleryLightbox images={shoot.images} />

        <div style={{ marginTop: 80, borderTop: '1px solid var(--putty)', paddingTop: 64, textAlign: 'center' }}>
          <p className="t-eyebrow" style={{ marginBottom: 16 }}>want something like this?</p>
          <Link href="/quiz" className="btn-outline">
            book a similar session
          </Link>
        </div>
      </div>
    </div>
  )
}
