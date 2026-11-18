"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PERSONAL_INFO } from "../data/portfolioData";

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const [copied, setCopied] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="home"
      className={`relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden transition-colors ${darkMode ? "bg-[#03070d] bg-feel-grid feel-beam-glow" : "bg-slate-50"
        }`}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, Bio & Action Buttons */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Main Headline */}
            <div className="space-y-1">
              <h1
                className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight ${darkMode ? "text-white" : "text-slate-900"
                  }`}
              >
                KASUNI{" "}
                <span
                  className={
                    darkMode
                      ? "text-cyan-400 text-cyan-glow"
                      : "text-cyan-600"
                  }
                >
                  MAKALANDA
                </span>
              </h1>
              <h2
                className={`text-2xl sm:text-3xl font-bold tracking-tight ${darkMode ? "text-cyan-300" : "text-cyan-700"
                  }`}
              >
                Software Engineer
              </h2>
            </div>

            {/* Subtitle / Bio */}
            <p
              className={`text-base sm:text-lg leading-relaxed font-light max-w-xl ${darkMode ? "text-slate-300" : "text-slate-600"
                }`}
            >
              I&apos;m a Software Engineer with experience in building web applications, business platforms, and digital solutions. Currently pursuing my Master&apos;s in Software Engineering and Management at the{" "}
              <span className={`font-medium ${darkMode ? "text-white" : "text-slate-900"}`}>
                University of Gothenburg, Sweden
              </span>
              .
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#experience"
                className="w-full sm:w-auto justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_25px_rgba(0,210,239,0.55)] hover:shadow-[0_0_35px_rgba(0,210,239,0.8)] transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Explore My Work</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>

              <a
                href="/Kasuni_Makalanda_CV.pdf"
                download="Kasuni_Makalanda_CV.pdf"
                className={`w-full sm:w-auto justify-center px-5 sm:px-7 py-3 sm:py-3.5 rounded-full font-medium text-xs sm:text-sm border transition-all flex items-center gap-2 transform hover:-translate-y-0.5 ${darkMode
                  ? "border-cyan-500/40 bg-[#09111c] text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 shadow-[0_0_15px_rgba(0,210,239,0.2)]"
                  : "border-cyan-300 bg-cyan-50 text-cyan-800 hover:bg-cyan-100"
                  }`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className={`w-full sm:w-auto justify-center px-5 sm:px-7 py-3 sm:py-3.5 rounded-full font-medium text-xs sm:text-sm border transition-all flex items-center gap-2 transform hover:-translate-y-0.5 ${darkMode
                  ? "border-slate-700 bg-slate-950/80 text-white hover:border-cyan-400 hover:text-cyan-300"
                  : "border-slate-300 bg-white text-slate-800 hover:border-cyan-500 hover:text-cyan-700"
                  }`}
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social quick links */}
            <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-5 text-xs font-mono text-slate-400">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`transition-colors flex items-center gap-1.5 ${darkMode ? "hover:text-cyan-300" : "hover:text-cyan-700"
                  }`}
              >
                <span>LinkedIn</span>
                <span className="text-cyan-400">↗</span>
              </a>
              <span className="text-slate-600 hidden xs:inline">|</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className={`transition-colors flex items-center gap-1.5 ${darkMode ? "hover:text-cyan-300" : "hover:text-cyan-700"
                  }`}
              >
                <span>GitHub</span>
                <span className="text-cyan-400">↗</span>
              </a>
              <span className="text-slate-600 hidden xs:inline">|</span>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}`}
                target="_blank"
                rel="noreferrer"
                className={`transition-colors flex items-center gap-1.5 ${darkMode ? "hover:text-cyan-300" : "hover:text-cyan-700"
                  }`}
              >
                <span className="truncate max-w-[200px] sm:max-w-none">{PERSONAL_INFO.email}</span>
                <span className="text-cyan-400">↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image Circle with "Available to connect" badge (Image 1 Style!) */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            {/* Ambient Cyan Radial Glow */}
            <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative">
              {/* Profile Picture in Circle Shape */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border-[5px] border-white/90 border-t-cyan-400 border-r-cyan-400 shadow-[0_0_50px_rgba(0,210,239,0.5)] overflow-hidden bg-gradient-to-br from-[#060b14] via-[#03070d] to-[#081220] group transition-all duration-500 hover:shadow-[0_0_70px_rgba(0,210,239,0.75)]">
                {/* Shimmer skeleton shown while image loads */}
                {!imgLoaded && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#09111c] via-[#0f1f30] to-[#09111c] animate-pulse" />
                )}
                <Image
                  src="/images/profile.jpg"
                  alt="Kasuni Makalanda"
                  width={400}
                  height={400}
                  priority
                  onLoad={() => setImgLoaded(true)}
                  className={`w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
                />
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400/40 pointer-events-none" />
              </div>

              {/* "Available for new opportunities" Badge */}
              <div
                className={`absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 px-4 py-2 rounded-2xl flex items-center gap-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.8)] border transition-all whitespace-nowrap z-20 ${darkMode
                  ? "bg-[#09111c] border-slate-700/80 text-white"
                  : "bg-white border-slate-300 text-slate-900"
                  }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs sm:text-sm font-medium tracking-wide">
                  Available for new opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
