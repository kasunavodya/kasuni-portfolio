"use client";

import React, { useState, useEffect } from "react";

interface BackToTopProps {
  darkMode: boolean;
}

export default function BackToTop({ darkMode }: BackToTopProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down more than 280px
      if (window.scrollY > 280) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 p-2.5 sm:p-3 rounded-full border shadow-lg backdrop-blur-md transition-all duration-300 flex items-center justify-center cursor-pointer group ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      } ${
        darkMode
          ? "bg-[#09111c]/90 border-cyan-500/40 text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 hover:border-cyan-400 shadow-[0_0_20px_rgba(0,210,239,0.35)]"
          : "bg-white/90 border-slate-300 text-slate-700 hover:bg-cyan-50 hover:text-cyan-700 hover:border-cyan-400 shadow-md"
      }`}
    >
      <svg
        className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}
