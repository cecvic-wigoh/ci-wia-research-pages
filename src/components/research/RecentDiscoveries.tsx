"use client";

import Link from "next/link";
import { newsItems } from "@/data/news";
import NewsCard from "@/components/research/NewsCard";

interface RecentDiscoveriesProps {
  filterBy: { type: "person" | "cancerType"; slug: string };
}

export default function RecentDiscoveries({ filterBy }: RecentDiscoveriesProps) {
  const filtered = newsItems
    .filter((item) =>
      filterBy.type === "person"
        ? item.taggedPeople.includes(filterBy.slug)
        : item.taggedCancerTypes.includes(filterBy.slug)
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  if (filtered.length === 0) return null;

  const heading =
    filterBy.type === "person" ? "Lab News & Discoveries" : "Recent Discoveries";

  return (
    <section className="section">
      <div className="section-inner py-12">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--ci-blue)] mb-8">
          {heading}
        </h2>
        <div className="flex flex-col sm:flex-row gap-6">
          {filtered.map((item) => (
            <div key={item.slug} className="flex-1 min-w-0">
              <NewsCard newsItem={item} compact={true} />
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link
            href="/research/news"
            className="text-[var(--ci-blue)] font-bold hover:text-[var(--ci-blue-dark)] transition-colors"
          >
            View all news &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
