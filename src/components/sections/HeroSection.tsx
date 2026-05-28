import { profile } from '../../data/portfolio';
import { ButtonLink } from '../ui/ButtonLink';
import { SocialLinks } from '../ui/SocialLinks';

export function HeroSection() {
  return (
    <section className="hero section" id="inicio">
      <div className="hero-inner">
        <div className="hero-copy">
          <h1 aria-label={`Hola, soy ${profile.name}, ${profile.role}`}>
            Hola, soy {profile.name}
            <span>{profile.role}</span>
          </h1>
          <p>{profile.intro}</p>
          <div className="hero-actions">
            <ButtonLink href="#proyectos">Ver Proyectos</ButtonLink>
            <ButtonLink href="#contacto" variant="secondary">
              Contactar
            </ButtonLink>
          </div>
          <SocialLinks />
        </div>
        <div className="hero-portrait">
          <img
            className="profile-photo"
            src={profile.photo}
            alt={`Foto de ${profile.name}`}
          />
          <span className="orbit-badge" aria-hidden="true">
            .NET + BLAZOR
          </span>
          <span className="sparkle sparkle-one" aria-hidden="true">
            *
          </span>
          <span className="sparkle sparkle-two" aria-hidden="true">
            +
          </span>
        </div>
      </div>
    </section>
  );
}
