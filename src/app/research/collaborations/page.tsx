"use client";

import { useState } from "react";
import Breadcrumb from "@/components/research/Breadcrumb";
import WorldMap from "@/components/research/WorldMap";
import CollaborationCard from "@/components/research/CollaborationCard";
import { collaborators } from "@/data/collaborators";

type FilterType = "" | "international" | "national" | "network";

const filterTabs: { label: string; value: FilterType }[] = [
  { label: "All", value: "" },
  { label: "International", value: "international" },
  { label: "National", value: "national" },
  { label: "Networks", value: "network" },
];

export default function CollaborationsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("");

  const filtered = activeFilter
    ? collaborators.filter((c) => c.type === activeFilter)
    : collaborators;

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Research", href: "/research" },
          { label: "Collaborations" },
        ]}
      />

      <section className="section">
        <div className="section-inner">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--ci-blue)] mb-4">
            Global Collaborations
          </h1>
          <p className="text-[var(--ci-gray-600)] max-w-3xl text-lg mb-8">
            Cancer Institute (WIA) partners with leading research institutions
            worldwide, combining global expertise with deep knowledge of
            India&apos;s cancer burden to advance discovery and improve patient
            outcomes.
          </p>

          {/* World Map */}
          <div className="mb-10">
            <WorldMap collaborators={collaborators} />
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === tab.value
                    ? "bg-[var(--ci-blue)] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Collaboration Cards */}
          <div className="flex flex-col gap-4">
            {filtered.map((collab) => (
              <CollaborationCard key={collab.name} collaborator={collab} />
            ))}
          </div>

          {/* CTA */}
          <div className="bg-[var(--ci-light)] rounded-2xl p-8 md:p-12 text-center mt-16">
            <h2 className="font-heading text-2xl font-bold text-[var(--ci-blue)] mb-3">
              Collaborate With Us
            </h2>
            <p className="text-[var(--ci-gray-600)] max-w-xl mx-auto mb-6">
              We welcome research partnerships with institutions worldwide. If
              you&apos;re interested in collaborating on cancer research, please
              reach out to our research office.
            </p>
            <a
              href="mailto:research@cancerinstitutewia.org"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--ci-blue)] text-white font-bold rounded-lg hover:bg-[var(--ci-blue-dark)] transition-colors"
            >
              Contact Research Office
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
