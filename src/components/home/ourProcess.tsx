"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { workingProcess as data } from "@/data/homeData";
import Link from "next/link";

export default function OurProcess() {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="lg:px-28 md:px-20 sm:p-14  px-7 py-11 max-w-[1580px] mx-auto flex flex-wrap relative justify-between gap-y-7 bg-white"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.3, 1)}
        className="sm:w-[45%] sm:sticky top-14 left-0 w-full h-full sm:pb-14 space-y-7 "
      >
        {data?.title1 && (
          <h4 className="text-color1 font-medium text-lg w-max">
            {data?.title1}
          </h4>
        )}
        <h2 className="text-zinc-800 font-extrabold text-3xl md:text-5xl !leading-[1.1]">
          {data?.title2}{" "}
        </h2>
        <p className="font-medium text-zinc-600">{data.para}</p>

        <div className="w-max">
          <Link
            href={"/"}
            className="flex gap-2 p-2 text-white border rounded-[28px] group relative bg-gradient-to-l from-red-900 to-color1 overflow-hidden  h-full"
          >
            <p className="mx-5 font-semibold font1 text-sm md:text-base z-20">
              Get Free Consulting {">"}
            </p>
            <div className="group-hover:w-full duration-300 h-full bg-gradient-to-l from-blue-900 to-color2 absolute z-10 w-0 top-0 right-0"></div>
          </Link>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.3, 1)}
        className="sm:w-[49%] w-full space-y-7 relative"
      >
        <div className="space-y-7 md:space-y-10">
          {data?.steps?.map((item: any) => (
            <div key={item.id} className="flex gap-4 sm:gap-8 sm:p-9 p-6 bg-zinc-100 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center max-w-12 justify-center -rotate-90 gap-3 text-color1">
                <p className="font-medium">STEPS</p>{" "}
                <h3 className="md:text-4xl font-bold text-2xl">0{item.id}</h3>{" "}
              </div>
              <div>
                <h2 className="text-black text-xl  md:text-2xl font-semibold mb-2 sm:mb-4">{item.name}</h2>
                <p className="leading-relaxed text-zinc-500">{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
