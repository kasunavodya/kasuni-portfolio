"use client";

import React, { useState } from "react";

interface ExperienceSectionProps {
  darkMode: boolean;
}

export default function ExperienceSection({ darkMode }: ExperienceSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  const companies = ["ALL", "HAPPY CHIMPS", "TOLD MEDIA", "REACH IT RIGHT"];

  const simplifiedExperience = [
    {
      id: "hc-se",
      role: "Software Engineer",
      company: "Happy Chimps",
      location: "Sri Lanka",
      period: "August 2025 – September 2026",
      featured: true,
      type: "Full-Time",
      companyCategory: "Software & AI Solutions",
      overview:
        "Continued developing and improving Business Hub while maintaining company and client websites, contributing to AI-assisted development projects.",
      highlights: [
        "Enhanced and maintained Business Hub features for hospitality and retail businesses, improving platform functionality and user experience.",
        "Maintained and improved the company website using React and Next.js, focusing on responsive design, usability and SEO optimisation.",
        "Worked on Antigravity AI projects and contributed to AI-assisted development workflows.",
        "Maintained client websites using WordPress and modern frontend technologies.",
      ],
      technologies: ["Next.js", "React", "TypeScript", "Figma", "WordPress", "Antigravity", "SEO"],
    },
    {
      id: "hc-ase",
      role: "Associate Software Engineer",
      company: "Happy Chimps",
      location: "Sri Lanka",
      period: "November 2023 – August 2025",
      featured: false,
      type: "Full-Time",
      companyCategory: "Software & AI Solutions",
      overview:
        "Joined the development team and helped build the initial Business Hub platform for hospitality and retail businesses. Also worked on company and client websites.",
      highlights: [
        "Contributed to developing Business Hub, a SaaS platform for hospitality and retail businesses, as part of the development team.",
        "Developed and maintained the company website using React, Next.js and Tailwind CSS",
        "Built and maintained client websites using WordPress and Laravel.",
      ],
      technologies: ["Next.js", "React", "JavaScript", "WordPress", "Laravel"],
    },
    {
      id: "tm-ase",
      role: "Associate Software Engineer",
      company: "TOLD MEDIA",
      location: "Sri Lanka",
      period: "April 2023 – November 2023",
      featured: false,
      type: "Full-Time",
      companyCategory: "Digital Media & Web Agency",
      overview:
        "Developed web applications using the MERN stack and PHP. Maintained the company website and helped organise a corporate quiz event.",
      highlights: [
        "Developed web applications using MongoDB, Express, React, and Node.js.",
        "Built PHP backend services and maintained company WordPress website.",
        "Helped organise a corporate quiz event.",
      ],
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "PHP", "WordPress"],
    },
    {
      id: "rir-intern",
      role: "Software Engineer Intern",
      company: "REACH IT RIGHT (PVT) LTD",
      location: "Sri Lanka",
      period: "March 2021 – October 2021",
      featured: false,
      type: "Internship",
      companyCategory: "IT Services & Consultancy",
      overview:
        "Started my professional journey by developing web applications, managing website hosting and domains, and communicating with international clients.",
      highlights: [
        "Developed web applications using MERN stack and PHP.",
        "Managed GoDaddy website hosting, DNS records, and domain routing.",
        "Communicated with international clients to gather project requirements.",
      ],
      technologies: ["MERN Stack", "PHP", "GoDaddy", "Client Communication"],
    },
  ];

  const filtered =
    selectedFilter === "ALL"
      ? simplifiedExperience
      : simplifiedExperience.filter((item) =>
        item.company.toUpperCase().includes(selectedFilter.toUpperCase())
      );

  return (
    <section
      id="experience"
      className={`py-16 sm:py-24 relative transition-colors ${darkMode ? "bg-[#03070d] bg-feel-grid" : "bg-white"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono mb-3 ${darkMode
                ? "bg-[#09111c] border border-cyan-500/40 text-cyan-300 shadow-[0_0_15px_rgba(0,210,239,0.2)]"
                : "bg-slate-50 border border-slate-200 text-cyan-800"
                }`}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              Work Experience &amp; Track Record
            </div>
            <h2
              className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${darkMode ? "text-white" : "text-slate-900"
                }`}
            >
              Engineering Production <span className="text-cyan-400 text-cyan-glow">Impact</span>
            </h2>
            <p
              className={`mt-2 text-sm sm:text-base max-w-2xl font-light ${darkMode ? "text-slate-400" : "text-slate-600"
                }`}
            >
              From my first internship to professional software engineering, each role has helped me build stronger technical skills and deliver practical solutions.
            </p>
          </div>

          {/* Filter Pills */}
          <div
            className={`flex flex-wrap justify-center md:justify-start items-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl sm:rounded-full border backdrop-blur-md w-full md:w-auto ${darkMode ? "bg-[#09111c] border-cyan-500/30" : "bg-slate-100 border-slate-200"
              }`}
          >
            {companies.map((comp) => (
              <button
                key={comp}
                onClick={() => setSelectedFilter(comp)}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wide transition-all cursor-pointer ${selectedFilter === comp
                  ? "bg-cyan-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,210,239,0.5)]"
                  : darkMode
                    ? "text-slate-400 hover:text-cyan-300 hover:bg-slate-800/50"
                    : "text-slate-600 hover:text-cyan-700 hover:bg-white"
                  }`}
              >
                {comp}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-7 rounded-2xl border relative transition-all duration-300 ${darkMode
                ? item.featured
                  ? "border-cyan-400 shadow-[0_0_25px_rgba(0,210,239,0.2)] bg-gradient-to-br from-[#09111c] via-[#0b1626] to-[#09111c]"
                  : "border-cyan-500/25 bg-[#09111c] hover:border-cyan-400/60"
                : item.featured
                  ? "border-cyan-400 shadow-sm bg-cyan-50/40"
                  : "border-slate-200 bg-white hover:border-cyan-400"
                }`}
            >

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/50">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3
                      className={`text-lg sm:text-xl font-bold tracking-tight ${darkMode ? "text-white" : "text-slate-900"
                        }`}
                    >
                      {item.role}
                    </h3>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-mono border ${darkMode
                        ? "bg-cyan-950/80 text-cyan-300 border-cyan-500/30"
                        : "bg-cyan-50 text-cyan-800 border-cyan-200"
                        }`}
                    >
                      {item.type}
                    </span>
                  </div>

                  <p className="text-xs font-mono text-cyan-400 mt-0.5">
                    <span className="font-semibold">{item.company}</span>
                    <span className="text-slate-600"> · </span>
                    <span className="text-slate-400 font-sans">{item.location}</span>
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full border text-xs font-mono whitespace-nowrap self-start sm:self-auto ${darkMode
                    ? "bg-[#05080f] border-cyan-500/25 text-cyan-300"
                    : "bg-slate-50 border-slate-200 text-slate-700"
                    }`}
                >
                  {item.period}
                </span>
              </div>

              <p
                className={`mt-3 text-xs sm:text-sm leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"
                  }`}
              >
                {item.overview}
              </p>

              {/* Highlights List - Punchy & Simple */}
              <ul className="mt-3 space-y-1.5">
                {item.highlights.map((h, i) => (
                  <li key={i} className="text-xs flex items-start gap-2 text-slate-400">
                    <span className="text-cyan-400 font-bold">▹</span>
                    <span className={darkMode ? "text-slate-300" : "text-slate-700"}>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div className="mt-4 pt-3 border-t border-slate-800/50 flex flex-wrap items-center gap-1.5">
                {item.technologies.map((t) => (
                  <span
                    key={t}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono border transition-colors ${darkMode
                      ? "bg-[#060a12] text-cyan-300 border-cyan-500/20 hover:border-cyan-400/60 hover:bg-cyan-950/40"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:border-cyan-400/60"
                      }`}
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-400 opacity-70" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
