import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateIn from '@/components/shared/AnimateIn'

export const metadata: Metadata = {
  title: 'about',
  description: 'utah-based cinematic portrait photographer. we shoot digital, edit with analog soul, and treat every frame with intention.',
}

const process = [
  {
    label: 'before',
    description: 'consultation, location scouting, choosing the right look and light for your session.',
  },
  {
    label: 'during',
    description: 'a session that moves slow on purpose. we shoot with intention, not volume. every frame counts.',
  },
  {
    label: 'after',
    description: '2–3 weeks for hand editing and delivery. every image edited individually — no batch presets.',
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
            src="https://picsum.photos/seed/iviejo-about2/1400/700"
            alt="the studio"
            className="photo"
            style={{ width: '100%', height: '60vw', maxHeight: '70vh', minHeight: 240, objectFit: 'cover', display: 'block' }}
          />
        </div>
      </section>

      {/* Story */}
      <section className="section-pad" style={{ backgroundColor: 'var(--bone)' }}>
        <div className="container-site">
          <div className="grid-2col" style={{ alignItems: 'start' }}>
            <AnimateIn>
              <div>
                <span className="t-eyebrow" style={{ marginBottom: 24, display: 'block' }}>about</span>
                <p className="t-body" style={{ marginBottom: 16 }}>
                  we use modern digital cameras — but we shoot and edit the way analog photographers think.
                  slow down. frame with intention. make every image count before pressing the shutter.
                </p>
                <p className="t-body" style={{ marginBottom: 16 }}>
                  the grain, warmth, and cinematic depth you see in our work aren&apos;t filters or presets.
                  they&apos;re deliberate choices made by hand in post for every single image — inspired by
                  the look and feel of analog film photography.
                </p>
                <p className="t-body" style={{ marginBottom: 16 }}>
                  we&apos;re based in utah — which means red rock, alpine forests, salt flats, and
                  a quality of light that doesn&apos;t happen anywhere else.
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
                  &ldquo;the look is analog. the tools are modern. the intention is everything.&rdquo;
                </blockquote>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="section-pad" style={{ backgroundColor: 'var(--linen)' }}>
        <div className="container-site">
          <AnimateIn>
            <span className="t-eyebrow" style={{ marginBottom: 48, display: 'block' }}>what to expect</span>
          </AnimateIn>
          <div className="grid-3col" style={{ gap: 0 }}>
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
