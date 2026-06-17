"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) throw new Error("Failed");
      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
    }
  };

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
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 rounded-full h-12 px-6 focus-visible:ring-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === "submitting"}
              />
              <Button type="submit" className="rounded-full h-12 px-8 font-bold" disabled={status === "submitting"}>
                {status === "submitting" ? "Subscribing..." : "Subscribe"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
            {status === "success" && <p className="text-green-500 text-sm mt-2">Successfully subscribed!</p>}
            {status === "error" && <p className="text-red-500 text-sm mt-2">Failed to subscribe. Please try again.</p>}
            <p className="text-[10px] text-slate-500 mt-4 text-center sm:text-left">
              By subscribing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
