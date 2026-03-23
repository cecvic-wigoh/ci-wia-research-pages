import Link from "next/link";
import { founders } from "@/data/founders";

export default function FoundersLegacy() {
  return (
    <section className="bg-ci-blue-dark py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white font-[family-name:var(--font-heading)]">
          Our Founders &amp; Legacy
        </h2>
        <p className="text-white/80 text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
          Three visionaries whose conviction, sacrifice, and science built one
          of India&apos;s most enduring institutions of cancer care.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-12">
          {founders.map((founder) => (
            <Link
              key={founder.slug}
              href={`/research/founders/${founder.slug}`}
              className="flex flex-col items-center group"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 group-hover:border-ci-teal transition-colors duration-300">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-white font-bold text-lg mt-4 font-[family-name:var(--font-heading)]">
                {founder.name}
              </h3>
              <p className="text-white/70 text-sm mt-2 leading-relaxed max-w-xs">
                {founder.contribution}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
