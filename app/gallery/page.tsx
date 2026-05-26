import type { Metadata } from 'next'
import GalleryGrid, { ShootItem } from '@/components/gallery/GalleryGrid'
import { isDriveConfigured, listShoots } from '@/lib/drive'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'work',
  description: 'cinematic portrait photography. utah-based. modern digital capture with analog-inspired editing.',
}

// Portrait-oriented picsum IDs (people in outdoor settings)
const staticShoots: ShootItem[] = [
  { title: 'Marisol', category: 'portrait', location: 'Oaxaca', year: 2024, src: 'https://picsum.photos/id/64/600/800', slug: 'marisol-oaxaca-2024' },
  { title: 'Carter & Elise', category: 'couples', location: 'Moab, Utah', year: 2024, src: 'https://picsum.photos/id/659/600/750', slug: 'carter-elise-moab-2024' },
  { title: 'The Andersons', category: 'family', location: 'Salt Lake City', year: 2025, src: 'https://picsum.photos/id/177/600/900', slug: 'andersons-slc-2025', bw: true },
  { title: 'Priya', category: 'graduation', location: 'Bonneville Salt Flats', year: 2024, src: 'https://picsum.photos/id/453/600/800', slug: 'priya-saltflats-2024' },
  { title: 'James & Sol', category: 'couples', location: 'Arches NP', year: 2025, src: 'https://picsum.photos/id/91/600/750', slug: 'james-sol-arches-2025' },
  { title: 'Margot', category: 'portrait', location: 'Park City', year: 2025, src: 'https://picsum.photos/id/550/600/800', slug: 'margot-parkcity-2025', bw: true },
  { title: 'Rivera Family', category: 'family', location: 'Zion Canyon', year: 2025, src: 'https://picsum.photos/id/577/600/900', slug: 'rivera-zion-2025' },
  { title: 'Nadia', category: 'graduation', location: 'University of Utah', year: 2024, src: 'https://picsum.photos/id/618/600/750', slug: 'nadia-uofu-2024' },
  { title: 'Cedar Mesa', category: 'b&w', location: 'Bears Ears', year: 2025, src: 'https://picsum.photos/id/292/600/800', slug: 'cedar-mesa-2025', bw: true },
]

async function getShoots(): Promise<ShootItem[]> {
  if (!isDriveConfigured()) return staticShoots
  try {
    const driveShoots = await listShoots()
    return driveShoots.map((s) => ({
      title: s.meta.title,
      category: 'portrait',
      location: s.meta.location,
      year: s.meta.year,
      src: s.coverImageId ? `/api/drive-image/${s.coverImageId}` : staticShoots[0].src,
      slug: s.slug,
    }))
  } catch {
    return staticShoots
  }
}

export default async function GalleryPage() {
  const shoots = await getShoots()

  return (
    <div style={{ backgroundColor: 'var(--bone)' }}>
      <section className="section-pad-sm" style={{ paddingBottom: 48 }}>
        <div className="container-site">
          <div className="grid-2col" style={{ alignItems: 'flex-end', paddingBottom: 48, borderBottom: '1px solid var(--putty)' }}>
            <h1 className="t-display-1" style={{ color: 'var(--ink)' }}>all<br /><span style={{ fontStyle: 'italic' }}>sessions.</span></h1>
            <p className="t-body" style={{ color: 'var(--graphite)' }}>
              shot with intention. edited by hand. every image a deliberate choice.
            </p>
          </div>
        </div>
      </section>

      <div style={{ padding: '48px 0 120px' }}>
        <div className="container-site">
          <GalleryGrid shoots={shoots} />
        </div>
      </div>
    </div>
  )
}
