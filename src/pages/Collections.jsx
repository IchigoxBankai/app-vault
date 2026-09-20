import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, ArrowRight, Download } from 'lucide-react';
import { COLLECTIONS_DATA } from '../data/collectionsData';
import { APPS_DATA } from '../data/appsData';

export const Collections = ({ onDownload }) => {
  return (
    <div className="pt-4 sm:pt-6 pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 animate-fade-in font-sans">
      
      {/* Header */}
      <div className="space-y-1.5 pb-4 border-b border-[#E1E6E2]">
        <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-[#5B9C8D] tracking-wider uppercase">
          <Layers className="w-3.5 h-3.5" />
          <span>CURATED STACKS</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#202522] tracking-tight font-sans">
          Collections
        </h1>
        <p className="text-xs sm:text-sm text-[#6F7772] max-w-xl">
          Browse my projects by theme. Purpose-driven collections grouping mobile applications, workflow utilities, and experimental architectures.
        </p>
      </div>

      {/* Collections Stacks */}
      <div className="space-y-5 sm:space-y-6">
        {COLLECTIONS_DATA.map((col, index) => {
          const appsInCollection = APPS_DATA.filter((a) => col.appIds.includes(a.id));

          return (
            <div
              key={col.id}
              className="bg-white rounded-2xl border border-[#E1E6E2] p-4 sm:p-6 shadow-sm space-y-4"
            >
              {/* Collection Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 pb-3 border-b border-[#EDF0ED]">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#5B9C8D] font-mono">
                      0{index + 1}
                    </span>
                    <h2 className="text-base sm:text-xl font-bold text-[#202522] font-sans">
                      {col.name}
                    </h2>
                  </div>
                  <p className="text-xs text-[#6F7772]">
                    {col.description}
                  </p>
                </div>

                <span className="self-start sm:self-auto px-2.5 py-0.5 rounded-full bg-[#EAF1EC] text-[#5B9C8D] text-[10px] sm:text-[11px] font-semibold">
                  {appsInCollection.length} {appsInCollection.length === 1 ? 'Build' : 'Builds'}
                </span>
              </div>

              {/* Apps in this collection */}
              {appsInCollection.length === 0 ? (
                <p className="text-xs text-[#9AA19C] py-2">
                  New applications are currently in development for this collection.
                </p>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 sm:gap-3">
                  {appsInCollection.map((app) => (
                    <div
                      key={app.id}
                      className="p-3 rounded-xl bg-[#F7F8F5] border border-[#E1E6E2] hover:border-[#5B9C8D]/40 transition-all duration-200 flex items-center justify-between gap-2 group"
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                        <img
                          src={app.icon}
                          alt={app.name}
                          className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg object-cover border border-[#E1E6E2] shadow-sm shrink-0 bg-white"
                          loading="lazy"
                        />
                        <div className="min-w-0">
                          <Link to={`/app/${app.id}`}>
                            <h4 className="text-xs sm:text-sm font-bold text-[#202522] group-hover:text-[#5B9C8D] transition-colors font-sans truncate">
                              {app.name}
                            </h4>
                          </Link>
                          <p className="text-[10px] sm:text-[11px] text-[#6F7772] truncate">
                            {app.tagline}
                          </p>
                          <span className="text-[9px] sm:text-[10px] text-[#9AA19C] font-mono truncate block">
                            v{app.version} · {app.techStack?.slice(0, 2).join(' · ')}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0 ml-1">
                        <button
                          onClick={() => onDownload && onDownload(app)}
                          className="p-2 rounded-lg bg-white hover:bg-[#EAF1EC] active:bg-[#D5E2D9] text-[#5B9C8D] border border-[#E1E6E2] transition-colors"
                          title="Download APK"
                          aria-label={`Download ${app.name} APK`}
                        >
                          <Download className="w-3.5 h-3.5" />
                        </button>
                        <Link
                          to={`/app/${app.id}`}
                          className="p-2 rounded-lg bg-[#202522] hover:bg-[#343d37] active:bg-[#1a1f1b] text-white transition-colors"
                          title="View case study"
                          aria-label={`View ${app.name} case study`}
                        >
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
