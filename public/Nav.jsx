// Nav.jsx — fixed frosted navigation
const Nav = ({ route, go }) => {
  const links = [
    { key: 'work', label: 'work' },
    { key: 'about', label: 'about' },
    { key: 'journal', label: 'journal' },
    { key: 'contact', label: 'contact' }
  ];
  return (
    <nav className="nav">
      <span className="nav-brand" onClick={() => go('home')}>
        <span className="brand-main">iviejo</span>
        <span className="brand-sub">photo</span>
      </span>
      <div className="nav-links">
        {links.map(l => (
          <span
            key={l.key}
            className={'nav-link' + (route.startsWith(l.key) ? ' active' : '')}
            onClick={() => go(l.key)}
          >
            {l.label}
          </span>
        ))}
      </div>
      <div className="nav-right">
        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square"><circle cx="11" cy="11" r="6" /><line x1="20" y1="20" x2="15.5" y2="15.5" /></svg>
        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square"><circle cx="12" cy="9" r="3.5" /><path d="M5 20c1.5-3.5 4-5 7-5s5.5 1.5 7 5" /></svg>
      </div>
    </nav>
  );
};

window.Nav = Nav;
