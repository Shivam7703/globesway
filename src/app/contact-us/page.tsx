// app/contact-us/page.tsx
import { Metadata } from "next";
import { about1 } from "@/assets";
import AllBanner from "@/components/banner";
import Form from "@/components/contact/form";
import Contactsec1 from "@/components/contact/section1";
import React from "react";

export const metadata: Metadata = {
  title: "Connect with Globesway Immigration Experts",
  description:
    "Reach out to Globesway Immigration for expert guidance on PR, study abroad, and visas. Get quick answers and start your immigration journey today.",
  keywords:
    "Globesway Immigration, Contact Globesway, Immigration Consultants, Contact Immigration Expert, Immigration Help",
  alternates: {
    canonical: "https://globeswayimmigration.com/contact-us",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Connect with Globesway Immigration Experts",
    description:
      "Reach out to Globesway Immigration for expert guidance on PR, study abroad, and visas. Get quick answers and start your immigration journey today.",
    url: "https://globeswayimmigration.com/contact-us",
    siteName: "Globesway Immigration",
    images: [
      {
        url: "https://globeswayimmigration.com/logo.webp",
        width: 1200,
        height: 630,
        alt: "Globesway Immigration Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect with Globesway Immigration Experts",
    description:
      "Reach out to Globesway Immigration for expert guidance on PR, study abroad, and visas. Get quick answers and start your immigration journey today.",
    images: ["https://globeswayimmigration.com/logo.webp"],
  },
};

export default function ContactPage() {
  const pageUrl = "https://globeswayimmigration.com/contact-us";

  // ContactPage schema markup
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: pageUrl,
    name: "Contact Globesway Immigration",
    description:
      "Contact Globesway Immigration experts for assistance with PR, study abroad, work visas, and immigration services.",
    mainEntity: {
      "@type": "Organization",
      name: "Globesway Immigration",
      url: "https://globeswayimmigration.com",
      logo: {
        "@type": "ImageObject",
        url: "https://globeswayimmigration.com/logo.webp",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-92202 92921",
          contactType: "customer support",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
          contactOption: "TollFree",
        },
        {
          "@type": "ContactPoint",
          email: "info@globeswayimmigration.com",
          contactType: "customer support",
          areaServed: "IN",
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        addressLocality: "Delhi",
        addressRegion: "Delhi",
      },
      sameAs: [
        "https://www.facebook.com/globeswayimmigration",
        "https://www.instagram.com/globeswayimmigration",
        "https://www.linkedin.com/company/globeswayimmigration",
      ],
    },
  };

  // LocalBusiness schema for better local SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Globesway Immigration",
    description: "Professional immigration consultancy services",
    url: "https://globeswayimmigration.com",
    telephone: "+91-92202 92921",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: "Delhi",
      addressRegion: "Delhi",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.7041",
      longitude: "77.1025",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    serviceArea: {
      "@type": "Country",
      name: "India",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://globeswayimmigration.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact Us",
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <main>
        <AllBanner img={about1} title="Contact Us" slug="contact-us" />
        <Contactsec1 />
        <Form />
      </main>

      {/* JSON-LD Structured Data - Contact Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      {/* JSON-LD Structured Data - Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
