import Link from "next/link";
import { Facility } from "@/data/types";

interface FacilityTileProps {
  facility: Facility;
}

export default function FacilityTile({ facility }: FacilityTileProps) {
  return (
    <Link
      href={`/research/facilities/${facility.slug}`}
      className="group block rounded-xl border border-[var(--ci-gray-200)] bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
    >
      <div className="h-28 bg-gradient-to-br from-[var(--ci-blue)] to-[var(--ci-blue-dark)] flex items-center justify-center">
        <span className="text-4xl">{facility.icon}</span>
      </div>
      <div className="p-5">
        <h3 className="font-heading text-lg font-bold text-[var(--ci-blue)] mb-2">
          {facility.name}
        </h3>
        <p className="text-sm text-[var(--ci-gray-600)] leading-relaxed mb-3 line-clamp-3">
          {facility.description}
        </p>
        <span className="text-sm font-semibold text-[var(--ci-teal-dark)] group-hover:underline">
          Learn more &rarr;
        </span>
      </div>
    </Link>
  );
}
