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

            {/* WhatsApp Button - Enhanced with Official SVG Logo */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-4 text-white shadow-[0_0_20px_rgba(37,211,102,0.6)] transition-all hover:scale-105 hover:bg-[#1ebd5d] hover:shadow-[0_0_30px_rgba(37,211,102,0.8)]"
              aria-label="Chat on WhatsApp"
            >
              <span className="font-bold text-lg whitespace-nowrap">Chat with us</span>
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="h-8 w-8"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.67-1.613-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.955c-.003 5.445-4.439 9.88-9.888 9.88z" />
              </svg>
              
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
