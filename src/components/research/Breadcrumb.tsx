"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="section-inner py-4">
      <ol className="flex flex-wrap items-center gap-1 text-sm">
        <li>
          <Link
            href="/research"
            className="text-[var(--ci-blue)] hover:text-[var(--ci-blue-dark)] transition-colors"
          >
            Research
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            <ChevronRight className="h-3.5 w-3.5 text-[var(--ci-gray-600)]" />
            {item.href ? (
              <Link
                href={item.href}
                className="text-[var(--ci-blue)] hover:text-[var(--ci-blue-dark)] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[var(--ci-gray-600)]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
