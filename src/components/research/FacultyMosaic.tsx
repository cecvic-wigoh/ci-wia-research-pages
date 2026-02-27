"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { faculty } from "@/data/faculty";

// Color palette for placeholder avatars — varied gradients so the grid looks rich
const gradients = [
  "from-[#134795] to-[#0D3269]",
  "from-[#1A5BC7] to-[#134795]",
  "from-[#1BA89D] to-[#134795]",
  "from-[#0D3269] to-[#1A5BC7]",
  "from-[#134795] to-[#1BA89D]",
  "from-[#1A5BC7] to-[#0D3269]",
  "from-[#0D3269] to-[#1BA89D]",
  "from-[#1BA89D] to-[#1A5BC7]",
  "from-[#134795] to-[#23CDC0]",
];

export default function FacultyMosaic() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  return (
    <section className="section" aria-labelledby="faculty-mosaic-heading">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <h2
              id="faculty-mosaic-heading"
              className="font-heading text-3xl md:text-4xl font-bold text-[var(--ci-blue)] mb-6"
            >
              Meet Our Faculty and Scientists
            </h2>
            <p className="text-[var(--ci-gray-600)] text-lg leading-relaxed mb-6">
              Cancer Institute (WIA) is home to a dedicated community of
              researchers and clinician-scientists who work across the full
              spectrum of cancer science — from molecular discovery and
              biomarker development to clinical trials and population-level
              epidemiology. Supported by seven decades of institutional legacy
              and world-class core facilities, our faculty are advancing the
              frontiers of oncology research with a commitment to translational
              impact.
            </p>
            <p className="text-[var(--ci-gray-600)] text-lg leading-relaxed mb-8">
              Each researcher brings a unique perspective, united by a shared
              mission: to make cancer care more effective and accessible for
              every patient.
            </p>
            <Link
              href="/research/faculty"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--ci-blue)] text-[var(--ci-blue)] font-bold rounded-lg hover:bg-[var(--ci-blue)] hover:text-white transition-colors"
            >
              Browse Faculty Directory
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right: Photo Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-1.5">
            {faculty.map((member, index) => (
              <Link
                key={member.slug}
                href={`/research/faculty/${member.slug}`}
                className="group relative aspect-square overflow-hidden rounded-sm"
                onMouseEnter={() => setHoveredSlug(member.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
              >
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover scale-125 group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-br ${
                      gradients[index % gradients.length]
                    } flex items-center justify-center`}
                  >
                    <span className="text-2xl sm:text-3xl font-heading font-bold text-white/40">
                      {member.initials}
                    </span>
                  </div>
                )}

                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 bg-[var(--ci-blue)]/80 flex flex-col items-center justify-center p-2 text-center transition-opacity duration-200 ${
                    hoveredSlug === member.slug ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-white text-xs sm:text-sm font-bold leading-tight">
                    {member.name}
                  </p>
                  <p className="text-white/70 text-[10px] sm:text-xs mt-1 leading-tight hidden sm:block">
                    {member.departmentSlug
                      .split("-")
                      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                      .join(" ")}
                  </p>
                </div>
              </Link>
            ))}

            {/* Fill remaining grid slots to make 4 rows x 4 cols = 16 cells */}
            {Array.from({ length: Math.max(0, 16 - faculty.length) }).map(
              (_, i) => (
                <div
                  key={`empty-${i}`}
                  className={`aspect-square rounded-sm bg-gradient-to-br ${
                    gradients[(faculty.length + i) % gradients.length]
                  } opacity-30`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
