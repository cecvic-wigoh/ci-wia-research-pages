"use client";

import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import Breadcrumb from "@/components/research/Breadcrumb";
import PublicationCard from "@/components/research/PublicationCard";
import { publications } from "@/data/publications";
import { departments } from "@/data/departments";

export default function PublicationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);

  const years = useMemo(() => {
    const uniqueYears = [...new Set(publications.map((p) => p.year))];
    return uniqueYears.sort((a, b) => b - a);
  }, []);

  const filteredPubs = useMemo(() => {
    return publications.filter((pub) => {
      const matchesSearch =
        !searchQuery ||
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.journal.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDepartment =
        !selectedDepartment || pub.department === selectedDepartment;

      const matchesYear =
        !selectedYear || pub.year === parseInt(selectedYear);

      return matchesSearch && matchesDepartment && matchesYear;
    });
  }, [searchQuery, selectedDepartment, selectedYear]);

  const visiblePubs = filteredPubs.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPubs.length;

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedDepartment("");
    setSelectedYear("");
  };

  const hasFilters = searchQuery || selectedDepartment || selectedYear;

  return (
    <>
      <Breadcrumb items={[{ label: "Publications" }]} />

      <section className="section">
        <div className="section-inner">
          <div className="text-center mb-10">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--ci-blue)] mb-4">
              Research Publications
            </h1>
            <p className="text-[var(--ci-gray-600)] max-w-2xl mx-auto text-lg">
              A selection of recent publications from Cancer Institute (WIA)
              researchers, contributing to global oncology literature.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--ci-gray-600)]" />
                <input
                  type="text"
                  placeholder="Search by title, author, or journal..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-[var(--ci-gray-200)] rounded-lg text-sm focus:outline-none focus:border-[var(--ci-blue)] focus:ring-1 focus:ring-[var(--ci-blue)]"
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
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2.5 border border-[var(--ci-gray-200)] rounded-lg text-sm bg-white focus:outline-none focus:border-[var(--ci-blue)] focus:ring-1 focus:ring-[var(--ci-blue)]"
              >
                <option value="">All Years</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-2.5 border border-[var(--ci-gray-200)] rounded-lg text-sm bg-white focus:outline-none focus:border-[var(--ci-blue)] focus:ring-1 focus:ring-[var(--ci-blue)]"
              >
                <option value="">All Departments</option>
                {departments.map((dept) => (
                  <option key={dept.slug} value={dept.slug}>
                    {dept.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-[var(--ci-gray-600)]">
                Showing {Math.min(visibleCount, filteredPubs.length)} of{" "}
                {filteredPubs.length} publications
              </span>
              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="text-[var(--ci-teal-dark)] hover:text-[var(--ci-blue)] font-bold transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Publication List */}
          <div className="max-w-3xl mx-auto">
            {visiblePubs.length > 0 ? (
              <>
                {visiblePubs.map((pub) => (
                  <PublicationCard key={pub.id} publication={pub} />
                ))}
                {hasMore && (
                  <div className="mt-8 text-center">
                    <button
                      onClick={() => setVisibleCount((c) => c + 10)}
                      className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--ci-blue)] text-[var(--ci-blue)] font-bold rounded-lg hover:bg-[var(--ci-blue)] hover:text-white transition-colors"
                    >
                      Load More Publications
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <p className="text-[var(--ci-gray-600)] text-lg mb-2">
                  No publications found matching your search.
                </p>
                <p className="text-[var(--ci-gray-600)] text-sm">
                  Try broadening your filters or search with different keywords.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
