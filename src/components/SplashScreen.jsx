import React, { useState, useEffect } from 'react';
import { Smartphone, Sparkles, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import { APPS_DATA } from '../data/appsData';

export const SplashScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING VAULT CORE...');
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const totalApps = APPS_DATA.length;
    
    // Smooth progress simulation stages
    const steps = [
      { p: 15, text: 'INITIALIZING RUNTIME ENGINE...', delay: 150 },
      { p: 40, text: 'VERIFYING APK SIGNATURES...', delay: 450 },
      { p: 70, text: `SYNCING ${totalApps} PRODUCTION BUILDS...`, delay: 900 },
      { p: 90, text: 'OPTIMIZING OFFLINE REGISTRY...', delay: 1300 },
      { p: 100, text: 'VAULT ONLINE // READY', delay: 1650 },
    ];

    const timers = [];

    // Smooth counter incrementation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 18);

    steps.forEach(({ text, delay }) => {
      const timer = setTimeout(() => {
        setStatusText(text);
      }, delay);
      timers.push(timer);
    });

    // Fade out and finish callback
    const finishTimer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        onFinish();
      }, 500); // Allow fade-out animation to complete
    }, 2000);

    return () => {
      clearInterval(interval);
      timers.forEach(clearTimeout);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onFinish();
    }, 300);
  };

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F7F8F5] text-[#202522] select-none transition-all duration-500 cursor-pointer ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      aria-label="AppVault loading splash screen - click to skip"
    >
      {/* Ambient background particles & grid */}
      <div className="absolute inset-0 bg-subtle-pattern pointer-events-none" />
      
      {/* Decorative Radial Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#5B9C8D]/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#73B8AA]/10 rounded-full blur-2xl pointer-events-none" />

      {/* Main Splash Content Container */}
      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center space-y-7">
        
        {/* Animated Vault Emblem */}
        <div className="relative">
          {/* Outer Pulsing Tech Ring */}
          <div className="absolute -inset-3.5 rounded-3xl border-2 border-[#5B9C8D]/30 border-dashed animate-spin-slow pointer-events-none" />
          
          {/* Subtle Outer Glow Container */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white border border-[#E1E6E2] shadow-xl p-3 flex items-center justify-center transform transition-transform hover:scale-105 duration-300">
            <img
              src="/vault-icon.svg"
              alt="AppVault"
              className="w-full h-full object-contain animate-bounce-subtle"
            />
          </div>

          {/* Mini active badge */}
          <div className="absolute -bottom-2 -right-2 bg-[#5B9C8D] text-white p-1 rounded-full shadow-md border-2 border-white flex items-center justify-center">
            <ShieldCheck className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Title & Micro-tagline */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#202522] font-sans">
              AppVault
            </h1>
            <span className="text-[10px] font-mono font-bold bg-[#EAF1EC] text-[#5B9C8D] px-2 py-0.5 rounded-full border border-[#CBD6CF]">
              v1.0
            </span>
          </div>
          <p className="text-xs text-[#6F7772] font-medium tracking-wide">
            Curated Android APK Artifacts & Mobile Portfolio
          </p>
        </div>

        {/* Progress Bar & Telemetry Status */}
        <div className="w-full space-y-2.5">
          {/* Status Text & Percentage */}
          <div className="flex items-center justify-between text-[11px] font-mono text-[#6F7772] px-0.5">
            <span className="flex items-center gap-1.5 font-semibold text-[#202522]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5B9C8D] animate-ping" />
              {statusText}
            </span>
            <span className="font-bold text-[#5B9C8D]">{progress}%</span>
          </div>

          {/* Progress Bar Track */}
          <div className="w-full h-2 rounded-full bg-[#E1E6E2] overflow-hidden p-0.5 shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#73B8AA] via-[#5B9C8D] to-[#437C6E] transition-all duration-150 ease-out shadow-sm"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* System Specs Micro Pill */}
        <div className="flex items-center justify-center gap-3 text-[10px] font-mono text-[#6F7772] bg-white/80 backdrop-blur-sm border border-[#E1E6E2] px-3.5 py-1.5 rounded-full shadow-sm">
          <span className="flex items-center gap-1">
            <Smartphone className="w-3 h-3 text-[#5B9C8D]" />
            ARM64 / UNIVERSAL
          </span>
          <span className="text-[#CBD6CF]">•</span>
          <span className="flex items-center gap-1">
            <Cpu className="w-3 h-3 text-[#5B9C8D]" />
            NATIVE APK
          </span>
        </div>

        {/* Skip hint */}
        <p className="text-[10px] text-[#A0A8A3] font-mono tracking-wider uppercase pt-1">
          Click anywhere to skip
        </p>

      </div>
    </div>
  );
};
