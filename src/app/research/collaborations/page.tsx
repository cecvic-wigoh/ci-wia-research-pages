import { Globe, MapPin, Network } from "lucide-react";
import Breadcrumb from "@/components/research/Breadcrumb";
import { collaborators } from "@/data/collaborators";

export default function CollaborationsPage() {
  const international = collaborators.filter((c) => c.type === "international");
  const national = collaborators.filter((c) => c.type === "national");
  const networks = collaborators.filter((c) => c.type === "network");

  return (
    <>
      <Breadcrumb items={[{ label: "Collaborations" }]} />

      <section className="section">
        <div className="section-inner">
          <div className="text-center mb-10">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--ci-blue)] mb-4">
              Research Collaborations &amp; Partnerships
            </h1>
            <p className="text-[var(--ci-gray-600)] max-w-2xl mx-auto text-lg">
              Cancer Institute (WIA) collaborates with leading research
              institutions worldwide, combining global expertise with deep
              knowledge of India&apos;s cancer burden to develop solutions that
              matter.
            </p>
          </div>

          {/* International */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="h-6 w-6 text-[var(--ci-teal-dark)]" />
              <h2 className="font-heading text-2xl font-bold text-[var(--ci-blue)]">
                International Collaborations
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {international.map((collab) => (
                <div key={collab.name} className="card">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold ${
                        collab.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {collab.status === "active" ? "Active" : "Completed"}
                    </span>
                    <span className="text-xs text-[var(--ci-gray-600)]">
                      {collab.country}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[var(--ci-blue)] mb-1">
                    {collab.name}
                  </h3>
                  <p className="text-sm text-[var(--ci-teal-dark)] font-bold mb-2">
                    {collab.project}
                  </p>
                  <p className="text-sm text-[var(--ci-gray-600)] leading-relaxed">
                    {collab.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* National */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-6 w-6 text-[var(--ci-teal-dark)]" />
              <h2 className="font-heading text-2xl font-bold text-[var(--ci-blue)]">
                National Collaborations
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {national.map((collab) => (
                <div key={collab.name} className="card">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold ${
                        collab.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {collab.status === "active" ? "Active" : "Completed"}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[var(--ci-blue)] mb-1">
                    {collab.name}
                  </h3>
                  <p className="text-sm text-[var(--ci-teal-dark)] font-bold mb-2">
                    {collab.project}
                  </p>
                  <p className="text-sm text-[var(--ci-gray-600)] leading-relaxed">
                    {collab.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Research Networks */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Network className="h-6 w-6 text-[var(--ci-teal-dark)]" />
              <h2 className="font-heading text-2xl font-bold text-[var(--ci-blue)]">
                Research Networks
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {networks.map((network) => (
                <div key={network.name} className="card">
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold mb-2 ${
                      network.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {network.status === "active" ? "Active" : "Completed"}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[var(--ci-blue)] mb-1">
                    {network.name}
                  </h3>
                  <p className="text-sm text-[var(--ci-gray-600)] leading-relaxed">
                    {network.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[var(--ci-light)] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-heading text-2xl font-bold text-[var(--ci-blue)] mb-3">
              Collaborate With Us
            </h2>
            <p className="text-[var(--ci-gray-600)] max-w-xl mx-auto mb-6">
              We welcome research partnerships with institutions worldwide. If
              you&apos;re interested in collaborating on cancer research, please
              reach out to our research office.
            </p>
            <a
              href="mailto:research@cancerinstitutewia.org"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--ci-blue)] text-white font-bold rounded-lg hover:bg-[var(--ci-blue-dark)] transition-colors"
            >
              Contact Research Office
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
