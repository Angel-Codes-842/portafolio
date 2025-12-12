/**
 * About Component
 * Terminal-styled section with developer description and skills
 * Requirements: 3.1, 3.2, 3.3, 3.4, 7.5, 9.3
 */

import TerminalText from '../ui/TerminalText';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function About() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section 
      ref={ref}
      id="about" 
      className={`bg-white ${isVisible ? 'animate-crt' : 'opacity-0'}`}
    >
      <div className="section-container">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Section heading in terminal style */}
          <TerminalText prefix=">">
            <span className="font-pixel text-2xl md:text-3xl text-carbon">
              Mi enfoque
            </span>
          </TerminalText>

          {/* Developer description */}
          <div className="space-y-6 pl-6">
            <p className="font-mono text-lg md:text-xl text-carbon leading-relaxed">
              Desarrollo experiencias web limpias y rápidas.
            </p>
            <p className="font-mono text-lg md:text-xl text-carbon leading-relaxed">
              Trabajo con React, Tailwind, Django, APIs, Postgresql y despliegues modernos.
            </p>
          </div>

          {/* Optional: Profile photo with pixelated frame */}
          <div className="flex justify-center pt-8">
            <div className="pixel-border shadow-pixel p-1 bg-soft-gray">
              <img 
                src="/images/profile.png"
                alt="Ángel Gómez - Profile"
                className="w-48 h-48 md:w-56 md:h-56 grayscale"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div class="w-48 h-48 md:w-56 md:h-56 bg-carbon/10 flex items-center justify-center">
                      <span class="font-pixel text-carbon/40 text-sm text-center px-4">[ foto ]</span>
                    </div>
                  `;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
