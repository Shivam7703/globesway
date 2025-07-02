"use client";
import React from "react";
import Image from "next/image";
import { whychoose as data } from "@/data/homeData";

export default function Whychoose() {
  return (
    <section className="lg:px-28 md:p-20 sm:p-12 p-7 max-w-[1580px] mx-auto flex items-stretch flex-wrap justify-between gap-y-7">
      <div className="sm:w-[48%]  w-full  space-y-4 md:space-y-7">
       {data?.title1 && (
                <h4 className="text-color1 font-medium text-lg w-max">
                  {data?.title1}
                </h4>
              )}
              <h2 className="text-zinc-800 font-extrabold text-3xl md:text-5xl !leading-[1.1]">
                {data?.title2}{" "}
              </h2>
        {data?.para && (
          <p className="text-zinc-800 !leading-relaxed ">
            {data?.para}
          </p>
        )}

        <ul className="space-y-4 mb-4">
          {data?.vision?.map((data :any) => (
            <li key={data.id} className="flex  gap-x-4 md:gap-x-8 pb-3">
              <div className="text-4xl md:text-5xl mt-2 text-color1">{data?.icon}</div>
              <div>
                <h5 className="font2 mb-1 md:text-xl text-lg  text-black">
                  {data.heading}
                </h5>
                <p className="text-zinc-500 !leading-snug ">{data.text}</p>
              </div>
            </li>
          ))}
        </ul>
      
      </div>
      <div
       
        className="sm:w-[48%] w-full min-h-96 relative"
      >
        {data?.img2 && (
          <Image
            src={data?.img2}
            alt="About"
            className=" rounded-2xl duration-300 absolute z-10 bottom-0 shadow-lg right-0 w-[80%] h-[95%] rounded-t-full   object-cover"
          />
        )}
        {data?.img && (
          <Image
            src={data?.img}
            alt="About"
            className=" rounded-2xl duration-300 absolute z-20 bottom-0 w-max -left-3 md:-left-7  h-[75%] object-contain "
          />
        )}
      </div>
    </section>
  );
}


