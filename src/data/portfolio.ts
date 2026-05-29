import { Code2, Rocket, Smartphone } from 'lucide-react';
import type { Profile, Project, Strength } from '../types/portfolio';

export const profile: Profile = {
  name: 'Julieta Albaya',
  role: 'Desarrolladora .NET',
  photo: `${import.meta.env.BASE_URL}profile-placeholder.svg`,
  intro:
    'Especializada en crear aplicaciones web, móviles y backend con .NET, Blazor y .NET MAUI.',
  email: 'julietaalbaya@gmail.com',
  github: 'https://github.com/julietaalbaya',
  linkedin: 'https://www.linkedin.com/in/julietaalbaya',
};

export const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contacto', href: '#contacto' },
];

export const aboutParagraphs = [
  'Soy desarrolladora .NET con foco en la creación de soluciones modernas, mantenibles y orientadas a resolver necesidades reales de negocio.',
  'Trabajo principalmente con C#, ASP.NET Core, Blazor y .NET MAUI, combinando interfaces cuidadas con arquitecturas claras y servicios robustos.',
  'Me interesa construir aplicaciones que se sientan fluidas, confiables y fáciles de evolucionar, tanto en entornos web como móviles.',
];

export const strengths: Strength[] = [
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

export const projects: Project[] = [
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

export const skills = [
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
