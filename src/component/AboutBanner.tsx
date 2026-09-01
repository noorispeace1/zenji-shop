"use client";

import React from "react";
import Link from "next/link";

export default function AboutBanner() {
  return (
    <section className="w-full min-h-screen bg-black text-white overflow-hidden relative border-t border-zinc-900 flex flex-col justify-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-screen items-stretch">
        {/* Left Column: Full-Width Full-Height Streetwear Photoshoot Image */}
        <div className="lg:col-span-6 xl:col-span-7 relative group min-h-[450px] lg:min-h-screen w-full overflow-hidden">
          <img
            src="/images/about-banner.jpg"
            alt="Zenji Warrior Spirit Collection photoshoot"
            className="w-full h-full min-h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Dark moody gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
          <div className="absolute inset-0 bg-scanlines-dark opacity-30 pointer-events-none" />

          {/* Corner Bracket Accent */}
          <div className="absolute top-6 left-6 border-t-2 border-l-2 border-red-600 w-10 h-10 pointer-events-none z-10" />
          <div className="absolute bottom-6 right-6 border-b-2 border-r-2 border-red-600 w-10 h-10 pointer-events-none z-10" />
        </div>

        {/* Right Column: Full-Height About Zenji Text & Story */}
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center p-8 sm:p-12 lg:p-16 xl:p-20 space-y-6 bg-black z-10">
          {/* Tag */}
          <div className="space-y-1.5">
            <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-[#d30000] uppercase block">
              ABOUT // ZENJI
            </span>
            <div className="w-12 h-0.5 bg-[#d30000]" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-sans tracking-tight text-white uppercase leading-[1.05]">
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
          <div className="border-l-4 border-[#d30000] pl-4 py-2 italic font-mono text-xs sm:text-sm text-zinc-200 bg-zinc-950/80">
            &ldquo;The warrior within refuses to fade into the crowd.&rdquo;
          </div>

          {/* Tagline */}
          <div className="font-mono text-xs font-bold tracking-widest text-zinc-500 uppercase">
            FOR THE DREAMERS. FIGHTERS. CREATORS. OUTSIDERS.
          </div>

          {/* CTA Link */}
          <div className="pt-4">
            <Link
              href="/collection"
              className="inline-flex items-center gap-3 font-mono text-xs font-bold tracking-widest text-white hover:text-red-500 transition-colors uppercase group border-b-2 border-white hover:border-red-500 pb-1 cursor-pointer"
            >
              <span>EXPLORE THE COLLECTION</span>
              <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
