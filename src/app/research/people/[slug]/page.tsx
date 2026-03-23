"use client";

import { useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Mail, ChevronDown, ChevronUp, Send } from "lucide-react";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/research/Breadcrumb";
import StickySidebar from "@/components/research/StickySidebar";
import TagPill from "@/components/research/TagPill";
import ProjectTable from "@/components/research/ProjectTable";
import TeamMemberGallery from "@/components/research/TeamMemberGallery";
import PublicationCard from "@/components/research/PublicationCard";
import { people } from "@/data/people";
import { publications } from "@/data/publications";
import { cancerTypes } from "@/data/cancerTypes";

const sidebarSections = [
  { id: "research", label: "Research" },
  { id: "interests", label: "Research Interests" },
  { id: "projects", label: "Projects" },
  { id: "awards", label: "Awards" },
  { id: "team", label: "Our Team" },
  { id: "publications", label: "Publications" },
  { id: "opportunities", label: "Opportunities" },
  { id: "contact", label: "Contact" },
];

export function generateStaticParams() {
  return people.map((person) => ({ slug: person.slug }));
}

export default function PersonProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [showAllPubs, setShowAllPubs] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const member = people.find((p) => p.slug === slug);

  if (!member) {
    notFound();
  }

  const memberPubs = publications.filter((p) =>
    member.publicationIds.includes(p.id)
  );
  const visiblePubs = showAllPubs ? memberPubs : memberPubs.slice(0, 5);
  const hasFullProfile =
    member.problem && member.approach && member.discoveries;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Science-as-art gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--ci-blue-dark)] via-[var(--ci-blue)] to-[var(--ci-blue-light)]">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 20% 80%, rgba(35,205,192,0.4) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(27,168,157,0.3) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)",
            }}
          />
          {/* Simulated molecular pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="relative section-inner py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Circular Photo */}
            {member.photo ? (
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full shrink-0 shadow-2xl overflow-hidden">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={224}
                  height={224}
                  className="w-full h-full object-cover scale-150"
                  priority
                />
              </div>
            ) : (
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full shrink-0 shadow-2xl bg-gradient-to-br from-white/20 to-white/5 border-4 border-white/30 flex items-center justify-center">
                <span className="text-5xl font-heading font-bold text-white/60">
                  {member.initials}
                </span>
              </div>
            )}

            <div className="text-center md:text-left">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                {member.name}
              </h1>
              <p className="text-white/80 text-lg mb-4">{member.title}</p>

              {/* Cancer type tag pills */}
              {member.cancerTypes.length > 0 && (
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3">
                  {member.cancerTypes.map((ctSlug) => {
                    const ct = cancerTypes.find((c) => c.slug === ctSlug);
                    return ct ? (
                      <span
                        key={ctSlug}
                        className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white/90 border border-white/20"
                      >
                        {ct.name}
                      </span>
                    ) : null;
                  })}
                </div>
              )}

              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                {member.researchInterests.slice(0, 3).map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white/90 border border-white/20"
                  >
                    {interest}
                  </span>
                ))}
              </div>

              {member.pubmedUrl && (
                <a
                  href={member.pubmedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[var(--ci-blue)] font-bold rounded-lg hover:bg-white/90 transition-colors text-sm"
                >
                  View on PubMed
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <Breadcrumb
        items={[
          { label: "People", href: "/research/people" },
          { label: member.name },
        ]}
      />

      {/* RecentDiscoveries component — added in Phase 3 */}

      {/* Main Content with Sidebar */}
      <div className="section-inner py-8">
        <StickySidebar
          sections={
            hasFullProfile
              ? sidebarSections
              : sidebarSections.filter(
                  (s) =>
                    !["projects", "awards", "team"].includes(s.id) ||
                    member.projects.length > 0 ||
                    member.awards.length > 0 ||
                    member.teamMembers.length > 0
                )
          }
        />

        <div className="lg:ml-64 space-y-16">
          {/* Research Quote */}
          {member.researchQuote && (
            <blockquote className="border-l-4 border-[var(--ci-teal)] pl-6 py-2">
              <p className="font-heading text-xl md:text-2xl text-[var(--ci-gray-900)] italic leading-relaxed">
                &ldquo;{member.researchQuote}&rdquo;
              </p>
            </blockquote>
          )}

          {/* Research Narrative */}
          <section id="research">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--ci-blue)] mb-8">
              Research
            </h2>

            {hasFullProfile ? (
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-xl font-bold text-[var(--ci-blue-dark)] mb-3">
                    The Problem
                  </h3>
                  <p className="text-[var(--ci-gray-900)] leading-[1.7]">
                    {member.problem}
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[var(--ci-blue-dark)] mb-3">
                    The Approach
                  </h3>
                  <p className="text-[var(--ci-gray-900)] leading-[1.7]">
                    {member.approach}
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[var(--ci-blue-dark)] mb-3">
                    Innovations &amp; Discoveries
                  </h3>
                  <p className="text-[var(--ci-gray-900)] leading-[1.7]">
                    {member.discoveries}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-[var(--ci-gray-900)] leading-[1.7]">
                {member.researchFocus}
              </p>
            )}
          </section>

          {/* Research Interests */}
          <section id="interests">
            <h2 className="font-heading text-2xl font-bold text-[var(--ci-blue)] mb-4">
              Research Interests
            </h2>
            <div className="flex flex-wrap gap-2">
              {member.researchInterests.map((interest) => (
                <TagPill key={interest} label={interest} />
              ))}
            </div>
          </section>

          {/* Projects */}
          {member.projects.length > 0 && (
            <section id="projects">
              <h2 className="font-heading text-2xl font-bold text-[var(--ci-blue)] mb-6">
                Research Projects
              </h2>
              <ProjectTable projects={member.projects} />
            </section>
          )}

          {/* Awards */}
          {member.awards.length > 0 && (
            <section id="awards">
              <h2 className="font-heading text-2xl font-bold text-[var(--ci-blue)] mb-4">
                Awards &amp; Achievements
              </h2>
              <ul className="space-y-3">
                {member.awards.map((award, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[var(--ci-teal)] mt-2 shrink-0" />
                    <span className="text-[var(--ci-gray-900)]">
                      {award.title}
                      {award.year && (
                        <span className="text-[var(--ci-gray-600)]">
                          {" "}
                          ({award.year})
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Team Members */}
          {member.teamMembers.length > 0 && (
            <section id="team">
              <h2 className="font-heading text-2xl font-bold text-[var(--ci-blue)] mb-6">
                Our Team
              </h2>
              <TeamMemberGallery members={member.teamMembers} />
            </section>
          )}

          {/* Publications */}
          {memberPubs.length > 0 && (
            <section id="publications">
              <h2 className="font-heading text-2xl font-bold text-[var(--ci-blue)] mb-6">
                Selected Publications
              </h2>
              <div>
                {visiblePubs.map((pub) => (
                  <PublicationCard key={pub.id} publication={pub} />
                ))}
              </div>
              {memberPubs.length > 5 && (
                <button
                  onClick={() => setShowAllPubs(!showAllPubs)}
                  className="mt-4 inline-flex items-center gap-1 text-[var(--ci-teal-dark)] hover:text-[var(--ci-blue)] font-bold transition-colors text-sm"
                >
                  {showAllPubs
                    ? "Show Less"
                    : `Show All ${memberPubs.length} Publications`}
                  {showAllPubs ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
              )}
            </section>
          )}

          {/* Opportunities */}
          {member.fellowshipRequirements && (
            <section id="opportunities">
              <h2 className="font-heading text-2xl font-bold text-[var(--ci-blue)] mb-4">
                Join Our Lab
              </h2>
              <div className="bg-[var(--ci-light)] rounded-lg p-6">
                <p className="text-[var(--ci-gray-900)] mb-4">
                  We are looking for motivated researchers to join our team.
                </p>
                <p className="text-sm text-[var(--ci-gray-600)] mb-4">
                  <strong>Eligibility:</strong> {member.fellowshipRequirements}
                </p>
                <a
                  href="https://cancerinstitutewia.in/career/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--ci-blue)] text-white font-bold rounded-lg hover:bg-[var(--ci-blue-dark)] transition-colors text-sm"
                >
                  View Open Positions
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </section>
          )}

          {/* Contact */}
          <section id="contact">
            <h2 className="font-heading text-2xl font-bold text-[var(--ci-blue)] mb-6">
              Contact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm text-[var(--ci-gray-600)] mb-2">
                  {member.department}
                </p>
                <p className="text-sm text-[var(--ci-gray-600)] mb-4">
                  Cancer Institute (WIA), Adyar, Chennai — 600 036
                </p>
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 text-[var(--ci-blue)] hover:text-[var(--ci-blue-dark)] font-bold transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    {member.email}
                  </a>
                )}
              </div>

              {/* Contact Form */}
              <div>
                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <p className="text-green-700 font-bold mb-1">
                      Thank you for your message.
                    </p>
                    <p className="text-green-600 text-sm">
                      We will respond within 3-5 business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-bold text-[var(--ci-gray-900)] mb-1"
                      >
                        Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-[var(--ci-gray-200)] rounded-lg text-sm focus:outline-none focus:border-[var(--ci-blue)] focus:ring-1 focus:ring-[var(--ci-blue)]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-bold text-[var(--ci-gray-900)] mb-1"
                      >
                        Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        className="w-full px-3 py-2 border border-[var(--ci-gray-200)] rounded-lg text-sm focus:outline-none focus:border-[var(--ci-blue)] focus:ring-1 focus:ring-[var(--ci-blue)]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-institution"
                        className="block text-sm font-bold text-[var(--ci-gray-900)] mb-1"
                      >
                        Institution
                      </label>
                      <input
                        id="contact-institution"
                        type="text"
                        className="w-full px-3 py-2 border border-[var(--ci-gray-200)] rounded-lg text-sm focus:outline-none focus:border-[var(--ci-blue)] focus:ring-1 focus:ring-[var(--ci-blue)]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-sm font-bold text-[var(--ci-gray-900)] mb-1"
                      >
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        className="w-full px-3 py-2 border border-[var(--ci-gray-200)] rounded-lg text-sm focus:outline-none focus:border-[var(--ci-blue)] focus:ring-1 focus:ring-[var(--ci-blue)] resize-y"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--ci-blue)] text-white font-bold rounded-lg hover:bg-[var(--ci-blue-dark)] transition-colors text-sm"
                    >
                      Send Message
                      <Send className="h-3.5 w-3.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
