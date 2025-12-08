// components/blogs/BlogsClient.tsx
"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Blogs from "@/components/home/blog";
import Link from "next/link";

export default function BlogsClient({ allBlogs }: { allBlogs: any[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const itemsPerPage = 12;
  
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allBlogs.length / itemsPerPage);

  // Sync with URL on mount and when searchParams change
  useEffect(() => {
    const page = Number(searchParams.get("page")) || 1;
    setCurrentPage(page);
  }, [searchParams]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    router.push(`/blogs?page=${page}`, { scroll: false });
  };

  return (
    <>
      {/* Blogs List */}
      <Blogs 
        data={allBlogs} 
        isHome={false} 
        currentPage={currentPage} 
        itemsPerPage={itemsPerPage} 
      />

      {/* Pagination - Only show if there's more than 1 page */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-3 pb-8">
          {Array.from({ length: totalPages }, (_, idx) => {
            const page = idx + 1;
            return (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 border rounded ${
                  page === currentPage
                    ? "bg-color1 text-white"
                    : "bg-white text-black hover:bg-color2 hover:text-white"
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>
      )}
    </>
  );
}