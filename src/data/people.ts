import { Person } from "./types";

export const people: Person[] = [
  {
    slug: "dr-mayilvahanan-bose",
    name: "Dr. Mayilvahanan Bose",
    title: "Associate Professor, Department of Molecular Oncology",
    department: "Department of Molecular Oncology",
    photo: "/faculty/mv.png",
    departmentSlug: "molecular-oncology",
    category: "internal",
    cancerTypes: ["colon-cancer", "ovarian-womens-cancers", "gastric-cancer"],
    researchFocus:
      "Translational diagnostics, biomarker discovery, and gut microbiome characterization in Indian cancers",
    researchQuote:
      "Our goal is to bridge the gap between laboratory discoveries and affordable cancer diagnostics — making early detection accessible to every patient, regardless of where they live.",
    initials: "MB",
    researchInterests: [
      "Biomarker Discovery",
      "Translational Diagnostics",
      "Microbiome & Metagenomics",
      "Antimicrobial Resistance",
    ],
    problem:
      "Cervical cancer remains the second most common cancer among Indian women, while colorectal cancer incidence is rising rapidly — particularly early-onset CRC in younger populations. Current screening tools are often expensive, require specialized infrastructure, and are inaccessible to the majority of India's population. The gut microbiome's role in cancer development is poorly understood in Indian populations, where dietary patterns, genetics, and microbial exposures differ significantly from Western cohorts.",
    approach:
      "Dr. Bose's laboratory employs a multi-pronged translational research strategy: developing affordable biomarker-based screening tools (DAS-ELISA for HPV/p16 detection), characterizing the colorectal cancer-associated gut microbiome using 16S rRNA gene sequencing and whole metagenome analysis, and building international research networks to compare microbial patterns across populations. The lab collaborates with institutions in the UK, Chile, Argentina, and Vietnam through GCRF-funded networks, and coordinates a 12-center pan-India consortium (PEACOCC) to study early-onset CRC. Machine learning models are being applied to microbiome data for predictive diagnostics.",
    discoveries:
      "The p16 DAS-ELISA technology for cervical cancer screening was successfully developed and transferred to HLL Lifecare Limited — a Government of India Enterprise — for large-scale manufacturing and deployment. Gut microbiome profiling has revealed that India-specific CRC microbiome signatures show geographic distinctness but share universal CRC-associated patterns with UK cohorts. A notable finding from the international E. coli (pks+) study showed 4% prevalence in Indian CRC patients compared to 31% in the UK NHSBCSP cohort, suggesting distinct genotoxic mechanisms. The PEACOCC consortium is generating the first comprehensive characterization of early-onset CRC microbial composition across India.",
    projects: [
      {
        title:
          "Large bowel microbiome — a network approach to unravelling the relationship between gut microbiota and colorectal cancer in India and the UK",
        fundingAgency: "Global Challenges Research Fund (GCRF), UK",
        role: "Co-PI",
        status: "completed",
      },
      {
        title: "OPTIMISTICC Grand Challenge",
        fundingAgency: "Cancer Research UK",
        role: "PI (India Site)",
        status: "ongoing",
      },
      {
        title:
          "ID-PPP-OTN: Infectious Diseases — Public Private Partnerships on Treatment and Novel diagnostics",
        fundingAgency: "SERB, Department of Science and Technology",
        role: "Co-PI",
        status: "completed",
      },
      {
        title:
          "PEACOCC: Pan-India Early-onset CRC Microbial Composition Characterization",
        fundingAgency: "DBT/Wellcome Trust India Alliance",
        role: "Site-PI",
        status: "ongoing",
      },
      {
        title:
          "MolOnco-DnT-CenTr: Molecular Oncology Diagnostics & Therapeutics Centre",
        fundingAgency: "ICMR-CAR",
        role: "Site-PI",
        status: "ongoing",
      },
    ],
    awards: [
      {
        title:
          "Young Immunologists from the Developing World Award — International Union of Immunological Societies (IUIS)",
      },
      {
        title:
          "Technology Transfer: p16 DAS-ELISA to HLL Lifecare Limited, Government of India Enterprise",
      },
      {
        title: "DHR-ICMR International Fellow",
        year: "2025–2026",
      },
    ],
    teamMembers: [
      {
        name: "Dr. K. Mohan Maruthi Sena",
        qualification: "PhD, Computational Biology",
        role: "Research Associate",
        research:
          "Bioinformatics analysis of metagenome data, antimicrobial resistance profiling in CRC patients, comparative genomics of gut Limosilactobacillus reuteri",
        initials: "MS",
      },
      {
        name: "Mr. Viveak Kumar",
        qualification: "MSc, Genomics",
        role: "Project Associate / PhD Scholar",
        research:
          "16S rRNA gene sequencing of CRC gut microbiome, whole metagenome sequencing analysis, Oxford Nanopore full-length 16S profiling",
        initials: "VK",
      },
      {
        name: "Ms. Aishwarya Parasuraman",
        qualification: "MSc, Biochemistry",
        role: "Research Assistant / PhD Scholar",
        research:
          "Cervical cancer microbiome profiling, gut microbiome characterization in early-onset CRC, PEACOCC consortium sample processing",
        initials: "AP",
      },
      {
        name: "Dr. Mangala Priya Viswanathan",
        qualification: "PhD, Biotechnology",
        role: "Project Research Scientist I",
        research:
          "p16 DAS-ELISA validation and optimization, HPV genotyping, cervical cancer screening program coordination",
        initials: "MV",
      },
      {
        name: "Ms. Akshaya",
        qualification: "MSc, Human Genetics",
        role: "ICMR-JRF / PhD Scholar",
        research:
          "PEACOCC consortium sample collection and analysis, early-onset CRC microbiome characterization across Indian centers",
        initials: "AK",
      },
    ],
    publicationIds: [
      "pub-1",
      "pub-2",
      "pub-3",
      "pub-4",
      "pub-5",
      "pub-6",
      "pub-7",
      "pub-8",
      "pub-9",
      "pub-10",
    ],
    email: "b.mayilvahanan@cancerinstitutewia.org",
    pubmedUrl:
      "https://pubmed.ncbi.nlm.nih.gov/?term=Bose+M+Cancer+Institute+WIA",
    fellowshipRequirements:
      "Prospective PhD candidates with own fellowship (Inspire / DBT JRF / ICMR-JRF / CSIR-NET)",
  },
  // Placeholder faculty members
  {
    slug: "dr-jegan-thomas",
    name: "Dr. Jegan Thomas",
    title: "Professor & Head, Department of Molecular Oncology",
    department: "Department of Molecular Oncology",
    photo: "/faculty/jt.jpg",
    departmentSlug: "molecular-oncology",
    category: "internal",
    cancerTypes: ["ovarian-womens-cancers", "head-and-neck-cancer"],
    researchFocus:
      "Cervical cancer screening, HPV molecular diagnostics, and DAS-ELISA technology development",
    initials: "JT",
    researchInterests: [
      "HPV Diagnostics",
      "Cervical Cancer Screening",
      "Molecular Pathology",
    ],
    projects: [],
    awards: [],
    teamMembers: [],
    publicationIds: [],
    email: "jegan.thomas@cancerinstitutewia.org",
  },
  {
    slug: "dr-thangarajan-rajkumar",
    name: "Dr. Thangarajan Rajkumar",
    title: "Professor, Department of Cancer Biology & Molecular Diagnostics",
    department: "Department of Cancer Biology & Molecular Diagnostics",
    photo: "/faculty/tr.jpg",
    departmentSlug: "cancer-biology-molecular-diagnostics",
    category: "internal",
    cancerTypes: ["breast-cancer", "head-and-neck-cancer"],
    researchFocus:
      "Cancer genomics, epigenetic regulation, and drug resistance mechanisms in breast and oral cancers",
    initials: "TR",
    researchInterests: [
      "Cancer Genomics",
      "Epigenetics",
      "Drug Resistance",
      "Breast Cancer",
    ],
    projects: [],
    awards: [],
    teamMembers: [],
    publicationIds: [],
    email: "t.rajkumar@cancerinstitutewia.org",
  },
  {
    slug: "dr-shirley-sunder-singh",
    name: "Dr. Shirley Sunder Singh",
    title: "Professor, Department of Cancer Biology & Molecular Diagnostics",
    department: "Department of Cancer Biology & Molecular Diagnostics",
    photo: "/faculty/ss.jpg",
    departmentSlug: "cancer-biology-molecular-diagnostics",
    category: "internal",
    cancerTypes: ["breast-cancer", "head-and-neck-cancer"],
    researchFocus:
      "miRNA profiling in triple-negative breast cancer, molecular diagnostics for head and neck cancers",
    initials: "SS",
    researchInterests: [
      "miRNA Profiling",
      "Molecular Diagnostics",
      "Head & Neck Cancer",
    ],
    projects: [],
    awards: [],
    teamMembers: [],
    publicationIds: [],
    email: "shirley.singh@cancerinstitutewia.org",
  },
  {
    slug: "dr-rama-jayaraj",
    name: "Dr. Rama Jayaraj",
    title: "Associate Professor, Department of Cancer Biology & Molecular Diagnostics",
    department: "Department of Cancer Biology & Molecular Diagnostics",
    photo: "/faculty/rj.jpg",
    departmentSlug: "cancer-biology-molecular-diagnostics",
    category: "internal",
    cancerTypes: ["head-and-neck-cancer", "rare-cancers"],
    researchFocus:
      "Oral cancer molecular pathogenesis, salivary biomarkers for early detection",
    initials: "RJ",
    researchInterests: [
      "Oral Cancer",
      "Salivary Biomarkers",
      "Early Detection",
    ],
    projects: [],
    awards: [],
    teamMembers: [],
    publicationIds: [],
    email: "rama.jayaraj@cancerinstitutewia.org",
  },
  {
    slug: "dr-arvind-krishnamurthy",
    name: "Dr. Arvind Krishnamurthy",
    title: "Professor & Head, Clinical Trials & Statistical Unit",
    department: "Clinical Trials & Statistical Unit",
    photo: "/faculty/ak.jpg",
    departmentSlug: "clinical-trials-statistical-unit",
    category: "internal",
    cancerTypes: ["head-and-neck-cancer", "bone-cancers", "lung-cancer"],
    researchFocus:
      "Head and neck surgical oncology, clinical trial design, and evidence-based oncology practice",
    initials: "AK",
    researchInterests: [
      "Clinical Trial Design",
      "Surgical Oncology",
      "Evidence-Based Medicine",
    ],
    projects: [],
    awards: [],
    teamMembers: [],
    publicationIds: [],
    email: "arvind.k@cancerinstitutewia.org",
  },
  {
    slug: "dr-selvaluxmy-ganapathy",
    name: "Dr. Selvaluxmy Ganapathy",
    title: "Professor, Department of Preventive Oncology",
    department: "Department of Preventive Oncology",
    photo: "/faculty/sg.jpg",
    departmentSlug: "preventive-oncology",
    category: "internal",
    cancerTypes: ["breast-cancer", "ovarian-womens-cancers"],
    researchFocus:
      "Community-based cervical and breast cancer screening programs, health education outreach",
    initials: "SG",
    researchInterests: [
      "Cancer Screening",
      "Community Health",
      "Breast Cancer",
      "Health Education",
    ],
    projects: [],
    awards: [],
    teamMembers: [],
    publicationIds: [],
    email: "selvaluxmy.g@cancerinstitutewia.org",
  },
  {
    slug: "dr-rajaraman-swaminathan",
    name: "Dr. Rajaraman Swaminathan",
    title: "Head, Department of Cancer Epidemiology",
    department: "Department of Cancer Epidemiology",
    photo: "/faculty/rs.jpg",
    departmentSlug: "cancer-epidemiology",
    category: "internal",
    cancerTypes: ["blood-cancers", "childrens-cancers", "lung-cancer"],
    researchFocus:
      "Cancer incidence trends, population-based survival analysis, and the Madras Metropolitan Tumour Registry",
    initials: "RS",
    researchInterests: [
      "Cancer Epidemiology",
      "Tumour Registry",
      "Survival Analysis",
      "Population Health",
    ],
    projects: [],
    awards: [],
    teamMembers: [],
    publicationIds: [],
    email: "r.swaminathan@cancerinstitutewia.org",
  },
];
