"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X } from "lucide-react";
import Breadcrumb from "@/components/research/Breadcrumb";
import { faculty } from "@/data/faculty";
import { departments } from "@/data/departments";

const gradients = [
  "from-[#134795] to-[#0D3269]",
  "from-[#1A5BC7] to-[#134795]",
  "from-[#1BA89D] to-[#134795]",
  "from-[#0D3269] to-[#1A5BC7]",
  "from-[#134795] to-[#1BA89D]",
  "from-[#1A5BC7] to-[#0D3269]",
  "from-[#0D3269] to-[#1BA89D]",
  "from-[#1BA89D] to-[#1A5BC7]",
  "from-[#134795] to-[#23CDC0]",
];

export default function FacultyDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const filteredFaculty = useMemo(() => {
    return faculty.filter((member) => {
      const matchesSearch =
        !searchQuery ||
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.researchFocus
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        member.researchInterests.some((interest) =>
          interest.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesDepartment =
        !selectedDepartment || member.departmentSlug === selectedDepartment;

      return matchesSearch && matchesDepartment;
    });
  }, [searchQuery, selectedDepartment]);

  const hasFilters = searchQuery || selectedDepartment;

  return (
    <>
      <Breadcrumb items={[{ label: "Faculty" }]} />

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-[var(--ci-blue-dark)] py-16 md:py-24">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 30% 60%, rgba(35,205,192,0.4) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(26,91,199,0.4) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative section-inner text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
            Scientist Directory
          </h1>
          <p className="text-white/60 text-lg">Faculty</p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-[var(--ci-gray-200)] bg-white sticky top-16 md:top-20 z-20">
        <div className="section-inner py-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--ci-gray-600)]" />
              <input
                type="text"
                placeholder="Search faculty by name or research area..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-[var(--ci-gray-200)] rounded-lg text-sm focus:outline-none focus:border-[var(--ci-blue)] focus:ring-1 focus:ring-[var(--ci-blue)] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--ci-gray-600)] hover:text-[var(--ci-gray-900)]"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-4 py-2.5 border border-[var(--ci-gray-200)] rounded-lg text-sm bg-white focus:outline-none focus:border-[var(--ci-blue)] focus:ring-1 focus:ring-[var(--ci-blue)] transition-colors w-full sm:w-auto"
            >
              <option value="">All Departments</option>
              {departments.map((dept) => (
                <option key={dept.slug} value={dept.slug}>
                  {dept.name}
                </option>
              ))}
            </select>
            {hasFilters && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedDepartment("");
                }}
                className="text-[var(--ci-teal-dark)] hover:text-[var(--ci-blue)] text-sm font-bold transition-colors whitespace-nowrap"
              >
                Clear All
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="section">
        <div className="section-inner">
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-[var(--ci-gray-600)]">
              {filteredFaculty.length} faculty member
              {filteredFaculty.length !== 1 ? "s" : ""}
            </p>
          </div>

          {filteredFaculty.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
              {filteredFaculty.map((member, index) => (
                <Link
                  key={member.slug}
                  href={`/research/faculty/${member.slug}`}
                  className="group block"
                  onMouseEnter={() => setHoveredSlug(member.slug)}
                  onMouseLeave={() => setHoveredSlug(null)}
                >
                  {/* Card with flip effect */}
                  <div className="relative aspect-square mb-3" style={{ perspective: "600px" }}>
                    <div
                      className="relative w-full h-full transition-transform duration-500 ease-in-out"
                      style={{
                        transformStyle: "preserve-3d",
                        transform:
                          hoveredSlug === member.slug
                            ? "rotateY(180deg)"
                            : "rotateY(0deg)",
                      }}
                    >
                      {/* Front: Photo */}
                      <div
                        className="absolute inset-0 rounded-sm overflow-hidden"
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        {member.photo ? (
                          <Image
                            src={member.photo}
                            alt={member.name}
                            width={300}
                            height={300}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div
                            className={`w-full h-full bg-gradient-to-br ${
                              gradients[index % gradients.length]
                            } flex items-center justify-center`}
                          >
                            <span className="text-5xl font-heading font-bold text-white/30">
                              {member.initials}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Back: Details */}
                      <div
                        className="absolute inset-0 rounded-sm bg-[var(--ci-gray-100)] border border-[var(--ci-gray-200)] p-5 md:p-6 flex flex-col justify-start"
                        style={{
                          backfaceVisibility: "hidden",
                          transform: "rotateY(180deg)",
                        }}
                      >
                        <h3 className="font-heading text-base md:text-lg font-bold text-[var(--ci-gray-900)] mb-2 leading-snug">
                          {member.name}
                        </h3>
                        <p className="text-sm text-[var(--ci-gray-900)] mb-3">
                          {member.title.split(",")[0]}
                        </p>
                        <p className="text-sm text-[var(--ci-gray-600)] mb-3">
                          {member.department}
                        </p>
                        {member.researchInterests.length > 0 && (
                          <p className="text-xs text-[var(--ci-gray-600)] leading-relaxed">
                            {member.researchInterests.slice(0, 3).join(" · ")}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Name below card */}
                  <p className="text-sm font-bold text-[var(--ci-gray-900)] group-hover:text-[var(--ci-blue)] transition-colors leading-tight">
                    {member.name}
                  </p>
                  <p className="text-xs text-[var(--ci-gray-600)] mt-0.5">
                    {member.title.split(",")[0]}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-[var(--ci-gray-600)] text-lg mb-2">
                No faculty found matching your search.
              </p>
              <p className="text-[var(--ci-gray-600)] text-sm">
                Try broadening your filters or search with different keywords.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
