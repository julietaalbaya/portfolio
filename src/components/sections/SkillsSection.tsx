import { skills } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';

export function SkillsSection() {
  return (
    <section className="section section-muted" id="habilidades">
      <SectionHeading
        title="Habilidades"
        description="Tecnologías y prácticas que uso para construir soluciones .NET web, mobile y backend."
      />
      <div className="skills-panel">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}
