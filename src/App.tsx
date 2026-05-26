import {
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Rocket,
  Smartphone,
} from 'lucide-react';
import './App.css';

const profile = {
  name: 'Tu Nombre',
  role: 'Desarrolladora .NET',
  photo: '/profile-placeholder.svg',
  intro:
    'Especializada en crear aplicaciones web, móviles y backend con .NET, Blazor y .NET MAUI.',
  email: 'tu.email@example.com',
  github: 'https://github.com/tu-usuario',
  linkedin: 'https://www.linkedin.com/in/tu-usuario',
};

const aboutParagraphs = [
  'Soy desarrolladora .NET con foco en la creación de soluciones modernas, mantenibles y orientadas a resolver necesidades reales de negocio.',
  'Trabajo principalmente con C#, ASP.NET Core, Blazor y .NET MAUI, combinando interfaces cuidadas con arquitecturas claras y servicios robustos.',
  'Me interesa construir aplicaciones que se sientan fluidas, confiables y fáciles de evolucionar, tanto en entornos web como móviles.',
];

const strengths = [
  {
    title: 'Backend .NET',
    description:
      'Desarrollo de APIs, servicios y lógica de negocio con C#, ASP.NET Core y Entity Framework.',
    icon: Code2,
  },
  {
    title: 'Blazor',
    description:
      'Construcción de interfaces web interactivas, modernas y reutilizables con componentes Razor.',
    icon: Rocket,
  },
  {
    title: '.NET MAUI',
    description:
      'Creación de experiencias móviles multiplataforma con patrones como MVVM y XAML.',
    icon: Smartphone,
  },
];

const projects = [
  {
    title: 'Portal Administrativo Blazor',
    description:
      'Panel web para gestionar usuarios, reportes y operaciones internas con componentes reutilizables y autenticación.',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
    tags: ['Blazor', 'C#', 'ASP.NET Core', 'SQL Server'],
    codeUrl: 'https://github.com/tu-usuario/portal-blazor',
    demoUrl: 'https://example.com',
  },
  {
    title: 'App Mobile .NET MAUI',
    description:
      'Aplicación móvil multiplataforma para seguimiento de tareas, sincronización de datos y experiencia offline.',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    tags: ['.NET MAUI', 'C#', 'XAML', 'MVVM'],
    codeUrl: 'https://github.com/tu-usuario/app-maui',
    demoUrl: 'https://example.com',
  },
  {
    title: 'API de Gestión Empresarial',
    description:
      'API REST para centralizar entidades, permisos y flujos de datos con arquitectura limpia y persistencia relacional.',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
    tags: ['ASP.NET Core', 'EF Core', 'SQL Server', 'JWT'],
    codeUrl: 'https://github.com/tu-usuario/api-gestion',
    demoUrl: 'https://example.com',
  },
];

const skills = [
  'C#',
  '.NET',
  'ASP.NET Core',
  'Blazor',
  '.NET MAUI',
  'Entity Framework',
  'SQL Server',
  'REST APIs',
  'Razor',
  'XAML',
  'MVVM',
  'Git',
  'Azure',
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
            <p>
              Tecnologías y prácticas que uso para construir soluciones .NET
              web, mobile y backend.
            </p>
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
              oportunidades vinculadas al ecosistema .NET.
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
