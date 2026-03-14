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

export const founders: Founder[] = [
  {
    name: "Dr. Muthulakshmi Reddy",
    slug: "muthulakshmi-reddy",
    title: "Founder & Visionary",
    years: "1886–1968",
    quote:
      "Every woman in India should have access to cancer care, regardless of her ability to pay.",
    contribution:
      "India's first woman legislator and medical graduate from a co-educational institution. Founded Cancer Institute (WIA) in 1954 through the Women's India Association, making it the first comprehensive cancer center in South India.",
    initials: "MR",
    image: "/research-images/founders/muthulakshmi-reddy.jpg",
    heroSubtitle: "A Legacy That Never Dies",
    bio: [
      "On July 30, 1886, in the small princely state of Pudukkottai in Tamil Nadu, a girl was born who would one day change the fate of thousands. Her father, Narayanaswami Iyer, was principal of the Maharaja's College. Her mother, Chandrammal, was a former devadasi. In that conservative, rigid society, this union was itself an act of defiance — and Muthulakshmi inherited every ounce of it.",
      "She was the first woman admitted to Maharaja's College, the first female student in Surgery at Madras Medical College in 1907, and the first woman House Surgeon at the Government Maternity and Ophthalmic Hospital. She graduated in 1912 and went on to become India's first woman legislator, nominated to the Madras Legislative Council in 1927.",
      "Alongside Annie Besant, she co-founded the Women's Indian Association in 1917, giving Indian women their first organised political voice. She used her legislative position to raise the age of marriage, protect women's property rights, and propose the historic Devadasi Abolition Bill.",
      "As a young doctor, she watched helplessly as her own sister died from a misdiagnosed case of rectal cancer. The grief never left her. Neither did the resolve. In 1954, in a small hut in Adyar, Chennai, the Cancer Institute (WIA) opened its doors — no fanfare, no government subsidy, just twelve beds, a handful of nurses, and the conviction that cancer patients deserved to be seen and treated as human beings.",
      "She was awarded the Padma Bhushan in 1956, India's third-highest civilian honour. Her name was inscribed on the flag raised at the Red Fort on India's Independence Day, 1947. The Government of Tamil Nadu named its landmark maternal nutrition programme after her. She died on July 22, 1968 — eight days before her 82nd birthday. The institutions she left behind kept standing.",
    ],
  },
  {
    name: "Dr. S. Krishnamurthi",
    slug: "krishnamurthi",
    title: "Pioneer of Multimodality Therapy",
    years: "1919–2010",
    quote:
      "Early detection is the key to conquering cancer. Start where I ended and progress to reach greater heights.",
    contribution:
      "Son of Dr. Muthulakshmi Reddy, he transformed Cancer Institute into a world-class research center. Introduced India's first DM (Medical Oncology) and MCh (Surgical Oncology) degrees in 1984, and established the Madras Metropolitan Tumour Registry.",
    initials: "SK",
    image: "/research-images/founders/krishnamurthi.jpg",
    heroSubtitle: "The Architect of Indian Oncology",
    bio: [
      "On September 12, 1919, Sundara Krishnamurthi was born to Dr. Sundara Reddy and Dr. Muthulakshmi Reddy, India's first woman medical graduate. Growing up in that household was not merely an education in medicine — it was an education in what medicine was for.",
      "He completed his MBBS in 1942 and his MS in 1946. He trained as a Fellow at the Ellis Fischel State Cancer Hospital in Missouri, USA, and later at the Royal Cancer Hospital in London. He returned to India in 1949 to fight cancer — and found a system riddled with corruption that he refused to accept.",
      "He became the first Resident Medical Officer of Cancer Institute (WIA) in 1954 and its Scientific Director from the very beginning. Within three years, the institute had Asia's first cobalt-60 teletherapy unit and India's first nuclear medicine department. He introduced combined modality treatment for oral cancer — integrating surgery, radiation, and chemotherapy — declared an 'innovative advance' in the International Year Book of Cancer, 1964.",
      "He founded India's first paediatric oncology unit in 1960, conducted the country's first rural cancer screening survey in 1961, and after a decade of persistent effort, introduced the MCh in Surgical Oncology and DM in Medical Oncology — the first super-specialty oncology qualifications in India. He was awarded the Padma Shri in 1970 and served as Honorary Surgeon to the President of India from 1987 to 1992.",
      "He passed away on July 3, 2010. The Dr. S. Krishnamurthi Campus of Cancer Institute (WIA) stands as a permanent testament to a partnership with Dr. V. Shanta that lasted half a century and changed the face of cancer care in India.",
    ],
  },
  {
    name: "Dr. V. Shanta",
    slug: "v-shanta",
    title: "Padma Vibhushan Awardee",
    years: "1927–2021",
    quote:
      "We treat the patient, not the disease. Every human being who walks through our doors deserves the best care we can give.",
    contribution:
      "Served Cancer Institute for over 60 years. Under her stewardship, 60% of patients received free or subsidized care. Recipient of the Ramon Magsaysay Award and Padma Vibhushan, India's second-highest civilian honor.",
    initials: "VS",
    image: "/research-images/founders/v-shanta.jpg",
    heroSubtitle: "The Mother of Oncology in India",
    bio: [
      "On March 11, 1927, in Mylapore, Chennai, Viswanathan Shanta was born into a family of extraordinary minds. Her grand uncle was Sir C. V. Raman, the Nobel Prize-winning physicist. Her maternal uncle was Subrahmanyan Chandrasekhar, who would win the Nobel Prize in Physics in 1983. Science ran through her blood, but the path she chose was her own.",
      "In April 1955, she declined a prestigious government post as Assistant Surgeon at the Women and Children's Hospital and instead walked into the Cancer Institute (WIA) — a year-old institution occupying a small hut in Adyar with twelve beds and exactly two doctors. She worked without pay for the first year. She would not leave for sixty-six years.",
      "She led India's first successful trials of combination cancer therapy in the 1960s. Under her leadership, the institute became the first in South India recognised as a Regional Cancer Centre by the Government of India in 1974. She founded the Madras Metropolitan Tumour Registry in 1981 and opened India's first hereditary cancer clinic in 2000.",
      "She introduced chemotherapy and radiation therapy protocols tailored for Indian patients, pioneered cervical cancer screening in rural districts, and kept treatment free or subsidised for over 60% of patients throughout her tenure. Not a single case file has been lost since 1955, and patient follow-up exceeds ninety percent.",
      "She received the Padma Shri (1986), Ramon Magsaysay Award (2005), Padma Bhushan (2006), and Padma Vibhushan (2016) — India's second-highest civilian honour. She died on January 19, 2021, at the age of ninety-three, having spent her last days dictating letters seeking donations for the institute she loved.",
    ],
  },
];
