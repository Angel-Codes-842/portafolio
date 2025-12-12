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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-carbon">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <a 
            href="#" 
            className="font-pixel text-xl text-carbon hover-jump"
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
                className="font-mono text-sm text-carbon hover:text-retro-blue hover-jump transition-none"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button - min 44x44px touch target */}
          <button
            onClick={toggleMenu}
            className="md:hidden min-w-[44px] min-h-[44px] p-2 font-pixel text-xl text-carbon hover-jump flex items-center justify-center"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t-2 border-carbon py-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="font-mono text-base text-carbon hover:text-retro-blue hover-jump transition-none px-4 py-3 min-h-[44px] flex items-center"
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
