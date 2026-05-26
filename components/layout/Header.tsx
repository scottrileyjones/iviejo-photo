'use client'

import Link from 'next/link'
import { useState } from 'react'
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

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backdropFilter: 'blur(20px) saturate(1.1)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.1)',
        backgroundColor: 'rgba(246, 242, 236, 0.7)',
        borderBottom: '1px solid rgba(201, 194, 184, 0.4)',
      }}
    >
      <div
        className="container-site"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 64,
        }}
      >
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Wordmark size="nav" />
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
                color: 'var(--graphite)',
                textDecoration: 'none',
                letterSpacing: 0,
              }}
              className="hidden-mobile"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/quiz" className="btn-accent hidden-mobile" style={{ padding: '8px 16px', fontSize: 12 }}>
            start the quiz
          </Link>
          {/* Mobile menu toggle */}
          <button
            type="button"
            className="show-mobile"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink)', padding: 4 }}
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
