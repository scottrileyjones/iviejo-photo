import AnimateIn from '@/components/shared/AnimateIn'

const looks = [
  {
    name: 'warm & golden',
    description: 'soft skin tones, rich shadows, golden warmth. our go-to look for couples and families in natural light.',
    feel: 'intimate · timeless',
    use: 'portraits · couples · golden hour',
  },
  {
    name: 'vivid & saturated',
    description: 'bold color, high contrast, made for open skies and utah red rock. when the landscape is as much the subject as the people.',
    feel: 'dramatic · expansive',
    use: 'landscape · outdoor · high contrast',
  },
  {
    name: 'editorial b&w',
    description: 'stripped of color, stripped of distraction. high contrast black and white that finds the moment and holds it.',
    feel: 'raw · honest',
    use: 'b&w · editorial · timeless',
  },
]

export default function FilmStocks() {
  return (
    <section style={{ backgroundColor: 'var(--linen)', padding: '120px 0' }}>
      <div className="container-site">
        <AnimateIn>
          <span className="t-eyebrow">our signature looks</span>
        </AnimateIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 0,
            marginTop: 48,
          }}
        >
          {looks.map((look, i) => (
            <AnimateIn key={look.name} delay={i * 80}>
              <div
                style={{
                  borderTop: '1px solid var(--stone)',
                  paddingTop: 32,
                  paddingBottom: 40,
                  paddingRight: i < 2 ? 40 : 0,
                  borderRight: i < 2 ? '1px solid var(--putty)' : 'none',
                  paddingLeft: i > 0 ? 40 : 0,
                }}
              >
                <h3 className="t-h3">{look.name}</h3>
                <p className="t-body" style={{ marginTop: 16, color: 'var(--graphite)' }}>
                  {look.description}
                </p>
                <div style={{ marginTop: 24 }}>
                  <span className="t-caption" style={{ display: 'block' }}>{look.feel}</span>
                  <span className="t-caption" style={{ display: 'block', marginTop: 4 }}>{look.use}</span>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
