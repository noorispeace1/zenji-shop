"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t border-zinc-900 font-mono relative overflow-hidden flex flex-col justify-between">
      {/* 1. Top Announcement Header Bar - Full Width */}
      <div className="w-full border-b border-zinc-900 px-6 sm:px-12 lg:px-16 py-3.5 flex items-center justify-between text-[11px] tracking-widest text-zinc-500 uppercase select-none">
        <span>ZENJI // AWAKENING_REDACTED</span>
        <span>NO RESTOCKS. EVER.</span>
      </div>

      {/* Main Content Area Container - Full Width edge-to-edge */}
      <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-16 lg:py-24 my-auto">
        {/* Giant Background Watermark Text "ZENJI" - Full Width Span */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
        >
          <span className="text-[25vw] xl:text-[280px] font-black text-zinc-900/35 tracking-tighter leading-none uppercase">
            ZENJI
          </span>
        </div>

        {/* 2. Grid Container (Columns overlaid on top of watermark) */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Column 1: Brand Info & Social Links (Spans 4 columns) */}
          <div className="md:col-span-4 space-y-6">
            {/* Z Logo Icon */}
            <div className="w-12 h-12 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white fill-current"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 15 H85 L65 35 H35 L75 75 H15 L35 55 H65 L15 15 Z" />
                <path d="M85 85 L70 85 L50 65 L65 65 Z" fill="#d30000" />
              </svg>
            </div>

            {/* Brand Description */}
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm font-mono">
              Wear the Arc. Anime-inspired
              <br />
              streetwear for gamers and otaku. Every
              <br />
              drop limited. No restocks. Ever.
            </p>

            {/* Social Links Section */}
            <div className="space-y-3 pt-2">
              <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest block">
                FOLLOW THE LORE
              </span>

              <div className="flex flex-wrap items-center gap-3">
                {/* TikTok Button */}
                <a
                  href="#tiktok"
                  className="bg-white text-black hover:bg-zinc-200 text-xs font-bold px-4 py-2 inline-flex items-center gap-2 transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.33 22a6.34 6.34 0 0 0 6.34-6.34V9.37a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.85-.8z" />
                  </svg>
                  <span>TikTok</span>
                </a>

                {/* Instagram Button */}
                <a
                  href="#instagram"
                  className="bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 text-white hover:opacity-90 text-xs font-bold px-4 py-2 inline-flex items-center gap-2 transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>Instagram</span>
                </a>

                {/* Facebook Button */}
                <a
                  href="#facebook"
                  className="bg-[#1877F2] text-white hover:bg-blue-600 text-xs font-bold px-4 py-2 inline-flex items-center gap-2 transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Columns Grid (Spans 8 columns in 4 sub-columns) */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12">
            {/* Column 2: DROPS */}
            <div className="space-y-4">
              <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
                DROPS
              </h4>
              <ul className="space-y-3 text-xs text-zinc-200">
                <li>
                  <a href="/" className="hover:text-[#d30000] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#drop" className="hover:text-[#d30000] transition-colors">
                    Drop
                  </a>
                </li>
                <li>
                  <a href="#collection" className="hover:text-[#d30000] transition-colors">
                    Collection
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: EXPLORE */}
            <div className="space-y-4">
              <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
                EXPLORE
              </h4>
              <ul className="space-y-3 text-xs text-zinc-200">
                <li>
                  <a href="#lookbook" className="hover:text-[#d30000] transition-colors">
                    Lookbook
                  </a>
                </li>
                <li>
                  <a href="#our-story" className="hover:text-[#d30000] transition-colors">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#collection" className="hover:text-[#d30000] transition-colors">
                    Collection
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: COMMUNITY */}
            <div className="space-y-4">
              <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
                COMMUNITY
              </h4>
              <ul className="space-y-3 text-xs text-zinc-200">
                <li>
                  <a href="#tiktok" className="hover:text-[#d30000] transition-colors">
                    TikTok
                  </a>
                </li>
                <li>
                  <a href="#instagram" className="hover:text-[#d30000] transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#facebook" className="hover:text-[#d30000] transition-colors">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 5: CONTACT */}
            <div className="space-y-4">
              <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
                CONTACT
              </h4>
              <ul className="space-y-3 text-xs text-zinc-200">
                <li>
                  <a href="/faq" className="hover:text-[#d30000] transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/reviews" className="hover:text-[#d30000] transition-colors">
                    Review
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="hover:text-[#d30000] transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:text-[#d30000] transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#help" className="hover:text-[#d30000] transition-colors">
                    Help
                  </a>
                </li>
                <li>
                  <a href="#returns" className="hover:text-[#d30000] transition-colors">
                    Return Policy
                  </a>
                </li>
                <li>
                  <a href="mailto:support@zenji.com" className="hover:text-[#d30000] transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Bar - Full Width */}
      <div className="w-full border-t border-zinc-900 px-6 sm:px-12 lg:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 select-none">
        <div>
          © 2026 ZENJI. All drops are final. No restocks. Ever.
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-zinc-300 transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-zinc-300 transition-colors">
              Terms
            </a>
            <a href="#cookies" className="hover:text-zinc-300 transition-colors">
              Cookies
            </a>
          </div>

          <div className="flex items-center gap-2 text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-[#d30000] inline-block animate-pulse" />
            <span>Anime-inspired. Gamer-built. Community-owned.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
