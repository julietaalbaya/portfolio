import { ExternalLink } from 'lucide-react';
import { projects } from '../../data/portfolio';
import { GitHubIcon } from '../icons/BrandIcons';
import { SectionHeading } from '../ui/SectionHeading';

export function ProjectsSection() {
  return (
    <section className="section" id="proyectos">
      <SectionHeading
        title="Proyectos Destacados"
        description="Una selección de mis trabajos más recientes y significativos."
      />
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <img
              src={project.image}
              alt={project.title}
              width="900"
              height="506"
              loading="lazy"
              decoding="async"
            />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.codeUrl}
                  aria-label={`Ver código de ${project.title}`}
                >
                  <GitHubIcon size={18} />
                  Código
                </a>
                <a
                  href={project.demoUrl}
                  aria-label={`Ver demo de ${project.title}`}
                >
                  <ExternalLink size={18} />
                  Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
