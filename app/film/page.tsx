import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateIn from '@/components/shared/AnimateIn'

export const metadata: Metadata = {
  title: 'why film',
  description: 'why analog film photography still matters. the grain, the latitude, the physicality. it is not a filter.',
}

const faq = [
  {
    q: 'how long until i get my photos?',
    a: 'typically 4–6 weeks. film takes time. it\'s worth it.',
  },
  {
    q: 'will they look like instagram filters?',
    a: 'no. better.',
  },
  {
    q: 'is film more expensive?',
    a: 'yes. a roll of portra 400 is $25. development is $20. we factor this in honestly.',
  },
  {
    q: 'what if something goes wrong with the film?',
    a: 'we shoot redundant rolls for every session and use a professional lab with a 20-year track record.',
  },
]

const stocksExpanded = [
  {
    name: 'Kodak Portra 400',
    iso: 'ISO 400',
    format: '35mm · medium format',
    use: 'portraits · couples · golden hour',
    description: 'the most forgiving film stock we know. warm skin tones, wide latitude — you can pull a stop under or push a stop over and it handles it gracefully. our go-to for couples and family sessions.',
    src: '/placeholder-cool.svg',
  },
  {
    name: 'Kodak Ektar 100',
    iso: 'ISO 100',
    format: '35mm',
    use: 'landscape · outdoor · high contrast',
    description: 'vivid, saturated, precise. for utah red rock and open sky sessions where we want the landscape to be as much a subject as the people. needs light — shoots beautifully in full sun.',
    src: '/placeholder-amber.svg',
  },
  {
    name: 'Ilford HP5+',
    iso: 'ISO 400',
    format: '35mm · medium format',
    use: 'b&w · editorial · street',
    description: 'raw and honest. we push this stock one stop for high contrast and grain. black and white photography has a timelessness that color can\'t replicate — it removes distraction and finds the moment.',
    src: '/placeholder-cool.svg',
  },
]

export default function FilmPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ position: 'relative', height: '70vh', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/placeholder-amber.svg"
          alt="film photography"
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
              why does it matter<br />that it&apos;s real film?
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
                <p className="t-eyebrow" style={{ marginBottom: 20 }}>slowing down</p>
                <p className="t-body">
                  film slows everything down. 36 exposures. every frame is a decision.
                  when you can&apos;t just spray and pray, you pay attention differently —
                  to the light, to the subject, to the moment about to happen.
                  that attention shows up in the final print.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={100}>
              <div style={{ marginBottom: 64 }}>
                <p className="t-eyebrow" style={{ marginBottom: 20 }}>the physics of light</p>
                <p className="t-body">
                  film responds to light differently. the latitude, the grain, the color —
                  these are physical properties of silver halide crystals, not a slider in lightroom.
                  the warmth in a portra portrait or the grain in an hp5 black and white
                  can&apos;t be fully replicated digitally because they aren&apos;t stylistic choices.
                  they are the material itself.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={200}>
              <div>
                <p className="t-eyebrow" style={{ marginBottom: 20 }}>the negative</p>
                <p className="t-body">
                  a film photograph has a body. a negative. something that exists in the world.
                  your great-grandchildren could, in principle, hold the original negative and print
                  a new photograph from it. there is no digital equivalent of that. that matters.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Film vs. Digital */}
      <section style={{ backgroundColor: 'var(--linen)', padding: '120px 0' }}>
        <div className="container-site">
          <AnimateIn>
            <span className="t-eyebrow" style={{ marginBottom: 48, display: 'block' }}>film vs. digital — same scene</span>
          </AnimateIn>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            <AnimateIn>
              <div>
                <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/placeholder-warm.svg"
                    alt="film"
                    className="photo"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <p className="t-caption" style={{ marginTop: 12 }}>[ film ]</p>
              </div>
            </AnimateIn>
            <AnimateIn delay={80}>
              <div>
                <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/placeholder-bw.svg"
                    alt="digital equivalent"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.05) saturate(1.15) brightness(1.05)' }}
                  />
                </div>
                <p className="t-caption" style={{ marginTop: 12 }}>[ digital ]</p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Stocks expanded */}
      <section style={{ padding: '120px 0', backgroundColor: 'var(--bone)' }}>
        <div className="container-site">
          <AnimateIn>
            <span className="t-eyebrow" style={{ marginBottom: 48, display: 'block' }}>the stocks we trust</span>
          </AnimateIn>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
            {stocksExpanded.map((stock, i) => (
              <AnimateIn key={stock.name} delay={i * 80}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                    gap: 64,
                    alignItems: 'center',
                  }}
                >
                  <div style={{ order: i % 2 === 0 ? 1 : 2, aspectRatio: '3/4', overflow: 'hidden' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={stock.src}
                      alt={stock.name}
                      className="photo"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                    <h3 className="t-h3">{stock.name}</h3>
                    <span className="t-caption" style={{ display: 'block', marginTop: 8 }}>
                      {stock.iso} · {stock.format}
                    </span>
                    <p className="t-body" style={{ marginTop: 24 }}>{stock.description}</p>
                    <span className="t-caption" style={{ display: 'block', marginTop: 16 }}>{stock.use}</span>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: 'var(--linen)', padding: '120px 0' }}>
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
      <section style={{ backgroundColor: 'var(--bone)', padding: '120px 0', textAlign: 'center' }}>
        <div className="container-site">
          <AnimateIn>
            <h2 className="t-h1">ready to shoot on film?</h2>
            <div style={{ marginTop: 40 }}>
              <Link href="/quiz" className="btn-accent">
                book a film session
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  )
}
