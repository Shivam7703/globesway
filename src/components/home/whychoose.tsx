"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { whychoose as data } from "@/data/homeData";
import { rakshita } from "@/assets";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Whychoose() {
  return (
    <section className="lg:px-28 md:p-20 sm:p-12 p-7 max-w-[1580px] mx-auto flex items-stretch flex-wrap justify-between gap-y-7">
      <div className="sm:w-[48%] w-full space-y-4 md:space-y-7">
        {data?.title1 && (
          <h4 className="text-color1 font-medium text-lg w-max">
            {data?.title1}
          </h4>
        )}
        <h2 className="text-zinc-800 font-extrabold text-3xl md:text-5xl !leading-[1.1]">
          {data?.title2}{" "}
        </h2>
        {data?.para && (
          <p className="text-zinc-800 !leading-relaxed">{data?.para}</p>
        )}
        <ul className="space-y-4 mb-4">
          {data?.vision?.map((data: any) => (
            <li key={data.id} className="flex gap-x-4 md:gap-x-8 pb-3">
              <div className="text-4xl md:text-5xl mt-2 text-color1">
                {data?.icon}
              </div>
              <div>
                <h5 className="font2 mb-1 md:text-xl text-lg text-black">
                  {data.heading}
                </h5>
                <p className="text-zinc-500 !leading-snug">{data.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="sm:w-[48%] w-full min-h-96 relative group">
        {/* Swiper Slider for 2 images */}
        {data?.img2 && (
          <div className="absolute z-10 bottom-0 right-0 w-[80%] h-[95%] rounded-2xl">
            <Swiper
              modules={[Autoplay, EffectFade, Navigation, Pagination]}
              effect="fade"
              speed={1500}
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
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              loop={true}
              className="w-full h-full rounded-2xl"
            >
              <SwiperSlide>
                <Image
                  title="Best immigration consultants in Delhi"
                  src={data?.img2}
                  alt="Best immigration consultants in Delhi"
                  className="rounded-2xl duration-300 shadow-lg w-full h-full rounded-t-full object-cover"
                  loading="lazy"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  title="Best immigration consultants in Delhi"
                  src={rakshita}
                  alt="Best immigration consultants in Delhi"
                  className="rounded-2xl duration-300 shadow-lg w-full h-full rounded-t-full object-cover"
                  loading="lazy"
                />
              </SwiperSlide>
            </Swiper>

            <button
              className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 right-4 z-20 bg-white/90 hover:bg-white shadow-xl rounded-full p-2 md:p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95"
              aria-label="Next slide"
            >
              <FaArrowRight className="w-5 h-5 md:w-6 md:h-6 text-color1" />
            </button>
          </div>
        )}
        {/* Swiper slider end */}

        {data?.img && (
          <Image
            title="Best immigration consultants in Delhi"
            src={data?.img}
            alt="Best immigration consultants in Delhi"
            className="rounded-2xl duration-300 absolute z-20 bottom-0 h-max -left-3 md:-left-7 w-[45%] object-contain"
            loading="lazy"
          />
        )}
      </div>
    </section>
  );
}
