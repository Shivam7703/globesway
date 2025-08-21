"use client";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import React, { useState } from "react";
import Image from "next/image";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { BannerData } from "@/data/homeData";

export default function HomeBanner() {
  const uniqueId = "banner12376";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, EffectFade, Navigation],
    effect: "fade",
  };

  return (
    <section className="swiperstyle1 relative w-full">
      <Swiper {...swiperOptions} className="mySwiper w-full">
        {BannerData.map((item:any) => (
          <SwiperSlide key={item.id} className="overflow-hidden w-full">
            <Image
        src={item.img} // Use the dynamic image passed in
        className="h-full !w-full max-h-[700px] object-contain md:object-right"
        alt="banner image"
      />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <div
        className={`${uniqueId}-next absolute z-40 p-2 bg-white shadow-lg bg-opacity-70  font-bold text-3xl text-color1 hover:text-color2 right-3 top-[55%] max-md:!hidden`}
      >
        <GrNext />
      </div>
      <div
        className={`${uniqueId}-prev absolute z-40 p-2 bg-white shadow-lg bg-opacity-70 font-bold text-3xl hover:text-color2 text-color1 left-3 md:top-[55%] max-md:!hidden`}
      >
        <GrPrevious />
      </div>
    </section>
  );
}

