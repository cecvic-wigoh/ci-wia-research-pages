import type { NewsItem } from "./types";

export const newsItems: NewsItem[] = [
  {
    slug: "how-t-cells-transform-to-defend-organs-against-cancer",
    headline: "How T Cells Transform to Defend Our Organs Against Cancer",
    teaser:
      "New single-cell sequencing study reveals how tissue-resident T cells acquire unique anti-tumour capabilities in different organ environments.",
    date: "2026-03-15",
    heroImage: "",
    body: `<p>A collaborative study led by researchers at the Cancer Institute has mapped the transcriptomic landscape of tissue-resident memory T cells across multiple organ sites, revealing how these immune sentinels adapt their anti-tumour programs to the unique microenvironments of the lung, liver, and gastrointestinal tract.</p>
<p>Using single-cell RNA sequencing on samples from over 200 patients, the team identified distinct gene expression signatures that predict which T cell populations are most effective at controlling local tumour growth. Notably, lung-resident T cells showed elevated expression of interferon-stimulated genes, while gut-resident populations relied more heavily on cytotoxic granule pathways.</p>
<p>These findings open the door to organ-specific immunotherapy strategies that could dramatically improve response rates by leveraging the natural specialisation of tissue-resident immunity.</p>`,
    whyItMatters:
      "Understanding how T cells specialise in different organs could enable immunotherapies tailored to the specific tissue where a tumour arises, potentially improving response rates for cancers that currently resist checkpoint inhibitors.",
    taggedPeople: ["dr-t-rajkumar", "dr-arvind-krishnamurthy"],
    taggedCancerTypes: ["lung-cancer", "colon-cancer"],
    taggedFacilities: ["research-equipment", "biorepository"],
  },
  {
    slug: "indigenous-car-t-therapy-achieves-high-remission-rates",
    headline: "Indigenous CAR-T Therapy Achieves 90% Remission in Relapsed Leukaemia Trial",
    teaser:
      "Locally manufactured CAR-T cells show remarkable efficacy at a fraction of international costs, bringing hope to patients with relapsed blood cancers.",
    date: "2026-03-08",
    heroImage: "",
    body: `<p>Interim results from the institute's Phase I/II trial of an indigenously manufactured anti-CD19 CAR-T cell therapy have demonstrated a 90% complete remission rate among 40 patients with relapsed or refractory acute lymphoblastic leukaemia. The treatment, produced entirely within the institute's GMP facility, costs approximately 25,000 USD per patient — less than one-tenth of comparable international therapies.</p>
<p>The CAR-T cells were manufactured using a semi-automated closed-system process developed in-house, with a median vein-to-vein time of just 14 days. Grade 3 or higher cytokine release syndrome occurred in only 12% of patients, comparing favourably with global benchmarks.</p>
<p>These results position the institute as a leader in making cell-based immunotherapies accessible to patients across South Asia and the developing world.</p>`,
    whyItMatters:
      "Affordable, locally produced CAR-T therapy could transform blood cancer treatment in low- and middle-income countries where the vast majority of patients currently cannot access this life-saving technology.",
    taggedPeople: ["dr-t-rajkumar", "dr-shirley-sunder-singh"],
    taggedCancerTypes: ["blood-cancers"],
    taggedFacilities: ["gmp-facility", "clinical-trials-unit"],
  },
  {
    slug: "liquid-biopsy-detects-lung-cancer-recurrence-months-earlier",
    headline: "Liquid Biopsy Detects Lung Cancer Recurrence Months Before Imaging",
    teaser:
      "A circulating tumour DNA assay developed at the institute can identify lung cancer relapse a median of 4.2 months before CT scans show evidence of disease.",
    date: "2026-02-22",
    heroImage: "",
    body: `<p>Researchers at the Cancer Institute have validated a highly sensitive circulating tumour DNA (ctDNA) assay that detects molecular recurrence of non-small cell lung cancer a median of 4.2 months before conventional CT imaging reveals radiological progression. The study followed 180 patients who had undergone curative-intent surgery for stage I–III NSCLC.</p>
<p>The assay, which tracks a personalised panel of up to 50 tumour-specific mutations per patient, achieved a sensitivity of 94% and specificity of 98% for recurrence detection. Patients whose ctDNA became positive were offered early intervention with targeted therapy or immunotherapy based on molecular profiling.</p>
<p>An ongoing randomised trial is now evaluating whether this ctDNA-guided early intervention approach improves overall survival compared to standard radiological surveillance.</p>`,
    whyItMatters:
      "Detecting cancer recurrence months before it becomes visible on scans creates a window for early intervention that could meaningfully improve survival for lung cancer patients after surgery.",
    taggedPeople: ["dr-jegan-thomas", "dr-arvind-krishnamurthy"],
    taggedCancerTypes: ["lung-cancer"],
    taggedFacilities: ["research-equipment", "biorepository"],
  },
  {
    slug: "3d-printed-prostheses-transform-limb-salvage-surgery",
    headline: "3D-Printed Prostheses Transform Limb-Salvage Surgery for Bone Cancer Patients",
    teaser:
      "Custom titanium implants designed using AI and manufactured via 3D printing are improving functional outcomes and reducing complications in bone tumour surgery.",
    date: "2026-02-10",
    heroImage: "",
    body: `<p>The institute's orthopaedic oncology team has published outcomes from its pioneering programme using patient-specific 3D-printed titanium prostheses for limb-salvage surgery in bone cancer patients. Among 65 patients treated over three years, the custom implants demonstrated a 94% limb-salvage success rate with significantly improved functional scores compared to conventional off-the-shelf endoprostheses.</p>
<p>Each prosthesis is designed using AI-assisted segmentation of CT and MRI data, allowing precise matching to the patient's anatomy. The porous titanium lattice structure promotes biological fixation through bone ingrowth, reducing the risk of long-term loosening — a common complication with conventional implants.</p>
<p>The programme has been particularly impactful for paediatric patients, where growing endoprostheses can be designed to accommodate skeletal growth, reducing the need for revision surgeries.</p>`,
    whyItMatters:
      "3D-printed prostheses tailored to each patient's anatomy represent a paradigm shift in bone cancer surgery, offering better function, fewer complications, and — for children — the ability to grow with the patient.",
    taggedPeople: ["dr-mayilvahanan-bose"],
    taggedCancerTypes: ["bone-cancers", "childrens-cancers"],
    taggedFacilities: ["research-equipment"],
  },
  {
    slug: "epigenomic-atlas-of-head-neck-cancers-in-indian-patients",
    headline: "Researchers Map the Epigenomic Atlas of Head & Neck Cancers in Indian Patients",
    teaser:
      "The largest epigenomic study of tobacco-driven head and neck cancers reveals novel methylation signatures with prognostic and therapeutic implications.",
    date: "2026-01-28",
    heroImage: "",
    body: `<p>A multi-year effort at the Cancer Institute has produced the most comprehensive epigenomic atlas of head and neck squamous cell carcinoma in an Indian population to date. The study profiled DNA methylation, histone modifications, and chromatin accessibility across 320 tumour samples, predominantly from patients with tobacco-related, HPV-negative disease.</p>
<p>The analysis identified four distinct epigenomic subtypes that predict treatment response and patient outcomes independently of traditional staging. One subtype, characterised by widespread promoter hypermethylation, showed unexpected sensitivity to demethylating agents in patient-derived organoid models, suggesting a potential new therapeutic approach.</p>
<p>The complete dataset and analysis tools have been made publicly available, establishing a resource that will support head and neck cancer research globally, particularly in populations where tobacco-driven disease predominates.</p>`,
    whyItMatters:
      "This atlas fills a critical gap in our understanding of tobacco-driven head and neck cancers, which have a different molecular profile from HPV-positive tumours studied predominantly in Western populations.",
    taggedPeople: ["dr-arvind-krishnamurthy", "dr-selvaluxmy-ganapathy"],
    taggedCancerTypes: ["head-and-neck-cancer"],
    taggedFacilities: ["research-equipment", "biorepository", "disease-models"],
  },
  {
    slug: "ai-mammography-screening-doubles-early-detection-in-rural-clinics",
    headline: "AI-Powered Mammography Screening Doubles Early Detection in Rural Clinics",
    teaser:
      "An AI system trained on Indian mammographic data is helping radiologists in rural Tamil Nadu detect breast cancer at earlier, more treatable stages.",
    date: "2026-01-15",
    heroImage: "",
    body: `<p>A large-scale implementation study has demonstrated that an AI-assisted mammography interpretation system, developed and validated at the Cancer Institute, doubled the rate of early-stage breast cancer detection when deployed in rural screening clinics across Tamil Nadu. The system was evaluated in 12 primary health centres over 18 months, analysing over 15,000 screening mammograms.</p>
<p>The AI model, trained on a diverse dataset of 120,000 mammograms from Indian women — whose breast density patterns differ significantly from Western populations — achieved a sensitivity of 92% for invasive cancers, outperforming standalone radiologist interpretation in the community setting. Crucially, it reduced false-positive rates by 30%, decreasing unnecessary biopsies and patient anxiety.</p>
<p>The programme is now being expanded to 50 additional rural centres, with plans to integrate the AI system into India's national breast cancer screening guidelines.</p>`,
    whyItMatters:
      "Early detection is the single most important factor in breast cancer survival. This AI tool, trained specifically on Indian mammographic patterns, can extend expert-level screening to underserved rural populations.",
    taggedPeople: ["dr-rama-jayaraj", "dr-r-swaminathan"],
    taggedCancerTypes: ["breast-cancer"],
    taggedFacilities: ["research-equipment"],
  },
  {
    slug: "novel-parp-inhibitor-combination-shows-promise-in-ovarian-cancer",
    headline: "Novel PARP Inhibitor Combination Shows Promise in Platinum-Resistant Ovarian Cancer",
    teaser:
      "A first-in-India trial combining a PARP inhibitor with an ATR inhibitor demonstrates activity in heavily pre-treated ovarian cancer patients.",
    date: "2025-12-20",
    heroImage: "",
    body: `<p>Results from a Phase Ib dose-escalation trial conducted at the Cancer Institute show that combining niraparib with the ATR inhibitor ceralasertib produces meaningful tumour responses in patients with platinum-resistant ovarian cancer who have exhausted standard treatment options. Among 28 evaluable patients, the objective response rate was 36%, with an additional 29% achieving stable disease.</p>
<p>The combination was particularly effective in patients with BRCA-wild-type tumours that had acquired resistance to prior PARP inhibitor monotherapy — a growing clinical challenge as these agents become standard first-line maintenance therapy. Biomarker analysis revealed that tumours with high replication stress signatures were most likely to respond.</p>
<p>Based on these results, a randomised Phase II trial comparing the combination to physician's choice chemotherapy is now being planned, with the institute serving as the lead coordinating centre.</p>`,
    whyItMatters:
      "Platinum-resistant ovarian cancer has very limited treatment options. This combination approach offers a potential new strategy for patients whose tumours have become resistant to existing PARP inhibitors.",
    taggedPeople: ["dr-rama-jayaraj", "dr-shirley-sunder-singh"],
    taggedCancerTypes: ["ovarian-womens-cancers"],
    taggedFacilities: ["clinical-trials-unit", "biorepository"],
  },
  {
    slug: "molecular-profiling-reveals-why-young-indians-develop-colon-cancer",
    headline: "Molecular Profiling Reveals Why Young Indians Are Developing Colon Cancer",
    teaser:
      "Genomic analysis of 400 young-onset colorectal cancer cases identifies distinct mutational signatures linked to dietary and environmental factors.",
    date: "2025-12-05",
    heroImage: "",
    body: `<p>A landmark study from the Cancer Institute has identified distinct molecular features in colorectal cancers arising in Indian patients under 50, offering potential explanations for the dramatic rise in young-onset disease across the subcontinent. The study performed comprehensive genomic profiling — including whole-exome sequencing, RNA sequencing, and methylation analysis — on tumours from 400 young-onset cases and 200 age-matched controls with late-onset disease.</p>
<p>Young-onset tumours exhibited a unique mutational signature not previously described, characterised by specific base-substitution patterns that the researchers hypothesize may be linked to dietary carcinogen exposure. These tumours also showed higher rates of chromosomal instability and lower rates of microsatellite instability compared to their late-onset counterparts.</p>
<p>The findings have immediate clinical implications: the lower MSI rate in young patients means fewer may benefit from immunotherapy, underscoring the need for alternative treatment strategies specifically designed for this growing patient population.</p>`,
    whyItMatters:
      "Colorectal cancer in young adults is rising globally, but particularly in India. Understanding the unique biology of these tumours is essential for developing effective prevention strategies and targeted treatments.",
    taggedPeople: ["dr-t-rajkumar", "dr-r-swaminathan"],
    taggedCancerTypes: ["colon-cancer"],
    taggedFacilities: ["research-equipment", "biorepository"],
  },
  {
    slug: "institute-launches-comprehensive-childhood-cancer-survivorship-program",
    headline: "Institute Launches Comprehensive Childhood Cancer Survivorship Program",
    teaser:
      "A new multidisciplinary program will track long-term health outcomes in childhood cancer survivors and develop interventions to reduce late treatment effects.",
    date: "2025-11-18",
    heroImage: "",
    body: `<p>The Cancer Institute has established India's first comprehensive childhood cancer survivorship program, designed to systematically monitor and manage the long-term health consequences of cancer treatment in paediatric patients. The program will enrol all childhood cancer survivors who are at least two years beyond completion of therapy, with an initial cohort of over 1,200 patients.</p>
<p>Participants will undergo annual risk-stratified screening for common late effects including cardiomyopathy, endocrine dysfunction, secondary malignancies, and neurocognitive impairment. The program also includes mental health support services and vocational rehabilitation for young adult survivors transitioning to independent life.</p>
<p>A research component will use prospective data collection and biobanking to identify genetic and treatment-related predictors of late effects, with the goal of informing future treatment protocols that maximise cure while minimising long-term harm.</p>`,
    whyItMatters:
      "As childhood cancer cure rates improve, the population of survivors grows — and so does the need to address the lifelong health consequences of treatment received during critical developmental years.",
    taggedPeople: ["dr-selvaluxmy-ganapathy", "dr-shirley-sunder-singh"],
    taggedCancerTypes: ["childrens-cancers"],
    taggedFacilities: ["clinical-trials-unit"],
  },
  {
    slug: "helicobacter-pylori-eradication-reduces-gastric-cancer-risk",
    headline: "Large-Scale H. pylori Eradication Study Shows 40% Reduction in Gastric Cancer Risk",
    teaser:
      "A population-based intervention in high-incidence districts of Tamil Nadu demonstrates that mass H. pylori screening and treatment dramatically lowers gastric cancer incidence.",
    date: "2025-11-02",
    heroImage: "",
    body: `<p>A community-based randomised trial led by the Cancer Institute has demonstrated that population-level Helicobacter pylori screening and eradication reduces gastric cancer incidence by 40% over a five-year follow-up period. The study, conducted across six high-incidence districts in Tamil Nadu, screened over 28,000 adults aged 40–65 using a non-invasive urea breath test.</p>
<p>Participants who tested positive for H. pylori were randomised to receive either immediate eradication therapy or standard-of-care observation. Among those who received eradication treatment and achieved confirmed clearance, gastric cancer incidence fell by 52% compared to the observation group. Even in the intention-to-treat analysis, accounting for non-compliance and treatment failures, the risk reduction was 40%.</p>
<p>The results provide strong evidence to support incorporating H. pylori screening into India's national cancer prevention strategy, particularly in southern states where gastric cancer rates are highest.</p>`,
    whyItMatters:
      "Gastric cancer is often diagnosed too late for curative treatment. This study proves that a simple, inexpensive intervention — treating a common bacterial infection — can prevent nearly half of gastric cancers in high-risk populations.",
    taggedPeople: ["dr-jegan-thomas", "dr-r-swaminathan"],
    taggedCancerTypes: ["gastric-cancer"],
    taggedFacilities: ["clinical-trials-unit"],
  },
];
