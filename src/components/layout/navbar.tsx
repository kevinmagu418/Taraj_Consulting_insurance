"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Menu, X, LayoutGrid } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { navConfig } from "@/content/nav";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-off-white/80 backdrop-blur-md sticky top-0 z-40 w-full border-b border-blue-dark/5">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-blue-dark text-white h-10 w-10 flex items-center justify-center rounded-lg font-black text-xl shadow-lg transition-transform group-hover:rotate-6">
            T
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-black text-xl text-blue-dark leading-none tracking-tighter">
              TARAJ
            </span>
            <span className="font-sans font-bold text-[10px] text-blue-primary tracking-[0.2em] leading-none mt-1 uppercase">
              Consultancy
            </span>
          </div>
        </Link>

        {/* Center: Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative font-sans text-sm font-bold uppercase tracking-widest transition-colors py-2 group",
                pathname === item.href ? "text-blue-dark" : "text-blue-dark/60 hover:text-blue-dark"
              )}
            >
              {item.title}
              <span className={cn(
                "absolute bottom-0 left-0 w-full h-0.5 bg-blue-primary scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
                pathname === item.href && "scale-x-100"
              )} />
            </Link>
          ))}
        </div>

        {/* Right: CTA */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-3">
            <div className="h-10 w-10 rounded-full border border-blue-dark/10 flex items-center justify-center text-blue-dark">
              <Phone size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-blue-dark/50 italic leading-none mb-1">
                Have Any Questions?
              </span>
              <span className="font-sans font-black text-sm text-blue-dark leading-none">
                {siteConfig.contact.phone}
              </span>
            </div>
          </div>
          
          <button className="text-blue-dark hover:text-blue-primary transition-colors">
            <LayoutGrid size={24} />
          </button>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-blue-dark" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-off-white border-b border-blue-dark/5 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-6 text-center">
              {navConfig.mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-2xl font-bold text-blue-dark hover:text-blue-primary transition-colors"
                >
                  {item.title}
                </Link>
              ))}
              <div className="pt-4 flex flex-col items-center gap-4">
                 <span className="text-xs italic text-blue-dark/50">Have Any Questions?</span>
                 <a href={`tel:${siteConfig.contact.phone}`} className="text-xl font-black text-blue-dark">
                   {siteConfig.contact.phone}
                 </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
