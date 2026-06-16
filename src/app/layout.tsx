import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/lib/site";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: "#4DA6FF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Taraj Consulting Ltd | Protecting What Matters Most",
    template: "%s | Taraj Consulting Ltd",
  },
  description: "Comprehensive insurance solutions for individuals, families, and businesses in Kenya. Fast, simple, and 100% digital insurance advisory.",
  keywords: ["insurance Kenya", "medical insurance", "motor insurance", "life cover", "IPF", "Taraj Consulting"],
  authors: [{ name: "Taraj Consulting Ltd" }],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteConfig.url,
    siteName: "Taraj Consulting Ltd",
    title: "Taraj Consulting Ltd | Protecting What Matters Most",
    description: "Your trusted partner for insurance and financial protection in Kenya.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Taraj Consulting Ltd" }],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "telephone": siteConfig.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address,
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "openingHours": "Mo-Fr 08:00-16:00",
    "image": `${siteConfig.url}/og.jpg`,
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
