"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { TeamMember } from "@/data/faculty";

interface TeamMemberGalleryProps {
  members: TeamMember[];
}

export default function TeamMemberGallery({ members }: TeamMemberGalleryProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {members.map((member, index) => (
        <div key={index} className="flex flex-col items-center">
          <button
            onClick={() => toggleExpand(index)}
            className="flex flex-col items-center text-center group w-full"
            aria-expanded={expandedIndex === index}
          >
            {/* Circular Photo Placeholder */}
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-[var(--ci-blue-light)] to-[var(--ci-blue)] flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow ring-2 ring-transparent group-hover:ring-[var(--ci-teal)]">
              <span className="text-xl font-heading font-bold text-white/80">
                {member.initials}
              </span>
            </div>

            <h4 className="font-heading text-sm font-bold text-[var(--ci-gray-900)] mb-0.5 leading-tight">
              {member.name}
            </h4>
            <p className="text-xs text-[var(--ci-gray-600)] mb-0.5">
              {member.qualification}
            </p>
            <p className="text-xs text-[var(--ci-teal-dark)] font-bold">
              {member.role}
            </p>

            <ChevronDown
              className={`h-4 w-4 mt-1 text-[var(--ci-gray-600)] transition-transform ${
                expandedIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Expanded description */}
          {expandedIndex === index && (
            <div className="mt-3 p-3 bg-[var(--ci-light)] rounded-lg text-xs text-[var(--ci-gray-900)] leading-relaxed w-full">
              {member.research}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
