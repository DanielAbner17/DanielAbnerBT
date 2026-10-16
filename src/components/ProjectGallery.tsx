import { useState } from 'react';
import { projects, type Project } from '../data/portfolio';

function ProjectPreview({ type }: { type: Project['type'] }) {
  return (
    <div className={`project-preview preview-${type}`} aria-hidden="true">
      <div className="mini-browser">
        <div className="browser-bar">
          <span>● ● ●</span>
          <span>
            {type === 'dashboard'
              ? 'pulse / workspace'
              : type === 'store'
                ? 'forma.studio'
                : 'aula / mi aprendizaje'}
          </span>
          <span>↗</span>
        </div>
        {type === 'dashboard' ? (
          <div className="dashboard-demo">
            <div className="demo-sidebar">
              <b>p.</b>
              <span>⌂</span>
              <span>▦</span>
              <span>◷</span>
            </div>
            <div className="demo-main">
              <p>WORKSPACE / OVERVIEW</p>
              <h4>
                Todo va tomando forma<span>↗</span>
              </h4>
              <div className="demo-stats">
                <div>
                  Proyectos
                  <b>
                    12 <small>+2</small>
                  </b>
                </div>
                <div>
                  En progreso<b>08</b>
                </div>
                <div>
                  Completados<b>24</b>
                </div>
              </div>
              <div className="demo-chart">
                <span style={{ height: '35%' }} />
                <span style={{ height: '58%' }} />
                <span style={{ height: '42%' }} />
                <span style={{ height: '75%' }} />
                <span style={{ height: '60%' }} />
                <span style={{ height: '87%' }} />
                <span style={{ height: '72%' }} />
                <span style={{ height: '100%' }} />
              </div>
              <div className="demo-lines">
                <i />
                <i />
              </div>
            </div>
          </div>
        ) : type === 'store' ? (
          <div className="store-demo">
            <div className="store-nav">
              <b>forma®</b>
              <span>ESTUDIO &nbsp; PROYECTOS &nbsp; ↗</span>
            </div>
            <p>DISEÑO CON INTENCIÓN</p>
            <h4>
              Menos ruido.
              <br />
              <em>Más esencia.</em>
            </h4>
            <div className="sculpture">
              <i />
              <i />
              <i />
            </div>
            <span className="store-bottom">
              IDENTIDAD · DIGITAL · OBJETOS <b>© 2026</b>
            </span>
          </div>
        ) : (
          <div className="learning-demo">
            <div className="store-nav">
              <b>
                aula<span>✳</span>
              </b>
              <span>MI APRENDIZAJE &nbsp; ◯</span>
            </div>
            <p>TU PRÓXIMO CAPÍTULO</p>
            <h4>
              Una idea nueva.
              <br />
              Un paso adelante.
            </h4>
            <div className="lesson-row">
              <div className="lesson-art">{'</>'}</div>
              <div>
                <small>CONTINÚA APRENDIENDO</small>
                <b>Interfaces con propósito</b>
                <span className="lesson-progress" />
                <small>
                  4 de 8 lecciones <span>→</span>
                </small>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectGallery() {
  const [filter, setFilter] = useState('Todos');
  const filtered = projects.filter(
    (project) => filter === 'Todos' || project.category === filter,
  );
  return (
    <div>
      <div className="project-tools">
        <div className="filters" role="group" aria-label="Filtrar proyectos">
          {['Todos', 'Aplicaciones', 'Sitios web'].map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <p className="example-note">↳ Conceptos de ejemplo, por ahora</p>
      </div>
      <p className="sr-only" role="status">
        {filtered.length} {filtered.length === 1 ? 'proyecto' : 'proyectos'} en{' '}
        {filter.toLowerCase()}
      </p>
      <div className="project-grid">
        {filtered.map((project) => (
          <article className="project-card" key={project.id}>
            <ProjectPreview type={project.type} />
            <div className="project-meta">
              <span>{project.category}</span>
              <span>Ejemplo / {project.id}</span>
            </div>
            <h3>{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <ul className="tags" aria-label="Tecnologías">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <details>
              <summary>
                Acerca del concepto <span aria-hidden="true">↗</span>
              </summary>
              <p>{project.details}</p>
            </details>
            {(project.demoUrl || project.codeUrl) && (
              <div className="project-links">
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">
                    Ver proyecto ↗
                  </a>
                )}
                {project.codeUrl && (
                  <a href={project.codeUrl} target="_blank" rel="noreferrer">
                    Código ↗
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
