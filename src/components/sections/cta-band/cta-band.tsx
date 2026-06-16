import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTABand() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 shadow-2xl md:px-16 lg:py-20">
          {/* Decoration */}
          <div className="absolute right-0 top-0 -mr-24 -mt-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          
          <div className="relative flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:max-w-3xl">
              Ready to Secure Your Future and Protect What Matters?
            </h2>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">
              Get in touch with our expert advisors today for a free consultation 
               and a tailored insurance quote that fits your lifestyle.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-8 text-primary font-bold">
                <Link href="/contact">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-white text-white hover:bg-white hover:text-primary">
                <Link href="/contact">Talk to an Advisor</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
