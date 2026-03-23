import { Facility, EquipmentGroup } from "./types";

export const facilities: Facility[] = [
  {
    slug: "research-equipment",
    name: "Core Research Equipment",
    category: "equipment",
    description:
      "Centralized instrumentation facility housing advanced sequencing, flow cytometry, microscopy, and molecular biology platforms for translational cancer research.",
    overview:
      "The Core Research Equipment facility at Cancer Institute (WIA) provides investigators with access to state-of-the-art instrumentation essential for modern cancer research. Maintained by dedicated technical staff, the facility supports projects spanning genomics, proteomics, cell biology, and molecular diagnostics. Researchers across all departments can reserve instrument time and receive training on equipment operation and data analysis.",
    icon: "🔬",
    image: "/facilities/research-equipment-1.jpeg",
    capabilities: [
      "Next-generation and third-generation sequencing for whole-genome, exome, and targeted panels",
      "Multi-parameter flow cytometric analysis and cell sorting",
      "High-resolution fluorescence and confocal microscopy",
      "Real-time quantitative PCR and digital PCR",
      "Automated nucleic acid extraction and library preparation",
      "Bioinformatics support for sequencing data analysis",
    ],
    equipmentGroups: [
      {
        name: "Sequencing & Genomics",
        image: "/equipment/sequencer.jpg",
        items: [
          {
            name: "Illumina NextSeq 2000",
            description:
              "High-throughput sequencer for whole-genome, exome, and targeted sequencing applications.",
            icon: "🧬",
            image: "/equipment/nextseq-sequencer.jpg",
          },
          {
            name: "Oxford Nanopore MinION",
            description:
              "Long-read sequencing platform for structural variant detection and full-length transcript analysis.",
            icon: "🧬",
            image: "/equipment/nanopore-sequencer.jpg",
          },
          {
            name: "Applied Biosystems QuantStudio 5",
            description:
              "Real-time PCR system for gene expression profiling, genotyping, and pathogen detection.",
            icon: "🧬",
            image: "/equipment/pcr-machine.jpg",
          },
        ],
      },
      {
        name: "Flow Cytometry",
        image: "/equipment/flow-cytometry.jpg",
        items: [
          {
            name: "BD FACSAria III Cell Sorter",
            description:
              "High-speed cell sorter enabling isolation of rare cell populations for downstream functional studies.",
            icon: "🔵",
            image: "/equipment/cell-sorter.jpg",
          },
          {
            name: "BD LSRFortessa Analyzer",
            description:
              "Multi-laser flow cytometer for immunophenotyping and intracellular signaling analysis.",
            icon: "🔵",
            image: "/equipment/flow-analyzer.jpg",
          },
        ],
      },
      {
        name: "Microscopy & Imaging",
        image: "/equipment/microscopy.jpg",
        items: [
          {
            name: "Zeiss LSM 880 Confocal Microscope",
            description:
              "Laser scanning confocal system for high-resolution imaging of fixed and live specimens.",
            icon: "🔍",
            image: "/equipment/confocal-microscope.jpg",
          },
          {
            name: "EVOS M7000 Imaging System",
            description:
              "Automated fluorescence imaging platform for multi-well plate screening and time-lapse experiments.",
            icon: "🔍",
            image: "/equipment/fluorescence-imager.jpg",
          },
        ],
      },
      {
        name: "Molecular Biology",
        image: "/equipment/molecular-biology.jpg",
        items: [
          {
            name: "QIAcube Connect Automated Extraction",
            description:
              "Automated nucleic acid extraction system for consistent, high-quality DNA and RNA isolation.",
            icon: "🧪",
            image: "/equipment/dna-extraction.jpg",
          },
          {
            name: "Bio-Rad ChemiDoc MP Imaging System",
            description:
              "Gel and western blot documentation system with quantitative fluorescence and chemiluminescence detection.",
            icon: "🧪",
            image: "/equipment/gel-imaging.jpg",
          },
        ],
      },
    ],
    contactInfo: "facilities@cancerinstitutewia.org",
  },
  {
    slug: "gmp-facility",
    name: "GMP Manufacturing Facility",
    category: "gmp",
    description:
      "Good Manufacturing Practice facility dedicated to producing cell-based therapies and immunotherapeutics under regulatory-compliant conditions.",
    overview:
      "The GMP Manufacturing Facility enables Cancer Institute (WIA) to translate laboratory discoveries into clinical-grade cellular therapies. Designed to meet national and international regulatory standards, the facility supports the production of CAR-T cells, dendritic cell vaccines, and other advanced therapy medicinal products. Rigorous quality control and environmental monitoring ensure product safety and consistency throughout the manufacturing process.",
    icon: "🏭",
    image: "/facilities/gmp-facility.jpeg",
    capabilities: [
      "Cleanroom suites classified to ISO 7 and ISO 5 standards for aseptic processing",
      "Closed-system cell expansion and activation using automated bioreactors",
      "Lentiviral and retroviral vector production for gene-modified cell therapies",
      "In-process and release testing including sterility, endotoxin, and potency assays",
      "Cryopreservation and controlled-rate freezing of cellular products",
      "Quality management system aligned with CDSCO and WHO GMP guidelines",
    ],
    contactInfo: "facilities@cancerinstitutewia.org",
  },
  {
    slug: "clinical-trials-unit",
    name: "Clinical Trials Unit",
    category: "clinical-trials",
    description:
      "Dedicated infrastructure for conducting Phase I through Phase III clinical trials with GCP-compliant protocols and integrated research pharmacy services.",
    overview:
      "The Clinical Trials Unit at Cancer Institute (WIA) provides end-to-end support for interventional and observational clinical studies. With an 8-bed dedicated trial ward, on-site research pharmacy, and experienced clinical research coordinators, the unit manages all aspects of trial conduct from regulatory submissions to data management. The unit has a strong track record in oncology trials spanning chemotherapy, targeted therapy, and immunotherapy protocols.",
    icon: "🏥",
    image: "/facilities/clinical-trials-1.jpeg",
    capabilities: [
      "8-bed clinical trial ward with continuous monitoring capabilities",
      "On-site research pharmacy for investigational drug storage and dispensing",
      "Dedicated clinical research coordinators and data management team",
      "Electronic data capture systems and regulatory document management",
      "Independent ethics committee and institutional review board support",
      "Pharmacovigilance and adverse event reporting infrastructure",
    ],
    contactInfo: "facilities@cancerinstitutewia.org",
  },
  {
    slug: "biorepository",
    name: "Biorepository & Tissue Bank",
    category: "biorepository",
    description:
      "Centralized repository of annotated tumor tissues, blood samples, and biofluids supporting translational research across multiple cancer types.",
    overview:
      "The Biorepository at Cancer Institute (WIA) maintains a curated collection of human biospecimens linked to detailed clinical and pathological annotations. Specimens are collected under IRB-approved protocols with informed consent and processed according to standardized operating procedures to ensure specimen integrity. The repository serves as a critical resource for biomarker discovery, validation studies, and collaborative research projects nationally and internationally.",
    icon: "🧊",
    image: "/facilities/biorepository.jpeg",
    capabilities: [
      "Formalin-fixed paraffin-embedded (FFPE) and fresh-frozen tissue collections across major cancer types",
      "Matched blood, serum, plasma, and buffy coat specimen banking",
      "Standardized specimen collection, processing, and quality control workflows",
      "Barcode-tracked inventory with temperature-monitored ultra-low and liquid nitrogen storage",
      "Clinical annotation database linking specimens to treatment outcomes and follow-up data",
      "Material transfer agreements and specimen sharing for collaborative research",
    ],
    contactInfo: "facilities@cancerinstitutewia.org",
  },
  {
    slug: "disease-models",
    name: "Preclinical Disease Models",
    category: "disease-models",
    description:
      "Preclinical modeling platform supporting in vitro and in vivo studies for drug efficacy testing and mechanistic cancer research.",
    overview:
      "The Preclinical Disease Models facility provides researchers with validated model systems to study cancer biology and evaluate therapeutic candidates before clinical translation. The platform encompasses both cell-based and organism-based approaches, enabling investigators to assess drug responses, resistance mechanisms, and combination strategies in controlled experimental settings. All work is conducted under institutional ethical oversight with emphasis on the 3Rs principles.",
    icon: "🧫",
    image: "/facilities/disease-models-1.jpeg",
    capabilities: [
      "Patient-derived organoid and spheroid culture systems for personalized drug sensitivity testing",
      "Established cancer cell line panels representing major tumor types treated at the institute",
      "In vivo efficacy and pharmacokinetic studies conducted under institutional ethical approval",
      "3D co-culture and tumor microenvironment modeling platforms",
      "High-content screening for compound library evaluation",
    ],
    contactInfo: "facilities@cancerinstitutewia.org",
  },
];
