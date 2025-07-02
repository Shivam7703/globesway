"use client";
import { teamdata as data } from "@/data/homeData";

import Image from "next/image";

export default function Team() {
  return (
    <section className="lg:px-28 md:px-20 sm:p-16 p-7 text-center relative slider1 flex flex-col items-center">
      {data?.title1 && (
        <h4 className="text-color1 mx-auto font-medium text-lg w-max">
          {data?.title1}
        </h4>
      )}
      <h2 className="text-zinc-800 font-extrabold text-3xl md:text-5xl max-w-2xl mx-auto mt-3 !leading-[1.1]">
        {data?.title2}
      </h2>

      <div
        className={`flex gap-y-6 flex-wrap justify-between md:mt-16 mt-9 w-full`}
      >
        {data?.team?.map((cards: any) => (
          <div
            key={cards.id}
            className="lg:w-[23%] sm:w-[48%] text-center w-full group"
          >
            {/* Card Content */}
            <div className="w-full h-max overflow-hidden group-hover:rounded-t-[250px] duration-500 relative">
                <div className="w-full absolute bottom-0 left-0 h-0 group-hover:h-full bg-gradient-to-t from-color1 to-transparent duration-500"></div>
              <Image
                src={cards.img}
                alt="tour"
               className="transition-all duration-500 w-full object-contain h-auto"
              />
            </div>
<div className="px-5 py-3 text-left bg-zinc-100"><h5 className="text-zinc-500 font-medium md:text-lg">{cards?.para}</h5>
<h5 className="text-black font-bold md:text-2xl font1 text-xl">{cards?.name}</h5></div>
          </div>
        ))}
      </div>
    </section>
  );
}
