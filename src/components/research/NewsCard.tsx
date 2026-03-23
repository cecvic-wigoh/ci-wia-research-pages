import Link from "next/link";
import { Newspaper } from "lucide-react";
import type { NewsItem } from "@/data/types";
import { cancerTypes } from "@/data/cancerTypes";
import { people } from "@/data/people";

interface NewsCardProps {
  newsItem: NewsItem;
  compact?: boolean;
}

export default function NewsCard({ newsItem, compact = false }: NewsCardProps) {
  const formattedDate = new Date(newsItem.date).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (compact) {
    return (
      <Link
        href={`/research/news/${newsItem.slug}`}
        className="block p-4 rounded-lg hover:bg-[var(--ci-gray-50)] transition-colors"
      >
        <p className="text-xs text-[var(--ci-gray-600)] mb-1">
          {formattedDate}
        </p>
        <h3 className="font-heading text-sm font-bold text-[var(--ci-blue)] mb-1 leading-snug">
          {newsItem.headline}
        </h3>
        <p className="text-xs text-[var(--ci-gray-600)] line-clamp-2">
          {newsItem.teaser}
        </p>
      </Link>
    );
  }

  const cancerTypeNames = newsItem.taggedCancerTypes
    .map((slug) => cancerTypes.find((ct) => ct.slug === slug))
    .filter(Boolean);

  const taggedPeopleNames = newsItem.taggedPeople
    .map((slug) => people.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <Link
      href={`/research/news/${newsItem.slug}`}
      className="card group flex flex-col sm:flex-row gap-0 overflow-hidden"
    >
      {/* Thumbnail */}
      <div className="sm:w-[120px] h-24 sm:h-auto shrink-0 bg-gradient-to-br from-[var(--ci-blue)] to-[var(--ci-blue-dark)] flex items-center justify-center">
        <Newspaper className="h-10 w-10 text-white/60" />
      </div>

      {/* Content */}
      <div className="p-5 min-w-0 flex-1">
        <p className="text-xs text-[var(--ci-gray-600)] mb-1">
          {formattedDate}
        </p>
        <h3 className="font-heading text-lg font-bold text-[var(--ci-blue)] group-hover:text-[var(--ci-blue-dark)] transition-colors mb-2 leading-snug">
          {newsItem.headline}
        </h3>
        <p className="text-sm text-[var(--ci-gray-600)] leading-relaxed mb-3 line-clamp-2">
          {newsItem.teaser}
        </p>

        {/* Tag pills */}
        <div className="flex flex-wrap gap-1.5">
          {cancerTypeNames.map((ct) => (
            <span
              key={ct!.slug}
              className="inline-block rounded-full bg-[var(--ci-light)] text-[var(--ci-blue)] font-bold px-3 py-1 text-xs"
            >
              {ct!.name}
            </span>
          ))}
          {taggedPeopleNames.map((p) => (
            <span
              key={p!.slug}
              className="inline-block rounded-full bg-[var(--ci-gray-50)] text-[var(--ci-gray-600)] font-medium px-3 py-1 text-xs border border-[var(--ci-gray-200)]"
            >
              {p!.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
