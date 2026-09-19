import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Download, HardDrive, Terminal } from 'lucide-react';
import { APPS_DATA } from '../data/appsData';
import { CATEGORIES } from '../data/categoriesData';

export const ProjectIndex = ({ onDownload }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
      {/* Section Header */}
      <div className="flex items-center justify-between pb-3 hairline-b">
        <div className="flex items-center gap-2.5">
          <Terminal className="w-3.5 h-3.5 text-vault-cyan" />
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-vault-textMain">
            PROJECT INDEX
          </span>
          <span className="text-[10px] font-mono text-vault-darkMuted">
            / 0{APPS_DATA.length} BUILDS
          </span>
        </div>
        <a 
          href="#all-projects" 
          className="text-xs font-mono text-vault-muted hover:text-vault-cyan transition-colors flex items-center gap-1 group"
        >
          <span>ALL BUILDS</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* Index Table */}
      <div className="divide-y divide-vault-border/60">
        {APPS_DATA.map((app, index) => {
          const indexNum = String(index + 1).padStart(2, '0');
          const cat = CATEGORIES.find((c) => c.id === app.category);

          return (
            <div
              key={app.id}
              className="py-3.5 px-2 hover:bg-vault-surface/70 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-3 group"
            >
              {/* Left: Index number + Title + Category */}
              <div className="flex items-center gap-4 min-w-0">
                <span className="text-xs font-mono text-vault-darkMuted group-hover:text-vault-cyan transition-colors w-6">
                  {indexNum}
                </span>

                <Link
                  to={`/app/${app.id}`}
                  className="flex items-center gap-3 min-w-0"
                >
                  <img
                    src={app.icon}
                    alt={app.name}
                    className="w-8 h-8 rounded-lg object-cover border border-vault-border shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-vault-textMain group-hover:text-vault-cyan transition-colors truncate">
                        {app.name}
                      </span>
                      <span className="text-[10px] font-mono text-vault-muted px-1.5 py-0.5 rounded bg-vault-card border border-vault-border">
                        v{app.version}
                      </span>
                    </div>
                    <p className="text-xs text-vault-muted truncate hidden sm:block">
                      {app.tagline}
                    </p>
                  </div>
                </Link>
              </div>

              {/* Middle: Tech Stack */}
              <div className="hidden lg:flex items-center gap-2 min-w-0">
                {app.techStack?.slice(0, 3).map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono text-slate-400 bg-vault-card/80 border border-vault-border px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Right: Status & Actions */}
              <div className="flex items-center gap-3 self-end md:self-auto shrink-0">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-vault-emerald bg-vault-emerald/10 border border-vault-emerald/20 px-2 py-0.5 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-vault-emerald animate-pulse" />
                  <span>RELEASED</span>
                </div>

                <span className="text-[11px] font-mono text-vault-darkMuted hidden sm:inline-block">
                  {app.size}
                </span>

                <button
                  onClick={() => onDownload(app)}
                  className="px-2.5 py-1 rounded bg-vault-card hover:bg-vault-cardElevated border border-vault-border hover:border-vault-cyan/50 text-[11px] font-mono text-slate-200 hover:text-vault-cyan transition-colors flex items-center gap-1"
                  title={`Download ${app.name} APK`}
                >
                  <Download className="w-3 h-3" />
                  <span>APK</span>
                </button>

                <Link
                  to={`/app/${app.id}`}
                  className="text-xs font-mono text-vault-muted hover:text-white transition-colors p-1"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
