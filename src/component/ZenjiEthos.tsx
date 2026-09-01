"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { animate, stagger } from "animejs";

export default function ZenjiEthos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger Anime.js v4 stagger(150ms), 1000ms duration layout animation
          animate(cardRefs.current.filter(Boolean), {
            translateY: [50, 0],
            opacity: [0, 1],
            scale: [0.96, 1],
            delay: stagger(150),
            duration: 1000,
            ease: "outCubic",
          });
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      id: 1,
      title: "DEMON BLOOD TEE",
      category: "COLLECTION // SAKURA_SERIES",
      image: "/images/ethos-3.jpg",
      slug: "demon-blood-tee",
      price: "$119.00",
      topOffset: "top-20 sm:top-24",
    },
    {
      id: 2,
      title: "BLUE FLAME TEE",
      category: "COLLECTION // THE_ORIGIN_DROP",
      image: "/images/ethos-1.jpg",
      slug: "blue-flame-tee",
      price: "$129.00",
      topOffset: "top-24 sm:top-28",
    },
    {
      id: 3,
      title: "SUN SPIRIT TEE",
      category: "COLLECTION // LIMITED_EDITION",
      image: "/images/hero-bg.jpg",
      slug: "bushido-tee",
      price: "$129.00",
      topOffset: "top-28 sm:top-32",
    },
    {
      id: 4,
      title: "WARRIOR SPIRIT TEE",
      category: "COLLECTION // SAMURAI_CODE",
      image: "/images/ethos-2.jpg",
      slug: "bushido-tee",
      price: "$124.00",
      topOffset: "top-32 sm:top-36",
    },
  ];

  return (
    <section className="w-full bg-white text-black py-16 sm:py-24 px-4 sm:px-8 font-sans select-none relative overflow-hidden">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto space-y-3 mb-16 text-center">
        <p className="text-red-600 font-mono text-xs font-bold tracking-[0.3em] uppercase">
          VISUAL ARCHIVE // 004 PANELS
        </p>
        <h2 className="text-4xl sm:text-6xl font-black font-sans tracking-tight text-black uppercase">
          THE ORIGIN STACK
        </h2>
      </div>

      {/* Anime.js Powered Card Deck Container */}
      <div
        ref={containerRef}
        className="max-w-4xl mx-auto space-y-12 sm:space-y-16 relative pb-28"
      >
        {cards.map((card, idx) => (
          <div
            key={card.id}
            ref={(el) => {
              cardRefs.current[idx] = el;
            }}
            className={`sticky ${card.topOffset} w-full bg-zinc-900 border-t-4 border-[#d30000] border-x border-b border-zinc-300 shadow-[0_25px_60px_rgba(0,0,0,0.35)] rounded-none overflow-hidden group transform hover:-translate-y-1`}
            style={{
              zIndex: (idx + 1) * 10,
              opacity: 0,
            }}
          >
            {/* Card Main Photo Image */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-zinc-950">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

              {/* Red Corner Accent Brackets */}
              <div className="absolute top-4 left-4 border-t-2 border-l-2 border-[#d30000] w-8 h-8 pointer-events-none" />
              <div className="absolute top-4 right-4 border-t-2 border-r-2 border-[#d30000] w-8 h-8 pointer-events-none" />

              {/* Card Title & Meta Content Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 space-y-2 flex flex-col justify-end text-white z-10">
                <p className="text-red-500 font-mono text-xs font-bold tracking-widest uppercase">
                  {card.category}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <h3 className="text-3xl sm:text-5xl font-black font-sans uppercase tracking-tight text-white drop-shadow-lg">
                    {card.title}
                  </h3>

                  <Link
                    href={`/drop/${card.slug}`}
                    className="inline-flex items-center gap-2 bg-white hover:bg-red-600 text-black hover:text-white px-7 py-3 font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer border border-white shadow-xl active:scale-95"
                  >
                    <span>VIEW DROP</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
