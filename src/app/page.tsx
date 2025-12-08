// app/page.tsx
import { Metadata } from "next";
import AboutSection from "@/components/home/AboutSection";
import Blogs from "@/components/home/blog";
import ChooseCountry from "@/components/home/choosecountry";
import CoachingOffer from "@/components/home/cochingOffer";
import CountDown from "@/components/home/countDown";
import FaqSection from "@/components/home/faq";
import Latestupdate from "@/components/home/latestupdate";
import OurProcess from "@/components/home/ourProcess";
import Team from "@/components/home/ourTeam";
import Services from "@/components/home/services";
import Testimonials from "@/components/home/testimonial";
import Whychoose from "@/components/home/whychoose";
import React from "react";
import Success1 from "@/components/succes-story/success1";
import HomeBanner from "@/components/home/HomeBanner";
import Stamp from "@/components/succes-story/stamp";
import Itc from "@/components/succes-story/itc";
import { getBlogs } from "@/lib/getBlogs";

export const metadata: Metadata = {
  title: "Best Immigration Consultants in Delhi | Visa Services",
  description:
    "Globesway Immigration offers expert visa services for PR, work, study, spouse, and tourist visas. Trusted consultants in Delhi with 99% success.",
  keywords:
    "Visa, Work Permit, Work Visa, Tourist Visa, Best immigration consultants in Delhi",
  alternates: {
    canonical: "https://globeswayimmigration.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Best Immigration Consultants in Delhi | Visa Services",
    description:
      "Globesway Immigration offers expert visa services for PR, work, study, spouse, and tourist visas. Trusted consultants in Delhi with 99% success.",
    url: "https://globeswayimmigration.com/",
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
    title: "Best Immigration Consultants in Delhi | Visa Services",
    description:
      "Globesway Immigration offers expert visa services for PR, work, study, spouse, and tourist visas. Trusted consultants in Delhi with 99% success.",
    images: ["https://globeswayimmigration.com/default.webp"],
  },
};

export default async function Home() {
  const allBlogs = await getBlogs();

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
      <main>
        <HomeBanner />
        <Latestupdate />
        <AboutSection />
        <Services />
        <CountDown />
        <ChooseCountry />
        <OurProcess />
        <Whychoose />
        <CoachingOffer />
        <FaqSection />
        <Testimonials />
        <Success1 isHome={true} />
        <Stamp />
        <Itc />
        <Team />
        <Blogs data={allBlogs} isHome={true} currentPage={1} itemsPerPage={12}/>
      </main>

      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
}
