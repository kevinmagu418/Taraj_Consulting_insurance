import Link from "next/link";
import Image from "next/image";
import { navConfig } from "@/content/nav";
import { siteConfig } from "@/lib/site";
import { 
  Phone, 
  Mail, 
  Building2, 
  ArrowRight,
  SendHorizontal
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface relative overflow-hidden mt-20">
      {/* Abstract Texture */}
      <div className="absolute inset-0 bg-constellation opacity-10 pointer-events-none" />

      {/* Top Utility Bar */}
      <div className="border-y border-border relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center divide-y md:divide-y-0 md:divide-x border-x border-border">
            {/* Contact Prompt */}
            <div className="flex items-center gap-4 py-8 md:py-10 px-8 group">
              <div className="h-14 w-14 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground transition-transform group-hover:scale-110">
                <Phone size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest leading-none mb-1">
                  Have Any Questions?
                </span>
                <a href={`tel:${siteConfig.contact.phone}`} className="text-xl font-black text-secondary leading-none">
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>

            {/* Social Icon Placeholder */}
            <div className="flex items-center justify-center py-8 md:py-10 group">
            </div>

            {/* Newsletter CTA */}
            <div className="flex items-center justify-between py-8 md:py-10 px-8 group bg-primary/5">
              <div className="flex flex-col">
                <span className="text-lg font-black text-secondary leading-none mb-1">
                  Subscribe
                </span>
                <span className="text-xs text-muted-foreground italic">
                  To get updates
                </span>
              </div>
              <button className="text-primary hover:text-secondary transition-colors">
                <SendHorizontal size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Link Grid */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          {/* Column 1 (Wide) */}
          <div className="md:col-span-6 lg:col-span-5 space-y-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-2 group">
              <div className="bg-secondary text-secondary-foreground h-12 w-12 flex items-center justify-center rounded-xl font-black text-2xl shadow-xl transition-transform group-hover:rotate-6">
                T
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-2xl text-secondary leading-none tracking-tighter">
                  TARAJ
                </span>
                <span className="font-sans font-bold text-[10px] text-primary tracking-[0.4em] leading-none mt-1 uppercase">
                  Consultancy
                </span>
              </div>
            </div>
            
            <p className="text-muted-foreground max-w-md mx-auto md:mx-0">
              {siteConfig.description}
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3 group text-muted-foreground">
                <div className="h-10 w-10 rounded-lg bg-surface border border-border flex items-center justify-center group-hover:text-primary transition-colors shadow-sm">
                  <Mail size={18} />
                </div>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-sm font-bold group-hover:text-secondary transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3 group text-muted-foreground">
                <div className="h-10 w-10 rounded-lg bg-surface border border-border flex items-center justify-center group-hover:text-primary transition-colors shadow-sm">
                  <Building2 size={18} />
                </div>
                <span className="text-sm font-bold">
                  {siteConfig.contact.address}
                </span>
              </div>
            </div>
          </div>

          {/* Column 2 (Narrow) */}
          <div className="md:col-span-3 lg:col-span-3 text-center md:text-left">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-secondary mb-10">
              Page Links
            </h3>
            <ul className="space-y-4">
              {navConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-muted-foreground hover:text-primary text-sm font-bold transition-colors flex items-center justify-center md:justify-start gap-2 group"
                  >
                    <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 (Narrow) */}
          <div className="md:col-span-3 lg:col-span-4 text-center md:text-left">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-secondary mb-10">
              Services
            </h3>
            <ul className="space-y-4">
              {["General Insurance", "Medical Insurance", "Corporate Advisory", "Life Insurance", "Premium Financing"].map((service) => (
                <li key={service}>
                  <Link 
                    href="/services" 
                    className="text-muted-foreground hover:text-primary text-sm font-bold transition-colors flex items-center justify-center md:justify-start gap-2 group"
                  >
                    <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="border-t border-border py-8 relative z-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">
          <p>© {new Date().getFullYear()} {siteConfig.name} | All Rights Reserved</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policies</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
