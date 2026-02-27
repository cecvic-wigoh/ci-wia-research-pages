"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Research Home", href: "/research" },
  { label: "Departments", href: "/research/departments" },
  { label: "Faculty", href: "/research/faculty" },
  { label: "Facilities", href: "/research/facilities" },
  { label: "Collaborations", href: "/research/collaborations" },
  { label: "Publications", href: "/research/publications" },
];

export default function ResearchHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/research") return pathname === "/research";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="section-inner">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/research" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logos/logo-horizontal-blue.png"
              alt="Cancer Institute (WIA)"
              width={200}
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Research section navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-bold tracking-wide transition-colors ${
                  isActive(item.href)
                    ? "text-[var(--ci-blue)]"
                    : "text-[var(--ci-gray-600)] hover:text-[var(--ci-blue)]"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-3 right-3 h-[3px] bg-[var(--ci-teal)] rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[var(--ci-blue)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[var(--ci-gray-200)]">
          <nav
            className="section-inner py-4 flex flex-col gap-1"
            aria-label="Research section navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-3 rounded-lg text-base font-bold transition-colors ${
                  isActive(item.href)
                    ? "bg-[var(--ci-light)] text-[var(--ci-blue)]"
                    : "text-[var(--ci-gray-600)] hover:bg-[var(--ci-gray-100)] hover:text-[var(--ci-blue)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
