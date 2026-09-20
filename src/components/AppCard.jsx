import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { CATEGORIES } from '../data/categoriesData';

export const AppCard = ({ app, onDownload }) => {
  const categoryName = CATEGORIES.find((c) => c.id === app.category)?.name || app.category;

  return (
    <div className="group bg-white rounded-2xl border border-[#E1E6E2] p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
      
      {/* Top: App Visual / Screenshot Banner */}
      <div>
        <Link to={`/app/${app.id}`} className="block overflow-hidden rounded-xl border border-[#EDF0ED] bg-[#EAF1EC]/30 relative">
          <img
            src={app.banner || app.icon}
            alt={app.name}
            className="w-full h-36 sm:h-40 object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded-lg border border-[#E1E6E2] text-[10px] font-semibold text-[#202522] shadow-sm font-mono">
            {app.size || 'APK'}
          </div>
        </Link>

        {/* Middle: Icon, Name & Tagline */}
        <div className="mt-3.5 flex items-start gap-3">
          <img
            src={app.icon}
            alt={app.name}
            className="w-10 h-10 rounded-xl object-cover border border-[#E1E6E2] shadow-sm shrink-0 bg-white"
            loading="lazy"
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 flex-wrap">
              <Link to={`/app/${app.id}`}>
                <h3 className="text-sm sm:text-base font-bold text-[#202522] group-hover:text-[#5B9C8D] transition-colors font-sans truncate">
                  {app.name}
                </h3>
              </Link>
              <span className="px-2 py-0.2 rounded bg-[#EAF1EC] text-[#5B9C8D] text-[9px] font-semibold uppercase tracking-wider">
                {categoryName}
              </span>
            </div>
            <p className="text-xs text-[#6F7772] mt-0.5 line-clamp-2 leading-relaxed font-sans">
              {app.tagline}
            </p>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-3 flex flex-wrap gap-1">
          {app.techStack?.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-2 py-0.5 rounded-md bg-[#EAF1EC] border border-[#E1E6E2] text-[#202522] font-medium"
            >
              {tech}
            </span>
          ))}
          {app.techStack?.length > 3 && (
            <span className="text-[10px] px-1 py-0.5 text-[#6F7772]">
              +{app.techStack.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="mt-4 pt-3 border-t border-[#EDF0ED] flex items-center justify-between">
        <Link
          to={`/app/${app.id}`}
          className="text-xs font-semibold text-[#202522] hover:text-[#5B9C8D] flex items-center gap-1 group/btn transition-colors py-1"
        >
          <span>View project</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
        </Link>

        <button
          onClick={() => onDownload && onDownload(app)}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#EAF1EC] text-[#5B9C8D] hover:bg-[#5B9C8D] hover:text-white active:bg-[#4e897b] text-xs font-semibold transition-colors shadow-sm"
          title={`Download ${app.name} APK`}
        >
          <Download className="w-3.5 h-3.5" />
          <span>APK</span>
        </button>
      </div>

    </div>
  );
};
