'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Wordmark from '@/components/shared/Wordmark'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/gallery', label: 'work' },
  { href: '/about', label: 'about' },
  { href: '/film', label: 'film' },
  { href: '/contact', label: 'contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const transparent = !scrolled && !open

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backdropFilter: transparent ? 'none' : 'blur(20px) saturate(1.1)',
        WebkitBackdropFilter: transparent ? 'none' : 'blur(20px) saturate(1.1)',
        backgroundColor: transparent ? 'transparent' : 'rgba(246, 242, 236, 0.88)',
        borderBottom: transparent ? '1px solid transparent' : '1px solid rgba(201, 194, 184, 0.4)',
        transition: 'background-color 400ms ease, border-color 400ms ease, backdrop-filter 400ms ease',
      }}
    >
      <div
        className="container-site"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 88,
        }}
      >
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Wordmark size="nav" variant={transparent ? 'light' : 'dark'} />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                fontWeight: 400,
                color: transparent ? 'rgba(246,242,236,0.9)' : 'var(--graphite)',
                textDecoration: 'none',
                letterSpacing: 0,
                transition: 'color 400ms ease',
              }}
              className="hidden-mobile"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/quiz"
            className="hidden-mobile"
            style={{
              padding: '8px 16px',
              fontSize: 12,
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              letterSpacing: '0.02em',
              textDecoration: 'none',
              borderRadius: 'var(--r-1)',
              display: 'inline-flex',
              alignItems: 'center',
              transition: 'background-color 400ms ease, color 400ms ease, border-color 400ms ease',
              ...(transparent
                ? { background: 'transparent', color: 'rgba(246,242,236,0.9)', border: '1px solid rgba(246,242,236,0.5)' }
                : { background: 'var(--forest)', color: 'var(--bone)', border: '1px solid transparent' }
              ),
            }}
          >
            start the quiz
          </Link>
          {/* Mobile menu toggle */}
          <button
            type="button"
            className="show-mobile"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: transparent ? 'var(--bone)' : 'var(--ink)',
              padding: 4,
              transition: 'color 400ms ease',
            }}
            onClick={() => setOpen(!open)}
            aria-label="menu"
          >
            {open
              ? <X size={20} strokeWidth={1.25} strokeLinecap="square" />
              : <Menu size={20} strokeWidth={1.25} strokeLinecap="square" />
            }
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          style={{
            borderTop: '1px solid var(--putty)',
            backgroundColor: 'rgba(246, 242, 236, 0.97)',
            padding: '24px 20px 32px',
          }}
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                fontFamily: 'var(--font-sans)',
                fontSize: 17,
                color: 'var(--graphite)',
                textDecoration: 'none',
                padding: '12px 0',
                borderBottom: '1px solid var(--putty)',
              }}
            >
              {l.label}
            </Link>
          ))}
          <div style={{ marginTop: 24 }}>
            <Link href="/quiz" className="btn-accent" onClick={() => setOpen(false)}>
              start the quiz
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  )
}
