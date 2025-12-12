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
      <div className="bg-white border-pixel shadow-pixel">
        {/* 8-bit styled tab header */}
        <div className="bg-carbon text-white px-4 py-2 border-b-4 border-carbon">
          <h3 className="font-pixel text-xl truncate">{title}</h3>
        </div>
        
        {/* Project image carousel */}
        <div className="aspect-video bg-carbon/5 overflow-hidden relative flex items-center justify-center group">
          {imageList.length > 0 ? (
            <>
              <img 
                key={`${title}-${currentIndex}`}
                src={imageList[currentIndex]} 
                alt={`${title} - ${currentIndex + 1}`}
                className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                onClick={() => setIsLightboxOpen(true)}
              />
              {/* Expand button */}
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="absolute top-2 right-2 bg-carbon/80 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-carbon"
                aria-label="Ampliar imagen"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
              {/* Image indicators */}
              {imageList.length > 1 && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {imageList.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2.5 h-2.5 border border-carbon transition-none ${
                        idx === currentIndex ? 'bg-carbon' : 'bg-white'
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
        <div className="p-4 space-y-3">
          {/* Description */}
          <p className="font-sans text-carbon text-sm leading-relaxed">
            {description}
          </p>
          
          {/* Tech stack with icons */}
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span 
                key={tech}
                className="font-mono text-xs px-2 py-1 bg-soft-gray text-carbon flex items-center gap-1"
              >
                <TechIcon tech={tech} className="w-3.5 h-3.5" />
                {tech}
              </span>
            ))}
          </div>

          {/* Links - only show if demoUrl or repoUrl exists */}
          {(demoUrl || repoUrl) && (
            <div className="flex flex-wrap gap-3 pt-2">
              {demoUrl && (
                <a 
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-carbon hover:text-retro-blue hover-jump transition-none"
                >
                  Visitar →
                </a>
              )}
              {repoUrl && (
                <a 
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-carbon hover:text-retro-blue hover-jump transition-none"
                >
                  Repo →
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
