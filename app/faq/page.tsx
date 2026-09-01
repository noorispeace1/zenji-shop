"use client";

import React from "react";
import Navbar from "@/src/component/Navbar";
import FAQ from "@/src/component/FAQ";
import ZenjiEthos from "@/src/component/ZenjiEthos";
import Footer from "@/src/component/Footer";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-black text-white relative font-sans overflow-x-hidden pt-24">
      {/* Top Navbar */}
      <Navbar />

      {/* Main FAQ Component */}
      <FAQ />

      {/* 4-Panel Photoshoot Ethos Banner */}
      <ZenjiEthos />

      {/* Footer */}
      <Footer />
    </main>
  );
}
