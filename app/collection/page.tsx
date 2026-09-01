"use client";

import React, { useState } from "react";
import Navbar from "@/src/component/Navbar";
import Footer from "@/src/component/Footer";

interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  tag: "ALL" | "SALE" | "NEW_ARRIVAL" | "LIMITED" | "ZANGETSU";
  tagLabel: string;
  image: string;
  secondaryImage?: string;
  badge?: string;
}

export default function CollectionPage() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);
  const [addedPopup, setAddedPopup] = useState<string | null>(null);

  const products: Product[] = [
    {
      id: "1",
      name: "BLUE FLAME TEE",
      price: "$129.00",
      originalPrice: "$149.00",
      tag: "SALE",
      tagLabel: "SALE 15% OFF",
      image: "/images/ethos-1.jpg",
      badge: "SALE 15% OFF",
    },
    {
      id: "2",
      name: "WARRIOR SPIRIT TEE",
      price: "$124.00",
      tag: "NEW_ARRIVAL",
      tagLabel: "NEW ARRIVAL",
      image: "/images/ethos-2.jpg",
      badge: "NEW",
    },
    {
      id: "3",
      name: "DEMON BLOOD TEE",
      price: "$119.00",
      originalPrice: "$139.00",
      tag: "LIMITED",
      tagLabel: "LIMITED DROP",
      image: "/images/ethos-3.jpg",
      badge: "HOT",
    },
    {
      id: "4",
      name: "DOMAIN EXPANSION TEE",
      price: "$139.00",
      tag: "ZANGETSU",
      tagLabel: "ZANGETSU",
      image: "/images/ethos-4.jpg",
      badge: "LIMITED",
    },
    {
      id: "5",
      name: "KATANA OVERSIZED TEE",
      price: "$129.00",
      tag: "NEW_ARRIVAL",
      tagLabel: "NEW ARRIVAL",
      image: "/images/about-banner.jpg",
      badge: "NEW",
    },
    {
      id: "6",
      name: "NEO TOKYO STREET TEE",
      price: "$115.00",
      originalPrice: "$140.00",
      tag: "SALE",
      tagLabel: "SALE 20% OFF",
      image: "/images/hero-bg.jpg",
      badge: "SALE 20% OFF",
    },
    {
      id: "7",
      name: "CYBER SHINOBI HOODIE",
      price: "$189.00",
      tag: "LIMITED",
      tagLabel: "LIMITED DROP",
      image: "/images/ethos-1.jpg",
      badge: "RESTOCK",
    },
    {
      id: "8",
      name: "AKIRA LEGEND TEE",
      price: "$129.00",
      tag: "ZANGETSU",
      tagLabel: "ZANGETSU",
      image: "/images/ethos-2.jpg",
      badge: "POPULAR",
    },
    {
      id: "9",
      name: "SHADOW NINJA TEE",
      price: "$120.00",
      tag: "NEW_ARRIVAL",
      tagLabel: "NEW ARRIVAL",
      image: "/images/ethos-3.jpg",
      badge: "NEW",
    },
    {
      id: "10",
      name: "VALKYRIE ANIME TEE",
      price: "$135.00",
      originalPrice: "$150.00",
      tag: "SALE",
      tagLabel: "SALE 10% OFF",
      image: "/images/ethos-4.jpg",
      badge: "SALE 10% OFF",
    },
    {
      id: "11",
      name: "MECHA PROTOCOL TEE",
      price: "$125.00",
      tag: "LIMITED",
      tagLabel: "LIMITED DROP",
      image: "/images/about-banner.jpg",
      badge: "RARE",
    },
    {
      id: "12",
      name: "RONIN ZERO OVERSIZED TEE",
      price: "$149.00",
      tag: "ZANGETSU",
      tagLabel: "ZANGETSU",
      image: "/images/hero-bg.jpg",
      badge: "ZANGETSU",
    },
  ];

  const filterTags = ["ALL", "SALE", "NEW_ARRIVAL", "LIMITED", "ZANGETSU"];

  const toggleWishlist = (id: string, name?: string, price?: string, image?: string) => {
    let nextWishlist: string[];
    if (wishlist.includes(id)) {
      nextWishlist = wishlist.filter((item) => item !== id);
    } else {
      nextWishlist = [...wishlist, id];
    }
    setWishlist(nextWishlist);

    try {
      const stored = localStorage.getItem("zenji_wishlist_items");
      let items: any[] = stored ? JSON.parse(stored) : [];

      if (nextWishlist.includes(id)) {
        if (!items.some((i) => i.id === id)) {
          items.push({
            id: id,
            name: name || "ZENJI ANIME TEE",
            price: price || "$129.00",
            image: image || "/images/ethos-1.jpg",
            slug: "bushido-tee",
          });
        }
      } else {
        items = items.filter((i) => i.id !== id);
      }

      localStorage.setItem("zenji_wishlist_items", JSON.stringify(items));
      window.dispatchEvent(new Event("zenji_wishlist_updated"));
    } catch (e) {
      console.error(e);
    }
  };

  const handleAddToCart = (productName: string) => {
    setCartCount((prev) => prev + 1);
    const current = parseInt(localStorage.getItem("zenji_cart_count") || "0", 10);
    const newCount = current + 1;
    localStorage.setItem("zenji_cart_count", newCount.toString());

    window.dispatchEvent(
      new CustomEvent("zenji_cart_item_added", {
        detail: {
          id: "bushido-tee",
          name: productName,
          size: "L",
          price: 39.99,
          image: "/images/ethos-2.jpg",
        },
      })
    );
    window.dispatchEvent(new Event("zenji_cart_updated"));
    window.dispatchEvent(new Event("zenji_open_cart"));

    setAddedPopup(productName);
    setTimeout(() => setAddedPopup(null), 3000);
  };

  const filteredProducts = products.filter((p) => {
    const matchesFilter =
      activeFilter === "ALL" ? true : p.tag === activeFilter;
    const matchesSearch = p.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-black text-white relative font-mono overflow-x-hidden selection:bg-red-600 selection:text-white pt-24 pb-20">
      {/* Top Navbar */}
      <Navbar />

      {/* Added to Cart Notification Toast */}
      {addedPopup && (
        <div className="fixed bottom-8 right-8 z-50 bg-red-600 text-white font-mono text-xs px-5 py-3 shadow-2xl border border-red-400 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <span className="font-bold">✓ {addedPopup} ADDED TO CART</span>
        </div>
      )}

      {/* 1. Page Hero Banner Section */}
      <section className="relative w-full bg-black border-b border-zinc-900 px-6 sm:px-12 py-12 lg:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8 relative z-10">
          {/* Left Text Header */}
          <div className="space-y-3">
            <p className="text-red-600 font-mono text-xs font-bold tracking-[0.25em] uppercase">
              THE_ORIGIN_DROP // COMPLETE ARCHIVE
            </p>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-sans tracking-tight text-white uppercase leading-none">
              ANIME GRAPHIC TEES –
              <br />
              THE FULL COLLECTION
            </h1>

            <p className="text-zinc-400 text-xs sm:text-sm tracking-widest font-mono pt-1">
              Every drop. Every arc. Documented.
            </p>

            <div className="pt-4 text-[11px] text-zinc-500 tracking-widest uppercase font-mono">
              12 PIECES // THE_ORIGIN_DROP // EST_2026
            </div>
          </div>

          {/* Right Watermark Number */}
          <div className="hidden md:block select-none opacity-20 text-right">
            <span className="text-8xl lg:text-9xl font-black font-mono tracking-tighter text-zinc-600 leading-none">
              12
            </span>
          </div>
        </div>
      </section>

      {/* 2. Filter & Controls Bar */}
      <section className="w-full bg-black border-b border-zinc-900 px-6 sm:px-12 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-4 py-1.5 text-xs font-mono font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer border ${
                  activeFilter === tag
                    ? "bg-white text-black border-white shadow-md"
                    : "bg-black text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-white"
                }`}
              >
                {tag.replace("_", " ")}
              </button>
            ))}
          </div>

          {/* Right Search Input & Count */}
          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
            <div className="relative flex-1 sm:flex-none">
              <input
                type="text"
                placeholder="SEARCH..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-zinc-950 border border-zinc-800 text-white font-mono text-xs px-3 py-1.5 w-full sm:w-44 focus:outline-none focus:border-red-600 placeholder-zinc-600"
              />
            </div>
            <span className="text-xs font-mono text-zinc-500 font-bold uppercase tracking-wider whitespace-nowrap">
              {filteredProducts.length} ITEMS
            </span>
          </div>
        </div>
      </section>

      {/* 3. Products Grid (12 Animated Cards) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.map((product, index) => {
            const isSaved = wishlist.includes(product.id);
            return (
              <div
                key={product.id}
                className="group relative bg-zinc-950 border border-zinc-900 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-zinc-700 hover:shadow-2xl animate-in fade-in slide-in-from-bottom-6 duration-500 fill-mode-backwards"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                {/* Image Container with Hover Scale */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* Dark overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Corner Badge Ribbon */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-mono font-bold px-2 py-0.5 uppercase tracking-widest shadow-md">
                      {product.badge}
                    </div>
                  )}

                  {/* Heart Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product.id, product.name, product.price, product.image)}
                    aria-label="Wishlist"
                    className="absolute top-3 right-3 p-2 bg-black/60 backdrop-blur-md rounded-full text-white hover:text-red-500 transition-all cursor-pointer hover:scale-110 active:scale-95"
                  >
                    <svg
                      className={`w-4 h-4 ${
                        isSaved ? "fill-red-600 text-red-600" : "fill-none"
                      }`}
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
                  </button>

                  {/* Hover Quick Add Button */}
                  <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                    <button
                      onClick={() => handleAddToCart(product.name)}
                      className="w-full bg-white hover:bg-red-600 text-black hover:text-white font-mono text-xs font-bold py-2.5 uppercase tracking-widest transition-colors shadow-xl cursor-pointer"
                    >
                      QUICK ADD +
                    </button>
                  </div>
                </div>

                {/* Card Bottom Meta */}
                <div className="p-4 space-y-2 border-t border-zinc-900 bg-black">
                  <a href="/drop/bushido-tee" className="block">
                    <h3 className="font-mono font-bold text-xs text-white uppercase tracking-wider group-hover:text-red-500 transition-colors">
                      {product.name}
                    </h3>
                  </a>

                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="font-bold text-white">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-zinc-600 line-through text-[11px]">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
