import ResearchHeader from "@/components/research/ResearchHeader";
import ResearchFooter from "@/components/research/ResearchFooter";

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <ResearchHeader />
      <main id="main-content">{children}</main>
      <ResearchFooter />
    </>
  );
}
