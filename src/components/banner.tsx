"use client";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { sliderText } from "@/utils/motion";
import Link from "next/link";


export default function AllBanner({ img, title, slug }: any) {
  return (
    <section className="relative min-h-[440px] h-[60vh] w-full ">
      
         <Image
            src={img}
            alt={`banner`}
            className="w-full h-full object-cover"
          />
             
      <div className="w-full h-full text-white absolute top-0 left-0 bg-[#0000005b] z-10 flex justify-center items-center flex-col gap-6">
      <AnimatePresence>
      <motion.div
                  
                  variants={sliderText}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ easings: ["easeIn", "easeOut"] }}
                      className="max-w-3xl text-center space-y-6">

{title &&  <motion.h2 className="lg:text-6xl md:text-4xl font-bold mb-3 text-3xl font1">
                        {title}
                      </motion.h2>}
                      {/* <p className="lg:text-xl  mb-5 text-lg">{para}</p> */}
              <p className="text-white">Home / <span className="text-color2">{slug}</span></p>
                      </motion.div>
        </AnimatePresence>
        
      </div>
    </section>
  );
}
