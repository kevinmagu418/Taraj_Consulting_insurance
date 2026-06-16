"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const carouselImages = [
  "/images/hero-image-1.png",
  "/images/hero2.webp",
  "/images/hero-3.jpeg",
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-off-white pt-16 pb-24 lg:pt-32 lg:pb-48 bg-labyrinth">
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left z-10"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-blue-dark leading-[1.1] mb-8">
              Instant <span className="text-blue-primary underline decoration-blue-primary/30">Consultancy</span>.<br /> 
              Anytime, Anywhere.
            </h1>
            <p className="text-lg lg:text-xl text-blue-dark/60 font-sans max-w-lg mb-10 mx-auto lg:mx-0">
              Elevating businesses with strategic insurance and financial advisory through a seamless digital experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-blue-primary hover:bg-blue-dark text-white rounded-full px-10 h-14 text-lg font-bold shadow-xl shadow-blue-primary/20">
                Get A Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-blue-dark/20 text-blue-dark hover:bg-blue-dark/5 rounded-full px-10 h-14 text-lg font-bold">
                Our Services
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Blob Mask */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex-1 w-full max-w-2xl relative"
          >
            {/* Background Offset Boundary */}
            <div className="absolute inset-0 bg-blue-primary/10 rounded-full blur-3xl transform -translate-x-10 translate-y-10 scale-110" />
            
            <div className="relative aspect-square w-full">
              {/* Organic Blob Mask Container */}
              <div className="blob-mask absolute inset-0 bg-blue-dark/5 shadow-2xl border-4 border-white/50 backdrop-blur-sm">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={carouselImages[index]}
                      alt="Consultancy professional"
                      fill
                      priority={index === 0}
                      loading={index === 0 ? "eager" : "lazy"}
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Visual Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-dark/20 to-transparent" />
              </div>

              {/* Float Decorations */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-blue-dark/5 hidden md:block"
              >
                <div className="text-blue-dark font-black text-2xl">2023</div>
                <div className="text-[10px] uppercase font-bold text-blue-primary tracking-widest mt-1">Established</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
