import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2, Sparkles } from 'lucide-react';

export const ScreenshotGallery = ({ screenshots = [], appName = '' }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!screenshots || screenshots.length === 0) return null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') {
        setSelectedIdx((prev) => (prev + 1) % screenshots.length);
      }
      if (e.key === 'ArrowLeft') {
        setSelectedIdx((prev) => (prev - 1 + screenshots.length) % screenshots.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, screenshots.length]);

  return (
    <div className="space-y-4 font-sans">
      {/* Horizontal Scrollable Screenshot Reel */}
      <div className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x no-scrollbar">
        {screenshots.map((img, idx) => (
          <div
            key={idx}
            onClick={() => {
              setSelectedIdx(idx);
              setLightboxOpen(true);
            }}
            className="group relative shrink-0 w-44 sm:w-56 aspect-[9/16] rounded-2xl overflow-hidden bg-white border border-vault-border hover:border-vault-sage cursor-pointer shadow-soft hover:shadow-soft-hover transition-all duration-300 snap-start"
          >
            <img
              src={img}
              alt={`${appName} Screenshot ${idx + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-vault-text/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="p-2.5 rounded-xl bg-white/90 text-vault-text shadow-sm">
                <Maximize2 className="w-4 h-4 text-vault-sage" />
              </div>
            </div>
            <div className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-lg bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-vault-text border border-vault-borderLight shadow-sm">
              Screen {idx + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in font-sans"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close & Header */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 text-xs">
            <span className="text-white font-medium bg-black/40 px-3 py-1.5 rounded-xl backdrop-blur-md">
              {appName} • Screen {selectedIdx + 1} of {screenshots.length}
            </span>
            <button
              onClick={() => setLightboxOpen(false)}
              className="p-2 rounded-xl bg-white/90 text-vault-text hover:bg-white transition-colors shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((prev) => (prev - 1 + screenshots.length) % screenshots.length);
            }}
            className="absolute left-4 sm:left-8 p-3 rounded-2xl bg-white/90 text-vault-text hover:bg-white transition-all shadow-md z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((prev) => (prev + 1) % screenshots.length);
            }}
            className="absolute right-4 sm:right-8 p-3 rounded-2xl bg-white/90 text-vault-text hover:bg-white transition-all shadow-md z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Main Image Display */}
          <div 
            className="max-h-[85vh] max-w-xs sm:max-w-md w-full rounded-3xl overflow-hidden bg-white border border-vault-border shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={screenshots[selectedIdx]}
              alt={`${appName} Fullscreen`}
              className="w-full h-full max-h-[85vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};
