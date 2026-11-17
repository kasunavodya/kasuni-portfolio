"use client";

import React from "react";

export default function HighlightCards() {
  return (
    <section id="overview" className="py-20 relative bg-[#03070d] bg-feel-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Highlight Banner Box (Directly replicating the top card in Image 3) */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#09111c] border-2 border-cyan-400 shadow-[0_0_35px_rgba(0,210,239,0.3)] p-6 sm:p-10 text-center transition-all">
          <h2 className="text-xl sm:text-3xl font-extrabold text-cyan-300 tracking-tight leading-snug">
            M.Sc. Candidate at University of Gothenburg, Sweden · Building High-Performance Enterprise Next.js & AI Systems
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            From architecting the Business Hub hospitality platform to pioneering Antigravity AI integrations — combining 3+ years of production delivery with empirical software engineering.
          </p>
        </div>

        {/* Section Heading (Replicating the glowing title in Image 3) */}
        <div className="text-center my-14">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-cyan-400 text-cyan-glow tracking-tight">
            Strategic Engineering & Production Track Record
          </h3>
          <p className="mt-2 text-xs sm:text-sm font-mono text-slate-400">
            Three foundational pillars powering scalable, resilient software delivery
          </p>
        </div>

        {/* 3-Column Cards Grid (Directly replicating the 3 cards in Image 3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Next.js & Frontend Architecture */}
          <div className="rounded-2xl bg-[#09111c] border border-cyan-500/30 hover:border-cyan-400 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,210,239,0.25)] hover:-translate-y-1 group">
            <div>
              {/* Recessed Dark Icon Box (Matching Image 3) */}
              <div className="bg-[#05080f] border border-slate-800/80 rounded-xl py-6 flex items-center justify-center mb-5 group-hover:border-cyan-500/40 transition-colors">
                <div className="w-12 h-12 rounded-full bg-cyan-950/80 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(0,210,239,0.4)]">
                  {/* Clock / Speedometer SVG matching Card 1 */}
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              <div className="space-y-1 mb-4">
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                  Pillar 01: Frontend Architecture
                </span>
                <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Next.js & Platform Engineering
                </h4>
                <p className="text-xs text-slate-400 font-mono">
                  Happy Chimps · Business Hub Lead
                </p>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">⭐</span>
                  <span>Enhanced and scaled the Business Hub restaurant platform using Next.js.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">⭐</span>
                  <span>Collaborated with UI/UX teams in Figma to deliver pixel-perfect component systems.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">⭐</span>
                  <span>Engineered responsive state workflows with Redux and TypeScript.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Next.js · React · Redux</span>
              <span className="text-cyan-400">Production ▹</span>
            </div>
          </div>

          {/* Card 2: Antigravity AI & Tooling */}
          <div className="rounded-2xl bg-[#09111c] border border-cyan-500/30 hover:border-cyan-400 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,210,239,0.25)] hover:-translate-y-1 group">
            <div>
              {/* Recessed Dark Icon Box (Matching Image 3) */}
              <div className="bg-[#05080f] border border-slate-800/80 rounded-xl py-6 flex items-center justify-center mb-5 group-hover:border-cyan-500/40 transition-colors">
                <div className="w-12 h-12 rounded-full bg-cyan-950/80 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(0,210,239,0.4)]">
                  {/* Document / Blueprint SVG matching Card 2 */}
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>

              <div className="space-y-1 mb-4">
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                  Pillar 02: AI Workflows
                </span>
                <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Antigravity AI & Intelligence
                </h4>
                <p className="text-xs text-slate-400 font-mono">
                  Happy Chimps · AI Projects
                </p>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">⭐</span>
                  <span>Worked directly on Antigravity AI projects and agentic developer tools.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">⭐</span>
                  <span>Formulated intelligent prompt chains and context management workflows.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">⭐</span>
                  <span>Modernized development lifecycles with autonomous agent tools.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Antigravity · AI Agents · TypeScript</span>
              <span className="text-cyan-400">Specialized ▹</span>
            </div>
          </div>

          {/* Card 3: Empirical SE & Master's in Sweden */}
          <div className="rounded-2xl bg-[#09111c] border border-cyan-500/30 hover:border-cyan-400 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,210,239,0.25)] hover:-translate-y-1 group">
            <div>
              {/* Recessed Dark Icon Box (Matching Image 3) */}
              <div className="bg-[#05080f] border border-slate-800/80 rounded-xl py-6 flex items-center justify-center mb-5 group-hover:border-cyan-500/40 transition-colors">
                <div className="w-12 h-12 rounded-full bg-cyan-950/80 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(0,210,239,0.4)]">
                  {/* Person / Graduate SVG matching Card 3 */}
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>

              <div className="space-y-1 mb-4">
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                  Pillar 03: Global Research
                </span>
                <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Empirical SE & Quality Assurance
                </h4>
                <p className="text-xs text-slate-400 font-mono">
                  University of Gothenburg, Sweden
                </p>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">⭐</span>
                  <span>M.Sc. coursework in Advanced Requirements Engineering & Empirical SE.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">⭐</span>
                  <span>Rigorous focus on Quality Assurance, systematic testing, and agile metrics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">⭐</span>
                  <span>SLIIT Women in FOSS & IEEE Women in Engineering leadership advocacy.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Gothenburg · QA · Requirements</span>
              <span className="text-cyan-400">Academic ▹</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

