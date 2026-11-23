/**
 * Resume Component
 * CV preview, download actions and a quick summary of experience/education
 */

import TerminalText from '../ui/TerminalText';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { profile } from '../../data/profile';

export default function Resume() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="cv"
      className={`relative py-16 ${isVisible ? 'animate-reveal-up' : 'opacity-0'}`}
    >
      <div className="section-container">
        <div className="max-w-5xl mx-auto space-y-10">
          <TerminalText prefix=">">
            <span className="font-pixel text-2xl md:text-3xl text-white drop-shadow-[0_0_8px_rgba(39,103,245,0.3)]">
              Currículum
            </span>
          </TerminalText>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* PDF preview */}
            <div className="glass-card rounded-xl overflow-hidden border-pixel">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" aria-hidden="true" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" aria-hidden="true" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" aria-hidden="true" />
                <span className="ml-2 font-mono text-xs text-white/40 truncate">{profile.cvFileName}</span>
              </div>
              <iframe
                src={`${profile.cvUrl}#toolbar=0`}
                title="Vista previa del currículum"
                className="w-full h-[520px] bg-white"
              />
              <div className="px-4 py-3 border-t border-white/10 font-mono text-xs text-white/40">
                ¿No se muestra? {' '}
                <a href={profile.cvUrl} target="_blank" rel="noopener noreferrer" className="text-retro-blue hover:underline">
                  Abrir PDF en una pestaña nueva
                </a>
              </div>
            </div>

            {/* CV details */}
            <div className="space-y-6">
              <div className="glass-card p-6 md:p-8 rounded-xl">
                <h3 className="font-pixel text-lg md:text-xl text-white mb-2">{profile.fullName}</h3>
                <p className="font-mono text-sm text-retro-blue mb-6">{profile.role}</p>

                <dl className="space-y-3 font-mono text-sm text-white/65 mb-8">
                  <div className="flex gap-3">
                    <dt className="text-white/35 w-20 shrink-0">Ubicación</dt>
                    <dd>{profile.location}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="text-white/35 w-20 shrink-0">Tel / WhatsApp</dt>
                    <dd>
                      <a href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-retro-blue transition-colors">
                        {profile.phone}
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="text-white/35 w-20 shrink-0">Email</dt>
                    <dd>
                      <a href={`mailto:${profile.email}`} className="hover:text-retro-blue transition-colors break-all">
                        {profile.email}
                      </a>
                    </dd>
                  </div>
                </dl>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={profile.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center font-mono text-sm font-medium px-5 py-3 rounded-lg bg-retro-blue text-white hover:bg-blue-500 hover:shadow-[0_0_18px_rgba(39,103,245,0.45)] transition-all duration-200"
                  >
                    Ver CV
                  </a>
                  <a
                    href={profile.cvUrl}
                    download={profile.cvFileName}
                    className="flex-1 text-center font-mono text-sm font-medium px-5 py-3 rounded-lg bg-white/5 border border-white/15 text-white/75 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all duration-200"
                  >
                    Descargar PDF ↓
                  </a>
                </div>
              </div>

              {/* Experience */}
              <div className="glass-card p-6 md:p-8 rounded-xl border-l-4 border-l-retro-blue">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h4 className="font-pixel text-base text-white">
                    {profile.experience.role}
                  </h4>
                  <span className="font-mono text-xs text-retro-blue">{profile.experience.period}</span>
                </div>
                <p className="font-mono text-xs text-white/45 mb-5">
                  {profile.experience.company} · {profile.experience.location}
                </p>
                <ul className="space-y-3">
                  {profile.experience.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 font-mono text-sm text-white/65 leading-relaxed">
                      <span className="text-retro-blue mt-0.5" aria-hidden="true">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Education */}
              <div className="glass-card p-6 md:p-8 rounded-xl">
                <h4 className="font-pixel text-base text-white mb-5">Formación</h4>
                <div className="space-y-5">
                  {profile.education.map((item) => (
                    <div key={item.title}>
                      <p className="font-mono text-sm text-white/85">{item.title}</p>
                      <p className="font-mono text-xs text-white/45 mt-1 leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
