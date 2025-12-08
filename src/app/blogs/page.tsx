import { Metadata } from "next";
import { about1 } from "@/assets";
import AllBanner from "@/components/banner";
import BlogsClient from "@/components/blogs/BlogsClient";
import { getBlogs } from "@/lib/getBlogs";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Stay Updated with our Latest News & Blogs",
  description:
    "Explore our latest news, trending blogs, and expert insights. Stay informed with fresh updates to keep you ahead in knowledge and ideas.",
  keywords:
    "Immigration Blogs, Visa News, Study Abroad Articles, PR Visa Updates, Globesway Immigration Blogs",
  alternates: {
    canonical: "https://globeswayimmigration.com/blogs",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Stay Updated with our Latest News & Blogs",
    description:
      "Explore our latest news, trending blogs, and expert insights. Stay informed with fresh updates to keep you ahead in knowledge and ideas.",
    url: "https://globeswayimmigration.com/blogs",
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
};

export default async function BlogsPage() {
  const allBlogs = await getBlogs();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    url: "https://globeswayimmigration.com/blogs",
    name: "Globesway Immigration Blogs",
    description:
      "Explore our latest news, trending blogs, and expert insights on immigration, visas, and global opportunities.",
    publisher: {
      "@type": "Organization",
      name: "Globesway Immigration",
      url: "https://globeswayimmigration.com",
      logo: {
        "@type": "ImageObject",
        url: "https://globeswayimmigration.com/logo.webp",
      },
    },
  };

  return (
    <>
      <main>
        <h1 className="hidden">Stay Updated with Our Latest News and Blogs</h1>
        <AllBanner
          img={about1}
          title="Blogs"
          slug="blogs"
          para="Stay informed with Globesway Immigration blogs—covering the latest visa updates, immigration trends, and expert insights to guide your global journey."
        />

        {/* Wrap Client Component in Suspense */}
        <Suspense fallback={
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-color1"></div>
          </div>
        }>
          <BlogsClient allBlogs={allBlogs} />
        </Suspense>
      </main>

      {/* JSON-LD Schema for Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}