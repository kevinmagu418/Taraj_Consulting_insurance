import { PageHero } from "@/components/layout/page-hero";
import { ServicesSection } from "@/components/sections/services-section";
import { PoliciesGrid } from "@/components/sections/policies-grid/policies-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore our range of insurance services including General, Medical, Life Insurance, and Premium Financing (IPF) tailored for your needs.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero 
        title="Our Specialized Services"
        subtitle="OUR SERVICES"
        description="Comprehensive insurance and consultancy solutions designed to protect and elevate your financial future."
      />
      
      <ServicesSection />

      <PoliciesGrid />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground text-lg italic">
                Experience timely and professional insurance services today.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase font-black tracking-widest text-primary">Have Any Questions?</span>
              <a href="tel:+254720889403" className="text-2xl md:text-3xl font-black text-secondary hover:text-primary transition-all">
                +254 720 889403
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
