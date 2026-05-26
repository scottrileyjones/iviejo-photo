import AnimateIn from '@/components/shared/AnimateIn'

const stocks = [
  {
    name: 'Kodak Portra 400',
    description: 'for couples and portraits. warm skin tones, forgiving latitude.',
    iso: 'ISO 400',
    format: '35mm · medium format',
    use: 'portraits · couples · golden hour',
  },
  {
    name: 'Kodak Ektar 100',
    description: 'for landscapes and utah red rock. vivid, made for outdoor light.',
    iso: 'ISO 100',
    format: '35mm',
    use: 'landscape · outdoor · high contrast',
  },
  {
    name: 'Ilford HP5+',
    description: 'black and white. high contrast. raw and honest.',
    iso: 'ISO 400',
    format: '35mm · medium format',
    use: 'b&w · editorial · street',
  },
]

export default function FilmStocks() {
  return (
    <section style={{ backgroundColor: 'var(--linen)', padding: '120px 0' }}>
      <div className="container-site">
        <AnimateIn>
          <span className="t-eyebrow">the stocks we trust</span>
        </AnimateIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 0,
            marginTop: 48,
          }}
        >
          {stocks.map((stock, i) => (
            <AnimateIn key={stock.name} delay={i * 80}>
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
                <h3 className="t-h3">{stock.name}</h3>
                <p className="t-body" style={{ marginTop: 16, color: 'var(--graphite)' }}>
                  {stock.description}
                </p>
                <div style={{ marginTop: 24 }}>
                  <span className="t-caption" style={{ display: 'block' }}>{stock.iso} · {stock.format}</span>
                  <span className="t-caption" style={{ display: 'block', marginTop: 4 }}>{stock.use}</span>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
