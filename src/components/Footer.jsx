import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { DEVELOPER_INFO } from '../data/appsData';

export const Footer = () => {
  return (
    <footer className="border-t border-[#E1E6E2] bg-white pt-8 sm:pt-10 pb-8 mt-8 sm:mt-12 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Top: Identity & Navigation Columns */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 pb-6 border-b border-[#EDF0ED]">
          
          {/* Brand Info */}
          <div className="space-y-2 max-w-sm">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src="/vault-icon.svg"
                alt="AppVault"
                className="w-6 h-6 rounded-md object-contain"
              />
              <span className="text-sm font-bold text-[#202522] group-hover:text-[#5B9C8D] transition-colors font-sans">
                AppVault
              </span>
            </Link>
            <p className="text-xs text-[#6F7772] leading-relaxed">
              A personal collection of apps, experiments, and digital projects designed & built by {DEVELOPER_INFO.name}.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:gap-14 text-xs w-full sm:w-auto">
            
            {/* Main Nav */}
            <div className="space-y-2">
              <span className="font-bold text-[#202522] uppercase tracking-wider block font-sans text-[10px] sm:text-[11px]">
                Navigation
              </span>
              <ul className="space-y-2 text-[#6F7772]">
                <li>
                  <Link to="/" className="hover:text-[#5B9C8D] transition-colors py-0.5 inline-block">Home</Link>
                </li>
                <li>
                  <Link to="/apps" className="hover:text-[#5B9C8D] transition-colors py-0.5 inline-block">My Apps</Link>
                </li>
                <li>
                  <Link to="/collections" className="hover:text-[#5B9C8D] transition-colors py-0.5 inline-block">Collections</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[#5B9C8D] transition-colors py-0.5 inline-block">About</Link>
                </li>
              </ul>
            </div>

            {/* External / Connect */}
            <div className="space-y-2">
              <span className="font-bold text-[#202522] uppercase tracking-wider block font-sans text-[10px] sm:text-[11px]">
                Connect
              </span>
              <ul className="space-y-2 text-[#6F7772]">
                <li>
                  <a
                    href={DEVELOPER_INFO.gameVaultUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#5B9C8D] transition-colors flex items-center gap-1 py-0.5"
                  >
                    <span>GameVault</span>
                    <ArrowUpRight className="w-3 h-3 text-[#9AA19C]" />
                  </a>
                </li>
                <li>
                  <a
                    href={DEVELOPER_INFO.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#5B9C8D] transition-colors flex items-center gap-1 py-0.5"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-[#9AA19C]" />
                  </a>
                </li>
                <li>
                  <a
                    href={DEVELOPER_INFO.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#5B9C8D] transition-colors flex items-center gap-1 py-0.5"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-[#9AA19C]" />
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-[#6F7772] text-center sm:text-left">
          <p>© 2026 {DEVELOPER_INFO.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-[11px]">
            <span>Built with React, Vite & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
