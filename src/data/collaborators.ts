export interface Collaborator {
  name: string;
  country: string;
  type: "international" | "national" | "network";
  project: string;
  status: "active" | "completed";
  description: string;
}

export const collaborators: Collaborator[] = [
  {
    name: "University of Leeds",
    country: "United Kingdom",
    type: "international",
    project: "Large Bowel Microbiome Research Network",
    status: "completed",
    description:
      "GCRF-funded network characterizing colorectal cancer-associated gut microbiome across India, UK, Chile, Argentina, and Vietnam.",
  },
  {
    name: "Cancer Research UK",
    country: "United Kingdom",
    type: "international",
    project: "OPTIMISTICC Grand Challenge",
    status: "active",
    description:
      "Multi-million pound global initiative to understand microbial contributions to cancer causation and prevention.",
  },
  {
    name: "DBT/Wellcome Trust India Alliance",
    country: "India / United Kingdom",
    type: "international",
    project: "PEACOCC Consortium",
    status: "active",
    description:
      "Pan-India consortium characterizing early-onset colorectal cancer microbial composition across 12 Indian centers.",
  },
  {
    name: "World Health Organization (WHO)",
    country: "International",
    type: "international",
    project: "Cancer Control Projects",
    status: "completed",
    description:
      "Historical collaboration on cancer control programs. WHO has rated Cancer Institute (WIA) as India's top-ranking cancer center.",
  },
  {
    name: "IIT Madras",
    country: "India",
    type: "national",
    project: "Ovarian Cancer Diagnostics AI",
    status: "active",
    description:
      "Leveraging machine learning and artificial intelligence for improved ovarian cancer diagnostics, combining clinical expertise with computational innovation.",
  },
  {
    name: "Indian Council of Medical Research (ICMR)",
    country: "India",
    type: "national",
    project: "Multiple Funded Research Programs",
    status: "active",
    description:
      "Ongoing partnerships across cancer biology, molecular diagnostics, and clinical trials. ICMR-CAR funding supports the MolOnco-DnT-CenTr initiative.",
  },
  {
    name: "HLL Lifecare Limited",
    country: "India",
    type: "national",
    project: "p16 DAS-ELISA Technology Transfer",
    status: "completed",
    description:
      "Government of India Enterprise. Successful transfer of the p16 DAS-ELISA cervical cancer screening technology developed at Cancer Institute (WIA).",
  },
  {
    name: "International CRC Microbiome Network",
    country: "International",
    type: "network",
    project: "Global Colorectal Cancer Microbiome Research",
    status: "active",
    description:
      "Multi-country research network studying gut microbiome associations with colorectal cancer across diverse populations.",
  },
  {
    name: "PEACOCC Consortium",
    country: "India",
    type: "network",
    project: "Pan-India Early-Onset CRC Microbiome Study",
    status: "active",
    description:
      "12-center consortium characterizing microbial composition in early-onset colorectal cancer across India, the first study of its kind.",
  },
];
