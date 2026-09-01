"use client";

import React from "react";
import Navbar from "@/src/component/Navbar";
import Footer from "@/src/component/Footer";
import Link from "next/link";

export default function CollaborationPage() {
  return (
    <main className="min-h-screen bg-black text-white relative font-mono overflow-x-hidden flex flex-col justify-between selection:bg-red-600 selection:text-white">
      {/* Pinned Navbar with Marquee Banner */}
      <Navbar />

      {/* Center Restricted Sector / Coming Soon Area */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-36 pb-20 z-10 space-y-6">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-black font-sans tracking-tighter uppercase text-white select-none drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
          COMING SOON
        </h1>

        <p className="text-red-600 font-mono text-xs sm:text-sm font-bold tracking-[0.35em] uppercase">
          THIS SECTOR IS RESTRICTED
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-block bg-black hover:bg-white text-white hover:text-black border border-zinc-700 hover:border-white px-7 py-2.5 font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-xl active:scale-95 cursor-pointer"
          >
            RETURN_TO_BASE
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
