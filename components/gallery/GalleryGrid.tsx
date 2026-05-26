'use client'

import { useState } from 'react'
import Chip from '@/components/ui/Chip'
import ImageCard from '@/components/ui/ImageCard'
import AnimateIn from '@/components/shared/AnimateIn'

const categories = ['all', 'portrait', 'couples', 'family', 'graduation', 'events', 'b&w']

const shoots = [
  {
    title: 'Marisol',
    category: 'portrait',
    location: 'Oaxaca',
    film_stock: 'Portra 400',
    year: 2024,
    src: '/placeholder-warm.svg',
    slug: 'marisol-oaxaca-2024',
  },
  {
    title: 'Carter & Elise',
    category: 'couples',
    location: 'Moab, Utah',
    film_stock: 'Ektar 100',
    year: 2024,
    src: '/placeholder-cool.svg',
    slug: 'carter-elise-moab-2024',
  },
  {
    title: 'The Andersons',
    category: 'family',
    location: 'Salt Lake City',
    film_stock: 'HP5+',
    year: 2025,
    src: '/placeholder-warm.svg',
    slug: 'andersons-slc-2025',
    bw: true,
  },
  {
    title: 'Priya',
    category: 'graduation',
    location: 'Bonneville Salt Flats',
    film_stock: 'Gold 200',
    year: 2024,
    src: '/placeholder-amber.svg',
    slug: 'priya-saltflats-2024',
  },
  {
    title: 'James & Sol',
    category: 'couples',
    location: 'Arches NP',
    film_stock: 'Portra 400',
    year: 2025,
    src: '/placeholder-amber.svg',
    slug: 'james-sol-arches-2025',
  },
  {
    title: 'Margot',
    category: 'portrait',
    location: 'Park City',
    film_stock: 'HP5+',
    year: 2025,
    src: '/placeholder-cool.svg',
    slug: 'margot-parkcity-2025',
    bw: true,
  },
  {
    title: 'Rivera Family',
    category: 'family',
    location: 'Zion Canyon',
    film_stock: 'Portra 400',
    year: 2025,
    src: '/placeholder-warm.svg',
    slug: 'rivera-zion-2025',
  },
  {
    title: 'Nadia',
    category: 'graduation',
    location: 'University of Utah',
    film_stock: 'Ektar 100',
    year: 2024,
    src: '/placeholder-bw.svg',
    slug: 'nadia-uofu-2024',
  },
  {
    title: 'Cedar Mesa',
    category: 'b&w',
    location: 'Bears Ears',
    film_stock: 'HP5+',
    year: 2025,
    src: '/placeholder-bw.svg',
    slug: 'cedar-mesa-2025',
    bw: true,
  },
]

const categoryMap: Record<string, string> = {
  all: 'all',
  portrait: 'portrait',
  couples: 'couples',
  family: 'family',
  graduation: 'graduation',
  events: 'events',
  'b&w': 'b&w',
}

export default function GalleryGrid() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? shoots
    : shoots.filter((s) => s.category === categoryMap[active])

  return (
    <div>
      {/* Filters */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 64 }}>
        {categories.map((cat) => (
          <Chip
            key={cat}
            label={cat}
            active={active === cat}
            onClick={() => setActive(cat)}
          />
        ))}
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 40,
        }}
      >
        {filtered.map((shoot, i) => (
          <AnimateIn key={shoot.slug} delay={i * 40}>
            <ImageCard
              src={shoot.src}
              alt={shoot.title}
              title={shoot.title}
              caption={`${shoot.location} · ${shoot.film_stock}`}
              year={shoot.year}
              href={`/gallery/${shoot.slug}`}
              bw={shoot.bw}
            />
          </AnimateIn>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="t-body" style={{ color: 'var(--slate)', textAlign: 'center', padding: '80px 0' }}>
          nothing here yet — check back soon.
        </p>
      )}
    </div>
  )
}
