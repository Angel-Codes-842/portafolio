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
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="group flex items-center gap-2.5 select-none"
            aria-label="Inicio"
          >
            {/* SVG mark */}
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(39,103,245,0.8)]">
              {/* Outer pixel border */}
              <rect x="1" y="1" width="34" height="34" rx="6" fill="#0d0d0d" stroke="#2767F5" strokeWidth="1.5" />
              {/* Inner glow bg */}
              <rect x="4" y="4" width="28" height="28" rx="4" fill="rgba(39,103,245,0.07)" />
              {/* Left bracket */}
              <path d="M10 12 L7 18 L10 24" stroke="#2767F5" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" fill="none" />
              {/* Right bracket */}
              <path d="M26 12 L29 18 L26 24" stroke="#2767F5" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" fill="none" />
              {/* AG letters */}
              <text x="18" y="22" textAnchor="middle" fontFamily="'VT323', monospace" fontSize="13" fill="white" letterSpacing="1">AG</text>
            </svg>
            {/* Wordmark */}
            <span className="font-pixel text-xl text-white group-hover:text-retro-blue transition-colors duration-300 leading-none">
              angel<span className="text-retro-blue">.</span>dev
            </span>
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
