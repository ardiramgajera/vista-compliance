import { Suspense, lazy, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FooterSection from "@/components/FooterSection";
import LazySection from "@/components/LazySection";
import { PageSeo } from "@/components/seo/PageSeo";

// Lazy load below-the-fold sections for better performance
const ProblemSection = lazy(() => 
  import("@/components/ProblemSection").catch(err => {
    console.error("Failed to load ProblemSection:", err);
    throw err;
  })
);
const SolutionSection = lazy(() => 
  import("@/components/SolutionSection").catch(err => {
    console.error("Failed to load SolutionSection:", err);
    throw err;
  })
);
const FeaturesSection = lazy(() => 
  import("@/components/FeaturesSection").catch(err => {
    console.error("Failed to load FeaturesSection:", err);
    throw err;
  })
);
const BenefitsSection = lazy(() => 
  import("@/components/BenefitsSection").catch(err => {
    console.error("Failed to load BenefitsSection:", err);
    throw err;
  })
);
const UseCasesSection = lazy(() => 
  import("@/components/UseCasesSection").catch(err => {
    console.error("Failed to load UseCasesSection:", err);
    throw err;
  })
);
const FAQSection = lazy(() => 
  import("@/components/FAQSection").catch(err => {
    console.error("Failed to load FAQSection:", err);
    throw err;
  })
);
const ContactSection = lazy(() => 
  import("@/components/ContactSection").catch(err => {
    console.error("Failed to load ContactSection:", err);
    throw err;
  })
);
const FinalCTASection = lazy(() => 
  import("@/components/FinalCTASection").catch(err => {
    console.error("Failed to load FinalCTASection:", err);
    throw err;
  })
);

// Loading fallback component
const SectionSkeleton = () => (
  <div className="min-h-[400px] bg-gradient-to-b from-background to-background/50 animate-pulse" />
);

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // If the user navigates directly to a URL with a hash (e.g. /#contact)
    if (location.hash) {
      // Force all lazy sections to render immediately
      window.dispatchEvent(new Event('forceRenderSections'));
      
      // Wait a tick for React to mount the lazy-loaded DOM elements
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <>
      <PageSeo 
        title="Home"
        description="Native Salesforce compliance management for audits, vendor risk, evidence tracking, and automated compliance workflows."
      />
      <Navbar />
      <main>
        <HeroSection />
        
        <LazySection minHeight="450px">
          <Suspense fallback={<SectionSkeleton />}>
            <ProblemSection />
          </Suspense>
        </LazySection>

        <LazySection minHeight="500px">
          <Suspense fallback={<SectionSkeleton />}>
            <SolutionSection />
          </Suspense>
        </LazySection>

        <LazySection minHeight="600px">
          <Suspense fallback={<SectionSkeleton />}>
            <FeaturesSection />
          </Suspense>
        </LazySection>

        <LazySection minHeight="500px">
          <Suspense fallback={<SectionSkeleton />}>
            <BenefitsSection />
          </Suspense>
        </LazySection>

        <LazySection minHeight="600px">
          <Suspense fallback={<SectionSkeleton />}>
            <UseCasesSection />
          </Suspense>
        </LazySection>

        <LazySection minHeight="500px">
          <Suspense fallback={<SectionSkeleton />}>
            <FAQSection />
          </Suspense>
        </LazySection>

        <LazySection minHeight="700px">
          <Suspense fallback={<SectionSkeleton />}>
            <ContactSection />
          </Suspense>
        </LazySection>

        <LazySection minHeight="400px">
          <Suspense fallback={<SectionSkeleton />}>
            <FinalCTASection />
          </Suspense>
        </LazySection>
      </main>
      <FooterSection />
    </>
  );
};

export default Index;
