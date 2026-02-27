import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { FacultyMember } from "@/data/faculty";

interface FacultyCardProps {
  faculty: FacultyMember;
}

export default function FacultyCard({ faculty }: FacultyCardProps) {
  return (
    <Link
      href={`/research/faculty/${faculty.slug}`}
      className="card group block"
    >
      <div className="flex items-start gap-4">
        {/* Circular Photo Placeholder */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--ci-blue)] to-[var(--ci-blue-dark)] flex items-center justify-center shrink-0">
          <span className="text-lg font-heading font-bold text-white/80">
            {faculty.initials}
          </span>
        </div>

        <div className="min-w-0">
          <h3 className="font-heading text-lg font-bold text-[var(--ci-blue)] group-hover:text-[var(--ci-blue-dark)] transition-colors mb-1">
            {faculty.name}
          </h3>
          <p className="text-[var(--ci-gray-600)] text-sm mb-2">
            {faculty.title}
          </p>
          <p className="text-[var(--ci-gray-900)] text-sm leading-relaxed line-clamp-2">
            {faculty.researchFocus}
          </p>

          <div className="flex items-center gap-1 mt-3 text-[var(--ci-teal-dark)] text-sm font-bold group-hover:gap-2 transition-all">
            View Profile
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
