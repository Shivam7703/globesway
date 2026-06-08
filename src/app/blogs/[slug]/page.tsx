// app/blogs/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { about1 } from "@/assets";
import AllBanner from "@/components/banner";
import { getBlogs } from "@/lib/getBlogs";
import { Blog } from "@/lib/getBlogs"; // ✅ import Blog type
import React from "react";
import Blogdetails from "@/components/blogs/blog-detail";

// ✅ ISR — revalidate every 500s (matches getBlogs fetch revalidate)
export const revalidate = 2500;

interface PageProps {
  params: {
    slug: string;
  };
}

const createSlug = (title: string): string =>
  title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// ✅ Pre-generate all blog detail pages at build time
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const blogsData = await getBlogs();
  return blogsData.map((blog: Blog) => ({
    slug: createSlug(blog.title),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const blogsData = await getBlogs(); // ✅ deduplicated by Next.js cache
  const decodedSlug = createSlug(decodeURIComponent(params.slug));
  const singleBlog = blogsData.find(
    (blog: Blog) => createSlug(blog.title) === decodedSlug
  );

  if (!singleBlog) return {};

  const pageUrl = `https://globeswayimmigration.com/blogs/${decodedSlug}`;
  const imageUrl = singleBlog.img
    ? `https://globeswayimmigration.com/backend/uploads/${singleBlog.img}`
    : "https://globeswayimmigration.com/default.webp";

  return {
    title: singleBlog.metaTitle || singleBlog.title,
    description: singleBlog.metaDesc || "",
    keywords: singleBlog.metaKey || "",
    alternates: { canonical: pageUrl },
    robots: { index: true, follow: true },
    openGraph: {
      title: singleBlog.metaTitle || singleBlog.title,
      description: singleBlog.metaDesc || "",
      url: pageUrl,
      siteName: "Globesway Immigration",
      type: "article",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: singleBlog.imgAlt || singleBlog.title }],
    },
  };
}

export default async function BlogPage({ params }: PageProps) {
  const decodedSlug = createSlug(decodeURIComponent(params.slug));
  const blogsData = await getBlogs(); // ✅ deduplicated by Next.js cache
  const singleBlog = blogsData.find(
    (blog: Blog) => createSlug(blog.title) === decodedSlug
  );

  if (!singleBlog) notFound();

  const pageUrl = `https://globeswayimmigration.com/blogs/${decodedSlug}`;
  const imageUrl = singleBlog.img
    ? `https://globeswayimmigration.com/backend/uploads/${singleBlog.img}`
    : "https://globeswayimmigration.com/default.webp";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: singleBlog.title,
    description:
      singleBlog.metaDesc ||
      `Read about ${singleBlog.title} on Globesway Immigration blog.`,
    url: pageUrl,
    image: { "@type": "ImageObject", url: imageUrl, width: 1200, height: 630 },
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
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    datePublished: singleBlog.date || new Date().toISOString(),
    dateModified: singleBlog.date || new Date().toISOString(),
    articleSection: "Immigration",
    keywords: singleBlog.metaKey?.split(",").map((k: string) => k.trim()) || [],
    inLanguage: "en",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://globeswayimmigration.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://globeswayimmigration.com/blogs" },
      { "@type": "ListItem", position: 3, name: singleBlog.title, item: pageUrl },
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
        urlTemplate: "https://globeswayimmigration.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <main>
        <AllBanner
          img={about1}
          title={singleBlog.title}
          slug={`blogs/${createSlug(singleBlog.title)}`}
        />
        <Blogdetails data={singleBlog} />
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    </>
  );
}