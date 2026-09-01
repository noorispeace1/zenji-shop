"use client";

import React, { useRef } from "react";
import Link from "next/link";

interface DropItem {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  badge?: string;
}

export default function LatestDrops() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const drops: DropItem[] = [
    {
      id: "1",
      name: "BLUE FLAME TEE",
      price: "A$33.99",
      originalPrice: "A$39.99",
      image: "/images/ethos-1.jpg",
      badge: "SALE 15% OFF",
    },
    {
      id: "2",
      name: "BUSHIDO TEE",
      price: "A$39.99",
      image: "/images/ethos-2.jpg",
    },
    {
      id: "3",
      name: "DEMON BLOOD TEE",
      price: "A$33.99",
      originalPrice: "A$39.99",
      image: "/images/ethos-3.jpg",
      badge: "SALE 15% OFF",
    },
    {
      id: "4",
      name: "DOMAIN EXPANSION TEE",
      price: "A$39.99",
      image: "/images/ethos-4.jpg",
    },
    {
      id: "5",
      name: "FREE SOUL TEE",
      price: "A$39.99",
      image: "/images/about-banner.jpg",
      badge: "NEW",
    },
    {
      id: "6",
      name: "NEO TOKYO STREET TEE",
      price: "A$31.99",
      originalPrice: "A$39.99",
      image: "/images/hero-bg.jpg",
      badge: "SALE 20% OFF",
    },
    {
      id: "7",
      name: "CYBER SHINOBI HOODIE",
      price: "A$59.99",
      image: "/images/ethos-1.jpg",
      badge: "RESTOCK",
    },
    {
      id: "8",
      name: "AKIRA LEGEND TEE",
      price: "A$39.99",
      image: "/images/ethos-2.jpg",
    },
    {
      id: "9",
      name: "SHADOW NINJA TEE",
      price: "A$36.99",
      image: "/images/ethos-3.jpg",
      badge: "NEW",
    },
    {
      id: "10",
      name: "VALKYRIE ANIME TEE",
      price: "A$34.99",
      originalPrice: "A$39.99",
      image: "/images/ethos-4.jpg",
      badge: "SALE 10% OFF",
    },
    {
      id: "11",
      name: "MECHA PROTOCOL TEE",
      price: "A$39.99",
      image: "/images/about-banner.jpg",
      badge: "RARE",
    },
    {
      id: "12",
      name: "RONIN ZERO TEE",
      price: "A$44.99",
      image: "/images/hero-bg.jpg",
      badge: "ZANGETSU",
    },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  return (
    <section id="collection" className="w-full bg-white text-black py-16 sm:py-24 px-4 sm:px-8 border-b border-zinc-200 overflow-hidden">
      <div className="w-full space-y-8">
        {/* Top Header Row matching screenshot */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 px-2 sm:px-4 border-b border-zinc-200 pb-6">
          <div className="space-y-1">
            <p className="text-red-600 font-mono text-xs sm:text-sm font-bold tracking-[0.25em] uppercase">
              COLLECTION // THE_ORIGIN_DROP
            </p>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black font-sans tracking-tight text-black uppercase leading-none">
              LATEST_DROPS
            </h2>
          </div>

          <Link
            href="/collection"
            className="inline-flex items-center justify-center border border-black bg-white hover:bg-black text-black hover:text-white px-6 py-2.5 font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-sm active:scale-95 self-start sm:self-auto cursor-pointer"
          >
            VIEW_ALL
          </Link>
        </div>

        {/* Product Cards Horizontal Slider Row */}
        <div className="relative w-full">
          <div
            ref={scrollRef}
            className="flex items-stretch gap-5 overflow-x-auto scrollbar-none scroll-smooth pb-4 px-2 sm:px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {drops.map((item) => (
              <div
                key={item.id}
                className="flex-none w-[280px] sm:w-[320px] lg:w-[340px] group relative bg-zinc-100 border border-black overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-2xl"
              >
                {/* Image Container with Hover Scale */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Corner Red Badge Ribbon */}
                  {item.badge && (
                    <div className="absolute top-0 left-0 bg-red-600 text-white text-[10px] font-mono font-bold px-3 py-1 uppercase tracking-widest shadow-md z-10 -rotate-45 -translate-x-3 translate-y-2 w-28 text-center">
                      {item.badge}
                    </div>
                  )}

                  {/* Hover QUICK VIEW bottom bar */}
                  <div className="absolute bottom-0 left-0 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10">
                    <Link
                      href="/drop/bushido-tee"
                      className="w-full bg-black hover:bg-red-600 text-white font-mono text-xs font-bold py-3 uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                    >
                      <span>QUICK VIEW</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>

                {/* Card Meta Info matching screenshot */}
                <div className="p-4 bg-white border-t border-black space-y-1">
                  <h3 className="font-mono font-bold text-xs text-black uppercase tracking-wider group-hover:text-red-600 transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex flex-col font-mono">
                    {item.originalPrice && (
                      <span className="text-zinc-400 line-through text-[11px] font-medium">
                        {item.originalPrice}
                      </span>
                    )}
                    <span
                      className={`font-black text-sm sm:text-base ${
                        item.originalPrice ? "text-red-600" : "text-black"
                      }`}
                    >
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Slider Navigation Controls (Below Product Cards, Right Aligned) */}
        <div className="flex items-center justify-end gap-3 pt-4 px-2 sm:px-4">
          <button
            onClick={scrollLeft}
            aria-label="Previous drops"
            className="w-10 h-10 sm:w-12 sm:h-12 border border-black bg-white hover:bg-black hover:text-white transition-colors flex items-center justify-center font-mono font-bold text-xl cursor-pointer active:scale-95 shadow-md"
          >
            ‹
          </button>
          <button
            onClick={scrollRight}
            aria-label="Next drops"
            className="w-10 h-10 sm:w-12 sm:h-12 border border-black bg-white hover:bg-black hover:text-white transition-colors flex items-center justify-center font-mono font-bold text-xl cursor-pointer active:scale-95 shadow-md"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
