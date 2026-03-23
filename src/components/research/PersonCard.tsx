import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Person } from "@/data/types";
import { cancerTypes } from "@/data/cancerTypes";
import TagPill from "@/components/research/TagPill";

interface PersonCardProps {
  person: Person;
}

export default function PersonCard({ person }: PersonCardProps) {
  return (
    <Link
      href={`/research/people/${person.slug}`}
      className="card group block"
    >
      <div className="flex items-start gap-4">
        {/* Circular Photo Placeholder */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--ci-blue)] to-[var(--ci-blue-dark)] flex items-center justify-center shrink-0">
          <span className="text-lg font-heading font-bold text-white/80">
            {person.initials}
          </span>
        </div>

        <div className="min-w-0">
          <h3 className="font-heading text-lg font-bold text-[var(--ci-blue)] group-hover:text-[var(--ci-blue-dark)] transition-colors mb-1">
            {person.name}
          </h3>
          <p className="text-[var(--ci-gray-600)] text-sm mb-2">
            {person.title}
          </p>
          <p className="text-[var(--ci-gray-900)] text-sm leading-relaxed line-clamp-2">
            {person.researchFocus}
          </p>

          {person.cancerTypes.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {person.cancerTypes.map((slug) => {
                const ct = cancerTypes.find((c) => c.slug === slug);
                return ct ? (
                  <TagPill key={slug} label={ct.name} variant="small" />
                ) : null;
              })}
            </div>
          )}

          <div className="flex items-center gap-1 mt-3 text-[var(--ci-teal-dark)] text-sm font-bold group-hover:gap-2 transition-all">
            View Profile
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
