"use client";

import React, { useState, useMemo } from "react";

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  // ORDERS & SHIPPING
  {
    id: "os-1",
    category: "ORDERS & SHIPPING",
    question: "Do you ship Australia-wide?",
    answer:
      "Yes! We deliver to all states and territories across Australia with standard (3-5 business days) and express (1-2 business days) shipping options via Australia Post.",
  },
  {
    id: "os-2",
    category: "ORDERS & SHIPPING",
    question: "Do you ship internationally?",
    answer:
      "Yes! ZENJI ships worldwide. International delivery typically takes 6-12 business days depending on your destination. Shipping fees and estimated custom duties are calculated dynamically at checkout.",
  },
  {
    id: "os-3",
    category: "ORDERS & SHIPPING",
    question: "Can I change or cancel my order?",
    answer:
      "We process orders rapidly to dispatch your gear as quickly as possible. If you need to modify or cancel your order, please email support@zenji.com within 1 hour of placing your order.",
  },
  {
    id: "os-4",
    category: "ORDERS & SHIPPING",
    question: "How do I track my order?",
    answer:
      "Once your order dispatches from our logistics center, you will receive an automated email and SMS notification containing your tracking code and real-time delivery updates.",
  },

  // STOCK & DROPS
  {
    id: "sd-1",
    category: "STOCK & DROPS",
    question: "When does my order ship?",
    answer:
      "In-stock drop items are dispatched within 24–48 hours (Monday through Friday). Pre-order items display estimated shipping timelines directly on their product details page.",
  },
  {
    id: "sd-2",
    category: "STOCK & DROPS",
    question: "Will sold-out items restock?",
    answer:
      "Most ZENJI apparel pieces are limited-edition drops and are never restocked once sold out to maintain strict exclusivity for collectors.",
  },
  {
    id: "sd-3",
    category: "STOCK & DROPS",
    question: "How long does a sale last?",
    answer:
      "Flash drops and promotional sales typically run between 24 to 72 hours, or strictly until allocated drop stock runs out.",
  },

  // PRODUCTS
  {
    id: "pr-1",
    category: "PRODUCTS",
    question: "What sizes do you offer?",
    answer:
      "We offer sizes ranging from Small (S) up to Double Extra Large (2XL). All ZENJI tees and hoodies feature an authentic streetwear oversized drop-shoulder fit.",
  },
  {
    id: "pr-2",
    category: "PRODUCTS",
    question: "Are the designs limited?",
    answer:
      "Yes. Every design graphic is produced in strictly limited quantity batches with custom woven neck tags and authenticity verification stamps.",
  },
  {
    id: "pr-3",
    category: "PRODUCTS",
    question: "How do I care for my ZENJI gear?",
    answer:
      "Machine wash cold inside-out with like colors. Line dry in shade. Do not tumble dry, bleach, or iron directly on printed graphics.",
  },
  {
    id: "pr-4",
    category: "PRODUCTS",
    question: "What material are the tees?",
    answer:
      "Our tees are built from 100% premium 260 GSM heavyweight combed cotton, featuring high-density ribbed collars and reinforced double-stitching.",
  },

  // RETURNS & REFUNDS
  {
    id: "rr-1",
    category: "RETURNS & REFUNDS",
    question: "Do you accept returns?",
    answer:
      "We offer easy 14-day returns for store credit or size exchanges on unworn, unwashed items in original packaging with tags intact.",
  },
  {
    id: "rr-2",
    category: "RETURNS & REFUNDS",
    question: "My item arrived damaged – what do I do?",
    answer:
      "If your order arrives damaged or defective, email photos and your order number to support@zenji.com within 7 days for an immediate priority replacement.",
  },
  {
    id: "rr-3",
    category: "RETURNS & REFUNDS",
    question: "How long do refunds take?",
    answer:
      "Once returned packages are received and inspected at our warehouse, approved refunds or store credit vouchers are issued within 3–5 business days.",
  },

  // BRAND
  {
    id: "br-1",
    category: "BRAND",
    question: "What is ZENJI?",
    answer:
      "ZENJI is an independent dark aesthetic streetwear brand combining Japanese anime mythology, cyberpunk aesthetic, and heavyweight luxury apparel.",
  },
  {
    id: "br-2",
    category: "BRAND",
    question: "Where does ZENJI ship?",
    answer:
      "We ship globally from our main dispatch warehouses located in Sydney, Australia and Tokyo, Japan.",
  },
  {
    id: "br-3",
    category: "BRAND",
    question: "Does ZENJI restock products?",
    answer:
      "Only essential capsule basics are restocked. Drop-exclusive graphic pieces remain permanently vault-locked once sold out.",
  },
  {
    id: "br-4",
    category: "BRAND",
    question: "What anime series does ZENJI draw inspiration from?",
    answer:
      "Our creative team draws inspiration from classic dark fantasy, 90s cyberpunk anime, samurai folklore, and Tokyo street culture.",
  },
  {
    id: "br-5",
    category: "BRAND",
    question: "How much do ZENJI products cost?",
    answer:
      "Graphic tees range from $45 to $65 AUD, hoodies from $95 to $140 AUD, and headwear/accessories start from $25 AUD.",
  },
  {
    id: "br-6",
    category: "BRAND",
    question: "Where is ZENJI based?",
    answer:
      "ZENJI was founded and is headquartered in Australia, working closely with design partners in Tokyo and Sydney.",
  },
  {
    id: "br-7",
    category: "BRAND",
    question: "How do I stay updated on new drops?",
    answer:
      "Join our SMS VIP club or follow @ZENJI_OFFICIAL on Instagram and Discord to receive secret password access before public collection drops.",
  },
  {
    id: "br-8",
    category: "BRAND",
    question: "Can I collaborate with ZENJI?",
    answer:
      "We welcome partnerships with digital artists, streamers, and creators! Reach out with your portfolio to collab@zenji.com.",
  },
];

const CATEGORIES = [
  "ALL",
  "ORDERS & SHIPPING",
  "STOCK & DROPS",
  "PRODUCTS",
  "RETURNS & REFUNDS",
  "BRAND",
];

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [helpfulFeedback, setHelpfulFeedback] = useState<Record<string, "yes" | "no" | null>>({});

  // Toggle single accordion item
  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Expand all visible items
  const expandAll = () => {
    const nextState: Record<string, boolean> = {};
    filteredItems.forEach((item) => {
      nextState[item.id] = true;
    });
    setOpenItems(nextState);
  };

  // Collapse all visible items
  const collapseAll = () => {
    setOpenItems({});
  };

  // Filter items by search query and category
  const filteredItems = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === "ALL" || item.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === "" ||
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Group filtered items by category
  const groupedCategories = useMemo(() => {
    const groups: Record<string, FAQItem[]> = {};
    filteredItems.forEach((item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredItems]);

  const categoryOrder = [
    "ORDERS & SHIPPING",
    "STOCK & DROPS",
    "PRODUCTS",
    "RETURNS & REFUNDS",
    "BRAND",
  ];

  const handleFeedback = (id: string, choice: "yes" | "no") => {
    setHelpfulFeedback((prev) => ({
      ...prev,
      [id]: prev[id] === choice ? null : choice,
    }));
  };

  return (
    <section
      id="faq"
      className="w-full bg-black text-white py-16 sm:py-24 px-4 sm:px-8 lg:px-12 border-t border-zinc-900 relative font-mono overflow-hidden"
    >
      {/* Background Subtle Cyber Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        {/* FAQ Main Title Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 px-3 py-1 rounded text-[11px] tracking-widest text-red-500 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping" />
            SUPPORT CENTER // INTEL
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
            FAQ
          </h1>

          <p className="text-xs sm:text-sm text-red-500 font-bold tracking-[0.25em] uppercase">
            EVERYTHING YOU NEED TO KNOW
          </p>

          {/* Glowing Red Underline */}
          <div className="w-24 sm:w-32 h-1 bg-[#d30000] mx-auto shadow-[0_0_12px_rgba(211,0,0,0.8)] rounded-full mt-2" />
        </div>

        {/* Controls Bar: Search & Category Navigation */}
        <div className="space-y-6">
          {/* Search Box */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="SEARCH QUESTIONS OR KEYWORDS (E.G. SHIPPING, SIZE, REFUND)..."
              className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#d30000] text-xs sm:text-sm text-white placeholder-zinc-500 pl-11 pr-10 py-3.5 rounded transition-all duration-200 outline-none shadow-inner tracking-wider"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-500 hover:text-white transition-colors"
                aria-label="Clear Search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded uppercase tracking-widest font-bold transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? "bg-[#d30000] border-[#d30000] text-white shadow-[0_0_15px_rgba(211,0,0,0.5)]"
                      : "bg-zinc-900/90 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Quick Action bar: Expand/Collapse All */}
          <div className="flex items-center justify-between text-[11px] text-zinc-500 border-b border-zinc-900 pb-3 pt-2">
            <span>
              SHOWING <strong className="text-white">{filteredItems.length}</strong> QUESTIONS
            </span>
            <div className="flex items-center gap-4">
              <button
                onClick={expandAll}
                className="hover:text-red-500 transition-colors uppercase cursor-pointer"
              >
                [ EXPAND ALL ]
              </button>
              <button
                onClick={collapseAll}
                className="hover:text-red-500 transition-colors uppercase cursor-pointer"
              >
                [ COLLAPSE ALL ]
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Groups */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-zinc-950 border border-zinc-900 rounded p-8 space-y-4">
            <div className="text-red-500 text-3xl">⚠</div>
            <h3 className="text-lg font-bold uppercase text-white tracking-widest">
              NO MATCHING INTEL FOUND
            </h3>
            <p className="text-xs text-zinc-400 max-w-md mx-auto">
              We couldn't find any questions matching &ldquo;{searchQuery}&rdquo;. Try searching with another keyword or browse categories.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("ALL");
              }}
              className="mt-2 inline-block bg-zinc-900 border border-zinc-700 hover:border-red-600 text-white text-xs uppercase px-4 py-2 rounded tracking-widest font-bold transition-colors cursor-pointer"
            >
              RESET FILTERS
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {categoryOrder.map((categoryName) => {
              const categoryItems = groupedCategories[categoryName];
              if (!categoryItems || categoryItems.length === 0) return null;

              return (
                <div key={categoryName} className="space-y-4">
                  {/* Category Header with Red Accent Bar */}
                  <div className="flex items-center gap-3 border-b border-zinc-800 pb-2">
                    <span className="w-1.5 h-5 bg-[#d30000] inline-block shadow-[0_0_8px_rgba(211,0,0,0.8)]" />
                    <h2 className="text-lg sm:text-xl font-black uppercase tracking-wider text-white">
                      {categoryName}
                    </h2>
                    <span className="text-xs text-zinc-600 font-normal ml-auto">
                      ({categoryItems.length})
                    </span>
                  </div>

                  {/* Category Items List */}
                  <div className="space-y-3">
                    {categoryItems.map((item) => {
                      const isOpen = !!openItems[item.id];
                      const feedback = helpfulFeedback[item.id];

                      return (
                        <div
                          key={item.id}
                          className={`border transition-all duration-200 rounded-sm overflow-hidden ${
                            isOpen
                              ? "bg-zinc-950 border-[#d30000]/60 shadow-[0_0_15px_rgba(211,0,0,0.15)]"
                              : "bg-zinc-950/60 border-zinc-900 hover:border-zinc-800"
                          }`}
                        >
                          {/* Accordion Trigger Button */}
                          <button
                            onClick={() => toggleItem(item.id)}
                            className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 cursor-pointer group select-none"
                            aria-expanded={isOpen}
                          >
                            <span
                              className={`text-xs sm:text-sm font-bold tracking-wide transition-colors ${
                                isOpen
                                  ? "text-white"
                                  : "text-zinc-200 group-hover:text-red-500"
                              }`}
                            >
                              {item.question}
                            </span>
                            <span
                              className={`text-base font-bold transition-transform duration-300 w-6 h-6 flex items-center justify-center rounded border ${
                                isOpen
                                  ? "text-white bg-[#d30000] border-[#d30000] rotate-180 shadow-[0_0_10px_rgba(211,0,0,0.6)]"
                                  : "text-red-500 bg-zinc-900 border-zinc-800 group-hover:border-red-600"
                              }`}
                            >
                              {isOpen ? "−" : "+"}
                            </span>
                          </button>

                          {/* Collapsible Answer Box */}
                          {isOpen && (
                            <div className="px-5 pb-5 pt-1 border-t border-zinc-900/80 animate-in fade-in slide-in-from-top-1 duration-200">
                              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed tracking-normal font-sans">
                                {item.answer}
                              </p>

                              {/* Feedback bar */}
                              <div className="mt-4 pt-3 border-t border-zinc-900/60 flex flex-wrap items-center justify-between gap-2 text-[11px] text-zinc-500">
                                <span>Was this helpful?</span>
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={() => handleFeedback(item.id, "yes")}
                                    className={`px-2.5 py-1 rounded border transition-colors cursor-pointer ${
                                      feedback === "yes"
                                        ? "bg-emerald-950/80 border-emerald-500 text-emerald-400 font-bold"
                                        : "bg-zinc-900 border-zinc-800 hover:border-zinc-700 text-zinc-400"
                                    }`}
                                  >
                                    👍 Yes
                                  </button>
                                  <button
                                    onClick={() => handleFeedback(item.id, "no")}
                                    className={`px-2.5 py-1 rounded border transition-colors cursor-pointer ${
                                      feedback === "no"
                                        ? "bg-red-950/80 border-red-500 text-red-400 font-bold"
                                        : "bg-zinc-900 border-zinc-800 hover:border-zinc-700 text-zinc-400"
                                    }`}
                                  >
                                    👎 No
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Still Have Questions Banner */}
        <div className="bg-zinc-950 border border-zinc-800 p-8 sm:p-10 rounded text-center space-y-4 relative overflow-hidden group">
          {/* Subtle Accent Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-red-600/5 pointer-events-none" />

          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-widest text-white">
            STILL HAVE QUESTIONS?
          </h3>

          <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto leading-relaxed">
            Our support crew is on standby 24/7. Drop us a line and we&rsquo;ll get back to you within 2 hours.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:support@zenji.com"
              className="inline-flex items-center gap-2 bg-[#d30000] hover:bg-red-600 text-white font-mono text-xs uppercase tracking-widest font-bold px-6 py-3.5 rounded shadow-[0_0_20px_rgba(211,0,0,0.4)] transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              EMAIL US AT SUPPORT@ZENJI.COM
            </a>

            <a
              href="#discord"
              className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white font-mono text-xs uppercase tracking-widest font-bold px-6 py-3.5 rounded transition-all duration-200 cursor-pointer"
            >
              JOIN DISCORD INTEL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
