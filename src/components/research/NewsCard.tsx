import Link from "next/link";
import type { NewsItem } from "@/data/types";

interface NewsCardProps {
  newsItem: NewsItem;
  variant?: "default" | "list" | "compact";
  compact?: boolean;
}

export default function NewsCard({
  newsItem,
  variant,
  compact = false,
}: NewsCardProps) {
  const mode = variant || (compact ? "compact" : "default");

  const formattedDate = new Date(newsItem.date).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (mode === "list") {
    return (
      <Link
        href={`/research/news/${newsItem.slug}`}
        className="flex items-baseline gap-4 py-4 border-b border-gray-100 group"
      >
        <span className="text-sm text-[var(--ci-gray-600)] w-24 shrink-0">
          {formattedDate}
        </span>
        <div className="min-w-0">
          <h3 className="font-bold text-[var(--ci-blue)] group-hover:underline">
            {newsItem.headline}
          </h3>
          <p className="text-sm text-[var(--ci-gray-600)] line-clamp-1 mt-0.5 hidden md:block">
            {newsItem.teaser}
          </p>
        </div>
      </Link>
    );
  }

  if (mode === "compact") {
    return (
      <Link
        href={`/research/news/${newsItem.slug}`}
        className="block rounded-lg overflow-hidden hover:shadow-md transition-shadow border border-[var(--ci-gray-200)] group"
      >
        {newsItem.heroImage && (
          <div className="aspect-video overflow-hidden">
            <img
              src={newsItem.heroImage}
              alt={newsItem.headline}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="p-4">
          <p className="text-xs text-[var(--ci-gray-600)] mb-1">
            {formattedDate}
          </p>
          <h3 className="font-heading text-sm font-bold text-[var(--ci-blue)] mb-1 leading-snug">
            {newsItem.headline}
          </h3>
          <p className="text-xs text-[var(--ci-gray-600)] line-clamp-2">
            {newsItem.teaser}
          </p>
        </div>
      </Link>
    );
  }

  // variant="default" — lead story split layout
  return (
    <Link
      href={`/research/news/${newsItem.slug}`}
      className="flex flex-col md:flex-row gap-8 group"
    >
      {/* Image */}
      <div className="md:w-1/2">
        <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-[var(--ci-blue)]/10 to-[var(--ci-blue)]/5">
          {newsItem.heroImage && (
            <img
              src={newsItem.heroImage}
              alt={newsItem.headline}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="md:w-1/2">
        <p className="text-sm text-[var(--ci-gray-600)]">{formattedDate}</p>
        <h3 className="text-2xl font-bold text-[var(--ci-blue)] font-[family-name:var(--font-heading)] mt-2 group-hover:underline">
          {newsItem.headline}
        </h3>
        <p className="text-[var(--ci-gray-600)] mt-3 leading-relaxed">
          {newsItem.teaser}
        </p>
      </div>
    </Link>
  );
}
