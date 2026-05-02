import { useState } from 'react';
import { useIntersection } from '../../hooks/useIntersection';
import { projects, projectTags } from '../../data/projects';
import './Projects.css';

export default function Projects() {
  const { ref, isVisible } = useIntersection({ threshold: 0.05 });
  const [activeTag, setActiveTag] = useState<string>('All');

  const filtered =
    activeTag === 'All' ? projects : projects.filter(p => p.tags.includes(activeTag));

  const tierLabel: Record<number, string> = {
    1: 'Innovation FCU',
    2: 'Scotiabank',
    3: 'Personal',
  };

  return (
    <section id="projects" className="section section--dark projects">
      <div className="section__inner" ref={ref as React.RefObject<HTMLDivElement>}>
        <div className={`reveal${isVisible ? ' reveal--visible' : ''}`}>
          <p className="section__label">Portfolio</p>
          <h2 className="section__title">Projects &amp; Initiatives</h2>
        </div>

        <div className={`projects__filters reveal reveal--delay-1${isVisible ? ' reveal--visible' : ''}`} role="group" aria-label="Filter projects by category">
          {projectTags.map(tag => (
            <button
              key={tag}
              className={`projects__filter${activeTag === tag ? ' projects__filter--active' : ''}`}
              onClick={() => setActiveTag(tag)}
              aria-pressed={activeTag === tag}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map((project, i) => (
            <article
              key={project.id}
              className={`project-card reveal reveal--delay-${Math.min((i % 3) + 1, 6)}${isVisible ? ' reveal--visible' : ''}`}
            >
              <div className="project-card__header">
                <span className="project-card__company">{tierLabel[project.tier] ?? project.company}</span>
                {project.highlight && (
                  <span className="project-card__highlight">{project.highlight}</span>
                )}
              </div>

              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>

              <div className="project-card__footer">
                <div className="project-card__tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-card__tag">{tag}</span>
                  ))}
                </div>

                {project.tech && (
                  <div className="project-card__tech">
                    {project.tech.map(t => (
                      <span key={t} className="project-card__tech-item">{t}</span>
                    ))}
                  </div>
                )}

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
