// app/career/page.tsx
import { about1 } from "@/assets";
import AllBanner from "@/components/banner";
import Careerfaq from "@/components/career/careerFaq";
import OpenRole from "@/components/career/openRole";
import Careersec1 from "@/components/career/section1";
import Team from "@/components/home/ourTeam";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immigration Careers at Globesway | Join Our Team",
  description:
    "Career opportunities at Globesway Immigration. Join as a consultant, visa officer, or HR professional and grow in the global immigration field.",
  keywords:
    "Immigration, Careers, Visa Jobs, Immigration Jobs, HR, Visa Consultant Jobs",
  alternates: {
    canonical: "https://globeswayimmigration.com/career",
  },
  openGraph: {
    title: "Immigration Careers at Globesway | Join Our Team",
    description:
      "Career opportunities at Globesway Immigration. Join as a consultant, visa officer, or HR professional and grow in the global immigration field.",
    url: "https://globeswayimmigration.com/career",
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
  twitter: {
    card: "summary_large_image",
    title: "Immigration Careers at Globesway | Join Our Team",
    description:
      "Career opportunities at Globesway Immigration. Join as a consultant, visa officer, or HR professional and grow in the global immigration field.",
    images: ["https://globeswayimmigration.com/default.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    author: "Globesway Immigration",
    "theme-color": "#0d3b66",

    // ⭐ ADDED JSON-LD SCHEMA INSIDE HEAD ⭐
    "script:ld+json": JSON.stringify({
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
    }),
  },
};

function Page() {
  return (
    <>
      <AllBanner
        img={about1}
        title="Career"
        slug="career"
        para="Explore career opportunities at Globesway Immigration. Join our team and build a rewarding career in global immigration services."
      />
      <Careersec1 />
      <OpenRole />
      <Careerfaq />
      <Team />
    </>
  );
}

export default Page;
