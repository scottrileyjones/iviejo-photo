'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const heroImages = [
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1600&q=80',
  'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=1600&q=80',
  'https://images.unsplash.com/photo-1523264766099-e4c6aff2e2cf?w=1600&q=80',
  'https://images.unsplash.com/photo-1502252430442-aac78f397426?w=1600&q=80',
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setCurrent((c) => (c + 1) % heroImages.length)
        setFading(false)
      }, 1200)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section style={{ position: 'relative', height: '100vh', overflow: 'hidden', backgroundColor: 'var(--bone)' }}>
      {/* Background crossfade */}
      {heroImages.map((src, i) => (
        <div
          key={src}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: i === current ? (fading ? 0 : 1) : 0,
            transition: 'opacity 1200ms cubic-bezier(0.2, 0.6, 0.2, 1)',
            zIndex: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            className="photo"
          />
        </div>
      ))}

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(246,242,236,0.3) 0%, rgba(246,242,236,0.55) 100%)',
          zIndex: 1,
        }}
      />

      {/* Corner label */}
      <div style={{ position: 'absolute', top: 96, left: 40, zIndex: 2 }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: 'var(--slate)',
            letterSpacing: '0.02em',
          }}
        >
          utah · 35mm · 2026
        </span>
      </div>

      {/* Center content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 40px',
        }}
      >
        <h1 className="t-hero" style={{ color: 'var(--ink)' }}>
          light &amp;<br />form.
        </h1>
        <p
          className="t-body"
          style={{ marginTop: 32, maxWidth: 440, color: 'var(--graphite)' }}
        >
          analog portrait photography for couples, families &amp; milestones. utah.
        </p>
        <div style={{ display: 'flex', gap: 16, marginTop: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/gallery" className="btn-primary">
            view the work
          </Link>
          <Link href="/quiz" className="btn-outline">
            find your session
          </Link>
        </div>
      </div>
    </section>
  )
}
