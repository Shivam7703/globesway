"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { sliderText } from "@/utils/motion";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
import { cloude } from "@/assets";


export default function HomeBanner({ data }: any) {
  return (
    <section className="relative md:h-[105vh] h-[94vh] w-full ">
       <Image
              src={cloude}
              alt={`cloud`}
              className="w-full   absolute -bottom-7 left-0 z-30"
            /> <Image
            src={cloude}
            alt={`cloud`}
            className="w-full   absolute -bottom-7 left-0 z-30"
          />
             
      {data?.imgs && 
      <Marquee className="w-full h-full" speed={50} gradient={false} gradientWidth={0}>
        {data?.imgs?.map((bnr: any) => (
          <div key={bnr?.id} className="md:h-[105vh] h-[94vh]">
            <Image
              src={bnr?.img}
              alt={`banner-image`}
              className="w-full h-full object-cover"
              width={310} // Replace with your desired width
              height={900} // Replace with your desired height
              priority
            />
          </div>
        ))}
      </Marquee>}

      <div className="w-full h-full text-white absolute top-0 left-0 bg-[#00000056] z-10 flex justify-center items-center flex-col gap-6">
      <AnimatePresence>
      <motion.div
                  
                  variants={sliderText} // Using the sliderText motion variants
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ easings: ["easeIn", "easeOut"] }}
                      className="max-w-3xl text-center space-y-6">

{data.title &&  <motion.h2 className="lg:text-8xl md:text-6xl font-bold mb-8 text-5xl px-5 font1">
                        {data?.title}
                      </motion.h2>}
                 
                   <motion.p className="md:text-lg text-base px-5"> {data?.para}
                   </motion.p>
                   
               
                      </motion.div>
      
        </AnimatePresence>
        <Link href={data?.href || "/"} className="w-min">
            <div className="flex items-center justify-center rounded-3xl gap-4 text-nowrap px-6 py-2 bg-color1 text-white duration-300 hover:bg-color2">
              <p className="text-base font-medium">{data?.btntext}</p><MdArrowRightAlt  className="mt-1 animate-x text-3xl"/>
            </div>
          </Link>
      </div>
    </section>
  );
}
