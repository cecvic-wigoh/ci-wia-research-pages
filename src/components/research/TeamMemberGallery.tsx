"use client";

import { useState } from "react";
import type { TeamMember } from "@/data/types";

interface TeamMemberGalleryProps {
  members: TeamMember[];
}

export default function TeamMemberGallery({ members }: TeamMemberGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {members.map((member, index) => {
        const isActive = activeIndex === index;
        return (
          <button
            key={index}
            onClick={() => setActiveIndex(isActive ? null : index)}
            className={`
              flex flex-col items-center text-center w-36 md:w-40 rounded-xl p-4 transition-all duration-300
              ${isActive
                ? "bg-white shadow-xl shadow-black/10 -translate-y-2 ring-1 ring-ci-gray-200"
                : "bg-transparent hover:-translate-y-1"
              }
            `}
            aria-expanded={isActive}
          >
            {/* Circular Photo Placeholder */}
            <div
              className={`
                w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-3 transition-shadow
                ${isActive
                  ? "bg-gradient-to-br from-ci-blue to-ci-blue-dark ring-3 ring-ci-teal/30 shadow-lg"
                  : "bg-gradient-to-br from-ci-blue-light to-ci-blue ring-2 ring-transparent"
                }
              `}
            >
              <span className="text-lg md:text-xl font-heading font-bold text-white/80">
                {member.initials}
              </span>
            </div>

            <h4 className="font-heading text-sm font-bold text-ci-gray-900 mb-0.5 leading-tight">
              {member.name}
            </h4>
            <p className="text-xs text-ci-gray-600 mb-0.5">
              {member.qualification}
            </p>
            <p className="text-xs text-ci-teal-dark font-bold">
              {member.role}
            </p>

            {/* Expanded research description */}
            {isActive && (
              <p className="mt-3 text-xs text-ci-gray-600 leading-relaxed border-t border-ci-gray-200 pt-3">
                {member.research}
              </p>
            )}
          </button>
        );
      })}
    </div>
  );
}
