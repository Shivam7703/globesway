// app/visa/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { about1 } from "@/assets";
import AllBanner from "@/components/banner";
import { visas } from "@/data/visa";
import React from "react";
import Visadetails from "@/components/visa/visa-detail";

interface PageProps {
  params: {
    slug: string;
  };
}

// Helper function to create consistent SEO-friendly slugs
const createSlug = (title: string): string => {
  return title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // convert spaces & all symbols to "-"
    .replace(/^-+|-+$/g, ""); // remove leading/trailing "-"
};

// Generate static params for all visas
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return visas.map((visa: any) => ({
    slug: createSlug(visa.title),
  }));
}

// Dynamic metadata per visa
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const decodedSlug = createSlug(decodeURIComponent(params.slug));

  const singleVisa = visas.find(
    (visa: any) => createSlug(visa.title) === decodedSlug
  );

  if (!singleVisa) {
    return {
      title: "Visa Not Found | Globesway Immigration",
      description: "The requested visa details could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const pageUrl = `https://globeswayimmigration.com/visa/${decodedSlug}`;

  // Handle image (works for both string paths & Next.js imported images)
  const imageUrl =
    typeof singleVisa.img === "string"
      ? `https://globeswayimmigration.com${singleVisa.img}`
      : "https://globeswayimmigration.com/default.webp";

  return {
    title: singleVisa.metaTitle || singleVisa.title,
    description:
      singleVisa.metaDesc ||
      `${singleVisa.title} visa guidance and expert support from Globesway Immigration.`,
    keywords: singleVisa.metaKey || "Visa, Immigration, PR Visa, Study Visa",
    alternates: {
      canonical: pageUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: singleVisa.metaTitle || singleVisa.title,
      description: singleVisa.metaDesc || "",
      url: pageUrl,
      siteName: "Globesway Immigration",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: singleVisa.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: singleVisa.metaTitle || singleVisa.title,
      description: singleVisa.metaDesc || "",
      images: [imageUrl],
    },
  };
}

export default function VisaPage({ params }: PageProps) {
  // Normalize slug from URL
  const decodedSlug = createSlug(decodeURIComponent(params.slug));

  // Find visa by slug
  const singleVisa = visas.find(
    (visa: any) => createSlug(visa.title) === decodedSlug
  );

  if (!singleVisa) {
    notFound();
  }

  const pageUrl = `https://globeswayimmigration.com/visa/${decodedSlug}`;
  const imageUrl =
    typeof singleVisa.img === "string"
      ? `https://globeswayimmigration.com${singleVisa.img}`
      : "https://globeswayimmigration.com/default.webp";

  // Structured data for visa service
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: singleVisa.title,
    description:
      singleVisa.metaDesc ||
      `${singleVisa.title} visa guidance and expert support from Globesway Immigration.`,
    provider: {
      "@type": "Organization",
      name: "Globesway Immigration",
      url: "https://globeswayimmigration.com",
    },
    url: pageUrl,
    image: imageUrl,
    offers: {
      "@type": "Offer",
      description: `Professional ${singleVisa.title} consultation and application support`,
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
        name: "Visa Services",
        item: "https://globeswayimmigration.com/visa",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: singleVisa.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <main>
        <AllBanner
          img={about1}
          title={singleVisa.title}
          slug={`visa/${createSlug(singleVisa.title)}`}
        />
        <Visadetails data={singleVisa} />
      </main>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
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
