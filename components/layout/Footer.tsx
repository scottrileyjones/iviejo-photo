import Link from 'next/link'
import Wordmark from '@/components/shared/Wordmark'
import { availability } from '@/config/availability'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--ink)', color: 'var(--bone)' }}>
      <div className="container-site" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 40, marginBottom: 64 }}>
          <div>
            <Wordmark size="md" variant="light" />
            <p className="t-caption" style={{ color: 'var(--slate)', marginTop: 16, lineHeight: 1.6 }}>
              utah-based cinematic portrait photography.<br />
              digital capture. analog soul.
            </p>
          </div>
          <div>
            <p className="t-eyebrow" style={{ color: 'var(--slate)', marginBottom: 16 }}>pages</p>
            {[
              { href: '/gallery', label: 'work' },
              { href: '/film', label: 'our approach' },
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
              href="https://www.instagram.com/iviejo.photo"
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
            cinematic digital photography with analog-inspired editing.
          </p>
          <p className="t-caption" style={{ color: 'var(--slate)' }}>
            {availability.bookingLabel}
          </p>
        </div>
      </div>
    </footer>
  )
}
