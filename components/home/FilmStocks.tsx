import AnimateIn from '@/components/shared/AnimateIn'

const looks = [
  { name: 'warm\n& golden', feel: 'intimate · timeless', src: 'https://picsum.photos/seed/iviejo-warm/600/800' },
  { name: 'vivid\n& saturated', feel: 'dramatic · expansive', src: 'https://picsum.photos/seed/iviejo-vivid/600/800' },
  { name: 'editorial\nb&w', feel: 'raw · honest', src: 'https://picsum.photos/seed/iviejo-bw/600/800' },
]

export default function FilmStocks() {
  return (
    <section style={{ backgroundColor: 'var(--bone)', paddingBottom: 120 }}>
      <div className="container-site" style={{ marginBottom: 32 }}>
        <AnimateIn><span className="t-eyebrow">our signature looks</span></AnimateIn>
      </div>

      <div className="grid-3col">
        {looks.map((look, i) => (
          <AnimateIn key={look.name} delay={i * 80}>
            <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={look.src} alt={look.name} className="photo" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,23,20,0.72) 0%, transparent 55%)' }} />
              <div style={{ position: 'absolute', bottom: 28, left: 24, right: 24 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(22px, 2.5vw, 32px)', color: 'var(--bone)', letterSpacing: '-0.02em', lineHeight: 1.05, whiteSpace: 'pre-line' }}>
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
