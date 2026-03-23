import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/research/Breadcrumb";
import { newsItems } from "@/data/news";
import { people } from "@/data/people";
import { cancerTypes } from "@/data/cancerTypes";

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const newsItem = newsItems.find((item) => item.slug === slug);

  if (!newsItem) {
    notFound();
  }

  const formattedDate = new Date(newsItem.date).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const taggedCancerTypeObjects = newsItem.taggedCancerTypes
    .map((s) => cancerTypes.find((ct) => ct.slug === s))
    .filter(Boolean);

  const taggedPeopleObjects = newsItem.taggedPeople
    .map((s) => people.find((p) => p.slug === s))
    .filter(Boolean);

  return (
    <>
      <section>
        <div className="max-w-2xl mx-auto px-6 py-24">
          <Breadcrumb
            items={[
              { label: "News", href: "/research/news" },
              { label: formattedDate },
            ]}
          />

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] font-bold text-[var(--ci-blue)] leading-tight">
            {newsItem.headline}
          </h1>

          {/* Date */}
          <p className="text-sm text-[var(--ci-gray-600)] mt-4">
            {formattedDate}
          </p>

          {/* Tag pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            {taggedCancerTypeObjects.map((ct) => (
              <Link
                key={ct!.slug}
                href={`/research/cancers/${ct!.slug}`}
                className="inline-block rounded-full text-[var(--ci-blue)] px-3 py-1 text-xs font-medium border border-gray-200 hover:underline transition-colors"
              >
                {ct!.name}
              </Link>
            ))}
            {taggedPeopleObjects.map((p) => (
              <Link
                key={p!.slug}
                href={`/research/people/${p!.slug}`}
                className="inline-block rounded-full text-[var(--ci-gray-600)] px-3 py-1 text-xs font-medium border border-gray-200 hover:underline transition-colors"
              >
                {p!.name}
              </Link>
            ))}
          </div>

          {/* Hero image */}
          {newsItem.heroImage ? (
            <div className="rounded-lg overflow-hidden aspect-video mt-8">
              <img
                src={newsItem.heroImage}
                alt={newsItem.headline}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="border border-gray-200 rounded-lg aspect-video mt-8 flex items-center justify-center">
              <span className="text-gray-300 text-sm">Hero Image</span>
            </div>
          )}

          {/* Body */}
          <div
            className="text-lg leading-loose text-[var(--ci-gray-900)] mt-12
              [&_p]:mb-5 [&_p]:leading-loose
              [&_h2]:font-[family-name:var(--font-heading)] [&_h2]:text-[var(--ci-blue)] [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4
              [&_h3]:font-[family-name:var(--font-heading)] [&_h3]:text-[var(--ci-blue)] [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-3
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5
              [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-5
              [&_li]:mb-2"
            dangerouslySetInnerHTML={{ __html: newsItem.body }}
          />

          {/* Why This Matters */}
          <div className="border-l-[3px] border-[var(--ci-blue)] pl-6 py-2 mt-12">
            <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--ci-blue)] mb-2">
              Why This Matters
            </h2>
            <p className="text-[var(--ci-gray-900)] leading-relaxed">
              {newsItem.whyItMatters}
            </p>
          </div>

          {/* Related Researchers */}
          {taggedPeopleObjects.length > 0 && (
            <div className="mt-12">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--ci-blue)] mb-4">
                Related Researchers
              </h2>
              <div className="flex flex-wrap gap-x-1">
                {taggedPeopleObjects.map((person, i) => (
                  <span key={person!.slug}>
                    <Link
                      href={`/research/people/${person!.slug}`}
                      className="text-[var(--ci-blue)] hover:underline"
                    >
                      {person!.name} &rarr;
                    </Link>
                    {i < taggedPeopleObjects.length - 1 && <span>, </span>}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Related Cancer Types */}
          {taggedCancerTypeObjects.length > 0 && (
            <div className="mt-8">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--ci-blue)] mb-4">
                Related Cancer Types
              </h2>
              <div className="flex flex-wrap gap-x-1">
                {taggedCancerTypeObjects.map((ct, i) => (
                  <span key={ct!.slug}>
                    <Link
                      href={`/research/cancers/${ct!.slug}`}
                      className="text-[var(--ci-blue)] hover:underline"
                    >
                      {ct!.name} &rarr;
                    </Link>
                    {i < taggedCancerTypeObjects.length - 1 && <span>, </span>}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
