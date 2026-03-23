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
    <section className="bg-gradient-to-br from-[var(--ci-blue)] to-[var(--ci-blue-dark)] py-16 md:py-20">
      <div className="section-inner text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
          {donationCta}
        </h2>
        <p className="text-white/85 max-w-2xl mx-auto mb-8 leading-relaxed">
          {donationDescription}
        </p>
        <Link
          href={donationUrl}
          className="inline-block px-8 py-3 bg-[var(--ci-teal)] text-[var(--ci-blue-dark)] font-bold rounded-full hover:bg-[var(--ci-teal-dark)] transition-colors"
        >
          Donate Now
        </Link>
      </div>
    </section>
  );
}
