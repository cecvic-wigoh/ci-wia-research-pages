"use client";

import { Search, X } from "lucide-react";
import { cancerTypes } from "@/data/cancerTypes";

interface PeopleSearchFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedDepartment: string;
  onDepartmentChange: (dept: string) => void;
  selectedCancerType: string;
  onCancerTypeChange: (type: string) => void;
  departments: string[];
  resultCount: number;
  totalCount: number;
}

export default function PeopleSearchFilter({
  searchQuery,
  onSearchChange,
  selectedDepartment,
  onDepartmentChange,
  selectedCancerType,
  onCancerTypeChange,
  departments,
  resultCount,
  totalCount,
}: PeopleSearchFilterProps) {
  const hasFilters = searchQuery || selectedDepartment || selectedCancerType;

  const clearFilters = () => {
    onSearchChange("");
    onDepartmentChange("");
    onCancerTypeChange("");
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--ci-gray-600)]" />
          <input
            type="text"
            placeholder="Search by name or research focus..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-[var(--ci-gray-200)] rounded-lg text-sm focus:outline-none focus:border-[var(--ci-blue)] focus:ring-1 focus:ring-[var(--ci-blue)] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--ci-gray-600)] hover:text-[var(--ci-gray-900)]"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Department Filter */}
        <select
          value={selectedDepartment}
          onChange={(e) => onDepartmentChange(e.target.value)}
          className="px-4 py-2.5 border border-[var(--ci-gray-200)] rounded-lg text-sm bg-white focus:outline-none focus:border-[var(--ci-blue)] focus:ring-1 focus:ring-[var(--ci-blue)] transition-colors"
        >
          <option value="">All Departments</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>

        {/* Cancer Type Filter */}
        <select
          value={selectedCancerType}
          onChange={(e) => onCancerTypeChange(e.target.value)}
          className="px-4 py-2.5 border border-[var(--ci-gray-200)] rounded-lg text-sm bg-white focus:outline-none focus:border-[var(--ci-blue)] focus:ring-1 focus:ring-[var(--ci-blue)] transition-colors"
        >
          <option value="">All Cancer Types</option>
          {cancerTypes.map((ct) => (
            <option key={ct.slug} value={ct.slug}>
              {ct.name}
            </option>
          ))}
        </select>
      </div>

      {/* Result count and clear */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-[var(--ci-gray-600)]">
          Showing {resultCount} of {totalCount} faculty
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
  );
}
