# Homepage Redesign — Match Reference Layout

**Date:** 2026-03-23
**Scope:** Redesign the research landing page to match the provided reference screenshot, extracting each section into its own component.

---

## Goal

Restructure the homepage (`/research`) to match a reference design pixel-perfectly. The page currently uses inline sections in a single file; the new design extracts each section into a dedicated component for better maintainability.

---

## Section Order (top to bottom)

1. HeroSection
2. FoundersLegacy
3. ResearchIntro (inline in page.tsx)
4. StatisticsBar (existing component, repositioned)
5. FacultyGrid
6. CancersBento
7. GlobalCollaborations

**Removed sections:** Founder Quote Strip.
**Cleanup:** Remove unused `DonationCta` import from page.tsx.

## Styling Convention

Use Tailwind 4 theme tokens (e.g., `bg-ci-blue`, `text-ci-teal`) rather than the verbose `bg-[var(--ci-blue)]` form. The project's `globals.css` registers all `--ci-*` variables via Tailwind's `@theme` directive, making the shorthand valid and preferred going forward.

---

## New Components

### 1. HeroSection (`src/components/research/HeroSection.tsx`)

- Full-width dark blue gradient background (`from-ci-blue to-ci-blue-dark`)
- Heading: "Seven Decades of Pioneering Cancer Research" — white, PT Serif, `text-5xl md:text-6xl`, bold
- Subtext paragraph — white at 80% opacity, `text-lg`, max-w-2xl
- Two CTAs side by side:
  - **Primary:** "Meet Our Researchers →" — teal filled button (`bg-ci-teal`, white text, `px-6 py-3`, rounded, ArrowRight icon), links to `/research/people`. Replaces the current white-bordered outline button.
  - **Secondary:** "Cancers We Study →" — white text link (`text-white/90 hover:text-white`) with ArrowRight icon, links to `/research/cancers`
- Vertical padding: `py-32`, horizontal: `px-6`
- Content constrained to `max-w-6xl mx-auto`
- No data imports — all static content

### 2. FoundersLegacy (`src/components/research/FoundersLegacy.tsx`)

- Full-width dark blue background (`bg-ci-blue-dark`)
- Centered heading: "Our Founders & Legacy" — white, PT Serif, bold
- Centered description paragraph — white at 80% opacity
- 3 founders in a row (`grid-cols-1 sm:grid-cols-3`, centered):
  - Circular photo: `rounded-full`, ~150-160px, centered, object-cover object-top
  - Name below: white, bold, centered
  - Description text below name: white at 70% opacity, small text, centered
  - Each founder wraps in a Link to `/research/founders/[slug]`
- Vertical padding: `py-24`, horizontal: `px-6`
- Content constrained to `max-w-6xl mx-auto`
- **Data:** imports `founders` from `@/data/founders`

### 3. FacultyGrid (`src/components/research/FacultyGrid.tsx`)

- White background, `py-24 px-6`
- Centered heading: "Meet Our Faculty and Scientists" — dark blue (`ci-blue`), PT Serif, bold
- 2 rows of 7 circular photos, centered
  - Desktop: `grid-cols-7`, mobile: `grid-cols-4`, small mobile: `grid-cols-3`
  - Each photo: `rounded-full`, square aspect ratio, ~120-130px
  - `object-cover object-top` for headshots
  - People without photos: gradient placeholder with initials (reuse existing gradient array)
  - Hover: blue overlay with name text (matching current hover pattern)
  - Each links to `/research/people/[slug]`
- Grid displays all available internal people. Currently 8 exist in data; remaining slots (up to 14) are filled with gradient placeholders without initials (plain gradient circles). If more people are added to data later, placeholders are replaced automatically.
- No descriptive text block, no browse button
- Content constrained to `max-w-6xl mx-auto`
- **Data:** imports `people` from `@/data/people`, filters `category === "internal"`

### 4. CancersBento (`src/components/research/CancersBento.tsx`)

- White background, `py-24 px-6`
- Centered heading: "Cancers We Study" — dark blue (`ci-blue`), PT Serif, bold
- Bento grid layout using CSS Grid.
- Data has 10 cancer types. All 10 are displayed.

**CSS Grid definition (desktop):**
```
grid-template-columns: 3fr 2fr 2fr
grid-template-rows: auto auto auto
gap: 6px (Tailwind `gap-1.5`)
```

**Grid placement:**
| Cell | Cancer | Grid position |
|------|--------|---------------|
| Featured | Breast Cancer (index 0) | col 1, row 1–2 span |
| Top-right 1 | Blood Cancers (index 1) | col 2, row 1 |
| Top-right 2 | Lung Cancer (index 2) | col 3, row 1 |
| Mid-right 1 | Children's Cancers (index 3) | col 2, row 2 |
| Mid-right 2 | Head & Neck Cancer (index 4) | col 3, row 2 |

**Bottom row (separate grid or same grid row 3):**
```
grid-template-columns: repeat(4, 1fr)
```
| Ovarian & Women's (5) | Colon (6) | Gastric (7) | Bone (8) |

**Overflow row for remaining types:**
Any cancer types beyond index 8 (currently "Rare Cancers" at index 9) are rendered in an additional row of equal-width cards, same styling as the bottom row.

**Featured card styling:**
- Image with dark gradient overlay from bottom
- "Featured Image" label in teal/small text
- Title large and bold, white
- Description text, white at 80% opacity

**Standard card styling:**
- Image with `bg-gradient-to-t from-black/80` overlay
- White title text at bottom-left, bold

**Responsive breakpoints:**
- Desktop (`lg`+): Full bento layout as described
- Tablet (`md`): 2-column grid; featured card spans full width on its own row, remaining cards in 2-column grid
- Mobile (`sm` and below): Single column stack

All cards: rounded corners (`rounded-lg`), image with `bg-gradient-to-t from-black/80`, white title, hover scale effect, linked to `/research/cancers/[slug]`.

- Content constrained to `max-w-6xl mx-auto`
- **Data:** imports `cancerTypes` from `@/data/cancerTypes`

### 5. GlobalCollaborations (`src/components/research/GlobalCollaborations.tsx`)

- Full-width dark blue background (`bg-ci-blue-dark`)
- Centered heading: "Global Collaborations" — white, PT Serif, bold
- WorldMap component (existing, reused as-is; accepts `collaborators` prop of type `Collaborator[]`)
- Centered teal filled button below map: "Global Research Networks →"
  - `bg-ci-teal`, white text, `px-6 py-3`, rounded, ArrowRight icon
  - Links to `/research/collaborations`
- No descriptive paragraph
- Vertical padding: `py-24`, horizontal: `px-6`
- Content constrained to `max-w-6xl mx-auto`
- **Data:** imports `collaborators` from `@/data/collaborators`

---

## Modified Files

### `src/app/research/page.tsx`

Rewritten to compose the new section components:

```tsx
import HeroSection from "@/components/research/HeroSection";
import FoundersLegacy from "@/components/research/FoundersLegacy";
import StatisticsBar from "@/components/research/StatisticsBar";
import FacultyGrid from "@/components/research/FacultyGrid";
import CancersBento from "@/components/research/CancersBento";
import GlobalCollaborations from "@/components/research/GlobalCollaborations";

// Sections:
// 1. HeroSection
// 2. FoundersLegacy
// 3. ResearchIntro (inline)
// 4. StatisticsBar (existing)
// 5. FacultyGrid
// 6. CancersBento
// 7. GlobalCollaborations
```

- `"use client"` directive removed if no client-side logic remains in page.tsx itself (components that need it will have their own directive)
- ResearchIntro remains inline: white background, `py-24 px-6`, `max-w-3xl mx-auto text-center`, paragraph text in `text-ci-gray-600 text-lg leading-relaxed`. Content: "Cancer Institute (WIA) has been at the forefront of cancer research in India for over seven decades..." (unchanged from current implementation).
- Removed: Founder Quote Strip section. Removed unused `DonationCta` import.

---

## Unchanged

- All data files (`src/data/*`)
- `StatisticsBar.tsx` — reused as-is
- `WorldMap.tsx` — reused as-is
- `ResearchHeader.tsx` / `ResearchFooter.tsx`
- `globals.css` — no changes expected (Tailwind utilities sufficient)
- All other pages and components
- Public assets

---

## Design Decisions

1. **Component extraction (Approach B):** Each homepage section gets its own component file for better separation of concerns and maintainability.
2. **Repositioned sections:** ResearchIntro and StatisticsBar kept but moved between FoundersLegacy and FacultyGrid.
3. **Removed sections:** Founder Quote Strip removed entirely.
4. **Global Collaborations:** No descriptive text, centered teal button below map, label changed to "Global Research Networks".
5. **Hero CTAs:** Primary restyled to teal filled; secondary text link retained.
6. **Faculty:** Centered 2x7 circular grid replaces left-text + 4x4 square mosaic.
7. **Founders:** Dark blue background, circular photos with centered descriptions replaces rectangular overlay cards.
8. **Cancers:** Bento grid replaces full-width hero + 5-column grid.
