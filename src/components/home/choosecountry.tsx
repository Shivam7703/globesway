"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { choosecountry } from "@/data/homeData";

export default function ChooseCountry() {
  const uniqueId = "service123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    modules: [Autoplay, Pagination, Navigation],
    breakpoints: {
      140: {
        slidesPerView: 1,
      },
      468: {
        slidesPerView: 2,
      },
      824: {
        slidesPerView: 3,
      },
      1080: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <section className="lg:px-28 md:px-20 sm:px-12 px-7 relative">
      {/* Top Heading */}

      <div className="flex max-w-7xl mx-auto justify-between gap-y-4 flex-wrap items-end">
        <div className="max-w-3xl ">
          {choosecountry?.title1 && (
            <h4 className="text-color1 font-medium text-lg w-max">
              {choosecountry?.title1}
            </h4>
          )}
          <h2 className="text-zinc-800 font-extrabold text-3xl md:text-5xl !leading-[1.1]">
            {choosecountry?.title2}{" "}
          </h2>
        </div>
        <Link href={"/"} className="w-max">
          <div className="flex gap-2 p-2 text-white border rounded-[29px] group relative bg-gradient-to-l from-red-900 to-color1 overflow-hidden  h-full">
            <p className="mx-5 font-semibold font1 text-sm md:text-base z-20">
              View All Country {">"}
            </p>

            <div className="group-hover:w-full duration-300 h-full bg-gradient-to-l from-blue-900 to-color2 absolute z-10 w-0 top-0 right-0"></div>
          </div>
        </Link>{" "}
      </div>

      {/* Swiper */}
      <Swiper
        {...swiperOptions}
        className={`mySwiper max-w-7xl mx-auto md:mt-16 mt-9 w-full px-5 ${uniqueId}`}
      >
        {choosecountry?.countries?.map((cards: any) => (
          <SwiperSlide
            key={cards.id}
            className="mb-16 text-center w-full group p-3"
          >
            {/* Card Content */}
            <div className="md:w-full md:h-56 mx-auto h-48 overflow-hidden relative">
              <Image
                src={cards.img}
                alt="tour"
                fill
                className="transition-all duration-500 w-full h-full object-center object-cover group-hover:scale-110"
              />
              <div className="h-20 absolute -bottom-12 left-0 bg-zinc-200 w-full  rounded-tl-[50%] rounded-tr-[50%]"></div>

              <Image
                src={cards.flag}
                alt="tour"
                className="transition-all duration-500 group-hover:-rotate-180 w-14 h-14 object-contain absolute bottom-1 border border-color2 shadow-md left-[40%]  rounded-full"
              />
            </div>

            <div className="bg-zinc-200 w-full space-y-3 p-4">
              <Link href={"#"} className="">
                <h3 className="font-bold font1 hover:text-color1 text-black text-xl md:text-2xl mb-2">
                  {cards?.name}
                </h3>
                <p className="text-sm text-zinc-700 font-medium mb-5">
                  {cards?.para.slice(0, 95)}...
                </p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className={`${uniqueId}-next absolute z-30 p-3 hover:bg-color1 bg-color2 shadow-md text-white right-0 md:right-10 bottom-1/3 max-md:scale-75 rounded-full cursor-pointer`}
      >
        <FaArrowRightLong className="text-xl font-bold" />
      </div>
      <div
        className={`${uniqueId}-prev absolute z-20 rounded-full hover:bg-color1 p-3 bg-color2 shadow-md text-white left-0 md:left-10 bottom-1/3 max-md:scale-75  cursor-pointer`}
      >
        <FaArrowLeftLong className="text-xl font-bold" />
      </div>
    </section>
  );
}
