import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { APPS_DATA } from '../data/appsData';
import { CATEGORIES } from '../data/categoriesData';

export const QuickSearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = query.trim() === ''
    ? APPS_DATA
    : APPS_DATA.filter((app) => {
        const q = query.toLowerCase().trim();
        return (
          app.name.toLowerCase().includes(q) ||
          app.packageName?.toLowerCase().includes(q) ||
          app.tagline?.toLowerCase().includes(q) ||
          app.description?.toLowerCase().includes(q) ||
          app.techStack?.some((t) => t.toLowerCase().includes(q)) ||
          app.category?.toLowerCase().includes(q)
        );
      });

  const handleSelectApp = (appId) => {
    onClose();
    navigate(`/app/${appId}`);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/40 backdrop-blur-sm animate-fade-in font-sans"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl rounded-2xl bg-white border border-[#E1E6E2] shadow-2xl overflow-hidden animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#EDF0ED] flex items-center gap-3 bg-[#F7F8F5]">
          <Search className="w-5 h-5 text-[#5B9C8D] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search my apps by name, tech, or feature..."
            className="w-full bg-transparent text-sm text-[#202522] placeholder:text-[#9AA19C] outline-none font-medium"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 text-[#6F7772] hover:text-[#202522]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="px-2 py-0.5 text-[10px] bg-white border border-[#E1E6E2] rounded-lg text-[#202522] font-mono font-bold">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="p-3 max-h-80 overflow-y-auto space-y-1 bg-white">
          <div className="px-3 py-1.5 text-xs text-[#6F7772] flex items-center justify-between font-medium">
            <span>{query ? `Search Results (${results.length})` : 'All Applications'}</span>
            <span>Tap to open project</span>
          </div>

          {results.length === 0 ? (
            <div className="text-center py-8 text-xs text-[#6F7772]">
              No matching applications found for "{query}".
            </div>
          ) : (
            results.map((app) => {
              const cat = CATEGORIES.find((c) => c.id === app.category);

              return (
                <div
                  key={app.id}
                  onClick={() => handleSelectApp(app.id)}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-[#EAF1EC]/60 cursor-pointer group transition-colors"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <img
                      src={app.icon}
                      alt={app.name}
                      className="w-10 h-10 rounded-xl object-cover border border-[#E1E6E2] shrink-0 bg-white"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[#202522] group-hover:text-[#5B9C8D] transition-colors truncate font-sans">
                          {app.name}
                        </span>
                        <span className="text-[10px] text-[#5B9C8D] bg-[#EAF1EC] px-2 py-0.2 rounded-md font-semibold">
                          v{app.version}
                        </span>
                      </div>
                      <p className="text-xs text-[#6F7772] truncate">
                        {app.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 text-xs">
                    <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-[11px] font-medium text-[#6F7772] bg-[#F7F8F5] border border-[#EDF0ED]">
                      {cat?.name || app.category}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#9AA19C] group-hover:text-[#5B9C8D] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer info bar */}
        <div className="p-3 bg-[#F7F8F5] border-t border-[#EDF0ED] flex items-center justify-between text-xs text-[#6F7772]">
          <span>Instant AppVault Search</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
