import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Smartphone, 
  Globe, 
  FlaskConical, 
  Layers, 
  Github, 
  Linkedin, 
  Gamepad2, 
  Sparkles 
} from 'lucide-react';
import { APPS_DATA, DEVELOPER_INFO } from '../data/appsData';
import { CATEGORIES } from '../data/categoriesData';

export const About = () => {
  const whatIBuild = [
    {
      step: '01',
      title: 'MOBILE',
      description: 'Android applications and utility tools engineered for performance, clean architecture, and offline durability.',
      icon: Smartphone
    },
    {
      step: '02',
      title: 'WEB',
      description: 'Interactive websites and web applications with responsive layouts, modern design tokens, and fast load times.',
      icon: Globe
    },
    {
      step: '03',
      title: 'EXPERIMENTS',
      description: 'Prototypes, on-device AI concepts, and technical explorations turning raw hypotheses into working code.',
      icon: FlaskConical
    },
    {
      step: '04',
      title: 'UI / UX',
      description: 'Interfaces focused on usability, typographic structure, high-contrast dark/light modes, and distinct visual identity.',
      icon: Layers
    }
  ];

  const developmentApproach = [
    {
      step: '01',
      phase: 'BUILD',
      detail: 'Turn an idea into something functional with clean foundations and reactive state management.'
    },
    {
      step: '02',
      phase: 'TEST',
      detail: 'Find problems, stress-test real Android devices, break things, and fix them.'
    },
    {
      step: '03',
      phase: 'REFINE',
      detail: 'Improve the experience, sharpen typography, optimize memory footprints, and tune UI micro-interactions.'
    },
    {
      step: '04',
      phase: 'SHIP',
      detail: 'Give the finished project somewhere to live in the permanent archive with raw binary distribution.'
    }
  ];

  const techStackGroups = [
    {
      group: 'MOBILE',
      items: ['Flutter', 'Dart', 'Android SDK', 'Riverpod', 'ML Kit OCR', 'SQLite']
    },
    {
      group: 'WEB',
      items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'TailwindCSS', 'Vite']
    },
    {
      group: 'BACKEND',
      items: ['Node.js', 'REST APIs', 'Firebase', 'Google Gemini AI']
    },
    {
      group: 'TOOLS',
      items: ['Git', 'GitHub', 'VS Code', 'Android Studio', 'Linux']
    }
  ];

  const allProjects = [
    ...APPS_DATA.map((app, idx) => ({
      num: String(idx + 1).padStart(2, '0'),
      name: app.name,
      type: 'Android App',
      category: CATEGORIES.find((c) => c.id === app.category)?.name || 'Mobile',
      description: app.tagline,
      tech: app.techStack?.slice(0, 3).join(' · '),
      link: `/app/${app.id}`,
      isExternal: false,
    })),
    {
      num: String(APPS_DATA.length + 1).padStart(2, '0'),
      name: 'GameVault',
      type: 'Web Platform',
      category: 'Gaming',
      description: 'Curated browser gaming vault and lightweight retro web arcade.',
      tech: 'React · Canvas · Web Audio',
      link: DEVELOPER_INFO.gameVaultUrl,
      isExternal: true,
    },
    {
      num: String(APPS_DATA.length + 2).padStart(2, '0'),
      name: 'AppVault',
      type: 'Software Library',
      category: 'Portfolio',
      description: 'Personal software repository and direct Android APK distribution catalog.',
      tech: 'React · Vite · TailwindCSS',
      link: '/',
      isExternal: false,
    }
  ];

  return (
    <div className="pt-6 pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 animate-fade-in font-sans">
      
      {/* 1. Header */}
      <section className="space-y-2.5 pb-5 border-b border-[#E1E6E2]">
        <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#5B9C8D] tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ABOUT THE BUILDER</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#202522] tracking-tight font-sans">
          {DEVELOPER_INFO.name}
        </h1>

        <p className="text-xs sm:text-sm font-semibold text-[#5B9C8D]">
          {DEVELOPER_INFO.title}
        </p>

        <p className="text-sm sm:text-base text-[#6F7772] leading-relaxed pt-0.5">
          “I build mobile applications and web experiences focused on useful ideas, clean interfaces, and practical digital experiences.”
        </p>
      </section>

      {/* 2. Why I Build & Why AppVault Exists */}
      <section className="bg-white rounded-2xl border border-[#E1E6E2] p-5 sm:p-7 shadow-sm space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-[#202522] font-sans">
          Why AppVault exists
        </h2>
        <div className="space-y-2 text-xs sm:text-sm text-[#6F7772] leading-relaxed">
          <p>
            <strong>AppVault is my personal software archive.</strong> It is a dedicated space to showcase and preserve Android applications and digital tools that I have designed, developed, and experimented with.
          </p>
          <p>
            Instead of projects getting buried in forgotten folders or lost behind commercial app store walls, each build gets a permanent home here with source links, architecture notes, and direct APK download binaries.
          </p>
        </div>
      </section>

      {/* 3. What I Build (4 Disciplines) */}
      <section className="space-y-4">
        <div className="pb-2 border-b border-[#E1E6E2]">
          <h2 className="text-lg font-bold text-[#202522] font-sans">
            What I build
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {whatIBuild.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white rounded-2xl border border-[#E1E6E2] p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-200 space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-[#EAF1EC] text-[#5B9C8D] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono text-[#9AA19C] font-bold">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#202522] group-hover:text-[#5B9C8D] transition-colors font-sans">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6F7772] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Development Philosophy & Timeline */}
      <section className="space-y-4">
        <div className="pb-2 border-b border-[#E1E6E2]">
          <h2 className="text-lg font-bold text-[#202522] font-sans">
            Building approach
          </h2>
          <p className="text-xs text-[#6F7772]">
            BUILD → TEST → REFINE → SHIP
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {developmentApproach.map((st) => (
            <div
              key={st.step}
              className="p-4 rounded-xl bg-white border border-[#E1E6E2] shadow-sm space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#9AA19C] font-bold">{st.step}</span>
                <span className="text-xs font-bold text-[#5B9C8D]">{st.phase}</span>
              </div>
              <p className="text-[11px] text-[#6F7772] leading-relaxed">
                {st.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. The Stack */}
      <section className="space-y-4">
        <div className="pb-2 border-b border-[#E1E6E2]">
          <h2 className="text-lg font-bold text-[#202522] font-sans">
            My stack
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          {techStackGroups.map((grp) => (
            <div
              key={grp.group}
              className="bg-white rounded-xl border border-[#E1E6E2] p-4 shadow-sm space-y-2"
            >
              <span className="text-[11px] font-bold text-[#5B9C8D] uppercase tracking-wider block font-sans">
                {grp.group}
              </span>
              <ul className="space-y-1 text-[#202522] font-medium">
                {grp.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-1.5 text-xs">
                    <span className="text-[#5B9C8D]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 6. The Archive */}
      <section className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-[#E1E6E2]">
          <h2 className="text-lg font-bold text-[#202522] font-sans">
            The archive
          </h2>
          <span className="text-xs text-[#6F7772] font-mono">
            {allProjects.length} Registered Entries
          </span>
        </div>

        <div className="divide-y divide-[#EDF0ED] bg-white rounded-2xl border border-[#E1E6E2] shadow-sm overflow-hidden">
          {allProjects.map((proj) => {
            const content = (
              <div className="p-4 hover:bg-[#EAF1EC]/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 group">
                <div className="flex items-start sm:items-center gap-3 min-w-0">
                  <span className="font-mono text-xs text-[#9AA19C] group-hover:text-[#5B9C8D] transition-colors w-5 pt-0.5 sm:pt-0">
                    {proj.num}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-bold text-[#202522] group-hover:text-[#5B9C8D] transition-colors font-sans">
                        {proj.name}
                      </span>
                      <span className="text-[9px] text-[#5B9C8D] bg-[#EAF1EC] px-1.5 py-0.2 rounded font-semibold">
                        {proj.type}
                      </span>
                    </div>
                    <p className="text-xs text-[#6F7772] mt-0.5">
                      {proj.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 self-end sm:self-auto shrink-0 text-xs">
                  <span className="text-[11px] text-[#9AA19C] hidden md:inline">
                    {proj.tech}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#9AA19C] group-hover:text-[#5B9C8D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );

            return proj.isExternal ? (
              <a
                key={proj.name}
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                {content}
              </a>
            ) : (
              <Link key={proj.name} to={proj.link} className="block">
                {content}
              </Link>
            );
          })}
        </div>
      </section>

      {/* 7. Let's Connect */}
      <section className="bg-white rounded-2xl border border-[#E1E6E2] p-5 sm:p-7 shadow-sm space-y-4">
        <div className="space-y-0.5">
          <h2 className="text-lg font-bold text-[#202522] font-sans">
            Let's connect
          </h2>
          <p className="text-xs text-[#6F7772]">
            Feel free to explore the codebases, check out other projects, or reach out.
          </p>
        </div>

        <div className="flex items-center gap-5 flex-wrap text-xs font-semibold text-[#202522]">
          <a
            href={DEVELOPER_INFO.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#5B9C8D] transition-colors flex items-center gap-1.5"
          >
            <Github className="w-4 h-4" />
            <span>GitHub ↗</span>
          </a>

          <a
            href={DEVELOPER_INFO.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#5B9C8D] transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn ↗</span>
          </a>

          <a
            href={DEVELOPER_INFO.gameVaultUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#5B9C8D] transition-colors flex items-center gap-1.5"
          >
            <Gamepad2 className="w-4 h-4" />
            <span>GameVault ↗</span>
          </a>
        </div>
      </section>

    </div>
  );
};
