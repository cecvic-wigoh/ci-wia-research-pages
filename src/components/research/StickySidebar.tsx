"use client";

import { useState, useEffect } from "react";

interface SidebarSection {
  id: string;
  label: string;
}

interface StickySidebarProps {
  sections: SidebarSection[];
}

export default function StickySidebar({ sections }: StickySidebarProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      {/* Mobile: Dropdown */}
      <div className="lg:hidden sticky top-16 z-30 bg-white border-b border-[var(--ci-gray-200)]">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full px-4 py-3 flex items-center justify-between text-sm font-bold text-[var(--ci-blue)]"
          aria-expanded={isMobileOpen}
        >
          <span>Jump to Section</span>
          <span className="text-xs text-[var(--ci-gray-600)]">
            {sections.find((s) => s.id === activeSection)?.label}
          </span>
        </button>
        {isMobileOpen && (
          <nav className="px-4 pb-3 flex flex-col gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleClick(section.id)}
                className={`text-left px-3 py-2 rounded text-sm transition-colors ${
                  activeSection === section.id
                    ? "bg-[var(--ci-light)] text-[var(--ci-blue)] font-bold"
                    : "text-[var(--ci-gray-600)] hover:bg-[var(--ci-gray-100)]"
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        )}
      </div>

      {/* Desktop: Sticky sidebar */}
      <nav
        className="hidden lg:block w-48 sticky top-24 float-left max-h-[calc(100vh-120px)] overflow-y-auto"
        aria-label="Page sections"
      >
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => handleClick(section.id)}
                className={`w-full text-left px-4 py-2 border-l-2 text-sm transition-colors ${
                  activeSection === section.id
                    ? "border-[var(--ci-teal)] text-[var(--ci-blue)] font-bold"
                    : "border-transparent text-[var(--ci-gray-600)] hover:text-[var(--ci-blue)] hover:border-[var(--ci-gray-200)]"
                }`}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
