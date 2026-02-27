import Link from "next/link";
import Breadcrumb from "@/components/research/Breadcrumb";
import DepartmentCard from "@/components/research/DepartmentCard";
import { departments } from "@/data/departments";

export default function DepartmentsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Departments" }]} />

      <section className="section">
        <div className="section-inner">
          <div className="text-center mb-10">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--ci-blue)] mb-4">
              Research Departments
            </h1>
            <p className="text-[var(--ci-gray-600)] max-w-2xl mx-auto text-lg">
              Cancer Institute (WIA)&apos;s research spans five departments,
              each contributing unique expertise to the fight against cancer —
              from molecular discovery to population-level surveillance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept) => (
              <DepartmentCard key={dept.slug} department={dept} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/research/faculty"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--ci-blue)] text-[var(--ci-blue)] font-bold rounded-lg hover:bg-[var(--ci-blue)] hover:text-white transition-colors"
            >
              Browse All Faculty
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
