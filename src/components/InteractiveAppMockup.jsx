import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Smartphone, 
  Zap, 
  HardDrive, 
  Code2, 
  Terminal,
  ArrowUpRight,
  Database,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { DEVELOPER_INFO } from '../data/appsData';

export const InteractiveAppMockup = () => {
  const [activeTab, setActiveTab] = useState('architecture'); // 'architecture', 'pipeline', 'standards'

  const architectureLayers = [
    {
      id: 'ui',
      step: '01',
      title: 'UI & Motion Systems',
      tech: 'Flutter / Material 3 / Compose',
      detail: '60–120 FPS high-refresh reactive interfaces with dynamic adaptive light/dark tokens.',
      color: 'text-vault-cyan',
      border: 'border-vault-cyan/30'
    },
    {
      id: 'logic',
      step: '02',
      title: 'State & Intelligence',
      tech: 'BLoC / Coroutines / Gemini AI',
      detail: 'Predictable unidirectional state flows, on-device caching, and generative API pipelines.',
      color: 'text-vault-blue',
      border: 'border-vault-blue/30'
    },
    {
      id: 'engine',
      step: '03',
      title: 'Native Runtime & Storage',
      tech: 'Dart AOT / SQLite / Android SDK',
      detail: 'Direct ARM64 compilation, zero-latency local SQLite persistence, and offline durability.',
      color: 'text-vault-purple',
      border: 'border-vault-purple/30'
    },
    {
      id: 'build',
      step: '04',
      title: 'Packaging & Distribution',
      tech: 'Universal APK / R8 Optimizer',
      detail: 'Clean unsigned/signed APK release binaries with audited SHA-256 cryptographic verification.',
      color: 'text-vault-emerald',
      border: 'border-vault-emerald/30'
    }
  ];

  const standards = [
    { label: 'DIRECT SIDELOADING', value: 'Zero App Store Friction', icon: Smartphone },
    { label: 'OFFLINE FIRST', value: 'Instant Local Storage', icon: Database },
    { label: 'CLEAN ARCHITECTURE', value: '100% Open Repositories', icon: Code2 },
    { label: 'VERIFIED SECURITY', value: 'SHA-256 Checksums', icon: ShieldCheck }
  ];

  return (
    <div className="archive-card rounded-2xl p-5 border border-vault-border space-y-5 font-mono relative overflow-hidden group">
      {/* Subtle ambient accent background */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-vault-cyan/5 blur-3xl pointer-events-none rounded-full" />

      {/* Header Console Bar */}
      <div className="flex items-center justify-between pb-3 hairline-b text-xs">
        <div className="flex items-center gap-2">
          <Smartphone className="w-4 h-4 text-vault-cyan" />
          <span className="font-bold text-white uppercase tracking-wider">
            MOBILE ENGINEERING HUB
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-vault-emerald bg-vault-emerald/10 border border-vault-emerald/20 px-2 py-0.5 rounded text-[10px]">
          <span className="w-1.5 h-1.5 rounded-full bg-vault-emerald animate-pulse" />
          <span>PRODUCTION READY</span>
        </div>
      </div>

      {/* Interactive Mode Switcher */}
      <div className="grid grid-cols-2 gap-1 p-1 bg-vault-bg rounded border border-vault-border text-xs">
        <button
          onClick={() => setActiveTab('architecture')}
          className={`py-1.5 rounded transition-colors text-center text-[11px] ${
            activeTab === 'architecture'
              ? 'bg-vault-card text-vault-cyan font-bold shadow-sm'
              : 'text-vault-muted hover:text-white'
          }`}
        >
          APP ARCHITECTURE
        </button>
        <button
          onClick={() => setActiveTab('standards')}
          className={`py-1.5 rounded transition-colors text-center text-[11px] ${
            activeTab === 'standards'
              ? 'bg-vault-card text-vault-cyan font-bold shadow-sm'
              : 'text-vault-muted hover:text-white'
          }`}
        >
          BUILD STANDARDS
        </button>
      </div>

      {/* TAB 1: Mobile App Architecture Stack Layers */}
      {activeTab === 'architecture' && (
        <div className="space-y-2 animate-fade-in">
          {architectureLayers.map((layer) => (
            <div
              key={layer.id}
              className="p-2.5 rounded-xl bg-vault-bg/80 border border-vault-border hover:border-vault-cyan/40 transition-colors space-y-1 group/item"
            >
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-vault-darkMuted font-bold">{layer.step}</span>
                  <span className="text-white font-bold">{layer.title}</span>
                </div>
                <span className={`text-[10px] ${layer.color} font-mono`}>
                  {layer.tech}
                </span>
              </div>
              <p className="text-[11px] text-vault-muted font-sans leading-snug">
                {layer.detail}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* TAB 2: Build Standards & Core Tenets */}
      {activeTab === 'standards' && (
        <div className="space-y-2.5 animate-fade-in">
          <div className="grid grid-cols-2 gap-2">
            {standards.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-vault-bg/80 border border-vault-border space-y-1.5"
                >
                  <Icon className="w-4 h-4 text-vault-cyan" />
                  <div className="space-y-0.5">
                    <span className="text-[9px] text-vault-darkMuted font-bold block uppercase">
                      {s.label}
                    </span>
                    <span className="text-xs text-slate-200 font-bold block">
                      {s.value}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-3 rounded-xl bg-vault-surface border border-vault-border text-xs text-slate-300 font-sans space-y-1">
            <span className="text-vault-cyan font-mono text-[10px] font-bold block uppercase">
              // CRAFTSMANSHIP PHILOSOPHY
            </span>
            <p className="text-[11px] text-vault-muted leading-relaxed">
              Every Android app in this vault is engineered with zero commercial trackers, lightweight memory footprints, and fast local responsiveness.
            </p>
          </div>
        </div>
      )}

      {/* Bottom Telemetry Footer Bar */}
      <div className="pt-2 hairline-t flex items-center justify-between text-[11px] text-vault-darkMuted">
        <div className="flex items-center gap-1.5 text-slate-300">
          <Cpu className="w-3.5 h-3.5 text-vault-cyan" />
          <span>ARM64 / UNIVERSAL</span>
        </div>
        <Link
          to="/about"
          className="text-vault-cyan hover:underline flex items-center gap-0.5"
        >
          <span>ENGINEERING DOCS</span>
          <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
};
