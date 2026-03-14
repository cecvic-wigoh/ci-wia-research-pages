import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { founders } from "@/data/founders";

export default function FounderTribute() {
  return (
    <section className="section bg-[var(--ci-light)]" aria-labelledby="legacy-heading">
      <div className="section-inner">
        <div className="text-center mb-12">
          <h2
            id="legacy-heading"
            className="font-heading text-3xl md:text-4xl font-bold text-[var(--ci-blue)] mb-4"
          >
            A Legacy of Vision and Service
          </h2>
          <p className="text-[var(--ci-gray-600)] max-w-2xl mx-auto text-lg">
            Three generations of visionary leaders who built India&apos;s first
            comprehensive cancer center on the foundation of compassion,
            scientific rigor, and service to all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {founders.map((founder) => (
            <Link
              key={founder.name}
              href={`/research/founders/${founder.slug}`}
              className="group flex flex-col items-center text-center"
            >
              {/* Circular Portrait */}
              <div className="w-48 h-48 rounded-full border-4 border-[var(--ci-teal)] overflow-hidden mb-6 shadow-lg group-hover:border-[var(--ci-blue)] transition-colors">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={192}
                  height={192}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <h3 className="font-heading text-xl font-bold text-[var(--ci-blue)] mb-1 group-hover:text-[var(--ci-teal-dark)] transition-colors">
                {founder.name}
              </h3>
              <p className="text-[var(--ci-teal-dark)] font-bold text-sm mb-1">
                {founder.title}
              </p>
              <p className="text-[var(--ci-gray-600)] text-sm mb-4">
                {founder.years}
              </p>

              {/* Quote */}
              <blockquote className="text-[var(--ci-gray-900)] italic text-base leading-relaxed mb-4 px-4">
                &ldquo;{founder.quote}&rdquo;
              </blockquote>

              <p className="text-[var(--ci-gray-600)] text-sm leading-relaxed px-2 mb-4">
                {founder.contribution}
              </p>

              <span className="inline-flex items-center gap-1 text-[var(--ci-teal-dark)] text-sm font-bold group-hover:gap-2 transition-all">
                Read their story
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
