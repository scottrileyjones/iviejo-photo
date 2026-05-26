'use client'

import { useState } from 'react'
import Link from 'next/link'
import AnimateIn from '@/components/shared/AnimateIn'
import Chip from '@/components/ui/Chip'

const categories = ['all', 'portrait', 'couples', 'family', 'graduation', 'events', 'b&w']

const shoots = [
  { title: 'Marisol', category: 'portrait', location: 'Oaxaca', year: 2024, src: 'https://picsum.photos/seed/iviejo-g1/600/800', slug: 'marisol-oaxaca-2024' },
  { title: 'Carter & Elise', category: 'couples', location: 'Moab, Utah', year: 2024, src: 'https://picsum.photos/seed/iviejo-g2/600/750', slug: 'carter-elise-moab-2024' },
  { title: 'The Andersons', category: 'family', location: 'Salt Lake City', year: 2025, src: 'https://picsum.photos/seed/iviejo-g3/600/900', slug: 'andersons-slc-2025', bw: true },
  { title: 'Priya', category: 'graduation', location: 'Bonneville Salt Flats', year: 2024, src: 'https://picsum.photos/seed/iviejo-g4/600/800', slug: 'priya-saltflats-2024' },
  { title: 'James & Sol', category: 'couples', location: 'Arches NP', year: 2025, src: 'https://picsum.photos/seed/iviejo-g5/600/750', slug: 'james-sol-arches-2025' },
  { title: 'Margot', category: 'portrait', location: 'Park City', year: 2025, src: 'https://picsum.photos/seed/iviejo-g6/600/800', slug: 'margot-parkcity-2025', bw: true },
  { title: 'Rivera Family', category: 'family', location: 'Zion Canyon', year: 2025, src: 'https://picsum.photos/seed/iviejo-g7/600/900', slug: 'rivera-zion-2025' },
  { title: 'Nadia', category: 'graduation', location: 'University of Utah', year: 2024, src: 'https://picsum.photos/seed/iviejo-g8/600/750', slug: 'nadia-uofu-2024' },
  { title: 'Cedar Mesa', category: 'b&w', location: 'Bears Ears', year: 2025, src: 'https://picsum.photos/seed/iviejo-g9/600/800', slug: 'cedar-mesa-2025', bw: true },
]

export default function GalleryGrid() {
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
