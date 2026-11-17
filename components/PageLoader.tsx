"use client";

import React, { useEffect, useState, useRef } from "react";

interface PageLoaderProps {
  onDone: () => void;
}

export default function PageLoader({ onDone }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);
  const DURATION = 1800; // ms

  useEffect(() => {
    startRef.current = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startRef.current;
      const p = Math.min(100, (elapsed / DURATION) * 100);
      setProgress(p);

      if (p < 100) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        // Brief pause at 100%, then fade out
        setTimeout(() => {
          setLeaving(true);
          setTimeout(onDone, 500);
        }, 250);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#03070d] transition-opacity duration-500 ${leaving ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-feel-grid opacity-40 pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Logo with ping */}
      <div className="relative mb-7">
        {/* Ping ring */}
        <div
          className="absolute inset-0 rounded-full border border-cyan-400/50 loader-ping"
          style={{ transform: "scale(1.5)" }}
        />
        {/* KM ring */}
        <div className="w-20 h-20 rounded-full border-2 border-cyan-400 bg-[#060b14] flex items-center justify-center font-mono font-extrabold text-2xl text-cyan-300 shadow-[0_0_30px_rgba(0,210,239,0.55)]">
          KM
        </div>
      </div>
    </div>
  );
}

