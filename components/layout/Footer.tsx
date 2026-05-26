import Link from 'next/link'
import Wordmark from '@/components/shared/Wordmark'
import { availability } from '@/config/availability'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--ink)', color: 'var(--bone)' }}>
      <div className="container-site" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 40, marginBottom: 64 }}>
          <div>
            <span style={{ color: 'var(--bone)' }}>
              <Wordmark size="md" />
            </span>
            <p className="t-caption" style={{ color: 'var(--slate)', marginTop: 16, lineHeight: 1.6 }}>
              utah-based analog film photography.<br />
              we shoot on real film.
            </p>
          </div>
          <div>
            <p className="t-eyebrow" style={{ color: 'var(--slate)', marginBottom: 16 }}>pages</p>
            {[
              { href: '/gallery', label: 'work' },
              { href: '/film', label: 'why film' },
              { href: '/about', label: 'about' },
              { href: '/quiz', label: 'style quiz' },
              { href: '/contact', label: 'contact' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--stone)', textDecoration: 'none', marginBottom: 10 }}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div>
            <p className="t-eyebrow" style={{ color: 'var(--slate)', marginBottom: 16 }}>follow</p>
            <a
              href="https://instagram.com/iviejophoto"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--stone)', textDecoration: 'none', marginBottom: 10 }}
            >
              instagram
            </a>
            <a
              href="https://tiktok.com/@iviejophoto"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--stone)', textDecoration: 'none' }}
            >
              tiktok
            </a>
          </div>
        </div>
        <hr style={{ border: 0, borderTop: '1px solid rgba(201, 194, 184, 0.2)', marginBottom: 32 }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <p className="t-caption" style={{ color: 'var(--slate)' }}>
            all sessions shot on analog film. 35mm and medium format.
          </p>
          <p className="t-caption" style={{ color: 'var(--slate)' }}>
            {availability.bookingLabel}
          </p>
        </div>
      </div>
    </footer>
  )
}
