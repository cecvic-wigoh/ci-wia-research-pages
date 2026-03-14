import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { founders } from "@/data/founders";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return founders.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const founder = founders.find((f) => f.slug === slug);
  if (!founder) return {};
  return {
    title: `${founder.name} — Cancer Institute (WIA)`,
    description: founder.contribution,
  };
}

export default async function FounderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const founder = founders.find((f) => f.slug === slug);
  if (!founder) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <Image
          src={founder.image}
          alt={founder.name}
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ci-blue-dark)] via-[var(--ci-blue-dark)]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ci-blue-dark)]/60 to-transparent" />

        <div className="relative z-10 section-inner pb-16 pt-32">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Research
          </Link>

          {founder.heroSubtitle && (
            <p className="text-[var(--ci-teal)] font-bold text-sm tracking-[0.2em] uppercase mb-4">
              {founder.heroSubtitle}
            </p>
          )}

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-3">
            {founder.name}
          </h1>
          <p className="text-white/60 text-lg mb-2">{founder.title}</p>
          <p className="text-white/40 text-base">{founder.years}</p>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-[var(--ci-blue-dark)] border-y border-white/10">
        <div className="section-inner py-12 md:py-16">
          <blockquote className="max-w-3xl mx-auto text-center">
            <p className="font-heading text-xl md:text-2xl text-white/90 italic leading-relaxed mb-4">
              &ldquo;{founder.quote}&rdquo;
            </p>
            <footer className="text-[var(--ci-teal)] text-sm font-bold">
              — {founder.name}
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Biography */}
      <section className="section">
        <div className="section-inner">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--ci-blue)] mb-8">
              Their Story
            </h2>
            <div className="space-y-6">
              {founder.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[var(--ci-gray-600)] text-base md:text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-[var(--ci-gray-200)]">
              <p className="text-[var(--ci-gray-600)] text-sm mb-4">
                {founder.contribution}
              </p>
              <Link
                href="/research"
                className="inline-flex items-center gap-2 text-[var(--ci-teal-dark)] hover:text-[var(--ci-blue)] text-sm font-bold transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to Research
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
