"use client";

import React, { useState } from "react";
import Navbar from "@/src/component/Navbar";
import Banner from "@/src/component/Banner";
import AboutBanner from "@/src/component/AboutBanner";
import ZenjiEthos from "@/src/component/ZenjiEthos";
import Footer from "@/src/component/Footer";
import Preloader from "@/src/component/Preloader";

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white relative font-sans overflow-x-hidden">
      {/* Replay Preloader component when triggered */}
      {showPreloader && (
        <Preloader onComplete={() => setShowPreloader(false)} />
      )}

      {/* Top Navbar with Marquee */}
      <Navbar />

      {/* Hero Section */}
      <Banner />

      {/* About Warrior Spirit Banner */}
      <AboutBanner />

      {/* 4-Panel Photoshoot Ethos Banner */}
      <ZenjiEthos />

      {/* Footer Section */}
      <Footer />

      {/* Floating Replay Loading Screen Button for convenience */}
      <div className="fixed bottom-16 right-6 z-40">
        <button
          onClick={() => setShowPreloader(true)}
          className="bg-[#d30000] hover:bg-red-600 text-white font-mono text-xs uppercase tracking-widest font-bold px-4 py-2.5 rounded shadow-2xl transition-all duration-200 border border-red-500 flex items-center gap-2 cursor-pointer active:scale-95"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Replay Preloader
        </button>
      </div>
    </main>
  );
}
