import type { Metadata } from 'next'
import GalleryGrid from '@/components/gallery/GalleryGrid'

export const metadata: Metadata = {
  title: 'work',
  description: 'cinematic portrait photography. utah-based. modern digital capture with analog-inspired editing.',
}

export default function GalleryPage() {
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
          <GalleryGrid />
        </div>
      </div>
    </div>
  )
}
