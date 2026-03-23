"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight, ExternalLink, Briefcase, GraduationCap, Users, Globe, MapPin } from "lucide-react";
import PersonMosaic from "@/components/research/PersonMosaic";
import FounderTribute from "@/components/research/FounderTribute";
import HeroFounders from "@/components/research/HeroFounders";
import PublicationCard from "@/components/research/PublicationCard";
import { publications } from "@/data/publications";
import { collaborators } from "@/data/collaborators";
import { facilities } from "@/data/facilities";

export default function ResearchLandingPage() {
  const recentPubs = publications.slice(0, 4);
  const topCollabs = collaborators.filter((c) => c.type === "international").slice(0, 3);
  const topFacilities = facilities.slice(0, 3);

  return (
    <>
      {/* Hero: Cinematic Narrative */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/research-images/hero-lab.webp"
          alt="Cancer Institute research laboratory"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlays — center-out radial for dramatic lighting */}
        <div className="absolute inset-0 bg-[var(--ci-blue-dark)]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,transparent_0%,var(--ci-blue-dark)_100%)] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--ci-blue-dark)]/40 via-transparent to-[var(--ci-blue-dark)]/80" />

        {/* Subtle decorative accent line at top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[var(--ci-teal)]/60 to-transparent" />

        <div className="relative z-10 section-inner py-16 md:py-20 lg:py-24 flex flex-col items-center text-center">
          {/* Eyebrow — establishment marker */}
          <p className="text-[var(--ci-teal)]/70 text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.35em] uppercase mb-6 md:mb-8">
            <span className="hidden sm:inline">Est. 1954 &middot; Cancer Institute (WIA) &middot; Chennai</span>
            <span className="sm:hidden">Cancer Institute (WIA) &middot; Est. 1954</span>
          </p>

          {/* Headline */}
          <h1 className="font-heading text-[22px] sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white leading-[1.15] mb-3 max-w-3xl break-words">
            Seven Decades of Pioneering{" "}
            <span className="text-[var(--ci-teal)]">Cancer Science</span>
          </h1>

          <p className="text-white/50 text-sm md:text-base leading-relaxed mb-8 md:mb-10 max-w-lg px-2 sm:px-0">
            From India&apos;s first oncology degrees to affordable care for
            every patient — built by three visionaries who gave their lives
            to this mission.
          </p>

          {/* Founders Triptych — the centrepiece */}
          <HeroFounders />

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 md:mt-10">
            <a
              href="#explore"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--ci-teal)] text-[var(--ci-blue-dark)] font-bold rounded-lg hover:bg-[var(--ci-teal-dark)] hover:text-white transition-colors shadow-lg shadow-[var(--ci-teal)]/25 cursor-pointer"
            >
              Explore Our Research
              <ArrowDown className="h-4 w-4" />
            </a>
            <Link
              href="/research/people"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white/80 font-bold rounded-lg hover:bg-white/10 hover:border-white/40 hover:text-white transition-colors backdrop-blur-sm cursor-pointer"
            >
              Meet Our People
            </Link>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">
            Their legacy continues
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* Meet Our People */}
      <PersonMosaic />

      {/* Collaborations + Facilities — Side by Side */}
      <section id="explore" className="section">
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
                      {facility.capabilities[0]}
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
