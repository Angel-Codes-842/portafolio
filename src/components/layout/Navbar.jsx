/**
 * Navbar Component
 * Minimal navigation bar with smooth scroll and mobile responsive menu
 * Requirements: 2.1, 2.2, 2.3
 */

import { useState } from 'react';

const navLinks = [
  { id: 'about', label: 'Sobre mí', href: '#about' },
  { id: 'projects', label: 'Proyectos', href: '#projects' },
  { id: 'contact', label: 'Contacto', href: '#contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: scroll to top if section not found
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card backdrop-blur-md border-b-0 border-white/5 animate-reveal-up">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <a
            href="#"
            className="font-pixel text-2xl text-white hover:text-retro-blue transition-colors hover-jump glow-hover px-2 py-1 rounded"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            AG
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="font-mono text-sm text-white/80 hover:text-retro-blue hover-jump transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button - min 44x44px touch target */}
          <button
            onClick={toggleMenu}
            className="md:hidden min-w-[44px] min-h-[44px] p-2 font-pixel text-xl text-white hover:text-retro-blue hover-jump flex items-center justify-center"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-4 bg-carbon/95 backdrop-blur-md">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="font-mono text-base text-white/80 hover:text-retro-blue hover-jump transition-all px-4 py-3 min-h-[44px] flex items-center bg-white/5 mx-2 my-1 rounded hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
