import Link from "next/link";
import { CancerType } from "@/data/types";

interface CancerTypeCardProps {
  cancerType: CancerType;
}

export default function CancerTypeCard({ cancerType }: CancerTypeCardProps) {
  return (
    <Link
      href={`/research/cancers/${cancerType.slug}`}
      className="relative aspect-[4/3] rounded-lg overflow-hidden group block"
    >
      {cancerType.image ? (
        <img
          src={cancerType.image}
          alt={cancerType.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[var(--ci-blue)] to-[var(--ci-blue-dark)] flex items-center justify-center">
          <span className="text-5xl">{cancerType.icon}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-lg font-bold text-white font-[family-name:var(--font-heading)]">
          {cancerType.name}
        </h3>
        <p className="text-sm text-white/80 line-clamp-2 mt-1">
          {cancerType.description}
        </p>
      </div>
    </Link>
  );
}
