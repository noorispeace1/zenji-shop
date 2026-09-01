"use client";

import React from "react";

export default function MarqueeBanner() {
  const marqueeItems = [
    "THE_ORIGIN_DROP COLLECTION LIVE",
    "FREE SHIPPING AUSTRALIA WIDE ON ORDERS OVER A$100",
    "NEW DROP: BLUE FLAME TEE NOW AVAILABLE",
    "LIMITED STOCK",
  ];

  return (
    <div className="w-full bg-[#d30000] text-white border-b border-red-800 overflow-hidden select-none py-1.5 z-50">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* First Loop */}
        <div className="flex items-center gap-6 pr-6 font-mono text-[11px] sm:text-xs font-bold tracking-widest uppercase">
          {marqueeItems.map((item, idx) => (
            <React.Fragment key={`m1-${idx}`}>
              <span>{item}</span>
              <span className="text-white/70">◆</span>
            </React.Fragment>
          ))}
        </div>

        {/* Duplicate Loop for Seamless Infinite Scroll */}
        <div className="flex items-center gap-6 pr-6 font-mono text-[11px] sm:text-xs font-bold tracking-widest uppercase" aria-hidden="true">
          {marqueeItems.map((item, idx) => (
            <React.Fragment key={`m2-${idx}`}>
              <span>{item}</span>
              <span className="text-white/70">◆</span>
            </React.Fragment>
          ))}
        </div>

        {/* Third Loop to guarantee zero empty gap on ultra-wide screens */}
        <div className="flex items-center gap-6 pr-6 font-mono text-[11px] sm:text-xs font-bold tracking-widest uppercase" aria-hidden="true">
          {marqueeItems.map((item, idx) => (
            <React.Fragment key={`m3-${idx}`}>
              <span>{item}</span>
              <span className="text-white/70">◆</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
