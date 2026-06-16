import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Clock, Mail } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-blue-dark text-white py-2 px-4 text-xs font-medium">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-blue-primary" />
            <span>{siteConfig.contact.hours}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-blue-primary" />
            <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-blue-primary transition-colors">
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
