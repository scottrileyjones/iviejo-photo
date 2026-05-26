import Link from 'next/link'
import ImageCard from '@/components/ui/ImageCard'
import AnimateIn from '@/components/shared/AnimateIn'

const featured = [
  {
    title: 'Marisol',
    caption: 'Oaxaca · Portra 400',
    year: 2024,
    src: '/placeholder-warm.svg',
    href: '/gallery',
  },
  {
    title: 'Carter & Elise',
    caption: 'Moab, Utah · Ektar 100',
    year: 2024,
    src: '/placeholder-cool.svg',
    href: '/gallery',
  },
  {
    title: 'The Andersons',
    caption: 'Salt Lake City · HP5+',
    year: 2025,
    src: '/placeholder-warm.svg',
    href: '/gallery',
    bw: true,
  },
  {
    title: 'Priya',
    caption: 'Bonneville Salt Flats · Gold 200',
    year: 2024,
    src: '/placeholder-amber.svg',
    href: '/gallery',
  },
  {
    title: 'James & Sol',
    caption: 'Arches NP · Portra 400',
    year: 2025,
    src: '/placeholder-amber.svg',
    href: '/gallery',
  },
  {
    title: 'Margot',
    caption: 'Park City · HP5+',
    year: 2025,
    src: '/placeholder-cool.svg',
    href: '/gallery',
    bw: true,
  },
]

export default function FeaturedGalleries() {
  return (
    <section style={{ padding: '120px 0', backgroundColor: 'var(--bone)' }}>
      <div className="container-site">
        <AnimateIn>
          <span className="t-eyebrow">selected work</span>
        </AnimateIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 32,
            marginTop: 48,
          }}
        >
          {featured.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 60}>
              <ImageCard
                src={item.src}
                alt={item.title}
                title={item.title}
                caption={item.caption}
                year={item.year}
                href={item.href}
                bw={item.bw}
              />
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={200}>
          <div style={{ marginTop: 64, textAlign: 'center' }}>
            <Link href="/gallery" className="t-link">
              all work →
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
