"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { fadeIn,  staggerContainer} from '@/utils/motion';
import { faqData } from '@/data/homeData';
import { FaChevronDown } from 'react-icons/fa6';
import Queans from './queans';


export default function FaqSection() {

  return (
    
    <motion.div  variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }} className='lg:p-28 sm:p-12 px-7 py-11 max-w-[1650px] mx-auto flex flex-wrap items-stretch justify-between gap-y-7 bg-back overflow-hidden' >
      
 <motion.div     variants={fadeIn("right", "tween", 0.3, 1)}
 className="sm:w-[48%] w-full  lg:h-[590px] sm:h-[770px] h-[72] flex justify-between items-center "
    >
      <div  className="hover14 h-[70%]
        w-[48%] "> <Image
        src={faqData?.img}
        alt="FAQ"
        className="h-full w-full object-cover"
      /></div>
     
<div className="h-full flex flex-col justify-between
        w-[48%] ">
          
         <div className='!h-[48%] hover14 overflow-hidden w-full'>
      <Image
        src={faqData?.img2}
        alt="FAQ"
        
        className="h-full w-full object-cover"
      />
      </div>
      <div className='!h-[48%] hover14 overflow-hidden w-full'>
      <Image
        src={faqData?.img3}
        alt="FAQ"
        className="h-full w-full object-cover"
      />
      </div>
      </div>
       </motion.div>
      <motion.div
       variants={fadeIn("left", "tween", 0.3, 1)} className='sm:w-[45%] w-full space-y-4'>
    <Queans faqData={faqData}/>
      </motion.div>
    </motion.div>
  )
}

