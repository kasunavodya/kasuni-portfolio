"use client";

import React, { useState } from "react";
import { STORY_CHAPTERS, WORK_EXPERIENCE, ExperienceItem } from "../data/portfolioData";

export default function StorySection() {
  const [viewMode, setViewMode] = useState<"storybook" | "timeline">("storybook");
  const [activeChapterIndex, setActiveChapterIndex] = useState(2); // Default to Chapter 3 (Happy Chimps & Antigravity AI)
  const [selectedCompanyFilter, setSelectedCompanyFilter] = useState<string>("ALL");

  const activeChapter = STORY_CHAPTERS[activeChapterIndex];

  const companies = ["ALL", "Happy Chimps", "TOLD MEDIA", "REACH IT RIGHT"];

  const filteredExperience =
    selectedCompanyFilter === "ALL"
      ? WORK_EXPERIENCE
      : WORK_EXPERIENCE.filter((exp) => exp.company.toLowerCase().includes(selectedCompanyFilter.toLowerCase()));

  return (
    <section id="story" className="py-24 relative bg-[#03070d] bg-feel-grid overflow-hidden">
      {/* Background cyber accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#09111c] border border-cyan-500/40 text-cyan-300 text-xs font-mono mb-3 shadow-[0_0_15px_rgba(0,210,239,0.2)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              The Journey & Professional Trajectory
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              From Sri Lankan Tech Platforms to{" "}
              <span className="text-cyan-400 text-cyan-glow">Gothenburg, Sweden</span>
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl font-light">
              Explore my trajectory as an interactive narrative chapter book or as a detailed engineering timeline.
            </p>
          </div>

          {/* Mode Switcher Pills (Inspired by Waniya Hashmi's interactive book concept) */}
          <div className="flex items-center p-1 bg-[#09111c] rounded-full border border-cyan-500/40 self-start md:self-auto backdrop-blur-md">
            <button
              onClick={() => setViewMode("storybook")}
              className={`px-5 py-2 rounded-full text-xs font-mono font-medium transition-all flex items-center gap-2 ${
                viewMode === "storybook"
                  ? "bg-cyan-400 text-slate-950 font-bold shadow-[0_0_18px_rgba(0,210,239,0.5)]"
                  : "text-slate-400 hover:text-cyan-300 hover:bg-slate-800/50"
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Storybook Chapters
            </button>

            <button
              onClick={() => setViewMode("timeline")}
              className={`px-5 py-2 rounded-full text-xs font-mono font-medium transition-all flex items-center gap-2 ${
                viewMode === "timeline"
                  ? "bg-cyan-400 text-slate-950 font-bold shadow-[0_0_18px_rgba(0,210,239,0.5)]"
                  : "text-slate-400 hover:text-cyan-300 hover:bg-slate-800/50"
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              Technical Dossier
            </button>
          </div>
        </div>

        {/* View Mode 1: Interactive Storybook Book (Waniya Hashmi Style) */}
        {viewMode === "storybook" && (
          <div className="space-y-8">
            {/* Chapter Navigation Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {STORY_CHAPTERS.map((chap, idx) => {
                const isActive = idx === activeChapterIndex;
                return (
                  <button
                    key={chap.chapter}
                    onClick={() => setActiveChapterIndex(idx)}
                    className={`p-4 rounded-xl text-left border transition-all relative overflow-hidden group ${
                      isActive
                        ? "bg-slate-900 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.25)]"
                        : "bg-slate-950/60 border-slate-800/80 hover:border-cyan-500/30 hover:bg-slate-900/40"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-sky-300" />
                    )}
                    <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-1">
                      <span>Chapter 0{chap.chapter}</span>
                      <span className="text-[11px] text-slate-500">{chap.timeframe}</span>
                    </div>
                    <div className={`text-sm font-semibold truncate ${isActive ? "text-white" : "text-slate-300 group-hover:text-cyan-300"}`}>
                      {chap.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Chapter Book Page */}
            <div className="rounded-2xl glass-card border border-cyan-500/30 p-6 sm:p-10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                {/* Left Chapter Spine / Metadata */}
                <div className="w-full lg:w-1/3 space-y-6 lg:border-r lg:border-slate-800/80 lg:pr-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono">
                    <span>Chapter 0{activeChapter.chapter} of 04</span>
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Timeframe</span>
                    <h3 className="text-xl font-bold text-white mt-1">{activeChapter.timeframe}</h3>
                    <p className="text-xs font-mono text-cyan-400 mt-0.5 flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {activeChapter.location}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-xs font-mono text-cyan-300 block mb-1 font-semibold">Key Chapter Milestone:</span>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      {activeChapter.takeaway}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">Technologies & Focus</span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeChapter.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded text-xs font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-500/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Chapter Story Prose */}
                <div className="w-full lg:w-2/3 space-y-6">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                      {activeChapter.tagline}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {activeChapter.title}
                    </h2>
                  </div>

                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light first-letter:text-4xl first-letter:font-bold first-letter:text-cyan-300 first-letter:mr-2 first-letter:float-left">
                    {activeChapter.narrative}
                  </p>

                  {/* Chapter Quick Switch Controls */}
                  <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={() => setActiveChapterIndex(Math.max(0, activeChapterIndex - 1))}
                      disabled={activeChapterIndex === 0}
                      className="px-3.5 py-2 rounded-lg text-xs font-mono text-slate-400 hover:text-cyan-300 hover:bg-slate-800/60 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center gap-1.5"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Previous Chapter
                    </button>

                    <span className="text-xs font-mono text-slate-500">
                      Chapter {activeChapterIndex + 1} / {STORY_CHAPTERS.length}
                    </span>

                    <button
                      onClick={() => setActiveChapterIndex(Math.min(STORY_CHAPTERS.length - 1, activeChapterIndex + 1))}
                      disabled={activeChapterIndex === STORY_CHAPTERS.length - 1}
                      className="px-3.5 py-2 rounded-lg text-xs font-mono text-slate-400 hover:text-cyan-300 hover:bg-slate-800/60 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center gap-1.5"
                    >
                      Next Chapter
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View Mode 2: Technical Dossier Grid */}
        {viewMode === "timeline" && (
          <div className="space-y-8">
            {/* Filter Chips */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 mr-2">Filter Organization:</span>
              {companies.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCompanyFilter(c)}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                    selectedCompanyFilter === c
                      ? "bg-cyan-400 text-slate-950 font-bold shadow-[0_0_12px_rgba(34,211,238,0.4)]"
                      : "bg-slate-900 text-slate-400 border border-slate-800 hover:border-cyan-500/30 hover:text-cyan-300"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Experience Cards Stack */}
            <div className="space-y-6">
              {filteredExperience.map((exp) => (
                <div
                  key={exp.id}
                  className="rounded-2xl glass-card glass-card-hover p-6 sm:p-8 relative border border-cyan-500/20"
                >
                  {exp.featured && (
                    <span className="absolute top-6 right-6 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-400 text-slate-950 shadow-[0_0_12px_rgba(34,211,238,0.5)]">
                      LATEST ENGINEERING ROLE
                    </span>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-white tracking-tight">{exp.role}</h3>
                        <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-cyan-300 flex items-center gap-1.5 mt-0.5">
                        <span>{exp.company}</span>
                        <span className="text-slate-600">·</span>
                        <span className="text-slate-400 font-normal">{exp.location}</span>
                      </p>
                    </div>

                    <div className="text-left sm:text-right">
                      <span className="text-xs font-mono font-medium text-slate-300 block bg-slate-900/80 px-3 py-1 rounded-lg border border-slate-800 self-start">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 mb-5 leading-relaxed font-light">
                    {exp.overview}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">Key Engineering Deliverables:</span>
                    <ul className="space-y-2">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                          <span className="text-cyan-400 font-bold mt-0.5">▹</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900/90 text-cyan-300 border border-cyan-500/20 hover:border-cyan-400/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

