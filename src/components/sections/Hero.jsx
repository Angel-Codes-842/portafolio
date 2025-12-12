/**
 * Hero Component
 * Main hero section with name, title, tagline, and CTA buttons
 * Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 7.5, 9.3
 */

import BlinkingCursor from '../ui/BlinkingCursor';
import PixelButton from '../ui/PixelButton';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section 
      ref={ref}
      id="hero" 
      className={`min-h-screen flex items-center justify-center relative ${isVisible ? 'animate-crt' : 'opacity-0'}`}
    >
      {/* Pixelated lateral border decoration - left */}
      <div 
        className="absolute left-0 top-0 h-full w-2 hidden md:block"
        style={{
          background: 'repeating-linear-gradient(to bottom, #0A0A0A 0px, #0A0A0A 8px, transparent 8px, transparent 16px)',
        }}
        aria-hidden="true"
      />

      {/* Pixelated lateral border decoration - right */}
      <div 
        className="absolute right-0 top-0 h-full w-2 hidden md:block"
        style={{
          background: 'repeating-linear-gradient(to bottom, #0A0A0A 0px, #0A0A0A 8px, transparent 8px, transparent 16px)',
        }}
        aria-hidden="true"
      />

      <div className="section-container text-center">
        {/* Name */}
        <h1 className="font-pixel-title text-4xl md:text-6xl lg:text-7xl text-carbon mb-4">
          Ángel Gómez
        </h1>

        {/* Title */}
        <h2 className="font-pixel text-2xl md:text-3xl lg:text-4xl text-carbon mb-8">
          Full-Stack Developer
        </h2>

        {/* Tagline with blinking cursor */}
        <p className="font-pixel text-lg md:text-xl text-carbon mb-12 max-w-2xl mx-auto">
          Creo aplicaciones robustas y mantenibles utilizando tecnologías actuales.
          <BlinkingCursor />
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <PixelButton href="#projects" variant="primary">
            Ver Proyectos
          </PixelButton>
          <PixelButton href="#contact" variant="secondary">
            Contacto
          </PixelButton>
        </div>
      </div>
    </section>
  );
}
