import Link from 'next/link'
import AnimateIn from '@/components/shared/AnimateIn'

export default function QuizCTA() {
  return (
    <section style={{ backgroundColor: 'var(--forest-deep)', padding: '160px 0' }}>
      <div className="container-site">
        <AnimateIn>
          <span className="t-eyebrow" style={{ color: 'rgba(246,242,236,0.5)' }}>find your session</span>
          <h2
            className="t-display-1"
            style={{ color: 'var(--bone)', marginTop: 32, maxWidth: 800 }}
          >
            not sure what you want?<br />
            <span style={{ fontStyle: 'italic' }}>we can figure that out.</span>
          </h2>
        </AnimateIn>
        <AnimateIn delay={100}>
          <p className="t-body" style={{ marginTop: 40, maxWidth: 480, color: 'rgba(246,242,236,0.7)' }}>
            take our 2-minute style quiz — we&apos;ll match you with the right look, location, and session type, then reach out personally.
          </p>
        </AnimateIn>
        <AnimateIn delay={200}>
          <div style={{ marginTop: 56 }}>
            <Link href="/quiz" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              fontWeight: 500,
              color: 'var(--bone)',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              borderBottom: '1px solid rgba(246,242,236,0.4)',
              paddingBottom: 8,
            }}>
              start the quiz →
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
