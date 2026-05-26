import Link from 'next/link'

export default function HeroSection() {
  return (
    <section
      style={{
        marginTop: -88,
        paddingTop: 88,
        minHeight: '100vh',
        backgroundColor: 'var(--bone)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '88px 40px 80px',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          color: 'var(--slate)',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          marginBottom: 40,
        }}
      >
        utah · cinematic · 2026
      </span>

      <h1
        className="t-hero"
        style={{
          color: 'var(--ink)',
        }}
      >
        light &amp;<br />
        <span style={{ color: 'var(--forest)' }}>form.</span>
      </h1>

      <p
        className="t-body"
        style={{
          marginTop: 32,
          maxWidth: 440,
          color: 'var(--graphite)',
        }}
      >
        cinematic portrait photography for couples, families &amp; milestones. utah.
      </p>

      <div style={{ display: 'flex', gap: 16, marginTop: 48, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/gallery" className="btn-primary">
          view the work
        </Link>
        <Link href="/quiz" className="btn-outline">
          find your session
        </Link>
      </div>
    </section>
  )
}
