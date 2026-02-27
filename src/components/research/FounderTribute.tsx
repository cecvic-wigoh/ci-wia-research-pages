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
            <div key={founder.name} className="flex flex-col items-center text-center">
              {/* Circular Portrait Placeholder */}
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[var(--ci-blue)] to-[var(--ci-blue-dark)] border-4 border-[var(--ci-teal)] flex items-center justify-center mb-6 shadow-lg">
                <span className="text-4xl font-heading font-bold text-white/80">
                  {founder.initials}
                </span>
              </div>

              <h3 className="font-heading text-xl font-bold text-[var(--ci-blue)] mb-1">
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

              <p className="text-[var(--ci-gray-600)] text-sm leading-relaxed px-2">
                {founder.contribution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
