"use client";

import React from "react";
import { EDUCATION, LEADERSHIP } from "../data/portfolioData";

export default function EducationLeadership() {
  return (
    <section id="education" className="py-24 relative bg-[#03070d] bg-feel-grid border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Higher Education */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#09111c] border border-cyan-500/40 text-cyan-300 text-xs font-mono mb-3 shadow-[0_0_15px_rgba(0,210,239,0.2)]">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Academic Credentials
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Education & <span className="text-cyan-400 text-cyan-glow">Research</span>
              </h2>
              <p className="mt-2 text-slate-400 text-sm font-light">
                Bridging European postgraduate software engineering research with strong computer science foundations.
              </p>
            </div>

            <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-[#09111c] border border-cyan-500/30 hover:border-cyan-400 relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,210,239,0.2)]"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      {edu.badge && (
                        <span className="inline-block px-3 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-400 text-slate-950 mb-2 shadow-[0_0_10px_rgba(0,210,239,0.5)]">
                          {edu.badge}
                        </span>
                      )}
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-semibold text-cyan-300 flex items-center gap-2 mt-0.5">
                        <span>{edu.institution}</span>
                        <span className="text-slate-600">·</span>
                        <span className="text-slate-400 font-normal">{edu.location}</span>
                      </p>
                    </div>

                    <span className="text-xs font-mono text-cyan-300 bg-[#05080f] px-3.5 py-1 rounded-full border border-cyan-500/30 whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>

                  {edu.gpa && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#05080f] border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
                      <span>Cumulative GPA:</span>
                      <span className="font-bold text-white">{edu.gpa}</span>
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed font-light">
                    {edu.description}
                  </p>

                  <div>
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-2">
                      Core Academic Coursework:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-500/30"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Leadership & Community Volunteering */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#09111c] border border-cyan-500/40 text-cyan-300 text-xs font-mono mb-3 shadow-[0_0_15px_rgba(0,210,239,0.2)]">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Community Leadership & Impact
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Activities & <span className="text-cyan-400 text-cyan-glow">Volunteering</span>
              </h2>
              <p className="mt-2 text-slate-400 text-sm font-light">
                Empowering women in engineering and advancing open source software communities.
              </p>
            </div>

            <div className="space-y-6">
              {LEADERSHIP.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-[#09111c] border border-cyan-500/30 hover:border-cyan-400 relative transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,210,239,0.2)]"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {item.role}
                      </h3>
                      <p className="text-sm font-semibold text-cyan-300 flex items-center gap-2 mt-0.5">
                        <span>{item.organization}</span>
                        <span className="text-slate-600">·</span>
                        <span className="text-slate-400 font-normal">{item.location}</span>
                      </p>
                    </div>

                    <span className="text-xs font-mono text-cyan-300 bg-[#05080f] px-3.5 py-1 rounded-full border border-cyan-500/30 whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed font-light">
                    {item.description}
                  </p>

                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                      Key Contributions & Advocacy:
                    </span>
                    <ul className="space-y-2">
                      {item.contributions.map((c, cIdx) => (
                        <li key={cIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                          <span className="text-cyan-400 font-bold mt-0.5">▹</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

