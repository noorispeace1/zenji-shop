"use client";

import React, { useState } from "react";
import Navbar from "@/src/component/Navbar";
import Footer from "@/src/component/Footer";
import Link from "next/link";

interface LookbookItem {
  id: string;
  title: string;
  category: "EDITORIAL" | "STUDIO" | "STREET";
  location: string;
  productName: string;
  productSlug: string;
  image: string;
}

export default function LookbookPage() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [selectedItem, setSelectedItem] = useState<LookbookItem | null>(null);

  const lookbookItems: LookbookItem[] = [
    {
      id: "1",
      title: "COBALT SHADOWS",
      category: "EDITORIAL",
      location: "TOKYO NIGHTS // SHINJUKU",
      productName: "BLUE FLAME TEE",
      productSlug: "blue-flame-tee",
      image: "/images/ethos-1.jpg",
    },
    {
      id: "2",
      title: "DOMAIN EXPANSION",
      category: "STUDIO",
      location: "SHIBUYA DRAFT // STUDIO A",
      productName: "DOMAIN EXPANSION TEE",
      productSlug: "bushido-tee",
      image: "/images/ethos-4.jpg",
    },
    {
      id: "3",
      title: "DESERT WARRIOR",
      category: "STREET",
      location: "ALLEYWAY ARC // KYOTO",
      productName: "BUSHIDO TEE",
      productSlug: "bushido-tee",
      image: "/images/hero-bg.jpg",
    },
    {
      id: "4",
      title: "SAKURA DEMON",
      category: "EDITORIAL",
      location: "SAKURA BLOOM // HARAJUKU",
      productName: "DEMON BLOOD TEE",
      productSlug: "demon-blood-tee",
      image: "/images/ethos-3.jpg",
    },
    {
      id: "5",
      title: "SANCTUARY SILHOUETTE",
      category: "STUDIO",
      location: "SANCTUARY // STUDIO B",
      productName: "WARRIOR SPIRIT TEE",
      productSlug: "bushido-tee",
      image: "/images/ethos-2.jpg",
    },
    {
      id: "6",
      title: "CYBER DISTRICT",
      category: "STREET",
      location: "CYBER DISTRICT // AKIHABARA",
      productName: "CYBER SHINOBI HOODIE",
      productSlug: "bushido-tee",
      image: "/images/about-banner.jpg",
    },
    {
      id: "7",
      title: "NEO SKATE CREW",
      category: "EDITORIAL",
      location: "UNDERGROUND // ROPPONGI",
      productName: "FREE SOUL TEE",
      productSlug: "blue-flame-tee",
      image: "/images/ethos-1.jpg",
    },
    {
      id: "8",
      name: "NEO TOKYO NIGHTFALL",
      title: "NIGHTFALL PROTOCOL",
      category: "STREET",
      location: "NEO TOKYO // DOWNTOWN",
      productName: "NEO TOKYO STREET TEE",
      productSlug: "blue-flame-tee",
      image: "/images/hero-bg.jpg",
    },
    {
      id: "9",
      title: "SHADOW ARCHIVE",
      category: "STUDIO",
      location: "STUDIO C // MONOCHROME",
      productName: "AKIRA LEGEND TEE",
      productSlug: "bushido-tee",
      image: "/images/ethos-2.jpg",
    },
  ];

  const categories = ["ALL", "EDITORIAL", "STUDIO", "STREET"];

  const filteredItems = lookbookItems.filter((item) => {
    if (activeCategory === "ALL") return true;
    return item.category === activeCategory;
  });

  return (
    <main className="min-h-screen bg-black text-white font-sans relative overflow-x-hidden selection:bg-red-600 selection:text-white pt-24 pb-20">
      {/* Top Navbar */}
      <Navbar />

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-zinc-950 border border-zinc-800 p-4 sm:p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4 font-mono text-xs">
              <span className="text-red-500 font-bold uppercase tracking-widest">
                {selectedItem.category} // {selectedItem.location}
              </span>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-zinc-400 hover:text-white font-mono uppercase tracking-widest text-xs cursor-pointer"
              >
                [ CLOSE ✕ ]
              </button>
            </div>

            <div className="relative aspect-[3/4] max-h-[70vh] w-full overflow-hidden bg-black">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              <div>
                <h3 className="text-2xl font-black font-sans text-white uppercase">
                  {selectedItem.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  FEATURED ITEM: <strong className="text-white">{selectedItem.productName}</strong>
                </p>
              </div>

              <Link
                href={`/drop/${selectedItem.productSlug}`}
                className="bg-white hover:bg-red-600 text-black hover:text-white px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer border border-white"
              >
                VIEW DROP →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 1. Page Hero Banner */}
      <section className="w-full bg-black text-white border-b border-zinc-900 px-6 sm:px-12 lg:px-16 py-12 lg:py-16 relative overflow-hidden">
        <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-8 relative z-10">
          <div className="space-y-3">
            <p className="text-red-600 font-mono text-xs font-bold tracking-[0.25em] uppercase">
              THE_ORIGIN_DROP // LOOKBOOK ARCHIVE
            </p>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-sans tracking-tight text-white uppercase leading-[0.9]">
              ANIME STREETWEAR –
              <br />
              LOOK
              <br />
              BOOK
            </h1>

            <p className="text-zinc-400 text-xs sm:text-sm tracking-widest font-mono pt-1">
              The Origin Drop. The 2026 Visual Archive.
            </p>
          </div>

          <div className="hidden md:block select-none opacity-20 text-right">
            <span className="text-8xl lg:text-9xl font-black font-mono tracking-tighter text-zinc-600 leading-none">
              2026
            </span>
          </div>
        </div>
      </section>

      {/* 2. Category Filter Controls */}
      <section className="w-full bg-black border-b border-zinc-900 px-6 sm:px-12 lg:px-16 py-4">
        <div className="w-full flex items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-xs font-mono font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer border ${
                  activeCategory === cat
                    ? "bg-white text-black border-white"
                    : "bg-black text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="text-xs font-mono text-zinc-500 font-bold uppercase tracking-wider hidden sm:block">
            {filteredItems.length} VISUALS
          </span>
        </div>
      </section>

      {/* 3. 3-Column Lookbook Grid (Full-Width Edge-to-Edge) */}
      <section className="w-full bg-white text-black py-0 px-0">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-1 sm:gap-2">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative aspect-[3/4] sm:aspect-[4/5] w-full bg-zinc-900 overflow-hidden cursor-pointer border border-zinc-200 transition-all duration-500 hover:shadow-2xl animate-in fade-in slide-in-from-bottom-6 duration-500 fill-mode-backwards"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {/* Photo Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Dark Hover Overlay with Meta Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 sm:p-8 flex flex-col justify-end text-white space-y-2">
                <p className="text-red-500 font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                  {item.category} // {item.location}
                </p>

                <h3 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight">
                  {item.title}
                </h3>

                <div className="pt-2 flex items-center justify-between border-t border-white/20 font-mono text-xs">
                  <span className="text-zinc-300 uppercase font-bold">{item.productName}</span>
                  <span className="text-white font-bold group-hover:translate-x-1 transition-transform">
                    EXPAND ↗
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
