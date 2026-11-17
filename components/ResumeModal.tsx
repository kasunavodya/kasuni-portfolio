"use client";

import React, { useEffect } from "react";
import {
  PERSONAL_INFO,
  WORK_EXPERIENCE,
  EDUCATION,
  LEADERSHIP,
  SKILL_GROUPS,
} from "../data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c1220] border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.3)] flex flex-col overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-cyan-500/20">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs font-mono text-cyan-300 font-semibold uppercase tracking-wider">
              Official Curriculum Vitae · Kasuni Makalanda
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 rounded-lg text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print / Save PDF
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Printable Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 font-sans text-slate-200 print:text-black print:bg-white">
          {/* Header */}
          <div className="border-b border-cyan-500/20 pb-6 print:border-black">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black tracking-tight">
              {PERSONAL_INFO.fullName}
            </h1>
            <p className="text-xs sm:text-sm font-mono text-cyan-300 print:text-slate-800 mt-2 flex flex-wrap gap-x-3 gap-y-1">
              <span>{PERSONAL_INFO.location}</span>
              <span>|</span>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:underline">{PERSONAL_INFO.phone}</a>
              <span>|</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
              <span>|</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline">{PERSONAL_INFO.linkedinDisplay}</a>
              <span>|</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline">{PERSONAL_INFO.githubDisplay}</a>
              <span>|</span>
              <a href={PERSONAL_INFO.website} target="_blank" rel="noreferrer" className="hover:underline">{PERSONAL_INFO.websiteDisplay}</a>
            </p>
          </div>

          {/* Work Experience */}
          <section className="space-y-6">
            <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-cyan-400 font-bold border-b border-slate-800 pb-1">
              WORK EXPERIENCE
            </h2>

            {WORK_EXPERIENCE.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h3 className="text-base font-bold text-white print:text-black">
                    {exp.role.toUpperCase()}
                  </h3>
                  <span className="text-xs font-mono text-cyan-300 print:text-slate-700">
                    {exp.period}
                  </span>
                </div>
                <div className="text-xs text-slate-400 print:text-slate-600 font-medium">
                  {exp.company} | {exp.location}
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-slate-800">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Education */}
          <section className="space-y-4">
            <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-cyan-400 font-bold border-b border-slate-800 pb-1">
              EDUCATION
            </h2>

            {EDUCATION.map((edu, i) => (
              <div key={i} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h3 className="text-sm font-bold text-white print:text-black">
                    {edu.degree}
                  </h3>
                  <span className="text-xs font-mono text-cyan-300 print:text-slate-700">
                    {edu.period}
                  </span>
                </div>
                <p className="text-xs text-slate-400 print:text-slate-600">
                  {edu.institution} | {edu.location} {edu.gpa && `| Cumulative GPA: ${edu.gpa}`}
                </p>
                <p className="text-xs text-slate-300 print:text-slate-700">
                  <span className="font-semibold text-slate-400">Relevant Coursework:</span> {edu.coursework.join(", ")}.
                </p>
              </div>
            ))}
          </section>

          {/* Activities & Volunteering */}
          <section className="space-y-4">
            <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-cyan-400 font-bold border-b border-slate-800 pb-1">
              ACTIVITIES & VOLUNTEERING
            </h2>

            {LEADERSHIP.map((act, i) => (
              <div key={i} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h3 className="text-sm font-bold text-white print:text-black">
                    {act.role}
                  </h3>
                  <span className="text-xs font-mono text-cyan-300 print:text-slate-700">
                    {act.period}
                  </span>
                </div>
                <p className="text-xs text-slate-400 print:text-slate-600">
                  {act.organization} | {act.location}
                </p>
                <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-300 print:text-slate-800">
                  {act.contributions.map((c, idx) => (
                    <li key={idx}>{c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Additional Information / Skills */}
          <section className="space-y-3">
            <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-cyan-400 font-bold border-b border-slate-800 pb-1">
              ADDITIONAL INFORMATION
            </h2>

            <div className="text-xs space-y-2 text-slate-300 print:text-slate-800">
              <p>
                <span className="font-bold text-white print:text-black">Technical Skills: </span>
                TypeScript, JavaScript, React, Next.js, Node.js, NestJS, Redux, Java, PHP, MySQL, MongoDB, WordPress, Docker, Git, Figma, Antigravity, Tailwind CSS.
              </p>
              <p>
                <span className="font-bold text-white print:text-black">Soft Skills: </span>
                Teamwork, Communication, Problem-Solving, Time Management, Adaptability, Collaboration, Requirement Gathering.
              </p>
              <p>
                <span className="font-bold text-white print:text-black">Other Skills: </span>
                UI/UX Design, Full-Stack Development, Website Management.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

