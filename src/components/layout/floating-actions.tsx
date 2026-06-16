"use client";

import { MessageCircle, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/site";

export function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = siteConfig.contact.phone.replace(/\s+/g, '');
  const message = "Hello Taraj Consultancy, I would like to inquire about your services.";

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4 items-end">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* WhatsApp Widget */}
            <motion.a
              key="whatsapp"
              initial={{ opacity: 0, scale: 0.5, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.5, x: 20 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110 active:scale-95 group relative"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="h-8 w-8 fill-current" />
              <span className="absolute right-full mr-4 bg-white text-blue-dark text-xs font-black px-3 py-2 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-blue-dark/5">
                Chat with an Advisor
              </span>
            </motion.a>

            {/* Scroll to Top */}
            <motion.button
              key="scroll-top"
              initial={{ opacity: 0, scale: 0.5, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.5, x: 20 }}
              onClick={scrollToTop}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-dark text-white shadow-xl transition-transform hover:scale-110 active:scale-95"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-6 w-6" />
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
