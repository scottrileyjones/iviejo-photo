import Link from 'next/link'
import AnimateIn from '@/components/shared/AnimateIn'

export default function FilmManifesto() {
  return (
    <section style={{ backgroundColor: 'var(--linen)', padding: '120px 0' }}>
      <div className="container-site">
        <AnimateIn>
          <blockquote
            className="t-display-1"
            style={{
              color: 'var(--ink)',
              maxWidth: 900,
              fontStyle: 'normal',
            }}
          >
            &ldquo;we shoot with intention. we edit with soul. we take our time.&rdquo;
          </blockquote>
        </AnimateIn>

        <hr className="hairline" style={{ marginTop: 64, marginBottom: 48 }} />

        <AnimateIn delay={100}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 40,
            }}
          >
            {[
              'shot with intention',
              'edited by hand',
              'no presets. ever.',
            ].map((label) => (
              <span key={label} className="t-eyebrow">{label}</span>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={200}>
          <div style={{ marginTop: 48 }}>
            <Link href="/film" className="t-link">
              our approach →
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
