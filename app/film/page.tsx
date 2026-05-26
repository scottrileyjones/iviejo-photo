import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateIn from '@/components/shared/AnimateIn'

export const metadata: Metadata = {
  title: 'our approach',
  description: 'how we achieve the cinematic film look using modern digital cameras and analog-inspired shooting and editing techniques.',
}

const faq = [
  {
    q: 'how long until i get my photos?',
    a: 'typically 2–3 weeks. every image is edited individually — no batch exports.',
  },
  {
    q: 'will they look like instagram filters?',
    a: 'no. better. filters are uniform. our edits are made for each image individually.',
  },
  {
    q: 'do you shoot on actual film?',
    a: 'no — we use modern digital cameras, but we shoot and edit with analog techniques and aesthetics. the grain, warmth, and depth are deliberate editing choices, not a film stock.',
  },
  {
    q: 'can i choose my look?',
    a: 'yes. take the style quiz and we\'ll match you with the right aesthetic for your session and location.',
  },
]

const looksExpanded = [
  {
    name: 'warm & golden',
    feel: 'intimate · timeless',
    use: 'portraits · couples · golden hour',
    description: 'soft skin tones, rich shadows, golden warmth. we push the highlights warm and protect the shadows — it gives images a depth and glow that feels lived-in rather than processed.',
    src: 'https://picsum.photos/seed/iviejo-warm/800/1000',
  },
  {
    name: 'vivid & saturated',
    feel: 'dramatic · expansive',
    use: 'landscape · outdoor · high contrast',
    description: 'bold color, elevated contrast, made for open skies and utah red rock. when the landscape is as much the subject as the people in it. colors that feel real but heightened.',
    src: 'https://picsum.photos/seed/iviejo-amber/800/1000',
  },
  {
    name: 'editorial b&w',
    feel: 'raw · honest',
    use: 'b&w · editorial · timeless',
    description: 'stripped of color, stripped of distraction. we add film-grain texture and crush the blacks for a high-contrast look that finds the moment and holds it. timeless in a way color rarely is.',
    src: 'https://picsum.photos/seed/iviejo-cool/800/1000',
  },
]

export default function FilmPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ position: 'relative', height: '70vh', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://picsum.photos/seed/iviejo-amber/800/1000"
          alt="our approach"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          className="photo"
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(246, 242, 236, 0.45)',
            display: 'flex',
            alignItems: 'flex-end',
          }}
        >
          <div className="container-site" style={{ paddingBottom: 80 }}>
            <h1 className="t-display-1" style={{ color: 'var(--ink)' }}>
              why does it look<br />the way it does?
            </h1>
          </div>
        </div>
      </section>

      {/* Body copy */}
      <section style={{ padding: '120px 0', backgroundColor: 'var(--bone)' }}>
        <div className="container-site">
          <div style={{ maxWidth: '56ch', margin: '0 auto' }}>
            <AnimateIn>
              <div style={{ marginBottom: 64 }}>
                <p className="t-eyebrow" style={{ marginBottom: 20 }}>the tools</p>
                <p className="t-body">
                  we shoot on modern digital cameras. full stop. but the camera is just a tool —
                  what matters is how you see, how you move, and what you do with the image afterward.
                  we use digital because it lets us focus entirely on the moment rather than the mechanics.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={100}>
              <div style={{ marginBottom: 64 }}>
                <p className="t-eyebrow" style={{ marginBottom: 20 }}>the intention</p>
                <p className="t-body">
                  we shoot with analog discipline — fewer frames, more thought. rather than firing
                  hundreds of shots and sorting later, we slow down, read the light, and wait for the
                  moment. that intention shows up in the final image in ways that volume shooting never can.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={200}>
              <div>
                <p className="t-eyebrow" style={{ marginBottom: 20 }}>the edit</p>
                <p className="t-body">
                  the grain, warmth, and cinematic depth you see in our work aren&apos;t presets or filters.
                  every image is edited individually — color graded by hand, grain added deliberately,
                  highlights and shadows shaped to match the feeling of the moment.
                  it&apos;s the analog aesthetic achieved through modern craft.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Looks expanded */}
      <section style={{ padding: '120px 0', backgroundColor: 'var(--linen)' }}>
        <div className="container-site">
          <AnimateIn>
            <span className="t-eyebrow" style={{ marginBottom: 48, display: 'block' }}>our signature looks</span>
          </AnimateIn>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
            {looksExpanded.map((look, i) => (
              <AnimateIn key={look.name} delay={i * 80}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 64,
                    alignItems: 'center',
                  }}
                >
                  <div style={{ order: i % 2 === 0 ? 1 : 2, aspectRatio: '3/4', overflow: 'hidden' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={look.src}
                      alt={look.name}
                      className="photo"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                    <h3 className="t-h3">{look.name}</h3>
                    <span className="t-caption" style={{ display: 'block', marginTop: 8 }}>{look.feel}</span>
                    <p className="t-body" style={{ marginTop: 24 }}>{look.description}</p>
                    <span className="t-caption" style={{ display: 'block', marginTop: 16 }}>{look.use}</span>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: 'var(--bone)', padding: '120px 0' }}>
        <div className="container-site">
          <AnimateIn>
            <span className="t-eyebrow" style={{ marginBottom: 48, display: 'block' }}>common questions</span>
          </AnimateIn>
          <div style={{ maxWidth: 720 }}>
            {faq.map((item, i) => (
              <AnimateIn key={i} delay={i * 60}>
                <div
                  style={{
                    borderTop: i === 0 ? '1px solid var(--stone)' : 'none',
                    borderBottom: '1px solid var(--stone)',
                    padding: '28px 0',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 300,
                      fontStyle: 'italic',
                      fontSize: 18,
                      color: 'var(--ink)',
                      marginBottom: 12,
                    }}
                  >
                    {item.q}
                  </p>
                  <p className="t-body" style={{ color: 'var(--graphite)' }}>{item.a}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--linen)', padding: '120px 0', textAlign: 'center' }}>
        <div className="container-site">
          <AnimateIn>
            <h2 className="t-h1">ready to book a session?</h2>
            <div style={{ marginTop: 40 }}>
              <Link href="/quiz" className="btn-accent">
                find your look
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  )
}
