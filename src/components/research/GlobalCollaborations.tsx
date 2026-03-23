"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { collaborators } from "@/data/collaborators";
import WorldMap from "@/components/research/WorldMap";

export default function GlobalCollaborations() {
  return (
    <section className="bg-ci-blue-dark py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white font-[family-name:var(--font-heading)] mb-12">
          Global Collaborations
        </h2>

        <WorldMap collaborators={collaborators} />

        <div className="mt-10">
          <Link
            href="/research/collaborations"
            className="bg-ci-teal text-white px-6 py-3 rounded font-bold inline-flex items-center gap-2 hover:bg-ci-teal-dark transition-colors"
          >
            Global Research Networks <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
