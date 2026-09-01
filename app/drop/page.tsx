"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/src/component/Navbar";
import Footer from "@/src/component/Footer";
import Link from "next/link";

export default function DropPage() {
  // Live Countdown Timer State
  const [timeLeft, setTimeLeft] = useState({
    days: "0",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const [email, setEmail] = useState("");
  const [waitlistSuccess, setWaitlistSuccess] = useState(false);

  useEffect(() => {
    // Target 7 days from now for live countdown demonstration
    const targetDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24)).toString();
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          .toString()
          .padStart(2, "0");
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
          .toString()
          .padStart(2, "0");
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)
          .toString()
          .padStart(2, "0");

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setWaitlistSuccess(true);
    setEmail("");
    setTimeout(() => setWaitlistSuccess(false), 4000);
  };

  const waitProducts = [
    {
      id: "1",
      name: "BLUE FLAME TEE",
      price: "$129.00",
      image: "/images/ethos-1.jpg",
      badge: "SALE 15% OFF",
      slug: "blue-flame-tee",
    },
    {
      id: "2",
      name: "DEMON BLOOD TEE",
      price: "$119.00",
      image: "/images/ethos-3.jpg",
      badge: "SALE 15% OFF",
      slug: "demon-blood-tee",
    },
    {
      id: "3",
      name: "WARRIOR SPIRIT TEE",
      price: "$124.00",
      image: "/images/ethos-2.jpg",
      badge: "NEW",
      slug: "bushido-tee",
    },
    {
      id: "4",
      name: "DOMAIN EXPANSION TEE",
      price: "$139.00",
      image: "/images/ethos-4.jpg",
      badge: "LIMITED",
      slug: "bushido-tee",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black font-sans relative overflow-x-hidden selection:bg-red-600 selection:text-white pt-24 pb-20">
      {/* Top Navbar */}
      <Navbar />

      {/* 1. Countdown Timer Section matching screenshot */}
      <section className="w-full bg-white text-black py-12 sm:py-16 px-4 text-center border-b border-zinc-200">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Digital Timer Boxes */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 font-mono">
            <div className="flex flex-col items-center">
              <div className="w-14 sm:w-20 py-3 bg-zinc-950 text-white font-black text-2xl sm:text-4xl rounded-none border border-zinc-800 shadow-md">
                {timeLeft.days}
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-widest mt-2">
                DAYS
              </span>
            </div>

            <span className="text-2xl sm:text-4xl font-black text-red-600">:</span>

            <div className="flex flex-col items-center">
              <div className="w-14 sm:w-20 py-3 bg-zinc-950 text-white font-black text-2xl sm:text-4xl rounded-none border border-zinc-800 shadow-md">
                {timeLeft.hours}
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-widest mt-2">
                HOURS
              </span>
            </div>

            <span className="text-2xl sm:text-4xl font-black text-red-600">:</span>

            <div className="flex flex-col items-center">
              <div className="w-14 sm:w-20 py-3 bg-zinc-950 text-white font-black text-2xl sm:text-4xl rounded-none border border-zinc-800 shadow-md">
                {timeLeft.minutes}
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-widest mt-2">
                MINUTES
              </span>
            </div>

            <span className="text-2xl sm:text-4xl font-black text-red-600">:</span>

            <div className="flex flex-col items-center">
              <div className="w-14 sm:w-20 py-3 bg-zinc-950 text-white font-black text-2xl sm:text-4xl rounded-none border border-zinc-800 shadow-md">
                {timeLeft.seconds}
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-widest mt-2">
                SECONDS
              </span>
            </div>
          </div>

          <p className="text-red-600 font-mono text-xs font-bold tracking-[0.3em] uppercase">
            THE DROP IS COMING
          </p>

          <div>
            <Link
              href="/collection"
              className="inline-block bg-[#d30000] hover:bg-red-700 text-white font-mono text-xs font-bold tracking-widest uppercase px-6 py-2.5 transition-all shadow-md active:scale-95"
            >
              PAYMENT IN BASE // ENTER THE ARCHIVE →
            </Link>
          </div>
        </div>
      </section>

      {/* 2. JOIN THE WAITLIST Section matching screenshot */}
      <section className="w-full bg-white text-black py-12 sm:py-16 px-4 text-center border-b border-zinc-200">
        <div className="max-w-xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black font-sans tracking-tight uppercase text-black">
            JOIN THE WAITLIST.
          </h2>

          <p className="text-zinc-500 font-mono text-xs font-bold tracking-wider uppercase">
            BE FIRST IN LINE WHEN THE NEXT DROP IS LIVE // EXCLUSIVE ACCESS FOR MEMBERS
          </p>

          {waitlistSuccess && (
            <div className="bg-emerald-50 border border-emerald-500 text-emerald-700 font-mono text-xs p-3 font-bold uppercase tracking-wider">
              ✓ YOU'RE ON THE LIST! WE'LL NOTIFY YOU THE SECOND IT DROPS.
            </div>
          )}

          <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row items-center gap-2 pt-2">
            <input
              type="email"
              required
              placeholder="YOUR EMAIL..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:flex-1 bg-zinc-100 border border-zinc-300 text-black font-mono text-xs px-4 py-3 focus:outline-none focus:border-black placeholder-zinc-500 uppercase"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#d30000] hover:bg-red-700 text-white font-mono text-xs font-bold tracking-widest uppercase px-6 py-3 transition-colors cursor-pointer whitespace-nowrap"
            >
              JOIN THE WAITLIST →
            </button>
          </form>
        </div>
      </section>

      {/* 3. WHILE YOU WAIT Section - Full Width Edge-to-Edge Grid matching screenshot */}
      <section className="w-full bg-white text-black pt-12 pb-0">
        <div className="px-6 sm:px-12 pb-6 space-y-1">
          <p className="text-red-600 font-mono text-xs font-bold tracking-[0.25em] uppercase">
            THE ORIGIN DROP // IN STOCK NOW
          </p>
          <h2 className="text-4xl sm:text-5xl font-black font-sans tracking-tight text-black uppercase">
            WHILE YOU WAIT.
          </h2>
          <p className="text-zinc-500 font-mono text-xs tracking-widest uppercase">
            EXPLORE CURRENTLY AVAILABLE PIECES.
          </p>
        </div>

        {/* 4-Column Full-Width Edge-to-Edge Product Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-2">
          {waitProducts.map((p) => (
            <div
              key={p.id}
              className="group relative aspect-[3/4] w-full bg-zinc-900 overflow-hidden border border-zinc-200 flex flex-col justify-between"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Corner Badge */}
              {p.badge && (
                <div className="absolute top-0 left-0 bg-red-600 text-white text-[10px] font-mono font-bold px-3 py-1 uppercase tracking-widest shadow-md z-10 -rotate-45 -translate-x-3 translate-y-2 w-28 text-center">
                  {p.badge}
                </div>
              )}

              {/* Quick View Hover Overlay */}
              <div className="absolute bottom-0 left-0 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10">
                <Link
                  href={`/drop/${p.slug}`}
                  className="w-full bg-black hover:bg-red-600 text-white font-mono text-xs font-bold py-3 uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                >
                  <span>QUICK VIEW</span>
                  <span>→</span>
                </Link>
              </div>

              {/* Bottom Label */}
              <div className="absolute bottom-0 left-0 w-full p-3 bg-white/95 border-t border-zinc-200 font-mono text-xs flex justify-between items-center group-hover:opacity-0 transition-opacity">
                <span className="font-bold text-black uppercase">{p.name}</span>
                <span className="font-black text-red-600">{p.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
