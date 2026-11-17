"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

interface ProjectsBookProps {
  darkMode: boolean;
}

interface ProjectChapter {
  id: number;
  num: string;
  title: string;
  company: string;
  period: string;
  image: string;
  imageAlt: string;
  about: string;
  contribution: string;
  featureLabel: string;
  features: string[];
  techStackLabel?: string;
  techStack: string[];
  toolsLabel?: string;
  tools?: string[];
  extraLabel?: string;
  extraValue?: string;
}

const PROJECTS: ProjectChapter[] = [
  {
    id: 1,
    num: "01",
    title: "All-in-One Hospitality Platform",
    company: "Happy Chimps",
    period: "2023 – 2026",
    image: "/images/projects/project-1.png",
    imageAlt: "Happy Chimps All-in-One POS & Restaurant OS",
    about:
      "An all-in-one platform that brings restaurant management, ordering, payments and business operations together.",
    contribution:
      "Contributed to developing the Web App and Control Hub, building features and responsive interfaces for hospitality businesses.",
    featureLabel: "Key Features",
    features: [
      "POS",
      "Digital Menu",
      "Ordering",
      "Reservations",
      "Payments",
      "Loyalty",
      "Inventory",
      "Reporting",
    ],
    techStackLabel: "Tech Stack",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    toolsLabel: "Tools",
    tools: ["Docker", "GitHub", "Bitbucket", "Trello", "Cursor"],
  },
  {
    id: 2,
    num: "02",
    title: "Client & Restaurant Web Platforms",
    company: "Happy Chimps · Told Media",
    period: "2023 – 2026",
    image: "/images/projects/project-2.png",
    imageAlt: "Client & Restaurant Web Platforms with WordPress and Google Antigravity",
    about:
      "Websites and digital solutions developed for businesses, restaurants, and cafés in the UK and Sri Lanka based on tailored client requirements.",
    contribution:
      "Developed and customized responsive websites using WordPress and Google Antigravity, crafting clean layouts, menus, services, and content management.",
    featureLabel: "Focus Areas",
    features: [
      "Client Websites",
      "Restaurant & Café Sites",
      "Digital Menus",
      "Custom Themes",
      "Responsive Layouts",
    ],
    techStackLabel: "Tech & Tools",
    techStack: ["WordPress", "PHP", "Google Antigravity", "JavaScript", "HTML/CSS"],
  },
  {
    id: 3,
    num: "03",
    title: "Quore – Quotes Mobile Application",
    company: "SLIIT",
    period: "Academic Group Project",
    image: "/images/projects/project-quore.png",
    imageAlt: "Quore – Daily Inspiration Quotes Mobile Application",
    about:
      "A mobile application developed using Flutter and Firebase that allows users to explore, add and manage inspirational quotes from different people and categories.",
    contribution:
      "Designed and developed a mobile application with features for browsing, adding and managing quotes, including category and image support.",
    featureLabel: "Key Features",
    features: [
      "Browse Quotes",
      "Add Quotes",
      "Manage Quotes",
      "Quotes by People",
      "Personal Quotes",
      "Quote Categories",
      "Quote Images",
    ],
    techStackLabel: "Tech Stack",
    techStack: ["Flutter", "Dart", "Firebase"],
  },
  {
    id: 4,
    num: "04",
    title: "Android E-Learning Application",
    company: "SLIIT",
    period: "Academic Group Project",
    image: "/images/projects/project-4.png",
    imageAlt: "Hogwarts International College E-Learning Application",
    about:
      "An Android application designed to support online learning and remote college management for Hogwarts International College.",
    contribution:
      "Worked with the development team to implement application functionality for students, teachers and administrators.",
    featureLabel: "Key Features",
    features: [
      "Student Login",
      "Learning Content",
      "Remote Learning",
      "Teacher/Admin Access",
    ],
    techStackLabel: "Tech Stack",
    techStack: ["Java", "Android"],
    toolsLabel: "Tools",
    tools: ["Android Studio", "Gradle", "GitHub"],
  },
  {
    id: 5,
    num: "05",
    title: "UI Builder – Automatic Code Generation",
    company: "SLIIT · Final Year Research",
    period: "2023 · Group Project",
    image: "/images/projects/project-5.png",
    imageAlt: "UI Builder – Automatic Code Generation from hand-drawn sketches",
    about:
      "A tool that converts hand-drawn UI sketches into application code for web, mobile and backend development.",
    contribution:
      "Focused on developing the Web Frontend Code Generation component, generating frontend code based on selected UI templates and user requirements while supporting different technologies and coding standards.", featureLabel: "Key Features",
    features: [
      "Sketch Recognition",
      "UI Detection",
      "Web Code Generation",
      "Mobile Code Gen",
      "Backend Gen",
    ],
    techStackLabel: "Research Focus",
    techStack: ["Efficient Frontend Code Generation"],
    extraLabel: "Publication",
    extraValue: "Presented at SLAAS Annual Sessions 2023.",
  },
];

export default function ProjectsBook({ darkMode }: ProjectsBookProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isNavigatingRef = useRef(false);
  const navTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 0 = Cover, 1..5 = Chapters 1..5, 6 = Epilogue / Summary
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [mobileTab, setMobileTab] = useState<"visual" | "details">("visual");
  const TOTAL_STOPS = 7;

  // Scroll tracking: calculate page smoothly from container scroll without intermediate jitter
  useEffect(() => {
    const handleScroll = () => {
      if (isNavigatingRef.current) return;

      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();
      const scrollableDistance = wrapper.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) return;

      const scrolledPastTop = -rect.top;

      if (scrolledPastTop <= 0) {
        setCurrentPage(0);
        return;
      }

      if (scrolledPastTop >= scrollableDistance) {
        setCurrentPage(TOTAL_STOPS - 1);
        return;
      }

      const progress = scrolledPastTop / scrollableDistance;
      const pageIndex = Math.min(
        TOTAL_STOPS - 1,
        Math.floor(progress * TOTAL_STOPS)
      );

      setCurrentPage(pageIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [TOTAL_STOPS]);

  // Jump directly to specific page with zero flicker
  const goToPage = useCallback(
    (targetPage: number) => {
      const clamped = Math.max(0, Math.min(TOTAL_STOPS - 1, targetPage));

      setCurrentPage(clamped);

      isNavigatingRef.current = true;
      if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
      navTimeoutRef.current = setTimeout(() => {
        isNavigatingRef.current = false;
      }, 550);

      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const scrollableDistance = wrapper.offsetHeight - window.innerHeight;
      if (scrollableDistance <= 0) return;

      const progress = (clamped + 0.35) / TOTAL_STOPS;
      const targetScrollY =
        wrapper.getBoundingClientRect().top +
        window.scrollY +
        scrollableDistance * progress;

      window.scrollTo({
        top: targetScrollY,
        behavior: "smooth",
      });
    },
    [TOTAL_STOPS]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const rect = wrapper.getBoundingClientRect();
      const isInView =
        rect.top <= 100 && rect.bottom >= window.innerHeight * 0.5;

      if (!isInView) return;

      if (e.key === "ArrowRight") {
        e.preventDefault();
        goToPage(currentPage + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPage(currentPage - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage, goToPage]);

  // Current project when between 1 and 5
  const currentProject =
    currentPage >= 1 && currentPage <= 5
      ? PROJECTS[currentPage - 1]
      : PROJECTS[0];

  return (
    <div
      id="projects"
      ref={wrapperRef}
      style={{ height: "350vh" }}
      className="relative"
    >
      {/* Sticky Centered Viewport */}
      <div
        className={`sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden transition-colors ${darkMode ? "bg-[#03070d] bg-feel-grid" : "bg-slate-100"
          }`}
      >
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          {/* Section Header */}
          <div className="text-center mb-4">
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono mb-2 ${darkMode
                ? "bg-[#09111c] border border-cyan-500/40 text-cyan-300 shadow-[0_0_15px_rgba(0,210,239,0.2)]"
                : "bg-white border border-slate-200 text-cyan-800"
                }`}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Interactive Project Book
            </div>
            <h2
              className={`text-2xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? "text-white" : "text-slate-900"
                }`}
            >
              Featured{" "}
              <span className="text-cyan-400 text-cyan-glow">Projects</span>
            </h2>
            <p
              className={`mt-1 text-xs font-light ${darkMode ? "text-slate-400" : "text-slate-600"
                }`}
            >
              Scroll through the book or select a chapter below to turn pages
            </p>
          </div>

          {/* Book Stage - STRICT FIXED HEIGHT (510px) */}
          <div
            className="w-full flex items-center justify-center"
            style={{ height: "510px" }}
          >
            {/* ── STATE 1: BOOK COVER (Page 0) ── */}
            {currentPage === 0 && (
              <div
                onClick={() => goToPage(1)}
                className="cursor-pointer group rounded-2xl border border-cyan-500/35 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:border-cyan-400/60 shadow-[0_25px_65px_rgba(0,0,0,0.9)] relative"
                style={{
                  width: "clamp(290px, 88vw, 380px)",
                  height: "510px",
                  backgroundColor: darkMode ? "#070e18" : "#0d2b24",
                  boxShadow:
                    "inset 8px 0 24px rgba(0,0,0,0.8), 0 25px 65px rgba(0,0,0,0.9), 0 0 35px rgba(0,210,239,0.15)",
                }}
              >
                {/* Decorative border lines */}
                <div className="absolute inset-4 rounded-xl border border-cyan-400/20 pointer-events-none" />
                <div className="absolute inset-5 rounded-lg border border-white/10 pointer-events-none" />

                {/* Spine shadow */}
                <div className="absolute left-0 top-0 bottom-0 w-7 bg-gradient-to-r from-black/85 via-black/40 to-transparent pointer-events-none z-20" />

                {/* KM MONOGRAM WATERMARK BACKGROUND */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
                  <div className="relative flex items-center justify-center">
                    <div className="w-64 h-64 rounded-full border border-cyan-400/10 flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full border border-cyan-400/15 flex items-center justify-center">
                        <span className="font-mono font-black text-9xl text-cyan-400/[0.08] tracking-tighter">
                          KM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Central Emblem & Title */}
                <div className="text-center space-y-3.5 z-10 px-12 sm:px-12 my-auto">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-cyan-400/80 mb-1.5">
                      A LITTLE BOOK OF
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                      My Journey &amp; Projects
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm font-light text-slate-300 leading-relaxed max-w-xs mx-auto">
                    Some things I&apos;ve built, learned and enjoyed along the way.
                  </p>

                  <div className="h-px w-16 mx-auto bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-mono font-bold bg-black/60 text-cyan-300 border border-cyan-400/40 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,210,239,0.2)]">
                      Open Project Book →
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* ── STATE 2: OPEN BOOK SPREAD (Chapters 1 to 5) ── */}
            {currentPage >= 1 && currentPage <= 5 && (
              <div
                className={`w-full rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.85)] border overflow-hidden transition-all duration-300 ${darkMode
                  ? "bg-[#08101a] border-cyan-500/30"
                  : "bg-white border-slate-300"
                  }`}
                style={{ maxWidth: "940px", height: "510px" }}
              >
                {/* ── MOBILE VIEW: Dual-Tab Switcher (Visual vs Details) ── */}
                <div className="sm:hidden flex flex-col h-full p-4 justify-between">
                  {/* Mobile Top Header & Chapter Switcher */}
                  <div>
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[10px] font-mono">
                      <span className="text-cyan-400 font-bold uppercase tracking-wider">
                        Chapter {currentProject.num} / 05
                      </span>
                      {/* Chapter Quick Pills */}
                      <div className="flex items-center gap-1">
                        {PROJECTS.map((p, idx) => {
                          const pNum = idx + 1;
                          const isSel = currentPage === pNum;
                          return (
                            <button
                              key={p.id}
                              onClick={() => goToPage(pNum)}
                              className={`w-5 h-5 rounded flex items-center justify-center text-[9px] font-mono font-bold transition-all ${isSel
                                ? "bg-cyan-400 text-slate-950"
                                : "bg-slate-800 text-slate-400 hover:text-cyan-300"
                                }`}
                            >
                              {p.num}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* View Switcher Tabs */}
                    <div className="grid grid-cols-2 gap-1.5 mt-2.5 p-1 rounded-lg bg-[#050a12] border border-cyan-500/20">
                      <button
                        onClick={() => setMobileTab("visual")}
                        className={`py-1 rounded text-center text-[10px] font-mono font-bold transition-all ${mobileTab === "visual"
                          ? "bg-cyan-400 text-slate-950 shadow-sm"
                          : "text-slate-400 hover:text-cyan-300"
                          }`}
                      >
                        🖼️ Project Visual
                      </button>
                      <button
                        onClick={() => setMobileTab("details")}
                        className={`py-1 rounded text-center text-[10px] font-mono font-bold transition-all ${mobileTab === "details"
                          ? "bg-cyan-400 text-slate-950 shadow-sm"
                          : "text-slate-400 hover:text-cyan-300"
                          }`}
                      >
                        📋 Specifications
                      </button>
                    </div>
                  </div>

                  {/* Mobile Body Content based on active tab */}
                  <div className="flex-1 overflow-y-auto py-2.5 space-y-3">
                    {mobileTab === "visual" ? (
                      <div className="space-y-2.5">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-cyan-400 font-bold font-mono text-sm">
                              {currentProject.num}.
                            </span>
                            <h3 className="font-extrabold text-sm text-white">
                              {currentProject.title}
                            </h3>
                          </div>
                          <p className="text-[10px] font-mono text-slate-400 mt-0.5">
                            <span className="text-cyan-400 font-semibold">
                              {currentProject.company}
                            </span>{" "}
                            · {currentProject.period}
                          </p>
                        </div>

                        {/* Large Image */}
                        <div className="relative w-full h-[220px] rounded-xl overflow-hidden border border-cyan-500/30 bg-black/60 shadow-md">
                          <Image
                            src={currentProject.image}
                            alt={currentProject.imageAlt}
                            fill
                            sizes="100vw"
                            className="object-cover object-top"
                            priority
                          />
                        </div>

                        <p className="text-xs text-slate-300 font-light leading-relaxed">
                          {currentProject.about}
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-3 text-left">
                        <div>
                          <span className="text-[9px] font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-0.5">
                            About
                          </span>
                          <p className="text-xs text-slate-300 leading-relaxed font-light">
                            {currentProject.about}
                          </p>
                        </div>

                        <div>
                          <span className="text-[9px] font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-0.5">
                            My Contribution
                          </span>
                          <p className="text-xs text-slate-300 leading-relaxed font-light">
                            {currentProject.contribution}
                          </p>
                        </div>

                        <div>
                          <span className="text-[9px] font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-1">
                            {currentProject.featureLabel}
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {currentProject.features.map((f) => (
                              <span
                                key={f}
                                className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#060a12] border border-cyan-500/20 text-slate-300"
                              >
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <span className="text-[9px] font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-1">
                            {currentProject.techStackLabel || "Tech Stack"}
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {currentProject.techStack.map((t) => (
                              <span
                                key={t}
                                className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 font-semibold"
                              >
                                {t}
                              </span>
                            ))}
                            {currentProject.tools?.map((t) => (
                              <span
                                key={t}
                                className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-400"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                          {currentProject.extraValue && (
                            <p className="text-[9px] font-mono text-cyan-300/80 mt-1.5">
                              {currentProject.extraLabel}: {currentProject.extraValue}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Mobile Footer */}
                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono">
                    <a
                      href="#contact"
                      className="text-cyan-400 font-bold hover:underline"
                    >
                      Discuss project →
                    </a>
                  </div>
                </div>

                {/* ── DESKTOP & TABLET VIEW: FULL 2-PAGE SPREAD ── */}
                <div className="hidden sm:grid sm:grid-cols-2 relative h-full">
                  {/* Center binding crease shadow */}
                  <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-5 bg-gradient-to-r from-black/45 via-black/10 to-transparent pointer-events-none z-20" />

                  {/* ── LEFT PAGE: Visual, Number, Title & Large Image ── */}
                  <div
                    className={`p-6 border-r flex flex-col justify-between h-full relative ${darkMode
                      ? "bg-[#060c15] border-slate-800/80"
                      : "bg-[#faf8f2] border-slate-200"
                      }`}
                  >
                    <div>
                      {/* Left Folio Header */}
                      <div
                        className={`flex items-center justify-between text-[10px] font-mono uppercase tracking-wider border-b pb-2 ${darkMode
                          ? "text-slate-500 border-slate-800"
                          : "text-slate-400 border-slate-200"
                          }`}
                      >
                        <span>KASUNI MAKALANDA · PROJECTS</span>
                        <span>p. {currentProject.id * 2}</span>
                      </div>

                      {/* Project Header Info */}
                      <div className="pt-3">
                        <div className="flex items-baseline gap-2">
                          <span className="text-cyan-400 font-mono font-black text-lg">
                            {currentProject.num}.
                          </span>
                          <h3
                            className={`text-lg lg:text-xl font-extrabold tracking-tight leading-tight ${darkMode ? "text-white" : "text-slate-900"
                              }`}
                          >
                            {currentProject.title}
                          </h3>
                        </div>

                        <p className="text-xs font-mono text-cyan-300/80 mt-1">
                          <span className="font-semibold">
                            {currentProject.company}
                          </span>
                          <span className="text-slate-600"> · </span>
                          <span
                            className={
                              darkMode ? "text-slate-400" : "text-slate-600"
                            }
                          >
                            {currentProject.period}
                          </span>
                        </p>
                      </div>

                      {/* Large Project Image with High-Definition Frame */}
                      <div className="relative mt-3.5 w-full h-[270px] lg:h-[285px] rounded-xl overflow-hidden border border-cyan-500/25 bg-[#03060c] shadow-[0_10px_30px_rgba(0,0,0,0.7)] group">
                        <Image
                          src={currentProject.image}
                          alt={currentProject.imageAlt}
                          fill
                          sizes="(max-width: 640px) 100vw, 460px"
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>

                    {/* Left Bottom Folio */}
                    <div
                      className={`pt-2 border-t flex items-center justify-between text-[10px] font-mono ${darkMode
                        ? "border-slate-800 text-slate-500"
                        : "border-slate-200 text-slate-400"
                        }`}
                    >
                      <span className="text-cyan-400/80 font-bold">
                        {currentProject.id} / 5
                      </span>
                    </div>
                  </div>

                  {/* ── RIGHT PAGE: Structured Details (About, Contribution, Features, Tech) ── */}
                  <div
                    className={`p-6 flex flex-col justify-between h-full relative ${darkMode ? "bg-[#08101a]" : "bg-[#fffef9]"
                      }`}
                  >
                    <div>
                      {/* Right Folio Header */}
                      <div
                        className={`flex items-center justify-between text-[10px] font-mono uppercase tracking-wider border-b pb-2 ${darkMode
                          ? "text-cyan-500 border-slate-800"
                          : "text-cyan-700 border-slate-200"
                          }`}
                      >
                        <span>CHAPTER {currentProject.num} SPECIFICATIONS</span>
                        <span>p. {currentProject.id * 2 + 1}</span>
                      </div>

                      {/* Structured Content Sections - Clean, Easy to Read (70-100 words) */}
                      <div className="pt-3.5 space-y-3.5 text-left">
                        {/* 1. About */}
                        <div>
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold">
                              About
                            </span>
                          </div>
                          <p
                            className={`text-xs leading-relaxed font-light ${darkMode ? "text-slate-300" : "text-slate-700"
                              }`}
                          >
                            {currentProject.about}
                          </p>
                        </div>

                        {/* 2. My Contribution */}
                        <div>
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold">
                              Contribution
                            </span>
                          </div>
                          <p
                            className={`text-xs leading-relaxed font-light ${darkMode ? "text-slate-300" : "text-slate-700"
                              }`}
                          >
                            {currentProject.contribution}
                          </p>
                        </div>

                        {/* 3. Key Features / Focus Areas */}
                        <div>
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold">
                              {currentProject.featureLabel}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {currentProject.features.map((feature) => (
                              <span
                                key={feature}
                                className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-colors ${darkMode
                                  ? "bg-[#040810] border-cyan-500/20 text-slate-300"
                                  : "bg-white border-slate-300 text-slate-800"
                                  }`}
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* 4. Tech Stack & Tools */}
                        <div>
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold">
                              {currentProject.techStackLabel || "Tech Stack"}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {currentProject.techStack.map((tech) => (
                              <span
                                key={tech}
                                className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${darkMode
                                  ? "bg-cyan-950/50 border-cyan-400/40 text-cyan-300"
                                  : "bg-cyan-50 border-cyan-300 text-cyan-800"
                                  }`}
                              >
                                {tech}
                              </span>
                            ))}
                            {currentProject.tools?.map((tool) => (
                              <span
                                key={tool}
                                className={`text-[10px] font-mono px-2 py-0.5 rounded border ${darkMode
                                  ? "bg-[#060a12] border-slate-700/60 text-slate-400"
                                  : "bg-slate-100 border-slate-300 text-slate-700"
                                  }`}
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                          {currentProject.extraValue && (
                            <p className="text-[10px] font-mono text-cyan-300/80 mt-1.5">
                              <span className="font-bold">
                                {currentProject.extraLabel}:
                              </span>{" "}
                              {currentProject.extraValue}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── STATE 3: EPILOGUE / BACK COVER (Page 6) - MATCHING FRONT COVER SIZE ── */}
            {currentPage === 6 && (
              <div
                className="group rounded-2xl border border-cyan-500/35 flex flex-col justify-between overflow-hidden transition-all duration-300 shadow-[0_25px_65px_rgba(0,0,0,0.9)] relative"
                style={{
                  width: "clamp(290px, 88vw, 380px)",
                  height: "510px",
                  backgroundColor: darkMode ? "#070e18" : "#0d2b24",
                  boxShadow:
                    "inset -8px 0 24px rgba(0,0,0,0.8), 0 25px 65px rgba(0,0,0,0.9), 0 0 35px rgba(0,210,239,0.15)",
                }}
              >
                {/* Decorative border lines */}
                <div className="absolute inset-4 rounded-xl border border-cyan-400/20 pointer-events-none" />
                <div className="absolute inset-5 rounded-lg border border-white/10 pointer-events-none" />

                {/* Back Spine shadow on Right */}
                <div className="absolute right-0 top-0 bottom-0 w-7 bg-gradient-to-l from-black/85 via-black/40 to-transparent pointer-events-none z-20" />

                {/* KM MONOGRAM WATERMARK BACKGROUND */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
                  <div className="relative flex items-center justify-center">
                    <div className="w-64 h-64 rounded-full border border-cyan-400/10 flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full border border-cyan-400/15 flex items-center justify-center">
                        <span className="font-mono font-black text-9xl text-cyan-400/[0.08] tracking-tighter">
                          KM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Top Header */}

                {/* Central Content */}
                <div className="text-center px-12 z-10 space-y-3.5 my-auto">
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                    A Little About Me
                  </h3>

                  {/* Body Paragraphs */}
                  <div className="space-y-2 text-[11px] sm:text-xs leading-relaxed text-slate-300 font-light px-1">
                    <p>
                      I enjoy turning ideas into working applications and exploring new technologies. Over the years, I&apos;ve worked on different web and mobile projects, collaborated with teams and learned something new with every experience.
                    </p>
                    <p className="text-cyan-300/90 font-normal">
                      Now, I&apos;m continuing to learn, explore and build new things in Sweden.
                    </p>
                  </div>

                  {/* Key Metric Badges */}
                  <div className="grid grid-cols-2 gap-2 pt-0.5">
                    <div className="p-2 rounded-xl border border-cyan-500/25 bg-[#050a12]/80 text-center">
                      <div className="text-sm sm:text-base font-black text-cyan-400 font-mono">
                        3+ Years
                      </div>
                      <div className="text-[9px] font-mono uppercase tracking-wider text-slate-400 mt-0.5 truncate">
                        Experience
                      </div>
                    </div>
                    <div className="p-2 rounded-xl border border-cyan-500/25 bg-[#050a12]/80 text-center">
                      <div className="text-sm sm:text-base font-black text-cyan-400 font-mono">
                        20+
                      </div>
                      <div className="text-[9px] font-mono uppercase tracking-wider text-slate-400 mt-0.5 truncate">
                        Technologies &amp; Tools
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-1 flex flex-col gap-2">
                    <a
                      href="#contact"
                      className="w-full py-2.5 rounded-full text-xs font-mono font-bold bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(0,210,239,0.4)] text-center flex items-center justify-center gap-1.5"
                    >
                      <span>Let&apos;s Connect</span>
                      <span>→</span>
                    </a>

                    <button
                      onClick={() => goToPage(0)}
                      className="w-full py-2 rounded-full text-[11px] font-mono border border-slate-700/80 text-slate-300 hover:border-cyan-400 hover:text-cyan-300 transition-all cursor-pointer bg-[#050a12]/60"
                    >
                      Back to Cover ↺
                    </button>
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* ── BOTTOM DEDICATED LEFT & RIGHT NAVIGATION BUTTONS ── */}
          <div className="mt-5 flex items-center justify-center gap-4 w-full">
            {/* Left Button */}
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-mono font-bold transition-all ${currentPage === 0
                ? "opacity-25 cursor-not-allowed border-slate-800 text-slate-600"
                : darkMode
                  ? "bg-[#09111c] border-cyan-500/40 text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 shadow-[0_0_15px_rgba(0,210,239,0.3)] cursor-pointer"
                  : "bg-white border-slate-300 text-slate-800 hover:border-cyan-500 hover:text-cyan-700 shadow-sm cursor-pointer"
                }`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>Prev</span>
            </button>

            {/* Pagination Dots */}
            <div
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border backdrop-blur-md ${darkMode
                ? "bg-[#09111c]/80 border-cyan-500/30"
                : "bg-white border-slate-200 shadow-sm"
                }`}
            >
              {Array.from({ length: TOTAL_STOPS }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${currentPage === i
                    ? "w-6 h-1.5 bg-cyan-400 shadow-[0_0_8px_rgba(0,210,239,0.9)]"
                    : darkMode
                      ? "w-1.5 h-1.5 bg-slate-700 hover:bg-slate-500"
                      : "w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                  aria-label={
                    i === 0
                      ? "Book Cover"
                      : i === 6
                        ? "Epilogue"
                        : `Chapter ${i}`
                  }
                />
              ))}
            </div>

            {/* Right Button */}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === TOTAL_STOPS - 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-mono font-bold transition-all ${currentPage === TOTAL_STOPS - 1
                ? "opacity-25 cursor-not-allowed border-slate-800 text-slate-600"
                : darkMode
                  ? "bg-[#09111c] border-cyan-500/40 text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 shadow-[0_0_15px_rgba(0,210,239,0.3)] cursor-pointer"
                  : "bg-white border-slate-300 text-slate-800 hover:border-cyan-500 hover:text-cyan-700 shadow-sm cursor-pointer"
                }`}
            >
              <span>Next</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
