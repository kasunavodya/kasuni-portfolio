"use client";

import React, { useState } from "react";
import { SKILL_GROUPS } from "../data/portfolioData";

export default function SkillsMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "ALL",
    "Frontend & Web Architecture",
    "Backend & Systems",
    "AI, Tools & Cloud",
    "Engineering Leadership & Soft Skills",
  ];

  const allSkills = SKILL_GROUPS.flatMap((group) =>
    group.skills.map((skill) => ({
      ...skill,
      categoryName: group.category,
    }))
  );

  const filteredSkills = allSkills.filter((skill) => {
    const matchesCategory =
      selectedCategory === "ALL" || skill.categoryName === selectedCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.context && skill.context.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (skill.tag && skill.tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative bg-[#03070d] bg-feel-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#09111c] border border-cyan-500/40 text-cyan-300 text-xs font-mono mb-3 shadow-[0_0_15px_rgba(0,210,239,0.2)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            Comprehensive Skillset
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Stack & Engineering <span className="text-cyan-400 text-cyan-glow">Disciplines</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-light">
            Battle-tested across production web platforms, enterprise restaurant systems, and modern AI automation.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-[#09111c] rounded-full border border-cyan-500/30 w-full md:w-auto">
            {categories.map((cat) => {
              const label =
                cat === "ALL"
                  ? "All Stack"
                  : cat.replace(" & Web Architecture", "").replace(" & Soft Skills", "").replace(", Tools & Cloud", " & AI");
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                    selectedCategory === cat
                      ? "bg-cyan-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,210,239,0.5)]"
                      : "text-slate-400 hover:text-cyan-300 hover:bg-slate-800/40"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <svg
              className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills (e.g. Next, AI, Figma)..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[#09111c] border border-cyan-500/30 text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={`${skill.name}-${skill.categoryName}`}
              className="p-5 rounded-2xl bg-[#09111c] border border-cyan-500/25 hover:border-cyan-400 flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,210,239,0.2)] hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                  <div className="flex items-center gap-1.5">
                    {skill.tag && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-950/80 text-cyan-400 border border-cyan-500/30">
                        {skill.tag}
                      </span>
                    )}
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium ${
                        skill.level === "Advanced"
                          ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/40"
                          : "bg-slate-800 text-slate-300 border border-slate-700"
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                </div>

                {skill.context && (
                  <p className="text-xs text-slate-400 leading-relaxed font-light mt-1">
                    {skill.context}
                  </p>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>{skill.categoryName.replace(" & Web Architecture", "").replace(" & Soft Skills", "")}</span>
                <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">verified ▹</span>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-500 font-mono text-xs">
            No skills match your filter &quot;{searchQuery}&quot;. Click clear to reset.
          </div>
        )}
      </div>
    </section>
  );
}

