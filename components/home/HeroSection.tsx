import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="grid-hero-layout" style={{ marginTop: -88, backgroundColor: 'var(--bone)' }}>
      {/* Left: text */}
      <div
        className="hero-text-col"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '160px 64px 100px 40px',
          order: 2,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: 'var(--slate)',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            marginBottom: 48,
            display: 'block',
          }}
        >
          utah · cinematic · 2026
        </span>

        <h1 className="t-hero" style={{ color: 'var(--ink)' }}>
          light &amp;<br />
          <span style={{ color: 'var(--forest)', fontStyle: 'italic' }}>form.</span>
        </h1>

        <p className="t-body" style={{ marginTop: 40, maxWidth: 380, color: 'var(--graphite)' }}>
          cinematic portrait photography for couples, families &amp; milestones. utah.
        </p>

        <div style={{ display: 'flex', gap: 16, marginTop: 48, flexWrap: 'wrap' }}>
          <Link href="/gallery" className="btn-primary">view the work</Link>
          <Link href="/quiz" className="btn-outline">find your session</Link>
        </div>
      </div>

      {/* Right: full-height image */}
      <div className="hero-image-col" style={{ position: 'relative', overflow: 'hidden', order: 1 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://picsum.photos/seed/iviejo-hero/900/1200"
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    </section>
  )
}
