import Link from 'next/link'

interface ImageCardProps {
  src: string
  alt: string
  title: string
  caption?: string
  year?: number
  href?: string
  bw?: boolean
}

export default function ImageCard({ src, alt, title, caption, year, href, bw }: ImageCardProps) {
  const inner = (
    <div style={{ width: '100%' }}>
      <div style={{ aspectRatio: '4/5', overflow: 'hidden', borderRadius: 'var(--r-0)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={`img-hover ${bw ? 'photo-bw' : 'photo'}`}
          src={src}
          alt={alt}
          loading="lazy"
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 12 }}>
        <span className="t-h3" style={{ fontSize: 18 }}>{title}</span>
        {year && <span className="t-caption">{year}</span>}
      </div>
      {caption && (
        <span className="t-caption" style={{ display: 'block', marginTop: 4 }}>{caption}</span>
      )}
    </div>
  )

  if (href) {
    return (
      <Link href={href} style={{ textDecoration: 'none', display: 'block' }}>
        {inner}
      </Link>
    )
  }

  return inner
}
