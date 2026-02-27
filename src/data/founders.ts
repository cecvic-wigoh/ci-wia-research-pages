export interface Founder {
  name: string;
  title: string;
  years: string;
  quote: string;
  contribution: string;
  initials: string;
}

export const founders: Founder[] = [
  {
    name: "Dr. Muthulakshmi Reddy",
    title: "Founder & Visionary",
    years: "1886–1968",
    quote:
      "Every woman in India should have access to cancer care, regardless of her ability to pay.",
    contribution:
      "India's first woman legislator and medical graduate from a co-educational institution. Founded Cancer Institute (WIA) in 1954 through the Women's India Association, making it the first comprehensive cancer center in South India.",
    initials: "MR",
  },
  {
    name: "Dr. S. Krishnamurthi",
    title: "Pioneer of Multimodality Therapy",
    years: "1927–2005",
    quote:
      "Early detection is the key to conquering cancer. Start where I ended and progress to reach greater heights.",
    contribution:
      "Son of Dr. Muthulakshmi Reddy, he transformed Cancer Institute into a world-class research center. Introduced India's first DM (Medical Oncology) and MCh (Surgical Oncology) degrees in 1984, and established the Madras Metropolitan Tumour Registry.",
    initials: "SK",
  },
  {
    name: "Dr. V. Shanta",
    title: "Padma Vibhushan Awardee",
    years: "1927–2021",
    quote:
      "We treat the patient, not the disease. Every human being who walks through our doors deserves the best care we can give.",
    contribution:
      "Served Cancer Institute for over 60 years. Under her stewardship, 60% of patients received free or subsidized care. Recipient of the Ramon Magsaysay Award and Padma Vibhushan, India's second-highest civilian honor.",
    initials: "VS",
  },
];
