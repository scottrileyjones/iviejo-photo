'use client'

import { useState, useEffect } from 'react'

const testimonials = [
  {
    quote: 'we didn\'t realize what we were missing until we got the photos back. there\'s a warmth that no phone camera can touch.',
    attribution: '— Elise & Carter, Moab',
  },
  {
    quote: 'the photographs were worth every week of waiting. our family now has something to hand down.',
    attribution: '— The Anderson Family, Salt Lake City',
  },
  {
    quote: 'i wanted something that didn\'t look like every other senior shoot. this delivered.',
    attribution: '— Margot, Park City',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 6000)
    return () => clearInterval(interval)
  }, [])

  const t = testimonials[current]

  return (
    <section
      style={{
        backgroundColor: 'var(--ink)',
        padding: '160px 0',
      }}
    >
      <div className="container-site">
        <blockquote
          key={current}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontStyle: 'italic',
            fontSize: 'clamp(28px, 4vw, 56px)',
            lineHeight: 1.15,
            color: 'var(--bone)',
            letterSpacing: '-0.02em',
            maxWidth: 900,
          }}
        >
          &ldquo;{t.quote}&rdquo;
        </blockquote>
        <p className="t-caption" style={{ marginTop: 40, color: 'var(--slate)' }}>
          {t.attribution}
        </p>

        <div style={{ display: 'flex', gap: 8, marginTop: 48 }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? 32 : 8,
                height: 1,
                backgroundColor: i === current ? 'var(--bone)' : 'var(--graphite)',
                border: 'none',
                cursor: 'pointer',
                transition: 'width 300ms var(--ease-out)',
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
