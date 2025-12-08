// app/blogs/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { about1 } from "@/assets";
import AllBanner from "@/components/banner";
import { getBlogs } from "@/lib/getBlogs";
import React from "react";
import Blogdetails from "@/components/blogs/blog-detail";

interface PageProps {
  params: {
    slug: string;
  };
}

// Helper function to create consistent slugs
const createSlug = (title: string): string => {
  return title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

// Generate static paths for blogs
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const blogsData = await getBlogs();
  return blogsData.map((blog: any) => ({
    slug: createSlug(blog.title),
  }));
}

// Dynamic metadata per blog
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
    const blogsData = await getBlogs();
  const decodedSlug = createSlug(decodeURIComponent(params.slug));
  const singleBlog = blogsData.find(
    (blog: any) => createSlug(blog.title) === decodedSlug
  );

  if (!singleBlog) {
    return {
      title: "Blog Not Found | Globesway Immigration",
      description: "The requested blog article could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const pageUrl = `https://globeswayimmigration.com/blogs/${decodedSlug}`;

  const imageUrl =
    typeof singleBlog.img === "string"
      ? `https://globeswayimmigration.com/backend/uploads${singleBlog.img}`
      : "https://globeswayimmigration.com/default.webp";

  return {
    title: singleBlog.metaTitle || singleBlog.title,
    description: singleBlog.metaDesc || "",
    keywords: singleBlog.metaKey || "",
    alternates: {
      canonical: pageUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: singleBlog.metaTitle || singleBlog.title,
      description: singleBlog.metaDesc || "",
      url: pageUrl,
      siteName: "Globesway Immigration",
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: singleBlog.title,
        },
      ],
    },
  };
}

export default async function BlogPage({ params }: PageProps) {
  const decodedSlug = createSlug(decodeURIComponent(params.slug));
  const blogsData = await getBlogs();
  const singleBlog = blogsData.find(
    (blog: any) => createSlug(blog.title) === decodedSlug
  );

  if (!singleBlog) {
    notFound();
  }

  const pageUrl = `https://globeswayimmigration.com/blogs/${decodedSlug}`;
  const imageUrl =
    typeof singleBlog?.img === "string"
      ? `https://globeswayimmigration.com${singleBlog.img}`
      : "https://globeswayimmigration.com/default.webp";

  const currentDate = new Date().toISOString();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: singleBlog?.title,
    description:
      singleBlog?.metaDesc ||
      `Read about ${singleBlog?.title} on Globesway Immigration blog. Expert insights on immigration, visa processes, and more.`,
    url: pageUrl,
    image: {
      "@type": "ImageObject",
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    author: {
      "@type": "Organization",
      name: "Globesway Immigration",
      url: "https://globeswayimmigration.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Globesway Immigration",
      logo: {
        "@type": "ImageObject",
        url: "https://globeswayimmigration.com/logo.webp",
      },
      url: "https://globeswayimmigration.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    datePublished: (singleBlog as any)?.date || currentDate,
    dateModified: (singleBlog as any)?.date || currentDate,
    articleSection: "Immigration",
    keywords:
      singleBlog?.metaKey?.split(",").map((k: string) => k.trim()) || [],
    inLanguage: "en",
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
        name: "Blog",
        item: "https://globeswayimmigration.com/blogs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: singleBlog?.title,
        item: pageUrl,
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Globesway Immigration",
    url: "https://globeswayimmigration.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://globeswayimmigration.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <main>
        <AllBanner
          img={about1}
          title={singleBlog?.title}
          slug={`blogs/${createSlug(singleBlog?.title)}`}
        />
        <Blogdetails data={singleBlog} />
      </main>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
