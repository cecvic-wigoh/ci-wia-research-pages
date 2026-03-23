# Homepage Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure the research homepage to match the reference screenshot by extracting each section into its own component and restyling the layout.

**Architecture:** Extract 5 new section components from the monolithic `page.tsx`, restyle them per the spec (dark backgrounds, circular photos, bento grid), and recompose the page. Existing `StatisticsBar` and `WorldMap` components are reused as-is.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4 (theme tokens), TypeScript, Lucide React icons

**Spec:** `docs/superpowers/specs/2026-03-23-homepage-redesign-design.md`

---

## File Structure

| Action | File | Responsibility |
|--------|------|---------------|
| Create | `src/components/research/HeroSection.tsx` | Hero with gradient bg, heading, CTAs |
| Create | `src/components/research/FoundersLegacy.tsx` | Dark bg, 3 circular founder photos with descriptions |
| Create | `src/components/research/FacultyGrid.tsx` | 2x7 circular photo grid of internal people |
| Create | `src/components/research/CancersBento.tsx` | Bento grid layout for 10 cancer types |
| Create | `src/components/research/GlobalCollaborations.tsx` | Dark bg, world map, centered CTA |
| Modify | `src/app/research/page.tsx` | Compose new components, inline ResearchIntro |

---

### Task 1: Create HeroSection Component

**Files:**
- Create: `src/components/research/HeroSection.tsx`

- [ ] **Step 1: Create HeroSection component**

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-ci-blue to-ci-blue-dark py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-white max-w-4xl font-[family-name:var(--font-heading)] leading-tight">
          Seven Decades of Pioneering Cancer Research
        </h1>
        <p className="text-lg text-white/80 max-w-2xl mt-6 leading-relaxed">
          From India&apos;s first comprehensive cancer centre to a global
          research hub — advancing discovery, training the next generation, and
          delivering compassionate care since 1954.
        </p>
        <div className="flex gap-6 mt-10 flex-wrap">
          <Link
            href="/research/people"
            className="bg-ci-teal text-white px-6 py-3 rounded font-bold inline-flex items-center gap-2 hover:bg-ci-teal-dark transition-colors"
          >
            Meet Our Researchers <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/research/cancers"
            className="text-white/90 hover:text-white inline-flex items-center gap-2"
          >
            Cancers We Study <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify it compiles**

Run: `cd "/Users/cecvic/AiMT-Projects/cancerinstitute/Research Web Page Mock/research-pages" && npx tsc --noEmit src/components/research/HeroSection.tsx 2>&1 | head -20`

Expected: No errors (or only unrelated warnings)

- [ ] **Step 3: Commit**

```bash
git add src/components/research/HeroSection.tsx
git commit -m "feat: add HeroSection component with teal CTA button"
```

---

### Task 2: Create FoundersLegacy Component

**Files:**
- Create: `src/components/research/FoundersLegacy.tsx`

- [ ] **Step 1: Create FoundersLegacy component**

```tsx
import Link from "next/link";
import { founders } from "@/data/founders";

export default function FoundersLegacy() {
  return (
    <section className="bg-ci-blue-dark py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white font-[family-name:var(--font-heading)]">
          Our Founders &amp; Legacy
        </h2>
        <p className="text-white/80 text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
          Three visionaries whose conviction, sacrifice, and science built one
          of India&apos;s most enduring institutions of cancer care.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-12">
          {founders.map((founder) => (
            <Link
              key={founder.slug}
              href={`/research/founders/${founder.slug}`}
              className="flex flex-col items-center group"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 group-hover:border-ci-teal transition-colors duration-300">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-white font-bold text-lg mt-4 font-[family-name:var(--font-heading)]">
                {founder.name}
              </h3>
              <p className="text-white/70 text-sm mt-2 leading-relaxed max-w-xs">
                {founder.contribution}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify it compiles**

Run: `cd "/Users/cecvic/AiMT-Projects/cancerinstitute/Research Web Page Mock/research-pages" && npx tsc --noEmit src/components/research/FoundersLegacy.tsx 2>&1 | head -20`

Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/components/research/FoundersLegacy.tsx
git commit -m "feat: add FoundersLegacy component with circular photos on dark bg"
```

---

### Task 3: Create FacultyGrid Component

**Files:**
- Create: `src/components/research/FacultyGrid.tsx`

- [ ] **Step 1: Create FacultyGrid component**

```tsx
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

export default function FacultyGrid() {
  const internalPeople = people.filter((p) => p.category === "internal");

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-ci-blue font-[family-name:var(--font-heading)] text-center mb-12">
          Meet Our Faculty and Scientists
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4 justify-items-center">
          {internalPeople.map((person, i) => (
            <Link
              key={person.slug}
              href={`/research/people/${person.slug}`}
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

          {/* Placeholder slots */}
          {Array.from({ length: Math.max(0, TOTAL_SLOTS - internalPeople.length) }).map((_, i) => (
            <div
              key={`placeholder-${i}`}
              className="w-[120px] h-[120px] lg:w-[130px] lg:h-[130px] rounded-full"
              style={{
                background: gradients[(internalPeople.length + i) % gradients.length],
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify it compiles**

Run: `cd "/Users/cecvic/AiMT-Projects/cancerinstitute/Research Web Page Mock/research-pages" && npx tsc --noEmit src/components/research/FacultyGrid.tsx 2>&1 | head -20`

Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/components/research/FacultyGrid.tsx
git commit -m "feat: add FacultyGrid component with 2x7 circular photo grid"
```

---

### Task 4: Create CancersBento Component

**Files:**
- Create: `src/components/research/CancersBento.tsx`

- [ ] **Step 1: Create CancersBento component**

```tsx
import Link from "next/link";
import { cancerTypes } from "@/data/cancerTypes";

function CancerCard({
  cancer,
  className,
  featured = false,
}: {
  cancer: (typeof cancerTypes)[0];
  className?: string;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/research/cancers/${cancer.slug}`}
      className={`relative rounded-lg overflow-hidden group block ${className ?? ""}`}
    >
      {cancer.image ? (
        <img
          src={cancer.image}
          alt={cancer.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-ci-blue to-ci-blue-dark absolute inset-0" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className={`absolute bottom-0 left-0 right-0 ${featured ? "p-6 md:p-8" : "p-3"}`}>
        {featured && (
          <p className="text-sm text-ci-teal font-bold uppercase tracking-wider mb-2">
            Featured Image
          </p>
        )}
        <h3
          className={`font-bold text-white ${
            featured
              ? "text-2xl md:text-3xl font-[family-name:var(--font-heading)]"
              : "text-sm leading-tight"
          }`}
        >
          {cancer.name}
        </h3>
        {featured && cancer.description && (
          <p className="text-white/80 mt-2 max-w-xl leading-relaxed text-sm md:text-base">
            {cancer.description}
          </p>
        )}
      </div>
    </Link>
  );
}

export default function CancersBento() {
  const featured = cancerTypes[0];
  const topRight = cancerTypes.slice(1, 3);   // Blood, Lung
  const midRight = cancerTypes.slice(3, 5);   // Children's, Head & Neck
  const bottomRow = cancerTypes.slice(5, 9);  // Ovarian, Colon, Gastric, Bone
  const overflow = cancerTypes.slice(9);      // Rare Cancers + any future

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-ci-blue font-[family-name:var(--font-heading)] text-center mb-10">
          Cancers We Study
        </h2>

        {/* Desktop bento grid */}
        <div className="hidden lg:grid grid-cols-[3fr_2fr_2fr] grid-rows-[1fr_1fr] gap-1.5 mb-1.5">
          {/* Featured — spans 2 rows */}
          {featured && (
            <CancerCard
              cancer={featured}
              className="row-span-2 min-h-[400px]"
              featured
            />
          )}
          {/* Top right */}
          {topRight.map((ct) => (
            <CancerCard key={ct.slug} cancer={ct} className="min-h-[195px]" />
          ))}
          {/* Mid right */}
          {midRight.map((ct) => (
            <CancerCard key={ct.slug} cancer={ct} className="min-h-[195px]" />
          ))}
        </div>

        {/* Bottom row — 4 equal cols */}
        <div className="hidden lg:grid grid-cols-4 gap-1.5 mb-1.5">
          {bottomRow.map((ct) => (
            <CancerCard key={ct.slug} cancer={ct} className="aspect-[4/3]" />
          ))}
        </div>

        {/* Overflow row (e.g., Rare Cancers) */}
        {overflow.length > 0 && (
          <div
            className="hidden lg:grid gap-1.5"
            style={{ gridTemplateColumns: `repeat(${overflow.length}, 1fr)` }}
          >
            {overflow.map((ct) => (
              <CancerCard key={ct.slug} cancer={ct} className="aspect-[4/3]" />
            ))}
          </div>
        )}

        {/* Tablet — 2 cols */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-3">
          {featured && (
            <CancerCard
              cancer={featured}
              className="col-span-2 aspect-[21/9]"
              featured
            />
          )}
          {cancerTypes.slice(1).map((ct) => (
            <CancerCard key={ct.slug} cancer={ct} className="aspect-square" />
          ))}
        </div>

        {/* Mobile — single col */}
        <div className="grid md:hidden grid-cols-1 gap-3">
          {featured && (
            <CancerCard
              cancer={featured}
              className="aspect-[16/9]"
              featured
            />
          )}
          {cancerTypes.slice(1).map((ct) => (
            <CancerCard key={ct.slug} cancer={ct} className="aspect-[16/9]" />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify it compiles**

Run: `cd "/Users/cecvic/AiMT-Projects/cancerinstitute/Research Web Page Mock/research-pages" && npx tsc --noEmit src/components/research/CancersBento.tsx 2>&1 | head -20`

Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/components/research/CancersBento.tsx
git commit -m "feat: add CancersBento component with bento grid layout"
```

---

### Task 5: Create GlobalCollaborations Component

**Files:**
- Create: `src/components/research/GlobalCollaborations.tsx`

- [ ] **Step 1: Create GlobalCollaborations component**

```tsx
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { collaborators } from "@/data/collaborators";
import WorldMap from "@/components/research/WorldMap";

export default function GlobalCollaborations() {
  return (
    <section className="bg-ci-blue-dark py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white font-[family-name:var(--font-heading)] mb-12">
          Global Collaborations
        </h2>

        <WorldMap collaborators={collaborators} />

        <div className="mt-10">
          <Link
            href="/research/collaborations"
            className="bg-ci-teal text-white px-6 py-3 rounded font-bold inline-flex items-center gap-2 hover:bg-ci-teal-dark transition-colors"
          >
            Global Research Networks <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
```

Note: This component needs `"use client"` because it renders `WorldMap`, which is a client component.

- [ ] **Step 2: Verify it compiles**

Run: `cd "/Users/cecvic/AiMT-Projects/cancerinstitute/Research Web Page Mock/research-pages" && npx tsc --noEmit src/components/research/GlobalCollaborations.tsx 2>&1 | head -20`

Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/components/research/GlobalCollaborations.tsx
git commit -m "feat: add GlobalCollaborations component with dark bg and centered CTA"
```

---

### Task 6: Rewrite page.tsx to Compose New Components

**Files:**
- Modify: `src/app/research/page.tsx`

- [ ] **Step 1: Rewrite page.tsx**

Replace the entire contents of `src/app/research/page.tsx` with:

```tsx
import HeroSection from "@/components/research/HeroSection";
import FoundersLegacy from "@/components/research/FoundersLegacy";
import StatisticsBar from "@/components/research/StatisticsBar";
import FacultyGrid from "@/components/research/FacultyGrid";
import CancersBento from "@/components/research/CancersBento";
import GlobalCollaborations from "@/components/research/GlobalCollaborations";

export default function ResearchLandingPage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Founders & Legacy */}
      <FoundersLegacy />

      {/* 3. Research Intro */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-ci-gray-600 text-lg leading-relaxed">
            Cancer Institute (WIA) has been at the forefront of cancer research
            in India for over seven decades. Our research program spans molecular
            oncology, translational diagnostics, and clinical trials — bridging
            laboratory discovery with patient care across the full spectrum of
            cancer types.
          </p>
        </div>
      </section>

      {/* 4. Statistics */}
      <StatisticsBar />

      {/* 5. Faculty Grid */}
      <FacultyGrid />

      {/* 6. Cancers We Study */}
      <CancersBento />

      {/* 7. Global Collaborations */}
      <GlobalCollaborations />
    </>
  );
}
```

Note: The `"use client"` directive is removed from page.tsx. Only `GlobalCollaborations` needs it (because it uses `WorldMap`), and it declares its own directive. `StatisticsBar` already has its own `"use client"` directive.

- [ ] **Step 2: Verify the full app compiles**

Run: `cd "/Users/cecvic/AiMT-Projects/cancerinstitute/Research Web Page Mock/research-pages" && npx next build 2>&1 | tail -30`

Expected: Build succeeds with no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/research/page.tsx
git commit -m "feat: rewrite homepage to compose extracted section components"
```

---

### Task 7: Visual Verification and Polish

**Files:**
- Possibly modify: any of the 5 new components for pixel-perfect adjustments

- [ ] **Step 1: Start dev server and verify visually**

Run: `cd "/Users/cecvic/AiMT-Projects/cancerinstitute/Research Web Page Mock/research-pages" && npm run dev`

Open `http://localhost:3000/research` in a browser. Compare each section against the reference screenshot:

1. **HeroSection** — dark blue gradient, teal "Meet Our Researchers" button, white "Cancers We Study" text link
2. **FoundersLegacy** — dark blue bg, 3 circular photos centered, name + description below each
3. **ResearchIntro** — centered paragraph on white bg
4. **StatisticsBar** — stats row with animated counters
5. **FacultyGrid** — centered heading, 2 rows of circular photos (8 people + 6 placeholders)
6. **CancersBento** — bento grid: featured left spanning 2 rows, 2+2 right, 4 bottom row
7. **GlobalCollaborations** — dark blue bg, centered heading, world map, teal button below

- [ ] **Step 2: Fix any spacing, sizing, or color issues**

Adjust Tailwind classes as needed to match the reference pixel-perfectly. Common things to check:
- Section padding consistency
- Photo sizes in FacultyGrid and FoundersLegacy
- Bento grid proportions
- Button styling consistency (teal bg, white text, rounded)
- Font family on headings (`font-[family-name:var(--font-heading)]`)

- [ ] **Step 3: Commit fixes**

```bash
git add -A
git commit -m "fix: polish homepage layout for pixel-perfect match to reference"
```
