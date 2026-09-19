import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowRight, Github, Sparkles, Smartphone, ShieldCheck, Terminal, Cpu } from 'lucide-react';
import { APPS_DATA } from '../data/appsData';

export const FeaturedBuild = ({ onDownload }) => {
  const featured = APPS_DATA.find((a) => a.isFeatured) || APPS_DATA[0];

  if (!featured) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Editorial Section Label */}
      <div className="flex items-center justify-between pb-3 hairline-b mb-6">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-vault-amber" />
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-vault-textMain">
            FEATURED BUILD // 01
          </span>
        </div>
        <span className="text-[10px] font-mono text-vault-darkMuted uppercase">
          LATEST SHIPPED ARTIFACT
        </span>
      </div>

      {/* Showcase Card */}
      <div className="archive-card rounded-2xl border border-vault-border overflow-hidden relative group">
        {/* Background accent ambient light */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-vault-amber/5 blur-3xl pointer-events-none rounded-full" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 relative z-10 items-center">
          {/* Left Column: Specs & Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Meta Tags */}
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="px-2.5 py-1 rounded bg-vault-amber/15 border border-vault-amber/30 text-vault-amber text-[10px] font-mono font-bold uppercase tracking-wider">
                FEATURED RELEASE
              </span>
              <span className="px-2 py-0.5 rounded bg-vault-card border border-vault-border text-vault-muted text-[10px] font-mono">
                BUILD v{featured.version}
              </span>
              <span className="px-2 py-0.5 rounded bg-vault-card border border-vault-border text-vault-muted text-[10px] font-mono">
                {featured.architecture}
              </span>
            </div>

            {/* Title & Tagline */}
            <div className="space-y-2">
              <Link to={`/app/${featured.id}`}>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white hover:text-vault-cyan transition-colors tracking-tight">
                  {featured.name}
                </h3>
              </Link>
              <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
                {featured.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-xs text-vault-muted leading-relaxed max-w-xl line-clamp-3 sm:line-clamp-none">
              {featured.description}
            </p>

            {/* Tech Stack Matrix */}
            <div className="space-y-2 pt-1">
              <div className="text-[10px] font-mono text-vault-darkMuted uppercase tracking-wider">
                TECHNOLOGY ARCHITECTURE
              </div>
              <div className="flex items-center gap-1.5 flex-wrap">
                {featured.techStack?.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono text-slate-300 bg-vault-cardElevated border border-vault-border px-2.5 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onDownload(featured)}
                className="px-5 py-2.5 rounded-lg bg-vault-amber text-vault-bg font-mono font-bold text-xs hover:bg-vault-amber/90 transition-all flex items-center gap-2 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>DOWNLOAD BUILD (APK • {featured.size})</span>
              </button>

              <Link
                to={`/app/${featured.id}`}
                className="px-4 py-2.5 rounded-lg bg-vault-card hover:bg-vault-cardElevated border border-vault-border text-xs font-mono text-slate-200 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span>SPECIFICATIONS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {featured.githubUrl && (
                <a
                  href={featured.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2.5 rounded-lg bg-vault-card hover:bg-vault-cardElevated border border-vault-border text-slate-300 hover:text-white transition-colors"
                  title="Source Code on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Visual Preview Panel */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden border border-vault-border bg-vault-card p-4 space-y-4">
              {/* App Identity Banner */}
              <div className="relative h-48 sm:h-56 rounded-lg overflow-hidden border border-vault-border">
                <img
                  src={featured.banner}
                  alt={featured.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vault-bg via-vault-bg/30 to-transparent" />
                
                {/* Floating app icon badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-3">
                  <img
                    src={featured.icon}
                    alt={featured.name}
                    className="w-12 h-12 rounded-xl object-cover border-2 border-vault-border shadow-lg"
                  />
                  <div>
                    <span className="text-sm font-bold text-white block">
                      {featured.name}
                    </span>
                    <span className="text-[10px] font-mono text-vault-muted block">
                      {featured.packageName}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono pt-1">
                <div className="p-2 rounded bg-vault-bg/60 border border-vault-border">
                  <span className="text-[9px] text-vault-darkMuted uppercase block">Target SDK</span>
                  <span className="text-slate-200 text-[11px] font-bold mt-0.5 block">{featured.targetAndroid}</span>
                </div>
                <div className="p-2 rounded bg-vault-bg/60 border border-vault-border">
                  <span className="text-[9px] text-vault-darkMuted uppercase block">Min Android</span>
                  <span className="text-slate-200 text-[11px] font-bold mt-0.5 block">{featured.minAndroid}</span>
                </div>
                <div className="p-2 rounded bg-vault-bg/60 border border-vault-border">
                  <span className="text-[9px] text-vault-darkMuted uppercase block">Package</span>
                  <span className="text-vault-emerald text-[11px] font-bold mt-0.5 block">VERIFIED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
