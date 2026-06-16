import { PageHero } from "@/components/layout/page-hero";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Taraj Consulting Ltd for expert insurance advisory, quotes, and support in Nairobi, Kenya.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero 
        title="Contact Us"
        subtitle="GET IN TOUCH"
        description="Have any questions? We are here to help you find the best insurance coverage for your needs."
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Let&apos;s Talk</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you&apos;re looking for a quote, have a question about your policy, 
                  or need help with a claim, our team is ready to assist you.</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-xl">Phone</h3>
                  <p className="text-muted-foreground">
                    <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-primary transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-xl">Email</h3>
                  <p className="text-muted-foreground">
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-xl">Office</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {siteConfig.contact.address}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-xl">Working Hours</h3>
                  <p className="text-muted-foreground">
                    {siteConfig.contact.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-muted p-8 md:p-12 rounded-3xl border">
              <h2 className="text-2xl font-bold mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Your Full Name</label>
                    <Input id="name" placeholder="John Doe" className="bg-white rounded-xl h-12" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">E-mail Address</label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-white rounded-xl h-12" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" placeholder="General Inquiry" className="bg-white rounded-xl h-12" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Question Here</label>
                  <Textarea id="message" placeholder="How can we help you?" className="bg-white rounded-xl min-h-[150px] resize-none" required />
                </div>
                
                <Button type="submit" className="w-full h-14 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all">
                  Submit Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full relative overflow-hidden bg-background">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.810565863923!2d36.80481237586561!3d-1.2878051356345472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d0f2526e95%3A0x6b2e3f56e9c1e7a!2sKabarnet%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1718545000000!5m2!1sen!2ske"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Taraj Consulting Ltd Office Location"
          className="filter grayscale contrast-125 opacity-80 hover:opacity-100 transition-opacity duration-500"
        ></iframe>
      </section>
    </>
  );
}
