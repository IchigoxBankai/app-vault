import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Filter, X } from 'lucide-react';
import { APPS_DATA } from '../data/appsData';
import { CATEGORIES } from '../data/categoriesData';
import { AppCard } from '../components/AppCard';

export const AllApps = ({ onDownload }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Search & Category Filter Logic
  const filteredApps = useMemo(() => {
    let result = APPS_DATA;

    if (selectedCategory !== 'all') {
      result = result.filter((app) => app.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter((app) => {
        return (
          app.name.toLowerCase().includes(q) ||
          app.tagline?.toLowerCase().includes(q) ||
          app.description?.toLowerCase().includes(q) ||
          app.techStack?.some((t) => t.toLowerCase().includes(q)) ||
          app.category?.toLowerCase().includes(q)
        );
      });
    }

    return result;
  }, [searchQuery, selectedCategory]);

  return (
    <div className="pt-4 sm:pt-6 pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6 animate-fade-in font-sans">
      
      {/* Header & Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3.5 sm:gap-4 pb-4 border-b border-[#E1E6E2]">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-[#5B9C8D] tracking-wider uppercase">
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
        <div className="relative w-full sm:w-72">
          <Search className="w-3.5 h-3.5 text-[#6F7772] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name or tech..."
            className="w-full pl-8 pr-8 py-2.5 sm:py-2 rounded-xl bg-white border border-[#E1E6E2] text-xs text-[#202522] placeholder:text-[#9AA19C] focus:outline-none focus:border-[#5B9C8D] transition-colors shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#6F7772] hover:text-[#202522]"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile-Friendly Category Filter Chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            selectedCategory === 'all'
              ? 'bg-[#5B9C8D] text-white shadow-sm'
              : 'bg-white text-[#6F7772] hover:text-[#202522] border border-[#E1E6E2]'
          }`}
        >
          All ({APPS_DATA.length})
        </button>

        {CATEGORIES.map((cat) => {
          const count = APPS_DATA.filter((a) => a.category === cat.id).length;
          const isSelected = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-[#5B9C8D] text-white shadow-sm'
                  : 'bg-white text-[#6F7772] hover:text-[#202522] border border-[#E1E6E2]'
              }`}
            >
              <span>{cat.name}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                isSelected ? 'bg-white/20 text-white' : 'bg-[#EAF1EC] text-[#5B9C8D]'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid of Apps */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#6F7772]">
          <span>
            Showing <strong>{filteredApps.length}</strong> {filteredApps.length === 1 ? 'application' : 'applications'}
          </span>
          {(searchQuery || selectedCategory !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-[#5B9C8D] font-semibold hover:underline"
            >
              Reset filters
            </button>
          )}
        </div>

        {filteredApps.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#E1E6E2] p-6 sm:p-8 text-center space-y-2.5 shadow-sm">
            <h3 className="text-sm font-bold text-[#202522] font-sans">
              No matching applications found
            </h3>
            <p className="text-xs text-[#6F7772] max-w-md mx-auto">
              No builds matched your active filter. Try resetting filters or searching for another keyword.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-2 px-3.5 py-1.5 rounded-xl bg-[#5B9C8D] text-white text-xs font-semibold hover:bg-[#4e897b] transition-colors inline-block"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
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
