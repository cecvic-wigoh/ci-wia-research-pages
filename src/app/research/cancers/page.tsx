import { cancerTypes } from "@/data/cancerTypes";
import CancerTypeCard from "@/components/research/CancerTypeCard";
import Breadcrumb from "@/components/research/Breadcrumb";

export default function CancersPage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb
          items={[
            { label: "Research", href: "/research" },
            { label: "Cancers We Study" },
          ]}
        />

        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[var(--ci-blue)] mb-4">
          Cancers We Study
        </h1>

        <p className="text-[var(--ci-gray-600)] max-w-3xl text-lg mb-10 leading-relaxed">
          Our research is organized around the cancers that affect our patients
          — enabling targeted discovery, specialized clinical trials, and
          translational breakthroughs for each disease.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cancerTypes.map((ct) => (
            <CancerTypeCard key={ct.slug} cancerType={ct} />
          ))}
        </div>
      </div>
    </section>
  );
}
