import { about1 } from '@/assets';
import AllBanner from '@/components/banner';
import Visadetails from '@/components/visa/visa-detail';
import { visas } from '@/data/visa';
import { notFound } from 'next/navigation';
import React from 'react';

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
  return visas.map((visa: any) => {
    const slug = createSlug(visa.title);
    return { slug };
  });
}

const Page = ({ params }: Props) => {
  // Decode and normalize the slug from URL
  const decodedSlug = decodeURIComponent(params.slug).trim()
    .replace(/\s+/g, '-')
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '');
  
  // Find the visa by comparing normalized slugs
  const singleVisa = visas.find((visa: any) => {
    const visaSlug = createSlug(visa.title);
    return visaSlug === decodedSlug;
  });

  if (!singleVisa) {
    notFound();
  }

  return (
    <>
      <AllBanner 
        img={about1}
        title={singleVisa.title} 
        slug={`visa/${singleVisa.title}`} 
      />
      <Visadetails data={singleVisa} />
    </>
  );
};

export default Page;