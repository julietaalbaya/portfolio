import { Mail } from 'lucide-react';
import { profile } from '../../data/portfolio';
import { GitHubIcon, LinkedInIcon } from '../icons/BrandIcons';

export function SocialLinks() {
  return (
    <div className="social-links" aria-label="Redes sociales">
      <a href={profile.github} aria-label={`GitHub de ${profile.name}`}>
        <GitHubIcon size={24} />
      </a>
      <a href={profile.linkedin} aria-label={`LinkedIn de ${profile.name}`}>
        <LinkedInIcon size={24} />
      </a>
      <a
        href={`mailto:${profile.email}`}
        aria-label={`Enviar email a ${profile.name}`}
      >
        <Mail size={24} strokeWidth={2} />
      </a>
    </div>
  );
}
