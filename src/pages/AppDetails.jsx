import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Download, 
  Github, 
  CheckCircle2, 
  Copy, 
  Check, 
  ShieldCheck
} from 'lucide-react';
import { APPS_DATA, DEVELOPER_INFO } from '../data/appsData';
import { CATEGORIES } from '../data/categoriesData';
import { ScreenshotGallery } from '../components/ScreenshotGallery';

export const AppDetails = ({ onDownload }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copiedChecksum, setCopiedChecksum] = useState(false);

  const app = APPS_DATA.find((a) => a.id === id);

  if (!app) {
    return (
      <div className="py-16 text-center space-y-3 max-w-md mx-auto px-4 font-sans">
        <h2 className="text-xl font-bold text-[#202522] font-sans">Project Not Found</h2>
        <p className="text-xs text-[#6F7772]">
          The requested application could not be found in the AppVault software archive.
        </p>
        <Link
          to="/apps"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#5B9C8D] text-white text-xs font-semibold hover:bg-[#4e897b] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Apps</span>
        </Link>
      </div>
    );
  }

  const categoryName = CATEGORIES.find((c) => c.id === app.category)?.name || app.category;

  const handleCopySha = () => {
    if (app.sha256) {
      navigator.clipboard.writeText(app.sha256);
      setCopiedChecksum(true);
      setTimeout(() => setCopiedChecksum(false), 2500);
    }
  };

  return (
    <div className="pt-4 pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-fade-in font-sans">
      
      {/* 1. Back Navigation */}
      <div>
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6F7772] hover:text-[#202522] transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to apps</span>
        </button>
      </div>

      {/* 2. Case-Study Header */}
      <div className="bg-white rounded-2xl border border-[#E1E6E2] p-5 sm:p-7 shadow-sm space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#EDF0ED]">
          
          {/* Left: Icon & Title */}
          <div className="flex items-start gap-4">
            <img
              src={app.icon}
              alt={app.name}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover border border-[#E1E6E2] shadow-sm shrink-0 bg-white"
            />
            <div className="space-y-0.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full bg-[#EAF1EC] text-[#5B9C8D] text-[11px] font-semibold uppercase tracking-wider">
                  {categoryName}
                </span>
                <span className="text-[11px] text-[#6F7772] font-mono">
                  v{app.version}
                </span>
              </div>
              <h1 className="text-xl sm:text-3xl font-extrabold text-[#202522] tracking-tight font-sans">
                {app.name}
              </h1>
              <p className="text-xs sm:text-sm font-medium text-[#5B9C8D]">
                {app.tagline}
              </p>
            </div>
          </div>

          {/* Right: Actions (Download & GitHub) */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            {app.apkUrl && (
              <button
                onClick={() => onDownload && onDownload(app)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#5B9C8D] text-white text-xs font-semibold hover:bg-[#4e897b] shadow-sm transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download APK</span>
              </button>
            )}

            {app.githubUrl && (
              <a
                href={app.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-[#E1E6E2] text-[#202522] text-xs font-semibold hover:bg-[#EAF1EC] transition-colors shadow-sm"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source code</span>
              </a>
            )}
          </div>

        </div>

        {/* Binary Specifications Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-2.5 rounded-xl bg-[#F7F8F5] border border-[#EDF0ED] space-y-0.5">
            <span className="text-[#6F7772] block text-[10px] uppercase font-bold tracking-wider">Platform</span>
            <span className="font-semibold text-[#202522]">Android</span>
          </div>
          <div className="p-2.5 rounded-xl bg-[#F7F8F5] border border-[#EDF0ED] space-y-0.5">
            <span className="text-[#6F7772] block text-[10px] uppercase font-bold tracking-wider">File Size</span>
            <span className="font-semibold text-[#202522]">{app.size || 'Universal'}</span>
          </div>
          <div className="p-2.5 rounded-xl bg-[#F7F8F5] border border-[#EDF0ED] space-y-0.5">
            <span className="text-[#6F7772] block text-[10px] uppercase font-bold tracking-wider">Target SDK</span>
            <span className="font-semibold text-[#202522]">{app.targetAndroid || 'Android 14+'}</span>
          </div>
          <div className="p-2.5 rounded-xl bg-[#F7F8F5] border border-[#EDF0ED] space-y-0.5">
            <span className="text-[#6F7772] block text-[10px] uppercase font-bold tracking-wider">Package</span>
            <span className="font-mono text-[10px] text-[#202522] truncate block">{app.packageName}</span>
          </div>
        </div>

      </div>

      {/* 3. Screenshot Gallery */}
      {app.screenshots && app.screenshots.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-base font-bold text-[#202522] font-sans">
            Screenshots & Interface Preview
          </h2>
          <ScreenshotGallery screenshots={app.screenshots} appName={app.name} />
        </section>
      )}

      {/* 4. About the Project & Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Full Description & Features */}
        <div className="md:col-span-8 space-y-6">
          
          {/* Overview */}
          <div className="bg-white rounded-2xl border border-[#E1E6E2] p-5 sm:p-6 shadow-sm space-y-3">
            <h2 className="text-base font-bold text-[#202522] font-sans">
              About the project
            </h2>
            <div className="text-xs sm:text-sm text-[#6F7772] leading-relaxed space-y-2 font-sans">
              <p>{app.description}</p>
            </div>
          </div>

          {/* Key Features */}
          {app.features && app.features.length > 0 && (
            <div className="bg-white rounded-2xl border border-[#E1E6E2] p-5 sm:p-6 shadow-sm space-y-3">
              <h2 className="text-base font-bold text-[#202522] font-sans">
                Key features
              </h2>
              <ul className="space-y-2">
                {app.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#6F7772]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9C8D] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* SHA-256 Digest Verification */}
          {app.sha256 && (
            <div className="bg-white rounded-xl border border-[#E1E6E2] p-4 shadow-sm space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#202522] font-sans flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#5B9C8D]" />
                  <span>SHA-256 Checksum</span>
                </span>
                <button
                  onClick={handleCopySha}
                  className="text-xs text-[#5B9C8D] hover:underline flex items-center gap-1"
                >
                  {copiedChecksum ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedChecksum ? 'Copied' : 'Copy hash'}</span>
                </button>
              </div>
              <p className="font-mono text-[10px] text-[#6F7772] bg-[#F7F8F5] p-2 rounded-lg break-all border border-[#EDF0ED] select-all">
                {app.sha256}
              </p>
            </div>
          )}

        </div>

        {/* Right Column: Technical Matrix */}
        <div className="md:col-span-4 space-y-4">
          
          {/* Tech Stack */}
          <div className="bg-white rounded-2xl border border-[#E1E6E2] p-5 shadow-sm space-y-3">
            <h3 className="text-xs font-bold text-[#202522] uppercase tracking-wider font-sans">
              Built with
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {app.techStack?.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-[#EAF1EC] text-[#5B9C8D] text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Developer Card */}
          <div className="bg-white rounded-2xl border border-[#E1E6E2] p-5 shadow-sm space-y-2.5">
            <span className="text-[10px] font-bold text-[#6F7772] uppercase tracking-wider block">
              Architect
            </span>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#EAF1EC] text-[#5B9C8D] flex items-center justify-center font-bold text-xs font-sans">
                NP
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#202522] font-sans">
                  {DEVELOPER_INFO.name}
                </h4>
                <p className="text-[11px] text-[#6F7772]">
                  {DEVELOPER_INFO.title}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
