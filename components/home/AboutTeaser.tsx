import Link from 'next/link'
import AnimateIn from '@/components/shared/AnimateIn'

export default function AboutTeaser() {
  return (
    <section style={{ backgroundColor: 'var(--bone)', padding: '120px 0' }}>
      <div className="container-site">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'center',
          }}
        >
          <AnimateIn>
            <div style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="the studio"
                className="photo"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </AnimateIn>

          <AnimateIn delay={120}>
            <div>
              <span className="t-eyebrow">about the studio</span>
              <p className="t-body" style={{ marginTop: 24 }}>
                we started shooting film because digital felt too easy. too forgiving. film forces decisions — 36 frames per roll, no preview, no delete.
              </p>
              <p className="t-body" style={{ marginTop: 16 }}>
                we&apos;re based in utah, which means red rock canyons, salt flats, and alpine light that no preset can replicate. we develop in-house and keep every negative.
              </p>
              <p className="t-body" style={{ marginTop: 16 }}>
                what we&apos;re pushing against: the smoothed-out, over-edited, instagram-optimized portrait. what we&apos;re pushing toward: photographs that look like your actual life, just on its best day.
              </p>
              <div style={{ marginTop: 40 }}>
                <Link href="/about" className="t-link">
                  about the studio →
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
