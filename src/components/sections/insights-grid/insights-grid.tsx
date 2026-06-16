"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Calendar, Clock, ChevronRight } from "lucide-react";

const insights = [
  {
    title: "Understanding Third-Party vs. Comprehensive Motor Insurance",
    excerpt: "In Kenya, choosing the right motor insurance can be confusing. We break down the key differences to help you decide.",
    date: "June 12, 2026",
    readTime: "5 min read",
    slug: "third-party-vs-comprehensive",
    image: "/images/insights/motor2.jpg",
  },
  {
    title: "Why Digital Insurance is the Future of Financial Security in Kenya",
    excerpt: "The insurance landscape is changing rapidly. Learn how digital platforms are making insurance more accessible.",
    date: "June 08, 2026",
    readTime: "4 min read",
    slug: "digital-insurance-future-kenya",
    image: "/images/insights/digital.jpg",
  },
  {
    title: "20 Reasons Why Your Last Expense Claim Can Be Declined in Kenya",
    excerpt: "Filing a claim shouldn't be stressful. Avoid these common mistakes that lead to claim rejections.",
    date: "May 28, 2026",
    readTime: "7 min read",
    slug: "why-insurance-claims-declined",
    image: "/images/insights/claims.jpg",
  },
];

export function InsightsGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Latest Insurance <span className="text-primary">Insights</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay informed with our expert analysis, tips, and guides on 
            navigating the insurance landscape in Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col bg-white rounded-2xl border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-slate-100 relative overflow-hidden">
                 <Image
                  src={insight.image}
                  alt={`${insight.title} - Taraj Consulting Ltd`}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 flex flex-1 flex-col">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {insight.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {insight.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  <Link href={`/insights/${insight.slug}`}>
                    {insight.title}
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                  {insight.excerpt}
                </p>
                <Link 
                  href={`/insights/${insight.slug}`}
                  className="mt-auto flex items-center text-sm font-bold text-primary group-hover:underline"
                >
                  Read Full Article
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
