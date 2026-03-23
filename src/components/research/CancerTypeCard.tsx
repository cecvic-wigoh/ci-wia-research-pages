import Link from "next/link";
import { CancerType } from "@/data/types";

interface CancerTypeCardProps {
  cancerType: CancerType;
}

export default function CancerTypeCard({ cancerType }: CancerTypeCardProps) {
  return (
    <Link
      href={`/research/cancers/${cancerType.slug}`}
      className="block bg-white border border-gray-200 rounded-lg p-6 text-center
                 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
    >
      <div className="text-4xl mb-3">{cancerType.icon}</div>
      <h3 className="font-bold text-[var(--ci-blue)] text-lg mb-2 font-[family-name:var(--font-heading)]">
        {cancerType.name}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {cancerType.description}
      </p>
    </Link>
  );
}
