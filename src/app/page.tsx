import CTASection from "@/components/homepage/cta-section";
import FeaturesSection from "@/components/homepage/features-section";
import HeroSection from "@/components/homepage/hero-section";
import ProcessSection from "@/components/homepage/process-section";
import SearchSection from "@/components/homepage/search-section";
import StatsSection from "@/components/homepage/stats-section";
import TestimonialsSection from "@/components/homepage/testimonials-section";

export default function HomePage() {
  return (
    <section id="main" className="flex-1">
      <HeroSection />

      <SearchSection />

      <FeaturesSection />

      <ProcessSection />

      <StatsSection />

      <TestimonialsSection />

      <CTASection />
    </section>
  );
}
