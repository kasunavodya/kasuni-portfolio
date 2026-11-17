"use client";

import React from "react";

interface ProjectsSectionProps {
  darkMode: boolean;
}

export default function ProjectsSection({ darkMode }: ProjectsSectionProps) {
  const projects = [
    {
      title: "Business Hub Management Platform",
      category: "Enterprise Hospitality Web App",
      company: "Happy Chimps",
      period: "2023 – 2026",
      description:
        "High-performance restaurant and retail management web platform engineered with Next.js. Architected real-time order processing, dynamic digital menus, and table reservation workflows.",
      tags: ["Next.js", "React", "TypeScript", "Redux", "Tailwind CSS", "Figma"],
      highlights: [
        "Architected scalable Next.js components for restaurant operational management.",
        "Collaborated with UI/UX teams in Figma to ensure design fidelity and accessibility.",
        "Engineered real-time state and inventory tracking modules.",
      ],
      link: "https://kasunimakalanda.com",
    },
    {
      title: "Antigravity AI Autonomous Agent Systems",
      category: "AI Tooling & Agentic Workflows",
      company: "Happy Chimps AI Initiatives",
      period: "2025 – 2026",
      description:
        "Pioneered development on Antigravity AI projects, formulating autonomous agent workflows, context management protocols, and intelligent developer tooling.",
      tags: ["Antigravity AI", "AI Agents", "Prompt Engineering", "TypeScript", "Automation"],
      highlights: [
        "Implemented agentic workflows and tool integrations with Antigravity AI.",
        "Structured multi-step automated prompt chains for complex dev tasks.",
        "Bridged AI intelligence with production web applications.",
      ],
      link: "https://github.com/kasunavodya",
    },
    {
      title: "Corporate Web Platform & Client CMS",
      category: "Production Web Architecture",
      company: "Happy Chimps & TOLD MEDIA",
      period: "2023 – 2025",
      description:
        "Developed and maintained responsive corporate web applications and client platforms using React, Next.js, and WordPress with custom PHP plugins.",
      tags: ["Next.js", "React", "PHP", "WordPress", "SEO", "Responsive UI"],
      highlights: [
        "Boosted core web vitals and page load speed with Next.js SSR/SSG.",
        "Engineered custom WordPress themes and performant PHP backend services.",
        "Participated in organizing technical systems for corporate events in Colombo.",
      ],
      link: "https://kasunimakalanda.com",
    },
    {
      title: "MERN Stack Cloud Solutions",
      category: "Full-Stack Development & Hosting",
      company: "REACH IT RIGHT & TOLD MEDIA",
      period: "2021 – 2023",
      description:
        "Engineered database-driven full-stack web applications utilizing MongoDB, Express.js, React, and Node.js, managing DNS routing and GoDaddy cloud hosting.",
      tags: ["MongoDB", "Express.js", "React", "Node.js", "PHP", "GoDaddy", "DNS"],
      highlights: [
        "Built robust REST API endpoints and MongoDB data models.",
        "Managed domain infrastructure, SSL certificates, and live hosting deployments.",
        "Communicated directly with international stakeholders to refine technical specs.",
      ],
      link: "https://github.com/kasunavodya",
    },
  ];

  return (
    <section
      id="projects"
      className={`py-24 relative transition-colors ${
        darkMode ? "bg-[#03070d] bg-feel-grid" : "bg-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono mb-3 ${
              darkMode
                ? "bg-[#09111c] border border-cyan-500/40 text-cyan-300 shadow-[0_0_15px_rgba(0,210,239,0.2)]"
                : "bg-white border border-slate-200 text-cyan-800"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            Featured Engineering Work
          </div>
          <h2
            className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Featured <span className="text-cyan-400 text-cyan-glow">Projects</span>
          </h2>
          <p
            className={`mt-3 text-sm sm:text-base font-light max-w-2xl mx-auto ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Key production platforms, AI workflow implementations, and enterprise web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between group ${
                darkMode
                  ? "bg-[#08101a] border-cyan-500/25 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,210,239,0.2)]"
                  : "bg-white border-slate-200 hover:border-cyan-500 shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                    {proj.category}
                  </span>
                  <span
                    className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${
                      darkMode
                        ? "bg-[#03070d] border-slate-800 text-slate-400"
                        : "bg-slate-50 border-slate-200 text-slate-600"
                    }`}
                  >
                    {proj.period}
                  </span>
                </div>

                <h3
                  className={`text-xl font-bold tracking-tight mb-2 group-hover:text-cyan-300 transition-colors ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {proj.title}
                </h3>

                <p className="text-xs font-mono text-cyan-300/80 mb-4">
                  {proj.company}
                </p>

                <p
                  className={`text-sm leading-relaxed font-light mb-6 ${
                    darkMode ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {proj.description}
                </p>

                <div className="space-y-2 mb-6">
                  {proj.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="text-xs flex items-start gap-2 text-slate-400">
                      <span className="text-cyan-400 font-bold mt-0.5">▹</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                {proj.tags.map((t) => (
                  <span
                    key={t}
                    className={`px-2.5 py-1 rounded text-xs font-mono border ${
                      darkMode
                        ? "bg-[#03070d] border-cyan-500/20 text-cyan-300"
                        : "bg-slate-50 border-slate-200 text-slate-800"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

