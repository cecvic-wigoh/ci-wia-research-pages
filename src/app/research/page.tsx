"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight, ExternalLink, Briefcase, GraduationCap, Users, Globe, MapPin, Microscope, Dna, BarChart3, ShieldCheck, FlaskConical } from "lucide-react";
import FacultyMosaic from "@/components/research/FacultyMosaic";
import FounderTribute from "@/components/research/FounderTribute";
import PublicationCard from "@/components/research/PublicationCard";
import { departments } from "@/data/departments";
import { publications } from "@/data/publications";
import { collaborators } from "@/data/collaborators";
import { facilities } from "@/data/facilities";

const deptIconMap: Record<string, React.ElementType> = {
  microscope: Microscope,
  dna: Dna,
  "chart-bar": FlaskConical,
  "shield-check": ShieldCheck,
  "bar-chart": BarChart3,
};

export default function ResearchLandingPage() {
  const recentPubs = publications.slice(0, 4);
  const featuredDepts = departments.slice(0, 3);
  const remainingDepts = departments.slice(3);
  const topCollabs = collaborators.filter((c) => c.type === "international").slice(0, 3);
  const topFacilities = facilities.slice(0, 3);

  return (
    <>
      {/* Hero: Cinematic Full-Bleed */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/research-images/hero-lab.webp"
          alt="Cancer Institute research laboratory"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ci-blue-dark)]/95 via-[var(--ci-blue-dark)]/75 to-[var(--ci-blue-dark)]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ci-blue-dark)]/60 via-transparent to-[var(--ci-blue-dark)]/20" />

        <div className="relative z-10 section-inner py-24 md:py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Messaging */}
            <div>
              <p className="text-[var(--ci-teal)] font-bold text-sm tracking-[0.2em] uppercase mb-5">
                Since 1954 &mdash; Cancer Institute (WIA), Chennai
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] mb-6">
                Today&apos;s Research is{" "}
                <span className="text-[var(--ci-teal)]">Tomorrow&apos;s Cure</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
                Seven decades of pioneering cancer science — from India&apos;s
                first oncology degrees to affordable diagnostics that reach
                every patient.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#explore"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--ci-teal)] text-[var(--ci-blue-dark)] font-bold rounded-lg hover:bg-[var(--ci-teal-dark)] hover:text-white transition-colors shadow-lg shadow-[var(--ci-teal)]/25"
                >
                  Explore Our Research
                  <ArrowDown className="h-4 w-4" />
                </a>
                <Link
                  href="/research/faculty"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 hover:border-white/50 transition-colors backdrop-blur-sm"
                >
                  Meet Our Faculty
                </Link>
              </div>
            </div>

            {/* Right: Impact Stats */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { value: "70+", label: "Years of Research", accent: false },
                { value: "5", label: "Research Departments", accent: true },
                { value: "200+", label: "Publications", accent: true },
                { value: "15+", label: "Global Collaborations", accent: false },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-2xl p-6 backdrop-blur-md border transition-colors ${
                    stat.accent
                      ? "bg-[var(--ci-teal)]/10 border-[var(--ci-teal)]/25 hover:border-[var(--ci-teal)]/50"
                      : "bg-white/5 border-white/10 hover:border-white/25"
                  }`}
                >
                  <p className={`font-heading text-4xl font-bold mb-1 ${
                    stat.accent ? "text-[var(--ci-teal)]" : "text-white"
                  }`}>
                    {stat.value}
                  </p>
                  <p className="text-white/60 text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}

              {/* Quote card spanning full width */}
              <div className="col-span-2 rounded-2xl p-5 backdrop-blur-md bg-white/5 border border-white/10">
                <blockquote className="border-l-2 border-[var(--ci-teal)] pl-4">
                  <p className="font-heading text-white/80 italic text-base leading-relaxed">
                    &ldquo;Early detection is the key to conquering cancer.&rdquo;
                  </p>
                  <footer className="mt-1.5 text-white/50 text-xs">
                    — Dr. S. Krishnamurthi, Founder
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Faculty */}
      <FacultyMosaic />

      {/* Explore Our Research — Departments */}
      <section id="explore" className="section bg-[var(--ci-gray-100)]">
        <div className="section-inner">
          <div className="text-center mb-12">
            <p className="text-[var(--ci-teal-dark)] font-bold text-sm tracking-[0.15em] uppercase mb-3">
              Research Ecosystem
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--ci-blue)] mb-4">
              Explore Our Departments
            </h2>
            <p className="text-[var(--ci-gray-600)] max-w-2xl mx-auto text-lg">
              Specialized departments driving discovery — from molecular
              mechanisms to population-level impact.
            </p>
          </div>

          {/* Featured departments — large image cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {featuredDepts.map((dept) => {
              const Icon = deptIconMap[dept.icon] || Microscope;
              return (
                <Link
                  key={dept.slug}
                  href={`/research/departments/${dept.slug}`}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/5] flex flex-col justify-end"
                >
                  {dept.image && (
                    <Image
                      src={dept.image}
                      alt={dept.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--ci-blue-dark)] via-[var(--ci-blue-dark)]/40 to-transparent" />
                  <div className="relative z-10 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-[var(--ci-teal)]/20 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="h-4 w-4 text-[var(--ci-teal)]" />
                      </div>
                      <span className="text-white/50 text-xs font-medium">
                        Est. {dept.established}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-white leading-snug mb-2">
                      {dept.name}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed line-clamp-2 mb-3">
                      {dept.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {dept.focusAreas.slice(0, 2).map((area) => (
                        <span
                          key={area}
                          className="px-2.5 py-0.5 text-[10px] font-bold text-[var(--ci-teal)] bg-[var(--ci-teal)]/10 rounded-full backdrop-blur-sm border border-[var(--ci-teal)]/20"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[var(--ci-teal)] text-sm font-bold group-hover:gap-2 transition-all">
                      Explore
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Remaining departments — horizontal cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {remainingDepts.map((dept) => {
              const Icon = deptIconMap[dept.icon] || Microscope;
              return (
                <Link
                  key={dept.slug}
                  href={`/research/departments/${dept.slug}`}
                  className="group relative rounded-2xl overflow-hidden flex h-48"
                >
                  {dept.image && (
                    <Image
                      src={dept.image}
                      alt={dept.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--ci-blue-dark)]/95 via-[var(--ci-blue-dark)]/70 to-[var(--ci-blue-dark)]/30" />
                  <div className="relative z-10 p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[var(--ci-teal)]/20 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="h-4 w-4 text-[var(--ci-teal)]" />
                      </div>
                      <span className="text-white/50 text-xs font-medium">
                        Est. {dept.established} &middot; {dept.facultyCount} Faculty
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-white leading-snug mb-1.5">
                      {dept.name}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed line-clamp-2 max-w-md mb-2">
                      {dept.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[var(--ci-teal)] text-sm font-bold group-hover:gap-2 transition-all">
                      Explore
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="/research/departments"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--ci-blue)] text-white font-bold rounded-lg hover:bg-[var(--ci-blue-dark)] transition-colors"
            >
              View All Departments
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Collaborations + Facilities — Side by Side */}
      <section className="section">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Collaborations */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[var(--ci-light)] flex items-center justify-center">
                  <Globe className="h-5 w-5 text-[var(--ci-teal-dark)]" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[var(--ci-blue)]">
                    Global Collaborations
                  </h3>
                  <p className="text-[var(--ci-gray-600)] text-sm">
                    International research partnerships
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {topCollabs.map((collab) => (
                  <div
                    key={collab.name}
                    className="group rounded-xl border border-[var(--ci-gray-200)] bg-white p-4 hover:border-[var(--ci-teal)]/30 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--ci-blue)] to-[var(--ci-blue-dark)] flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-[10px] font-bold text-white">
                          {collab.country.slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-heading text-sm font-bold text-[var(--ci-gray-900)] mb-0.5">
                          {collab.name}
                        </h4>
                        <p className="text-xs text-[var(--ci-teal-dark)] font-bold mb-1">
                          {collab.project}
                        </p>
                        <p className="text-xs text-[var(--ci-gray-600)] line-clamp-2">
                          {collab.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/research/collaborations"
                className="inline-flex items-center gap-1.5 mt-5 text-[var(--ci-teal-dark)] hover:text-[var(--ci-blue)] text-sm font-bold transition-colors"
              >
                View all collaborations
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Facilities */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[var(--ci-light)] flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-[var(--ci-teal-dark)]" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[var(--ci-blue)]">
                    Core Facilities
                  </h3>
                  <p className="text-[var(--ci-gray-600)] text-sm">
                    World-class research infrastructure
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {topFacilities.map((facility) => (
                  <div
                    key={facility.name}
                    className="group rounded-xl border border-[var(--ci-gray-200)] bg-white p-4 hover:border-[var(--ci-teal)]/30 hover:shadow-md transition-all"
                  >
                    <h4 className="font-heading text-sm font-bold text-[var(--ci-blue)] mb-1">
                      {facility.name}
                    </h4>
                    <p className="text-xs text-[var(--ci-gray-600)] mb-2 line-clamp-2">
                      {facility.description}
                    </p>
                    <p className="text-[10px] text-[var(--ci-teal-dark)] font-bold uppercase tracking-wider">
                      {facility.capability}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href="/research/facilities"
                className="inline-flex items-center gap-1.5 mt-5 text-[var(--ci-teal-dark)] hover:text-[var(--ci-blue)] text-sm font-bold transition-colors"
              >
                View all facilities
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <FounderTribute />

      {/* Recent Publications */}
      <section className="section" aria-labelledby="publications-heading">
        <div className="section-inner">
          <div className="text-center mb-10">
            <h2
              id="publications-heading"
              className="font-heading text-3xl md:text-4xl font-bold text-[var(--ci-blue)] mb-4"
            >
              Recent Research Output
            </h2>
            <p className="text-[var(--ci-gray-600)] max-w-2xl mx-auto text-lg">
              Selected recent publications from our research faculty,
              contributing to global knowledge in oncology, diagnostics, and
              cancer biology.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {recentPubs.map((pub) => (
              <PublicationCard key={pub.id} publication={pub} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/research/publications"
              className="inline-flex items-center gap-2 text-[var(--ci-teal-dark)] hover:text-[var(--ci-blue)] font-bold transition-colors"
            >
              View All Publications
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Opportunities / Join Us */}
      <section
        className="section bg-[var(--ci-gray-100)]"
        aria-labelledby="opportunities-heading"
      >
        <div className="section-inner">
          <div className="text-center mb-10">
            <h2
              id="opportunities-heading"
              className="font-heading text-3xl md:text-4xl font-bold text-[var(--ci-blue)] mb-4"
            >
              Join Our Research Community
            </h2>
            <p className="text-[var(--ci-gray-600)] max-w-2xl mx-auto text-lg">
              We welcome researchers, clinicians, and scholars who share our
              commitment to advancing cancer science and making a difference in
              patients&apos; lives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card text-center">
              <GraduationCap className="h-10 w-10 text-[var(--ci-teal)] mx-auto mb-4" />
              <h3 className="font-heading text-lg font-bold text-[var(--ci-blue)] mb-2">
                PhD Positions
              </h3>
              <p className="text-sm text-[var(--ci-gray-600)] mb-4">
                Pursue doctoral research in molecular oncology, cancer biology,
                epidemiology, or clinical trials under expert supervision.
              </p>
              <p className="text-xs text-[var(--ci-gray-600)]">
                Eligibility: Inspire / DBT JRF / ICMR-JRF / CSIR-NET fellowship holders
              </p>
            </div>
            <div className="card text-center">
              <Briefcase className="h-10 w-10 text-[var(--ci-teal)] mx-auto mb-4" />
              <h3 className="font-heading text-lg font-bold text-[var(--ci-blue)] mb-2">
                Postdoctoral Fellowships
              </h3>
              <p className="text-sm text-[var(--ci-gray-600)] mb-4">
                Advance your research career with access to cutting-edge
                facilities and international collaboration networks.
              </p>
              <p className="text-xs text-[var(--ci-gray-600)]">
                Areas: Microbiome, Genomics, Biomarkers, Clinical Trials
              </p>
            </div>
            <div className="card text-center">
              <Users className="h-10 w-10 text-[var(--ci-teal)] mx-auto mb-4" />
              <h3 className="font-heading text-lg font-bold text-[var(--ci-blue)] mb-2">
                Visiting Scientists
              </h3>
              <p className="text-sm text-[var(--ci-gray-600)] mb-4">
                Collaborate with our research teams on ongoing projects.
                Adjacent to IIT Madras, offering unique interdisciplinary
                opportunities.
              </p>
              <p className="text-xs text-[var(--ci-gray-600)]">
                Duration: 3 months to 1 year
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://cancerinstitutewia.in/career/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--ci-blue)] text-white font-bold rounded-lg hover:bg-[var(--ci-blue-dark)] transition-colors"
            >
              View Open Positions
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
