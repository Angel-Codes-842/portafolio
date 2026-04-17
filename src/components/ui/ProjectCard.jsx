/**
 * ProjectCard Component
 * Redesigned card with improved layout and visual polish
 */

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import TechIcon from './TechIcon';

export default function ProjectCard({
  title,
  description,
  image,
  images = [],
  techStack = [],
  demoUrl,
  repoUrl
}) {
  const imageList = images.length > 0 ? images : (image ? [image] : []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = (idx) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(idx);
      setIsTransitioning(false);
    }, 200);
  };

  const nextImage = () => goTo((currentIndex + 1) % imageList.length);
  const prevImage = () => goTo((currentIndex - 1 + imageList.length) % imageList.length);

  // Auto-rotate
  useEffect(() => {
    if (imageList.length <= 1 || isLightboxOpen) return;
    const interval = setInterval(nextImage, 3500);
    return () => clearInterval(interval);
  }, [imageList.length, isLightboxOpen, currentIndex]);

  // Escape key for lightbox
  useEffect(() => {
    const handleEscape = (e) => { if (e.key === 'Escape') setIsLightboxOpen(false); };
    if (isLightboxOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isLightboxOpen]);

  return (
    <>
      <div className="group/card relative flex flex-col h-full rounded-xl overflow-hidden border border-white/8 bg-[#0d0d0d] transition-all duration-500 hover:-translate-y-2 hover:border-retro-blue/40 hover:shadow-[0_8px_40px_rgba(39,103,245,0.18)]">

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-retro-blue/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-10" />

        {/* Image area */}
        <div className="relative overflow-hidden bg-black" style={{ aspectRatio: '16/9' }}>
          {imageList.length > 0 ? (
            <>
              <img
                key={currentIndex}
                src={imageList[currentIndex]}
                alt={`${title} screenshot ${currentIndex + 1}`}
                className={`w-full h-full object-cover transition-all duration-500 group-hover/card:scale-[1.03] ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                onClick={() => setIsLightboxOpen(true)}
                style={{ cursor: 'zoom-in' }}
              />

              {/* Dark gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Prev / Next arrows — visible on hover */}
              {imageList.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 border border-white/10 text-white flex items-center justify-center opacity-0 group-hover/card:opacity-100 hover:bg-retro-blue/80 transition-all duration-200 z-20 backdrop-blur-sm"
                    aria-label="Anterior"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 border border-white/10 text-white flex items-center justify-center opacity-0 group-hover/card:opacity-100 hover:bg-retro-blue/80 transition-all duration-200 z-20 backdrop-blur-sm"
                    aria-label="Siguiente"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Expand button */}
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/70 border border-white/10 text-white flex items-center justify-center opacity-0 group-hover/card:opacity-100 hover:bg-retro-blue/80 transition-all duration-200 z-20 backdrop-blur-sm"
                aria-label="Ampliar"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>

              {/* Dot indicators */}
              {imageList.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                  {imageList.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goTo(idx)}
                      className={`rounded-full transition-all duration-300 ${
                        idx === currentIndex
                          ? 'w-5 h-1.5 bg-retro-blue shadow-[0_0_6px_rgba(39,103,245,0.9)]'
                          : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
                      }`}
                      aria-label={`Imagen ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-pixel text-white/20 text-lg">{title}</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-5 gap-4">

          {/* Title */}
          <h3 className="font-pixel text-lg text-white leading-snug tracking-wide">
            {title}
          </h3>

          {/* Description */}
          <p className="font-sans text-white/55 text-sm leading-relaxed flex-grow">
            {description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded-md bg-white/4 border border-white/8 text-white/60 hover:border-retro-blue/50 hover:text-retro-blue hover:bg-retro-blue/8 transition-all duration-200"
              >
                <TechIcon tech={tech} className="w-3 h-3" />
                {tech}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          {(demoUrl || repoUrl) && (
            <div className="flex gap-2.5 pt-1 border-t border-white/6">
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-xs font-medium px-4 py-2 rounded-lg bg-retro-blue text-white hover:bg-blue-500 hover:shadow-[0_0_16px_rgba(39,103,245,0.5)] transition-all duration-200"
                >
                  Ver demo
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              {repoUrl && (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-xs font-medium px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:border-white/25 hover:text-white transition-all duration-200"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Código
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-black/92 backdrop-blur-md flex items-center justify-center animate-fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-4 bg-gradient-to-b from-black/80 to-transparent z-10">
            <span className="font-pixel text-white/70 text-sm">{title}</span>
            <div className="flex items-center gap-3">
              {imageList.length > 1 && (
                <span className="font-mono text-white/40 text-xs">{currentIndex + 1} / {imageList.length}</span>
              )}
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 border border-white/15 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Cerrar"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Arrows */}
          {imageList.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 w-10 h-10 rounded-full bg-white/10 border border-white/15 text-white flex items-center justify-center hover:bg-retro-blue/70 transition-all z-10"
                aria-label="Anterior"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 w-10 h-10 rounded-full bg-white/10 border border-white/15 text-white flex items-center justify-center hover:bg-retro-blue/70 transition-all z-10"
                aria-label="Siguiente"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Image */}
          <img
            src={imageList[currentIndex]}
            alt={`${title} - ${currentIndex + 1}`}
            className="max-w-[88vw] max-h-[82vh] object-contain rounded-lg shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Dot indicators */}
          {imageList.length > 1 && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {imageList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); goTo(idx); }}
                  className={`rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-6 h-2 bg-retro-blue shadow-[0_0_8px_rgba(39,103,245,0.8)]'
                      : 'w-2 h-2 bg-white/25 hover:bg-white/50'
                  }`}
                  aria-label={`Imagen ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>,
        document.body
      )}
    </>
  );
}
