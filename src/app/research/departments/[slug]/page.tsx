import { use } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/research/Breadcrumb";
import FacultyCard from "@/components/research/FacultyCard";
import PublicationCard from "@/components/research/PublicationCard";
import TagPill from "@/components/research/TagPill";
import { departments } from "@/data/departments";
import { faculty } from "@/data/faculty";
import { publications } from "@/data/publications";

export default function DepartmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const department = departments.find((d) => d.slug === slug);

  if (!department) {
    return (
      <div className="section">
        <div className="section-inner text-center">
          <h1 className="font-heading text-3xl font-bold text-[var(--ci-blue)] mb-4">
            Department Not Found
          </h1>
          <p className="text-[var(--ci-gray-600)] mb-6">
            The department you are looking for could not be found.
          </p>
          <Link
            href="/research/departments"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--ci-blue)] text-white font-bold rounded-lg hover:bg-[var(--ci-blue-dark)] transition-colors"
          >
            Browse All Departments
          </Link>
        </div>
      </div>
    );
  }

  const departmentFaculty = faculty.filter(
    (f) => f.departmentSlug === department.slug
  );
  const departmentPubs = publications
    .filter((p) => p.department === department.slug)
    .slice(0, 5);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Departments", href: "/research/departments" },
          { label: department.name },
        ]}
      />

      {/* Department Header */}
      <section className="bg-[var(--ci-light)] py-12 md:py-16">
        <div className="section-inner">
          <p className="text-[var(--ci-teal-dark)] font-bold text-sm tracking-widest uppercase mb-3">
            Established {department.established}
          </p>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--ci-blue)] mb-4">
            {department.name}
          </h1>
          <p className="text-[var(--ci-gray-900)] text-lg leading-relaxed max-w-3xl">
            {department.description}
          </p>
        </div>
      </section>

      <div className="section">
        <div className="section-inner space-y-16">
          {/* Research Focus Areas */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-[var(--ci-blue)] mb-4">
              Research Focus Areas
            </h2>
            <div className="flex flex-wrap gap-3">
              {department.focusAreas.map((area) => (
                <TagPill key={area} label={area} />
              ))}
            </div>
          </section>

          {/* Faculty in this Department */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-[var(--ci-blue)] mb-6">
              Faculty
            </h2>
            {departmentFaculty.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {departmentFaculty.map((member) => (
                  <FacultyCard key={member.slug} faculty={member} />
                ))}
              </div>
            ) : (
              <p className="text-[var(--ci-gray-600)]">
                Faculty profiles for this department are being updated.{" "}
                <Link
                  href="/research/faculty"
                  className="text-[var(--ci-teal-dark)] hover:text-[var(--ci-blue)] font-bold transition-colors"
                >
                  Browse all faculty
                </Link>
              </p>
            )}
          </section>

          {/* Key Publications */}
          {departmentPubs.length > 0 && (
            <section>
              <h2 className="font-heading text-2xl font-bold text-[var(--ci-blue)] mb-6">
                Key Publications
              </h2>
              <div className="max-w-3xl">
                {departmentPubs.map((pub) => (
                  <PublicationCard key={pub.id} publication={pub} />
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href="/research/publications"
                  className="text-[var(--ci-teal-dark)] hover:text-[var(--ci-blue)] font-bold transition-colors text-sm"
                >
                  View all publications &rarr;
                </Link>
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
