// Hero.jsx — full-bleed homepage hero
const Hero = ({ go }) => {
  const { IMG } = window.IVIEJO_DATA;
  const heroImg = IMG('1438761681033-6461ffad8d80', 2200);
  return (
    <section className="hero">
      <div className="hero-img" style={{ backgroundImage: `url(${heroImg})` }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.35) 100%)' }} />
      <div className="hero-content">
        <h1 className="hero-title rise">light &amp;<br/>form.</h1>
        <div className="hero-meta">
          <span className="rise rise-delay-1">a studio for portrait,</span>
          <span className="rise rise-delay-1">still life, &amp; editorial photography.</span>
          <span className="rise rise-delay-2" style={{ opacity: 0.8, marginTop: 8 }}>brooklyn · since 2019</span>
          <div className="rise rise-delay-3" style={{ marginTop: 18 }}>
            <span
              onClick={() => go('work')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '12px 22px',
                background: 'rgba(246, 242, 236, 0.92)',
                color: 'var(--ink)',
                fontFamily: 'var(--font-sans)',
                fontSize: 13, fontWeight: 500, letterSpacing: '0.02em',
                borderRadius: 2, cursor: 'pointer'
              }}
            >
              view selected work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

window.Hero = Hero;
