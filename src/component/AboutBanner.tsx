"use client";

import React from "react";

export default function AboutBanner() {
  return (
    <section className="w-full bg-black text-white py-16 lg:py-24 px-6 sm:px-12 border-t border-zinc-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Streetwear Photoshoot Image */}
        <div className="lg:col-span-7 relative group">
          <div className="relative overflow-hidden rounded-sm border border-zinc-800 shadow-2xl">
            <img
              src="/images/about-banner.jpg"
              alt="Zenji Warrior Spirit Collection photoshoot"
              className="w-full h-[450px] sm:h-[550px] lg:h-[620px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Dark moody gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
            <div className="absolute inset-0 bg-scanlines-dark opacity-30 pointer-events-none" />

            {/* Corner Bracket Accent */}
            <div className="absolute top-4 left-4 border-t-2 border-l-2 border-red-600 w-8 h-8 pointer-events-none" />
            <div className="absolute bottom-4 right-4 border-b-2 border-r-2 border-red-600 w-8 h-8 pointer-events-none" />
          </div>
        </div>

        {/* Right Column: About Zenji Text & Story */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
          {/* Tag */}
          <div className="space-y-1.5">
            <span className="font-mono text-xs font-bold tracking-widest text-[#d30000] uppercase block">
              ABOUT // ZENJI
            </span>
            <div className="w-10 h-0.5 bg-[#d30000]" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-mono tracking-tight text-white uppercase leading-[1.05]">
            BORN FROM THE
            <br />
            WARRIOR SPIRIT.
          </h2>

          {/* Body Text */}
          <div className="space-y-4 font-mono text-xs sm:text-sm text-zinc-400 leading-relaxed">
            <p>
              <strong className="text-zinc-200">ZENJI</strong> began with one belief: what you wear should tell a story.
            </p>
            <p>
              Inspired by samurai discipline, anime art and modern street culture, we create premium streetwear for those who choose their own path.
            </p>
            <p>
              Every ZENJI piece combines Japanese-inspired artwork, powerful symbolism and oversized silhouettes to express courage, creativity and individuality.
            </p>
          </div>

          {/* Quote Block */}
          <div className="border-l-2 border-[#d30000] pl-4 py-1 italic font-mono text-xs sm:text-sm text-zinc-300">
            &ldquo;The warrior within refuses to fade into the crowd.&rdquo;
          </div>

          {/* Tagline */}
          <div className="font-mono text-[11px] font-bold tracking-widest text-zinc-500 uppercase">
            FOR THE DREAMERS. FIGHTERS. CREATORS. OUTSIDERS.
          </div>

          {/* CTA Link */}
          <div className="pt-2">
            <a
              href="#collection"
              className="inline-flex items-center gap-3 font-mono text-xs font-bold tracking-widest text-white hover:text-red-500 transition-colors uppercase group border-b border-white hover:border-red-500 pb-1"
            >
              <span>EXPLORE THE COLLECTION</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-200"
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
