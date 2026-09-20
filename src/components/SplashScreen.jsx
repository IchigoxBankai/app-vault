import React, { useState, useEffect } from 'react';

export const SplashScreen = ({ onFinish }) => {
  // Animation phase states for fine-grained staggered timing
  const [glowVisible, setGlowVisible] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const [brandVisible, setBrandVisible] = useState(false);
  const [badgeVisible, setBadgeVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [loaderVisible, setLoaderVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState('Preparing your vault...');
  const [isFinishing, setIsFinishing] = useState(false);

  useEffect(() => {
    // 1. Initial State -> Ambient Glow
    const tGlow = setTimeout(() => setGlowVisible(true), 100);

    // 2. Logo Reveal (scale 85% -> 105% -> 100%)
    const tLogo = setTimeout(() => setLogoVisible(true), 250);

    // 4. Staggered Brand Reveal
    const tBrand = setTimeout(() => setBrandVisible(true), 650);
    const tBadge = setTimeout(() => setBadgeVisible(true), 800);
    const tSubtitle = setTimeout(() => setSubtitleVisible(true), 950);
    const tLoader = setTimeout(() => setLoaderVisible(true), 1100);

    // Status message rotation
    const tStatus1 = setTimeout(() => setStatusMessage('Organizing your apps...'), 1100);
    const tStatus2 = setTimeout(() => setStatusMessage('Loading your collection...'), 1750);
    const tStatus3 = setTimeout(() => setStatusMessage('Almost ready...'), 2350);

    // Progress bar smooth counter from 0 to 100
    const startProgressTime = Date.now() + 600;
    const progressDuration = 2200; // ms

    const progressInterval = setInterval(() => {
      const now = Date.now();
      if (now < startProgressTime) return;
      const elapsed = now - startProgressTime;
      const pct = Math.min(100, Math.round((elapsed / progressDuration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(progressInterval);
      }
    }, 24);

    // Completion and Exit Transition (smooth scale-down & fade)
    const tComplete = setTimeout(() => {
      setIsFinishing(true);
      setTimeout(() => {
        onFinish();
      }, 650);
    }, 3100);

    return () => {
      clearTimeout(tGlow);
      clearTimeout(tLogo);
      clearTimeout(tBrand);
      clearTimeout(tBadge);
      clearTimeout(tSubtitle);
      clearTimeout(tLoader);
      clearTimeout(tStatus1);
      clearTimeout(tStatus2);
      clearTimeout(tStatus3);
      clearTimeout(tComplete);
      clearInterval(progressInterval);
    };
  }, [onFinish]);

  const handleSkip = () => {
    if (isFinishing) return;
    setIsFinishing(true);
    setTimeout(() => {
      onFinish();
    }, 400);
  };

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between py-12 px-6 bg-[#F8FAF7] text-[#202522] select-none cursor-pointer overflow-hidden transition-all duration-700 ease-out ${
        isFinishing
          ? 'opacity-0 scale-[0.96] pointer-events-none'
          : 'opacity-100 scale-100'
      }`}
      style={{
        fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, sans-serif",
      }}
      aria-label="AppVault intro - tap anywhere to continue"
    >
      {/* 5. AMBIENT BACKGROUND: Extremely subtle blurred circles & particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Radial Ambient Glow */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] bg-[#5B9C8D]/12 rounded-full blur-3xl transition-opacity duration-1000 ease-out animate-soft-glow ${
            glowVisible ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        {/* Secondary warm ambient aura */}
        <div
          className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] bg-[#EAF1EC] rounded-full blur-2xl transition-opacity duration-1000 ease-out ${
            glowVisible ? 'opacity-80' : 'opacity-0'
          }`}
        />

        {/* Barely visible drifting geometric dots */}
        <div className="absolute top-[18%] left-[15%] w-1.5 h-1.5 rounded-full bg-[#5B9C8D]/20 animate-float-gentle" />
        <div className="absolute top-[32%] right-[18%] w-2 h-2 rounded-full bg-[#73B8AA]/25 animate-float-gentle" style={{ animationDelay: '1.2s' }} />
        <div className="absolute bottom-[28%] left-[22%] w-1 h-1 rounded-full bg-[#5B9C8D]/20 animate-float-gentle" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[20%] right-[25%] w-1.5 h-1.5 rounded-full bg-[#73B8AA]/20 animate-float-gentle" style={{ animationDelay: '0.6s' }} />
      </div>

      {/* Top spacing placeholder for vertical balance */}
      <div className="w-full h-8" />

      {/* MAIN CENTERPIECE: Logo + Brand Identity + Loading Bar */}
      <div className="relative z-10 flex flex-col items-center max-w-sm w-full text-center my-auto space-y-8">
        
        {/* 2 & 3. LOGO CONTAINER with Subtle Pulse & Shimmer */}
        <div className="relative flex items-center justify-center">
          
          {/* Subtle Expanding Circular Pulse Behind Icon */}
          {logoVisible && (
            <div className="absolute w-28 h-28 rounded-3xl bg-[#5B9C8D]/15 animate-pulse-expand pointer-events-none" />
          )}

        {/* Logo Card with Smooth Ease-Out & Floating Movement */}
          <div
            className={`relative w-20 h-20 sm:w-28 sm:h-28 rounded-2xl sm:rounded-3xl bg-white border border-[#E1E6E2] shadow-[0_12px_32px_rgba(40,65,50,0.06)] p-3 sm:p-3.5 flex items-center justify-center transition-all duration-700 ${
              logoVisible
                ? 'opacity-100 scale-100 animate-float-gentle'
                : 'opacity-0 scale-[0.85]'
            }`}
            style={{
              transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.15)', // Gentle smooth spring
            }}
          >
            {/* Very Subtle Shimmer Highlight Sweep */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden pointer-events-none">
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full"
                style={{
                  animation: 'shimmerSweep 3.5s cubic-bezier(0.16, 1, 0.3, 1) infinite',
                  animationDelay: '0.8s',
                }}
              />
            </div>

            {/* Official AppVault Emblem */}
            <img
              src="/vault-icon.svg"
              alt="AppVault Logo"
              className="w-full h-full object-contain relative z-10"
            />
          </div>
        </div>

        {/* 4. BRAND REVEAL: AppVault Title + Badge + Subtitle */}
        <div className="space-y-1.5 sm:space-y-2">
          {/* Title & Badge */}
          <div className="flex items-center justify-center gap-2">
            <h1
              className={`text-xl sm:text-3xl font-bold tracking-tight text-[#202522] transition-all duration-600 ${
                brandVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-2'
              }`}
            >
              AppVault
            </h1>

            {/* Version Badge */}
            <span
              className={`text-[10px] sm:text-[11px] font-medium text-[#5B9C8D] bg-[#EAF1EC] px-2 py-0.5 rounded-full border border-[#D5E2D9] transition-all duration-500 ${
                badgeVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-1 scale-90'
              }`}
            >
              v1.0
            </span>
          </div>

          {/* Subtitle */}
          <p
            className={`text-xs sm:text-[13px] text-[#6F7772] font-normal leading-relaxed max-w-[260px] sm:max-w-none transition-all duration-600 ${
              subtitleVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-2'
            }`}
          >
            Curated Android APK Artifacts &amp; Mobile Portfolio
          </p>
        </div>

        {/* 6. CLEAN LOADING EXPERIENCE (Soft progress & rotating messages) */}
        <div
          className={`w-full max-w-[240px] sm:max-w-[260px] space-y-2 pt-2 transition-all duration-600 ${
            loaderVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-2'
          }`}
        >
          {/* Status Text & Subtle Percentage */}
          <div className="flex items-center justify-between text-xs text-[#6F7772]">
            <span className="font-medium text-[#4E5651] transition-all duration-300">
              {statusMessage}
            </span>
            <span className="font-semibold text-[#5B9C8D] text-[11px]">
              {progress}%
            </span>
          </div>

          {/* Minimal Rounded Progress Bar */}
          <div className="w-full h-1.5 rounded-full bg-[#E5EBE7] overflow-hidden p-[1px]">
            <div
              className="h-full rounded-full bg-[#5B9C8D] transition-all duration-150 ease-out shadow-sm"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>

      </div>

      {/* 7. BOTTOM MICRO-DETAIL: Tap anywhere to continue */}
      <div
        className={`relative z-10 transition-all duration-700 delay-500 text-center ${
          loaderVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-[11px] text-[#8F9792] font-normal tracking-wide">
          Tap anywhere to continue
        </span>
      </div>

    </div>
  );
};
