"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { people } from "@/data/people";
import { cancerTypes } from "@/data/cancerTypes";
import { founders } from "@/data/founders";
import { collaborators } from "@/data/collaborators";
import StatisticsBar from "@/components/research/StatisticsBar";
import WorldMap from "@/components/research/WorldMap";
import DonationCta from "@/components/research/DonationCta";

export default function ResearchLandingPage() {
  const internalPeople = people.filter((p) => p.category === "internal");

  return (
    <>
      {/* 1. Hero */}
      <section className="bg-gradient-to-br from-[var(--ci-blue)] to-[var(--ci-blue-dark)] py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white max-w-4xl font-[family-name:var(--font-heading)] leading-tight">
            Seven Decades of Pioneering Cancer Research
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mt-6 leading-relaxed">
            From India&apos;s first comprehensive cancer centre to a global
            research hub — advancing discovery, training the next generation, and
            delivering compassionate care since 1954.
          </p>
          <div className="flex gap-6 mt-10 flex-wrap">
            <Link
              href="/research/people"
              className="border-2 border-white text-white px-6 py-3 rounded font-bold hover:bg-white/10 transition-colors"
            >
              Meet Our Researchers
            </Link>
            <Link
              href="/research/cancers"
              className="text-white/90 hover:text-white inline-flex items-center gap-2"
            >
              Cancers We Study <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Research Intro */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[var(--ci-gray-600)] text-lg leading-relaxed">
            Cancer Institute (WIA) has been at the forefront of cancer research
            in India for over seven decades. Our research program spans molecular
            oncology, translational diagnostics, and clinical trials — bridging
            laboratory discovery with patient care across the full spectrum of
            cancer types.
          </p>
        </div>
      </section>

      {/* 3. Founders — Photo Cards with Overlay */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[var(--ci-blue)] font-[family-name:var(--font-heading)]">
            Our Founders &amp; Legacy
          </h2>
          <p className="text-[var(--ci-gray-600)] text-lg mt-4 max-w-3xl">
            Three visionaries whose conviction, sacrifice, and science built one
            of India&apos;s most enduring institutions of cancer care.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {founders.map((founder) => (
              <Link
                key={founder.slug}
                href={`/research/founders/${founder.slug}`}
                className="relative aspect-[3/4] rounded-lg overflow-hidden group"
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xl font-bold text-white font-[family-name:var(--font-heading)]">
                    {founder.name}
                  </p>
                  <p className="text-sm text-white/80 mt-1">{founder.title}</p>
                  <p className="text-xs text-white/60 mt-0.5">
                    {founder.years}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Stats */}
      <StatisticsBar />

      {/* 5. Meet Our Faculty and Scientists */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left — Text */}
          <div className="lg:w-5/12 flex-shrink-0">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--ci-blue)] mb-6 leading-tight font-[family-name:var(--font-heading)]">
              Meet Our Faculty and Scientists
            </h2>
            <p className="text-[var(--ci-gray-600)] text-base leading-relaxed mb-4">
              Cancer Institute (WIA) is home to a dedicated community of
              researchers and clinician-scientists who work across the full
              spectrum of cancer science — from molecular discovery and
              biomarker development to clinical trials and population-level
              epidemiology. Supported by seven decades of institutional legacy
              and world-class core facilities, our faculty are advancing the
              frontiers of oncology research with a commitment to translational
              impact.
            </p>
            <p className="text-[var(--ci-gray-600)] text-base leading-relaxed mb-8">
              Each researcher brings a unique perspective, united by a shared
              mission: to make cancer care more effective and accessible for
              every patient.
            </p>
            <Link
              href="/research/people"
              className="inline-flex items-center gap-2 border-2 border-[var(--ci-blue)] text-[var(--ci-blue)] px-6 py-3 rounded font-bold hover:bg-[var(--ci-blue)] hover:text-white transition-colors"
            >
              Browse Faculty Directory <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right — 4x4 Photo Mosaic */}
          <div className="lg:w-7/12 grid grid-cols-4 gap-2">
            {(() => {
              const gradients = [
                "linear-gradient(135deg, #c4d3e0 0%, #a8bdd0 100%)",
                "linear-gradient(135deg, #b8cce0 0%, #d0dce8 100%)",
                "linear-gradient(135deg, #d0e0e8 0%, #b0c8d8 100%)",
                "linear-gradient(135deg, #c0d8e0 0%, #a8c8d0 100%)",
                "linear-gradient(135deg, #bcd0e0 0%, #c8dce8 100%)",
                "linear-gradient(135deg, #d0dce0 0%, #b8d0d8 100%)",
                "linear-gradient(135deg, #c8d8e8 0%, #b0c0d0 100%)",
                "linear-gradient(135deg, #b0d0d8 0%, #c0dce0 100%)",
              ];
              const totalSlots = 16;
              const slots: React.ReactNode[] = [];

              internalPeople.forEach((person, i) => {
                slots.push(
                  <Link
                    key={person.slug}
                    href={`/research/people/${person.slug}`}
                    className="relative aspect-square overflow-hidden rounded group"
                  >
                    {person.photo ? (
                      <img
                        src={person.photo}
                        alt={person.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center text-white font-heading font-bold text-xl"
                        style={{ background: gradients[i % gradients.length] }}
                      >
                        {person.initials}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-[var(--ci-blue)]/0 group-hover:bg-[var(--ci-blue)]/70 transition-colors duration-200 flex items-end p-2">
                      <p className="text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 leading-tight">
                        {person.name}
                      </p>
                    </div>
                  </Link>
                );
              });

              for (let i = internalPeople.length; i < totalSlots; i++) {
                slots.push(
                  <div
                    key={`placeholder-${i}`}
                    className="aspect-square rounded"
                    style={{
                      background: gradients[i % gradients.length],
                    }}
                  />
                );
              }

              return slots;
            })()}
          </div>
        </div>
      </section>

      {/* 6. Cancers We Study — All 10, featured + grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[var(--ci-blue)] font-[family-name:var(--font-heading)] mb-4">
            Cancers We Study
          </h2>
          <p className="text-[var(--ci-gray-600)] text-lg mb-10 max-w-3xl">
            Our research is organized around the cancers that affect our
            patients — enabling targeted discovery from bench to bedside.
          </p>

          {/* Featured hero card — first cancer type */}
          {cancerTypes[0] && (
            <Link
              href={`/research/cancers/${cancerTypes[0].slug}`}
              className="relative block rounded-lg overflow-hidden group mb-6"
            >
              <div className="aspect-[21/9]">
                {cancerTypes[0].image ? (
                  <img
                    src={cancerTypes[0].image}
                    alt={cancerTypes[0].name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[var(--ci-blue)] to-[var(--ci-blue-dark)]" />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <p className="text-sm text-[var(--ci-teal)] font-bold uppercase tracking-wider mb-2">Featured</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-heading)]">
                  {cancerTypes[0].name}
                </h3>
                <p className="text-white/80 mt-2 max-w-2xl leading-relaxed">
                  {cancerTypes[0].description}
                </p>
              </div>
            </Link>
          )}

          {/* Remaining cancer types — compact 2-row grid */}
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {cancerTypes.slice(1).map((ct) => (
              <Link
                key={ct.slug}
                href={`/research/cancers/${ct.slug}`}
                className="relative rounded-lg overflow-hidden group aspect-square"
              >
                {ct.image ? (
                  <img
                    src={ct.image}
                    alt={ct.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[var(--ci-blue)] to-[var(--ci-blue-dark)] flex items-center justify-center">
                    <span className="text-3xl">{ct.icon}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-sm font-bold text-white leading-tight">
                    {ct.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Global Collaborations Preview */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[var(--ci-blue)] font-[family-name:var(--font-heading)] mb-4">
            Global Collaborations
          </h2>
          <p className="text-[var(--ci-gray-600)] text-lg mt-4 max-w-3xl">
            Cancer Institute is part of a worldwide network of research
            partnerships — advancing cancer science through shared expertise,
            data, and clinical trials across 4 continents.
          </p>
          <Link
            href="/research/collaborations"
            className="border-2 border-[var(--ci-blue)] text-[var(--ci-blue)] px-6 py-3 rounded inline-flex items-center gap-2 mt-8 hover:bg-[var(--ci-blue)] hover:text-white transition-colors font-bold"
          >
            Explore all partnerships <ArrowRight className="h-4 w-4" />
          </Link>
          <div className="mt-12">
            <WorldMap collaborators={collaborators} />
          </div>
        </div>
      </section>

      {/* 8. Founder Quote Strip */}
      <section className="bg-[var(--ci-blue-dark)] py-16 px-6 text-center">
        <p className="font-[family-name:var(--font-heading)] italic text-white text-xl max-w-3xl mx-auto mb-4 leading-relaxed">
          &ldquo;{founders[1].quote}&rdquo;
        </p>
        <p className="text-white/70 text-sm">
          &mdash; {founders[1].name}, Founder
        </p>
      </section>
    </>
  );
}
