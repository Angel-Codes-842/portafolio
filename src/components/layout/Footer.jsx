/**
 * Footer Component
 * Minimal footer with pixelated separator, copyright and social links
 */

import { profile } from '../../data/profile';

const socialLinks = [
  { id: 'github', label: 'GitHub', href: profile.githubUrl, external: true },
  { id: 'linkedin', label: 'LinkedIn', href: profile.linkedinUrl, external: true },
  { id: 'whatsapp', label: 'WhatsApp', href: profile.whatsappUrl, external: true },
  { id: 'cv', label: 'CV', href: '#cv', external: false },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 z-10 bg-black/50 backdrop-blur-md border-t border-white/10 mt-16">
      {/* Pixelated horizontal separator */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="pixel-line mb-8" aria-hidden="true" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright text */}
          <p className="font-mono text-sm text-white/60 text-center md:text-left">
            © {currentYear} {profile.fullName}. Todos los derechos reservados.
          </p>

          {/* Social links - adequate touch targets */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="font-mono text-sm text-white/60 hover:text-retro-blue hover-jump transition-colors px-2 py-2 min-h-[44px] flex items-center"
                aria-label={link.label}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
