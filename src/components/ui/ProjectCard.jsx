/**
 * ProjectCard Component
 * Cartridge-style card with pixelated border for displaying projects
 * Requirements: 4.2, 4.3, 4.4, 4.5
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
  // Support both single image and multiple images
  const imageList = images.length > 0 ? images : (image ? [image] : []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Auto-rotate images every 3 seconds if multiple images (only when lightbox is closed)
  useEffect(() => {
    if (imageList.length <= 1 || isLightboxOpen) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imageList.length, isLightboxOpen]);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsLightboxOpen(false);
    };
    if (isLightboxOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isLightboxOpen]);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % imageList.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length);

  return (
    <>
      <div className="glass-card border-pixel shadow-pixel flex flex-col h-full relative group/card transition-all duration-500 hover:shadow-[0_0_30px_rgba(39,103,245,0.3)] hover:-translate-y-2 overflow-hidden">
        {/* Animated top border glow */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-retro-blue to-transparent opacity-50 group-hover/card:opacity-100 transition-opacity duration-500" />

        {/* 8-bit styled tab header */}
        <div className="bg-carbon/90 backdrop-blur-sm text-white px-5 py-4 border-b border-white/10 flex items-center gap-3 relative z-10">
          <div className="w-2 h-2 bg-retro-blue rounded-full absolute left-3 animate-pulse-slow" />
          <h3 className="font-pixel text-xl truncate tracking-wide pl-2 relative z-10 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">{title}</h3>
        </div>

        {/* Project image carousel */}
        <div className="aspect-video bg-black/60 overflow-hidden relative flex items-center justify-center group/img border-b border-white/10">
          {imageList.length > 0 ? (
            <>
              {/* Overlay for hover effect */}
              <div className="absolute inset-0 bg-retro-blue/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 z-10 pointer-events-none mix-blend-overlay" />

              <img
                key={`${title}-${currentIndex}`}
                src={imageList[currentIndex]}
                alt={`${title} - ${currentIndex + 1}`}
                className="max-w-full max-h-full w-auto h-auto object-contain transition-all duration-500 group-hover/img:scale-110 group-hover/img:rotate-1 cursor-pointer"
                onClick={() => setIsLightboxOpen(true)}
              />
              {/* Expand button */}
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="absolute top-3 right-3 bg-carbon/90 border border-white/20 text-white p-2.5 opacity-0 group-hover/img:opacity-100 transition-all duration-300 hover:bg-retro-blue hover:scale-110 z-20 rounded shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                aria-label="Ampliar imagen"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
              {/* Image indicators */}
              {imageList.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-carbon/80 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                  {imageList.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-retro-blue scale-125 shadow-[0_0_8px_rgba(39,103,245,0.8)]' : 'bg-white/40 hover:bg-white/70'
                        }`}
                      aria-label={`Imagen ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-pixel text-carbon text-center px-4">{title}</span>
            </div>
          )}
        </div>

        {/* Content area */}
        <div className="p-6 space-y-5 flex-grow flex flex-col relative z-10 bg-gradient-to-b from-transparent to-black/20">
          {/* Description */}
          <p className="font-sans text-white/80 text-sm leading-relaxed flex-grow font-light">
            {description}
          </p>

          {/* Tech stack with glowing pills */}
          <div className="flex flex-wrap gap-2.5 pt-1">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-3 py-1.5 bg-carbon/80 border border-retro-blue/30 text-retro-blue/90 rounded-full flex items-center gap-2 shadow-[0_0_10px_rgba(39,103,245,0.1)] hover:bg-retro-blue/10 hover:border-retro-blue hover:text-white hover:shadow-[0_0_15px_rgba(39,103,245,0.4)] transition-all duration-300 relative group/tech overflow-hidden"
              >
                <TechIcon tech={tech} className="w-3.5 h-3.5 relative z-10" />
                <span className="relative z-10">{tech}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/tech:animate-[typing_1s_ease-out_forwards]" />
              </span>
            ))}
          </div>

          {/* Links - modern action buttons */}
          {(demoUrl || repoUrl) && (
            <div className="flex flex-wrap gap-3 pt-3 border-t border-white/5 mt-auto">
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm font-medium text-white px-4 py-2 bg-retro-blue rounded-md shadow-[0_0_15px_rgba(39,103,245,0.4)] hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(39,103,245,0.6)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
                >
                  Visitar
                  <span aria-hidden="true" className="text-white/70">↗</span>
                </a>
              )}
              {repoUrl && (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm font-medium text-white/90 px-4 py-2 bg-white/5 border border-white/10 rounded-md hover:bg-white/10 hover:border-white/30 hover:text-white hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Repo
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal - rendered via portal to body */}
      {isLightboxOpen && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-carbon/95 flex items-center justify-center animate-fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 text-white font-pixel text-2xl hover:text-soft-gray z-10"
            aria-label="Cerrar"
          >
            ✕
          </button>

          {/* Navigation arrows */}
          {imageList.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 text-white font-pixel text-4xl hover:text-soft-gray z-10"
                aria-label="Imagen anterior"
              >
                ◀
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 text-white font-pixel text-4xl hover:text-soft-gray z-10"
                aria-label="Imagen siguiente"
              >
                ▶
              </button>
            </>
          )}

          {/* Image */}
          <img
            src={imageList[currentIndex]}
            alt={`${title} - ${currentIndex + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Image counter */}
          {imageList.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-mono text-sm">
              {currentIndex + 1} / {imageList.length}
            </div>
          )}
        </div>,
        document.body
      )}
    </>
  );
}
