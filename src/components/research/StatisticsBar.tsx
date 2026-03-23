"use client";

import { useEffect, useRef, useState } from "react";
import { institutionStats } from "@/data/statistics";

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
      className="bg-white border-y border-gray-200 py-16 px-6"
      aria-label="Institutional statistics"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-around items-center flex-wrap gap-8">
          {institutionStats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <span className="text-[var(--ci-blue)] text-4xl font-bold">
                {stat.value}
              </span>
              <span className="text-[var(--ci-gray-600)] text-sm mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
