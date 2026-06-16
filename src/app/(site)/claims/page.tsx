import { PageHero } from "@/components/layout/page-hero";
import { FileText, CheckCircle, Clock, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claims Assistance",
  description: "Report an incident and get professional help with your insurance claims. We provide fast and transparent assistance to ensure you get settled quickly.",
};

const steps = [
  {
    title: "Report the Incident",
    description: "Notify us immediately after the event occurs through our 24/7 hotline or digital portal.",
    icon: ShieldAlert,
  },
  {
    title: "Document Collection",
    description: "Gather all necessary evidence, including photos, police reports, and receipts.",
    icon: FileText,
  },
  {
    title: "Evaluation",
    description: "Our dedicated claims team works with the insurer to evaluate the loss quickly.",
    icon: Clock,
  },
  {
    title: "Settlement",
    description: "Receive your compensation through your preferred payment method once approved.",
    icon: CheckCircle,
  },
];

export default function ClaimsPage() {
  return (
    <>
      <PageHero 
        title="Claims Assistance"
        subtitle="WE ARE HERE FOR YOU"
        description="Fast and transparent claims assistance. We guide you through every step of the process to ensure you get your settlement without delays."
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Claims Process</h2>
            <p className="text-muted-foreground text-lg">
              We understand that filing a claim can be stressful. Our goal is to make it 
              as simple and transparent as possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-3xl border transition-all hover:bg-white hover:shadow-xl group">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need to report a claim right now?</h2>
              <p className="text-slate-400 text-lg mb-8">
                Our emergency response team is available 24/7 to help you initiate 
                the claims process immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full px-10 font-bold">
                  <a href="tel:+254720889403">Call Emergency Hotline</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-10 border-slate-700 text-white hover:bg-slate-800">
                  <Link href="/contact">Message Support</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 w-full lg:w-auto">
              <h3 className="text-xl font-bold mb-4">Required Documents</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-2 italic">✓ Original Policy Document</li>
                <li className="flex items-center gap-2 italic">✓ Completed Claim Form</li>
                <li className="flex items-center gap-2 italic">✓ Proof of Identity</li>
                <li className="flex items-center gap-2 italic">✓ Incident Reports/Photos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
