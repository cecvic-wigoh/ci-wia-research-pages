"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, Users, GraduationCap, Award } from "lucide-react";
import { institutionStats } from "@/data/statistics";

const iconMap: Record<string, React.ElementType> = {
  calendar: Calendar,
  users: Users,
  "graduation-cap": GraduationCap,
  award: Award,
};

export default function StatisticsBar() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[var(--ci-blue)] py-16 md:py-20"
      aria-label="Institutional statistics"
    >
      <div className="section-inner">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {institutionStats.map((stat, index) => {
            const Icon = iconMap[stat.icon] || Calendar;
            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Icon className="h-8 w-8 text-[var(--ci-teal)] mb-3" />
                <span className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </span>
                <span className="text-white/80 text-base tracking-wide uppercase">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
