import { Hero } from "@/components/sections/hero/hero";
import { TrustStrip } from "@/components/sections/trust-strip/trust-strip";
import { ServicesGrid } from "@/components/sections/services-grid/services-grid";
import { PoliciesGrid } from "@/components/sections/policies-grid/policies-grid";
import { WhyUs } from "@/components/sections/why-us/why-us";
import { Testimonials } from "@/components/sections/testimonials/testimonials";
import { InsightsGrid } from "@/components/sections/insights-grid/insights-grid";
import { Newsletter } from "@/components/sections/newsletter/newsletter";
import { CTABand } from "@/components/sections/cta-band/cta-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesGrid />
      <WhyUs />
      <PoliciesGrid />
      <Testimonials />
      <InsightsGrid />
      <Newsletter />
      <CTABand />
    </>
  );
}
