import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Layers, 
  Sparkles, 
  Smartphone, 
  CheckCircle2, 
  FolderGit2,
  Gamepad2
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { FeaturedProject } from '../components/FeaturedProject';
import { AppCard } from '../components/AppCard';
import { APPS_DATA, DEVELOPER_INFO } from '../data/appsData';
import { COLLECTIONS_DATA } from '../data/collectionsData';

export const Home = ({ onDownload }) => {
  return (
    <div className="space-y-8 sm:space-y-12 pb-12 sm:pb-16 animate-fade-in font-sans">
      
      {/* 1. Calm Editorial Hero with Digital Shelf */}
      <Hero onDownload={onDownload} />

      {/* 2. Quick Intro Strip */}
      <section className="border-y border-[#E1E6E2] bg-[#EAF1EC]/40 py-3.5 sm:py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 text-center sm:text-left">
          <p className="text-xs sm:text-sm font-medium text-[#202522]">
            Mobile apps, utility tools and experiments — built with curiosity and attention to detail.
          </p>
          <Link
            to="/about"
            className="text-xs font-semibold text-[#5B9C8D] hover:underline flex items-center gap-1 shrink-0 py-1"
          >
            <span>Learn about my process</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 3. Featured Project Showcase */}
      <FeaturedProject onDownload={onDownload} />

      {/* 4. Apps I've Built (Main Grid) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 sm:gap-3 pb-3 border-b border-[#E1E6E2]">
          <div>
            <span className="text-[10px] sm:text-[11px] font-semibold text-[#5B9C8D] uppercase tracking-wider block mb-0.5">
              ARCHIVE CATALOG
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#202522] tracking-tight font-sans">
              Apps I've built
            </h2>
            <p className="text-xs sm:text-sm text-[#6F7772] mt-0.5">
              Explore the collection of Android applications, utility tools, and intelligent systems.
            </p>
          </div>
          <Link
            to="/apps"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#5B9C8D] hover:underline transition-colors py-1 self-start sm:self-auto"
          >
            <span>View all {APPS_DATA.length} apps</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 2-Column Responsive App Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {APPS_DATA.map((app) => (
            <AppCard
              key={app.id}
              app={app}
              onDownload={onDownload}
            />
          ))}
        </div>
      </section>

      {/* 5. Collections Preview: Browse by Theme */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-[#E1E6E2]">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[#202522] tracking-tight font-sans">
              Browse by theme
            </h2>
            <p className="text-xs text-[#6F7772]">
              Organized collections grouping specialized mobile builds.
            </p>
          </div>
          <Link
            to="/collections"
            className="text-xs font-semibold text-[#5B9C8D] hover:underline flex items-center gap-1 py-1"
          >
            <span>All collections</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          {COLLECTIONS_DATA.slice(0, 2).map((col) => (
            <Link
              key={col.id}
              to="/collections"
              className="bg-white rounded-2xl border border-[#E1E6E2] p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:bg-[#F7F8F5] block group"
            >
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded-full bg-[#EAF1EC] text-[#5B9C8D] text-[10px] font-semibold uppercase tracking-wider">
                  THEMATIC STACK
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#6F7772] group-hover:text-[#5B9C8D] group-hover:translate-x-0.5 transition-transform" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[#202522] mt-2.5 group-hover:text-[#5B9C8D] transition-colors font-sans">
                {col.name}
              </h3>
              <p className="text-xs text-[#6F7772] mt-1 leading-relaxed">
                {col.description}
              </p>
              <div className="mt-3 pt-2.5 border-t border-[#EDF0ED] flex items-center gap-2 text-[11px] text-[#6F7772]">
                <span>{col.appIds.length} apps included</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Philosophy Editorial Quote */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 text-center pt-2 pb-4">
        <div className="bg-white rounded-2xl border border-[#E1E6E2] p-5 sm:p-8 shadow-sm space-y-3">
          <span className="text-[10px] sm:text-[11px] font-bold text-[#5B9C8D] tracking-widest uppercase block">
            BUILDING PHILOSOPHY
          </span>
          <blockquote className="text-sm sm:text-lg font-bold text-[#202522] leading-relaxed font-sans">
            “I like turning ideas into things that people can actually use — from responsive Android utilities to tactile web experiences.”
          </blockquote>
          <p className="text-xs text-[#6F7772]">
            — {DEVELOPER_INFO.name}, {DEVELOPER_INFO.title}
          </p>
        </div>
      </section>

    </div>
  );
};
