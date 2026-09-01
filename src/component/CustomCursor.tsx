"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Smooth trailing motion for outer glow/ring
    let animationFrameId: number;
    const updateTrailing = () => {
      setTrailingPos((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.25,
          y: prev.y + dy * 0.25,
        };
      });
      animationFrameId = requestAnimationFrame(updateTrailing);
    };

    animationFrameId = requestAnimationFrame(updateTrailing);

    // Check hover state on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.tagName === "INPUT" ||
          target.closest("button") ||
          target.closest("a") ||
          target.classList.contains("interactive"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[999999] overflow-hidden">
      {/* Outer Smooth Trailing Glow/Ring */}
      <div
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/60 transition-transform duration-150 ease-out ${
          isHovered
            ? "w-12 h-12 bg-red-600/20 scale-125 border-red-400"
            : isMouseDown
            ? "w-8 h-8 scale-90 border-white bg-white/20"
            : "w-9 h-9"
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
          boxShadow: isHovered
            ? "0 0 15px rgba(220, 38, 38, 0.6)"
            : "0 0 8px rgba(255, 255, 255, 0.2)",
        }}
      />

      {/* Main Japanese Katana Blade / Crosshair Cursor Pointer */}
      <div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) ${
            isHovered ? "scale(1.2) rotate(12deg)" : "scale(1) rotate(0deg)"
          }`,
        }}
      >
        {/* Custom Sword / Blade Pointer SVG matching screenshot */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
        >
          {/* Sword Blade */}
          <path
            d="M3 21L17.5 6.5M17.5 6.5L21 3M17.5 6.5L19.5 8.5M17.5 6.5L15.5 4.5"
            stroke={isHovered ? "#EF4444" : "#FFFFFF"}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Blade Spine Accent */}
          <path
            d="M5 19L18 6"
            stroke="#DC2626"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Guard/Hilt Accent */}
          <circle cx="17.5" cy="6.5" r="2" fill="#DC2626" />
        </svg>

        {/* Center Precision Dot */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${
            isHovered ? "w-2 h-2 bg-red-500 animate-ping" : "w-1.5 h-1.5 bg-red-600"
          }`}
        />
      </div>
    </div>
  );
}
