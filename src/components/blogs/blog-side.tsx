import { about2 } from "@/assets";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { MdArrowCircleRight } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import { getBlogs } from "@/lib/getBlogs";

const data = [
  {
    id: 1,
    title: "Canada PR Visa",
    href: "/visa/canada-pr-visa",
  },
  {
    id: 2,
    title: "Australia PR Visa",
    href: "/visa/australia-pr-visa",
  },
  {
    id: 3,
    title: "Dubai Work Visa",
    href: "/visa/dubai-work-visa",
  },
  {
    id: 4,
    title: "Qatar Tourist Visa",
    href: "/visa/qatar-tourist-visa",
  },
  {
    id: 5,
    title: "Croatia Work Visa",
    href: "/visa/croatia-work-visa",
  },
  {
    id: 6,
    title: "Luxembourg Work Visa",
    href: "/visa/luxembourg-work-visa",
  },
];



async function BlogAside() {
  const blogsData = await getBlogs();
  const latestBlogs = blogsData.slice(0, 3); // Get first 3 blogs

  const createSlug = (title: string): string =>
    title
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");


  return (
    <div className="space-y-6">
      {/* Other Visa Categories Section */}
      <div className="font-medium bg-gradient-to-br from-zinc-50 to-zinc-100 p-5 md:p-9 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-zinc-200">
        <div className="mb-5">
          <h4 className="md:text-2xl text-xl text-black font-bold font2">
            Other Visa Categories
          </h4>
        </div>
        <ul className="space-y-2.5">
          {data?.map((service) => (
            <li
              key={service?.id}
              className="w-full bg-white group rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Link
                title="Best immigration consultants in Delhi"
                className="flex items-stretch"
                href={service?.href}
              >
                <div className="pt-5 px-2 bg-zinc-200 text-zinc-700 group-hover:text-white group-hover:bg-black group-hover:px-4 duration-300 transition-all flex items-start">
                  <FaChevronRight className="text-sm" />
                </div>
                <p className="p-4 w-full group-hover:text-white group-hover:bg-color1 text-zinc-800 duration-300 transition-all font-medium">
                  {service?.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Latest Blogs Section */}
      <div className="font-medium bg-gradient-to-br from-zinc-50 to-zinc-100 p-5 md:p-9 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100">
        <div className=" mb-5">
          <h4 className="md:text-2xl text-xl text-black font-bold font2">
            Latest Blogs
          </h4>
        </div>
        <div className="space-y-3">
          {latestBlogs.map((blog: any, index: number) => (
            <Link
              key={blog?.id || index}
              href={`/blogs/${createSlug(blog.title)}`}
              title={blog?.title}
              className="block group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
                <div className="flex gap-3 p-3">
                  {/* Blog Image */}
                  <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={`https://globeswayimmigration.com/backend/uploads/${blog?.img}`}
                      alt={blog?.imgAlt || blog?.title}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Blog Content */}
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <h5 className="text-sm font-semibold text-zinc-900 line-clamp-2 leading-tight group-hover:text-color1 transition-colors duration-300">
                      {blog?.title}
                    </h5>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs text-gray-600 font-medium">
                        Read More
                      </span>
                      <FaChevronRight className="text-xs text-color1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Contact Support Section */}
      <div className="lg:h-[520px] relative md:h-96 h-72 w-full group rounded-3xl overflow-hidden shadow-2xl">
        <Image
          title="Best immigration consultants in Delhi"
          src={about2}
          alt="Best immigration consultants in Delhi"
          className="w-full h-full object-cover absolute z-10 top-0 left-0 group-hover:scale-110 duration-500 transition-transform"
          width={400}
          height={520}
        />
        
        {/* Enhanced gradient overlay */}
        
        <div className="absolute z-20 w-full  bg-gradient-to-t from-black via-black/50 to-black/0 group-hover:backdrop-blur-none backdrop-blur-sm p-8 md:p-10 flex text-white items-end h-full top-0 left-0">
          <div className="space-y-3 transform group-hover:translate-y-0 translate-y-1 transition-transform duration-300">
            {/* Badge */}
              <h4 className="text-xs font-extrabold text-white tracking-wide">
                NEED HELP!
              </h4>
            
            <h2 className="sm:text-4xl text-3xl font-bold leading-tight">
              Contact Support
            </h2>
            
            <p className="text-sm leading-relaxed text-gray-100 max-w-sm">
              Contact our support team of friendly people and request fast
              assistance and professional advice concerning visas and travel
              plans.
            </p>

            <Link
              title="Best immigration consultants in Delhi"
              href={"/contact-us"}
              className="inline-block pt-3"
            >
              <div className="flex gap-2 p-2 max-w-fit rounded-3xl text-black hover:text-white font-medium group/btn relative bg-white overflow-hidden items-center flex-row shadow-lg hover:shadow-2xl transition-all duration-300">
                <p className="ml-4 mr-1 font-semibold text-sm z-20">
                  Contact Now
                </p>
                <MdArrowCircleRight className="text-color1 text-3xl bg-white group-hover/btn:text-black  duration-300 rounded-full z-20" />

                <div className="group-hover/btn:w-full duration-300 h-full bg-gradient-to-r from-color1 to-color2 absolute z-10 w-0 top-0 left-0"></div>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BlogAside;