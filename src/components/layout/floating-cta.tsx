"use client";

import { MessageCircle, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "254791848319";
  const message = "Hello Taraj Consulting, I would like to inquire about insurance services.";

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            className="flex flex-col items-end gap-4"
          >
            {/* Call Button */}
            <a
              href={`tel:+${phoneNumber}`}
              className="group flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-2xl transition-all hover:scale-110 hover:shadow-primary/50"
              aria-label="Call Us"
            >
              <Phone className="h-7 w-7" />
            </a>

            {/* WhatsApp Button - Enhanced */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-4 text-white shadow-[0_0_20px_rgba(37,211,102,0.6)] transition-all hover:scale-105 hover:bg-[#1ebd5d] hover:shadow-[0_0_30px_rgba(37,211,102,0.8)]"
              aria-label="Chat on WhatsApp"
            >
              <span className="font-bold text-lg whitespace-nowrap">Chat with us</span>
              <MessageCircle className="h-8 w-8" />
              
              {/* Pulsing indicator */}
              <span className="absolute -top-1 -right-1 flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-white"></span>
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
