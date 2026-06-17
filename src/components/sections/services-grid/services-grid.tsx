"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Car, 
  HeartPulse, 
  Briefcase, 
  ChevronRight 
} from "lucide-react";

const services = [
  {
    title: "General Insurance",
    subtitle: "Protect Your Assets",
    description: "Comprehensive covers for your vehicles, property, and travel needs with instant digital processing.",
    icon: Car,
    href: "/services",
    image: "/images/general-insurance.jpg",
  },
  {
    title: "Medical Insurance",
    subtitle: "Your Health First",
    description: "Access premium healthcare networks with flexible inpatient and outpatient covers for all stages of life.",
    icon: HeartPulse,
    href: "/services",
    image: "/images/medical-insurance.jpg",
  },
  {
    title: "Corporate Advisory",
    subtitle: "Business Elevation",
    description: "Strategic financial planning and group insurance solutions designed for the modern Kenyan enterprise.",
    icon: Briefcase,
    href: "/services",
    image: "/images/corporate-advisory.jpg",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-dark/10 text-[10px] font-black tracking-[0.2em] text-blue-dark uppercase mb-4 shadow-sm">
            <ShieldCheck size={12} className="text-blue-primary" />
            Consultancy Packages
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-dark max-w-2xl mx-auto">
            Tailored Solutions for Your Peace of Mind
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white p-10 rounded-[32px] border border-blue-dark/5 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full"
            >
              {/* Icon Container with Overlapping Shield */}
              <div className="relative w-16 h-16 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-blue-dark flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110 duration-300">
                  <service.icon size={28} />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-blue-primary flex items-center justify-center text-white shadow-md border-2 border-white">
                  <ShieldCheck size={14} />
                </div>
              </div>

              <span className="font-serif text-blue-primary text-xl font-bold mb-3">
                {service.subtitle}
              </span>
              <h3 className="text-2xl font-bold text-blue-dark mb-4">
                {service.title}
              </h3>
              <p className="text-blue-dark/60 leading-relaxed mb-8 flex-1">
                {service.description}
              </p>

              <Link 
                href={service.href}
                className="inline-flex items-center text-sm font-black text-blue-dark hover:text-blue-primary transition-colors group/link"
              >
                Learn More
                <ChevronRight size={16} className="ml-1 transition-transform group-hover/link:translate-x-1" />
              </Link>

              {/* Masked Circular Image for each Card */}
              <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full overflow-hidden border-8 border-white/50 md:block hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
