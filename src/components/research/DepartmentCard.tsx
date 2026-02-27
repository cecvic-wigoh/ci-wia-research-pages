import Link from "next/link";
import { ArrowRight, Microscope, Dna, BarChart3, ShieldCheck, FlaskConical } from "lucide-react";
import type { Department } from "@/data/departments";

const iconMap: Record<string, React.ElementType> = {
  microscope: Microscope,
  dna: Dna,
  "chart-bar": FlaskConical,
  "shield-check": ShieldCheck,
  "bar-chart": BarChart3,
};

interface DepartmentCardProps {
  department: Department;
}

export default function DepartmentCard({ department }: DepartmentCardProps) {
  const Icon = iconMap[department.icon] || Microscope;

  return (
    <Link
      href={`/research/departments/${department.slug}`}
      className="card group block"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-[var(--ci-light)] flex items-center justify-center shrink-0">
          <Icon className="h-6 w-6 text-[var(--ci-teal-dark)]" />
        </div>

        <div className="min-w-0">
          <h3 className="font-heading text-lg font-bold text-[var(--ci-blue)] group-hover:text-[var(--ci-blue-dark)] transition-colors mb-1">
            {department.name}
          </h3>
          <p className="text-[var(--ci-gray-600)] text-xs mb-2">
            Established {department.established} &middot; {department.facultyCount} Faculty
          </p>
          <p className="text-[var(--ci-gray-900)] text-sm leading-relaxed line-clamp-2">
            {department.description}
          </p>

          <div className="flex items-center gap-1 mt-3 text-[var(--ci-teal-dark)] text-sm font-bold group-hover:gap-2 transition-all">
            Explore Department
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
