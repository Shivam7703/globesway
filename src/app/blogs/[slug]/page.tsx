import { about1 } from '@/assets';
import AllBanner from '@/components/banner';
import { notFound } from 'next/navigation';
import {blogsData} from '@/data/blogData';
import React from 'react';
import Visadetails from '@/components/visa/visa-detail';

type Props = {
  params: {
    slug: string;
  };
};

// Helper function to create consistent slugs
const createSlug = (title: string): string => {
  return title
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, ''); // Remove any special characters except hyphens
};

export async function generateStaticParams() {
  return blogsData.map((blog: any) => {
    const slug = createSlug(blog.title);
    return { slug };
  });
}

const Page = ({ params }: Props) => {
  // Decode and normalize the slug from URL
  const decodedSlug = decodeURIComponent(params.slug).trim()
    .replace(/\s+/g, '-')
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '');
  
  // Find the blog by comparing normalized slugs
  const singleblog = blogsData.find((blog: any) => {
    const blogSlug = createSlug(blog.title);
    return blogSlug === decodedSlug;
  });

  if (!singleblog) {
    notFound();
  }

  return (
    <>
      <AllBanner 
        img={about1}
        title={singleblog.title} 
        slug={`blogs/${singleblog.title}`} 
      />
      <Visadetails data={singleblog} />
    </>
  );
};

export default Page;