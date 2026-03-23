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
      <Breadcrumb
        items={[
          { label: "News", href: "/research/news" },
          { label: formattedDate },
        ]}
      />

      <section className="section">
        <div className="section-inner max-w-3xl">
          {/* Headline */}
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--ci-blue)] mb-6 leading-tight">
            {newsItem.headline}
          </h1>

          {/* Tag pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {taggedCancerTypeObjects.map((ct) => (
              <Link
                key={ct!.slug}
                href={`/research/cancers/${ct!.slug}`}
                className="inline-block rounded-full bg-[var(--ci-light)] text-[var(--ci-blue)] font-bold px-4 py-1.5 text-sm hover:bg-[var(--ci-blue)] hover:text-white transition-colors"
              >
                {ct!.name}
              </Link>
            ))}
            {taggedPeopleObjects.map((p) => (
              <Link
                key={p!.slug}
                href={`/research/people/${p!.slug}`}
                className="inline-block rounded-full bg-[var(--ci-gray-50)] text-[var(--ci-gray-600)] font-medium px-4 py-1.5 text-sm border border-[var(--ci-gray-200)] hover:bg-[var(--ci-blue)] hover:text-white hover:border-[var(--ci-blue)] transition-colors"
              >
                {p!.name}
              </Link>
            ))}
          </div>

          {/* Hero image placeholder */}
          <div className="w-full h-[200px] rounded-xl bg-gradient-to-br from-[var(--ci-blue)] via-[var(--ci-blue-dark)] to-[var(--ci-blue-light)] mb-10 flex items-center justify-center">
            <span className="text-white/40 text-sm font-medium">
              Hero Image
            </span>
          </div>

          {/* Body */}
          <div
            className="prose prose-lg max-w-none text-[var(--ci-gray-900)] leading-relaxed mb-12
              [&_p]:mb-5 [&_p]:leading-relaxed
              [&_h2]:font-heading [&_h2]:text-[var(--ci-blue)] [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4
              [&_h3]:font-heading [&_h3]:text-[var(--ci-blue)] [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-3
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5
              [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-5
              [&_li]:mb-2"
            dangerouslySetInnerHTML={{ __html: newsItem.body }}
          />

          {/* Why This Matters */}
          <div className="bg-[var(--ci-light)] border-l-4 border-[var(--ci-teal)] rounded-r-lg p-6 mb-12">
            <h2 className="font-heading text-lg font-bold text-[var(--ci-blue)] mb-2">
              Why This Matters
            </h2>
            <p className="text-[var(--ci-gray-900)] leading-relaxed">
              {newsItem.whyItMatters}
            </p>
          </div>

          {/* Related Researchers */}
          {taggedPeopleObjects.length > 0 && (
            <div className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--ci-blue)] mb-6">
                Related Researchers
              </h2>
              <div className="flex flex-wrap gap-4">
                {taggedPeopleObjects.map((person) => (
                  <Link
                    key={person!.slug}
                    href={`/research/people/${person!.slug}`}
                    className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-[var(--ci-gray-200)]"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--ci-blue)] to-[var(--ci-blue-dark)] flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-white">
                        {person!.initials}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-[var(--ci-gray-900)] text-sm">
                        {person!.name}
                      </div>
                      <div className="text-xs text-[var(--ci-gray-600)]">
                        {person!.department}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related Cancer Types */}
          {taggedCancerTypeObjects.length > 0 && (
            <div className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--ci-blue)] mb-6">
                Related Cancer Types
              </h2>
              <div className="flex flex-wrap gap-2">
                {taggedCancerTypeObjects.map((ct) => (
                  <Link
                    key={ct!.slug}
                    href={`/research/cancers/${ct!.slug}`}
                    className="inline-block rounded-full bg-[var(--ci-light)] text-[var(--ci-blue)] font-bold px-4 py-1.5 text-sm hover:bg-[var(--ci-blue)] hover:text-white transition-colors"
                  >
                    {ct!.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
