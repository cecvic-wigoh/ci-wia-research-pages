"use client";

import { useState, useMemo } from "react";
import Breadcrumb from "@/components/research/Breadcrumb";
import NewsCard from "@/components/research/NewsCard";
import { newsItems } from "@/data/news";
import { cancerTypes } from "@/data/cancerTypes";
import { people } from "@/data/people";

export default function NewsPage() {
  const [selectedCancerType, setSelectedCancerType] = useState("");
  const [selectedResearcher, setSelectedResearcher] = useState("");

  const availableCancerTypes = useMemo(() => {
    const slugs = new Set(newsItems.flatMap((n) => n.taggedCancerTypes));
    return cancerTypes.filter((ct) => slugs.has(ct.slug));
  }, []);

  const availableResearchers = useMemo(() => {
    const slugs = new Set(newsItems.flatMap((n) => n.taggedPeople));
    return people.filter((p) => slugs.has(p.slug));
  }, []);

  const filteredNews = useMemo(() => {
    return newsItems
      .filter((item) => {
        const matchesCancer =
          !selectedCancerType ||
          item.taggedCancerTypes.includes(selectedCancerType);
        const matchesResearcher =
          !selectedResearcher ||
          item.taggedPeople.includes(selectedResearcher);
        return matchesCancer && matchesResearcher;
      })
      .sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
  }, [selectedCancerType, selectedResearcher]);

  const hasFilters = selectedCancerType || selectedResearcher;

  const clearFilters = () => {
    setSelectedCancerType("");
    setSelectedResearcher("");
  };

  return (
    <>
      <Breadcrumb items={[{ label: "News & Discoveries" }]} />

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--ci-blue)] mb-10">
            News &amp; Discoveries
          </h1>

          {/* Filter bar */}
          <div className="mb-10 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                value={selectedCancerType}
                onChange={(e) => setSelectedCancerType(e.target.value)}
                className="px-4 py-2.5 border border-[var(--ci-gray-200)] rounded-lg text-sm bg-white focus:outline-none focus:border-[var(--ci-blue)] focus:ring-1 focus:ring-[var(--ci-blue)]"
              >
                <option value="">All Cancer Types</option>
                {availableCancerTypes.map((ct) => (
                  <option key={ct.slug} value={ct.slug}>
                    {ct.name}
                  </option>
                ))}
              </select>

              <select
                value={selectedResearcher}
                onChange={(e) => setSelectedResearcher(e.target.value)}
                className="px-4 py-2.5 border border-[var(--ci-gray-200)] rounded-lg text-sm bg-white focus:outline-none focus:border-[var(--ci-blue)] focus:ring-1 focus:ring-[var(--ci-blue)]"
              >
                <option value="">All Researchers</option>
                {availableResearchers.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-[var(--ci-gray-600)]">
                Showing {filteredNews.length} of {newsItems.length} articles
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

          {/* News list */}
          {filteredNews.length > 0 ? (
            <div>
              {/* Lead story */}
              <NewsCard
                newsItem={filteredNews[0]}
                variant="default"
              />

              {/* Remaining stories as newspaper rows */}
              {filteredNews.length > 1 && (
                <div className="mt-10">
                  {filteredNews.slice(1).map((item) => (
                    <NewsCard
                      key={item.slug}
                      newsItem={item}
                      variant="list"
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-[var(--ci-gray-600)] text-lg mb-2">
                No articles found matching your filters.
              </p>
              <p className="text-[var(--ci-gray-600)] text-sm">
                Try broadening your selection or clear filters to see all
                articles.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
