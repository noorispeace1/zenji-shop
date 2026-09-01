"use client";

import React from "react";

export default function Banner() {
  return (
    <section className="relative w-full h-screen min-h-[700px] bg-black overflow-hidden flex flex-col justify-between">
      {/* Background Image Layer with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Zenji Streetwear Model"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow"
        />
        {/* Dark moody gradient overlays matching screenshot */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40" />
        <div className="absolute inset-0 bg-scanlines-dark opacity-30 pointer-events-none" />
      </div>

      {/* Hero Content Overlay (Bottom Left) */}
      <div className="relative z-20 mt-auto px-6 sm:px-12 pb-24 max-w-4xl space-y-4">
        {/* Subtitle tag with red dot */}
        <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-bold tracking-widest text-red-500 uppercase">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
          <span>THE_ORIGIN_DROP // LOADING</span>
        </div>

        {/* Massive Headline Typography */}
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter uppercase font-mono text-white leading-[0.9] select-none drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
          WEAR YOUR
          <br />
          STORY
        </h1>

        {/* Thick Red Underline Accent Bar */}
        <div className="w-36 sm:w-56 h-3 bg-[#d30000] shadow-[0_0_15px_rgba(211,0,0,0.8)] mt-2" />
      </div>
    </section>
  );
}
