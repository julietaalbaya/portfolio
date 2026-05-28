import { Mail } from 'lucide-react';
import { profile } from '../../data/portfolio';
import { LinkedInIcon } from '../icons/BrandIcons';
import { ButtonLink } from '../ui/ButtonLink';
import { SectionHeading } from '../ui/SectionHeading';

export function ContactSection() {
  return (
    <section className="section contact-section" id="contacto">
      <SectionHeading
        title="Contacto"
        description="Estoy disponible para nuevos proyectos, colaboraciones y oportunidades vinculadas al ecosistema .NET."
      />
      <div className="contact-actions">
        <ButtonLink href={`mailto:${profile.email}`}>
          <Mail size={18} />
          Enviar email
        </ButtonLink>
        <ButtonLink href={profile.linkedin} variant="secondary">
          <LinkedInIcon size={18} />
          LinkedIn
        </ButtonLink>
      </div>
    </section>
  );
}
