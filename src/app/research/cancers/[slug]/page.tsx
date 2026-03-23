import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import DonationCta from "@/components/research/DonationCta";
import { cancerTypes } from "@/data/cancerTypes";
import { people } from "@/data/people";

export function generateStaticParams() {
  return cancerTypes.map((ct) => ({ slug: ct.slug }));
}

export default async function CancerTypeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cancerType = cancerTypes.find((ct) => ct.slug === slug);

  if (!cancerType) {
    notFound();
  }

  const researchers = people.filter((p) => p.cancerTypes.includes(slug));

  return (
    <>
      {/* Hero — full-bleed image with overlay */}
      <section className="relative min-h-[500px] flex items-center justify-center text-center px-6 overflow-hidden">
        {cancerType.image ? (
          <div className="absolute inset-0">
            <img
              src={cancerType.image}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ci-blue-dark/70 via-ci-blue-dark/60 to-ci-blue-dark/90" />
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-ci-blue-dark via-ci-blue to-ci-blue-light" />
        )}

        <div className="relative z-10 max-w-3xl mx-auto py-24">
          <p className="text-6xl mb-4">{cancerType.icon}</p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl font-bold text-white uppercase tracking-wider mb-6">
            {cancerType.name}
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto mb-8">
            {cancerType.description}
          </p>
          <a
            href="#research-themes"
            className="inline-block bg-ci-blue-dark/80 border border-white/20 text-white px-8 py-3 rounded font-bold hover:bg-ci-blue-dark transition-colors"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Impact Stats — dark bar */}
      <section className="bg-ci-blue-dark py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cancerType.impactStats.map((stat, index) => (
              <div
                key={index}
                className={`text-center py-4 px-3 rounded-lg ${
                  index === 0
                    ? "bg-ci-teal-dark text-white"
                    : "bg-white/5 text-white"
                }`}
              >
                <div className="text-3xl md:text-4xl font-bold">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-wider mt-1 opacity-70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Researchers — horizontal card row */}
      {researchers.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-ci-gray-900">
                Our Researchers
              </h2>
              <Link
                href="/research/people"
                className="text-ci-teal-dark font-bold text-sm inline-flex items-center gap-1 hover:text-ci-blue transition-colors"
              >
                See all <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {researchers.map((person) => (
                <Link
                  key={person.slug}
                  href={`/research/people/${person.slug}`}
                  className="shrink-0 w-56 group"
                >
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-ci-blue-light to-ci-blue border-2 border-ci-teal/20 mb-3">
                    {person.photo ? (
                      <img
                        src={person.photo}
                        alt={person.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-3xl font-bold text-white/60">
                          {person.initials}
                        </span>
                      </div>
                    )}
                  </div>
                  <h3 className="font-bold text-ci-blue text-sm group-hover:text-ci-teal-dark transition-colors">
                    {person.name}
                  </h3>
                  <p className="text-xs text-ci-gray-600 mt-0.5">
                    {person.department}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Research Themes — 2x3 card grid */}
      <section id="research-themes" className="py-16 px-6 bg-ci-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-ci-gray-900">
              Research Themes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cancerType.researchThemes.map((theme, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-ci-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-ci-teal/10 flex items-center justify-center shrink-0">
                    <span className="text-ci-teal-dark font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-ci-gray-900 text-sm mb-2">
                      {theme.title}
                    </h3>
                    <p className="text-xs text-ci-gray-600 leading-relaxed">
                      {theme.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Trials — dark background */}
      <section className="bg-ci-blue-dark py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white">
              Clinical Trials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cancerType.clinicalTrials.map((trial, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <p className="text-white/40 text-xs uppercase tracking-wider">
                    {trial.id}
                  </p>
                  <span
                    className={`shrink-0 text-[10px] font-bold uppercase px-2.5 py-1 rounded ${
                      trial.status === "Recruiting"
                        ? "bg-ci-teal text-white"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    {trial.status}
                  </span>
                </div>
                <h3 className="font-bold text-white text-sm leading-tight mb-2">
                  {trial.title}
                </h3>
                <p className="text-white/50 text-xs">
                  PI: {trial.pi}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <DonationCta
        cancerTypeName={cancerType.name}
        donationUrl={cancerType.donationUrl}
        donationCta={cancerType.donationCta}
        donationDescription={cancerType.donationDescription}
      />
    </>
  );
}
