"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { aboutsec1 as data } from "@/data/homeData";
import { rakshita } from "@/assets";
import { FaCheck } from "react-icons/fa6";
import {
  IoMedalOutline,
  IoChevronBackOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Section1() {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="xl:px-32 lg:p-28 sm:p-12 px-7 py-11 max-w-[1530px] mx-auto flex flex-wrap items-stretch justify-between gap-y-7 bg-white overflow-hidden"
    >
      <motion.div
        variants={fadeIn("left", "tween", 0.3, 1)}
        className="sm:w-[47%] w-full space-y-4"
      >
        {data?.title1 && (
          <h4 className="text-color1 font-medium text-lg w-max">
            {data?.title1}
          </h4>
        )}
        <h1 className="text-zinc-800 font-bold text-3xl md:text-5xl ">
          {data?.title2}{" "}
        </h1>

        <div className="flex items-center gap-3">
          <IoMedalOutline className="text-3xl md:text-4xl text-black" />{" "}
          <h3 className="text-color1 text-xl md:text-2xl">{data?.title3}</h3>
        </div>

        {data?.para && (
          <p className="text-zinc-600 text-sm md:text-base">{data?.para}</p>
        )}
        <div className="flex flex-wrap justify-between">
          <ul className="sm:w-[46%] space-y-3 mb-3 text-lg w-full">
            {data?.points.slice(0, 3).map((point: any) => (
              <li key={point?.id} className="text-black font-medium flex gap-2">
                <FaCheck className="text-color1 mt-1" />
                {point?.text}{" "}
              </li>
            ))}
          </ul>

          <ul className="sm:w-[46%] space-y-3 mb-3 text-lg w-full">
            {data?.points.slice(3, 6).map((point: any) => (
              <li key={point?.id} className="text-black font-medium flex gap-2">
                <FaCheck className="text-color1 mt-1" />
                {point?.text}{" "}
              </li>
            ))}
          </ul>
        </div>

        <div className="max-w-max max-h-max mt-2">
          {" "}
          <Link
            title="Best immigration consultants in Delhi"
            href={"/contact-us"}
          >
            <div className="flex gap-2 p-3 text-white border rounded-[29px] group relative bg-gradient-to-l from-red-900 to-color1 overflow-hidden h-full">
              <p className="mx-5 font-semibold font1 text-sm md:text-base z-20">
                Know More {">"}
              </p>

              <div className="group-hover:w-full duration-300 h-full bg-gradient-to-l from-blue-900 to-color2 absolute z-10 w-0 top-0 right-0"></div>
            </div>
          </Link>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("right", "tween", 0.3, 1)}
        className="sm:w-[45%] w-full min-h-[450px] relative group"
      >
        <div className="space-y-7 overflow-hidden hover14 relative h-full">
          {/* Swiper Slider Start */}
          {data?.img2 && (
            <div className="absolute top-0 left-0 h-[80%] w-[80%]">
              <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                effect="fade"
                speed={1800}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                navigation={{
                  nextEl: ".section1-button-next",
                  prevEl: ".section1-button-prev",
                }}
                loop={true}
                className="w-full h-full rounded-lg"
              >
                <SwiperSlide>
                  <Image
                    title="Best immigration consultants in Delhi"
                    src={data?.img2}
                    alt="Best immigration consultants in Delhi"
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    title="Best immigration consultants in Delhi"
                    src={rakshita}
                    alt="Best immigration consultants in Delhi"
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                  />
                </SwiperSlide>
              </Swiper>

              {/* Custom Navigation Buttons with React Icons */}
              <button
                className="section1-button-prev absolute top-1/2 -translate-y-1/2 left-3 z-20 bg-white/95 hover:bg-white shadow-2xl rounded-full p-2.5 md:p-3 transition-all duration-500 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 border border-gray-200"
                aria-label="Previous slide"
              >
                <IoChevronBackOutline className="w-5 h-5 md:w-6 md:h-6 text-color1" />
              </button>

              <button
                className="section1-button-next absolute top-1/2 -translate-y-1/2 right-3 z-20 bg-white/95 hover:bg-white shadow-2xl rounded-full p-2.5 md:p-3 transition-all duration-500 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 border border-gray-200"
                aria-label="Next slide"
              >
                <IoChevronForwardOutline className="w-5 h-5 md:w-6 md:h-6 text-color1" />
              </button>
            </div>
          )}
          {/* Swiper Slider End */}
        </div>
      </motion.div>

      <style jsx global>{`
        .section1-button-prev .swiper-pagination-bullet,
        .section1-button-next .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 0.6;
          transition: all 0.4s ease;
        }
        .swiper-pagination-bullet-active {
          background: var(--color1, #e63946);
          opacity: 1;
          transform: scale(1.3);
        }
        .section1-button-prev.swiper-button-disabled,
        .section1-button-next.swiper-button-disabled {
          opacity: 0.2 !important;
          cursor: not-allowed !important;
        }
      `}</style>
    </motion.div>
  );
}

export default Section1;
