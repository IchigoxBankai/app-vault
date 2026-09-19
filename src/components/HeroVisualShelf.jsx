import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Download } from 'lucide-react';
import { APPS_DATA } from '../data/appsData';

export const HeroVisualShelf = ({ onDownload }) => {
  const cooklet = APPS_DATA.find((a) => a.id === 'cooklet') || APPS_DATA[0];
  const snapnest = APPS_DATA.find((a) => a.id === 'snapnest') || APPS_DATA[1];

  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-none h-[340px] sm:h-[370px] flex items-center justify-center select-none">
      
      {/* Background Soft Accent Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#EAF1EC]/90 via-white/50 to-[#EAF1EC]/60 rounded-2xl -rotate-1 transform scale-95 border border-[#E1E6E2]/80 shadow-sm" />

      {/* Main Backing Card: Cooklet */}
      {cooklet && (
        <div className="absolute top-2 left-3 sm:left-6 right-6 sm:right-10 bg-white rounded-2xl border border-[#E1E6E2] p-4 shadow-sm hover:shadow-md transition-all duration-300 transform -rotate-1 hover:rotate-0">
          <div className="flex items-center justify-between pb-2.5 border-b border-[#EDF0ED]">
            <div className="flex items-center gap-2.5">
              <img
                src={cooklet.icon}
                alt={cooklet.name}
                className="w-8 h-8 rounded-lg object-cover border border-[#E1E6E2]"
              />
              <div>
                <h4 className="text-xs font-bold text-[#202522] font-sans">
                  {cooklet.name}
                </h4>
                <p className="text-[10px] text-[#6F7772]">
                  {cooklet.category.toUpperCase()} • v{cooklet.version}
                </p>
              </div>
            </div>
            <span className="text-[10px] font-semibold text-[#5B9C8D] bg-[#EAF1EC] px-2 py-0.5 rounded-full">
              Featured Build
            </span>
          </div>

          <p className="text-[11px] text-[#6F7772] mt-2 line-clamp-2 leading-relaxed">
            {cooklet.tagline}
          </p>

          <div className="mt-2.5 flex items-center justify-between pt-1">
            <div className="flex items-center gap-1.5 text-[10px] text-[#6F7772]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
              <span>Release Ready</span>
            </div>
            <Link
              to={`/app/${cooklet.id}`}
              className="text-[11px] font-semibold text-[#5B9C8D] hover:underline flex items-center gap-0.5 group"
            >
              <span>View app</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      )}

      {/* Foreground Overlapping Card: Snapnest */}
      {snapnest && (
        <div className="absolute bottom-3 right-3 sm:right-4 left-8 sm:left-16 bg-white rounded-2xl border border-[#E1E6E2] p-4 shadow-md transition-all duration-300 transform rotate-1 hover:rotate-0 hover:-translate-y-0.5">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <img
                src={snapnest.icon}
                alt={snapnest.name}
                className="w-9 h-9 rounded-lg object-cover border border-[#E1E6E2] shadow-sm"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs font-bold text-[#202522] font-sans">
                    {snapnest.name}
                  </h4>
                  <span className="text-[9px] font-semibold text-[#5B9C8D] bg-[#EAF1EC] px-1.5 py-0.2 rounded">
                    Android APK
                  </span>
                </div>
                <p className="text-[11px] text-[#6F7772] mt-0.5">
                  Smart Screenshot Vault & OCR
                </p>
              </div>
            </div>
          </div>

          <div className="mt-2.5 pt-2 border-t border-[#EDF0ED] flex items-center justify-between">
            <span className="text-[10px] text-[#6F7772]">
              Flutter · ML Kit · SQLite
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => onDownload && onDownload(snapnest)}
                className="p-1 rounded-md bg-[#EAF1EC] text-[#5B9C8D] hover:bg-[#5B9C8D] hover:text-white transition-colors"
                title="Download APK"
              >
                <Download className="w-3 h-3" />
              </button>
              <Link
                to={`/app/${snapnest.id}`}
                className="px-2.5 py-1 rounded-lg bg-[#202522] text-white text-[11px] font-semibold hover:bg-[#343d37] transition-colors flex items-center gap-0.5"
              >
                <span>Details</span>
                <ArrowUpRight className="w-2.5 h-2.5" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Floating Mini Pill */}
      <div className="absolute -bottom-2 left-4 sm:left-8 bg-white border border-[#E1E6E2] py-1 px-2.5 rounded-full shadow-sm flex items-center gap-1.5 text-[11px] text-[#202522] font-medium">
        <Sparkles className="w-3 h-3 text-[#5B9C8D]" />
        <span>{APPS_DATA.length} Android Apps Archival</span>
      </div>

    </div>
  );
};
