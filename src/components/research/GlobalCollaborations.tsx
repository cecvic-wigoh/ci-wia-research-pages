"use client";

import Link from "next/link";
import { ArrowRight, Globe, FlaskConical, Users } from "lucide-react";
import { collaborators } from "@/data/collaborators";
import WorldMap from "@/components/research/WorldMap";

const activePartners = collaborators.filter((c) => c.status === "active");
const uniqueCountries = new Set(collaborators.map((c) => c.country));

export default function GlobalCollaborations() {
  return (
    <section className="bg-ci-blue-dark py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white font-[family-name:var(--font-heading)]">
            Global Collaborations
          </h2>
          <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto">
            Advancing cancer science through shared expertise, data, and
            clinical trials across {uniqueCountries.size} countries.
          </p>
        </div>

        {/* Static map — no scroll lock */}
        <div className="pointer-events-none">
          <WorldMap collaborators={collaborators} isStatic />
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-6 mt-10 max-w-lg mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Globe className="h-5 w-5 text-ci-teal" aria-hidden="true" />
            </div>
            <p className="text-2xl font-bold text-white">{uniqueCountries.size}</p>
            <p className="text-white/50 text-xs mt-1">Countries</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Users className="h-5 w-5 text-ci-teal" aria-hidden="true" />
            </div>
            <p className="text-2xl font-bold text-white">{collaborators.length}</p>
            <p className="text-white/50 text-xs mt-1">Partners</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <FlaskConical className="h-5 w-5 text-ci-teal" aria-hidden="true" />
            </div>
            <p className="text-2xl font-bold text-white">{activePartners.length}</p>
            <p className="text-white/50 text-xs mt-1">Active Projects</p>
          </div>
        </div>

        {/* Partner cards row */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activePartners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-white font-bold text-sm leading-tight">
                    {partner.name}
                  </h3>
                  <p className="text-white/50 text-xs mt-1">
                    {partner.city}, {partner.country}
                  </p>
                </div>
                <span className="shrink-0 bg-ci-teal/20 text-ci-teal text-[10px] font-bold uppercase px-2 py-0.5 rounded">
                  Active
                </span>
              </div>
              <p className="text-white/60 text-xs mt-3 leading-relaxed line-clamp-2">
                {partner.project}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/research/collaborations"
            className="bg-ci-teal text-white px-6 py-3 rounded font-bold inline-flex items-center gap-2 hover:bg-ci-teal-dark transition-colors"
          >
            Global Research Networks <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
