"use client";

import React, { useState, useRef, useEffect } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

export default function AntigravityConsole() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandLog[]>([
    {
      id: "init",
      command: "antigravity --init kasuni-dossier",
      output: (
        <div className="space-y-1">
          <p className="text-cyan-300 font-bold">
            [AGY-CORE v2.4] Initialized agent runtime for Kasuni Makalanda.
          </p>
          <p className="text-slate-400">
            System status: <span className="text-emerald-400">ONLINE</span> · Location: Göteborg, Sweden · Ready for queries.
          </p>
          <p className="text-slate-400 text-xs">
            Type <span className="text-cyan-300 font-mono">help</span> or click any quick command chip below to explore.
          </p>
        </div>
      ),
      timestamp: "19:40:01",
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const executeCommand = (cmdText: string) => {
    const raw = cmdText.trim();
    const cmd = raw.toLowerCase();

    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    let resultNode: React.ReactNode = null;

    if (cmd === "help") {
      resultNode = (
        <div className="space-y-1.5 text-xs font-mono">
          <p className="text-cyan-300 font-bold">Available Antigravity commands:</p>
          <p>
            <span className="text-cyan-400 font-semibold">whoami</span> - Identity, location & current research focus
          </p>
          <p>
            <span className="text-cyan-400 font-semibold">skills</span> - Complete technical stack & frameworks
          </p>
          <p>
            <span className="text-cyan-400 font-semibold">businesshub</span> - Deep-dive on Next.js hospitality platform
          </p>
          <p>
            <span className="text-cyan-400 font-semibold">antigravity</span> - AI agent work & prompt engineering at Happy Chimps
          </p>
          <p>
            <span className="text-cyan-400 font-semibold">education</span> - M.Sc. Gothenburg & B.Sc. SLIIT
          </p>
          <p>
            <span className="text-cyan-400 font-semibold">contact</span> - Direct email, phone & social coordinates
          </p>
          <p>
            <span className="text-cyan-400 font-semibold">clear</span> - Clear the terminal output
          </p>
        </div>
      );
    } else if (cmd.includes("whoami") || cmd.includes("summary")) {
      resultNode = (
        <div className="space-y-1 text-xs font-mono text-slate-300">
          <p className="text-cyan-300 font-bold">KASUNI NAVODYA HEGODA MAKALANDAGE</p>
          <p>• Role: Software Engineer & M.Sc. Student in Software Engineering & Management</p>
          <p>• Campus: University of Gothenburg, Gothenburg, Sweden</p>
          <p>• Experience: 3+ years full-stack (Next.js, React, Node.js, MERN, Antigravity AI)</p>
          <p>• Status: Open to Full-Stack, Frontend & SWE Opportunities in Sweden & Remote</p>
        </div>
      );
    } else if (cmd.includes("skills") || cmd.includes("stack")) {
      resultNode = (
        <div className="space-y-1.5 text-xs font-mono">
          <p className="text-cyan-300 font-bold">&gt; Technical Stack Matrix:</p>
          <p>
            <span className="text-cyan-400">Frontend:</span> Next.js, React, TypeScript, JavaScript (ES6+), Redux, Tailwind CSS
          </p>
          <p>
            <span className="text-cyan-400">Backend & DB:</span> Node.js, NestJS, PHP, Java, MongoDB, MySQL
          </p>
          <p>
            <span className="text-cyan-400">AI & Tooling:</span> Antigravity AI, Docker, Git, Figma, WordPress, GoDaddy Hosting
          </p>
          <p>
            <span className="text-cyan-400">Soft Skills:</span> Requirement Gathering, Empirical Testing, Time Management, Agile
          </p>
        </div>
      );
    } else if (cmd.includes("businesshub") || cmd.includes("project")) {
      resultNode = (
        <div className="space-y-1.5 text-xs font-mono">
          <p className="text-cyan-300 font-bold">&gt; Business Hub Platform (Happy Chimps):</p>
          <p className="text-slate-300">
            A mission-critical enterprise web application for hospitality, restaurant, and retail operations.
          </p>
          <p>• Core Architecture: Next.js + React + Redux + TypeScript + Tailwind CSS</p>
          <p>• Modules: Real-time orders, dynamic menu configuration, inventory monitoring, analytics</p>
          <p>• Design: Collaborated with UI/UX designers in Figma to build high-accessibility components</p>
        </div>
      );
    } else if (cmd.includes("antigravity") || cmd.includes("ai")) {
      resultNode = (
        <div className="space-y-1.5 text-xs font-mono">
          <p className="text-cyan-300 font-bold">&gt; Antigravity AI Initiatives (Happy Chimps):</p>
          <p className="text-slate-300">
            Kasuni worked on Antigravity AI projects, bridging intelligent agent workflows with modern full-stack systems.
          </p>
          <p>• Agentic workflows, context management, prompt engineering & tool integrations</p>
          <p>• Exploring next-generation developer tooling and autonomous assisting paradigms</p>
        </div>
      );
    } else if (cmd.includes("education") || cmd.includes("degrees")) {
      resultNode = (
        <div className="space-y-1.5 text-xs font-mono">
          <p className="text-cyan-300 font-bold">&gt; Academic Credentials:</p>
          <p className="text-white">1. M.Sc. in Software Engineering and Management</p>
          <p className="text-slate-400 pl-4">University of Gothenburg, Sweden (Sep 2026 – Present)</p>
          <p className="text-slate-400 pl-4">Focus: Empirical SE, Advanced Requirements, QA & Testing, Project Management</p>
          <p className="text-white mt-1">2. B.Sc. (Hons) in Software Engineering</p>
          <p className="text-slate-400 pl-4">SLIIT, Sri Lanka (GPA: 3.09 / 4.00 · Graduated Mar 2023)</p>
          <p className="text-slate-400 pl-4">Focus: OOP, Algorithms, System Design, Enterprise Engineering</p>
        </div>
      );
    } else if (cmd.includes("contact") || cmd.includes("email") || cmd.includes("phone")) {
      resultNode = (
        <div className="space-y-1 text-xs font-mono">
          <p className="text-cyan-300 font-bold">&gt; Direct Coordinates:</p>
          <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-400 underline">{PERSONAL_INFO.email}</a></p>
          <p>Phone: <span className="text-slate-200">{PERSONAL_INFO.phone}</span></p>
          <p>Location: <span className="text-slate-200">Gothenburg, Sweden</span></p>
          <p>LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{PERSONAL_INFO.linkedinDisplay}</a></p>
          <p>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{PERSONAL_INFO.githubDisplay}</a></p>
        </div>
      );
    } else {
      resultNode = (
        <p className="text-rose-400 text-xs font-mono">
          Command not recognized: &quot;{raw}&quot;. Type <span className="text-cyan-300 underline cursor-pointer" onClick={() => executeCommand("help")}>help</span> to see supported commands.
        </p>
      );
    }

    const now = new Date().toLocaleTimeString("en-GB", { hour12: false });
    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: raw,
        output: resultNode,
        timestamp: now,
      },
    ]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(inputVal);
    }
  };

  const quickCommands = [
    "whoami",
    "skills",
    "businesshub",
    "antigravity",
    "education",
    "contact",
    "clear",
  ];

  return (
    <section id="terminal" className="py-24 relative bg-[#03070d] bg-feel-grid border-y border-cyan-500/25">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#09111c] border border-cyan-500/40 text-cyan-300 text-xs font-mono mb-3 shadow-[0_0_15px_rgba(0,210,239,0.2)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            Antigravity AI Live Terminal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Interactive Developer <span className="text-cyan-400 text-cyan-glow">Console</span>
          </h2>
          <p className="mt-2 text-slate-400 text-xs sm:text-sm max-w-xl mx-auto font-light">
            Test Kasuni&apos;s background directly via an interactive CLI emulator powered by Antigravity AI paradigms.
          </p>
        </div>

        {/* Quick Command Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <span className="text-xs font-mono text-slate-500 mr-1">Quick run:</span>
          {quickCommands.map((qc) => (
            <button
              key={qc}
              onClick={() => executeCommand(qc)}
              className="px-3 py-1 rounded-full text-xs font-mono bg-[#09111c] border border-cyan-500/35 text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 transition-all shadow-[0_0_10px_rgba(0,210,239,0.15)]"
            >
              ${qc}
            </button>
          ))}
        </div>

        {/* Terminal Window */}
        <div className="rounded-2xl overflow-hidden border-2 border-cyan-400/50 bg-[#060a12] shadow-[0_0_40px_rgba(0,210,239,0.3)]">
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-5 py-3 bg-[#09111c] border-b border-cyan-500/25">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="text-xs font-mono text-slate-400 ml-2">
                kasuni@gothenburg-node:~ (antigravity-ai)
              </span>
            </div>
            <div className="text-[11px] font-mono text-cyan-400">
              zsh · UTF-8
            </div>
          </div>

          {/* Terminal Scroll Output */}
          <div className="p-4 sm:p-6 max-h-[360px] min-h-[220px] overflow-y-auto space-y-4 font-mono text-xs sm:text-sm">
            {history.map((log) => (
              <div key={log.id} className="space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="text-emerald-400 font-bold">➜</span>
                  <span className="text-cyan-300 font-medium">kasuni.makalanda</span>
                  <span className="text-slate-500">git:(main)</span>
                  <span className="text-white font-semibold">$ {log.command}</span>
                  <span className="ml-auto text-[10px] text-slate-600">{log.timestamp}</span>
                </div>
                <div className="pl-5 text-slate-300">{log.output}</div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Input Bar */}
          <div className="px-4 py-3 bg-slate-950/90 border-t border-cyan-500/20 flex items-center gap-2">
            <span className="text-emerald-400 font-bold text-sm">➜</span>
            <span className="text-cyan-400 font-mono text-xs font-medium hidden sm:inline">
              agy-run $
            </span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a command (e.g. skills, businesshub, whoami) and press Enter..."
              className="flex-1 bg-transparent text-white font-mono text-xs sm:text-sm focus:outline-none placeholder-slate-600"
            />
            <button
              onClick={() => executeCommand(inputVal)}
              className="px-3 py-1 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-mono border border-cyan-500/30 transition-colors"
            >
              Execute
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

