import React, { useState, useMemo } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { APPS_DATA } from '../data/appsData';
import { AppCard } from '../components/AppCard';

export const AllApps = ({ onDownload }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Search Filter Logic
  const filteredApps = useMemo(() => {
    if (!searchQuery.trim()) return APPS_DATA;
    const q = searchQuery.toLowerCase().trim();
    return APPS_DATA.filter((app) => {
      return (
        app.name.toLowerCase().includes(q) ||
        app.tagline?.toLowerCase().includes(q) ||
        app.description?.toLowerCase().includes(q) ||
        app.techStack?.some((t) => t.toLowerCase().includes(q)) ||
        app.category?.toLowerCase().includes(q)
      );
    });
  }, [searchQuery]);

  return (
    <div className="pt-6 pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 animate-fade-in font-sans">
      
      {/* Header & Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#E1E6E2]">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#5B9C8D] tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>APPVAULT ARCHIVE</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#202522] tracking-tight font-sans">
            My Apps
          </h1>
          <p className="text-xs sm:text-sm text-[#6F7772] max-w-md">
            Complete collection of Android applications, utility tools, and release builds.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px] sm:min-w-[280px]">
          <Search className="w-3.5 h-3.5 text-[#6F7772] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name or technology..."
            className="w-full pl-8 pr-3 py-2 rounded-xl bg-white border border-[#E1E6E2] text-xs text-[#202522] placeholder:text-[#9AA19C] focus:outline-none focus:border-[#5B9C8D] transition-colors shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#6F7772] hover:text-[#202522]"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Grid of Apps */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#6F7772]">
          <span>
            Showing <strong>{filteredApps.length}</strong> {filteredApps.length === 1 ? 'application' : 'applications'}
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#5B9C8D] hover:underline"
            >
              Show all
            </button>
          )}
        </div>

        {filteredApps.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#E1E6E2] p-8 text-center space-y-2 shadow-sm">
            <h3 className="text-sm font-bold text-[#202522] font-sans">
              No matching applications found
            </h3>
            <p className="text-xs text-[#6F7772] max-w-md mx-auto">
              No builds matched your search query "{searchQuery}". Try searching for another keyword.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-2 px-3.5 py-1.5 rounded-xl bg-[#5B9C8D] text-white text-xs font-semibold hover:bg-[#4e897b] transition-colors inline-block"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredApps.map((app) => (
              <AppCard
                key={app.id}
                app={app}
                onDownload={onDownload}
              />
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
