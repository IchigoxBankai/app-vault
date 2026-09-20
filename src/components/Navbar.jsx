import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Search, 
  Menu, 
  X, 
  ArrowUpRight,
  PlusCircle,
  Gamepad2,
  Sparkles,
  Home,
  Grid,
  Layers,
  User
} from 'lucide-react';
import { DEVELOPER_INFO } from '../data/appsData';

export const Navbar = ({ onOpenSubmit, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'My Apps', path: '/apps', icon: Grid },
    { name: 'Collections', path: '/collections', icon: Layers },
    { name: 'About', path: '/about', icon: User },
  ];

  return (
    <>
      <header 
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-200 bg-white/95 backdrop-blur-md border-b border-[#E1E6E2] ${
          isScrolled ? 'py-2 sm:py-2.5 shadow-sm' : 'py-2.5 sm:py-3'
        }`}
      >
        <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: Brand Identity & Subtitle */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <img 
              src="/vault-icon.svg" 
              alt="AppVault" 
              className="w-8 h-8 rounded-xl object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-[#202522] font-sans group-hover:text-[#5B9C8D] transition-colors leading-tight">
                AppVault
              </span>
              <span className="text-[11px] text-[#6F7772] hidden sm:inline-block leading-none">
                Personal app collection
              </span>
            </div>
          </Link>

          {/* Center: Clean Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#EAF1EC]/60 p-1 rounded-xl border border-[#EDF0ED]">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-white text-[#202522] shadow-sm'
                      : 'text-[#6F7772] hover:text-[#202522] hover:bg-white/60'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right: Actions */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Quick Search Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white hover:bg-[#EAF1EC] text-xs font-semibold text-[#202522] border border-[#E1E6E2] transition-colors shadow-sm group"
              title="Search apps (Ctrl+K or /)"
            >
              <Search className="w-3.5 h-3.5 text-[#5B9C8D] group-hover:scale-110 transition-transform" />
              <span className="text-[#202522]">Search apps...</span>
              <kbd className="text-[10px] bg-[#EAF1EC] border border-[#E1E6E2] px-1.5 py-0.2 rounded text-[#202522] font-mono font-bold">
                /
              </kbd>
            </button>

            {/* GameVault Link */}
            <a
              href={DEVELOPER_INFO.gameVaultUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold text-[#6F7772] hover:text-[#202522] hover:bg-[#EAF1EC] transition-colors"
            >
              <Gamepad2 className="w-3.5 h-3.5 text-[#5B9C8D]" />
              <span>GameVault</span>
              <ArrowUpRight className="w-3 h-3 text-[#6F7772]" />
            </a>

            {/* Add APK Trigger */}
            <button
              onClick={onOpenSubmit}
              className="flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-[#5B9C8D] text-white text-xs font-semibold hover:bg-[#4e897b] shadow-sm transition-all"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Add APK</span>
            </button>
          </div>

          {/* Mobile Menu & Search triggers */}
          <div className="flex items-center gap-1.5 md:hidden">
            <button
              onClick={onOpenSearch}
              className="p-2 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl text-[#202522] bg-white active:bg-[#EAF1EC] border border-[#E1E6E2] transition-colors shadow-sm"
              aria-label="Search apps"
            >
              <Search className="w-4 h-4 text-[#5B9C8D]" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl text-[#202522] bg-white active:bg-[#EAF1EC] border border-[#E1E6E2] transition-colors shadow-sm"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-[#202522]" /> : <Menu className="w-4 h-4 text-[#202522]" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Backdrop & Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-start">
          {/* Backdrop Blur Overlay */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm animate-fade-in transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative z-10 bg-white border-b border-[#E1E6E2] shadow-2xl px-4 pt-3 pb-6 space-y-4 animate-fade-in max-h-[85vh] overflow-y-auto">
            {/* Top drawer header */}
            <div className="flex items-center justify-between pb-2 border-b border-[#EDF0ED]">
              <div className="flex items-center gap-2">
                <img src="/vault-icon.svg" alt="" className="w-6 h-6 rounded-lg" />
                <span className="text-sm font-bold text-[#202522] font-sans">Menu & Navigation</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-[#6F7772] hover:text-[#202522] hover:bg-[#EAF1EC]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Search Tap Button inside Mobile Drawer */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#F7F8F5] border border-[#E1E6E2] text-xs text-[#6F7772] hover:text-[#202522] active:bg-[#EAF1EC] transition-colors text-left"
            >
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-[#5B9C8D]" />
                <span className="font-medium text-[#202522]">Search applications...</span>
              </div>
              <span className="text-[10px] bg-[#EAF1EC] text-[#5B9C8D] px-2 py-0.5 rounded font-semibold">
                Instant
              </span>
            </button>

            {/* Main Links */}
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-[#EAF1EC] text-[#202522] border border-[#D5E2D9]'
                        : 'text-[#6F7772] hover:text-[#202522] active:bg-[#F7F8F5]'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#5B9C8D]' : 'text-[#9AA19C]'}`} />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Secondary actions & external link */}
            <div className="pt-3 border-t border-[#EDF0ED] flex flex-col gap-2.5">
              <a
                href={DEVELOPER_INFO.gameVaultUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold text-[#6F7772] hover:text-[#202522] active:bg-[#EAF1EC] border border-[#EDF0ED] transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Gamepad2 className="w-4 h-4 text-[#5B9C8D]" />
                  <span>Explore GameVault Arcade</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#9AA19C]" />
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSubmit();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#5B9C8D] active:bg-[#4e897b] text-white text-xs font-semibold shadow-sm transition-colors"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Add APK to Archive</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
