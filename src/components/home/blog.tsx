"use client";
import { blogsData as data } from "@/data/blogData";
// Import Swiper styles

import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
  return (
    <section className="ser-bg lg:px-28 md:px-20 sm:p-10 p-7  text-center ">
      <h4 className="text-color1 mx-auto font-medium text-lg w-max">
        Our Blogs
      </h4>
      <h2 className="text-zinc-800 font-extrabold text-3xl md:text-5xl max-w-2xl mx-auto mt-3 !leading-[1.1]">
        Stay Updated with Our Latest News and Blogs
      </h2>
      <div className=" md:mt-11 mt-4 flex justify-between flex-wrap items-center gap-y-7">
        {data?.map((cards: any) => (
          <div
            key={cards.id}
            className="lg:w-[30%] sm:w-[48%] w-full relative overflow-hidden group"
          >
            {" "}
            <Link
              href={`blogs/${cards.title.replace(/\s+/g, "-").toLowerCase()}`}
            >
              <Image
                src={cards.img}
                alt=""
                className=" duration-500 w-full h-44 md:h-72 object-cover group-hover:scale-110 -z-10"
              />

              <div className="py-3 sticky w-[95%] -mt-14 text-left px-4 h-full bg-white text-black z-30">
                <p className="text-base font-medium text-color1 pb-3 border-b">
                  {cards.date}
                </p>

                <h3 className="text-lg font-semibold font1">
                  {cards.title.slice(0, 33)}...
                </h3>

                <p className="text-zinc-600 mb-2">
                  {cards?.desc[0]?.para[0].text.slice(0, 96)}...
                </p>
                <Link
                  href={`blogs/${cards.title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                  className=" text-color1 hover:text-color2 text-center border-color2 hover:border-b"
                >
                  Read More
                </Link>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
