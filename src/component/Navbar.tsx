"use client";

import React, { useState } from "react";
import MarqueeBanner from "./MarqueeBanner";

export default function Navbar() {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 flex flex-col">
      {/* Top Red Scrolling Marquee Banner */}
      <MarqueeBanner />

      {/* Main Translucent Glassmorphism Navbar */}
      <nav className="w-full bg-black/60 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between transition-all duration-300">
        {/* Left Brand Logo */}
        <div className="flex items-center gap-4">
          <a
            href="/"
            className="text-2xl sm:text-3xl font-black font-mono tracking-widest text-white hover:text-red-500 transition-colors uppercase select-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
          >
            ZENJI
          </a>
        </div>

        {/* Center Nav Links (exact matching screenshot) */}
        <div className="hidden lg:flex items-center gap-8 font-mono text-xs font-bold tracking-widest uppercase text-white/90">
          <a
            href="#drop"
            className="hover:text-red-500 transition-colors py-1 relative group"
          >
            DROP
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="#collection"
            className="hover:text-red-500 transition-colors py-1 relative group"
          >
            COLLECTION
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="#lookbook"
            className="hover:text-red-500 transition-colors py-1 relative group"
          >
            LOOKBOOK
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="#our-story"
            className="hover:text-red-500 transition-colors py-1 relative group"
          >
            OUR STORY
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
          </a>

          {/* More Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              onMouseEnter={() => setIsMoreOpen(true)}
              className="flex items-center gap-1 hover:text-red-500 transition-colors py-1 uppercase font-mono text-xs font-bold cursor-pointer"
            >
              MORE
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isMoreOpen ? "rotate-180 text-red-500" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isMoreOpen && (
              <div
                onMouseLeave={() => setIsMoreOpen(false)}
                className="absolute top-full left-0 mt-2 w-48 bg-black/95 border border-zinc-800 shadow-2xl py-2 flex flex-col font-mono text-xs tracking-widest backdrop-blur-lg"
              >
                <a
                  href="#collaboration"
                  className="px-4 py-2.5 hover:bg-red-600 hover:text-white transition-colors uppercase"
                >
                  COLLABORATION
                </a>
                <a
                  href="/reviews"
                  className="px-4 py-2.5 hover:bg-red-600 hover:text-white transition-colors uppercase font-bold text-red-500 hover:text-white"
                >
                  REVIEW
                </a>
                <a
                  href="/faq"
                  className="px-4 py-2.5 hover:bg-red-600 hover:text-white transition-colors uppercase font-bold text-red-500 hover:text-white"
                >
                  FAQ
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Right Side Action Icons (exact icons matching screenshot) */}
        <div className="flex items-center gap-5 text-white">
          {/* Search Icon */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Search"
            className="hover:text-red-500 transition-colors p-1 cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Wishlist Heart Icon */}
          <a
            href="#wishlist"
            aria-label="Wishlist"
            className="hover:text-red-500 transition-colors p-1 relative"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </a>

          {/* Cart Bag Icon */}
          <a
            href="#cart"
            aria-label="Cart"
            className="hover:text-red-500 transition-colors p-1 relative"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span className="absolute -top-1 -right-1 bg-red-600 text-white font-mono text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              1
            </span>
          </a>

          {/* User Account Icon */}
          <a
            href="#account"
            aria-label="User Account"
            className="hover:text-red-500 transition-colors p-1"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </a>
        </div>
      </nav>

      {/* Expandable Search Input Bar */}
      {isSearchOpen && (
        <div className="w-full bg-black/95 border-b border-zinc-800 px-6 py-3 flex items-center justify-between gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <input
            type="text"
            placeholder="SEARCH THE_ORIGIN_DROP..."
            autoFocus
            className="w-full bg-zinc-900 border border-zinc-700 text-white font-mono text-xs px-4 py-2 rounded focus:outline-none focus:border-red-500 placeholder-zinc-500"
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="text-zinc-400 hover:text-white font-mono text-xs uppercase"
          >
            [CLOSE]
          </button>
        </div>
      )}
    </header>
  );
}
