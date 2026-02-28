import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Microscope, Dna, BarChart3, ShieldCheck, FlaskConical } from "lucide-react";
import Breadcrumb from "@/components/research/Breadcrumb";
import FacultyCard from "@/components/research/FacultyCard";
import PublicationCard from "@/components/research/PublicationCard";
import TagPill from "@/components/research/TagPill";
import { departments } from "@/data/departments";
import { faculty } from "@/data/faculty";
import { publications } from "@/data/publications";

const iconMap: Record<string, React.ElementType> = {
  microscope: Microscope,
  dna: Dna,
  "chart-bar": FlaskConical,
  "shield-check": ShieldCheck,
  "bar-chart": BarChart3,
};

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

  const Icon = iconMap[department.icon] || Microscope;
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

      {/* Department Hero */}
      <section className="relative overflow-hidden min-h-[320px] md:min-h-[380px] flex items-center">
        {department.image ? (
          <>
            <Image
              src={department.image}
              alt={department.name}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--ci-blue-dark)]/95 via-[var(--ci-blue-dark)]/80 to-[var(--ci-blue-dark)]/40" />
          </>
        ) : (
          <div className="absolute inset-0 bg-[var(--ci-blue-dark)]" />
        )}

        <div className="relative z-10 section-inner py-12 md:py-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-[var(--ci-teal)]/15 backdrop-blur-sm flex items-center justify-center border border-[var(--ci-teal)]/20">
                <Icon className="h-5 w-5 text-[var(--ci-teal)]" />
              </div>
              <span className="text-white/50 text-sm font-medium">
                Established {department.established} &middot; {department.facultyCount} Faculty
              </span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              {department.name}
            </h1>
            <p className="text-white/65 text-lg leading-relaxed">
              {department.description}
            </p>
          </div>
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
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-2xl font-bold text-[var(--ci-blue)]">
                Faculty
              </h2>
              <Link
                href="/research/faculty"
                className="inline-flex items-center gap-1 text-[var(--ci-teal-dark)] hover:text-[var(--ci-blue)] text-sm font-bold transition-colors"
              >
                View all
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
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
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading text-2xl font-bold text-[var(--ci-blue)]">
                  Key Publications
                </h2>
                <Link
                  href="/research/publications"
                  className="inline-flex items-center gap-1 text-[var(--ci-teal-dark)] hover:text-[var(--ci-blue)] text-sm font-bold transition-colors"
                >
                  View all
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="max-w-3xl">
                {departmentPubs.map((pub) => (
                  <PublicationCard key={pub.id} publication={pub} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
