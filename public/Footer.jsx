// Footer.jsx
const Footer = ({ go }) => (
  <footer className="footer">
    <div>
      <div className="footer-brand" onClick={() => go('home')} style={{ cursor: 'pointer' }}>
        <span className="brand-main">iviejo</span>
        <span className="brand-sub">photo</span>
      </div>
      <p style={{ marginTop: 24, fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--slate)', maxWidth: '32ch', lineHeight: 1.5 }}>
        a photography studio working in portrait, still life, and editorial. brooklyn, since 2019.
      </p>
    </div>
    <div className="footer-col">
      <h5>studio</h5>
      <ul>
        <li onClick={() => go('work')}>work</li>
        <li onClick={() => go('about')}>about</li>
        <li onClick={() => go('journal')}>journal</li>
        <li onClick={() => go('contact')}>contact</li>
      </ul>
    </div>
    <div className="footer-col">
      <h5>elsewhere</h5>
      <ul>
        <li>instagram</li>
        <li>are.na</li>
        <li>newsletter</li>
      </ul>
    </div>
    <div className="footer-col">
      <h5>visit</h5>
      <ul style={{ fontFamily: 'var(--font-mono)', fontSize: 12, lineHeight: 1.7 }}>
        <li>241 36th street, 4D</li>
        <li>brooklyn, ny 11232</li>
        <li>tue — fri · 10–18</li>
      </ul>
    </div>
    <div className="footer-bottom">
      <span>© 2019—2026 iviejo photo, llc</span>
      <span>made slowly in brooklyn</span>
    </div>
  </footer>
);

window.Footer = Footer;
