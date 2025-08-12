"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import Queans from "./queans";
import { faqData } from "@/data/homeData";

export default function FaqSection() {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="lg:p-28 sm:p-12 px-7 py-11 max-w-[1650px] mx-auto flex flex-wrap items-stretch justify-between gap-y-7 bg-back overflow-hidden"
    >
      <div
            
             className="sm:w-[48%] w-full min-h-96 lg:h-[650px] relative"
           >
             {faqData?.img2 && (
               <Image
                 src={faqData?.img2}
                 alt="About"
                 className=" rounded-2xl duration-300 absolute z-10 bottom-0 shadow-lg right-0 w-[80%] h-[95%] rounded-t-full   object-cover"
               />
             )}
             {faqData?.img && (
               <Image
                 src={faqData?.img}
                 alt="About"
                 className=" rounded-2xl duration-300 absolute z-20 bottom-0 w-max -left-3 md:-left-7  h-[75%] object-contain "
               />
             )}
           </div>
      <motion.div
        variants={fadeIn("left", "tween", 0.3, 1)}
        className="sm:w-[45%] w-full space-y-4"
      >
        <Queans
          faqData={faqData?.questions}
          title1={faqData?.title1}
          title2={faqData?.title2}
        />
      </motion.div>
    </motion.div>
  );
}
