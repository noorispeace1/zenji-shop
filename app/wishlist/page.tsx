"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/src/component/Navbar";
import Footer from "@/src/component/Footer";
import Link from "next/link";

interface WishlistItem {
  id: string;
  name: string;
  price: string;
  image: string;
  badge?: string;
  slug: string;
}

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

  useEffect(() => {
    const loadWishlist = () => {
      try {
        const stored = localStorage.getItem("zenji_wishlist_items");
        if (stored) {
          setWishlistItems(JSON.parse(stored));
        } else {
          setWishlistItems([]);
        }
      } catch (e) {
        console.error("Failed to parse wishlist items", e);
      }
    };

    loadWishlist();

    window.addEventListener("zenji_wishlist_updated", loadWishlist);
    window.addEventListener("storage", loadWishlist);
    return () => {
      window.removeEventListener("zenji_wishlist_updated", loadWishlist);
      window.removeEventListener("storage", loadWishlist);
    };
  }, []);

  const removeItem = (id: string) => {
    const updated = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(updated);
    localStorage.setItem("zenji_wishlist_items", JSON.stringify(updated));
    window.dispatchEvent(new Event("zenji_wishlist_updated"));
  };

  return (
    <main className="min-h-screen bg-black text-white relative font-sans overflow-x-hidden selection:bg-red-600 selection:text-white">
      {/* Top Fixed Navbar */}
      <Navbar />

      {/* 1. Top Hero Section - Dark Background */}
      <section className="bg-black text-white pt-32 pb-16 px-6 sm:px-12 lg:px-20 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto space-y-4">
          <p className="text-red-600 font-mono text-xs font-bold tracking-[0.25em] uppercase">
            SAVED // THIS DEVICE
          </p>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase text-white font-sans select-none">
            WISHLIST
          </h1>

          <p className="text-zinc-400 font-mono text-xs max-w-xl leading-relaxed">
            Saved on this device only. Log in and these move to your account, so they follow you everywhere.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-6">
            <Link
              href="#account"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold text-white border-b border-white hover:text-red-500 hover:border-red-500 transition-colors uppercase cursor-pointer pb-0.5 tracking-wider"
            >
              <span>LOG IN TO KEEP THEM</span>
              <span>→</span>
            </Link>

            {wishlistItems.length > 0 && (
              <span className="font-mono text-xs text-red-500 font-bold uppercase tracking-wider">
                {wishlistItems.length} SAVED PIECES
              </span>
            )}
          </div>
        </div>
      </section>

      {/* 2. Main Content Section - White Background */}
      <section className="bg-white text-black py-16 sm:py-24 px-6 sm:px-12 min-h-[50vh]">
        {wishlistItems.length === 0 ? (
          /* Empty State Section matching screenshot */
          <div className="max-w-md mx-auto space-y-6 text-center py-12 relative">
            <div className="relative inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-sans tracking-tight uppercase text-black">
                NO SAVED PIECES YET
              </h2>

              <div className="absolute -top-6 -right-12 sm:-right-16 transform rotate-12 opacity-80 select-none pointer-events-none">
                <svg
                  className="w-12 h-12 text-black"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                >
                  <path d="M15 85 L85 15 L80 10 L10 80 Z" />
                  <path d="M85 15 L95 5 L90 0 L80 10 Z" fill="#d30000" />
                  <path d="M10 80 L5 90 L10 95 L20 85 Z" fill="#333" />
                </svg>
              </div>
            </div>

            <p className="text-zinc-500 font-mono text-xs font-bold tracking-[0.2em] uppercase">
              TAP THE HEART ON ANY PIECE TO SAVE IT
            </p>

            <div className="pt-4">
              <Link
                href="/collection"
                className="inline-flex items-center gap-2 border border-black bg-white hover:bg-black text-black hover:text-white px-7 py-3 font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
              >
                <span>BROWSE THE COLLECTION</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        ) : (
          /* Wishlist Grid of Saved Items */
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-zinc-900 border border-zinc-200 overflow-hidden flex flex-col justify-between shadow-lg"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-zinc-950">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Remove Wishlist Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      aria-label="Remove from wishlist"
                      className="absolute top-3 right-3 bg-red-600 text-white p-2 rounded-full hover:bg-black transition-colors cursor-pointer shadow-md"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </button>
                  </div>

                  <div className="p-4 bg-white border-t border-zinc-200 font-mono text-xs flex flex-col space-y-3">
                    <div className="flex justify-between items-start">
                      <span className="font-bold text-black uppercase">{item.name}</span>
                      <span className="font-black text-red-600">{item.price}</span>
                    </div>

                    <Link
                      href={`/drop/${item.slug || "bushido-tee"}`}
                      className="w-full bg-black hover:bg-red-600 text-white font-mono text-xs font-bold py-2.5 uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>VIEW DROP</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 3. Footer */}
      <Footer />
    </main>
  );
}
