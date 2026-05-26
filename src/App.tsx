import {
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Palette,
  Rocket,
} from 'lucide-react';
import './App.css';

const profile = {
  name: 'Tu Nombre',
  role: 'Desarrollador Web',
  photo: '/profile-placeholder.svg',
  intro:
    'Desarrollador Full Stack apasionado por crear experiencias web modernas, funcionales y centradas en el usuario.',
  email: 'tu.email@example.com',
  github: 'https://github.com/tu-usuario',
  linkedin: 'https://www.linkedin.com/in/tu-usuario',
};

const aboutParagraphs = [
  'Soy un desarrollador web con experiencia en la creación de aplicaciones modernas y escalables. Me apasiona aprender nuevas tecnologías y resolver problemas complejos de manera eficiente.',
  'Mi enfoque se centra en escribir código limpio, mantenible y bien documentado, siempre buscando las mejores prácticas en el desarrollo de software.',
  'Cuando no estoy programando, disfruto contribuir a proyectos de código abierto y mantenerme actualizado con las últimas tendencias en tecnología web.',
];

const strengths = [
  {
    title: 'Desarrollo',
    description:
      'Experiencia en desarrollo frontend y backend con tecnologías modernas.',
    icon: Code2,
  },
  {
    title: 'Diseño UI/UX',
    description:
      'Creación de interfaces intuitivas y atractivas centradas en el usuario.',
    icon: Palette,
  },
  {
    title: 'Optimización',
    description:
      'Mejora del rendimiento y la experiencia del usuario en aplicaciones web.',
    icon: Rocket,
  },
];

const projects = [
  {
    title: 'E-commerce Platform',
    description:
      'Plataforma de comercio electrónico completa con carrito de compras, pasarela de pago y panel de administración.',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    codeUrl: 'https://github.com/tu-usuario/ecommerce-platform',
    demoUrl: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description:
      'Aplicación de gestión de tareas con colaboración en tiempo real y seguimiento de proyectos.',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    tags: ['TypeScript', 'React', 'Firebase', 'Tailwind'],
    codeUrl: 'https://github.com/tu-usuario/task-management-app',
    demoUrl: 'https://example.com',
  },
  {
    title: 'Portfolio CMS',
    description:
      'Sistema de gestión de contenido para portfolios creativos con editor visual y optimización SEO.',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'TailwindCSS'],
    codeUrl: 'https://github.com/tu-usuario/portfolio-cms',
    demoUrl: 'https://example.com',
  },
];

const skills = [
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'HTML',
  'CSS',
  'Vite',
  'Git',
  'REST APIs',
  'Responsive Design',
  'UI/UX',
  'Testing',
];

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <a className="brand" href="#inicio">
          Portfolio
        </a>
        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="inicio">
          <img
            className="profile-photo"
            src={profile.photo}
            alt={`Foto de ${profile.name}`}
          />
          <h1>
            Hola, soy {profile.name}
            <span>{profile.role}</span>
          </h1>
          <p>{profile.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#proyectos">
              Ver Proyectos
            </a>
            <a className="button button-secondary" href="#contacto">
              Contactar
            </a>
          </div>
          <div className="social-links" aria-label="Redes sociales">
            <a href={profile.github} aria-label="GitHub">
              <Github size={24} strokeWidth={2} />
            </a>
            <a href={profile.linkedin} aria-label="LinkedIn">
              <Linkedin size={24} strokeWidth={2} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={24} strokeWidth={2} />
            </a>
          </div>
        </section>

        <section className="section section-muted" id="sobre-mi">
          <div className="section-heading">
            <h2>Sobre mí</h2>
          </div>
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

        <section className="section" id="proyectos">
          <div className="section-heading">
            <h2>Proyectos Destacados</h2>
            <p>Una selección de mis trabajos más recientes y significativos.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <img src={project.image} alt={project.title} />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.codeUrl}>
                      <Github size={18} />
                      Código
                    </a>
                    <a href={project.demoUrl}>
                      <ExternalLink size={18} />
                      Demo
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-muted" id="habilidades">
          <div className="section-heading">
            <h2>Habilidades</h2>
            <p>Tecnologías y prácticas que uso para construir productos web.</p>
          </div>
          <div className="skills-panel">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contacto">
          <div className="section-heading">
            <h2>Contacto</h2>
            <p>
              Estoy disponible para nuevos proyectos, colaboraciones y
              oportunidades.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${profile.email}`}>
              <Mail size={18} />
              Enviar email
            </a>
            <a className="button button-secondary" href={profile.linkedin}>
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
