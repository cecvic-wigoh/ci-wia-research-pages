import Link from "next/link";
import { founders } from "@/data/founders";

const timelineYears = ["1954", "1960", "1984", "2000", "2010", "2021"];

export default function FoundersLegacy() {
  return (
    <section className="relative bg-ci-blue-dark py-24 px-6 overflow-hidden">
      {/* Background building image — faded */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "url(/research-images/hero-lab.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-ci-blue-dark/80 via-transparent to-ci-blue-dark" />

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-heading)]">
          Our Cinematic Legacy
        </h2>
        <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
          Three visionaries whose conviction, sacrifice, and science built one
          of India&apos;s most enduring institutions of cancer care.
        </p>

        {/* Founder cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 items-end">
          {founders.map((founder, i) => {
            const isCenter = i === 1;
            return (
              <div
                key={founder.slug}
                className={`
                  relative rounded-2xl p-6 pt-8 text-center
                  border border-white/[0.12]
                  backdrop-blur-md
                  transition-transform duration-300 hover:-translate-y-1
                  ${isCenter
                    ? "bg-white/[0.08] sm:-mt-6 sm:pb-8 sm:scale-105 z-10 shadow-2xl shadow-black/30"
                    : "bg-white/[0.05]"
                  }
                `}
              >
                {/* Subtle inner glow at top */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* Circular photo */}
                <div className="flex justify-center mb-5">
                  <div
                    className={`
                      rounded-full overflow-hidden
                      ring-2 ring-white/20 ring-offset-4 ring-offset-transparent
                      ${isCenter ? "w-36 h-36" : "w-28 h-28 sm:w-32 sm:h-32"}
                    `}
                    style={{
                      boxShadow: "0 0 20px rgba(35, 205, 192, 0.1), inset 0 0 20px rgba(255,255,255,0.05)",
                    }}
                  >
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 className={`text-white font-bold font-[family-name:var(--font-heading)] ${isCenter ? "text-2xl" : "text-xl"}`}>
                  {founder.name}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm mt-3 leading-relaxed">
                  {founder.contribution}
                </p>

                {/* Read More button — center card */}
                {isCenter && (
                  <Link
                    href={`/research/founders/${founder.slug}`}
                    className="inline-block mt-5 px-6 py-2 border border-white/30 rounded text-white text-sm font-bold hover:bg-white/10 transition-colors"
                  >
                    Read More
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Line */}
          <div className="h-px bg-white/15 w-full" />

          {/* Year markers */}
          <div className="flex justify-between items-start px-4 -mt-1.5">
            {timelineYears.map((year, i) => (
              <div key={year} className="flex flex-col items-center">
                <div
                  className={`w-3 h-3 rounded-full border-2 ${
                    i === 0
                      ? "bg-white border-white shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                      : "bg-transparent border-white/30"
                  }`}
                />
                <span className="text-white/30 text-xs mt-2 font-mono">
                  {year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
