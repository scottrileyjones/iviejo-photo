import Link from 'next/link'
import AnimateIn from '@/components/shared/AnimateIn'

const featured = [
  { title: 'Marisol', caption: 'Oaxaca · warm & golden', year: 2024, src: 'https://picsum.photos/id/64/800/1000', href: '/gallery' },
  { title: 'Carter & Elise', caption: 'Moab, Utah · vivid & saturated', year: 2024, src: 'https://picsum.photos/id/659/800/1000', href: '/gallery' },
  { title: 'The Andersons', caption: 'Salt Lake City · editorial b&w', year: 2025, src: 'https://picsum.photos/id/177/800/1000', href: '/gallery' },
  { title: 'Priya', caption: 'Bonneville Salt Flats · warm & golden', year: 2024, src: 'https://picsum.photos/id/453/800/1000', href: '/gallery' },
  { title: 'James & Sol', caption: 'Arches NP · vivid & saturated', year: 2025, src: 'https://picsum.photos/id/91/800/1000', href: '/gallery' },
]

function ImageOverlay({ src, title, caption, href, size = 'md' }: { src: string; title: string; caption: string; href: string; size?: 'lg' | 'md' | 'sm' }) {
  const fontSize = size === 'lg' ? 28 : size === 'md' ? 20 : 16
  return (
    <Link href={href} style={{ display: 'block', textDecoration: 'none' }}>
      <div style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100%' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={title} className="photo" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,23,20,0.6) 0%, transparent 55%)' }} />
        <div style={{ position: 'absolute', bottom: size === 'sm' ? 16 : 24, left: size === 'sm' ? 16 : 24 }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize, color: 'var(--bone)', letterSpacing: '-0.02em', lineHeight: 1 }}>{title}</p>
          <p className="t-caption" style={{ color: 'rgba(246,242,236,0.65)', marginTop: 6 }}>{caption}</p>
        </div>
      </div>
    </Link>
  )
}

export default function FeaturedGalleries() {
  return (
    <section style={{ backgroundColor: 'var(--bone)', paddingBottom: 120 }}>
      <div className="container-site" style={{ paddingBottom: 32 }}>
        <AnimateIn><span className="t-eyebrow">selected work</span></AnimateIn>
      </div>

      {/* Hero row */}
      <AnimateIn>
        <div className="grid-featured-main">
          <div style={{ aspectRatio: '4/5' }}>
            <ImageOverlay src={featured[0].src} title={featured[0].title} caption={featured[0].caption} href={featured[0].href} size="lg" />
          </div>
          <div className="hide-mobile" style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {[featured[1], featured[2]].map((item) => (
              <div key={item.title} style={{ flex: 1 }}>
                <ImageOverlay src={item.src} title={item.title} caption={item.caption} href={item.href} size="sm" />
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>

      {/* Second row */}
      <AnimateIn delay={80}>
        <div className="grid-featured-secondary hide-mobile">
          {[featured[3], featured[4]].map((item, i) => (
            <div key={item.title} style={{ aspectRatio: i === 0 ? '3/4' : '16/9' }}>
              <ImageOverlay src={item.src} title={item.title} caption={item.caption} href={item.href} size="md" />
            </div>
          ))}
        </div>
      </AnimateIn>

      <div className="container-site">
        <AnimateIn delay={100}>
          <div style={{ marginTop: 48 }}>
            <Link href="/gallery" className="t-link">all work →</Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
