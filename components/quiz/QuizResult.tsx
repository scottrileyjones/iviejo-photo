'use client'

import { StyleProfile } from '@/types'
import Link from 'next/link'
import { CalendlyButton } from '@/components/shared/CalendlyEmbed'
import ImageCard from '@/components/ui/ImageCard'
import AnimateIn from '@/components/shared/AnimateIn'

const profileImages: Record<string, string[]> = {
  'portra-portrait': [
    'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
  ],
  'ektar-wanderer': [
    'https://images.unsplash.com/photo-1502252430442-aac78f397426?w=800&q=80',
    'https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=800&q=80',
    'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80',
  ],
  'hp5-editorial': [
    'https://images.unsplash.com/photo-1523264766099-e4c6aff2e2cf?w=800&q=80',
    'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&q=80',
    'https://images.unsplash.com/photo-1511895426328-dc8714191011?w=800&q=80',
  ],
  'gold-session': [
    'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80',
  ],
  'medium-format-heirloom': [
    'https://images.unsplash.com/photo-1511895426328-dc8714191011?w=800&q=80',
    'https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=800&q=80',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
  ],
}

interface Props {
  profile: StyleProfile
}

export default function QuizResult({ profile }: Props) {
  const images = profileImages[profile.id] ?? profileImages['portra-portrait']
  const isBW = profile.id === 'hp5-editorial'

  function shareResult() {
    if (navigator.share) {
      navigator.share({ title: `my film match: ${profile.name}`, url: window.location.href })
    } else {
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <div style={{ backgroundColor: 'var(--bone)', minHeight: '100vh' }}>
      {/* Result hero */}
      <section style={{ backgroundColor: 'var(--linen)', padding: '120px 0' }}>
        <div className="container-site">
          <AnimateIn>
            <p className="t-eyebrow" style={{ marginBottom: 24 }}>your film session match</p>
            <h1 className="t-display-1">{profile.name}</h1>
            <p className="t-body" style={{ marginTop: 24, maxWidth: 480 }}>
              {profile.description}
            </p>
            <p className="t-caption" style={{ marginTop: 16, display: 'block' }}>
              {profile.film_stock}
            </p>
          </AnimateIn>

          <AnimateIn delay={120}>
            <div style={{ display: 'flex', gap: 16, marginTop: 48, flexWrap: 'wrap', alignItems: 'center' }}>
              <CalendlyButton />
              <Link href="/upload" className="btn-outline">
                upload your inspo
              </Link>
              <button
                type="button"
                className="t-link"
                style={{ background: 'none', border: 'none' }}
                onClick={shareResult}
              >
                share your result
              </button>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Gallery examples */}
      <section style={{ padding: '80px 0' }}>
        <div className="container-site">
          <AnimateIn>
            <span className="t-eyebrow" style={{ marginBottom: 40, display: 'block' }}>
              sessions like yours
            </span>
          </AnimateIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {images.map((src, i) => (
              <AnimateIn key={src} delay={i * 60}>
                <ImageCard
                  src={src}
                  alt={`${profile.name} example ${i + 1}`}
                  title=""
                  caption={profile.film_stock}
                  href="/gallery"
                  bw={isBW}
                />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ backgroundColor: 'var(--linen)', borderTop: '1px solid var(--stone)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container-site">
          <h2 className="t-h1" style={{ marginBottom: 24 }}>ready when you are.</h2>
          <p className="t-body" style={{ marginBottom: 40, color: 'var(--graphite)' }}>
            book a free 15-minute call and we&apos;ll talk through the details — location, timing, and which rolls to bring.
          </p>
          <CalendlyButton />
        </div>
      </section>
    </div>
  )
}
