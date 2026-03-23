import type { Leader } from "@/data/types";

interface LeaderCardProps {
  leader: Leader;
  size?: "large" | "small";
}

export default function LeaderCard({
  leader,
  size = "large",
}: LeaderCardProps) {
  if (size === "small") {
    return (
      <div className="bg-white border border-[var(--ci-gray-200)] rounded-lg p-4 text-center">
        <div className="w-12 h-12 rounded-full bg-[var(--ci-blue-dark)] flex items-center justify-center mx-auto mb-3">
          <span className="text-sm font-heading font-bold text-white">
            {leader.initials}
          </span>
        </div>
        <h3 className="font-bold text-xs leading-tight mb-1">{leader.name}</h3>
        <p className="text-[var(--ci-gray-600)] text-[10px] leading-snug">
          {leader.institution}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[var(--ci-gray-200)] rounded-lg p-6 text-center">
      <div className="w-16 h-16 rounded-full bg-[var(--ci-blue)] flex items-center justify-center mx-auto mb-4">
        <span className="text-lg font-heading font-bold text-white">
          {leader.initials}
        </span>
      </div>
      <h3 className="font-bold text-sm leading-tight mb-1">{leader.name}</h3>
      <p className="text-[var(--ci-teal-dark)] font-bold text-[11px] mb-2">
        {leader.role}
      </p>
      <p className="text-[var(--ci-gray-600)] text-[11px] leading-relaxed">
        {leader.description}
      </p>
    </div>
  );
}
