import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Research Home", href: "/research" },
  { label: "Departments", href: "/research/departments" },
  { label: "Faculty Directory", href: "/research/faculty" },
  { label: "Publications", href: "/research/publications" },
  { label: "Facilities", href: "/research/facilities" },
  { label: "Collaborations", href: "/research/collaborations" },
];

const institutionalLinks = [
  { label: "Cancer Institute (WIA) Main Site", href: "https://cancerinstitutewia.in", external: true },
  { label: "Careers & Opportunities", href: "https://cancerinstitutewia.in/career/", external: true },
  { label: "Patient Services", href: "https://cancerinstitutewia.in", external: true },
];

export default function ResearchFooter() {
  return (
    <footer className="bg-[var(--ci-blue)] text-white">
      <div className="section-inner py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-lg font-bold mb-4">
              Cancer Institute (WIA)
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              India&apos;s first comprehensive cancer center, pioneering
              oncology research and compassionate care since 1954.
            </p>
            <p className="text-[var(--ci-teal)] text-sm font-bold italic">
              &ldquo;With Humanity and In Wisdom&rdquo;
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">
              Research Pages
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[var(--ci-teal)] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional Links */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">
              Institution
            </h3>
            <ul className="space-y-2">
              {institutionalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-white/70 hover:text-[var(--ci-teal)] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Contact</h3>
            <address className="not-italic text-white/70 text-sm leading-relaxed space-y-2">
              <p>Cancer Institute (WIA)</p>
              <p>38, Sardar Patel Road</p>
              <p>Adyar, Chennai — 600 036</p>
              <p>Tamil Nadu, India</p>
              <p className="pt-2">
                <a
                  href="tel:+914422209150"
                  className="hover:text-[var(--ci-teal)] transition-colors"
                >
                  +91 44 2220 9150
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} Cancer Institute (WIA) Adyar. All
            rights reserved.
          </p>
          <Image
            src="/logos/logo-horizontal-white.png"
            alt="Cancer Institute (WIA)"
            width={160}
            height={32}
            className="h-6 w-auto opacity-60"
          />
        </div>
      </div>
    </footer>
  );
}
