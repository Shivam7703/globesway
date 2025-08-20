"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { faqData } from "@/data/homeData";
import Queans from "../home/queans";

export default function Careerfaq() {
       const questions = [
  {
    id: 1,
    que: "What is the duration of the IELTS coaching program?",
    ans: "Most of our IELTS training programs run for 4 to 8 weeks, depending on your starting level and desired score.",
  },
  {
    id: 2,
    que: "Do you offer coaching for both Academic and General IELTS?",
    ans: "Yes, we provide training for both formats and help you choose the right one based on your immigration or study goals.",
  },
  {
    id: 3,
    que: "Can I take classes online from another city or country?",
    ans: "Yes, our online classes are available worldwide with live sessions, recorded lectures, and trainer support.",
  },
  {
    id: 4,
    que: "What if I fail to improve my score in the first attempt?",
    ans: "We continue guiding you through extra mock tests, feedback, and one-on-one support until you are confident enough to retake the test.",
  },
];

  return (
    <motion.div
      variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="lg:px-28 md:px-20 sm:p-12 px-7 py-11 max-w-[1650px] mx-auto flex flex-wrap items-stretch justify-between gap-y-7 bg-back overflow-hidden"
    >
      <motion.div
        variants={fadeIn("left", "tween", 0.3, 1)}
        className="sm:w-[47%] w-full space-y-4"
      >
        <Queans
          faqData={questions}
          title1={"Faq's"}
          title2={""}
        />
      </motion.div>
      <div className="sm:w-[48%] w-full  text-center" > 
              <h2 className="text-zinc-800 font-extrabold text-3xl md:text-5xl max-w-2xl mx-auto mt-3 !leading-[1.1]">
Are you ready to join our team?
         </h2>
         <p className="md:text-xl text-lg font-medium text-zinc-600 my-3 md:my-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae facere laborum dolores voluptatum eum illo omnis quisquam! Est, magni at cumque suscipit cupiditate dignissimos quisquam harum odio sint quidem odit pariatur mollitia repellat provident unde?</p>
         <a href="mailto:your-email@example.com" title="Send Your CV" className="bg-color1 text-xl font-medium mt-5 text-white px-4 py-2 rounded hover:bg-zinc-700 transition duration-300 mx-auto">
Send Your CV          </a>
      </div>
    </motion.div>
  );
}
