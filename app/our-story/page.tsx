"use client";

import React from "react";
import Navbar from "@/src/component/Navbar";
import Footer from "@/src/component/Footer";
import Link from "next/link";

export default function OurStoryPage() {
  const aboutFacts = [
    {
      q: "WHAT IS ZENJI?",
      a: "ZENJI is an Australian online streetwear brand.",
    },
    {
      q: "WHEN WAS ZENJI FOUNDED?",
      a: "ZENJI was founded in 2024.",
    },
    {
      q: "WHAT IS ZENJI KNOWN FOR?",
      a: "ZENJI makes limited-edition anime-inspired graphic tees in 240GSM heavyweight cotton.",
    },
    {
      q: "WHERE DOES ZENJI SHIP?",
      a: "ZENJI ships Australia-wide, with free shipping on orders over A$100 and standard delivery in 2-5 business days.",
    },
    {
      q: "ARE ZENJI DROPS LIMITED?",
      a: "ZENJI products are limited edition. There are no restocks, once a piece sells out it is gone for good.",
    },
    {
      q: "WHAT SIZES ARE AVAILABLE?",
      a: "Sizes run from XS to XXL, with oversized fits across all styles.",
    },
    {
      q: "WHAT INSPIRES ZENJI DESIGNS?",
      a: "ZENJI draws on samurai discipline, Japanese typography and modern anime art.",
    },
    {
      q: "WHERE IS ZENJI BASED?",
      a: "ZENJI is based in Australia and ships to major capital cities and regional towns including Sydney, Melbourne, Brisbane, Perth and Adelaide.",
    },
    {
      q: "WHAT ANIME STYLES ARE FEATURED?",
      a: "ZENJI designs are inspired by iconic themes including Jujutsu Kaisen, Demon Slayer, Naruto, One Piece and Dragon Ball. Featuring original fanart, bespoke artwork, and tribute graphics.",
    },
    {
      q: "ARE ZENJI DROPS ON SALE?",
      a: "The Origin Drop is in stock and available now, with selected pieces on sale at 15% off.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans relative overflow-x-hidden selection:bg-red-600 selection:text-white pt-24 pb-20">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Story & Lore Content Container */}
      <div className="max-w-4xl mx-auto px-6 sm:px-10 py-12 space-y-16">
        {/* 1. Hero Lore Header Section */}
        <section className="space-y-6">
          <p className="text-red-600 font-mono text-xs font-bold tracking-[0.25em] uppercase">
            OUR STORY // LORE
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-sans tracking-tight uppercase text-white leading-none">
            ANIME STREETWEAR AUSTRALIA –
            <br />
            BORN FROM THE WARRIOR SPIRIT.
          </h1>

          <div className="space-y-4 font-mono text-xs sm:text-sm text-zinc-300 leading-relaxed">
            <p>
              ZENJI items edit are bold: what you wear should tell a story. Forged by samurai discipline, anime art and modern streetwear culture, we create premium streetwear for those who choose their own path.
            </p>

            <p>
              Every ZENJI piece combines Japanese graphical artwork, powerful quotes and custom craftsmanship to express courage, creativity, and individuality.
            </p>

            {/* Highlighted Quote Box matching screenshot */}
            <div className="bg-zinc-950 border-l-4 border-red-600 p-6 my-6 font-mono text-xs sm:text-sm text-zinc-200 leading-relaxed shadow-xl">
              Zenji is more than a brand or a shirt. It represents the warrior within, the part of us that keeps moving forward, which faces the world head on and refuses to fade into the crowd.
            </div>

            <p>
              We design for the dreamers, fighters, creators and wanderers shaping their own future.
            </p>

            <h3 className="text-sm sm:text-base font-black font-mono tracking-wider text-white uppercase pt-4">
              WEAR YOUR STORY. WEAR YOUR SPIRIT. WEAR ZENJI.
            </h3>

            <div className="pt-4">
              <Link
                href="/collection"
                className="inline-flex items-center gap-2 border border-white bg-black hover:bg-white text-white hover:text-black px-7 py-3 font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-lg active:scale-95 cursor-pointer"
              >
                <span>EXPLORE THE COLLECTION</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 2. ABOUT ZENJI Key Facts / Q&A Section matching screenshot */}
        <section className="border-t border-zinc-900 pt-12 space-y-8">
          <h2 className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-white uppercase">
            ABOUT ZENJI
          </h2>

          <div className="space-y-6 font-mono text-xs">
            {aboutFacts.map((fact, idx) => (
              <div
                key={idx}
                className="space-y-1.5 border-b border-zinc-900/80 pb-5 last:border-b-0"
              >
                <span className="text-red-500 font-bold uppercase tracking-widest block text-[11px]">
                  {fact.q}
                </span>
                <p className="text-zinc-300 leading-relaxed">
                  {fact.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
