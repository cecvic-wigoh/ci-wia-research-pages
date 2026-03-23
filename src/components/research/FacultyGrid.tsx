"use client";

import { useState } from "react";
import Link from "next/link";
import { people } from "@/data/people";

const gradients = [
  "linear-gradient(135deg, #c4d3e0 0%, #a8bdd0 100%)",
  "linear-gradient(135deg, #b8cce0 0%, #d0dce8 100%)",
  "linear-gradient(135deg, #d0e0e8 0%, #b0c8d8 100%)",
  "linear-gradient(135deg, #c0d8e0 0%, #a8c8d0 100%)",
  "linear-gradient(135deg, #bcd0e0 0%, #c8dce8 100%)",
  "linear-gradient(135deg, #d0dce0 0%, #b8d0d8 100%)",
  "linear-gradient(135deg, #c8d8e8 0%, #b0c0d0 100%)",
  "linear-gradient(135deg, #b0d0d8 0%, #c0dce0 100%)",
];

const TOTAL_SLOTS = 14;

const placeholderPhotos = [
  "/faculty/placeholder-1.jpg",
  "/faculty/placeholder-2.jpg",
  "/faculty/placeholder-3.jpg",
  "/faculty/placeholder-4.jpg",
  "/faculty/placeholder-5.jpg",
  "/faculty/placeholder-6.jpg",
];

const tabs = [
  { key: "internal", label: "Adyar Cancer Institute Faculty" },
  { key: "adjunct", label: "International Adjunct Faculty" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

export default function FacultyGrid() {
  const [activeTab, setActiveTab] = useState<TabKey>("internal");

  const internalPeople = people.filter((p) => p.category === "internal");
  const adjunctPeople = people.filter((p) => p.category === "adjunct");
  const activePeople = activeTab === "internal" ? internalPeople : adjunctPeople;
  const totalSlots = activeTab === "internal" ? TOTAL_SLOTS : Math.max(adjunctPeople.length, 7);

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-ci-blue font-[family-name:var(--font-heading)] text-center mb-8">
          Meet Our Faculty and Scientists
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-colors ${
                activeTab === tab.key
                  ? "bg-ci-blue text-white"
                  : "bg-ci-gray-100 text-ci-gray-600 hover:bg-ci-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4 justify-items-center">
          {activePeople.map((person, i) => (
            <Link
              key={person.slug}
              href={`/research/people/${person.slug}`}
              aria-label={person.name}
              className="relative w-[120px] h-[120px] lg:w-[130px] lg:h-[130px] rounded-full overflow-hidden group"
            >
              {person.photo ? (
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center text-white font-bold text-xl"
                  style={{ background: gradients[i % gradients.length] }}
                >
                  {person.initials}
                </div>
              )}
              <div className="absolute inset-0 bg-ci-blue/0 group-hover:bg-ci-blue/70 transition-colors duration-200 flex items-center justify-center rounded-full">
                <p className="text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 leading-tight text-center px-2">
                  {person.name}
                </p>
              </div>
            </Link>
          ))}

          {/* Placeholder slots with stock photos */}
          {Array.from({ length: Math.max(0, totalSlots - activePeople.length) }).map((_, i) => (
            <div
              key={`placeholder-${i}`}
              aria-hidden="true"
              className="w-[120px] h-[120px] lg:w-[130px] lg:h-[130px] rounded-full overflow-hidden opacity-70"
            >
              <img
                src={placeholderPhotos[i % placeholderPhotos.length]}
                alt=""
                className="w-full h-full object-cover object-top"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
