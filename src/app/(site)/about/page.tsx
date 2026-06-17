import { PageHero } from "@/components/layout/page-hero";
import { ShieldCheck, Target, Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Taraj Consulting Ltd, a Nairobi-based digital insurance agency founded to simplify protection for what matters most.",
};

const values = [
  {
    title: "Fast",
    description: "We believe getting insured should be instantaneous. Our digital-first approach removes delays.",
    icon: Zap,
  },
  {
    title: "Simple",
    description: "We remove the confusion and complex paperwork from the insurance process.",
    icon: ShieldCheck,
  },
  {
    title: "Accessible",
    description: "Access your policies and support from any device, anywhere, at any time.",
    icon: Target,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero 
        title="About Taraj Consulting"
        subtitle="Founded in 2026. Fully digital. Based in Nairobi."
        description="Taraj Consulting Ltd was created to bring a fresh, digital-first approach to insurance in Kenya. We connect you with top licensed insurers for instant peace of mind."
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2026 and based in Nairobi, Taraj Consulting Ltd was created to bring a fresh, digital-first approach to insurance in Kenya.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We believe getting insured should be fast, simple, and accessible — from any device. 
                We connect individuals, families, and businesses with licensed insurers in Kenya, 
                offering instant policy access, flexible payments, and reliable support.
              </p>
              
              <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-r-2xl">
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p className="text-lg italic text-slate-700">
                  “To simplify the way people protect what matters most.”
                </p>
                <p className="mt-4 text-muted-foreground">
                  We aim to remove delays, paperwork, and confusion from the insurance process.
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 bg-muted rounded-2xl border flex flex-col items-center text-center">
                <div className="text-5xl font-black text-primary mb-2">Expert</div>
                <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  Industry Guidance
                </div>
              </div>
              <div className="p-8 bg-primary text-white rounded-2xl flex flex-col items-center text-center">
                <div className="text-5xl font-black mb-2">100%</div>
                <div className="text-sm font-bold uppercase tracking-wider opacity-80">
                  Digital Onboarding
                </div>
              </div>
              <div className="p-8 bg-slate-900 text-white rounded-2xl sm:col-span-2 flex flex-col items-center text-center">
                <div className="text-3xl font-bold mb-2">Licensed Agency</div>
                <div className="text-sm opacity-70">
                  Partnering with all major insurance providers in Kenya
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">What drives us to provide the best insurance experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-10 rounded-3xl border shadow-sm hover:shadow-md transition-shadow">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
