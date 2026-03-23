import Link from "next/link";

interface DonationCtaProps {
  cancerTypeName: string;
  donationUrl: string;
  donationCta: string;
  donationDescription: string;
}

export default function DonationCta({
  cancerTypeName,
  donationUrl,
  donationCta,
  donationDescription,
}: DonationCtaProps) {
  return (
    <section className="bg-[var(--ci-blue-dark)] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl font-heading font-bold text-white">
            {donationCta || "Fuel groundbreaking cancer research"}
          </h2>
          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="text-white/80 text-sm">
              {donationDescription}
            </p>
            <Link
              href={donationUrl}
              className="inline-block bg-[var(--ci-teal)] text-[var(--ci-blue-dark)] px-6 py-3 rounded font-bold hover:opacity-90 transition-opacity"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
