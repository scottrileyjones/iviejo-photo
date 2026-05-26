'use client'

import { useState, useEffect } from 'react'
import AnimateIn from '@/components/shared/AnimateIn'

const testimonials = [
  {
    quote: 'we didn\'t realize what we were missing until we got the prints back. there\'s a warmth in these photographs that no phone camera can touch.',
    attribution: '— Elise & Carter, shot on Portra 400',
  },
  {
    quote: 'the waiting was hard. the photographs were worth every week of it. our family now has something to hand down.',
    attribution: '— The Anderson Family, shot on HP5+',
  },
  {
    quote: 'i wanted something that didn\'t look like every other senior shoot. this delivered. it looks like it was taken somewhere in the past, in the best way.',
    attribution: '— Margot, shot on Ektar 100',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const t = testimonials[current]

  return (
    <section style={{ backgroundColor: 'var(--bone)', padding: '120px 0' }}>
      <div className="container-site">
        <AnimateIn>
          <div style={{ maxWidth: 720 }}>
            <blockquote
              key={current}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: 'clamp(22px, 3vw, 32px)',
                lineHeight: 1.3,
                color: 'var(--ink)',
                letterSpacing: '-0.015em',
                transition: 'opacity 400ms var(--ease-out)',
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <p className="t-caption" style={{ marginTop: 24 }}>
              {t.attribution}
            </p>
          </div>
        </AnimateIn>

        <div style={{ display: 'flex', gap: 8, marginTop: 40 }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? 24 : 8,
                height: 2,
                backgroundColor: i === current ? 'var(--ink)' : 'var(--stone)',
                border: 'none',
                cursor: 'pointer',
                transition: 'width 300ms var(--ease-out), background-color 300ms var(--ease-out)',
                padding: 0,
              }}
              aria-label={`testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
