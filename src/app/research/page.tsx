"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { people } from "@/data/people";
import { cancerTypes } from "@/data/cancerTypes";
import { founders } from "@/data/founders";
import { institutionStats } from "@/data/statistics";
import CancerTypeCard from "@/components/research/CancerTypeCard";
import StatisticsBar from "@/components/research/StatisticsBar";
import WorldMap from "@/components/research/WorldMap";
import { collaborators } from "@/data/collaborators";

export default function ResearchLandingPage() {
  const internalPeople = people.filter((p) => p.category === "internal");

  const displayedCancers = cancerTypes.slice(0, 4);
  const remainingCancers = cancerTypes.length - displayedCancers.length;

  return (
    <>
      {/* 1. Hero */}
      <section className="bg-gradient-to-br from-[var(--ci-blue)] to-[var(--ci-blue-dark)] py-24 px-6 text-center">
        <p className="text-[var(--ci-teal)] uppercase tracking-widest text-sm mb-6">
          CANCER INSTITUTE (WIA), ADYAR
        </p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white max-w-3xl mx-auto mb-6 leading-tight">
          Seven Decades of Pioneering Cancer Research
        </h1>
        <p className="text-white/85 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          From India&apos;s first comprehensive cancer centre to a global research
          hub — advancing discovery, training the next generation, and delivering
          compassionate care since 1954.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/research/people"
            className="bg-[var(--ci-teal)] text-[var(--ci-blue-dark)] px-6 py-3 rounded font-bold hover:bg-[var(--ci-teal-dark)] transition-colors"
          >
            Meet Our Researchers
          </Link>
          <Link
            href="/research/cancers"
            className="border border-white text-white px-6 py-3 rounded font-bold hover:bg-white/10 transition-colors"
          >
            Cancers We Study
          </Link>
        </div>
      </section>

      {/* 2. Research Intro */}
      <section className="py-16 px-6">
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

      {/* 3. Founders Highlight */}
      <section className="bg-[var(--ci-light)] py-16 px-6">
        <h2 className="font-heading text-3xl font-bold text-[var(--ci-blue)] text-center mb-10">
          Our Founders &amp; Legacy
        </h2>
        <div className="flex justify-center gap-8 flex-wrap">
          {founders.map((founder) => (
            <div
              key={founder.slug}
              className="bg-white rounded-lg p-6 w-56 text-center shadow"
            >
              <div className="w-16 h-16 rounded-full bg-[var(--ci-blue)] text-white font-heading font-bold text-xl flex items-center justify-center mx-auto mb-4">
                {founder.initials}
              </div>
              <p className="font-bold text-[var(--ci-gray-900)] mb-1">
                {founder.name}
              </p>
              <p className="text-sm text-[var(--ci-gray-600)] mb-3">
                {founder.title}
              </p>
              <Link
                href={`/research/founders/${founder.slug}`}
                className="text-[var(--ci-blue)] text-sm font-bold hover:underline"
              >
                Read story &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Stats Band */}
      <StatisticsBar />

      {/* 5. Meet Our Faculty and Scientists */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left — Text */}
          <div className="lg:w-5/12 flex-shrink-0">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--ci-blue)] mb-6 leading-tight">
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
              className="inline-flex items-center gap-2 border-2 border-[var(--ci-blue)] text-[var(--ci-blue)] px-6 py-3 rounded-md font-bold hover:bg-[var(--ci-blue)] hover:text-white transition-colors"
            >
              Browse Faculty Directory <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right — 4×4 Photo Mosaic */}
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

              // Fill with real photos first
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
                    {/* Hover overlay with name */}
                    <div className="absolute inset-0 bg-[var(--ci-blue)]/0 group-hover:bg-[var(--ci-blue)]/70 transition-colors duration-200 flex items-end p-2">
                      <p className="text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 leading-tight">
                        {person.name}
                      </p>
                    </div>
                  </Link>
                );
              });

              // Fill remaining slots with soft gradient placeholders
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

      {/* 6. Cancers We Study */}
      <section className="bg-[var(--ci-gray-100)] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-[var(--ci-blue)] mb-4">
            Cancers We Study
          </h2>
          <p className="text-[var(--ci-gray-600)] text-lg mb-8 max-w-3xl">
            Our research is organized around the cancers that affect our
            patients — enabling targeted discovery from bench to bedside.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedCancers.map((ct) => (
              <CancerTypeCard key={ct.slug} cancerType={ct} />
            ))}
            {remainingCancers > 0 && (
              <Link
                href="/research/cancers"
                className="flex flex-col items-center justify-center border-2 border-dashed border-[var(--ci-gray-200)] rounded-lg p-6 bg-white hover:border-[var(--ci-teal)] transition-colors"
              >
                <span className="text-4xl font-bold text-[var(--ci-blue)] mb-2">
                  +{remainingCancers}
                </span>
                <span className="text-[var(--ci-teal-dark)] font-bold flex items-center gap-1">
                  View All <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* 7. Global Collaborations Preview */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-[var(--ci-blue)] mb-4">
            Global Collaborations
          </h2>
          <p className="text-[var(--ci-gray-600)] text-lg mb-8 max-w-3xl">
            Cancer Institute is part of a worldwide network of research
            partnerships — advancing cancer science through shared expertise,
            data, and clinical trials across 4 continents.
          </p>
          <div className="mb-8">
            <WorldMap collaborators={collaborators} />
          </div>
          <div className="text-center">
            <Link
              href="/research/collaborations"
              className="inline-block bg-[var(--ci-blue)] text-white px-6 py-3 rounded font-bold hover:bg-[var(--ci-blue-dark)] transition-colors"
            >
              Explore All Partnerships &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Founder Quote Strip */}
      <section className="bg-[var(--ci-blue-dark)] py-12 px-6 text-center">
        <p className="font-heading italic text-white text-lg max-w-3xl mx-auto mb-4 leading-relaxed">
          &ldquo;{founders[1].quote}&rdquo;
        </p>
        <p className="text-white/70 text-sm">
          &mdash; {founders[1].name}, Founder
        </p>
      </section>
    </>
  );
}
