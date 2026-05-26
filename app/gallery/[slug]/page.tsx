import type { Metadata } from 'next'
import Link from 'next/link'
import GalleryLightbox from '@/components/gallery/GalleryLightbox'

const shootData: Record<string, {
  title: string
  location: string
  year: number
  camera: string
  film_stock: string
  film_format: string
  description: string
  images: { src: string; alt: string; film_notes?: string }[]
}> = {
  'carter-elise-moab-2024': {
    title: 'Carter & Elise',
    location: 'Moab, Utah',
    year: 2024,
    camera: 'Hasselblad 500C/M',
    film_stock: 'Kodak Ektar 100',
    film_format: 'medium format',
    description: 'shot over two days in the canyon. the light in late october in moab is unrepeatable — golden, long, and unforgiving in the best way.',
    images: [
      { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&q=80', alt: 'Carter & Elise, Moab' },
      { src: 'https://images.unsplash.com/photo-1502252430442-aac78f397426?w=1200&q=80', alt: 'Carter & Elise, Moab' },
      { src: 'https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=1200&q=80', alt: 'Carter & Elise, Moab' },
      { src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80', alt: 'Carter & Elise, Moab' },
      { src: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=1200&q=80', alt: 'Carter & Elise, Moab' },
      { src: 'https://images.unsplash.com/photo-1523264766099-e4c6aff2e2cf?w=1200&q=80', alt: 'Carter & Elise, Moab' },
    ],
  },
  'marisol-oaxaca-2024': {
    title: 'Marisol',
    location: 'Oaxaca, Mexico',
    year: 2024,
    camera: 'Nikon F3',
    film_stock: 'Kodak Portra 400',
    film_format: '35mm',
    description: 'marisol wanted something that felt like a record — not a photo shoot. we wandered for half a day and let the city do most of the work.',
    images: [
      { src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80', alt: 'Marisol, Oaxaca' },
      { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&q=80', alt: 'Marisol, Oaxaca' },
      { src: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&q=80', alt: 'Marisol, Oaxaca' },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(shootData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const shoot = shootData[slug]
  if (!shoot) return { title: 'shoot not found' }
  return {
    title: `${shoot.title} — ${shoot.location}, ${shoot.year}`,
    description: shoot.description,
  }
}

export default async function ShootPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const shoot = shootData[slug]

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
        {/* Header */}
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
            {shoot.location} · {shoot.year} · {shoot.camera} · {shoot.film_stock}
          </p>
          <p className="t-caption" style={{ marginTop: 6, color: 'var(--slate)' }}>
            all images shot on {shoot.film_stock}. developed in-house.
          </p>
          {shoot.description && (
            <p className="t-body" style={{ marginTop: 24 }}>{shoot.description}</p>
          )}
        </div>

        {/* Lightbox grid */}
        <GalleryLightbox images={shoot.images} />

        {/* End CTA */}
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
