import Link from "next/link";
import type { Person } from "@/data/types";

interface PersonCardProps {
  person: Person;
}

export default function PersonCard({ person }: PersonCardProps) {
  return (
    <Link
      href={`/research/people/${person.slug}`}
      className="relative aspect-[3/4] rounded-lg overflow-hidden group block"
    >
      {/* Photo or Initials Fallback */}
      {person.photo ? (
        <img
          src={person.photo}
          alt={person.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[var(--ci-blue)] to-[var(--ci-blue-dark)] flex items-center justify-center">
          <span className="text-white font-heading font-bold text-4xl">
            {person.initials}
          </span>
        </div>
      )}

      {/* Dark gradient overlay (always visible) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Default state text */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-lg font-bold text-white font-[family-name:var(--font-heading)]">
          {person.name}
        </h3>
        <p className="text-sm text-white/70 mt-0.5">{person.department}</p>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[var(--ci-blue)]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
        <h3 className="text-lg font-bold text-white font-[family-name:var(--font-heading)]">
          {person.name}
        </h3>
        <p className="text-sm text-white/70 mt-0.5">{person.department}</p>
        <p className="text-sm text-white/80 mt-2 line-clamp-3">
          {person.researchFocus}
        </p>
        <span className="text-sm text-[var(--ci-teal)] font-bold mt-3">
          View Profile &rarr;
        </span>
      </div>
    </Link>
  );
}
