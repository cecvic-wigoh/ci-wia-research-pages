export interface Statistic {
  value: string;
  label: string;
  icon: string;
}

export const institutionStats: Statistic[] = [
  {
    value: "70+",
    label: "Years of Discovery",
    icon: "calendar",
  },
  {
    value: "15,000+",
    label: "New Patients Annually",
    icon: "users",
  },
  {
    value: "80+",
    label: "PhDs Awarded",
    icon: "graduation-cap",
  },
  {
    value: "250+",
    label: "Specialists Trained",
    icon: "award",
  },
];
