import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/cancer-hero.webp"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ci-blue-dark/90 via-ci-blue-dark/70 to-ci-blue-dark/40" />
      </div>
      <div className="relative max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-white max-w-4xl font-[family-name:var(--font-heading)] leading-tight">
          Seven Decades of Pioneering Cancer Research
        </h1>
        <p className="text-lg text-white/80 max-w-2xl mt-6 leading-relaxed">
          From India&apos;s first comprehensive cancer centre to a global
          research hub — advancing discovery, training the next generation, and
          delivering compassionate care since 1954.
        </p>
        <div className="flex gap-6 mt-10 flex-wrap">
          <Link
            href="/research/people"
            className="bg-ci-teal text-white px-6 py-3 rounded font-bold inline-flex items-center gap-2 hover:bg-ci-teal-dark transition-colors"
          >
            Meet Our Researchers <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/research/cancers"
            className="text-white/90 hover:text-white inline-flex items-center gap-2"
          >
            Cancers We Study <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
