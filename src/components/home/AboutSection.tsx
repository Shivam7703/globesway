"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { aboutdata as data } from "@/data/homeData";

function AboutSection() {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="xl:px-32 lg:px-28 md:px-20 sm:p-12 px-7 py-11 max-w-[1530px] mx-auto flex flex-wrap items-stretch justify-between gap-y-7 bg-white overflow-hidden"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.3, 1)}
        className="sm:w-[45%] w-full min-h-[450px] relative  group"
      >
        <div className="space-y-7 relative h-full ">
          {data?.img1 && (
            <video
      src="https://globeswayimmigration.com/about.mp4"
      autoPlay
      loop
      muted 
        playsInline

      className="absolute bottom-0 left-0 h-[100%] w-[90%] object-contain"
    />
             
          )}
        </div>

        <div className="absolute py-3 px-5 border-l-4 border-color1 bg-white -right-2 bottom-1 shadow-xl">
          {" "}
          <h5 className="text-2xl md:text-4xl text-color1 font-bold">8+</h5>
          <p className="text-sm md:text-xl  text-zinc-800 ">
            Years of Experience
          </p>
        </div>
       
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.3, 1)}
        className="sm:w-[49%] w-full space-y-4"
      >
        {data?.title1 && (
          <h4 className="text-color1 font-medium text-lg w-max">
            {data?.title1}
          </h4>
        )}
        <h1 className="text-zinc-800 font-extrabold text-3xl md:text-5xl ">
          {data?.title2}{" "}
        </h1>

        {data?.para && (
          <p className="text-zinc-600 text-sm md:text-base">{data?.para}</p>
        )}

        {data?.success?.map((item: any) => (
          <div className="w-full" key={item?.id}>
            <div className="flex  font-medium justify-between mb-2">
              <h3 className="text-color1 text-base md:text-lg ">
                {item?.text}
              </h3>
              <p className="text-zinc-900 text-base md:text-lg">
                {item?.value}
              </p>
            </div>

            <div className="w-full rounded-full h-3 overflow-hidden bg-zinc-200">
              <motion.div
                variants={fadeIn("right", "tween", 0.8, 1.5)}
                className={`w-[${item?.value}] h-full bg-gradient-to-r from-blue-900 to-color2`}
              ></motion.div>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default AboutSection;
