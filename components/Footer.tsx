"use client";

import React from "react";

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`border-t py-12 relative overflow-hidden transition-colors ${darkMode
          ? "bg-[#03070d] border-cyan-500/25 bg-feel-grid"
          : "bg-white border-slate-200"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        {/* Name */}
        <h3
          className={`text-2xl font-extrabold tracking-tight ${darkMode ? "text-white" : "text-slate-900"
            }`}
        >
          Kasuni Makalanda
        </h3>

        {/* Tech Stack Subtitle (Exact string requested by user!) */}
        <p
          className={`text-xs sm:text-sm font-mono tracking-wide max-w-3xl mx-auto leading-relaxed ${darkMode ? "text-cyan-400" : "text-cyan-700 font-semibold"
            }`}
        >
          Software Engineer | Full-Stack Developer
        </p>

        {/* Tagline */}
        <p
          className={`text-sm font-light max-w-md mx-auto ${darkMode ? "text-slate-400" : "text-slate-600"}`}
        >
          Building meaningful digital experiences through technology.
        </p>

        {/* Copyright */}
        <p className="text-xs text-slate-500 font-mono pt-2">
          © 2026 Kasuni Makalanda. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
