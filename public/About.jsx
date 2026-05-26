// About.jsx — editorial about page
const About = ({ go }) => {
  const { IMG } = window.IVIEJO_DATA;
  return (
    <section className="section">
      <div className="section-header" style={{ marginBottom: 96 }}>
        <span className="eyebrow">about</span>
      </div>
      <div className="editorial">
        <div style={{ gridColumn: '2 / span 6' }}>
          <p className="lede">
            we are a small photography studio in brooklyn. we make portraits, still lifes, and editorial work for people we like, slowly, mostly on film.
          </p>
        </div>
        <div style={{ gridColumn: '9 / span 4', alignSelf: 'start' }}>
          <div style={{ aspectRatio: '4/5', backgroundImage: `url(${IMG('1542038784456-1ea8e935640e', 1200)})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <span className="tile-caption" style={{ marginTop: 12, display: 'block' }}>the studio · industry city, 2023</span>
        </div>
      </div>

      <div className="editorial" style={{ marginTop: 96 }}>
        <div style={{ gridColumn: '2 / span 4' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 32, letterSpacing: '-0.015em', color: 'var(--ink)', margin: '0 0 24px 0' }}>practice</h3>
          <p>we shoot mostly on film and develop in-house. prints are made small, in editions short enough that we know where each one lives.</p>
          <p>we work with editors, art directors, brands, and the occasional private commission. we like long lead times and small crews.</p>
        </div>
        <div style={{ gridColumn: '7 / span 4' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 32, letterSpacing: '-0.015em', color: 'var(--ink)', margin: '0 0 24px 0' }}>clients &amp; press</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--graphite)' }}>
            {['Cherry Bombe', 'Apartamento', 'Kinfolk', 'The Gentlewoman', 'Wallpaper*', 'Aesop', 'Le Labo', 'Roman and Williams'].map(c => (
              <li key={c} style={{ padding: '12px 0', borderBottom: '1px solid var(--border-soft)' }}>{c}</li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 96, display: 'flex', gap: 16 }}>
        <button className="btn btn-primary" onClick={() => go('contact')}>book a sitting</button>
        <button className="btn btn-outline" onClick={() => go('work')}>view portfolio</button>
      </div>
    </section>
  );
};

window.About = About;
