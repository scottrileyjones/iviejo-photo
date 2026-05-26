import Link from 'next/link'
import AnimateIn from '@/components/shared/AnimateIn'

export default function AboutTeaser() {
  return (
    <section style={{ backgroundColor: 'var(--bone)' }}>
      {/* Full-bleed image */}
      <div style={{ position: 'relative', overflow: 'hidden', height: '70vh' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/placeholder-bw.svg"
          alt="the studio"
          className="photo"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(26,23,20,0.5) 0%, transparent 60%)',
          }}
        />
        <div style={{ position: 'absolute', top: '50%', left: '5%', transform: 'translateY(-50%)', maxWidth: 480 }}>
          <AnimateIn>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: 'clamp(28px, 4vw, 56px)',
                color: 'var(--bone)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              &ldquo;the look is analog.<br />the tools are modern.&rdquo;
            </p>
          </AnimateIn>
        </div>
      </div>

      {/* Text below */}
      <div className="container-site">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            padding: '100px 0',
          }}
        >
          <AnimateIn>
            <p className="t-body">
              we use modern digital cameras — but we shoot and edit the way analog photographers think.
              slow down, frame with intention, and make every image count before pressing the shutter.
            </p>
          </AnimateIn>
          <AnimateIn delay={80}>
            <p className="t-body" style={{ color: 'var(--graphite)' }}>
              the grain, warmth, and depth in our work aren&apos;t filters. they&apos;re deliberate editing choices
              made by hand for every image. utah-based, shooting red rock, salt flats, and alpine light.
            </p>
            <Link href="/about" className="t-link" style={{ display: 'inline-block', marginTop: 32 }}>
              about the studio →
            </Link>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
