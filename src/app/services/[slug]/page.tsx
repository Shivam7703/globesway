// app/services/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { about1 } from "@/assets";
import AllBanner from "@/components/banner";
import { services } from "@/data/serviceData";
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
    .replace(/[^a-z0-9]+/g, "-") // replace spaces & symbols with "-"
    .replace(/^-+|-+$/g, ""); // remove leading/trailing "-"
};

// Generate static params for all services
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return services.map((service: any) => ({
    slug: createSlug(service.title),
  }));
}

// Dynamic metadata per service
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const decodedSlug = createSlug(decodeURIComponent(params.slug));

  const singleService = services.find(
    (service: any) => createSlug(service.title) === decodedSlug
  );

  if (!singleService) {
    return {};
  }

  const pageUrl = `https://globeswayimmigration.com/services/${decodedSlug}`;

  // Handle image (works for both string paths & Next.js imported images)
  const imageUrl =
    typeof singleService.img === "string"
      ? `https://globeswayimmigration.com${singleService.img}`
      : "https://globeswayimmigration.com/default.webp";

  return {
    title: singleService.metaTitle || singleService.title,
    description:
      singleService.metaDesc ||
      `${singleService.title} services offered by Globesway Immigration.`,
    keywords: singleService.metaKey || "Immigration, Visa, Services",
    alternates: {
      canonical: pageUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: singleService.metaTitle || singleService.title,
      description: singleService.metaDesc || "",
      url: pageUrl,
      siteName: "Globesway Immigration",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: singleService.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: singleService.metaTitle || singleService.title,
      description: singleService.metaDesc || "",
      images: [imageUrl],
    },
  };
}

export default function ServicePage({ params }: PageProps) {
  // Normalize slug from URL
  const decodedSlug = createSlug(decodeURIComponent(params.slug));

  // Find matching service
  const singleService = services.find(
    (service: any) => createSlug(service.title) === decodedSlug
  );

  if (!singleService) {
    notFound();
  }

  const pageUrl = `https://globeswayimmigration.com/services/${decodedSlug}`;
  const imageUrl =
    typeof singleService.img === "string"
      ? `https://globeswayimmigration.com${singleService.img}`
      : "https://globeswayimmigration.com/default.webp";

  // Structured data for service
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: singleService.title,
    description:
      singleService.metaDesc ||
      `${singleService.title} services offered by Globesway Immigration. Professional immigration and visa consultation services.`,
    provider: {
      "@type": "Organization",
      name: "Globesway Immigration",
      url: "https://globeswayimmigration.com",
      logo: "https://globeswayimmigration.com/logo.webp",
    },
    url: pageUrl,
    image: imageUrl,
    serviceType: "Immigration Services",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    offers: {
      "@type": "Offer",
      description: `Professional ${singleService.title} consultation and support services`,
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
        name: "Services",
        item: "https://globeswayimmigration.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: singleService.title,
        item: pageUrl,
      },
    ],
  };

  // FAQ Schema (if service has FAQ data)
  const faqSchema =
    (singleService as any).faqs && (singleService as any).faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: (singleService as any).faqs.map((faq: any) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <main>
        <AllBanner
          img={about1}
          title={singleService.title}
          slug={`services/${createSlug(singleService.title)}`}
        />
        <Visadetails data={singleService} />
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

      {/* FAQ Schema (if available) */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}
    </>
  );
}
