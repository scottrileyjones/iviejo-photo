'use client'

import { useState } from 'react'
import Link from 'next/link'
import AnimateIn from '@/components/shared/AnimateIn'
import Chip from '@/components/ui/Chip'

const categories = ['all', 'portrait', 'couples', 'family', 'graduation', 'events', 'b&w']

export interface ShootItem {
  title: string
  category: string
  location: string
  year: number
  src: string
  slug: string
  bw?: boolean
}

interface Props {
  shoots: ShootItem[]
}

export default function GalleryGrid({ shoots }: Props) {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? shoots : shoots.filter((s) => s.category === active)

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 64 }}>
        {categories.map((cat) => (
          <Chip key={cat} label={cat} active={active === cat} onClick={() => setActive(cat)} />
        ))}
      </div>

      <div className="gallery-masonry">
        {filtered.map((shoot, i) => (
          <AnimateIn key={shoot.slug} delay={i * 40}>
            <Link href={`/gallery/${shoot.slug}`} style={{ display: 'block', textDecoration: 'none', marginBottom: 4, breakInside: 'avoid' }}>
              <div style={{ overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={`img-hover ${shoot.bw ? 'photo-bw' : 'photo'}`}
                  src={shoot.src}
                  alt={shoot.title}
                  loading="lazy"
                  style={{ width: '100%', display: 'block' }}
                />
              </div>
              <div style={{ padding: '12px 0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 4 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 18, color: 'var(--ink)', letterSpacing: '-0.01em' }}>{shoot.title}</span>
                <span className="t-caption">{shoot.location} · {shoot.year}</span>
              </div>
            </Link>
          </AnimateIn>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="t-body" style={{ color: 'var(--slate)', padding: '80px 0' }}>nothing here yet — check back soon.</p>
      )}
    </div>
  )
}
