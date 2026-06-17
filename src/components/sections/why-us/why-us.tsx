"use client";

import { motion } from "motion/react";
import { ShieldCheck, Zap, HeartPulse, Target, Workflow } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const trustPoints = [
  {
    title: "Expert Advisory",
    description: "Our team of seasoned professionals provides expert guidance to help you navigate complex insurance options.",
    icon: ShieldCheck,
    number: "01",
    span: "md:col-span-2",
  },
  {
    title: "Fast Onboarding",
    description: "Experience 100% digital onboarding and dedicated support from day one with zero paperwork.",
    icon: Zap,
    number: "02",
    span: "md:col-span-3",
  },
  {
    title: "Tailored Solutions",
    description: "We don't believe in one-size-fits-all. We customize every policy to perfectly match your specific needs.",
    icon: Target,
    number: "03",
    span: "md:col-span-3",
  },
  {
    title: "Easy Claims",
    description: "Enjoy transparent, reliable, and fast claim assistance when you need it most, 24/7.",
    icon: Workflow,
    number: "04",
    span: "md:col-span-2",
  },
  {
    title: "Safe Investment",
    description: "Affordable and tailored cover options designed to protect your financial future and grow wealth.",
    icon: HeartPulse,
    number: "05",
    span: "md:col-span-5",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 mb-20">
          
          {/* Header */}
          <div className="lg:w-1/3">
            <span className="text-blue-primary font-black tracking-widest uppercase text-xs mb-4 block">
              Core Values
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-dark leading-tight mb-6">
              Why Clients Trust <span className="text-blue-primary">Us</span>
            </h2>
            <p className="text-blue-dark/60 text-lg">
              We provide a transparent and reliable bridge between you and the best 
              insurance providers in the region, driven by digital excellence.
            </p>
          </div>

          {/* Image & Badge Area */}
          <div className="lg:w-2/3 relative w-full">
            <div className="aspect-[16/9] md:aspect-square lg:aspect-[16/9] rounded-[40px] bg-slate-100 overflow-hidden shadow-2xl relative group">
               <Image
                src="/images/whyus.jpg"
                alt="Expert insurance advisors at Taraj Consulting Ltd"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
               <div className="absolute inset-0 bg-gradient-to-br from-blue-primary/20 to-transparent z-10" />
            </div>
            
            <div className="absolute -top-6 -right-6 bg-blue-dark text-white p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center z-20">
              <span className="text-3xl font-black">2026</span>
              <span className="text-xs font-bold uppercase tracking-widest text-center mt-1">Established</span>
            </div>
          </div>
        </div>

        {/* Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 border-t border-blue-dark/5 pt-20">
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                point.span,
                "group relative bg-off-white p-10 rounded-[32px] border border-blue-dark/5 overflow-hidden flex flex-col justify-center min-h-[220px] hover:shadow-xl transition-all duration-500"
              )}
            >
              {/* Floating Number Badge */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-blue-dark font-black group-hover:bg-blue-dark group-hover:text-white transition-colors duration-500">
                {point.number}
              </div>

              <h3 className="text-xl font-bold text-blue-dark mb-3 pr-12">
                {point.title}
              </h3>
              <p className="text-blue-dark/60 text-sm max-w-sm">
                {point.description}
              </p>

              {/* Bottom Right Line Icon */}
              <div className="absolute bottom-6 right-6 text-blue-primary/10 group-hover:text-blue-primary/30 transition-colors">
                <point.icon size={48} strokeWidth={1} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
