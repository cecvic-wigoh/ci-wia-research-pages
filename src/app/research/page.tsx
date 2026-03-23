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

      {/* 5. Meet Our Researchers */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-[var(--ci-blue)] mb-4">
            Meet Our Researchers
          </h2>
          <p className="text-[var(--ci-gray-600)] text-lg mb-8 max-w-3xl">
            Our faculty spans molecular oncology, diagnostics, clinical trials,
            and epidemiology — united by a mission to conquer cancer through
            rigorous science.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {internalPeople.map((person) => (
              <Link
                key={person.slug}
                href={`/research/people/${person.slug}`}
                className="bg-[var(--ci-gray-100)] rounded-lg p-4 text-center hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--ci-blue)] text-white font-heading font-bold text-sm flex items-center justify-center mx-auto mb-2 group-hover:bg-[var(--ci-blue-dark)] transition-colors">
                  {person.initials}
                </div>
                <p className="font-bold text-xs text-[var(--ci-gray-900)] leading-tight mb-0.5">
                  {person.name.replace("Dr. ", "Dr. ").length > 18
                    ? person.name.split(" ").slice(0, 2).join(" ").replace("Dr.", "Dr.")
                    : person.name}
                </p>
                <p className="text-[10px] text-[var(--ci-gray-600)] leading-tight">
                  {person.department}
                </p>
              </Link>
            ))}
            <Link
              href="/research/people"
              className="flex flex-col items-center justify-center border-2 border-dashed border-[var(--ci-gray-200)] rounded-lg p-4 hover:border-[var(--ci-teal)] transition-colors"
            >
              <span className="text-2xl font-bold text-[var(--ci-blue)] mb-1">
                +{people.length - internalPeople.length}
              </span>
              <span className="text-[var(--ci-teal-dark)] text-xs font-bold flex items-center gap-1">
                View All <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
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
