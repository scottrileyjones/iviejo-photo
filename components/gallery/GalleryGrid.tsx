'use client'

import { useState } from 'react'
import Link from 'next/link'
import AnimateIn from '@/components/shared/AnimateIn'
import Chip from '@/components/ui/Chip'

const categories = ['all', 'portrait', 'couples', 'family', 'graduation', 'events', 'b&w']

const shoots = [
  { title: 'Marisol', category: 'portrait', location: 'Oaxaca', look: 'warm & golden', year: 2024, src: '/placeholder-warm.svg', slug: 'marisol-oaxaca-2024' },
  { title: 'Carter & Elise', category: 'couples', location: 'Moab, Utah', look: 'vivid & saturated', year: 2024, src: '/placeholder-cool.svg', slug: 'carter-elise-moab-2024' },
  { title: 'The Andersons', category: 'family', location: 'Salt Lake City', look: 'editorial b&w', year: 2025, src: '/placeholder-bw.svg', slug: 'andersons-slc-2025', bw: true },
  { title: 'Priya', category: 'graduation', location: 'Bonneville Salt Flats', look: 'warm & golden', year: 2024, src: '/placeholder-amber.svg', slug: 'priya-saltflats-2024' },
  { title: 'James & Sol', category: 'couples', location: 'Arches NP', look: 'vivid & saturated', year: 2025, src: '/placeholder-amber.svg', slug: 'james-sol-arches-2025' },
  { title: 'Margot', category: 'portrait', location: 'Park City', look: 'editorial b&w', year: 2025, src: '/placeholder-cool.svg', slug: 'margot-parkcity-2025', bw: true },
  { title: 'Rivera Family', category: 'family', location: 'Zion Canyon', look: 'warm & golden', year: 2025, src: '/placeholder-warm.svg', slug: 'rivera-zion-2025' },
  { title: 'Nadia', category: 'graduation', location: 'University of Utah', look: 'vivid & saturated', year: 2024, src: '/placeholder-bw.svg', slug: 'nadia-uofu-2024' },
  { title: 'Cedar Mesa', category: 'b&w', location: 'Bears Ears', look: 'editorial b&w', year: 2025, src: '/placeholder-bw.svg', slug: 'cedar-mesa-2025', bw: true },
]

// Alternating aspect ratios for editorial feel
const aspectRatios = ['3/4', '4/5', '2/3', '4/5', '3/4', '2/3', '4/5', '3/4', '4/5']

export default function GalleryGrid() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? shoots : shoots.filter((s) => s.category === active)

  return (
    <div>
      {/* Filters */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 80 }}>
        {categories.map((cat) => (
          <Chip key={cat} label={cat} active={active === cat} onClick={() => setActive(cat)} />
        ))}
      </div>

      {/* Editorial grid — two columns, images at varying heights */}
      <div
        style={{
          columns: 2,
          columnGap: 4,
        }}
      >
        {filtered.map((shoot, i) => (
          <AnimateIn key={shoot.slug} delay={i * 40}>
            <Link
              href={`/gallery/${shoot.slug}`}
              style={{ display: 'block', textDecoration: 'none', marginBottom: 4, breakInside: 'avoid' }}
            >
              <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: aspectRatios[i % aspectRatios.length] }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={`img-hover ${shoot.bw ? 'photo-bw' : 'photo'}`}
                  src={shoot.src}
                  alt={shoot.title}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(26,23,20,0.6) 0%, transparent 50%)',
                    opacity: 0,
                    transition: 'opacity 300ms ease',
                  }}
                  className="gallery-overlay"
                />
              </div>
              <div style={{ padding: '12px 0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 18, color: 'var(--ink)', letterSpacing: '-0.01em' }}>
                  {shoot.title}
                </span>
                <span className="t-caption">{shoot.location} · {shoot.year}</span>
              </div>
            </Link>
          </AnimateIn>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="t-body" style={{ color: 'var(--slate)', padding: '80px 0' }}>
          nothing here yet — check back soon.
        </p>
      )}
    </div>
  )
}
