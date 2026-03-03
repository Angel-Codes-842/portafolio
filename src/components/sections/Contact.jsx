/**
 * Contact Component
 * Direct contact links with modern glassmorphism design
 * Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 7.5, 9.3
 */

import TerminalText from '../ui/TerminalText';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="contact"
      className={`relative py-24 ${isVisible ? 'animate-reveal-up' : 'opacity-0'}`}
    >
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section heading */}
          <div className="flex justify-center mb-12">
            <TerminalText prefix=">">
              <span className="font-pixel text-2xl md:text-3xl text-white drop-shadow-[0_0_8px_rgba(39,103,245,0.3)]">
                Contacto
              </span>
            </TerminalText>
          </div>

          <div className="glass-card p-10 md:p-16 rounded-2xl relative overflow-hidden group/contact hover:shadow-[0_0_40px_rgba(39,103,245,0.15)] transition-shadow duration-500 border-pixel">
            {/* Animated top border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-retro-blue to-transparent opacity-50 group-hover/contact:opacity-100 transition-opacity duration-500" />

            <h3 className="font-pixel text-3xl md:text-4xl text-white mb-6 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] flex justify-center items-center gap-4">
              <span className="w-3 h-3 bg-retro-blue rounded-full animate-pulse-glow" aria-hidden="true" />
              ¡Trabajemos juntos!
            </h3>

            <p className="font-mono text-base md:text-lg text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Actualmente estoy abierto a nuevas oportunidades de trabajo. Si tienes un proyecto en mente, una propuesta laboral o simplemente quieres saludar, ¡no dudes en escribirme!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 flex-wrap">
              {/* Email */}
              <a
                href="mailto:hernan17ayala@gmail.com"
                className="flex items-center justify-center gap-3 font-mono text-white px-6 py-4 bg-retro-blue/10 border border-retro-blue/30 rounded-xl hover:bg-retro-blue hover:border-retro-blue hover:shadow-[0_0_20px_rgba(39,103,245,0.5)] transition-all duration-300 hover:-translate-y-1 flex-1 min-w-[280px] group"
              >
                <span className="font-pixel text-2xl group-hover:scale-110 transition-transform">@</span>
                <span className="font-medium tracking-wide text-sm">hernan17ayala@gmail.com</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/angel-gómez-b72836209/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 font-mono text-white px-6 py-4 bg-[#0A66C2]/10 border border-[#0A66C2]/30 rounded-xl hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:shadow-[0_0_20px_rgba(10,102,194,0.6)] transition-all duration-300 hover:-translate-y-1 flex-1 min-w-[200px] group"
              >
                <span className="font-pixel text-2xl font-bold group-hover:scale-110 transition-transform">in</span>
                <span className="font-medium tracking-wide">LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Angel-Codes-842"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 font-mono text-white px-6 py-4 bg-white/5 border border-white/20 rounded-xl hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 hover:-translate-y-1 flex-1 min-w-[200px] group"
              >
                <span className="font-pixel text-2xl font-bold group-hover:scale-110 transition-transform">{'>'}</span>
                <span className="font-medium tracking-wide">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
