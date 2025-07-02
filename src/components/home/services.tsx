"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import { servicesdata as data } from "@/data/homeData";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Services() {

  const uniqueId = "tourpack123";

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
    <section className="lg:px-28 md:px-20 sm:p-16 p-7 text-center relative slider1 ser-bg">
      {data?.title1 && <h4 className='text-color1 mx-auto font-medium text-lg w-max'>{data?.title1}</h4>}
     <h2 className='text-zinc-800 font-extrabold text-3xl md:text-5xl max-w-2xl mx-auto mt-3 !leading-[1.1]'>{data?.title2} </h2>

  

      {/* Swiper */}
      <Swiper
        {...swiperOptions}
        className={`mySwiper md:mt-16 md:mb-28 mt-9 w-full max-w-7xl px-5 ${uniqueId}`}
      >
        {data?.list.map((cards: any) => (
          <SwiperSlide
            key={cards.id}
            className="mb-16 w-full group  "
          >
            {/* Card Content */}
            <div className="w-full md:h-64 h-44 mb-2   overflow-hidden relative">

              <Image
                src={cards.img}
                alt="services"
                fill
                className="transition-all duration-500 w-full h-full object-cover group-hover:scale-110"
              />
            </div>
<div className=" sticky -mt-24 w-4/5 mx-auto  z-10">
<div className="text-white text-4xl group-hover:bg-color2 duration-300 bg-color1 p-2 w-max">{cards?.icon}</div>
<div className="bg-white w-full p-4"><Link href={cards?.href || "#"} className="">
<h2 className="text-black font-bold text-lg group-hover:text-color1 duration-300">{cards?.title}</h2>      <p className="text-zinc-500 font-medium mt-1 ">{cards?.para}</p> 
<p className="text-color1 font-bold text-sm opacity-0 -mt-4 mb-6 group-hover:opacity-100 group-hover:mt-2 group-hover:mb-0 transition-all duration-300">Read More</p>     </Link></div>


            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
                 className={`${uniqueId}-next absolute z-30 p-3 hover:bg-color1 bg-color2 shadow-md text-white right-0 md:right-10 bottom-1/3 md:bottom-1/2 max-md:scale-75 rounded-full cursor-pointer`}
               >
                 <FaArrowRightLong className="text-xl font-bold" />
               </div>
               <div
                 className={`${uniqueId}-prev absolute z-20 rounded-full hover:bg-color1 p-3 bg-color2 shadow-md text-white left-0 md:left-10 bottom-1/3 md:bottom-1/2 max-md:scale-75  cursor-pointer`}
               >
                 <FaArrowLeftLong className="text-xl font-bold" />
               </div>
    </section>
  );
}
