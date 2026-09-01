"use client";

import React, { useState, useEffect } from "react";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Disable body scroll while preloader is active
    document.body.style.overflow = "hidden";

    // Progress counter animation from 0 to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random incremental steps for realistic load feel
        const next = prev + Math.floor(Math.random() * 12) + 4;
        return next > 100 ? 100 : next;
      });
    }, 60);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleFinish = () => {
    if (isExiting || isFinished) return;
    setIsExiting(true);
    setTimeout(() => {
      setIsFinished(true);
      document.body.style.overflow = "unset";
      if (onComplete) onComplete();
    }, 800); // match duration of slide-out animation
  };

  // Automatically trigger exit once progress reaches 100%
  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        handleFinish();
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  if (isFinished) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col justify-between overflow-hidden select-none transition-all duration-700 ${
        isExiting ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
    >
      {/* Split Sunburst Background Layer */}
      <div className="absolute inset-0 flex w-full h-full">
        {/* Left Side: Dark Background with Light Rays */}
        <div
          className={`relative w-1/2 h-full bg-black overflow-hidden transition-transform duration-700 ease-in-out ${
            isExiting ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <div
            className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] animate-spin-slow origin-center opacity-30"
            style={{
              background:
                "repeating-conic-gradient(from 0deg, #ffffff 0deg 4deg, transparent 4deg 12deg)",
            }}
          />
          {/* Subtle grid scanlines overlay */}
          <div className="absolute inset-0 bg-scanlines pointer-events-none opacity-40" />
        </div>

        {/* Right Side: Light Background with Dark Rays */}
        <div
          className={`relative w-1/2 h-full bg-white overflow-hidden transition-transform duration-700 ease-in-out ${
            isExiting ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <div
            className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] animate-spin-slow origin-center opacity-20"
            style={{
              background:
                "repeating-conic-gradient(from 0deg, #000000 0deg 4deg, transparent 4deg 12deg)",
            }}
          />
          {/* Subtle dark scanlines overlay */}
          <div className="absolute inset-0 bg-scanlines pointer-events-none opacity-20" />
        </div>
      </div>

      {/* Center Japanese Kanji Symbol "力" (Strength/Power) */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none transition-transform duration-700 ${
          isExiting ? "scale-90 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <span
          className="block text-[32vw] md:text-[28rem] font-extrabold leading-none tracking-tighter text-[#333333] opacity-80 animate-pulse-kanji"
          style={{
            fontFamily: "'Playfair Display', 'Noto Serif JP', serif",
            textShadow: "0 0 40px rgba(0,0,0,0.5)",
          }}
        >
          力
        </span>
      </div>

      {/* Main "ZENJI!" 3D Typography Logo */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full text-center px-4 transition-all duration-700 ${
          isExiting ? "scale-110 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <div className="relative inline-block group cursor-default">
          {/* Glitch Shadow Effect behind */}
          <h1
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black tracking-wider uppercase font-mono animate-glitch text-zinc-400 opacity-30 absolute top-1 left-1 w-full h-full"
            aria-hidden="true"
          >
            ZENJI!
          </h1>

          {/* Main 3D Styled Text with Bevel & Scanlines */}
          <h1
            className="relative text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black tracking-widest uppercase font-mono chrome-text text-shadow-3d select-none"
            style={{
              WebkitTextStroke: "2px rgba(0,0,0,0.8)",
            }}
          >
            ZENJI!
          </h1>

          {/* Scanning Line effect over logo */}
          <div className="absolute inset-0 bg-scanlines opacity-60 mix-blend-overlay pointer-events-none" />
        </div>

        {/* Dynamic Progress Indicator */}
        <div className="mt-8 flex flex-col items-center justify-center gap-2 z-30">
          <div className="w-48 sm:w-64 h-1.5 bg-zinc-800/80 rounded-full overflow-hidden p-0.5 border border-zinc-700/50 backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-red-600 via-white to-red-500 rounded-full transition-all duration-150 ease-out shadow-[0_0_12px_rgba(255,255,255,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-zinc-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            INITIALIZING {progress}%
          </span>
        </div>
      </div>

      {/* Bottom Cookie & Action Consent Bar */}
      <div
        className={`relative z-40 w-full bg-black border-t border-zinc-800 px-4 py-3 sm:px-8 sm:py-4 font-mono text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 transition-all duration-700 ${
          isExiting ? "translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Left Notice Text */}
        <p className="text-zinc-300 text-center sm:text-left tracking-tight font-medium max-w-xl">
          We use cookies to improve your experience and track analytics.
        </p>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleFinish}
            type="button"
            className="bg-[#d30000] hover:bg-[#ff0000] active:scale-95 text-white font-bold px-5 py-2 text-xs tracking-wider uppercase transition-all duration-200 shadow-md cursor-pointer border border-red-500"
          >
            ACCEPT
          </button>
          <button
            onClick={handleFinish}
            type="button"
            className="bg-black hover:bg-zinc-900 active:scale-95 text-white font-bold px-5 py-2 text-xs tracking-wider uppercase transition-all duration-200 border border-white/80 cursor-pointer"
          >
            DECLINE
          </button>
        </div>
      </div>
    </div>
  );
}
