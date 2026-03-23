"use client";

import { useState, useMemo } from "react";
import { people } from "@/data/people";
import type { Person } from "@/data/types";
import PersonCard from "@/components/research/PersonCard";
import PeopleSearchFilter from "@/components/research/PeopleSearchFilter";
import { cancerTypes } from "@/data/cancerTypes";
import Breadcrumb from "@/components/research/Breadcrumb";

export default function PeopleDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedCancerType, setSelectedCancerType] = useState("");
  const [activeTab, setActiveTab] = useState<"internal" | "external">(
    "internal"
  );

  const departments = useMemo(
    () => [...new Set(people.map((p) => p.department))],
    []
  );

  const filteredPeople = useMemo(() => {
    return people.filter((person) => {
      // Tab filter
      const matchesTab =
        activeTab === "internal"
          ? person.category === "internal"
          : person.category !== "internal";

      // Search filter
      const matchesSearch =
        !searchQuery ||
        person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        person.researchFocus
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        person.researchInterests.some((interest) =>
          interest.toLowerCase().includes(searchQuery.toLowerCase())
        );

      // Department filter
      const matchesDepartment =
        !selectedDepartment || person.department === selectedDepartment;

      // Cancer type filter
      const matchesCancerType =
        !selectedCancerType ||
        person.cancerTypes.includes(selectedCancerType);

      return matchesTab && matchesSearch && matchesDepartment && matchesCancerType;
    });
  }, [activeTab, searchQuery, selectedDepartment, selectedCancerType]);

  const tabPeople = useMemo(
    () =>
      people.filter((p) =>
        activeTab === "internal"
          ? p.category === "internal"
          : p.category !== "internal"
      ),
    [activeTab]
  );

  return (
    <>
      <Breadcrumb items={[{ label: "People" }]} />

      {/* Header */}
      <section className="section-inner py-12 md:py-16">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-[var(--ci-gray-900)] mb-4 tracking-tight">
          Our Researchers
        </h1>
        <p className="text-[var(--ci-gray-600)] text-lg max-w-3xl leading-relaxed">
          Meet the scientists and clinicians driving cancer research at the
          Cancer Institute (WIA). Our faculty span molecular oncology,
          epidemiology, clinical trials, and translational medicine.
        </p>
      </section>

      {/* Tabs */}
      <section className="border-b border-[var(--ci-gray-200)] bg-white sticky top-16 md:top-20 z-20">
        <div className="section-inner">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("internal")}
              className={`pb-3 text-sm font-bold transition-colors border-b-2 ${
                activeTab === "internal"
                  ? "text-[var(--ci-blue)] border-[var(--ci-teal)]"
                  : "text-[var(--ci-gray-600)] border-transparent hover:text-[var(--ci-gray-900)]"
              }`}
            >
              Cancer Institute Faculty
            </button>
            <button
              onClick={() => setActiveTab("external")}
              className={`pb-3 text-sm font-bold transition-colors border-b-2 ${
                activeTab === "external"
                  ? "text-[var(--ci-blue)] border-[var(--ci-teal)]"
                  : "text-[var(--ci-gray-600)] border-transparent hover:text-[var(--ci-gray-900)]"
              }`}
            >
              International &amp; Adjunct Faculty
            </button>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="section-inner py-6">
        <PeopleSearchFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedDepartment={selectedDepartment}
          onDepartmentChange={setSelectedDepartment}
          selectedCancerType={selectedCancerType}
          onCancerTypeChange={setSelectedCancerType}
          departments={departments}
          resultCount={filteredPeople.length}
          totalCount={tabPeople.length}
        />
      </section>

      {/* People Grid */}
      <section className="section">
        <div className="section-inner">
          {filteredPeople.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPeople.map((person) => (
                <PersonCard key={person.slug} person={person} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-[var(--ci-gray-600)] text-lg mb-2">
                No researchers found matching your filters.
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
