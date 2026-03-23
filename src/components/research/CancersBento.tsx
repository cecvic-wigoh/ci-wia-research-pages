import Link from "next/link";
import { cancerTypes } from "@/data/cancerTypes";

function CancerCard({
  cancer,
  className,
  featured = false,
}: {
  cancer: (typeof cancerTypes)[0];
  className?: string;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/research/cancers/${cancer.slug}`}
      className={`relative rounded-lg overflow-hidden group block ${className ?? ""}`}
    >
      {cancer.image ? (
        <img
          src={cancer.image}
          alt={cancer.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-ci-blue to-ci-blue-dark absolute inset-0" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className={`absolute bottom-0 left-0 right-0 ${featured ? "p-6 md:p-8" : "p-3"}`}>
        {featured && (
          <p className="text-sm text-ci-teal font-bold uppercase tracking-wider mb-2">
            Featured Image
          </p>
        )}
        <h3
          className={`font-bold text-white ${
            featured
              ? "text-2xl md:text-3xl font-[family-name:var(--font-heading)]"
              : "text-sm leading-tight"
          }`}
        >
          {cancer.name}
        </h3>
        {featured && cancer.description && (
          <p className="text-white/80 mt-2 max-w-xl leading-relaxed text-sm md:text-base">
            {cancer.description}
          </p>
        )}
      </div>
    </Link>
  );
}

export default function CancersBento() {
  const featured = cancerTypes[0];
  const topRight = cancerTypes.slice(1, 3);   // Blood, Lung
  const midRight = cancerTypes.slice(3, 5);   // Children's, Head & Neck
  const bottomRow = cancerTypes.slice(5, 9);  // Ovarian, Colon, Gastric, Bone
  const overflow = cancerTypes.slice(9);      // Rare Cancers + any future

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-ci-blue font-[family-name:var(--font-heading)] text-center mb-10">
          Cancers We Study
        </h2>

        {/* Desktop bento grid */}
        <div className="hidden lg:grid grid-cols-[3fr_2fr_2fr] grid-rows-[1fr_1fr] gap-1.5 mb-1.5">
          {/* Featured — spans 2 rows */}
          {featured && (
            <CancerCard
              cancer={featured}
              className="row-span-2 min-h-[400px]"
              featured
            />
          )}
          {/* Top right */}
          {topRight.map((ct) => (
            <CancerCard key={ct.slug} cancer={ct} className="min-h-[195px]" />
          ))}
          {/* Mid right */}
          {midRight.map((ct) => (
            <CancerCard key={ct.slug} cancer={ct} className="min-h-[195px]" />
          ))}
        </div>

        {/* Bottom row — 4 equal cols */}
        <div className="hidden lg:grid grid-cols-4 gap-1.5 mb-1.5">
          {bottomRow.map((ct) => (
            <CancerCard key={ct.slug} cancer={ct} className="aspect-[4/3]" />
          ))}
        </div>

        {/* Overflow row (e.g., Rare Cancers) */}
        {overflow.length > 0 && (
          <div
            className="hidden lg:grid gap-1.5"
            style={{ gridTemplateColumns: `repeat(${overflow.length}, 1fr)` }}
          >
            {overflow.map((ct) => (
              <CancerCard key={ct.slug} cancer={ct} className="aspect-[4/3]" />
            ))}
          </div>
        )}

        {/* Tablet — 2 cols */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-3">
          {featured && (
            <CancerCard
              cancer={featured}
              className="col-span-2 aspect-[21/9]"
              featured
            />
          )}
          {cancerTypes.slice(1).map((ct) => (
            <CancerCard key={ct.slug} cancer={ct} className="aspect-square" />
          ))}
        </div>

        {/* Mobile — single col */}
        <div className="grid md:hidden grid-cols-1 gap-3">
          {featured && (
            <CancerCard
              cancer={featured}
              className="aspect-[16/9]"
              featured
            />
          )}
          {cancerTypes.slice(1).map((ct) => (
            <CancerCard key={ct.slug} cancer={ct} className="aspect-[16/9]" />
          ))}
        </div>
      </div>
    </section>
  );
}
