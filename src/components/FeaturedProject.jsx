import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { APPS_DATA } from '../data/appsData';

export const FeaturedProject = ({ onDownload }) => {
  const featured = APPS_DATA.find((a) => a.isFeatured) || APPS_DATA[0];

  if (!featured) return null;

  return (
    <section className="py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#E1E6E2]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#5B9C8D]" />
            <h2 className="text-lg sm:text-xl font-bold text-[#202522] font-sans">
              Featured project
            </h2>
          </div>
          <span className="text-[11px] font-semibold text-[#6F7772] uppercase tracking-wider">
            Flagship Android Build
          </span>
        </div>

        {/* Compact Editorial Card */}
        <div className="mt-4 bg-white rounded-2xl border border-[#E1E6E2] p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-7 items-center">
            
            {/* Left: Project Visual / Banner */}
            <div className="md:col-span-5 overflow-hidden rounded-xl border border-[#EDF0ED] bg-[#EAF1EC]/40 relative group">
              <img
                src={featured.banner || featured.icon}
                alt={featured.name}
                className="w-full h-48 sm:h-56 object-cover object-center rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-[#E1E6E2] text-xs font-semibold text-[#202522] shadow-sm flex items-center gap-1.5">
                <img src={featured.icon} alt="" className="w-3.5 h-3.5 rounded" />
                <span>{featured.name}</span>
              </div>
            </div>

            {/* Right: Editorial Information */}
            <div className="md:col-span-7 space-y-4">
              
              {/* Category & Version */}
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#EAF1EC] text-[#5B9C8D] text-[11px] font-semibold uppercase tracking-wider">
                  {featured.category}
                </span>
                <span className="text-[11px] text-[#6F7772] font-medium">
                  v{featured.version} · {featured.size}
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-0.5">
                <h3 className="text-xl sm:text-2xl font-bold text-[#202522] tracking-tight font-sans">
                  {featured.name}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#5B9C8D] font-sans">
                  {featured.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#6F7772] leading-relaxed line-clamp-3">
                {featured.description}
              </p>

              {/* Tech Stack Pills (Light Soft Sage) */}
              <div className="pt-2 border-t border-[#EDF0ED] flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-semibold text-[#6F7772] uppercase tracking-wider mr-1">
                  Built With:
                </span>
                {featured.techStack?.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md bg-[#EAF1EC] border border-[#E1E6E2] text-[11px] font-medium text-[#202522]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-1 flex flex-wrap items-center gap-2.5">
                <Link
                  to={`/app/${featured.id}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#202522] text-white text-xs font-semibold hover:bg-[#343d37] shadow-sm transition-all"
                >
                  <span>View project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => onDownload && onDownload(featured)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#EAF1EC] text-[#5B9C8D] border border-[#5B9C8D]/30 text-xs font-semibold hover:bg-[#5B9C8D] hover:text-white transition-all shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download APK</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
