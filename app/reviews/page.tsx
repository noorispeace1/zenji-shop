"use client";

import React, { useState } from "react";
import Navbar from "@/src/component/Navbar";

interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  product: string;
  orderNumber: string;
  isVerified: boolean;
  tags: string[];
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: "1",
      name: "KENJI M.",
      rating: 5,
      date: "2026-08-28",
      title: "INSANE GRAPHIC PRINT & HEAVYWEIGHT COTTON",
      comment:
        "The Blue Flame Tee exceeded my expectations. The anime print is super crisp and doesn't fade after washing. True oversized fit!",
      product: "BLUE FLAME TEE",
      orderNumber: "ZS-892104",
      isVerified: true,
      tags: ["TRUE TO SIZE", "PREMIUM QUALITY", "FAST SHIPPING"],
    },
    {
      id: "2",
      name: "SARAH T.",
      rating: 5,
      date: "2026-08-20",
      title: "BEST STREETWEAR DROP OF THE YEAR",
      comment:
        "Quality is top tier. Thick collar, heavy drop-shoulder silhouette. Got compliments the very first day I wore it.",
      product: "ORIGIN SAMURAI HOODIE",
      orderNumber: "ZS-774912",
      isVerified: true,
      tags: ["GREAT PACKAGING", "WORTH THE WAIT"],
    },
    {
      id: "3",
      name: "ALEX R.",
      rating: 4,
      date: "2026-08-15",
      title: "GREAT SILHOUETTE & COMFORT",
      comment:
        "Slightly longer fit than expected, but looks amazing when styled with baggy cargo pants. Delivery took 3 days.",
      product: "WARRIOR SPIRIT PINK TEE",
      orderNumber: "ZS-663819",
      isVerified: true,
      tags: ["RUNS LARGE", "FAST SHIPPING"],
    },
  ]);

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("BLUE FLAME TEE");
  const [orderNumber, setOrderNumber] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filterRating, setFilterRating] = useState<string>("ALL");
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const availableTags = [
    "TRUE TO SIZE",
    "RUNS SMALL",
    "RUNS LARGE",
    "PREMIUM QUALITY",
    "FAST SHIPPING",
    "GREAT PACKAGING",
    "WORTH THE WAIT",
  ];

  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !title || !comment) return;

    const newReview: Review = {
      id: Date.now().toString(),
      name: name.toUpperCase(),
      rating,
      date: new Date().toISOString().split("T")[0],
      title: title.toUpperCase(),
      comment,
      product: product.toUpperCase(),
      orderNumber: orderNumber || "ZS-" + Math.floor(100000 + Math.random() * 900000),
      isVerified: true,
      tags: selectedTags,
    };

    setReviews([newReview, ...reviews]);
    setSubmittedMessage(true);
    setName("");
    setEmail("");
    setOrderNumber("");
    setTitle("");
    setComment("");
    setSelectedTags([]);
    setTimeout(() => setSubmittedMessage(false), 4000);
  };

  const filteredReviews = reviews.filter((rev) => {
    if (filterRating === "ALL") return true;
    if (filterRating === "VERIFIED") return rev.isVerified;
    return rev.rating === parseInt(filterRating);
  });

  const avgRating = (
    reviews.reduce((acc, r) => acc + r.rating, 0) / (reviews.length || 1)
  ).toFixed(1);

  const fiveStarPercentage = Math.round(
    (reviews.filter((r) => r.rating === 5).length / (reviews.length || 1)) * 100
  );

  return (
    <main className="min-h-screen bg-black text-white font-mono selection:bg-red-600 selection:text-white pt-24 pb-20">
      {/* Pinned Navbar */}
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Page Hero Header */}
        <div className="space-y-2 border-b border-zinc-800 pb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black font-mono tracking-tight text-white uppercase">
            REVIEWS
          </h1>
          <p className="text-red-600 font-mono text-xs sm:text-sm font-bold tracking-widest uppercase">
            WHAT THE COMMUNITY SAYS
          </p>
        </div>

        {/* Rating Summary & Statistics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Rating Score & Breakdown */}
          <div className="lg:col-span-7 bg-zinc-950 border border-zinc-800 p-6 sm:p-8 rounded-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 justify-between border-b border-zinc-800 pb-6">
              <div>
                <span className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                  {avgRating}
                </span>
                <span className="text-zinc-500 text-sm font-bold ml-2 uppercase">
                  OUT OF 5
                </span>
                <div className="flex items-center gap-1 mt-2 text-red-600">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-xl">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-xs text-zinc-400 font-medium">
                Based on <strong className="text-white">{reviews.length}</strong> published reviews
              </div>
            </div>

            {/* Rating Star Bars */}
            <div className="space-y-2 text-xs text-zinc-400">
              {[5, 4, 3, 2, 1].map((stars) => {
                const count = reviews.filter((r) => r.rating === stars).length;
                const percent = Math.round((count / (reviews.length || 1)) * 100);
                return (
                  <div key={stars} className="flex items-center gap-3">
                    <span className="w-6 text-right font-bold">{stars}★</span>
                    <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-red-600 rounded-full transition-all duration-300"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                    <span className="w-10 text-right font-bold text-zinc-300">
                      {percent}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right 2x2 Stat Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-zinc-950 border border-zinc-800 p-5 rounded-sm flex flex-col justify-between">
              <span className="text-3xl font-black text-white">{reviews.length}</span>
              <span className="text-[10px] sm:text-xs text-zinc-500 font-bold tracking-widest uppercase mt-2">
                PUBLISHED REVIEWS
              </span>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 p-5 rounded-sm flex flex-col justify-between">
              <span className="text-3xl font-black text-white">{avgRating}</span>
              <span className="text-[10px] sm:text-xs text-zinc-500 font-bold tracking-widest uppercase mt-2">
                AVERAGE RATING
              </span>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 p-5 rounded-sm flex flex-col justify-between">
              <span className="text-3xl font-black text-white">{fiveStarPercentage}%</span>
              <span className="text-[10px] sm:text-xs text-zinc-500 font-bold tracking-widest uppercase mt-2">
                FIVE STAR
              </span>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 p-5 rounded-sm flex flex-col justify-between">
              <span className="text-3xl font-black text-white">98%</span>
              <span className="text-[10px] sm:text-xs text-zinc-500 font-bold tracking-widest uppercase mt-2">
                RECOMMENDED
              </span>
            </div>
          </div>
        </div>

        {/* Filter & Sort Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
          <div className="flex flex-wrap items-center gap-2">
            {["ALL", "5★", "4★", "3★", "VERIFIED"].map((f) => (
              <button
                key={f}
                onClick={() => setFilterRating(f === "5★" ? "5" : f === "4★" ? "4" : f === "3★" ? "3" : f)}
                className={`px-4 py-1.5 text-xs font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer border ${
                  filterRating === (f === "5★" ? "5" : f === "4★" ? "4" : f === "3★" ? "3" : f)
                    ? "bg-white text-black border-white"
                    : "bg-black text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="text-xs text-zinc-500 font-bold tracking-widest uppercase">
            SHOWING {filteredReviews.length} OF {reviews.length}
          </div>
        </div>

        {/* Reviews List Display */}
        <div className="space-y-4">
          {filteredReviews.length === 0 ? (
            <div className="p-8 text-center border border-zinc-800 bg-zinc-950 text-zinc-500 text-xs tracking-widest uppercase">
              No reviews match the selected filter.
            </div>
          ) : (
            filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-zinc-950 border border-zinc-800 p-6 rounded-sm space-y-3 transition-all hover:border-zinc-700"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="font-black text-white text-sm tracking-wider">
                      {rev.name}
                    </span>
                    {rev.isVerified && (
                      <span className="bg-red-950/80 text-red-500 border border-red-800/80 text-[10px] font-bold px-2 py-0.5 rounded tracking-widest uppercase">
                        VERIFIED BUYER
                      </span>
                    )}
                  </div>
                  <span className="text-zinc-500 text-xs font-mono">{rev.date}</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex text-red-600 text-sm">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={i < rev.rating ? "text-red-600" : "text-zinc-700"}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-zinc-300 uppercase tracking-wide">
                    {rev.product} ({rev.orderNumber})
                  </span>
                </div>

                <h3 className="font-bold text-white text-sm tracking-wide uppercase">
                  {rev.title}
                </h3>

                <p className="text-zinc-300 text-xs leading-relaxed font-sans">
                  {rev.comment}
                </p>

                {rev.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {rev.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="bg-zinc-900 text-zinc-400 border border-zinc-800 text-[10px] px-2 py-0.5 uppercase tracking-wider font-bold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* LEAVE YOUR VERDICT Form (Exact matching screenshot red outline box!) */}
        <div className="border-2 border-red-600 rounded-sm p-6 sm:p-10 bg-black/90 space-y-6 shadow-[0_0_30px_rgba(211,0,0,0.15)] relative">
          <div className="space-y-1">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase">
              LEAVE YOUR VERDICT
            </h2>
            <p className="text-zinc-500 text-xs font-bold tracking-widest uppercase">
              VERIFIED PURCHASES ONLY
            </p>
          </div>

          {submittedMessage && (
            <div className="bg-red-600/20 border border-red-500 text-red-400 p-4 text-xs font-bold tracking-widest uppercase rounded">
              ✔ THANK YOU! YOUR VERDICT HAS BEEN SUBMITTED SUCCESSFULLY.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 text-xs font-mono">
            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-zinc-400 font-bold uppercase tracking-wider block">
                  NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="FIRST L."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-black border border-zinc-800 text-white p-3 rounded-sm focus:outline-none focus:border-red-600 placeholder-zinc-700 font-mono text-xs uppercase"
                />
              </div>

              <div className="space-y-2">
                <label className="text-zinc-400 font-bold uppercase tracking-wider block">
                  EMAIL
                </label>
                <input
                  type="email"
                  required
                  placeholder="YOU@EMAIL.COM"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black border border-zinc-800 text-white p-3 rounded-sm focus:outline-none focus:border-red-600 placeholder-zinc-700 font-mono text-xs"
                />
              </div>
            </div>

            {/* Product Purchased & Order Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-zinc-400 font-bold uppercase tracking-wider block">
                  PRODUCT PURCHASED
                </label>
                <select
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full bg-black border border-zinc-800 text-white p-3 rounded-sm focus:outline-none focus:border-red-600 font-mono text-xs uppercase cursor-pointer"
                >
                  <option value="BLUE FLAME TEE">BLUE FLAME TEE</option>
                  <option value="ORIGIN SAMURAI HOODIE">ORIGIN SAMURAI HOODIE</option>
                  <option value="WARRIOR SPIRIT PINK TEE">WARRIOR SPIRIT PINK TEE</option>
                  <option value="TEAL KATANA OVERSIZED TEE">TEAL KATANA OVERSIZED TEE</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-zinc-400 font-bold uppercase tracking-wider block">
                  ORDER NUMBER
                </label>
                <input
                  type="text"
                  placeholder="ZS-000000"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  className="w-full bg-black border border-zinc-800 text-white p-3 rounded-sm focus:outline-none focus:border-red-600 placeholder-zinc-700 font-mono text-xs uppercase"
                />
              </div>
            </div>

            {/* Interactive Star Rating */}
            <div className="space-y-2">
              <label className="text-zinc-400 font-bold uppercase tracking-wider block">
                STAR RATING
              </label>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-2xl cursor-pointer">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                      className="p-1 focus:outline-none transition-transform hover:scale-110"
                    >
                      <span
                        className={
                          star <= (hoverRating || rating)
                            ? "text-red-600"
                            : "text-zinc-800"
                        }
                      >
                        ★
                      </span>
                    </button>
                  ))}
                </div>
                <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest ml-2">
                  SELECT A RATING
                </span>
              </div>
            </div>

            {/* Review Title */}
            <div className="space-y-2">
              <label className="text-zinc-400 font-bold uppercase tracking-wider block">
                REVIEW TITLE
              </label>
              <input
                type="text"
                required
                placeholder="SUM IT UP IN A LINE"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-black border border-zinc-800 text-white p-3 rounded-sm focus:outline-none focus:border-red-600 placeholder-zinc-700 font-mono text-xs uppercase"
              />
            </div>

            {/* Your Review Textarea */}
            <div className="space-y-2">
              <label className="text-zinc-400 font-bold uppercase tracking-wider block">
                YOUR REVIEW
              </label>
              <textarea
                rows={4}
                required
                placeholder="FIT, FABRIC, PRINT, SHIPPING - TELL US EVERYTHING."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full bg-black border border-zinc-800 text-white p-3 rounded-sm focus:outline-none focus:border-red-600 placeholder-zinc-700 font-mono text-xs uppercase resize-y"
              />
            </div>

            {/* Optional Tags */}
            <div className="space-y-2">
              <label className="text-zinc-400 font-bold uppercase tracking-wider block">
                TAGS (OPTIONAL)
              </label>
              <div className="flex flex-wrap gap-2">
                {availableTags.map((tag) => {
                  const active = selectedTags.includes(tag);
                  return (
                    <button
                      type="button"
                      key={tag}
                      onClick={() => handleTagToggle(tag)}
                      className={`px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase transition-all border cursor-pointer ${
                        active
                          ? "bg-red-600 text-white border-red-500"
                          : "bg-black text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-white"
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#d30000] hover:bg-red-600 text-white font-mono text-sm font-bold tracking-widest uppercase py-4 rounded-sm transition-all duration-200 shadow-xl cursor-pointer active:scale-[0.99] border border-red-500 flex items-center justify-center gap-2"
            >
              <span>SUBMIT REVIEW</span>
              <span className="text-lg">↵</span>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
