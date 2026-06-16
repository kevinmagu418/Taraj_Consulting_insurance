"use client";

import { motion } from "motion/react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4">Subscribe To Get Updates</h2>
            <p className="text-slate-400">
              Stay informed with the latest insurance tips, product guides, and news from 
              Taraj Consulting Ltd. Delivered straight to your inbox.
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-md"
          >
            <form className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 rounded-full h-12 px-6 focus-visible:ring-primary"
                required
              />
              <Button type="submit" className="rounded-full h-12 px-8 font-bold">
                Subscribe
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <p className="text-[10px] text-slate-500 mt-4 text-center sm:text-left">
              By subscribing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
