import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateIn from '@/components/shared/AnimateIn'

export const metadata: Metadata = {
  title: 'about',
  description: 'utah-based analog film photographer. we shoot on real film, develop in-house, and keep every negative.',
}

const process = [
  {
    label: 'before',
    description: 'consultation, location scouting, choosing the right film stock for your light and session.',
  },
  {
    label: 'during',
    description: 'a session that moves slow on purpose. 36 frames per roll. each one intentional.',
  },
  {
    label: 'after',
    description: '4–6 weeks for development, scanning, delivery. photographs worth the wait.',
  },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero portrait */}
      <section style={{ backgroundColor: 'var(--bone)', padding: '80px 0 0' }}>
        <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/placeholder-bw.svg"
            alt="the studio"
            className="photo"
            style={{ width: '100%', height: '70vh', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: '120px 0', backgroundColor: 'var(--bone)' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            <AnimateIn>
              <div>
                <span className="t-eyebrow" style={{ marginBottom: 24, display: 'block' }}>about</span>
                <p className="t-body" style={{ marginBottom: 16 }}>
                  we started shooting film because digital felt too easy. too forgiving. too fast.
                  when you can shoot 2,000 frames in a day, every frame means less.
                </p>
                <p className="t-body" style={{ marginBottom: 16 }}>
                  film changed that. 36 exposures per roll. no preview. no delete. every decision
                  made before the shutter opens. that discipline shows up in the photographs.
                </p>
                <p className="t-body" style={{ marginBottom: 16 }}>
                  we&apos;re based in utah — which means red rock, alpine forests, salt flats, and
                  a quality of light that doesn&apos;t happen anywhere else. we develop in-house
                  and keep every negative on file.
                </p>
                <p className="t-body">
                  what we&apos;re pushing against: the over-edited, smoothed-out, ring-lit portrait
                  that looks the same as every other one. what we&apos;re pushing toward:
                  photographs that look like your actual life — just on its best day.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={120}>
              <div>
                <blockquote
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    fontSize: 'clamp(24px, 3vw, 36px)',
                    lineHeight: 1.2,
                    color: 'var(--ink)',
                    letterSpacing: '-0.015em',
                    borderLeft: '1px solid var(--forest)',
                    paddingLeft: 32,
                  }}
                >
                  &ldquo;i could shoot digital. i choose not to.&rdquo;
                </blockquote>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section style={{ backgroundColor: 'var(--linen)', padding: '120px 0' }}>
        <div className="container-site">
          <AnimateIn>
            <span className="t-eyebrow" style={{ marginBottom: 48, display: 'block' }}>what to expect</span>
          </AnimateIn>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 0,
            }}
          >
            {process.map((step, i) => (
              <AnimateIn key={step.label} delay={i * 80}>
                <div
                  style={{
                    borderTop: '1px solid var(--stone)',
                    paddingTop: 32,
                    paddingRight: i < 2 ? 48 : 0,
                    paddingLeft: i > 0 ? 48 : 0,
                    borderRight: i < 2 ? '1px solid var(--putty)' : 'none',
                  }}
                >
                  <h3 className="t-h3">{step.label}</h3>
                  <p className="t-body" style={{ marginTop: 16 }}>{step.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--bone)', textAlign: 'center' }}>
        <div className="container-site">
          <AnimateIn>
            <Link href="/quiz" className="btn-outline">
              find your session
            </Link>
          </AnimateIn>
        </div>
      </section>
    </div>
  )
}
