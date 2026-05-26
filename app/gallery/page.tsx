import type { Metadata } from 'next'
import GalleryGrid from '@/components/gallery/GalleryGrid'

export const metadata: Metadata = {
  title: 'work',
  description: 'cinematic portrait photography. utah-based. modern digital capture with analog-inspired editing.',
}

export default function GalleryPage() {
  return (
    <div>
      {/* Large editorial header */}
      <section style={{ padding: '100px 0 80px', backgroundColor: 'var(--bone)' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'flex-end', gap: 80, paddingBottom: 64, borderBottom: '1px solid var(--putty)' }}>
            <h1 className="t-display-1" style={{ color: 'var(--ink)' }}>all<br /><span style={{ fontStyle: 'italic' }}>sessions.</span></h1>
            <p className="t-body" style={{ color: 'var(--graphite)', paddingBottom: 8 }}>
              shot with intention. edited by hand. every image a deliberate choice — real grain, real warmth, real depth.
            </p>
          </div>
        </div>
      </section>

      <div style={{ padding: '64px 0 160px', backgroundColor: 'var(--bone)' }}>
        <div className="container-site">
          <GalleryGrid />
        </div>
      </div>
    </div>
  )
}
