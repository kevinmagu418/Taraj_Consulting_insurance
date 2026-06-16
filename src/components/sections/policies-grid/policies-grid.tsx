"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const policies = [
  {
    title: "Motor Insurance",
    category: "General",
    description: "Comprehensive and third-party covers for private and commercial vehicles.",
    image: "/images/policies/motor.jpg",
    slug: "motor-insurance",
  },
  {
    title: "Medical Insurance",
    category: "Health",
    description: "Inpatient and outpatient covers for individuals, families, and corporates.",
    image: "/images/policies/medical.avif",
    slug: "medical-insurance",
  },
  {
    title: "Life Cover",
    category: "Life",
    description: "Protect your loved ones with our flexible term life and whole life plans.",
    image: "/images/policies/life.jpg",
    slug: "life-cover",
  },
  {
    title: "Investment Plans",
    category: "Wealth",
    description: "Tailored wealth management and saving schemes with high returns.",
    image: "/images/policies/investment.jpg",
    slug: "investment-plans",
  },
  {
    title: "Property Insurance",
    category: "General",
    description: "Secure your home and business premises against fire, theft, and natural disasters.",
    image: "/images/policies/property.jpg",
    slug: "property-insurance",
  },
  {
    title: "Corporate Cover",
    category: "Business",
    description: "Group life, medical, and general insurance solutions for modern businesses.",
    image: "/images/policies/corporate.jpg",
    slug: "corporate-cover",
  },
];

export function PoliciesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Featured Insurance <span className="text-primary">Products</span>
            </h2>
            <p className="text-muted-foreground">
              Discover our most popular insurance solutions designed to provide 
              maximum protection and peace of mind for every stage of your life.
            </p>
          </div>
          <Button asChild variant="ghost" className="text-primary font-bold">
            <Link href="/policies">
              View All Policies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {policies.map((policy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border bg-white transition-all hover:shadow-xl"
            >
              <div className="aspect-[16/10] bg-slate-100 overflow-hidden relative">
                {/* Image Placeholder */}
                <Image
                  src={policy.image}
                  alt={`${policy.title} - Taraj Consulting Ltd`}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
                    {policy.category}
                  </Badge>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {policy.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                  {policy.description}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                   <Link 
                    href={`/policies/${policy.slug}`} 
                    className="text-sm font-bold text-foreground hover:text-primary transition-colors"
                   >
                     Learn More
                   </Link>
                   <Link 
                    href="/contact" 
                    className="text-xs font-bold uppercase tracking-wider text-primary flex items-center"
                   >
                     Get Quote
                     <ArrowRight className="ml-1 h-3 w-3" />
                   </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
