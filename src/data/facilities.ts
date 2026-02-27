export interface Facility {
  name: string;
  description: string;
  capability: string;
  icon: string;
}

export const facilities: Facility[] = [
  {
    name: "Molecular Oncology Laboratory",
    description:
      "State-of-the-art genomic sequencing and biomarker identification facility supporting translational research in cervical, colorectal, and ovarian cancers.",
    capability: "Next-generation sequencing, 16S rRNA gene analysis, DAS-ELISA development",
    icon: "microscope",
  },
  {
    name: "Madras Metropolitan Tumour Registry",
    description:
      "One of India's oldest population-based cancer registries, documenting cancer incidence and mortality patterns in Chennai since 1981.",
    capability: "200,000+ cases documented, longitudinal survival data",
    icon: "database",
  },
  {
    name: "Clinical Trials Unit",
    description:
      "Dedicated facility for conducting Phase II and III clinical trials, with an 8-bed clinical trial ward and research pharmacy for investigational drugs.",
    capability: "8-bed ward, research pharmacy, GCP-compliant protocols",
    icon: "flask-conical",
  },
  {
    name: "Preventive Oncology Screening Center",
    description:
      "Community-based cancer screening facility serving urban and rural populations with early detection programs for cervical, breast, and oral cancers.",
    capability: "7,000–8,000 women screened annually",
    icon: "heart-pulse",
  },
  {
    name: "Diagnostic Imaging Center",
    description:
      "Comprehensive imaging services supporting both clinical care and research, including advanced imaging for treatment planning and response assessment.",
    capability: "MRI, PET-CT, CT, digital mammography",
    icon: "scan",
  },
  {
    name: "Radiation Therapy Center",
    description:
      "Advanced radiation therapy facility offering precision treatments. Cancer Institute (WIA) was the first to operate a cobalt-60 unit in Southeast Asia and a linear accelerator in India.",
    capability: "Linear accelerators, TrueBeam, CyberKnife",
    icon: "zap",
  },
];
