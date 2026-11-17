"use client";

import React from "react";

interface TechnicalSkillsProps {
  darkMode: boolean;
}

interface ToolItem {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  categoryIcon: React.ReactNode;
  tools: ToolItem[];
}

export default function TechnicalSkills({ darkMode }: TechnicalSkillsProps) {
  const topCategories: SkillCategory[] = [
    {
      title: "Frontend",
      categoryIcon: (
        <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      tools: [
        {
          name: "React",
          icon: (
            <svg className="w-4 h-4 text-cyan-400 animate-[spin_12s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <circle cx="12" cy="12" r="2" fill="currentColor" />
              <ellipse cx="12" cy="12" rx="9" ry="3.5" />
              <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
              <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
            </svg>
          ),
        },
        {
          name: "Next.js",
          icon: (
            <div className="w-3.5 h-3.5 rounded bg-black border border-slate-700 flex items-center justify-center text-white font-black text-[9px] leading-none">
              N
            </div>
          ),
        },
        {
          name: "TypeScript",
          icon: (
            <div className="w-3.5 h-3.5 rounded bg-[#3178c6] flex items-center justify-center text-white font-bold font-mono text-[8px] leading-none">
              TS
            </div>
          ),
        },
        {
          name: "JavaScript",
          icon: (
            <div className="w-3.5 h-3.5 rounded bg-[#f7df1e] flex items-center justify-center text-slate-950 font-bold font-mono text-[8px] leading-none">
              JS
            </div>
          ),
        },
        {
          name: "Redux",
          icon: (
            <svg className="w-3.5 h-3.5 text-[#764abc]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.8 14.6c-.6 0-1.1-.3-1.4-.7l-3.3 1.9c0 .2.1.4.1.7 0 1.9-1.6 3.5-3.5 3.5-1.9 0-3.5-1.6-3.5-3.5 0-.2 0-.4.1-.7L4 13.9c-.3.4-.8.7-1.4.7-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8c.6 0 1.1.3 1.4.7l3.3-1.9c0-.2-.1-.4-.1-.7 0-1.9 1.6-3.5 3.5-3.5 1.9 0 3.5 1.6 3.5 3.5 0 .2 0 .4-.1.7l3.3 1.9c.3-.4.8-.7 1.4-.7 1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8z" />
            </svg>
          ),
        },
        {
          name: "Tailwind CSS",
          icon: (
            <svg className="w-3.5 h-3.5 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
            </svg>
          ),
        },
        {
          name: "HTML",
          icon: (
            <div className="w-3.5 h-3.5 rounded bg-[#e34f26] flex items-center justify-center text-white font-black text-[8px] leading-none">
              &lt;&gt;
            </div>
          ),
        },
        {
          name: "CSS",
          icon: (
            <div className="w-3.5 h-3.5 rounded bg-[#1572b6] flex items-center justify-center text-white font-black text-[8px] leading-none">
              #
            </div>
          ),
        },
      ],
    },
    {
      title: "Backend",
      categoryIcon: (
        <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      tools: [
        {
          name: "Node.js",
          icon: (
            <div className="w-3.5 h-3.5 rounded bg-[#1e293b] border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold font-mono text-[8px] leading-none">
              JS
            </div>
          ),
        },
        {
          name: "NestJS",
          icon: <span className="text-xs leading-none">🐱</span>,
        },
        {
          name: "PHP",
          icon: (
            <div className="w-3.5 h-3.5 rounded bg-[#777bb4] flex items-center justify-center text-white font-bold text-[7px] leading-none">
              PHP
            </div>
          ),
        },
        {
          name: "Laravel",
          icon: (
            <svg className="w-3.5 h-3.5 text-[#ff2d20]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.5 2.5l5.5 3.2v6.4l-5.5-3.2V2.5zm6.5 3.8l5.5 3.2v6.4l-5.5-3.2V6.3zM3 5.7l5.5 3.2v6.4L3 12.1V5.7zm11 7l5.5 3.2v6.4l-5.5-3.2v-6.4zm-5.5-3.2l5.5 3.2v6.4L8.5 19.5v-6.4zm-5.5 3.2l5.5 3.2v6.4L3 19.1v-6.4z" />
            </svg>
          ),
        },
        {
          name: "Java",
          icon: <span className="text-xs leading-none">☕</span>,
        },
      ],
    },
    {
      title: "CMS & Tools",
      categoryIcon: (
        <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      tools: [
        {
          name: "WordPress",
          icon: (
            <div className="w-3.5 h-3.5 rounded bg-[#21759b] flex items-center justify-center text-white font-bold text-[8px] leading-none">
              W
            </div>
          ),
        },
        {
          name: "Docker",
          icon: <span className="text-xs leading-none">🐳</span>,
        },
        {
          name: "Git",
          icon: (
            <svg className="w-3.5 h-3.5 text-[#f05032]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.6 10.9L13.1 2.4c-.8-.8-2.1-.8-2.9 0L8.1 4.5l3.6 3.6c.9-.3 1.9-.1 2.6.6.7.7.9 1.7.6 2.6l3.5 3.5c.9-.3 1.9-.1 2.6.6.9.9.9 2.5 0 3.4s-2.5.9-3.4 0c-.8-.8-1-2-.4-2.9l-3.3-3.3v4.7c.3.2.7.5.9.9.9.9.9 2.5 0 3.4s-2.5.9-3.4 0c-.9-.9-.9-2.5 0-3.4.3-.3.6-.5.9-.7V9.7c-.3-.2-.6-.4-.9-.7-.8-.8-1-2-.4-2.9L2.4 10.3c-.8.8-.8 2.1 0 2.9l8.5 8.5c.8.8 2.1.8 2.9 0l7.8-7.8c.8-.8.8-2.1 0-3z" />
            </svg>
          ),
        },
        {
          name: "Bitbucket",
          icon: (
            <svg className="w-3.5 h-3.5 text-[#0052cc]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.5 3c-.5 0-.9.4-1 .9L.1 17.4c-.1.5.3 1 .8 1.1l14.2 2.5c.5.1 1-.3 1.1-.8l1.4-8.2c.1-.5-.3-1-.8-1.1L8.2 9.6l.8-4.9c.1-.5-.3-1-.8-1.1L2.5 3z" />
            </svg>
          ),
        },
        {
          name: "Figma",
          icon: (
            <svg className="w-3 h-4" viewBox="0 0 38 57" fill="none">
              <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5z" fill="#1ABCFE" />
              <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
              <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
              <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
              <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
            </svg>
          ),
        },
        {
          name: "Antigravity",
          icon: <span className="text-cyan-400 font-black text-xs leading-none">⚡</span>,
        },
      ],
    },
  ];

  const bottomCategories: SkillCategory[] = [
    {
      title: "Mobile Development",
      categoryIcon: (
        <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      tools: [
        {
          name: "Flutter",
          icon: (
            <svg className="w-3.5 h-3.5 text-[#02569B]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372zm.057 11.229L8.686 16.914 14.371 22.6h7.372L12.371 13.229l1.971-1.971.029-.029z" />
            </svg>
          ),
        },
        {
          name: "Dart",
          icon: (
            <svg className="w-3.5 h-3.5 text-[#0175C2]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.1 0C1.8 0 0 1.8 0 4.1v15.8C0 22.2 1.8 24 4.1 24h15.8c2.3 0 4.1-1.8 4.1-4.1V4.1C24 1.8 22.2 0 19.9 0H4.1zm14.3 6.5l-3.8 6.6 4.3 4.4h-3.4l-2.6-2.7-2.6 2.7H6.9l4.3-4.4-3.8-6.6h3.4l2.1 3.7 2.1-3.7h3.4z" />
            </svg>
          ),
        },
        {
          name: "Android (Java)",
          icon: (
            <svg className="w-3.5 h-3.5 text-[#3DDC84]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.5 15.3c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1m-11 0c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1m11.4-6l2-3.5a.4.4 0 0 0-.2-.6.4.4 0 0 0-.6.2l-2 3.5c-1.6-.7-3.3-1-5.1-1s-3.5.3-5.1 1l-2-3.5a.4.4 0 0 0-.6-.2.4.4 0 0 0-.2.6l2 3.5C2.7 11.2.3 14.7 0 18.8h24c-.3-4.1-2.7-7.6-6.1-9.5" />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Database & Cloud",
      categoryIcon: (
        <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      tools: [
        {
          name: "MySQL",
          icon: <span className="text-xs leading-none">🐬</span>,
        },
        {
          name: "MongoDB",
          icon: <span className="text-xs leading-none">🍃</span>,
        },
        {
          name: "Firebase",
          icon: (
            <svg className="w-3.5 h-3.5 text-[#FFA000]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.858 4.411a1.634 1.634 0 001.611 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.598 18.614z" />
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-12 sm:py-16 relative overflow-hidden transition-colors ${
        darkMode ? "bg-[#03070d] bg-feel-grid" : "bg-slate-50"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header (Compact, Simple & Elegant) */}
        <div className="text-center mb-8 sm:mb-10">
          <h2
            className={`text-2xl sm:text-3xl font-bold tracking-tight ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Technical Skills
          </h2>
          <p
            className={`mt-1.5 text-xs sm:text-sm font-light ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Technologies and tools I work with
          </p>
        </div>

        {/* Row 1: Frontend, Backend, CMS & Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {topCategories.map((cat) => (
            <div
              key={cat.title}
              className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 backdrop-blur-sm ${
                darkMode
                  ? "bg-[#070d17]/85 border-slate-800/80 hover:border-cyan-500/40 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                  : "bg-white border-slate-200 hover:border-cyan-400 shadow-sm"
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-3">
                <span className="shrink-0">{cat.categoryIcon}</span>
                <h3
                  className={`text-xs sm:text-sm font-semibold tracking-wide ${
                    darkMode ? "text-slate-200" : "text-slate-800"
                  }`}
                >
                  {cat.title}
                </h3>
              </div>

              {/* Compact Pills (Matching User Reference Image) */}
              <div className="flex flex-wrap gap-2">
                {cat.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className={`inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg border transition-all duration-200 group cursor-default ${
                      darkMode
                        ? "bg-[#040810] border-slate-800/90 hover:border-cyan-500/50 hover:bg-[#07111e]"
                        : "bg-slate-50 border-slate-200 hover:border-cyan-400 hover:bg-cyan-50/50"
                    }`}
                  >
                    <div className="w-3.5 h-3.5 shrink-0 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                      {tool.icon}
                    </div>
                    <span
                      className={`text-xs font-mono font-medium tracking-tight transition-colors group-hover:text-cyan-400 ${
                        darkMode ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Mobile Development & Database & Cloud (Centered & Symmetrical) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 max-w-3xl mx-auto mt-3.5 sm:mt-4">
          {bottomCategories.map((cat) => (
            <div
              key={cat.title}
              className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 backdrop-blur-sm ${
                darkMode
                  ? "bg-[#070d17]/85 border-slate-800/80 hover:border-cyan-500/40 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                  : "bg-white border-slate-200 hover:border-cyan-400 shadow-sm"
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-3">
                <span className="shrink-0">{cat.categoryIcon}</span>
                <h3
                  className={`text-xs sm:text-sm font-semibold tracking-wide ${
                    darkMode ? "text-slate-200" : "text-slate-800"
                  }`}
                >
                  {cat.title}
                </h3>
              </div>

              {/* Compact Pills (Matching User Reference Image) */}
              <div className="flex flex-wrap gap-2">
                {cat.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className={`inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg border transition-all duration-200 group cursor-default ${
                      darkMode
                        ? "bg-[#040810] border-slate-800/90 hover:border-cyan-500/50 hover:bg-[#07111e]"
                        : "bg-slate-50 border-slate-200 hover:border-cyan-400 hover:bg-cyan-50/50"
                    }`}
                  >
                    <div className="w-3.5 h-3.5 shrink-0 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                      {tool.icon}
                    </div>
                    <span
                      className={`text-xs font-mono font-medium tracking-tight transition-colors group-hover:text-cyan-400 ${
                        darkMode ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
