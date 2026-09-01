"use client";

import React, { useState } from "react";

export default function ZenjiEthos() {
  const [activePanel, setActivePanel] = useState<number | null>(null);

  const panels = [
    {
      id: 1,
      image: "/images/ethos-1.jpg",
      tag: "ETHOS // 001",
      badge: "THE PHILOSOPHY",
      titleTop: "THE",
      titleHighlight: "ZENJI",
      titleBottom: "ETHOS",
      kanji: "禅侍",
      description:
        "AT THE INTERSECTION OF JAPANESE MYTHOS AND URBAN SUB-CULTURE, WE RE-IMAGINE THE CANON. EVERY PIECE IS CRAFTED FOR THE REBELS, CREATORS, AND OUTSIDERS WHO CHOOSE THEIR OWN PATH.",
      productTag: "LIMITED DROP // SEASON 01",
    },
    {
      id: 2,
      image: "/images/ethos-2.jpg",
      tag: "DROP // 002",
      badge: "WARRIOR SPIRIT",
      titleTop: "AKUMA",
      titleHighlight: "SAMURAI",
      titleBottom: "HOODIE",
      kanji: "不死身",
      description:
        "HEAVYWEIGHT 480GSM FLEECE FEATURING HIGH-DENSITY GLOWING NEON SCREEN-PRINTED BACK GRAPHIC AND REINFORCED RIBBED TRIMS.",
      productTag: "480 GSM FLEECE // HEAVYWEIGHT",
    },
    {
      id: 3,
      image: "/images/ethos-3.jpg",
      tag: "DROP // 003",
      badge: "TOKYO REBELLION",
      titleTop: "REBELLION",
      titleHighlight: "ANIME",
      titleBottom: "TEE",
      kanji: "孤高",
      description:
        "260GSM COMBED COTTON OVERSIZED CUT FEATURING RAW JAPANESE MANGA GRAPHIC ART AND DISTRESSED WASH FINISH.",
      productTag: "260 GSM COTTON // OVERSIZED FIT",
    },
    {
      id: 4,
      image: "/images/ethos-4.jpg",
      tag: "DROP // 004",
      badge: "BUSHIDO CODE",
      titleTop: "BUSHIDO",
      titleHighlight: "CALLIGRAPHY",
      titleBottom: "SPECIAL",
      kanji: "武士道",
      description:
        "VERTICAL BRUSH CALLIGRAPHY FEATURING TRADITIONAL SAMURAI CREST EMBLEM AND HAND-STITCHED AUTHENTICITY WOVEN TAG.",
      productTag: "VERTICAL CALLIGRAPHY // VAULT LOCK",
    },
  ];

  return (
    <section className="w-full bg-black text-white relative overflow-hidden border-t border-zinc-900 font-mono select-none">
      {/* 4-Panel Photoshoot Gallery Banner Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-auto lg:h-[720px]">
        {panels.map((panel, idx) => {
          const isHovered = activePanel === panel.id;
          const isOtherHovered = activePanel !== null && !isHovered;

          return (
            <div
              key={panel.id}
              onMouseEnter={() => setActivePanel(panel.id)}
              onMouseLeave={() => setActivePanel(null)}
              className={`relative overflow-hidden group transition-all duration-500 h-[520px] sm:h-[600px] lg:h-full border-b lg:border-b-0 lg:border-r border-zinc-900/80 cursor-pointer ${
                isOtherHovered ? "opacity-60 scale-[0.99]" : "opacity-100 scale-100"
              }`}
            >
              {/* Photoshoot Background Image */}
              <img
                src={panel.image}
                alt={panel.badge}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Dark moody gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30 group-hover:from-black/90 group-hover:via-black/50 transition-colors duration-500 pointer-events-none" />

              {/* CRT Scanlines Overlay */}
              <div className="absolute inset-0 bg-scanlines-dark opacity-30 pointer-events-none" />

              {/* Red Corner Accent Brackets on hover */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#d30000] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#d30000] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Overlay Content */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-10">
                {/* Top Badge & Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d30000] animate-pulse" />
                    <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest bg-black/60 backdrop-blur-md px-2.5 py-1 border border-zinc-800 rounded-sm">
                      {panel.tag}
                    </span>
                  </div>

                  {/* Japanese Kanji Character Watermark */}
                  <span className="text-2xl font-bold text-white/30 tracking-widest">
                    {panel.kanji}
                  </span>
                </div>

                {/* Center / Left Panel 1 Highlighted Content (matching screenshot style) */}
                {panel.id === 1 ? (
                  <div className="space-y-4 my-auto">
                    {/* Tagline Accent */}
                    <div className="space-y-1">
                      <div className="w-8 h-0.5 bg-[#d30000]" />
                      <span className="text-[10px] text-[#d30000] font-bold uppercase tracking-widest block">
                        BRAND INTEL // 2026
                      </span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-white uppercase leading-[0.95] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                      {panel.titleTop}
                      <br />
                      <span className="text-[#d30000] drop-shadow-[0_0_15px_rgba(211,0,0,0.6)]">
                        {panel.titleHighlight}
                      </span>
                      <br />
                      {panel.titleBottom}
                    </h2>

                    {/* Kanji Stamp Logo */}
                    <div className="inline-flex items-center gap-2 bg-zinc-950/90 border border-zinc-800 px-3 py-1.5 rounded-sm shadow-xl">
                      <span className="text-lg text-[#d30000] font-bold font-serif">
                        ZENJI 禅侍
                      </span>
                    </div>

                    {/* Description Text */}
                    <p className="text-[11px] text-zinc-300 leading-relaxed font-mono max-w-xs drop-shadow-md">
                      {panel.description}
                    </p>
                  </div>
                ) : (
                  /* Panels 2, 3, 4 Hover Reveal Info */
                  <div className="space-y-3 mt-auto transform group-hover:-translate-y-2 transition-transform duration-300">
                    <span className="text-xs text-[#d30000] font-bold uppercase tracking-widest block">
                      {panel.badge}
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-black font-mono text-white uppercase leading-none">
                      {panel.titleTop} {panel.titleHighlight}
                    </h3>

                    <p className="text-[11px] text-zinc-400 leading-relaxed font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3">
                      {panel.description}
                    </p>
                  </div>
                )}

                {/* Bottom Tag Bar */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-400">
                  <span className="tracking-widest uppercase font-bold text-zinc-300">
                    {panel.productTag}
                  </span>
                  <svg
                    className="w-4 h-4 text-white transform group-hover:translate-x-1 group-hover:text-[#d30000] transition-all duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
