import Link from 'next/link'

export default function HeroSection() {
  return (
    <section
      style={{
        backgroundColor: 'var(--bone)',
        marginTop: -88,
        paddingTop: 'calc(88px + 120px)',
        paddingBottom: 120,
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      <div className="container-site" style={{ width: '100%' }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: 'var(--slate)',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            marginBottom: 56,
            display: 'block',
          }}
        >
          utah · cinematic · 2026
        </span>

        <h1 className="t-hero" style={{ color: 'var(--ink)', maxWidth: '14ch' }}>
          light &amp;<br />
          <span style={{ color: 'var(--forest)', fontStyle: 'italic' }}>form.</span>
        </h1>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginTop: 64,
            gap: 32,
            flexWrap: 'wrap',
          }}
        >
          <p className="t-body" style={{ maxWidth: 360, color: 'var(--graphite)', margin: 0 }}>
            cinematic portrait photography for couples, families &amp; milestones. utah.
          </p>

          <div style={{ display: 'flex', gap: 16, flexShrink: 0, flexWrap: 'wrap' }}>
            <Link href="/gallery" className="btn-primary">view the work</Link>
            <Link href="/quiz" className="btn-outline">find your session</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
