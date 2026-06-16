"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Mail, ArrowRight, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "general", label: "General Insurance" },
  { id: "health", label: "Health Insurance" },
  { id: "life", label: "Life Insurance" },
];

export function QuoteSection() {
  const [activeTab, setActiveActiveTab] = useState("general");

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row rounded-[40px] overflow-hidden shadow-2xl border border-blue-dark/5 min-h-[600px]">
          
          {/* Left Panel: Visual/Description */}
          <div className="lg:w-1/2 bg-blue-dark p-12 lg:p-20 relative flex flex-col justify-center">
            <div className="absolute inset-0 bg-labyrinth opacity-10" />
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <span className="text-blue-primary font-black tracking-widest uppercase text-sm mb-6 block">
                Lead Capture
              </span>
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                Secure Your <span className="text-blue-primary">Future</span> with a Personalized Quote.
              </h2>
              <p className="text-white/60 text-lg max-w-md">
                Find the best suited Insurance Package for you or your company. Quick, secure, and tailored to your needs.
              </p>
            </motion.div>
          </div>

          {/* Right Panel: Interactive Form */}
          <div className="lg:w-1/2 flex flex-col md:flex-row">
            
            {/* Form Side (Active) */}
            <div className="flex-1 bg-white p-10 lg:p-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="h-full flex flex-col"
                >
                  <h3 className="text-2xl font-bold text-blue-dark mb-10">
                    {categories.find(c => c.id === activeTab)?.label} Quote
                  </h3>
                  
                  <form className="space-y-6 flex-1">
                    <div className="relative">
                      <Input 
                        placeholder="Your Name" 
                        className="h-14 rounded-full pl-6 pr-12 bg-slate-50 border-none focus-visible:ring-blue-primary" 
                      />
                      <User className="absolute right-5 top-1/2 -translate-y-1/2 text-blue-dark/30 h-5 w-5" />
                    </div>
                    
                    <div className="relative">
                      <Input 
                        placeholder="Email Address" 
                        type="email"
                        className="h-14 rounded-full pl-6 pr-12 bg-slate-50 border-none focus-visible:ring-blue-primary" 
                      />
                      <Mail className="absolute right-5 top-1/2 -translate-y-1/2 text-blue-dark/30 h-5 w-5" />
                    </div>

                    <div className="flex items-center gap-3 px-2 py-4">
                      <input type="checkbox" id="terms" className="rounded-sm border-blue-dark/20 text-blue-primary focus:ring-blue-primary h-4 w-4" />
                      <label htmlFor="terms" className="text-xs text-blue-dark/50">
                        I agree to the terms of service and privacy policy.
                      </label>
                    </div>

                    <Button className="w-full h-14 rounded-full bg-blue-dark hover:bg-blue-dark text-white font-bold text-lg shadow-xl shadow-blue-dark/20 group">
                      Get A Quote Now
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Category Switcher Side (Inactive) */}
            <div className="w-full md:w-48 bg-blue-dark/95 p-8 flex flex-col justify-center gap-4 border-l border-white/5">
              <span className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-2 px-2">
                Categories
              </span>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveActiveTab(cat.id)}
                  className={cn(
                    "flex flex-col items-start gap-2 p-3 rounded-2xl transition-all duration-300 text-left group",
                    activeTab === cat.id 
                      ? "bg-blue-primary text-white shadow-lg" 
                      : "bg-white/5 text-white/50 hover:bg-white/10"
                  )}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[10px] font-bold uppercase tracking-tighter">
                      {cat.id}
                    </span>
                    <RefreshCcw size={12} className={cn(
                      "transition-transform duration-500",
                      activeTab === cat.id ? "rotate-180" : "opacity-0"
                    )} />
                  </div>
                  <span className="text-xs font-black leading-tight">
                    {cat.label}
                  </span>
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
