import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/research/Breadcrumb";
import DonationCta from "@/components/research/DonationCta";
import RecentDiscoveries from "@/components/research/RecentDiscoveries";
import TagPill from "@/components/research/TagPill";
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
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        {cancerType.image ? (
          <div className="absolute inset-0">
            <img src={cancerType.image} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[var(--ci-blue)]/80" />
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--ci-blue-dark)] via-[var(--ci-blue)] to-[var(--ci-blue-light)]" />
        )}

        <div className="relative z-10 section-inner">
          <Breadcrumb
            items={[
              { label: "Cancers", href: "/research/cancers" },
              { label: cancerType.name },
            ]}
          />
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            {cancerType.icon} {cancerType.name}
          </h1>
          <p className="text-white/85 max-w-3xl text-lg leading-relaxed">
            {cancerType.overviewHtml}
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-white py-12 px-6">
        <div className="section-inner">
          <div className="flex justify-around items-center flex-wrap gap-8">
            {cancerType.impactStats.map((stat, index) => (
              <div
                key={index}
                className={`text-center ${index < cancerType.impactStats.length - 1 ? "border-r border-gray-200 pr-8" : ""}`}
              >
                <div className="text-3xl font-bold text-[var(--ci-blue)]">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--ci-gray-600)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Researchers */}
      {researchers.length > 0 && (
        <section className="section">
          <div className="section-inner py-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--ci-blue)] mb-8">
              Our Researchers
            </h2>
            <div className="flex flex-wrap gap-6">
              {researchers.map((person) => (
                <Link
                  key={person.slug}
                  href={`/research/people/${person.slug}`}
                  className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-[var(--ci-gray-200)]"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--ci-blue)] to-[var(--ci-blue-dark)] flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-white">
                      {person.initials}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-[var(--ci-gray-900)] text-sm">
                      {person.name}
                    </div>
                    <div className="text-xs text-[var(--ci-gray-600)]">
                      {person.department}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Research Themes */}
      <section className="section">
        <div className="section-inner py-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--ci-blue)] mb-8">
            Research Themes
          </h2>
          <div className="space-y-6">
            {cancerType.researchThemes.map((theme, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="text-[var(--ci-blue)] font-bold text-lg shrink-0 w-8">
                  {index + 1}.
                </span>
                <div>
                  <h3 className="font-bold text-[var(--ci-gray-900)] mb-1">
                    {theme.title}
                  </h3>
                  <p className="text-[var(--ci-gray-600)] leading-relaxed">
                    {theme.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Trials */}
      <section className="section bg-[var(--ci-gray-50)]">
        <div className="section-inner py-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--ci-blue)] mb-8">
            Clinical Trials
          </h2>
          <div className="space-y-4">
            {cancerType.clinicalTrials.map((trial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border-l-4 border-[var(--ci-teal)] shadow-sm"
              >
                <h3 className="font-bold text-[var(--ci-gray-900)] mb-2">
                  {trial.title}
                </h3>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-[var(--ci-gray-600)]">
                  <span>
                    <strong>Status:</strong> {trial.status}
                  </span>
                  <span>
                    <strong>PI:</strong> {trial.pi}
                  </span>
                  <span>
                    <strong>ID:</strong> {trial.id}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Discoveries */}
      <RecentDiscoveries filterBy={{ type: "cancerType", slug: cancerType.slug }} />

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
