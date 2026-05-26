import Link from 'next/link'
import AnimateIn from '@/components/shared/AnimateIn'

const featured = [
  {
    title: 'Marisol',
    caption: 'Oaxaca · warm & golden',
    year: 2024,
    src: '/placeholder-warm.svg',
    href: '/gallery',
  },
  {
    title: 'Carter & Elise',
    caption: 'Moab, Utah · vivid & saturated',
    year: 2024,
    src: '/placeholder-cool.svg',
    href: '/gallery',
  },
  {
    title: 'The Andersons',
    caption: 'Salt Lake City · editorial b&w',
    year: 2025,
    src: '/placeholder-bw.svg',
    href: '/gallery',
  },
  {
    title: 'Priya',
    caption: 'Bonneville Salt Flats · warm & golden',
    year: 2024,
    src: '/placeholder-amber.svg',
    href: '/gallery',
  },
  {
    title: 'James & Sol',
    caption: 'Arches NP · vivid & saturated',
    year: 2025,
    src: '/placeholder-amber.svg',
    href: '/gallery',
  },
]

export default function FeaturedGalleries() {
  return (
    <section style={{ backgroundColor: 'var(--bone)', paddingBottom: 160 }}>
      {/* Section label */}
      <div className="container-site" style={{ paddingBottom: 40 }}>
        <AnimateIn>
          <span className="t-eyebrow">selected work</span>
        </AnimateIn>
      </div>

      {/* Hero row: large left + two stacked right */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 4 }}>
        <AnimateIn>
          <Link href={featured[0].href} style={{ display: 'block', textDecoration: 'none' }}>
            <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/5' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured[0].src}
                alt={featured[0].title}
                className="photo"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(26,23,20,0.55) 0%, transparent 50%)',
                }}
              />
              <div style={{ position: 'absolute', bottom: 32, left: 32 }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 28, color: 'var(--bone)', letterSpacing: '-0.02em', lineHeight: 1 }}>
                  {featured[0].title}
                </p>
                <p className="t-caption" style={{ color: 'rgba(246,242,236,0.7)', marginTop: 6 }}>{featured[0].caption}</p>
              </div>
            </div>
          </Link>
        </AnimateIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {[featured[1], featured[2]].map((item, i) => (
            <AnimateIn key={item.title} delay={i * 80}>
              <Link href={item.href} style={{ display: 'block', textDecoration: 'none' }}>
                <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/5' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.title}
                    className="photo"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(26,23,20,0.55) 0%, transparent 60%)',
                    }}
                  />
                  <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 18, color: 'var(--bone)', letterSpacing: '-0.01em', lineHeight: 1 }}>
                      {item.title}
                    </p>
                    <p className="t-caption" style={{ color: 'rgba(246,242,236,0.7)', marginTop: 4 }}>{item.caption}</p>
                  </div>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>

      {/* Second row: wide + narrow */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 4, marginTop: 4 }}>
        {[featured[3], featured[4]].map((item, i) => (
          <AnimateIn key={item.title} delay={i * 80}>
            <Link href={item.href} style={{ display: 'block', textDecoration: 'none' }}>
              <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: i === 0 ? '3/4' : '16/9' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="photo"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(26,23,20,0.55) 0%, transparent 60%)',
                  }}
                />
                <div style={{ position: 'absolute', bottom: 24, left: 24 }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 20, color: 'var(--bone)', letterSpacing: '-0.01em', lineHeight: 1 }}>
                    {item.title}
                  </p>
                  <p className="t-caption" style={{ color: 'rgba(246,242,236,0.7)', marginTop: 6 }}>{item.caption}</p>
                </div>
              </div>
            </Link>
          </AnimateIn>
        ))}
      </div>

      <div className="container-site">
        <AnimateIn delay={100}>
          <div style={{ marginTop: 64 }}>
            <Link href="/gallery" className="t-link">
              all work →
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
