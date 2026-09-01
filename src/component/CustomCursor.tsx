"use client";

import React, { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const targetPos = useRef({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Ultra-smooth 60/120fps lerp loop
    let animFrameId: number;
    const animate = () => {
      pos.current.x += (targetPos.current.x - pos.current.x) * 0.4;
      pos.current.y += (targetPos.current.y - pos.current.y) * 0.4;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-20%, -20%)`;
      }

      animFrameId = requestAnimationFrame(animate);
    };

    animFrameId = requestAnimationFrame(animate);

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
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[999999] overflow-hidden">
      {/* Main Ultra-Smooth Katana Knife Cursor (No Outer Ring) */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 will-change-transform"
      >
        <div
          className={`transition-transform duration-200 ease-out ${
            isHovered
              ? "scale-125 rotate-12"
              : isMouseDown
              ? "scale-90 -rotate-6"
              : "scale-100 rotate-0"
          }`}
        >
          {/* Custom Katana Sword / Knife SVG */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)]"
          >
            {/* Sword Blade */}
            <path
              d="M3 21L17.5 6.5M17.5 6.5L21 3M17.5 6.5L19.5 8.5M17.5 6.5L15.5 4.5"
              stroke={isHovered ? "#EF4444" : "#FFFFFF"}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Red Katana Blade Line Accent */}
            <path
              d="M5 19L18 6"
              stroke="#DC2626"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Hilt Red Accent */}
            <circle cx="17.5" cy="6.5" r="2" fill="#DC2626" />
          </svg>
        </div>
      </div>
    </div>
  );
}
