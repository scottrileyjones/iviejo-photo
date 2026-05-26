import type { Metadata } from 'next'
import GalleryGrid from '@/components/gallery/GalleryGrid'

export const metadata: Metadata = {
  title: 'work',
  description: 'cinematic portrait photography. utah-based. modern digital capture with analog-inspired editing.',
}

export default function GalleryPage() {
  return (
    <div style={{ padding: '80px 0 120px' }}>
      <div className="container-site">
        <div style={{ marginBottom: 64 }}>
          <span className="t-eyebrow">work</span>
          <h1 className="t-h1" style={{ marginTop: 16 }}>
            all sessions
          </h1>
          <p className="t-body" style={{ marginTop: 16, maxWidth: 480, color: 'var(--graphite)' }}>
            shot with intention. edited by hand. every image is a deliberate choice — real grain, real warmth, real depth.
          </p>
        </div>
        <GalleryGrid />
      </div>
    </div>
  )
}
