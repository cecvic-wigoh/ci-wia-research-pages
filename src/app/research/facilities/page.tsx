import { Microscope, Database, FlaskConical, HeartPulse, Scan, Zap } from "lucide-react";
import Breadcrumb from "@/components/research/Breadcrumb";
import { facilities } from "@/data/facilities";

const iconMap: Record<string, React.ElementType> = {
  microscope: Microscope,
  database: Database,
  "flask-conical": FlaskConical,
  "heart-pulse": HeartPulse,
  scan: Scan,
  zap: Zap,
};

export default function FacilitiesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Facilities" }]} />

      <section className="section">
        <div className="section-inner">
          <div className="text-center mb-10">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--ci-blue)] mb-4">
              Research Facilities &amp; Core Resources
            </h1>
            <p className="text-[var(--ci-gray-600)] max-w-2xl mx-auto text-lg">
              Cancer Institute (WIA) provides researchers with access to
              state-of-the-art facilities spanning molecular biology, clinical
              trials, diagnostic imaging, and population health surveillance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility) => {
              const Icon = iconMap[facility.icon] || Microscope;
              return (
                <div key={facility.name} className="card">
                  <div className="w-12 h-12 rounded-lg bg-[var(--ci-light)] flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-[var(--ci-teal-dark)]" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[var(--ci-blue)] mb-2">
                    {facility.name}
                  </h3>
                  <p className="text-sm text-[var(--ci-gray-600)] mb-3 leading-relaxed">
                    {facility.description}
                  </p>
                  <p className="text-xs text-[var(--ci-teal-dark)] font-bold">
                    {facility.capabilities[0]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Historical Firsts */}
      <section className="section bg-[var(--ci-light)]">
        <div className="section-inner">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--ci-blue)] mb-8 text-center">
            Historical Firsts in Cancer Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="font-heading text-4xl font-bold text-[var(--ci-blue)] mb-2">
                1956
              </p>
              <p className="text-[var(--ci-gray-900)] font-bold mb-1">
                First Cobalt-60 Unit
              </p>
              <p className="text-sm text-[var(--ci-gray-600)]">
                First cobalt-60 teletherapy unit in Southeast Asia
              </p>
            </div>
            <div className="text-center">
              <p className="font-heading text-4xl font-bold text-[var(--ci-blue)] mb-2">
                1976
              </p>
              <p className="text-[var(--ci-gray-900)] font-bold mb-1">
                First Linear Accelerator
              </p>
              <p className="text-sm text-[var(--ci-gray-600)]">
                First linear accelerator in India for cancer treatment
              </p>
            </div>
            <div className="text-center">
              <p className="font-heading text-4xl font-bold text-[var(--ci-blue)] mb-2">
                1984
              </p>
              <p className="text-[var(--ci-gray-900)] font-bold mb-1">
                First DM &amp; MCh Degrees
              </p>
              <p className="text-sm text-[var(--ci-gray-600)]">
                India&apos;s first super-specialty oncology degree programs
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
