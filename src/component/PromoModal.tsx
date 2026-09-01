"use client";

import React, { useState, useEffect } from "react";

export default function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [claimedCode, setClaimedCode] = useState<string | null>(null);

  useEffect(() => {
    // Open promo modal automatically after page loads
    const timer = setTimeout(() => {
      const hasDismissed = sessionStorage.getItem("zenji_promo_dismissed");
      if (!hasDismissed) {
        setIsOpen(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("zenji_promo_dismissed", "true");
  };

  const handleSelectFighter = (fighterName: string) => {
    setClaimedCode(`CODE: ZENJI-${fighterName.replace(/\s+/g, "")} UNLOCKED!`);
    sessionStorage.setItem("zenji_promo_dismissed", "true");
    setTimeout(() => {
      setIsOpen(false);
    }, 1800);
  };

  if (!isOpen) return null;

  const fighters = [
    "JUJUTSU KAISEN",
    "DEMON SLAYER",
    "ONE PIECE",
    "NARUTO",
    "DRAGON BALL",
    "OTHER",
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={handleClose}
    >
      <div
        className="relative max-w-md w-full bg-black border border-zinc-800 p-6 sm:p-8 space-y-6 shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Right Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 border border-zinc-700 bg-black text-zinc-400 hover:text-white text-xs px-2.5 py-1 font-mono uppercase transition-colors cursor-pointer"
        >
          ✕
        </button>

        {/* Modal Header matching screenshot */}
        <div className="text-center space-y-2 pt-2">
          <div className="text-xl sm:text-2xl font-black font-mono tracking-widest text-white uppercase">
            ZENJI
          </div>

          <h2 className="text-2xl sm:text-3xl font-black font-sans tracking-tight text-white uppercase leading-tight">
            FREE SHIPPING ON FIRST ORDER
          </h2>

          <p className="text-red-600 font-mono text-xs font-bold tracking-[0.25em] uppercase pt-1">
            CHOOSE YOUR FIGHTER
          </p>
        </div>

        {/* Claimed Toast Message */}
        {claimedCode ? (
          <div className="bg-red-600 text-white font-mono text-xs p-4 text-center font-bold tracking-widest uppercase animate-in fade-in border border-red-500">
            ✓ {claimedCode}
          </div>
        ) : (
          /* Fighter Option Buttons List matching screenshot */
          <div className="space-y-2.5 pt-2">
            {fighters.map((fighter) => (
              <button
                key={fighter}
                onClick={() => handleSelectFighter(fighter)}
                className="w-full border border-zinc-700 hover:border-red-600 bg-black hover:bg-red-600/10 text-white font-mono text-xs sm:text-sm font-bold tracking-widest uppercase py-3.5 transition-all duration-200 cursor-pointer shadow-sm active:scale-95 flex items-center justify-center"
              >
                {fighter}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
