"use client";

import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "John Kamau",
    role: "Business Owner",
    content: "Taraj Consulting helped me secure a comprehensive business cover that saved me thousands when my warehouse was flooded. Their claims process is incredibly fast and professional.",
    avatar: "JK",
  },
  {
    name: "Sarah Wanjiku",
    role: "Individual Client",
    content: "The advisory team at Taraj is exceptional. They didn't just sell me a policy; they took the time to explain all my options and helped me choose the best medical cover for my family.",
    avatar: "SW",
  },
  {
    name: "David Otieno",
    role: "Fleet Manager",
    content: "Managing insurance for 50+ vehicles used to be a nightmare. Taraj Consulting streamlined everything and negotiated a group rate that significantly reduced our overheads.",
    avatar: "DO",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s how we&apos;ve helped individuals 
            and businesses across Kenya protect their future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <p className="text-slate-600 italic mb-8 flex-1 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-4 border-t pt-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
