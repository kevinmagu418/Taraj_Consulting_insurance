"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight,
  Plus
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "General Insurance",
    description: "Comprehensive covers for your vehicles, property, and travel needs with instant digital processing.",
    image: "/images/policies/motor.jpg",
    icon: "/icons/car.svg", // Placeholder for semantic mapping
  },
  {
    title: "Medical Insurance",
    description: "Access premium healthcare networks with flexible inpatient and outpatient covers for all stages of life.",
    image: "/images/policies/medical.avif",
    icon: "/icons/heart.svg",
  },
  {
    title: "Corporate Advisory",
    description: "Strategic financial planning and group insurance solutions designed for the modern Kenyan enterprise.",
    image: "/images/policies/corporate.jpg",
    icon: "/icons/briefcase.svg",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-surface overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Services Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20">
          {/* Left Area: Tag + Heading */}
          <div className="lg:w-1/2 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-black tracking-[0.2em] text-primary uppercase">
              <ShieldCheck size={12} className="text-primary" />
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary leading-[1.1] text-balance">
              Providing timely insurance services
            </h2>
          </div>

          {/* Middle Area: Description */}
          <div className="lg:w-[35%]">
            <p className="text-lg text-muted-foreground leading-relaxed italic">
              Explore affordable insurance services in Kenya. Taraj Consulting offers general, medical, life insurance and premium financing options.
            </p>
          </div>

          {/* Right Area: Navigation Controls */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="h-14 w-14 rounded-full border border-border flex items-center justify-center text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
              <ChevronLeft size={24} />
            </button>
            <button className="h-14 w-14 rounded-full border border-border flex items-center justify-center text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Services Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col h-full bg-white rounded-t-[40px] rounded-b-2xl border border-border shadow-sm hover:shadow-2xl transition-all duration-500 overflow-visible"
            >
              {/* Top Component: Rectangle Photo */}
              <div className="relative aspect-[4/3] w-full rounded-t-[40px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Overlapping Badge Feature */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-20">
                  <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-xl border-4 border-white transition-transform group-hover:rotate-[360deg] duration-1000">
                    <Plus size={24} strokeWidth={3} />
                  </div>
                </div>
              </div>

              {/* Bottom Content Component */}
              <div className="flex-1 pt-16 pb-10 px-8 text-center flex flex-col items-center">
                <h3 className="text-2xl font-heading font-bold text-secondary mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-xs">
                  {service.description}
                </p>
                <Link 
                  href="/services" 
                  className="mt-auto text-xs font-black uppercase tracking-[0.2em] text-primary hover:text-secondary transition-colors"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center justify-center gap-4 mt-12">
            <button className="h-12 w-12 rounded-full border border-border flex items-center justify-center text-secondary">
              <ChevronLeft size={20} />
            </button>
            <button className="h-12 w-12 rounded-full border border-border flex items-center justify-center text-secondary">
              <ChevronRight size={20} />
            </button>
        </div>

      </div>
    </section>
  );
}
