import Link from 'next/link'
import AnimateIn from '@/components/shared/AnimateIn'

export default function FilmManifesto() {
  return (
    <section style={{ backgroundColor: 'var(--bone)', padding: '160px 0 120px' }}>
      <div className="container-site">
        <AnimateIn>
          <blockquote
            className="t-display-1"
            style={{
              color: 'var(--ink)',
              fontStyle: 'italic',
              maxWidth: '100%',
            }}
          >
            &ldquo;we shoot with intention.<br />we edit with soul.&rdquo;
          </blockquote>
        </AnimateIn>

        <AnimateIn delay={120}>
          <div
            style={{
              display: 'flex',
              gap: 48,
              marginTop: 80,
              paddingTop: 48,
              borderTop: '1px solid var(--putty)',
              flexWrap: 'wrap',
            }}
          >
            {['shot with intention', 'edited by hand', 'no presets. ever.'].map((label) => (
              <span key={label} className="t-eyebrow">{label}</span>
            ))}
            <Link href="/film" className="t-link" style={{ marginLeft: 'auto' }}>
              our approach →
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
