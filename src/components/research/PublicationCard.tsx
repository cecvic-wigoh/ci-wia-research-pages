import { ExternalLink } from "lucide-react";
import type { Publication } from "@/data/publications";

interface PublicationCardProps {
  publication: Publication;
}

export default function PublicationCard({ publication }: PublicationCardProps) {
  const highlightAuthor = (authors: string, highlight?: string) => {
    if (!highlight) return authors;
    const parts = authors.split(highlight);
    if (parts.length === 1) return authors;
    return (
      <>
        {parts[0]}
        <strong className="text-[var(--ci-blue)]">{highlight}</strong>
        {parts[1]}
      </>
    );
  };

  return (
    <article className="border-b border-[var(--ci-gray-200)] pb-5 mb-5 last:border-b-0 last:mb-0 last:pb-0">
      <h4 className="font-heading text-base font-bold text-[var(--ci-gray-900)] mb-1.5 leading-snug">
        {publication.title}
      </h4>
      <p className="text-sm text-[var(--ci-gray-600)] mb-1.5 leading-relaxed">
        {highlightAuthor(publication.authors, publication.highlightAuthor)}
      </p>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
        <span className="text-[var(--ci-blue)] font-bold italic">
          {publication.journal}
        </span>
        {publication.volume && (
          <span className="text-[var(--ci-gray-600)]">
            {publication.volume}
            {publication.pages ? `: ${publication.pages}` : ""}
          </span>
        )}
        <span className="text-[var(--ci-gray-600)]">({publication.year})</span>
        {publication.doi && (
          <a
            href={`https://doi.org/${publication.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[var(--ci-teal-dark)] hover:text-[var(--ci-blue)] font-bold transition-colors"
          >
            DOI
            <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>
    </article>
  );
}
