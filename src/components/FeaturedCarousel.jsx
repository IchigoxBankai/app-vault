import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Download, ArrowRight, Star, ChevronLeft, ChevronRight, HardDrive } from 'lucide-react';
import { APPS_DATA } from '../data/appsData';
import { CATEGORIES } from '../data/categoriesData';

export const FeaturedCarousel = ({ onDownload }) => {
  const featuredApps = APPS_DATA.filter((a) => a.isFeatured);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (featuredApps.length === 0) return null;

  const currentApp = featuredApps[currentIndex];
  const categoryInfo = CATEGORIES.find((c) => c.id === currentApp.category) || {
    name: currentApp.category,
    color: '#00E5FF',
    bgLight: 'rgba(0, 229, 255, 0.1)',
    border: 'rgba(0, 229, 255, 0.3)',
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredApps.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredApps.length) % featuredApps.length);
  };

  return (
    <section className="my-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-vault-cyan" />
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Vault Spotlight
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="p-2 rounded-xl bg-vault-cardElevated border border-vault-border text-slate-300 hover:text-white hover:border-vault-cyan/50 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-xl bg-vault-cardElevated border border-vault-border text-slate-300 hover:text-white hover:border-vault-cyan/50 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Featured Banner Card */}
      <div className="relative rounded-3xl glass-card border border-vault-border overflow-hidden shadow-vault-card group">
        {/* Background Image Banner with Heavy Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${currentApp.banner})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-vault-bg via-vault-bg/90 to-vault-bg/40 backdrop-blur-[2px]" />
        
        {/* Content Box */}
        <div className="relative p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 z-10">
          <div className="flex items-start sm:items-center gap-5 max-w-2xl">
            <img
              src={currentApp.icon}
              alt={currentApp.name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl object-cover border-2 border-vault-border shadow-2xl shrink-0 group-hover:border-vault-cyan/60 transition-colors"
            />
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-vault-cyan text-vault-bg shadow-glow-cyan">
                  FEATURED
                </span>
                <span 
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold"
                  style={{
                    backgroundColor: categoryInfo.bgLight,
                    color: categoryInfo.color,
                    border: `1px solid ${categoryInfo.border}`
                  }}
                >
                  {categoryInfo.name}
                </span>
                <span className="text-xs font-mono text-vault-muted bg-vault-card px-2 py-0.5 rounded border border-vault-border">
                  v{currentApp.version}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {currentApp.name}
              </h3>
              <p className="text-xs sm:text-sm text-vault-muted leading-relaxed line-clamp-2">
                {currentApp.description}
              </p>

              <div className="flex items-center gap-4 text-xs font-medium text-slate-300 pt-1 flex-wrap">
                <span className="flex items-center gap-1.5 text-vault-amber">
                  <Star className="w-3.5 h-3.5 fill-vault-amber" />
                  {currentApp.rating} ({currentApp.reviewCount} reviews)
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-vault-cyan">
                  <HardDrive className="w-3.5 h-3.5" />
                  {currentApp.size}
                </span>
                <span>•</span>
                <span className="text-vault-emerald">
                  {currentApp.downloads} downloads
                </span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex sm:flex-col items-center gap-3 w-full sm:w-auto shrink-0">
            <button
              onClick={() => onDownload(currentApp)}
              className="flex-1 sm:flex-none w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-vault-cyan via-vault-blue to-vault-purple text-vault-bg font-bold text-sm flex items-center justify-center gap-2 shadow-glow-cyan hover:opacity-95 active:scale-95 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download APK</span>
            </button>
            <Link
              to={`/app/${currentApp.id}`}
              className="flex-1 sm:flex-none w-full px-6 py-3.5 rounded-xl bg-vault-cardElevated hover:bg-vault-card border border-vault-border text-slate-200 hover:text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all"
            >
              <span>View Specs & Screens</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Carousel indicator dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
          {featuredApps.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                currentIndex === i ? 'w-6 bg-vault-cyan' : 'w-1.5 bg-vault-border hover:bg-vault-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
