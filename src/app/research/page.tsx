import HeroSection from "@/components/research/HeroSection";
import FoundersLegacy from "@/components/research/FoundersLegacy";
import StatisticsBar from "@/components/research/StatisticsBar";
import FacultyGrid from "@/components/research/FacultyGrid";
import CancersBento from "@/components/research/CancersBento";
import GlobalCollaborations from "@/components/research/GlobalCollaborations";

export default function ResearchLandingPage() {
  return (
    <main>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Research Intro */}
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

      {/* 3. Statistics */}
      <StatisticsBar />

      {/* 4. Faculty Grid */}
      <FacultyGrid />

      {/* 5. Cancers We Study */}
      <CancersBento />

      {/* 6. Our Legacy */}
      <FoundersLegacy />

      {/* 7. Global Collaborations */}
      <GlobalCollaborations />
    </main>
  );
}
