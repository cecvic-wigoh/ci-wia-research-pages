import Link from "next/link";
import type { Collaborator } from "@/data/types";
import { people } from "@/data/people";

const typeLabels: Record<Collaborator["type"], string> = {
  international: "International",
  national: "National",
  network: "Network",
};

export default function CollaborationCard({
  collaborator,
}: {
  collaborator: Collaborator;
}) {
  const linkedNames = collaborator.linkedPeople
    .map((slug) => {
      const person = people.find((p) => p.slug === slug);
      return person ? { slug, name: person.name } : null;
    })
    .filter(Boolean) as { slug: string; name: string }[];

  return (
    <div className="border border-gray-200 rounded-lg p-6">
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="font-bold text-[var(--ci-blue)] text-lg">
          {collaborator.name}
        </h3>
        <span
          className={`inline-block shrink-0 px-2 py-0.5 rounded-full text-xs font-bold ${
            collaborator.status === "active"
              ? "bg-teal-100 text-teal-700"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {collaborator.status === "active" ? "Active" : "Completed"}
        </span>
      </div>

      <p className="text-sm text-[var(--ci-gray-600)] mb-3">
        {collaborator.city}, {collaborator.country} &middot;{" "}
        <span className="font-medium">{typeLabels[collaborator.type]}</span>
      </p>

      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        {collaborator.description}
      </p>

      {linkedNames.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {linkedNames.map(({ slug, name }) => (
            <Link
              key={slug}
              href={`/research/people/${slug}`}
              className="bg-[var(--ci-light)] text-[var(--ci-blue)] px-2 py-0.5 rounded-full text-xs hover:underline"
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
