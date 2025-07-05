"use client";
import React from "react";
import Image from "next/image";
import { aboutchoose as data } from "@/data/homeData";
import { about1 } from "@/assets";

export default function Aboutchoose() {
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
          <p className="text-zinc-800 !leading-relaxed ">{data?.para}</p>
        )}

        <ul className="space-y-4 mb-4">
          {data?.points?.map((data: any) => (
            <li key={data.id} className="flex  gap-x-4 md:gap-x-8 pb-3">
              <div className="text-4xl md:text-5xl mt-2 text-color1">
                {data?.icon}
              </div>
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
      <div className="sm:w-[48%] w-full relative lg:h-[590px] sm:h-[770px] min-h-72 flex justify-between items-center ">
        <div
          className="hover14 h-[70%]
        w-[48%] "
        >
          {" "}
          <Image
            src={data?.img1}
            alt="FAQ"
            className="h-full w-full object-cover"
          />
        </div>

        <div
          className="h-full flex flex-col justify-between
        w-[48%] "
        >
          <div className="!h-[48%] hover14 overflow-hidden w-full">
            <Image
              src={data?.img2}
              alt="FAQ"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="!h-[48%] hover14 overflow-hidden w-full">
            <Image
              src={data?.img3}
              alt="FAQ"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

         <div className='absolute text-white py-3 px-5 animate-bounce bg-color1 -left-4  bottom-0 z-[200] shadow-xl'> <h5 className='text-3xl md:text-5xl font-bold'>10k+</h5>
                 <p className='text-md md:text-xl mt-2'>Trusted Customer</p></div>
      </div>
    </section>
  );
}
