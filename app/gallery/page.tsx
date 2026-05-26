import type { Metadata } from 'next'
import GalleryGrid from '@/components/gallery/GalleryGrid'

export const metadata: Metadata = {
  title: 'work',
  description: 'analog film portrait photography. utah-based. shot on 35mm and medium format.',
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
            shot on analog film. developed in-house. every image is real grain, real light, real silver.
          </p>
        </div>
        <GalleryGrid />
      </div>
    </div>
  )
}
