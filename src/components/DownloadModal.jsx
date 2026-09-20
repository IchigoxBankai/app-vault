import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import confetti from 'canvas-confetti';
import { 
  Download, 
  Check, 
  Copy, 
  ShieldCheck, 
  X, 
  Smartphone, 
  QrCode,
  Sparkles
} from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const DownloadModal = ({ app, isOpen, onClose }) => {
  const [copiedSha, setCopiedSha] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [activeTab, setActiveTab] = useState('direct'); // 'direct' or 'qr'
  const { addToast } = useToast();

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !app) return null;

  const handleCopySha = () => {
    if (app.sha256) {
      navigator.clipboard.writeText(app.sha256);
      setCopiedSha(true);
      addToast('SHA-256 Checksum copied', 'info');
      setTimeout(() => setCopiedSha(false), 2000);
    }
  };

  const handleTriggerDownload = () => {
    if (isDownloading) return;
    setIsDownloading(true);

    try {
      confetti({
        particleCount: 40,
        spread: 45,
        origin: { y: 0.7 },
        colors: ['#5B9C8D', '#73B8AA', '#8AAFC4']
      });

      addToast(`Initiated ${app.name} APK download`, 'success');

      const link = document.createElement('a');
      link.href = app.apkUrl;
      link.download = `${app.id}-v${app.version}.apk`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      addToast('Download error occurred', 'error');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm animate-fade-in font-sans"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-white border border-[#E1E6E2] shadow-2xl overflow-hidden animate-scale-up max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-3.5 sm:p-4 border-b border-[#EDF0ED] bg-white shrink-0">
          <div className="flex items-center gap-2 min-w-0">
            <Sparkles className="w-4 h-4 text-[#5B9C8D] shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-[#202522] font-sans truncate">
              Download Application Package
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#6F7772] hover:text-[#202522] hover:bg-[#EAF1EC] active:bg-[#EDF0ED] transition-colors shrink-0 ml-2"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 sm:p-5 space-y-4 bg-white overflow-y-auto">
          {/* App Info */}
          <div className="flex items-start gap-3 sm:gap-3.5">
            <img
              src={app.icon}
              alt={app.name}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl object-cover border border-[#E1E6E2] shrink-0 shadow-sm bg-white"
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm sm:text-base font-bold text-[#202522] font-sans truncate">
                  {app.name}
                </span>
                <span className="px-2 py-0.2 rounded-full text-[10px] sm:text-[11px] font-semibold bg-[#EAF1EC] text-[#5B9C8D]">
                  v{app.version}
                </span>
              </div>
              <p className="text-[11px] text-[#6F7772] truncate mt-0.5 font-mono">
                {app.packageName}
              </p>
              <div className="flex items-center gap-2 text-[11px] text-[#6F7772] mt-0.5 font-mono">
                <span>{app.size || 'APK'}</span>
                <span>•</span>
                <span>{app.minAndroid || 'Android 8.0+'}</span>
              </div>
            </div>
          </div>

          {/* Mode Switcher */}
          <div className="grid grid-cols-2 gap-1 p-1 bg-[#F7F8F5] rounded-xl border border-[#E1E6E2] text-xs">
            <button
              onClick={() => setActiveTab('direct')}
              className={`py-2 rounded-lg font-semibold transition-all ${
                activeTab === 'direct'
                  ? 'bg-white text-[#202522] shadow-sm'
                  : 'text-[#6F7772] hover:text-[#202522]'
              }`}
            >
              Direct Download
            </button>
            <button
              onClick={() => setActiveTab('qr')}
              className={`py-2 rounded-lg font-semibold transition-all ${
                activeTab === 'qr'
                  ? 'bg-white text-[#202522] shadow-sm'
                  : 'text-[#6F7772] hover:text-[#202522]'
              }`}
            >
              Scan with Phone
            </button>
          </div>

          {/* TAB 1: Direct Download */}
          {activeTab === 'direct' && (
            <div className="space-y-3">
              <button
                onClick={handleTriggerDownload}
                disabled={isDownloading}
                className="w-full py-3 sm:py-3 rounded-xl bg-[#5B9C8D] active:bg-[#4e897b] text-white font-semibold text-xs sm:text-sm hover:bg-[#4e897b] shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download APK ({app.size || 'Release'})</span>
              </button>

              {/* SHA-256 Checksum */}
              {app.sha256 && (
                <div className="p-3 rounded-xl bg-[#F7F8F5] border border-[#E1E6E2] space-y-1 text-xs">
                  <div className="flex items-center justify-between text-[#6F7772]">
                    <span className="font-semibold text-[10px] uppercase">SHA-256 Checksum</span>
                    <button
                      onClick={handleCopySha}
                      className="text-[#5B9C8D] hover:underline flex items-center gap-1 font-medium py-0.5"
                    >
                      {copiedSha ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedSha ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <div className="text-[10px] text-[#202522] break-all select-all font-mono">
                    {app.sha256}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: QR Scanner */}
          {activeTab === 'qr' && (
            <div className="text-center space-y-2 py-2">
              <div className="p-3 bg-[#F7F8F5] border border-[#E1E6E2] rounded-xl inline-block shadow-sm">
                <QRCodeSVG
                  value={app.apkUrl}
                  size={135}
                  level="M"
                  includeMargin={false}
                />
              </div>
              <p className="text-xs text-[#6F7772] max-w-xs mx-auto">
                Scan this QR code with your Android device camera to download the APK directly.
              </p>
            </div>
          )}

          {/* Sideload Tip */}
          <div className="p-3 rounded-xl bg-[#EAF1EC]/60 border border-[#E1E6E2] text-xs text-[#6F7772] space-y-0.5">
            <span className="text-[#202522] font-semibold block text-[11px]">
              Android Installation Note
            </span>
            <p className="text-[11px]">
              When prompted by your browser, tap <em>"Install unknown apps"</em> in Settings to complete installation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
