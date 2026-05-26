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
    src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80',
    slug: 'marisol-oaxaca-2024',
  },
  {
    title: 'Carter & Elise',
    category: 'couples',
    location: 'Moab, Utah',
    film_stock: 'Ektar 100',
    year: 2024,
    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
    slug: 'carter-elise-moab-2024',
  },
  {
    title: 'The Andersons',
    category: 'family',
    location: 'Salt Lake City',
    film_stock: 'HP5+',
    year: 2025,
    src: 'https://images.unsplash.com/photo-1511895426328-dc8714191011?w=800&q=80',
    slug: 'andersons-slc-2025',
    bw: true,
  },
  {
    title: 'Priya',
    category: 'graduation',
    location: 'Bonneville Salt Flats',
    film_stock: 'Gold 200',
    year: 2024,
    src: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&q=80',
    slug: 'priya-saltflats-2024',
  },
  {
    title: 'James & Sol',
    category: 'couples',
    location: 'Arches NP',
    film_stock: 'Portra 400',
    year: 2025,
    src: 'https://images.unsplash.com/photo-1502252430442-aac78f397426?w=800&q=80',
    slug: 'james-sol-arches-2025',
  },
  {
    title: 'Margot',
    category: 'portrait',
    location: 'Park City',
    film_stock: 'HP5+',
    year: 2025,
    src: 'https://images.unsplash.com/photo-1523264766099-e4c6aff2e2cf?w=800&q=80',
    slug: 'margot-parkcity-2025',
    bw: true,
  },
  {
    title: 'Rivera Family',
    category: 'family',
    location: 'Zion Canyon',
    film_stock: 'Portra 400',
    year: 2025,
    src: 'https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=800&q=80',
    slug: 'rivera-zion-2025',
  },
  {
    title: 'Nadia',
    category: 'graduation',
    location: 'University of Utah',
    film_stock: 'Ektar 100',
    year: 2024,
    src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80',
    slug: 'nadia-uofu-2024',
  },
  {
    title: 'Cedar Mesa',
    category: 'b&w',
    location: 'Bears Ears',
    film_stock: 'HP5+',
    year: 2025,
    src: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80',
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
