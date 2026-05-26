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
                src="/placeholder-bw.svg"
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
                we use modern digital cameras — but we shoot and edit the way analog photographers think. slow down, frame with intention, and make every image count before you press the shutter.
              </p>
              <p className="t-body" style={{ marginTop: 16 }}>
                we&apos;re based in utah, which means red rock canyons, salt flats, and alpine light that no preset can replicate. the grain, warmth, and depth in our work aren&apos;t filters — they&apos;re deliberate editing choices made by hand for every image.
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
