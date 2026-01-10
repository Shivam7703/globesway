// app/about-us/page.tsx
import { about1 } from "@/assets";
import Aboutchoose from "@/components/about/choose";
import Counter from "@/components/about/counter";
import Mission from "@/components/about/mission";
import Section1 from "@/components/about/section1";
import AllBanner from "@/components/banner";
import Team from "@/components/home/ourTeam";
import React from "react";
import { Metadata } from "next";
import Aboutsec2 from "@/components/about/section2";

export const metadata: Metadata = {
  title: "About Us - Globesway Immigration Consultant",
  description:
    "Globesway Immigration, top consultants in Delhi, offers expert visa guidance, high success rates, and complete support for your global journey.",
  keywords:
    "Immigration, Visa, Best immigration consultants in Delhi, Visa consultants, PR Visa, Student Visa",
  alternates: {
    canonical: "https://globeswayimmigration.com/about-us",
  },
  openGraph: {
    title: "About Us - Globesway Immigration Consultant",
    description:
      "Globesway Immigration, top consultants in Delhi, offers expert visa guidance, high success rates, and complete support for your global journey.",
    url: "https://globeswayimmigration.com/about-us",
    siteName: "Globesway Immigration",
    images: [
      {
        url: "https://globeswayimmigration.com/default.webp",
        width: 1200,
        height: 630,
        alt: "Globesway Immigration",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
  other: {
    author: "Globesway Immigration",
    "theme-color": "#0d3b66",
  },
};

function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Globesway Immigration",
    url: "https://globeswayimmigration.com",
    logo: {
      "@type": "ImageObject",
      url: "https://globeswayimmigration.com/logo.webp",
    },
    sameAs: [
      "https://www.facebook.com/globeswayimmigration",
      "https://www.instagram.com/globeswayimmigration/",
      "https://www.linkedin.com/company/globesway-immigration/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-92202 92921",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: "en",
    },
  };

  return (
    <>
      <AllBanner
        img={about1}
        title="About Us"
        slug="about-us"
        para="Globesway Immigration is among the best immigration consultants in Delhi, guiding individuals and families with expert visa services and global opportunities."
      />
      <Section1 />
      <Aboutsec2 />
      <Mission />
      <Aboutchoose />
      <Counter />
      <Team />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
}

export default Page;
