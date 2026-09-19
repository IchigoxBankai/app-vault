import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { AllApps } from './pages/AllApps';
import { AppDetails } from './pages/AppDetails';
import { Collections } from './pages/Collections';
import { About } from './pages/About';
import { DownloadModal } from './components/DownloadModal';
import { SubmitAppModal } from './components/SubmitAppModal';
import { QuickSearchModal } from './components/QuickSearchModal';
import { SplashScreen } from './components/SplashScreen';

// Scroll to top on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [downloadApp, setDownloadApp] = useState(null);
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Global keyboard shortcut for search ('/' or 'Ctrl+K' / 'Cmd+K')
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) ||
        ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')
      ) {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8F5] text-[#202522] relative selection:bg-[#5B9C8D]/20 selection:text-[#5B9C8D] font-sans">
      <ScrollToTop />

      {/* Animated Splash Screen on App Mount */}
      {showSplash && (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      )}

      {/* Navbar */}
      <Navbar 
        onOpenSubmit={() => setIsSubmitOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Routes */}
      <main className="flex-grow bg-[#F7F8F5] text-[#202522]">
        <Routes>
          <Route path="/" element={<Home onDownload={(app) => setDownloadApp(app)} />} />
          <Route path="/apps" element={<AllApps onDownload={(app) => setDownloadApp(app)} />} />
          <Route path="/app/:id" element={<AppDetails onDownload={(app) => setDownloadApp(app)} />} />
          <Route path="/collections" element={<Collections onDownload={(app) => setDownloadApp(app)} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Download / QR Code Modal */}
      <DownloadModal
        app={downloadApp}
        isOpen={!!downloadApp}
        onClose={() => setDownloadApp(null)}
      />

      {/* Submit App Modal */}
      <SubmitAppModal
        isOpen={isSubmitOpen}
        onClose={() => setIsSubmitOpen(false)}
      />

      {/* Global Quick Search Modal */}
      <QuickSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
}

export default App;
