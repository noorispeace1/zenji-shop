"use client";

import React, { useState, useRef, useEffect } from "react";
import MarqueeBanner from "./MarqueeBanner";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const toggleSearch = () => {
    const nextState = !isSearchOpen;
    setIsSearchOpen(nextState);
    if (nextState) {
      setTimeout(() => searchInputRef.current?.focus(), 150);
    }
  };

  // Sync cart count & wishlist count from localStorage & event listeners
  useEffect(() => {
    const checkCount = () => {
      try {
        const storedItems = localStorage.getItem("zenji_cart_items_data");
        if (storedItems) {
          const items = JSON.parse(storedItems);
          const total = items.reduce((acc: number, item: any) => acc + (item.quantity || 1), 0);
          setCartCount(total);
        } else {
          setCartCount(0);
        }
      } catch (e) {
        setCartCount(0);
      }

      try {
        const storedWishlist = localStorage.getItem("zenji_wishlist_items");
        if (storedWishlist) {
          const parsed = JSON.parse(storedWishlist);
          setWishlistCount(parsed.length);
        } else {
          setWishlistCount(0);
        }
      } catch (e) {
        setWishlistCount(0);
      }
    };

    checkCount();

    const handleCartEvent = () => checkCount();
    const handleOpenCart = () => setIsCartOpen(true);

    window.addEventListener("zenji_cart_updated", handleCartEvent);
    window.addEventListener("zenji_wishlist_updated", handleCartEvent);
    window.addEventListener("zenji_open_cart", handleOpenCart);
    window.addEventListener("storage", handleCartEvent);

    return () => {
      window.removeEventListener("zenji_cart_updated", handleCartEvent);
      window.removeEventListener("zenji_wishlist_updated", handleCartEvent);
      window.removeEventListener("zenji_open_cart", handleOpenCart);
      window.removeEventListener("storage", handleCartEvent);
    };
  }, []);

  // Close search input when clicking anywhere outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            href="/drop"
            className="hover:text-red-500 transition-colors py-1 relative group"
          >
            DROP
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="/collection"
            className="hover:text-red-500 transition-colors py-1 relative group"
          >
            COLLECTION
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="/lookbook"
            className="hover:text-red-500 transition-colors py-1 relative group"
          >
            LOOKBOOK
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="/our-story"
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
                  href="/collaboration"
                  className="px-4 py-2.5 hover:bg-red-600 hover:text-white transition-colors uppercase font-bold text-red-500 hover:text-white"
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
        <div className="flex items-center gap-3 sm:gap-4 text-white">
          {/* Animated Expanding Search Input Field */}
          <div ref={searchContainerRef} className="flex items-center relative">
            <div
              className={`transition-all duration-300 ease-out overflow-hidden flex items-center ${
                isSearchOpen
                  ? "w-36 sm:w-52 opacity-100 mr-2"
                  : "w-0 opacity-0 mr-0 pointer-events-none"
              }`}
            >
              <input
                ref={searchInputRef}
                type="text"
                placeholder="SEARCH..."
                onKeyDown={(e) => {
                  if (e.key === "Escape") setIsSearchOpen(false);
                }}
                className="w-full bg-black/90 border border-white/80 text-white font-mono text-xs tracking-wider px-3 py-1.5 focus:outline-none focus:border-red-500 placeholder-zinc-400 rounded-none shadow-inner"
              />
            </div>

            <button
              onClick={toggleSearch}
              aria-label="Search"
              className="hover:text-red-500 transition-colors p-1 cursor-pointer flex items-center justify-center"
            >
              <svg
                className={`w-5 h-5 transition-all duration-300 ${
                  isSearchOpen ? "text-red-500 scale-110" : ""
                }`}
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
          </div>

          {/* Wishlist Heart Icon */}
          <a
            href="/wishlist"
            aria-label="Wishlist"
            className="hover:text-red-500 transition-colors p-1 relative"
          >
            <svg
              className="w-5 h-5"
              fill={wishlistCount > 0 ? "#EF4444" : "none"}
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
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white font-mono text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-in zoom-in duration-200">
                {wishlistCount}
              </span>
            )}
          </a>

          {/* Cart Bag Icon Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Cart"
            className="hover:text-red-500 transition-colors p-1 relative cursor-pointer"
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
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white font-mono text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-in zoom-in duration-200">
                {cartCount}
              </span>
            )}
          </button>

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

          {/* Mobile Hamburger Menu Toggle Button (Visible on < lg screens) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="lg:hidden hover:text-red-500 transition-colors p-1 cursor-pointer ml-1"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Slide-Down Navigation Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden w-full bg-black/95 backdrop-blur-xl border-b border-zinc-800 p-6 flex flex-col justify-between space-y-4 animate-in fade-in slide-in-from-top-4 duration-300 font-mono text-sm tracking-widest uppercase shadow-2xl">
          <div className="flex flex-col space-y-2.5">
            <a
              href="/drop"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 bg-zinc-950 border border-zinc-800 hover:border-red-600 hover:text-red-500 font-bold transition-all flex items-center justify-between"
            >
              <span>DROP</span>
              <span>→</span>
            </a>
            <a
              href="/collection"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 bg-zinc-950 border border-zinc-800 hover:border-red-600 hover:text-red-500 font-bold transition-all flex items-center justify-between"
            >
              <span>COLLECTION</span>
              <span>→</span>
            </a>
            <a
              href="/lookbook"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 bg-zinc-950 border border-zinc-800 hover:border-red-600 hover:text-red-500 font-bold transition-all flex items-center justify-between"
            >
              <span>LOOKBOOK</span>
              <span>→</span>
            </a>
            <a
              href="/our-story"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 bg-zinc-950 border border-zinc-800 hover:border-red-600 hover:text-red-500 font-bold transition-all flex items-center justify-between"
            >
              <span>OUR STORY</span>
              <span>→</span>
            </a>
            <a
              href="/collaboration"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 bg-zinc-950 border border-zinc-800 hover:border-red-600 text-red-500 font-bold transition-all flex items-center justify-between"
            >
              <span>COLLABORATION</span>
              <span>→</span>
            </a>
            <a
              href="/reviews"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 bg-zinc-950 border border-zinc-800 hover:border-red-600 text-red-500 font-bold transition-all flex items-center justify-between"
            >
              <span>REVIEWS</span>
              <span>→</span>
            </a>
            <a
              href="/faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 bg-zinc-950 border border-zinc-800 hover:border-red-600 text-red-500 font-bold transition-all flex items-center justify-between"
            >
              <span>FAQ</span>
              <span>→</span>
            </a>
          </div>

          <div className="pt-4 border-t border-zinc-900 flex items-center justify-between text-[11px] text-zinc-500 uppercase font-bold">
            <span>ZENJI // AWAKENING</span>
            <span>NO RESTOCKS. EVER.</span>
          </div>
        </div>
      )}

      {/* Cart Drawer Slide-over Modal matching screenshot */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}
