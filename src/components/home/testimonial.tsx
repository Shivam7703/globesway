"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialdata as data } from "@/data/homeData";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { review, testbg } from "@/assets";
import { IoChatboxEllipsesSharp } from "react-icons/io5";

export default function Testimonials() {
  const uniqueId = "test123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      clickable: true,
      // dynamicBullets: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1200,
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Navigation],
    breakpoints: {
      140: {
        slidesPerView: 1,
      },
      
      884: {
        slidesPerView: 2,
      },
    },
  };

  return (
    <section className=" lg:px-28 bg-zinc-200 md:px-20 sm:p-14 p-7 text-center relative slider1 flex flex-col items-center">
      {data?.title1 && (
        <h4 className="text-color1 mx-auto font-medium text-lg w-max">
          {data?.title1}
        </h4>
      )}
      <h2 className="text-zinc-800 font-extrabold text-3xl md:text-5xl max-w-2xl mx-auto mt-3 !leading-[1.1]">
        {data?.title2}{" "}
      </h2>

      <Swiper
        {...swiperOptions}
        className={`mySwiper w-full max-w-6xl mx-auto px-5 md:mt-16 mt-9  ${uniqueId}`}
      >
        {" "}
        {data?.testimonials?.map((cards: any) => (
          <SwiperSlide
            key={cards.id}
            className="mb-12 w-full text-left rounded-2xl bg-white shadow-xl"
          >
            <div className=" w-full pt-5 h-full overflow-hidden gap-4 flex group">
              <div className="w-1/3 relative  min-h-36">
                <Image
                  src={testbg}
                  alt={"testimonials"}
                  className="absolute top-0 rounded-t-[60px] object-cover object-top -z-10 w-full h-full"
                />
                <Image
                  src={cards?.img}
                  alt={"testimonials"}
                  className="mx-auto rounded-full w-4/5 mt-4"
                />
              </div>

              <div className="w-2/3 px-5 pb-5">
                <div className="flex items-end  justify-between pb-4 border-b-2">

                  <div >
   
                              <h3 className="text-black md:text-2xl text-xl font-medium">
                      {cards?.name}
                    </h3>
                    <p className="text-zinc-600">Happy Client</p>
                  </div>

                  <div className="text-zinc-300 group-hover:text-color1 duration-300 text-3xl md:text-5xl"><IoChatboxEllipsesSharp/></div>
                </div>

                <p className=" mt-4 text-zinc-600">{cards?.para}</p>
                 <Image
                  src={review}
                  alt={"testimonials"}
                  className="h-8 float-right object-contain w-max my-2"
                />   
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-wrap gap-5">
        <div
          className={`${uniqueId}-prev text-color1 hover:text-black text-3xl md:text-4xl duration-200`}
        >
          <FaCircleChevronLeft />
        </div>

        <div
          className={`${uniqueId}-next text-color1 hover:text-black text-3xl md:text-4xl duration-200`}
        >
          <FaCircleChevronRight />
        </div>
      </div>
    </section>
  );
}
