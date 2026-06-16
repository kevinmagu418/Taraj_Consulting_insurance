import { PageHero } from "@/components/layout/page-hero";
import { InsightsGrid } from "@/components/sections/insights-grid/insights-grid";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance Insights",
  description: "Read the latest insurance tips, product guides, and news from our learned trade analysts to stay protected in Kenya.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero 
        title="Insurance Insights"
        subtitle="INSURANCE BLOGS"
        description="Read Insurance Blogs From learned trade Analysts. Stay informed with the latest insurance tips, product guides, and news."
      />

      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
              {["All", "Motor", "Medical", "Life", "Digital"].map((cat) => (
                <button 
                  key={cat}
                  className="px-6 py-2 rounded-full border text-sm font-medium hover:bg-primary hover:text-white transition-all"
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search articles..." className="pl-10 rounded-full" />
            </div>
          </div>
        </div>
      </section>
      
      <InsightsGrid />

      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Want specific advice?</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Our analysts are always ready to help you understand the fine print 
              and make informed decisions about your insurance needs.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-primary text-white font-bold text-lg hover:shadow-xl transition-all"
            >
              Talk To An Advisor
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
