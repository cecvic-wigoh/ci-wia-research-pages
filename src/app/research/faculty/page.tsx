"use client";

import { useState, useMemo } from "react";
import Breadcrumb from "@/components/research/Breadcrumb";
import SearchFilter from "@/components/research/SearchFilter";
import FacultyCard from "@/components/research/FacultyCard";
import { faculty } from "@/data/faculty";

export default function FacultyDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const filteredFaculty = useMemo(() => {
    return faculty.filter((member) => {
      const matchesSearch =
        !searchQuery ||
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.researchFocus.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.researchInterests.some((interest) =>
          interest.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesDepartment =
        !selectedDepartment || member.departmentSlug === selectedDepartment;

      return matchesSearch && matchesDepartment;
    });
  }, [searchQuery, selectedDepartment]);

  return (
    <>
      <Breadcrumb items={[{ label: "Faculty" }]} />

      <section className="section">
        <div className="section-inner">
          <div className="text-center mb-10">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--ci-blue)] mb-4">
              Research Faculty
            </h1>
            <p className="text-[var(--ci-gray-600)] max-w-2xl mx-auto text-lg">
              Meet the researchers driving cancer science forward at Cancer
              Institute (WIA). Each faculty member leads cutting-edge research
              with a commitment to translational impact.
            </p>
          </div>

          <div className="mb-8">
            <SearchFilter
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedDepartment={selectedDepartment}
              onDepartmentChange={setSelectedDepartment}
              resultCount={filteredFaculty.length}
              totalCount={faculty.length}
            />
          </div>

          {filteredFaculty.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFaculty.map((member) => (
                <FacultyCard key={member.slug} faculty={member} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
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
