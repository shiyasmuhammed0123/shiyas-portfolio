import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CursorGlow from "@/components/CursorGlow";
import { profile } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteUrl = "https://shiyasvp.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | Digital Marketing Executive, SEO & GEO Specialist`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Muhammed Shiyas V P helps businesses dominate Google, AI search, and social media with performance-driven digital marketing, SEO, GEO, and AI-powered strategy.",
  keywords: [
    "Digital Marketer in Kerala",
    "SEO Specialist",
    "GEO Expert",
    "Social Media Marketing",
    "AI Marketing",
    "Performance Marketing",
    "Personal Branding",
    "Content Strategy",
    "Generative Engine Optimization",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} | Digital Marketing Executive, SEO & GEO Specialist`,
    description:
      "Performance-driven SEO, GEO, AI marketing, and social strategy that turns attention into measurable business growth.",
    siteName: profile.name,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Digital Marketing Executive`,
    description:
      "SEO, GEO, and AI-powered marketing strategy that turns attention into measurable growth.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Digital Marketing Executive",
    url: siteUrl,
    email: profile.email,
    sameAs: [profile.linkedin, profile.instagram],
    address: {
      "@type": "PostalAddress",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    knowsAbout: [
      "SEO",
      "Generative Engine Optimization",
      "Social Media Marketing",
      "Performance Marketing",
      "AI Marketing",
      "Personal Branding",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${profile.name} — Digital Marketing`,
    url: siteUrl,
    areaServed: "Worldwide",
    provider: { "@type": "Person", name: profile.name },
    serviceType: [
      "SEO",
      "Generative Engine Optimization",
      "Social Media Marketing",
      "Performance Marketing",
      "Personal Branding",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-bg text-text-primary antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <SmoothScrollProvider>
          <CursorGlow />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
