/**
 * About Component
 * Terminal-styled section with developer description, stats and skills
 */

import TerminalText from '../ui/TerminalText';
import TechIcon from '../ui/TechIcon';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { profile } from '../../data/profile';

export default function About() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="about"
      className={`relative py-16 ${isVisible ? 'animate-reveal-up' : 'opacity-0'}`}
    >
      <div className="section-container">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Section heading in terminal style */}
          <TerminalText prefix=">">
            <span className="font-pixel text-2xl md:text-3xl text-white drop-shadow-[0_0_8px_rgba(39,103,245,0.3)]">
              Mi enfoque
            </span>
          </TerminalText>

          {/* Profile + stats */}
          <div className="grid lg:grid-cols-[1.5fr_0.5fr] gap-8 items-center">
            <div className="space-y-6 glass-card p-6 md:p-8 rounded-lg border-l-4 border-l-retro-blue">
              {profile.summary.map((paragraph) => (
                <p key={paragraph} className="font-mono text-base md:text-lg text-white/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
                {profile.stats.map((stat) => (
                  <div key={stat.label} className="text-center sm:text-left">
                    <div className="font-pixel text-xl md:text-2xl text-retro-blue">{stat.value}</div>
                    <div className="font-mono text-xs text-white/45 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile photo with pixelated frame */}
            <div className="flex justify-center">
              <div className="pixel-border shadow-pixel p-2 glass-card bg-carbon/50 glow-hover rounded-full">
                <img
                  src="/images/profile.png"
                  alt={`${profile.fullName} - Profile`}
                  className="w-48 h-48 md:w-56 md:h-56 grayscale hover:grayscale-0 transition-all duration-500 rounded-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-48 h-48 md:w-56 md:h-56 bg-white/5 flex items-center justify-center rounded-full">
                        <span class="font-pixel text-white/40 text-sm text-center px-4">[ foto ]</span>
                      </div>
                    `;
                  }}
                />
              </div>
            </div>
          </div>

          {/* Skills grouped by area */}
          <div>
            <h3 className="font-pixel text-xl md:text-2xl text-white mb-6">
              Stack tecnológico
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {profile.skillGroups.map((group) => (
                <div key={group.title} className="glass-card p-5 rounded-lg hover:border-retro-blue/30 transition-colors duration-300">
                  <h4 className="font-pixel text-sm md:text-base text-retro-blue mb-4">{group.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/8 text-white/65"
                      >
                        <TechIcon tech={skill} className="w-3 h-3 text-retro-blue" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
