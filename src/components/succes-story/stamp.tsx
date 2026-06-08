"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { stamp3, stamp5, stamp6, stamp8 } from "@/assets";
import Image from "next/image";

export default function Stamp() {
  const stamp = [
    { id: 3, img: stamp3 },
    { id: 5, img: stamp5 },
    { id: 6, img: stamp6 },
    { id: 8, img: stamp8 },
  ];

  const uniqueId = "stamp123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: { delay: 4500, disableOnInteraction: false },
    speed: 1300,
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Navigation],
    breakpoints: {
      568: { slidesPerView: 2 },
      1080: { slidesPerView: 3 },
    },
  };

  return (
    <section className="lg:px-24 bg-zinc-100 md:px-20 sm:p-10 p-7 text-center relative slider1 flex flex-col items-center">
      <h2 className="text-zinc-800 font-extrabold text-3xl md:text-5xl max-w-2xl mx-auto !leading-[1.1]">
        Clients Successful Visa Approvals
      </h2>

      {/* Swiper */}
      <Swiper
        {...swiperOptions}
        className={`mySwiper w-full max-w-7xl mx-auto md:mt-16 mt-9 ${uniqueId}`}
      >
        {stamp.map((cards) => (
          <SwiperSlide
            key={cards.id}
            className="mb-12 w-full text-left rounded-xl border overflow-hidden bg-white shadow-xl flex items-center justify-center"
          >
            <Image
              src={cards.img}
              alt="Best Immigration Consultants"
              className="w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <div className="flex flex-wrap gap-5 mt-6">
        <div
          className={`${uniqueId}-prev text-color1 hover:text-black text-3xl md:text-4xl duration-200 cursor-pointer`}
        >
          <FaCircleChevronLeft />
        </div>
        <div
          className={`${uniqueId}-next text-color1 hover:text-black text-3xl md:text-4xl duration-200 cursor-pointer`}
        >
          <FaCircleChevronRight />
        </div>
      </div>
    </section>
  );
}
