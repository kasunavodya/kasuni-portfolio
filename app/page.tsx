"use client";

import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechnicalSkills from "../components/TechnicalSkills";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsBook from "../components/ProjectsBook";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import PageLoader from "../components/PageLoader";
import BackToTop from "../components/BackToTop";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  // Sync with document element class for full tailwind support
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleLoaderDone = useCallback(() => setLoading(false), []);

  return (
    <>
      {/* Full-page loader — shows for ~2s on first load */}
      {loading && <PageLoader onDone={handleLoaderDone} />}

      <div
        className={`min-h-screen flex flex-col transition-colors duration-200 ${
          darkMode
            ? "bg-[#03070d] text-white selection:bg-cyan-500/30 selection:text-cyan-200"
            : "bg-slate-50 text-slate-900 selection:bg-cyan-200 selection:text-cyan-900"
        }`}
      >
        {/* Header / Navbar */}
        <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode(!darkMode)} />

        {/* Main Sections */}
        <main className="flex-1">
          <Hero darkMode={darkMode} />
          <TechnicalSkills darkMode={darkMode} />
          <ExperienceSection darkMode={darkMode} />
          <ProjectsBook darkMode={darkMode} />
          <ContactSection darkMode={darkMode} />
        </main>

        <Footer darkMode={darkMode} />

        {/* Floating Back to Top Button */}
        <BackToTop darkMode={darkMode} />
      </div>
    </>
  );
}
