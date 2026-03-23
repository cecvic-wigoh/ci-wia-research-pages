import Breadcrumb from "@/components/research/Breadcrumb";
import LeaderCard from "@/components/research/LeaderCard";
import { leaders } from "@/data/leaders";

export default function LeadershipPage() {
  const leadershipMembers = leaders.filter((l) => l.category === "leadership");
  const sabMembers = leaders.filter((l) => l.category === "sab");

  return (
    <>
      <Breadcrumb items={[{ label: "Leadership" }]} />

      <section className="section">
        <div className="section-inner">
          <div className="text-center mb-10">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--ci-blue)] mb-4">
              Research Leadership
            </h1>
            <p className="text-[var(--ci-gray-600)] max-w-2xl mx-auto text-lg leading-relaxed">
              Our research program is guided by distinguished leaders and an
              international Scientific Advisory Board that ensures world-class
              standards and strategic direction.
            </p>
          </div>

          <h2 className="font-heading text-2xl font-bold text-[var(--ci-blue)] mb-6">
            Research Leadership
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {leadershipMembers.map((leader) => (
              <LeaderCard key={leader.slug} leader={leader} size="large" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--ci-gray-100)] py-12">
        <div className="section-inner">
          <h2 className="font-heading text-2xl font-bold text-[var(--ci-blue)] mb-3">
            Scientific Advisory Board
          </h2>
          <p className="text-[var(--ci-gray-600)] max-w-2xl text-base leading-relaxed mb-8">
            Our SAB brings global perspective from leading cancer research
            institutions worldwide.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sabMembers.map((leader) => (
              <LeaderCard key={leader.slug} leader={leader} size="small" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
