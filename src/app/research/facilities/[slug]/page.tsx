import { notFound } from "next/navigation";
import Breadcrumb from "@/components/research/Breadcrumb";
import EquipmentCard from "@/components/research/EquipmentCard";
import { facilities } from "@/data/facilities";
import { Facility, EquipmentGroup } from "@/data/types";

export function generateStaticParams() {
  return facilities.map((f) => ({ slug: f.slug }));
}

export default async function FacilityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const facility = facilities.find((f: Facility) => f.slug === slug);

  if (!facility) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--ci-blue-dark)] via-[var(--ci-blue)] to-[var(--ci-blue-light)]">
          {facility.image && (
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url(${facility.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          )}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 20% 80%, rgba(35,205,192,0.4) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(27,168,157,0.3) 0%, transparent 50%)",
            }}
          />
        </div>

        <div className="relative section-inner py-24">
          <Breadcrumb
            items={[
              { label: "Facilities", href: "/research/facilities" },
              { label: facility.name },
            ]}
          />
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {facility.icon} {facility.name}
          </h1>
          <p className="text-white/85 max-w-3xl text-lg leading-relaxed">
            {facility.overview}
          </p>
        </div>
      </section>

      {/* Content: Equipment Groups or Capabilities */}
      <section className="section">
        <div className="section-inner py-12">
          {facility.equipmentGroups ? (
            <>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--ci-blue)] mb-8">
                Equipment &amp; Instruments
              </h2>
              <div className="space-y-14">
                {facility.equipmentGroups.map((group: EquipmentGroup) => (
                  <div key={group.name}>
                    <h3 className="font-heading text-2xl font-bold text-[var(--ci-blue)] mb-2">
                      {group.name}
                    </h3>
                    <p className="text-[var(--ci-gray-600)] text-sm mb-6">
                      {group.items.length} instrument{group.items.length !== 1 ? "s" : ""} available for researcher use
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {group.items.map((item) => (
                        <EquipmentCard key={item.name} item={item} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                {facility.image && (
                  <div className="lg:w-2/5 w-full">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg sticky top-28">
                      <img
                        src={facility.image}
                        alt={facility.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
                <div className={facility.image ? "lg:w-3/5" : "w-full"}>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--ci-blue)] mb-8">
                    Capabilities
                  </h2>
                  <div className="space-y-3">
                    {facility.capabilities.map((capability, index) => (
                      <div key={index} className="flex items-start gap-3 bg-[var(--ci-gray-100)] rounded-lg p-4">
                        <span className="text-[var(--ci-teal)] shrink-0 font-bold">✓</span>
                        <p className="text-[var(--ci-gray-900)] text-sm leading-relaxed">
                          {capability}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Contact / Access CTA */}
      <section className="border-t border-gray-200 mt-16 pt-12">
        <div className="section-inner">
          <h2 className="font-heading text-2xl font-bold text-[var(--ci-blue)] mb-4">
            Access &amp; Booking
          </h2>
          <p className="text-[var(--ci-gray-600)] leading-relaxed mb-4 max-w-2xl">
            Researchers interested in using this facility can request access by
            contacting the facility management team. Training sessions and
            orientation are available for new users.
          </p>
          <p className="text-sm text-[var(--ci-gray-600)] mb-6">
            <strong className="text-[var(--ci-gray-900)]">Contact:</strong>{" "}
            <a
              href={`mailto:${facility.contactInfo}`}
              className="text-[var(--ci-teal-dark)] hover:underline"
            >
              {facility.contactInfo}
            </a>
          </p>
          <a
            href={`mailto:${facility.contactInfo}?subject=Access Request: ${facility.name}`}
            className="inline-block bg-[var(--ci-blue)] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[var(--ci-blue-dark)] transition-colors"
          >
            Request Access
          </a>
        </div>
      </section>
    </>
  );
}
