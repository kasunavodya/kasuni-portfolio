"use client";

import React, { useState, useEffect } from "react";

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({ darkMode, onToggleTheme }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  // Scroll spy to activate section header link dynamically based on scroll position
  useEffect(() => {
    const sectionIds = ["home", "skills", "experience", "projects", "contact"];

    const handleScroll = () => {
      // If user reaches the bottom of the page, activate contact section
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 70
      ) {
        setActiveSection("contact");
        return;
      }

      const scrollPosition = window.scrollY + 180; // offset for fixed header
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            return;
          }
        }
      }
      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3.5 sm:py-4 ${
        darkMode
          ? "bg-[#03070d]/90 backdrop-blur-md border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* KM Logo - Kasuni Makalanda */}
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 sm:gap-3 group transition-all"
          >
            <div
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center font-mono font-extrabold text-xs sm:text-sm transition-all shrink-0 ${
                darkMode
                  ? "border-cyan-400 bg-black/60 text-cyan-300 shadow-[0_0_15px_rgba(0,210,239,0.4)] group-hover:shadow-[0_0_22px_rgba(0,210,239,0.7)]"
                  : "border-cyan-600 bg-cyan-50 text-cyan-700 shadow-sm"
              }`}
            >
              KM
            </div>
            <span
              className={`font-bold text-sm sm:text-base tracking-wide transition-colors truncate max-w-[150px] xs:max-w-none ${
                darkMode
                  ? "text-white group-hover:text-cyan-300"
                  : "text-slate-900 group-hover:text-cyan-600"
              }`}
            >
              Kasuni Makalanda
            </span>
          </a>

          {/* Center Header Links: Home, Skills, Experience, Projects, Contact with Active Glow */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative py-1 text-sm transition-all duration-200 group ${
                    isActive
                      ? darkMode
                        ? "text-cyan-300 font-bold drop-shadow-[0_0_8px_rgba(0,210,239,0.7)]"
                        : "text-cyan-600 font-bold"
                      : darkMode
                      ? "text-slate-300 hover:text-cyan-300 font-medium"
                      : "text-slate-600 hover:text-cyan-600 font-medium"
                  }`}
                >
                  {link.label}
                  {/* Glowing Bottom Line for Active Section */}
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? darkMode
                          ? "bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 shadow-[0_0_8px_rgba(0,210,239,0.9)] opacity-100 scale-x-100"
                          : "bg-cyan-600 opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-75 bg-cyan-400"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right Corner: Light / Dark Mode Toggle + Mobile Menu Trigger */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={onToggleTheme}
              aria-label="Toggle light/dark mode"
              className={`p-2 sm:p-2.5 rounded-full border transition-all flex items-center justify-center cursor-pointer ${
                darkMode
                  ? "bg-[#09111c] border-cyan-500/40 text-cyan-300 hover:bg-cyan-950/60 hover:border-cyan-300 shadow-[0_0_12px_rgba(0,210,239,0.3)]"
                  : "bg-slate-100 border-slate-300 text-amber-600 hover:bg-slate-200 shadow-sm"
              }`}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg border focus:outline-none cursor-pointer transition-colors ${
                darkMode
                  ? "text-slate-300 hover:text-cyan-300 border-slate-800 bg-[#09111c]"
                  : "text-slate-700 hover:text-cyan-600 border-slate-200 bg-slate-50"
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Active Section Highlights */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden mt-3 p-3 rounded-2xl border backdrop-blur-xl space-y-1.5 shadow-2xl transition-all duration-200 ${
              darkMode
                ? "bg-[#09111c]/95 border-cyan-500/40"
                : "bg-white/95 border-slate-200"
            }`}
          >
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 text-sm rounded-xl transition-all ${
                    isActive
                      ? darkMode
                        ? "bg-cyan-500/20 text-cyan-300 font-bold border-l-4 border-cyan-400 shadow-[0_0_12px_rgba(0,210,239,0.15)]"
                        : "bg-cyan-50 text-cyan-800 font-bold border-l-4 border-cyan-600"
                      : darkMode
                      ? "text-slate-200 hover:text-cyan-300 hover:bg-slate-800/50 font-medium"
                      : "text-slate-700 hover:text-cyan-700 hover:bg-slate-100 font-medium"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  )}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
