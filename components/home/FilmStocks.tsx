import AnimateIn from '@/components/shared/AnimateIn'

const looks = [
  {
    name: 'warm\n& golden',
    feel: 'intimate · timeless',
    description: 'soft skin tones, rich shadows, golden warmth.',
    src: '/placeholder-warm.svg',
  },
  {
    name: 'vivid\n& saturated',
    feel: 'dramatic · expansive',
    description: 'bold color, high contrast, made for open skies and red rock.',
    src: '/placeholder-amber.svg',
  },
  {
    name: 'editorial\nb&w',
    feel: 'raw · honest',
    description: 'high-contrast black and white that finds the moment and holds it.',
    src: '/placeholder-bw.svg',
  },
]

export default function FilmStocks() {
  return (
    <section style={{ backgroundColor: 'var(--bone)', paddingBottom: 160 }}>
      <div className="container-site" style={{ marginBottom: 40 }}>
        <AnimateIn>
          <span className="t-eyebrow">our signature looks</span>
        </AnimateIn>
      </div>

      {/* Three full-bleed panels, no gap */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
        {looks.map((look, i) => (
          <AnimateIn key={look.name} delay={i * 80}>
            <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={look.src}
                alt={look.name}
                className="photo"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(26,23,20,0.7) 0%, transparent 55%)',
                }}
              />
              <div style={{ position: 'absolute', bottom: 32, left: 28, right: 28 }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 300,
                    fontSize: 'clamp(22px, 2.5vw, 32px)',
                    color: 'var(--bone)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.05,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {look.name}
                </h3>
                <p className="t-caption" style={{ color: 'rgba(246,242,236,0.65)', marginTop: 10 }}>{look.feel}</p>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  )
}
