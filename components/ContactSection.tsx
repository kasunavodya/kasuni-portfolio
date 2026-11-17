"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PERSONAL_INFO } from "../data/portfolioData";

interface ContactSectionProps {
  darkMode: boolean;
}

export default function ContactSection({ darkMode }: ContactSectionProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="contact"
      className={`py-16 sm:py-24 relative overflow-hidden transition-colors ${darkMode ? "bg-[#03070d] bg-feel-grid feel-beam-glow" : "bg-slate-50"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left Column: Direct Coordinates (Matching Image 4 Layout!) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            <h2
              className={`text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight ${darkMode ? "text-white" : "text-slate-900"
                }`}
            >
              Let&apos;s {" "}
              <span className="text-cyan-400 text-cyan-glow">Connect!</span>
            </h2>

            <p
              className={`text-sm sm:text-base font-light leading-relaxed max-w-xl ${darkMode ? "text-slate-300" : "text-slate-600"
                }`}
            >
              I&apos;m always open to new opportunities, interesting projects, and connecting with people who share a passion for technology. Let&apos;s connect and create something together!
            </p>

            {/* Contact Rows (Directly matching Image 4!) */}
            <div className="space-y-3 pt-2 max-w-xl">
              {/* Row 1: Email */}
              <div
                className={`p-3.5 sm:p-4 rounded-xl border flex items-center justify-between gap-2 transition-colors ${darkMode
                    ? "bg-[#08101a] border-cyan-500/25 hover:border-cyan-400/50"
                    : "bg-white border-slate-200"
                  }`}
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                  <span className="text-[11px] font-mono uppercase text-slate-400 w-14 sm:w-16 shrink-0">
                    EMAIL
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className={`text-xs sm:text-sm font-mono truncate hover:text-cyan-400 transition-colors ${darkMode ? "text-white" : "text-slate-900"
                      }`}
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className={`px-3 py-1 rounded-full text-xs font-mono border transition-all shrink-0 cursor-pointer ${darkMode
                      ? "bg-[#03070d] border-cyan-500/40 text-cyan-300 hover:bg-cyan-400 hover:text-black"
                      : "bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200"
                    }`}
                >
                  {copiedEmail ? "Copied!" : "Copy"}
                </button>
              </div>

              {/* Row 2: GitHub */}
              <div
                className={`p-3.5 sm:p-4 rounded-xl border flex items-center justify-between gap-2 transition-colors ${darkMode
                    ? "bg-[#08101a] border-cyan-500/25 hover:border-cyan-400/50"
                    : "bg-white border-slate-200"
                  }`}
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                  <span className="text-[11px] font-mono uppercase text-slate-400 w-14 sm:w-16 shrink-0">
                    GITHUB
                  </span>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-xs sm:text-sm font-mono truncate hover:text-cyan-400 transition-colors ${darkMode ? "text-slate-200" : "text-slate-800"
                      }`}
                  >
                    {PERSONAL_INFO.githubDisplay}
                  </a>
                </div>
                <span className="text-cyan-400 font-mono text-xs shrink-0">↗</span>
              </div>

              {/* Row 3: LinkedIn */}
              <div
                className={`p-3.5 sm:p-4 rounded-xl border flex items-center justify-between gap-2 transition-colors ${darkMode
                    ? "bg-[#08101a] border-cyan-500/25 hover:border-cyan-400/50"
                    : "bg-white border-slate-200"
                  }`}
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                  <span className="text-[11px] font-mono uppercase text-slate-400 w-14 sm:w-16 shrink-0">
                    LINKEDIN
                  </span>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-xs sm:text-sm font-mono truncate hover:text-cyan-400 transition-colors ${darkMode ? "text-slate-200" : "text-slate-800"
                      }`}
                  >
                    {PERSONAL_INFO.linkedinDisplay}
                  </a>
                </div>
                <span className="text-cyan-400 font-mono text-xs shrink-0">↗</span>
              </div>

              {/* Row 4: Based In */}
              <div
                className={`p-3.5 sm:p-4 rounded-xl border flex items-center gap-3 sm:gap-4 transition-colors ${darkMode
                    ? "bg-[#08101a] border-cyan-500/25"
                    : "bg-white border-slate-200"
                  }`}
              >
                <span className="text-[11px] font-mono uppercase text-slate-400 w-14 sm:w-16 shrink-0">
                  BASED IN
                </span>
                <span
                  className={`text-xs sm:text-sm font-semibold ${darkMode ? "text-white" : "text-slate-900"
                    }`}
                >
                  Göteborg, Sweden
                </span>
              </div>
            </div>

            {/* Bottom Buttons (Matching Image 4: "Start a conversation" + "Download CV") */}
            <div className="pt-3 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full sm:w-auto justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_25px_rgba(0,210,239,0.55)] hover:shadow-[0_0_35px_rgba(0,210,239,0.8)] transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Start a Conversation</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>

              <a
                href="/Kasuni_Makalanda_CV.pdf"
                download="Kasuni_Makalanda_CV.pdf"
                className={`w-full sm:w-auto justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm border transition-all flex items-center gap-2 transform hover:-translate-y-0.5 ${darkMode
                    ? "border-slate-700 bg-slate-950/80 text-white hover:border-cyan-400 hover:text-cyan-300 shadow-sm"
                    : "border-slate-300 bg-white text-slate-800 hover:border-cyan-500"
                  }`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Right Column: Avatar Handshake Image (No border, clean display) */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            {/* Ambient Cyan Glow */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative w-full max-w-xs sm:max-w-md flex items-center justify-center">
              <Image
                src="/images/girl.png"
                alt="Kasuni Makalanda"
                width={819}
                height={1024}
                className="w-full h-auto object-contain filter drop-shadow-[0_0_30px_rgba(0,210,239,0.3)] transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
