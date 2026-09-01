"use client";

import React, { useState } from "react";
import Navbar from "@/src/component/Navbar";
import Footer from "@/src/component/Footer";
import Link from "next/link";
import { useParams } from "next/navigation";

interface ProductDetail {
  slug: string;
  name: string;
  category: string;
  colorway: string;
  price: string;
  originalPrice?: string;
  inStock: boolean;
  images: string[];
  description: string[];
  sizes: string[];
  sku: string;
}

export default function ProductDetailPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "bushido-tee";

  // Product Database Map
  const productData: Record<string, ProductDetail> = {
    "bushido-tee": {
      slug: "bushido-tee",
      name: "BUSHIDO TEE",
      category: "DROP / BUSHIDO TEE",
      colorway: "COLORWAY: SAND / EARTH",
      price: "A$39.99",
      inStock: true,
      images: [
        "/images/ethos-2.jpg",
        "/images/ethos-1.jpg",
        "/images/ethos-3.jpg",
        "/images/about-banner.jpg",
        "/images/ethos-4.jpg",
      ],
      description: [
        "Discipline forged in silence. Every stitch a vow.",
        "240gsm heavyweight cotton.",
        "Oversized fit. Garment washed.",
        "Anime graphic screenprint.",
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      sku: "SKU: ZNJ-BSH-001",
    },
    "blue-flame-tee": {
      slug: "blue-flame-tee",
      name: "BLUE FLAME TEE",
      category: "DROP / BLUE FLAME TEE",
      colorway: "COLORWAY: COBALT / BLUE",
      price: "A$33.99",
      originalPrice: "A$39.99",
      inStock: true,
      images: [
        "/images/ethos-1.jpg",
        "/images/ethos-2.jpg",
        "/images/ethos-3.jpg",
        "/images/ethos-4.jpg",
        "/images/hero-bg.jpg",
      ],
      description: [
        "Awaken the blue flame within.",
        "240gsm heavyweight cotton.",
        "Drop-shoulder oversized silhouette.",
        "High-density anime graphic screenprint.",
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      sku: "SKU: ZNJ-BLF-002",
    },
    "demon-blood-tee": {
      slug: "demon-blood-tee",
      name: "DEMON BLOOD TEE",
      category: "DROP / DEMON BLOOD TEE",
      colorway: "COLORWAY: SAKURA / PINK",
      price: "A$33.99",
      originalPrice: "A$39.99",
      inStock: true,
      images: [
        "/images/ethos-3.jpg",
        "/images/ethos-4.jpg",
        "/images/ethos-1.jpg",
        "/images/about-banner.jpg",
        "/images/ethos-2.jpg",
      ],
      description: [
        "Bloodline unleashed. Kanji backprint illustration.",
        "260gsm premium combed cotton.",
        "Streetwear boxy fit.",
        "Custom woven neck tag.",
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      sku: "SKU: ZNJ-DMB-003",
    },
  };

  // Fallback to default product if slug not found
  const product = productData[slug] || {
    slug: slug,
    name: slug.replace(/-/g, " ").toUpperCase(),
    category: `DROP / ${slug.replace(/-/g, " ").toUpperCase()}`,
    colorway: "COLORWAY: MONOCHROME / BLACK",
    price: "A$39.99",
    inStock: true,
    images: [
      "/images/ethos-2.jpg",
      "/images/ethos-1.jpg",
      "/images/ethos-3.jpg",
      "/images/ethos-4.jpg",
      "/images/about-banner.jpg",
    ],
    description: [
      "Discipline forged in silence. Every stitch a vow.",
      "240gsm heavyweight cotton.",
      "Oversized fit. Garment washed.",
      "Anime graphic screenprint.",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    sku: `SKU: ZNJ-${slug.substring(0, 3).toUpperCase()}-001`,
  };

  // Interactive States
  const [activeImage, setActiveImage] = useState<string>(product.images[0]);
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [isWishlist, setIsWishlist] = useState<boolean>(false);
  const [cartToast, setCartToast] = useState<boolean>(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (name: string) => {
    setOpenAccordion(openAccordion === name ? null : name);
  };

  const handleAddToCart = () => {
    setCartToast(true);
    const current = parseInt(localStorage.getItem("zenji_cart_count") || "0", 10);
    const newCount = current + 1;
    localStorage.setItem("zenji_cart_count", newCount.toString());

    window.dispatchEvent(
      new CustomEvent("zenji_cart_item_added", {
        detail: {
          id: product.slug,
          name: product.name,
          size: selectedSize,
          price: 39.99,
          image: activeImage,
        },
      })
    );
    window.dispatchEvent(new Event("zenji_cart_updated"));
    window.dispatchEvent(new Event("zenji_open_cart"));

    setTimeout(() => setCartToast(false), 3000);
  };

  const toggleWishlist = () => {
    const nextState = !isWishlist;
    setIsWishlist(nextState);

    try {
      const stored = localStorage.getItem("zenji_wishlist_items");
      let items: any[] = stored ? JSON.parse(stored) : [];

      if (nextState) {
        if (!items.some((i) => i.id === product.slug)) {
          items.push({
            id: product.slug,
            name: product.name,
            price: product.price,
            image: activeImage,
            slug: product.slug,
          });
        }
      } else {
        items = items.filter((i) => i.id !== product.slug);
      }

      localStorage.setItem("zenji_wishlist_items", JSON.stringify(items));
      window.dispatchEvent(new Event("zenji_wishlist_updated"));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="min-h-screen bg-white text-black font-sans relative overflow-x-hidden selection:bg-red-600 selection:text-white pt-24 pb-20">
      {/* Top Navbar */}
      <Navbar />

      {/* Added to Cart Notification Popup */}
      {cartToast && (
        <div className="fixed bottom-8 right-8 z-50 bg-black text-white font-mono text-xs px-6 py-3.5 shadow-2xl border border-zinc-700 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
          <span className="font-bold uppercase tracking-wider">
            ✓ {product.name} ({selectedSize}) ADDED TO CART
          </span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-8 space-y-8">
        {/* Top Back Button Link */}
        <div>
          <Link
            href="/collection"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold text-zinc-500 hover:text-black transition-colors uppercase tracking-widest"
          >
            <span>← BACK</span>
          </Link>
        </div>

        {/* Main Product Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Image Gallery (Spans 7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Big Image View */}
            <div className="relative aspect-[3/4] w-full bg-zinc-100 overflow-hidden border border-zinc-200 group">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* 5 Thumbnails Row */}
            <div className="grid grid-cols-5 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`aspect-square w-full overflow-hidden border-2 transition-all cursor-pointer bg-zinc-100 ${
                    activeImage === img
                      ? "border-black scale-95 shadow-md"
                      : "border-zinc-200 hover:border-zinc-400 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Product Details & Purchase Form (Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-6 pt-2">
            {/* Category Breadcrumb */}
            <p className="text-zinc-400 font-mono text-xs font-bold tracking-widest uppercase">
              {product.category}
            </p>

            {/* Product Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-sans tracking-tight text-black uppercase leading-none">
              {product.name}
            </h1>

            {/* Colorway Subtitle */}
            <p className="text-zinc-500 font-mono text-xs tracking-wider uppercase font-medium">
              {product.colorway}
            </p>

            {/* Price Row */}
            <div className="flex items-center gap-3 font-mono">
              <span className="text-3xl font-black text-black">
                {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-zinc-400 line-through text-lg font-medium">
                  {product.originalPrice}
                </span>
              )}
            </div>

            {/* In Stock Indicator */}
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-zinc-700 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>IN STOCK</span>
            </div>

            {/* Select Size Section */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono font-bold text-black uppercase tracking-wider block">
                SELECT SIZE
              </span>

              <div className="grid grid-cols-6 gap-2 font-mono text-xs font-bold">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 border transition-all cursor-pointer text-center ${
                      selectedSize === size
                        ? "bg-black text-white border-black shadow-md"
                        : "bg-white text-black border-zinc-300 hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {/* Wishlist Button */}
              <button
                onClick={toggleWishlist}
                className={`py-4 border font-mono text-xs font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  isWishlist
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-white text-black border-black hover:bg-zinc-100"
                }`}
              >
                <svg
                  className={`w-4 h-4 ${
                    isWishlist ? "fill-white" : "fill-none"
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
                <span>{isWishlist ? "WISHLISTED" : "♡ WISHLIST"}</span>
              </button>

              {/* Add To Cart Button */}
              <button
                onClick={handleAddToCart}
                className="py-4 bg-black hover:bg-red-600 text-white font-mono text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-lg active:scale-95 border border-black"
              >
                <span>ADD TO CART</span>
                <span>→</span>
              </button>
            </div>

            {/* Product Details Section */}
            <div className="pt-6 border-t border-zinc-200 space-y-3">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-black">
                PRODUCT DETAILS
              </h3>

              <div className="space-y-1 font-mono text-xs text-zinc-600 leading-relaxed">
                {product.description.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>

            {/* Collapsible Accordion: Size Guide */}
            <div className="border-t border-zinc-200 pt-4">
              <button
                onClick={() => toggleAccordion("size-guide")}
                className="w-full flex items-center justify-between text-left font-mono text-xs font-bold uppercase tracking-wider text-black py-2 cursor-pointer"
              >
                <span>SIZE GUIDE</span>
                <span className="w-6 h-6 border border-zinc-300 flex items-center justify-center text-sm font-bold">
                  {openAccordion === "size-guide" ? "-" : "+"}
                </span>
              </button>

              {openAccordion === "size-guide" && (
                <div className="pt-3 pb-2 font-mono text-xs text-zinc-600 space-y-2 animate-in fade-in duration-200">
                  <p>Model is 6'0" (183cm) wearing Size L for an oversized streetwear fit.</p>
                  <p>S: Chest 42" | Length 28"</p>
                  <p>M: Chest 44" | Length 29"</p>
                  <p>L: Chest 46" | Length 30"</p>
                  <p>XL: Chest 48" | Length 31"</p>
                </div>
              )}
            </div>

            {/* Collapsible Accordion: Shipping & Returns */}
            <div className="border-t border-zinc-200 pt-4">
              <button
                onClick={() => toggleAccordion("shipping")}
                className="w-full flex items-center justify-between text-left font-mono text-xs font-bold uppercase tracking-wider text-black py-2 cursor-pointer"
              >
                <span>SHIPPING & RETURNS</span>
                <span className="w-6 h-6 border border-zinc-300 flex items-center justify-center text-sm font-bold">
                  {openAccordion === "shipping" ? "-" : "+"}
                </span>
              </button>

              {openAccordion === "shipping" && (
                <div className="pt-3 pb-2 font-mono text-xs text-zinc-600 space-y-2 animate-in fade-in duration-200">
                  <p>Free standard shipping Australia-wide on orders over A$100.</p>
                  <p>Express 2-3 day dispatch available at checkout.</p>
                  <p>All drop purchases are final. Size exchanges accepted within 14 days.</p>
                </div>
              )}
            </div>

            {/* SKU Code at Bottom */}
            <div className="pt-4 text-right font-mono text-[11px] text-zinc-400 uppercase">
              {product.sku}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
