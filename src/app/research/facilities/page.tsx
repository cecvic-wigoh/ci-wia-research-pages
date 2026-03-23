import Breadcrumb from "@/components/research/Breadcrumb";
import { facilities } from "@/data/facilities";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FacilitiesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Facilities" }]} />

      {/* Page Header */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold font-[family-name:var(--font-heading)] text-[var(--ci-blue)]">
            Research Facilities
          </h1>
          <p className="text-[var(--ci-gray-600)] mt-4 text-lg leading-relaxed max-w-2xl">
            Cancer Institute (WIA) provides researchers with access to
            state-of-the-art infrastructure spanning core instrumentation, GMP
            manufacturing, clinical trials, biobanking, and preclinical disease
            modeling — enabling translational cancer research from bench to
            bedside.
          </p>
        </div>
      </section>

      {/* Alternating Split Sections */}
      {facilities.map((facility, index) => (
        <section
          key={facility.slug}
          className={
            index < facilities.length - 1
              ? "border-b border-gray-100"
              : undefined
          }
        >
          <div
            className={`max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center py-16 px-6 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Text Side */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-[var(--ci-blue)]">
                {facility.name}
              </h2>
              <p className="text-[var(--ci-gray-600)] mt-4 leading-relaxed">
                {facility.description}
              </p>
              <Link
                href={`/research/facilities/${facility.slug}`}
                className="border-2 border-[var(--ci-blue)] text-[var(--ci-blue)] px-6 py-3 rounded inline-flex items-center gap-2 mt-8 hover:bg-[var(--ci-blue)] hover:text-white transition-colors font-bold"
              >
                Learn more
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Visual Side */}
            <div className="lg:w-1/2">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-[var(--ci-blue)]/10 to-[var(--ci-blue)]/5">
                {facility.image ? (
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl">{facility.icon}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
