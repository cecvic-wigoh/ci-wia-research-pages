export interface Department {
  slug: string;
  name: string;
  established: string;
  description: string;
  facultyCount: number;
  focusAreas: string[];
  icon: string;
}

export const departments: Department[] = [
  {
    slug: "molecular-oncology",
    name: "Department of Molecular Oncology",
    established: "1994",
    description:
      "Bridging laboratory discoveries with clinical application, developing affordable diagnostic tools for India's most prevalent cancers. Our researchers work at the intersection of biomarker discovery, microbiome characterization, and translational diagnostics.",
    facultyCount: 3,
    focusAreas: [
      "Cervical Cancer Diagnostics",
      "Colorectal Cancer Microbiome",
      "Translational Technologies",
      "Antimicrobial Resistance",
    ],
    icon: "microscope",
  },
  {
    slug: "cancer-biology-molecular-diagnostics",
    name: "Department of Cancer Biology & Molecular Diagnostics",
    established: "1988",
    description:
      "Investigating the fundamental mechanisms of cancer initiation, progression, and metastasis. The department focuses on identifying molecular markers for early cancer detection and personalized treatment strategies.",
    facultyCount: 4,
    focusAreas: [
      "Cancer Genomics",
      "Epigenetic Regulation",
      "Drug Resistance Mechanisms",
      "Molecular Diagnostics",
    ],
    icon: "dna",
  },
  {
    slug: "clinical-trials-statistical-unit",
    name: "Clinical Trials & Statistical Unit (CTSU)",
    established: "2001",
    description:
      "Designing and conducting rigorous clinical trials that translate laboratory discoveries into evidence-based patient care. The unit manages multisite trials across India and internationally, with a dedicated 8-bed clinical trial ward and research pharmacy.",
    facultyCount: 3,
    focusAreas: [
      "Phase II/III Clinical Trials",
      "Biostatistics",
      "Pharmacovigilance",
      "Real-World Evidence",
    ],
    icon: "chart-bar",
  },
  {
    slug: "preventive-oncology",
    name: "Department of Preventive Oncology",
    established: "1969",
    description:
      "Pioneering community-based cancer screening and prevention programs across South India. The department screens 7,000–8,000 women annually for cervical, breast, and oral cancers through urban and rural outreach programs.",
    facultyCount: 2,
    focusAreas: [
      "Cervical Cancer Screening",
      "Breast Cancer Early Detection",
      "Tobacco Cessation",
      "Community Health Education",
    ],
    icon: "shield-check",
  },
  {
    slug: "cancer-epidemiology",
    name: "Department of Cancer Epidemiology",
    established: "1981",
    description:
      "Home to the Madras Metropolitan Tumour Registry — one of India's oldest population-based cancer registries with over 200,000 cases documented. The department studies cancer incidence patterns, survival trends, and risk factors in the Indian population.",
    facultyCount: 2,
    focusAreas: [
      "Population-Based Cancer Registry",
      "Survival Analysis",
      "Cancer Risk Factors",
      "Health Services Research",
    ],
    icon: "bar-chart",
  },
];
