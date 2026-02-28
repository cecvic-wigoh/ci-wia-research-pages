"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ExternalLink, Briefcase, GraduationCap, Users } from "lucide-react";
import TabSection from "@/components/research/TabSection";
import FacultyMosaic from "@/components/research/FacultyMosaic";
import FounderTribute from "@/components/research/FounderTribute";
import DepartmentCard from "@/components/research/DepartmentCard";
import PublicationCard from "@/components/research/PublicationCard";
import { departments } from "@/data/departments";
import { publications } from "@/data/publications";
import { collaborators } from "@/data/collaborators";
import { facilities } from "@/data/facilities";

function DepartmentsTabContent() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {departments.slice(0, 4).map((dept) => (
          <DepartmentCard key={dept.slug} department={dept} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/research/departments"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--ci-blue)] text-white font-bold rounded-lg hover:bg-[var(--ci-blue-dark)] transition-colors"
        >
          View All Departments
        </Link>
      </div>
    </div>
  );
}

function CollaborationsTabContent() {
  const international = collaborators.filter((c) => c.type === "international");
  const national = collaborators.filter((c) => c.type === "national");

  return (
    <div>
      <h3 className="font-heading text-xl font-bold text-[var(--ci-blue)] mb-4">
        International Collaborations
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {international.slice(0, 4).map((collab) => (
          <div key={collab.name} className="card">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--ci-light)] flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-[var(--ci-blue)]">
                  {collab.country.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <div>
                <h4 className="font-heading text-base font-bold text-[var(--ci-gray-900)]">
                  {collab.name}
                </h4>
                <p className="text-xs text-[var(--ci-teal-dark)] font-bold mb-1">
                  {collab.project}
                </p>
                <p className="text-sm text-[var(--ci-gray-600)] line-clamp-2">
                  {collab.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="font-heading text-xl font-bold text-[var(--ci-blue)] mb-4">
        National Collaborations
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {national.slice(0, 4).map((collab) => (
          <div key={collab.name} className="card">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--ci-light)] flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-[var(--ci-blue)]">IN</span>
              </div>
              <div>
                <h4 className="font-heading text-base font-bold text-[var(--ci-gray-900)]">
                  {collab.name}
                </h4>
                <p className="text-xs text-[var(--ci-teal-dark)] font-bold mb-1">
                  {collab.project}
                </p>
                <p className="text-sm text-[var(--ci-gray-600)] line-clamp-2">
                  {collab.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/research/collaborations"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--ci-blue)] text-white font-bold rounded-lg hover:bg-[var(--ci-blue-dark)] transition-colors"
        >
          View All Collaborations
        </Link>
      </div>
    </div>
  );
}

function FacilitiesTabContent() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {facilities.slice(0, 4).map((facility) => (
          <div key={facility.name} className="card">
            <h4 className="font-heading text-base font-bold text-[var(--ci-blue)] mb-1">
              {facility.name}
            </h4>
            <p className="text-sm text-[var(--ci-gray-600)] mb-2">
              {facility.description}
            </p>
            <p className="text-xs text-[var(--ci-teal-dark)] font-bold">
              {facility.capability}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/research/facilities"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--ci-blue)] text-white font-bold rounded-lg hover:bg-[var(--ci-blue-dark)] transition-colors"
        >
          View All Facilities
        </Link>
      </div>
    </div>
  );
}

export default function ResearchLandingPage() {
  const recentPubs = publications.slice(0, 4);

  const tabs = [
    { id: "departments", label: "Departments", content: <DepartmentsTabContent /> },
    { id: "collaborations", label: "Collaborations", content: <CollaborationsTabContent /> },
    { id: "facilities", label: "Facilities", content: <FacilitiesTabContent /> },
  ];

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

      {/* Tabbed Section */}
      <section id="explore" className="section">
        <div className="section-inner">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--ci-blue)] mb-4">
              Explore Our Research
            </h2>
            <p className="text-[var(--ci-gray-600)] max-w-2xl mx-auto text-lg">
              Five departments, dozens of collaborations, and world-class
              facilities — all dedicated to advancing cancer science and
              improving patient outcomes.
            </p>
          </div>
          <TabSection tabs={tabs} defaultTab="departments" />
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
