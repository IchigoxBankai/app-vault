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

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  return (
    <div className="space-y-4 font-sans">
      {/* Horizontal Scrollable Screenshot Reel with Edge-to-Edge Mobile Feel */}
      <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-3 pt-1 snap-x no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        {screenshots.map((img, idx) => (
          <div
            key={idx}
            onClick={() => {
              setSelectedIdx(idx);
              setLightboxOpen(true);
            }}
            className="group relative shrink-0 w-36 sm:w-52 aspect-[9/16] rounded-2xl overflow-hidden bg-white border border-[#E1E6E2] hover:border-[#5B9C8D] active:scale-[0.98] cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 snap-start"
          >
            <img
              src={img}
              alt={`${appName} Screenshot ${idx + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#202522]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="p-2.5 rounded-xl bg-white/90 text-[#202522] shadow-sm">
                <Maximize2 className="w-4 h-4 text-[#5B9C8D]" />
              </div>
            </div>
            <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-lg bg-white/95 backdrop-blur-sm text-[10px] sm:text-[11px] font-semibold text-[#202522] border border-[#E1E6E2] shadow-sm">
              Screen {idx + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-fade-in font-sans"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close & Header */}
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between z-20 text-xs">
            <span className="text-white font-medium bg-black/50 px-3 py-1.5 rounded-xl backdrop-blur-md text-[11px] sm:text-xs truncate max-w-[70%]">
              {appName} • {selectedIdx + 1} of {screenshots.length}
            </span>
            <button
              onClick={() => setLightboxOpen(false)}
              className="p-2 rounded-xl bg-white/90 text-[#202522] hover:bg-white active:bg-white/80 transition-colors shadow-sm"
              aria-label="Close fullscreen view"
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
            className="absolute left-2 sm:left-6 p-2.5 sm:p-3 rounded-full sm:rounded-2xl bg-white/90 text-[#202522] hover:bg-white active:bg-white/80 transition-all shadow-md z-20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((prev) => (prev + 1) % screenshots.length);
            }}
            className="absolute right-2 sm:right-6 p-2.5 sm:p-3 rounded-full sm:rounded-2xl bg-white/90 text-[#202522] hover:bg-white active:bg-white/80 transition-all shadow-md z-20"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Main Image Display */}
          <div 
            className="max-h-[82vh] max-w-[80vw] sm:max-w-md w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black/20 border border-white/10 shadow-2xl flex items-center justify-center p-1"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={screenshots[selectedIdx]}
              alt={`${appName} Fullscreen`}
              className="w-auto h-auto max-h-[80vh] max-w-full object-contain mx-auto rounded-xl sm:rounded-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};
