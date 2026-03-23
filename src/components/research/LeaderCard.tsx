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
      <div className="py-3 border-b border-gray-100">
        <p className="font-bold text-[var(--ci-gray-900)]">{leader.name}</p>
        <p className="text-sm text-[var(--ci-gray-600)] mt-0.5">
          {leader.institution}
          {leader.role ? ` · ${leader.role}` : ""}
        </p>
      </div>
    );
  }

  return (
    <div className="relative aspect-[3/4] rounded-lg overflow-hidden group">
      {/* Background with initials */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--ci-blue)] to-[var(--ci-blue-dark)] flex items-center justify-center">
        <span className="text-5xl text-white/30 font-heading font-bold select-none">
          {leader.initials}
        </span>
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Text at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-lg font-bold text-white font-[family-name:var(--font-heading)]">
          {leader.name}
        </h3>
        {leader.role && (
          <p className="text-sm text-[var(--ci-teal)] font-semibold mt-1">
            {leader.role}
          </p>
        )}
        {leader.description && (
          <p className="text-xs text-white/70 mt-1 line-clamp-2">
            {leader.description}
          </p>
        )}
      </div>
    </div>
  );
}
