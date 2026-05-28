import { aboutParagraphs, strengths } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';

export function AboutSection() {
  return (
    <section className="section section-muted" id="sobre-mi">
      <SectionHeading title="Sobre mí" />
      <div className="about-grid">
        <div className="about-copy">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="strength-list">
          {strengths.map(({ title, description, icon: Icon }) => (
            <article className="strength-card" key={title}>
              <Icon size={34} strokeWidth={2.2} />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
