import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Smartphone, ShieldCheck } from 'lucide-react';
import { HeroVisualShelf } from './HeroVisualShelf';
import { DEVELOPER_INFO } from '../data/appsData';

export const Hero = ({ onDownload }) => {
  return (
    <section className="relative pt-2 pb-6 sm:pt-6 sm:pb-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & CTAs */}
          <div className="lg:col-span-6 space-y-4 text-left">
            
            {/* Soft Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF1EC] border border-[#E1E6E2] text-[11px] font-semibold text-[#5B9C8D]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5B9C8D] animate-pulse" />
              <span>Personal Android Portfolio & Vault</span>
            </div>

            {/* Headline */}
            <div className="space-y-1.5">
              <p className="text-[11px] font-bold tracking-widest text-[#5B9C8D] uppercase font-sans">
                HELLO, I'M {DEVELOPER_INFO.name.toUpperCase()}
              </p>
              <h1 className="text-2xl sm:text-3.5xl lg:text-4xl font-extrabold text-[#202522] tracking-tight leading-[1.2] font-sans">
                A collection of apps I've built, experimented with, and shipped.
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-[#6F7772] leading-relaxed max-w-lg">
              Welcome to <strong>AppVault</strong> — a personal collection of Android applications and digital projects, all in one place. Direct APK binaries, source repos, and architectural case studies.
            </p>

            {/* Action Buttons */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <Link
                to="/apps"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#5B9C8D] text-white text-xs font-semibold hover:bg-[#4e897b] active:bg-[#43756a] shadow-sm transition-all text-center"
              >
                <span>Explore my apps</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#202522] text-xs font-semibold border border-[#E1E6E2] hover:bg-[#EAF1EC] active:bg-[#E1E6E2] transition-all shadow-sm text-center"
              >
                <span>About the builder</span>
              </Link>
            </div>

            {/* Subtle metadata tags */}
            <div className="pt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-[#6F7772] border-t border-[#EDF0ED]">
              <div className="flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-[#5B9C8D]" />
                <span>Native Android & Flutter</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#5B9C8D]" />
                <span>Direct APK Downloads</span>
              </div>
            </div>

          </div>

          {/* Right Column: Floating Digital Shelf */}
          <div className="lg:col-span-6 w-full mt-2 lg:mt-0">
            <HeroVisualShelf onDownload={onDownload} />
          </div>

        </div>
      </div>
    </section>
  );
};
