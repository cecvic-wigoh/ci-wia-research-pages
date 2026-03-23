import Link from "next/link";
import { CancerType } from "@/data/types";

interface CancerTypeCardProps {
  cancerType: CancerType;
}

export default function CancerTypeCard({ cancerType }: CancerTypeCardProps) {
  return (
    <Link
      href={`/research/cancers/${cancerType.slug}`}
      className="block bg-white border border-gray-200 rounded-xl overflow-hidden
                 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
    >
      {/* Image or emoji fallback */}
      {cancerType.image ? (
        <div className="w-full h-44 overflow-hidden bg-[var(--ci-gray-100)]">
          <img
            src={cancerType.image}
            alt={cancerType.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="w-full h-44 bg-gradient-to-br from-[var(--ci-blue)] to-[var(--ci-blue-dark)] flex items-center justify-center">
          <span className="text-5xl">{cancerType.icon}</span>
        </div>
      )}
      <div className="p-5">
        <h3 className="font-bold text-[var(--ci-blue)] text-lg mb-2 font-[family-name:var(--font-heading)]">
          {cancerType.name}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          {cancerType.description}
        </p>
      </div>
    </Link>
  );
}
