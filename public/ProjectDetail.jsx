// ProjectDetail.jsx — single project view
const ProjectDetail = ({ projectId, go, openProject }) => {
  const { PROJECTS } = window.IVIEJO_DATA;
  const project = PROJECTS.find(p => p.id === projectId) || PROJECTS[0];
  const idx = PROJECTS.findIndex(p => p.id === project.id);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <div className="project-detail">
      <div className="project-hero rise" style={{ backgroundImage: `url(${project.cover})` }} />
      <div className="project-header">
        <div>
          <span className="eyebrow">{project.category}</span>
          <h1 className="project-title" style={{ marginTop: 18 }}>{project.title}</h1>
        </div>
        <div className="project-meta">
          <div className="meta-row"><span className="meta-label">location</span><span>{project.subtitle}</span></div>
          <div className="meta-row"><span className="meta-label">year</span><span>{project.year}</span></div>
          <div className="meta-row"><span className="meta-label">medium</span><span>{project.medium}</span></div>
        </div>
      </div>

      <div style={{ padding: '24px 48px 64px', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '0 24px' }}>
        <p style={{ gridColumn: '2 / span 6', fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 28, lineHeight: 1.25, letterSpacing: '-0.015em', color: 'var(--ink)', margin: 0 }}>
          {project.description}
        </p>
      </div>

      <div className="project-body">
        {project.images.map((img, i) => (
          <div
            key={i}
            className="img-block"
            style={{
              gridColumn: `span ${img.span}`,
              backgroundImage: `url(${img.src})`,
              aspectRatio: img.span >= 12 ? '3/2' : '4/5'
            }}
          />
        ))}
      </div>

      <div style={{ padding: '64px 48px 120px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="text-link" onClick={() => go('work')}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"><polyline points="11 6 5 12 11 18" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
          back to work
        </span>
        <span className="text-link" onClick={() => openProject(next.id)}>
          next · {next.title}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></svg>
        </span>
      </div>
    </div>
  );
};

window.ProjectDetail = ProjectDetail;
