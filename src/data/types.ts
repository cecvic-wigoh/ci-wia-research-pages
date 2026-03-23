// src/data/types.ts
// IMPORTANT: These interfaces must match the existing data exactly.
// Fields marked optional (?) are optional because existing data entries may omit them.

export interface TeamMember {
  name: string;
  qualification: string;
  role: string;
  research: string;
  initials: string;
}

export interface Project {
  title: string;
  fundingAgency: string;
  role: string;
  status: "ongoing" | "completed";
}

export interface Award {
  title: string;
  year?: string;
}

export interface Person {
  slug: string;
  name: string;
  title: string;
  department: string;
  departmentSlug: string;
  category: "internal" | "adjunct" | "international";
  cancerTypes: string[];
  researchFocus: string;
  researchQuote?: string;
  researchInterests: string[];
  problem?: string;
  approach?: string;
  discoveries?: string;
  projects: Project[];
  awards: Award[];
  teamMembers: TeamMember[];
  publicationIds: string[];
  email?: string;
  pubmedUrl?: string;
  fellowshipRequirements?: string;
  photo?: string;
  initials: string;
}

export interface CancerType {
  slug: string;
  name: string;
  icon: string;
  image?: string;
  description: string;
  overviewHtml: string;
  impactStats: { label: string; value: string }[];
  researchThemes: { title: string; description: string }[];
  clinicalTrials: { title: string; status: string; pi: string; id: string }[];
  donationUrl: string;
  donationCta: string;
  donationDescription: string;
}

export interface EquipmentGroup {
  name: string;
  image?: string;
  items: { name: string; description: string; icon: string; image?: string }[];
}

export interface Facility {
  slug: string;
  name: string;
  category: "equipment" | "gmp" | "clinical-trials" | "biorepository" | "disease-models";
  description: string;
  overview: string;
  icon: string;
  image: string;
  capabilities: string[];
  equipmentGroups?: EquipmentGroup[];
  contactInfo: string;
}

export interface Publication {
  id: string;
  authors: string;
  title: string;
  journal: string;
  year: number;
  volume?: string;
  pages?: string;
  doi?: string;
  department: string;
  highlightAuthor?: string;
  cancerTypes?: string[];
}

export interface NewsItem {
  slug: string;
  headline: string;
  teaser: string;
  date: string;
  heroImage: string;
  body: string;
  whyItMatters: string;
  taggedPeople: string[];
  taggedCancerTypes: string[];
  taggedFacilities: string[];
}

export interface Leader {
  slug: string;
  name: string;
  role: string;
  institution: string;
  photo: string;
  initials: string;
  description: string;
  category: "leadership" | "sab";
}

export interface Collaborator {
  name: string;
  country: string;
  city: string;
  type: "international" | "national" | "network";
  project: string;
  status: "active" | "completed";
  description: string;
  linkedPeople: string[];
  lat: number;
  lng: number;
}

export interface Statistic {
  value: string;
  label: string;
  icon: string;
}

export interface Founder {
  name: string;
  slug: string;
  title: string;
  years: string;
  quote: string;
  contribution: string;
  initials: string;
  image: string;
  heroSubtitle?: string;
  bio: string[];
}
