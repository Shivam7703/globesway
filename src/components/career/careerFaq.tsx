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
    que: "Is immigration a good career choice today?",
    ans: "Yes! Immigration is a fast-growing field with endless opportunities. More people are moving abroad for study, work, and PR, so skilled professionals are always in demand. It’s a career that gives both stability and satisfaction.",
  },
  {
    id: 2,
    que: "What skills do I need for a career in immigration?",
    ans: "Strong communication, problem-solving, and attention to detail are key. Knowing visa rules and keeping up with immigration updates will help you stand out. Most importantly, a passion for helping people is a big advantage.",
  },
  {
    id: 3,
    que: "Can freshers start their careers in immigration?",
    ans: "Absolutely! Many companies hire freshers and provide training on visa processes. With the right attitude and willingness to learn, you can quickly build expertise. It’s one of the few industries where beginners have clear growth paths.",
  },
  {
    id: 4,
    que: "What are the future prospects in immigration careers?",
    ans: "The demand for immigration services is rising globally, which means more career growth in this sector. Professionals can advance into senior consultant roles, management, or even open their own consultancy. With continuous learning, the future in immigration looks very promising.",
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
Be a Part of Our Growing Team
         </h2>
         <p className="md:text-xl text-lg font-medium text-zinc-600 my-3 md:my-8">At GlobesWay Immigration, we are looking for passionate and dedicated professionals to grow with us. Whether you are skilled in visas, consulting, or legal support, we value talent and teamwork. Join us today and be part of a company that helps people achieve their global dreams.</p>
         <a href="mailto:your-email@example.com" title="Send Your CV" className="bg-color1 text-xl font-medium mt-5 text-white px-4 py-2 rounded hover:bg-zinc-700 transition duration-300 mx-auto">
Send Your CV          </a>
      </div>
    </motion.div>
  );
}
