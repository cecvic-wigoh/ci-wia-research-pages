import Breadcrumb from "@/components/research/Breadcrumb";
import FacilityTile from "@/components/research/FacilityTile";
import { facilities } from "@/data/facilities";
import { Facility } from "@/data/types";

export default function FacilitiesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Facilities" }]} />

      <section className="section">
        <div className="section-inner">
          <div className="text-center mb-10">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--ci-blue)] mb-4">
              Research Facilities
            </h1>
            <p className="text-[var(--ci-gray-600)] max-w-2xl mx-auto text-lg leading-relaxed">
              Cancer Institute (WIA) provides researchers with access to
              state-of-the-art infrastructure spanning core instrumentation, GMP
              manufacturing, clinical trials, biobanking, and preclinical disease
              modeling — enabling translational cancer research from bench to
              bedside.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility: Facility) => (
              <FacilityTile key={facility.slug} facility={facility} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
