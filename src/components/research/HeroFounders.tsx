"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { founders } from "@/data/founders";
import { useState } from "react";

export default function HeroFounders() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? founders[activeIndex] : null;

  return (
    <div className="flex flex-col items-center w-full">
      {/* Triptych row */}
      <div className="flex items-end justify-center gap-3 sm:gap-6 lg:gap-10 mb-5">
        {founders.map((founder, i) => {
          const isCenter = i === 1;
          const isActive = activeIndex === i;

          return (
            <Link
              key={founder.slug}
              href={`/research/founders/${founder.slug}`}
              className="group relative flex flex-col items-center cursor-pointer shrink-0"
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              onFocus={() => setActiveIndex(i)}
              onBlur={() => setActiveIndex(null)}
            >
              {/* Portrait frame */}
              <div
                className={`relative rounded-xl overflow-hidden transition-all duration-500 ease-out border-2 ${
                  isActive
                    ? "border-[var(--ci-teal)]/70 shadow-[0_0_30px_rgba(35,205,192,0.15)]"
                    : "border-white/10 hover:border-white/25"
                } ${
                  isCenter
                    ? "w-24 h-32 sm:w-40 sm:h-52 lg:w-52 lg:h-64"
                    : "w-20 h-28 sm:w-34 sm:h-44 lg:w-44 lg:h-56"
                }`}
              >
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className={`object-cover object-top transition-transform duration-700 ${
                    isActive ? "scale-110" : "group-hover:scale-105"
                  }`}
                  sizes="(max-width: 640px) 130px, (max-width: 1024px) 170px, 210px"
                />

                {/* Bottom gradient for name legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Teal accent line at bottom */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--ci-teal)] transition-transform duration-500 origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </div>

              {/* Name plate below portrait */}
              <div className="mt-2 sm:mt-3 text-center max-w-[5.5rem] sm:max-w-none">
                <p
                  className={`text-[10px] sm:text-sm font-bold leading-tight transition-colors duration-300 ${
                    isActive ? "text-white" : "text-white/70"
                  }`}
                >
                  {founder.name}
                </p>
                <p className="text-white/30 text-[9px] sm:text-xs mt-0.5">
                  {founder.years}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Connecting accent line */}
      <div className="w-48 sm:w-64 lg:w-80 h-px bg-gradient-to-r from-transparent via-[var(--ci-teal)]/30 to-transparent mb-4" />

      {/* Quote area */}
      <div className="text-center min-h-[56px] flex flex-col items-center justify-center px-4">
        {active ? (
          <div className="animate-fadeIn max-w-md">
            <p className="text-white/60 text-xs sm:text-sm italic leading-relaxed">
              &ldquo;{active.quote}&rdquo;
            </p>
            <p className="mt-1.5 text-[var(--ci-teal)] text-[10px] sm:text-xs font-bold">
              — {active.name}
            </p>
          </div>
        ) : (
          <p className="text-white/30 text-[10px] sm:text-sm tracking-wider uppercase">
            <span className="hidden sm:inline">Hover to read their words &middot; Click to read their story</span>
            <span className="sm:hidden">Tap a portrait to read their story</span>
          </p>
        )}
      </div>
    </div>
  );
}
