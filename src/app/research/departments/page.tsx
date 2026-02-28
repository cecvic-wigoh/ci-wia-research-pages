import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Microscope, Dna, BarChart3, ShieldCheck, FlaskConical } from "lucide-react";
import Breadcrumb from "@/components/research/Breadcrumb";
import { departments } from "@/data/departments";
import { faculty } from "@/data/faculty";

const iconMap: Record<string, React.ElementType> = {
  microscope: Microscope,
  dna: Dna,
  "chart-bar": FlaskConical,
  "shield-check": ShieldCheck,
  "bar-chart": BarChart3,
};

export default function DepartmentsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Departments" }]} />

      {/* Page Hero */}
      <section className="relative overflow-hidden min-h-[320px] md:min-h-[380px] flex items-center">
        <Image
          src="/research-images/hero-lab.webp"
          alt="Cancer Institute research laboratory"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ci-blue-dark)]/95 via-[var(--ci-blue-dark)]/80 to-[var(--ci-blue-dark)]/40" />
        <div className="relative z-10 section-inner py-16 md:py-24">
          <p className="text-[var(--ci-teal)] font-bold text-sm tracking-[0.15em] uppercase mb-4">
            Research Ecosystem
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-2xl">
            Research Departments
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-xl">
            Each department brings unique expertise to the fight against
            cancer — from molecular discovery to population-level surveillance.
          </p>
        </div>
      </section>

      {/* Department Cards */}
      <section className="section">
        <div className="section-inner">
          <div className="space-y-6">
            {departments.map((dept, index) => {
              const Icon = iconMap[dept.icon] || Microscope;
              const deptFaculty = faculty.filter(
                (f) => f.departmentSlug === dept.slug
              );
              const isEven = index % 2 === 0;

              return (
                <Link
                  key={dept.slug}
                  href={`/research/departments/${dept.slug}`}
                  className="group block"
                >
                  <div className={`relative rounded-2xl overflow-hidden ${
                    dept.image ? "min-h-[280px] md:min-h-[320px]" : "bg-white border border-[var(--ci-gray-200)]"
                  }`}>
                    {/* Background Image */}
                    {dept.image && (
                      <>
                        <Image
                          src={dept.image}
                          alt={dept.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 1200px"
                        />
                        <div className={`absolute inset-0 ${
                          isEven
                            ? "bg-gradient-to-r from-[var(--ci-blue-dark)]/95 via-[var(--ci-blue-dark)]/75 to-[var(--ci-blue-dark)]/20"
                            : "bg-gradient-to-l from-[var(--ci-blue-dark)]/95 via-[var(--ci-blue-dark)]/75 to-[var(--ci-blue-dark)]/20"
                        }`} />
                      </>
                    )}

                    {/* Content */}
                    <div className={`relative z-10 p-8 md:p-10 flex flex-col justify-center min-h-[280px] md:min-h-[320px] ${
                      isEven ? "md:max-w-[60%]" : "md:max-w-[60%] md:ml-auto"
                    }`}>
                      {/* Icon + Meta */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[var(--ci-teal)]/15 backdrop-blur-sm flex items-center justify-center border border-[var(--ci-teal)]/20">
                          <Icon className="h-5 w-5 text-[var(--ci-teal)]" />
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <span className={dept.image ? "text-white/50" : "text-[var(--ci-gray-600)]"}>
                            Est. {dept.established}
                          </span>
                          <span className={dept.image ? "text-white/25" : "text-[var(--ci-gray-300)]"}>
                            &bull;
                          </span>
                          <span className={dept.image ? "text-white/50" : "text-[var(--ci-gray-600)]"}>
                            {dept.facultyCount} Faculty
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className={`font-heading text-2xl md:text-3xl font-bold leading-snug mb-3 ${
                        dept.image ? "text-white" : "text-[var(--ci-blue)]"
                      }`}>
                        {dept.name}
                      </h2>

                      {/* Description */}
                      <p className={`text-base leading-relaxed mb-5 max-w-lg ${
                        dept.image ? "text-white/65" : "text-[var(--ci-gray-600)]"
                      }`}>
                        {dept.description}
                      </p>

                      {/* Focus Area Tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {dept.focusAreas.map((area) => (
                          <span
                            key={area}
                            className={`px-3 py-1 text-xs font-bold rounded-full ${
                              dept.image
                                ? "text-[var(--ci-teal)] bg-[var(--ci-teal)]/10 border border-[var(--ci-teal)]/20 backdrop-blur-sm"
                                : "text-[var(--ci-teal-dark)] bg-[var(--ci-light)]"
                            }`}
                          >
                            {area}
                          </span>
                        ))}
                      </div>

                      {/* Faculty Avatars + CTA */}
                      <div className="flex items-center justify-between">
                        {deptFaculty.length > 0 && (
                          <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                              {deptFaculty.slice(0, 4).map((member) => (
                                <div
                                  key={member.slug}
                                  className="w-8 h-8 rounded-full border-2 border-[var(--ci-blue-dark)] overflow-hidden bg-gradient-to-br from-[var(--ci-blue)] to-[var(--ci-teal)]"
                                >
                                  {member.photo ? (
                                    <Image
                                      src={member.photo}
                                      alt={member.name}
                                      width={32}
                                      height={32}
                                      className="w-full h-full object-cover"
                                    />
                                  ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                      <span className="text-[10px] font-bold text-white/70">
                                        {member.initials}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                            <span className={`text-xs font-medium ${
                              dept.image ? "text-white/40" : "text-[var(--ci-gray-500)]"
                            }`}>
                              {deptFaculty.length} researcher{deptFaculty.length !== 1 ? "s" : ""}
                            </span>
                          </div>
                        )}
                        <span className="inline-flex items-center gap-1.5 text-[var(--ci-teal)] text-sm font-bold group-hover:gap-3 transition-all">
                          Explore Department
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <Link
              href="/research/faculty"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[var(--ci-blue)] text-[var(--ci-blue)] font-bold rounded-lg hover:bg-[var(--ci-blue)] hover:text-white transition-colors"
            >
              Browse All Faculty
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
