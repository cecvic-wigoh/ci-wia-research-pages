import type { CancerType } from "./types";

export const cancerTypes: CancerType[] = [
  {
    slug: "breast-cancer",
    name: "Breast Cancer",
    icon: "🎗️",
    image: "/cancers/breast-cancer.jpg",
    description:
      "Our breast cancer program integrates molecular subtyping, targeted therapy trials, and survivorship research to improve outcomes across all stages of disease.",
    overviewHtml:
      "Breast cancer remains one of the most commonly diagnosed cancers in India, with rising incidence among younger women. Our research program spans the full translational spectrum — from decoding triple-negative breast cancer biology to developing novel immunotherapy combinations. We also lead community-level screening initiatives aimed at early detection in underserved populations.",
    impactStats: [
      { label: "Patients treated annually", value: "3,000+" },
      { label: "Active clinical trials", value: "12" },
      { label: "Five-year survival improvement", value: "18%" },
      { label: "Publications (2020–2025)", value: "85" },
    ],
    researchThemes: [
      {
        title: "Triple-Negative Breast Cancer Genomics",
        description:
          "Whole-exome and RNA sequencing to identify actionable mutations and resistance mechanisms in TNBC prevalent in South Asian populations.",
      },
      {
        title: "Immunotherapy Combinations",
        description:
          "Evaluating checkpoint inhibitors combined with PARP inhibitors and novel antibody-drug conjugates for advanced disease.",
      },
      {
        title: "Early Detection & Screening",
        description:
          "AI-powered mammography interpretation and community health worker–led screening programs in rural Tamil Nadu.",
      },
      {
        title: "Survivorship & Quality of Life",
        description:
          "Prospective studies on long-term cardiotoxicity, lymphedema management, and integrative oncology interventions.",
      },
    ],
    clinicalTrials: [
      {
        title: "Phase II Sacituzumab Govitecan + Pembrolizumab in Metastatic TNBC",
        status: "Recruiting",
        pi: "Dr. Rama Jayaraj",
        id: "NCT06234501",
      },
      {
        title: "Neoadjuvant Olaparib in BRCA-Mutant Breast Cancer",
        status: "Active",
        pi: "Dr. Shirley Sunder Singh",
        id: "NCT06234502",
      },
      {
        title: "AI-Assisted Mammography Screening in Rural Populations",
        status: "Recruiting",
        pi: "Dr. Arvind Krishnamurthy",
        id: "NCT06234503",
      },
    ],
    donationUrl: "#donate",
    donationCta: "Support Breast Cancer Research",
    donationDescription:
      "Your contribution funds cutting-edge clinical trials and early detection programs that directly improve survival for thousands of women each year.",
  },
  {
    slug: "blood-cancers",
    name: "Blood Cancers",
    icon: "🩸",
    image: "/cancers/blood-cancers.jpg",
    description:
      "Our haematological malignancy research covers leukaemias, lymphomas, and myelomas, with a focus on precision medicine and novel CAR-T cell therapies.",
    overviewHtml:
      "Blood cancers — including leukaemia, lymphoma, and multiple myeloma — represent a major area of therapeutic innovation at our institute. Our researchers are pioneering locally manufactured CAR-T cell therapies, reducing costs to a fraction of global prices. We also maintain one of India's largest haematological biobanks, enabling population-specific genomic studies.",
    impactStats: [
      { label: "Bone marrow transplants performed", value: "450+" },
      { label: "CAR-T patients treated", value: "78" },
      { label: "Complete remission rate (ALL)", value: "92%" },
    ],
    researchThemes: [
      {
        title: "Affordable CAR-T Cell Therapy",
        description:
          "Developing in-house CAR-T manufacturing protocols that reduce treatment costs from $400,000 to under $30,000 per patient.",
      },
      {
        title: "Minimal Residual Disease Monitoring",
        description:
          "Flow cytometry and next-generation sequencing–based MRD detection to guide treatment de-escalation in acute leukaemias.",
      },
      {
        title: "Lymphoma Genomics",
        description:
          "Characterizing the mutational landscape of diffuse large B-cell lymphoma in Indian patients to identify prognostic biomarkers.",
      },
    ],
    clinicalTrials: [
      {
        title: "Phase I/II Indigenous Anti-CD19 CAR-T in Relapsed ALL",
        status: "Recruiting",
        pi: "Dr. T. Rajkumar",
        id: "NCT06234504",
      },
      {
        title: "Ibrutinib + Venetoclax in Treatment-Naive CLL",
        status: "Active",
        pi: "Dr. R. Swaminathan",
        id: "NCT06234505",
      },
    ],
    donationUrl: "#donate",
    donationCta: "Fund Blood Cancer Breakthroughs",
    donationDescription:
      "Donations support our pioneering CAR-T cell therapy program and help make life-saving treatments accessible to every patient regardless of economic status.",
  },
  {
    slug: "lung-cancer",
    name: "Lung Cancer",
    icon: "🫁",
    image: "/cancers/lung-cancer.jpg",
    description:
      "Our lung cancer program focuses on targeted therapy for driver mutations common in South Asian never-smokers and advanced immunotherapy approaches.",
    overviewHtml:
      "Lung cancer in India presents a distinct profile compared to Western populations — a significant proportion of patients are never-smokers with unique driver mutations such as EGFR and ALK rearrangements. Our research addresses these population-specific biology differences while advancing liquid biopsy technologies for early detection and real-time treatment monitoring.",
    impactStats: [
      { label: "Patients in active treatment", value: "1,800+" },
      { label: "Genomic profiles completed", value: "2,500+" },
      { label: "Median survival improvement", value: "8 months" },
    ],
    researchThemes: [
      {
        title: "EGFR & ALK Targeted Therapies",
        description:
          "Optimizing treatment sequencing for EGFR-mutant and ALK-rearranged non-small cell lung cancer using next-generation TKIs.",
      },
      {
        title: "Liquid Biopsy Development",
        description:
          "Circulating tumour DNA assays for early detection, treatment response monitoring, and resistance mechanism identification.",
      },
      {
        title: "Immunotherapy Biomarkers",
        description:
          "Identifying predictive biomarkers for PD-L1 checkpoint inhibitor response in Indian lung cancer populations.",
      },
      {
        title: "Lung Cancer in Never-Smokers",
        description:
          "Investigating environmental and genetic risk factors driving the rising incidence of lung cancer among non-smoking Indian women.",
      },
    ],
    clinicalTrials: [
      {
        title: "Osimertinib + Savolitinib in EGFR-Mutant NSCLC with MET Amplification",
        status: "Recruiting",
        pi: "Dr. Arvind Krishnamurthy",
        id: "NCT06234506",
      },
      {
        title: "ctDNA-Guided Adaptive Immunotherapy in Stage III NSCLC",
        status: "Active",
        pi: "Dr. Jegan Thomas",
        id: "NCT06234507",
      },
    ],
    donationUrl: "#donate",
    donationCta: "Advance Lung Cancer Research",
    donationDescription:
      "Your support powers genomic profiling and liquid biopsy research that helps doctors detect lung cancer earlier and choose the most effective treatment for each patient.",
  },
  {
    slug: "childrens-cancers",
    name: "Children's Cancers",
    icon: "👶",
    image: "/cancers/childrens-cancers.jpg",
    description:
      "Our paediatric oncology program addresses the unique biology of childhood cancers, focusing on improving cure rates while reducing long-term treatment toxicity.",
    overviewHtml:
      "Childhood cancers differ fundamentally from adult malignancies in their biology, treatment response, and survivorship challenges. Our paediatric program focuses on improving outcomes for acute lymphoblastic leukaemia, neuroblastoma, and brain tumours through risk-adapted therapy protocols. We are committed to ensuring that every child has access to world-class treatment regardless of their family's means.",
    impactStats: [
      { label: "Children treated annually", value: "900+" },
      { label: "Overall cure rate", value: "72%" },
      { label: "Children on subsidised care", value: "65%" },
    ],
    researchThemes: [
      {
        title: "Risk-Adapted Therapy Protocols",
        description:
          "Genomic risk stratification to intensify treatment for high-risk patients while safely de-escalating therapy for standard-risk children.",
      },
      {
        title: "Neuroblastoma Biology",
        description:
          "Studying MYCN amplification, ALK mutations, and tumour microenvironment in high-risk neuroblastoma to identify novel therapeutic targets.",
      },
      {
        title: "Late Effects & Survivorship",
        description:
          "Long-term follow-up studies tracking endocrine, cardiac, and neurocognitive outcomes in childhood cancer survivors.",
      },
    ],
    clinicalTrials: [
      {
        title: "Reduced-Intensity Maintenance Therapy in Standard-Risk ALL",
        status: "Recruiting",
        pi: "Dr. Shirley Sunder Singh",
        id: "NCT06234508",
      },
      {
        title: "Dinutuximab + Irinotecan in Relapsed Neuroblastoma",
        status: "Active",
        pi: "Dr. Selvaluxmy Ganapathy",
        id: "NCT06234509",
      },
    ],
    donationUrl: "#donate",
    donationCta: "Give Hope to Children with Cancer",
    donationDescription:
      "Donations directly fund treatment for children from economically disadvantaged families and support research into gentler, more effective therapies.",
  },
  {
    slug: "head-and-neck-cancer",
    name: "Head & Neck Cancer",
    icon: "🔬",
    image: "/cancers/head-and-neck-cancer.jpg",
    description:
      "India bears the highest global burden of head and neck cancers. Our program combines de-intensification strategies with novel immunotherapy approaches.",
    overviewHtml:
      "Head and neck squamous cell carcinomas account for nearly one-third of all cancers in India, driven largely by tobacco and betel nut use. Our research program is unique in its focus on HPV-negative disease, which predominates in our population, while also investigating de-intensification strategies for HPV-positive oropharyngeal cancers. We lead multi-institutional trials combining immunotherapy with radiation-sparing protocols.",
    impactStats: [
      { label: "New patients annually", value: "2,200+" },
      { label: "Organ preservation rate", value: "68%" },
      { label: "Genomic profiles completed", value: "1,200+" },
      { label: "Multi-site trial enrollments", value: "340" },
    ],
    researchThemes: [
      {
        title: "HPV-Negative Disease Biology",
        description:
          "Genomic and epigenomic characterization of tobacco-driven head and neck cancers prevalent in the Indian population.",
      },
      {
        title: "De-Intensification Strategies",
        description:
          "Reducing treatment toxicity in favourable-prognosis patients through response-adapted radiation dose reduction.",
      },
      {
        title: "Immunotherapy in Recurrent Disease",
        description:
          "Evaluating novel checkpoint inhibitor combinations and tumour-infiltrating lymphocyte therapy for platinum-refractory cancers.",
      },
      {
        title: "Swallowing & Speech Rehabilitation",
        description:
          "Prospective studies on functional outcomes and quality of life after organ-preserving treatments.",
      },
    ],
    clinicalTrials: [
      {
        title: "Nivolumab + Ipilimumab in Recurrent HPV-Negative HNSCC",
        status: "Recruiting",
        pi: "Dr. Arvind Krishnamurthy",
        id: "NCT06234510",
      },
      {
        title: "Response-Adapted Radiation Dose Reduction in HPV+ Oropharyngeal Cancer",
        status: "Active",
        pi: "Dr. Selvaluxmy Ganapathy",
        id: "NCT06234511",
      },
    ],
    donationUrl: "#donate",
    donationCta: "Support Head & Neck Cancer Research",
    donationDescription:
      "Your contribution funds research into less toxic treatments that preserve speech, swallowing, and quality of life for patients with head and neck cancers.",
  },
  {
    slug: "ovarian-womens-cancers",
    name: "Ovarian & Women's Cancers",
    icon: "♀️",
    image: "/cancers/ovarian-womens-cancers.jpg",
    description:
      "Our women's cancer program addresses ovarian, cervical, and endometrial cancers through innovative early-detection methods and PARP-inhibitor–based therapies.",
    overviewHtml:
      "Ovarian cancer remains the most lethal gynaecological malignancy due to late-stage diagnosis. Our research program is developing blood-based multi-cancer early detection tests and exploring PARP inhibitor combinations tailored to BRCA-mutant and homologous recombination–deficient tumours. For cervical cancer, we lead vaccination-awareness campaigns and investigate novel therapeutic approaches for locally advanced disease.",
    impactStats: [
      { label: "Women screened annually", value: "5,000+" },
      { label: "BRCA testing completed", value: "1,800+" },
      { label: "Early-stage detection rate improvement", value: "22%" },
    ],
    researchThemes: [
      {
        title: "BRCA & HRD-Directed Therapy",
        description:
          "Optimizing PARP inhibitor maintenance strategies based on homologous recombination deficiency status in ovarian cancer.",
      },
      {
        title: "Multi-Cancer Early Detection",
        description:
          "Developing and validating cfDNA-based tests for simultaneous detection of ovarian, endometrial, and cervical cancers.",
      },
      {
        title: "Cervical Cancer Elimination",
        description:
          "HPV vaccination awareness programs and clinical trials of therapeutic HPV vaccines for pre-invasive disease.",
      },
    ],
    clinicalTrials: [
      {
        title: "Niraparib + Bevacizumab Maintenance in Advanced Ovarian Cancer",
        status: "Recruiting",
        pi: "Dr. Rama Jayaraj",
        id: "NCT06234512",
      },
      {
        title: "Therapeutic HPV Vaccine in High-Grade Cervical Intraepithelial Neoplasia",
        status: "Active",
        pi: "Dr. Shirley Sunder Singh",
        id: "NCT06234513",
      },
    ],
    donationUrl: "#donate",
    donationCta: "Champion Women's Cancer Research",
    donationDescription:
      "Donations fund early detection research and clinical trials that give women diagnosed with ovarian and cervical cancers access to the most promising new therapies.",
  },
  {
    slug: "colon-cancer",
    name: "Colon Cancer",
    icon: "🧬",
    image: "/cancers/colon-cancer.jpg",
    description:
      "Our colorectal cancer program investigates the rising incidence of young-onset disease in India and develops precision medicine strategies for advanced-stage patients.",
    overviewHtml:
      "Colorectal cancer incidence is rising sharply in India, particularly among adults under 50. Our research program is investigating the molecular and environmental drivers of this trend while advancing microsatellite instability–guided immunotherapy and ctDNA-directed adjuvant treatment. We also lead India's first large-scale colonoscopy screening study in average-risk populations.",
    impactStats: [
      { label: "Patients treated annually", value: "1,400+" },
      { label: "Young-onset cases studied", value: "620" },
      { label: "MSI testing rate", value: "98%" },
    ],
    researchThemes: [
      {
        title: "Young-Onset Colorectal Cancer",
        description:
          "Epidemiological and molecular studies investigating why colorectal cancer rates are rising among Indian adults under 50.",
      },
      {
        title: "MSI-High Immunotherapy",
        description:
          "Checkpoint inhibitor monotherapy and combinations for microsatellite instability–high colorectal cancers.",
      },
      {
        title: "ctDNA-Guided Adjuvant Therapy",
        description:
          "Using circulating tumour DNA to identify stage II/III patients who can safely omit adjuvant chemotherapy.",
      },
      {
        title: "Population Screening Strategies",
        description:
          "Evaluating faecal immunochemical testing and colonoscopy as cost-effective screening approaches in the Indian context.",
      },
    ],
    clinicalTrials: [
      {
        title: "ctDNA-Directed Adjuvant Therapy in Stage II Colon Cancer",
        status: "Recruiting",
        pi: "Dr. T. Rajkumar",
        id: "NCT06234514",
      },
      {
        title: "Dostarlimab Monotherapy in dMMR Locally Advanced Rectal Cancer",
        status: "Active",
        pi: "Dr. Mayilvahanan Bose",
        id: "NCT06234515",
      },
    ],
    donationUrl: "#donate",
    donationCta: "Fight Colon Cancer with Research",
    donationDescription:
      "Your generosity supports research into why colorectal cancer is striking younger Indians and funds clinical trials of less invasive treatment approaches.",
  },
  {
    slug: "gastric-cancer",
    name: "Gastric Cancer",
    icon: "🫄",
    image: "/cancers/gastric-cancer.jpg",
    description:
      "Our gastric cancer research addresses the high incidence of stomach cancer in southern India through molecular classification and novel perioperative treatment regimens.",
    overviewHtml:
      "Gastric cancer remains a leading cause of cancer mortality in southern India, with most patients presenting at advanced stages. Our research leverages molecular subtyping — including EBV-associated, MSI-high, and chromosomally instable subtypes — to guide treatment selection. We are also investigating the role of Helicobacter pylori eradication in cancer prevention and the integration of immunotherapy into perioperative treatment.",
    impactStats: [
      { label: "New patients annually", value: "950+" },
      { label: "Molecular subtyping rate", value: "85%" },
      { label: "Perioperative trial enrolments", value: "210" },
    ],
    researchThemes: [
      {
        title: "Molecular Classification",
        description:
          "Subtyping gastric cancers by EBV status, microsatellite instability, and genomic stability to tailor treatment strategies.",
      },
      {
        title: "Perioperative Immunotherapy",
        description:
          "Combining checkpoint inhibitors with FLOT chemotherapy in the neoadjuvant and adjuvant settings for resectable gastric cancer.",
      },
      {
        title: "H. pylori & Cancer Prevention",
        description:
          "Population-level studies on H. pylori eradication as a gastric cancer prevention strategy in high-incidence regions of Tamil Nadu.",
      },
    ],
    clinicalTrials: [
      {
        title: "FLOT + Nivolumab in Resectable Gastric Adenocarcinoma",
        status: "Recruiting",
        pi: "Dr. Jegan Thomas",
        id: "NCT06234516",
      },
    ],
    donationUrl: "#donate",
    donationCta: "Support Gastric Cancer Research",
    donationDescription:
      "Donations fund molecular profiling and innovative perioperative treatment trials for patients with stomach cancer — one of the region's deadliest malignancies.",
  },
  {
    slug: "bone-cancers",
    name: "Bone Cancers",
    icon: "🦴",
    image: "/cancers/bone-cancers.jpg",
    description:
      "Our bone cancer program combines limb-salvage surgery innovation with targeted therapies for osteosarcoma, Ewing sarcoma, and chondrosarcoma.",
    overviewHtml:
      "Bone cancers, though rare, disproportionately affect children and young adults. Our program integrates advanced imaging–guided limb-salvage surgery with novel systemic therapies to improve both survival and functional outcomes. We maintain one of India's largest sarcoma tissue banks, enabling multi-omic studies of osteosarcoma and Ewing sarcoma biology.",
    impactStats: [
      { label: "Sarcoma cases managed annually", value: "280+" },
      { label: "Limb-salvage success rate", value: "82%" },
      { label: "Tissue bank specimens", value: "3,400+" },
    ],
    researchThemes: [
      {
        title: "Osteosarcoma Genomics",
        description:
          "Whole-genome sequencing to identify copy number alterations and chromothripsis events driving chemoresistance in osteosarcoma.",
      },
      {
        title: "Limb-Salvage Innovation",
        description:
          "3D-printed custom prostheses and navigation-guided resection to maximise function after tumour removal.",
      },
      {
        title: "Ewing Sarcoma Targeted Therapy",
        description:
          "Evaluating IGF-1R inhibitors and EZH2 inhibitors as novel therapeutic approaches in relapsed Ewing sarcoma.",
      },
    ],
    clinicalTrials: [
      {
        title: "Regorafenib in Relapsed Osteosarcoma After First-Line Failure",
        status: "Active",
        pi: "Dr. Mayilvahanan Bose",
        id: "NCT06234517",
      },
      {
        title: "3D-Printed Prosthesis vs Conventional Endoprosthesis in Limb Salvage",
        status: "Recruiting",
        pi: "Dr. Mayilvahanan Bose",
        id: "NCT06234518",
      },
    ],
    donationUrl: "#donate",
    donationCta: "Help Young Patients Beat Bone Cancer",
    donationDescription:
      "Your support funds innovative limb-salvage surgery technologies and genomic research that give young bone cancer patients the best chance at a full, active life.",
  },
];
