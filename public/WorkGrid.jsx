// WorkGrid.jsx — filterable grid of projects
const { useState } = React;

const Tile = ({ project, span, aspect, openProject }) => (
  <div className={`tile span-${span}`} onClick={() => openProject(project.id)}>
    <div className="tile-img" style={{ aspectRatio: aspect }}>
      <div className="tile-img-inner" style={{ backgroundImage: `url(${project.cover})` }} />
    </div>
    <div className="tile-meta">
      <span className="tile-title">{project.title}</span>
      <span className="tile-year">{project.year}</span>
    </div>
    <span className="tile-caption">{project.subtitle} · {project.medium}</span>
  </div>
);

const WorkGrid = ({ openProject, showHeader = true }) => {
  const { PROJECTS, CATEGORIES } = window.IVIEJO_DATA;
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  // Asymmetric span pattern: 7 / 5 / 5 / 7 / 6 / 6 ... keeps the grid feeling editorial
  const layouts = [
    { span: 7, aspect: '4/5' },
    { span: 5, aspect: '4/5' },
    { span: 5, aspect: '3/4' },
    { span: 7, aspect: '3/4' },
    { span: 6, aspect: '4/5' },
    { span: 6, aspect: '4/5' }
  ];

  return (
    <section className="section">
      {showHeader && (
        <div className="section-header">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span className="eyebrow">selected work · 2023—2025</span>
            <h2 className="section-title">a small body of work,<br/>made slowly.</h2>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--slate)', letterSpacing: '0.04em' }}>
            {filtered.length.toString().padStart(2, '0')} / {PROJECTS.length.toString().padStart(2, '0')}
          </span>
        </div>
      )}

      <div className="chips">
        {CATEGORIES.map(c => (
          <button
            key={c}
            className={'chip' + (filter === c ? ' active' : '')}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid">
        {filtered.map((p, i) => {
          const l = layouts[i % layouts.length];
          return <Tile key={p.id} project={p} span={l.span} aspect={l.aspect} openProject={openProject} />;
        })}
      </div>
    </section>
  );
};

window.WorkGrid = WorkGrid;
