import Link from 'next/link'
import AnimateIn from '@/components/shared/AnimateIn'

export default function QuizCTA() {
  return (
    <section style={{ backgroundColor: 'var(--linen)', borderTop: '1px solid var(--stone)', padding: '120px 0' }}>
      <div className="container-site">
        <AnimateIn>
          <h2 className="t-h1" style={{ maxWidth: 640 }}>
            not sure what kind of session you want?
          </h2>
        </AnimateIn>
        <AnimateIn delay={100}>
          <p className="t-body" style={{ marginTop: 24, maxWidth: 560 }}>
            take our 2-minute style quiz — we&apos;ll match you with the right film, location, and session type, then reach out personally.
          </p>
        </AnimateIn>
        <AnimateIn delay={200}>
          <div style={{ marginTop: 40 }}>
            <Link href="/quiz" className="btn-accent">
              start the quiz
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
