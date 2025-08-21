"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import Link from "next/link";
import { successstory } from "@/data/homeData";

type Success1Props = {
  isHome: boolean;
};

export default function Success1({ isHome }: Success1Props) {

  const uniqueId = "success123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: { clickable: true },
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
      140: { slidesPerView: 1 },
      468: { slidesPerView: 2 },
      824: { slidesPerView: 3 },
      1080: { slidesPerView: 4 },
    },
  };

  // Convert Shorts URL into embeddable YouTube URL
  const getEmbedUrl = (url: string) => {
    const videoId = url.split("/shorts/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <section className="lg:px-24 md:px-20 sm:p-10 p-7 text-center relative slider1 flex flex-col items-center">

      {!isHome && (<>
      <h4 className="text-color1 mx-auto font-medium text-lg w-max">
        Top Success Stories
      </h4>

      <h2 className="text-zinc-800 font-extrabold text-3xl md:text-5xl max-w-2xl mx-auto  !leading-[1.1]">
        Clients Stories
      </h2></>
)}
{(isHome && 
       <div className="flex justify-between max-w-7xl mx-auto w-full gap-y-4 flex-wrap items-end">
              <div className="max-w-3xl ">
                
                  <h4 className="text-color1 font-medium text-lg w-max">
        Top Success Stories
                  </h4>
                
                <h2 className="text-zinc-800 font-extrabold text-3xl md:text-5xl !leading-[1.1]">
        Clients Stories
                </h2>
              </div>
              <Link href={"/success-stories"} className="w-max">
                <div className="flex gap-2 p-2 text-white border rounded-[29px] group relative bg-gradient-to-l from-red-900 to-color1 overflow-hidden  h-full">
                  <p className="mx-5 font-semibold font1 text-sm md:text-base z-20">
                    View All {">"}
                  </p>
      
                  <div className="group-hover:w-full duration-300 h-full bg-gradient-to-l from-blue-900 to-color2 absolute z-10 w-0 top-0 right-0"></div>
                </div>
              </Link>{" "}
            </div>
)}
      <Swiper {...swiperOptions} className={`mySwiper w-full max-w-7xl mx-auto  md:mt-16 mt-9 ${uniqueId}`}>
        {(successstory && (isHome ? successstory.slice(0, 6) : successstory)).map((cards) => (
          <SwiperSlide
            key={cards.id}
            className="mb-12 w-full text-left rounded-2xl bg-white shadow-xl flex items-center justify-center "
          >
            <iframe
              width="100%"
              height="100%"
              src={getEmbedUrl(cards.text)}
              title={`YouTube video ${cards.id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl md:h-[400px] h-80 "
            ></iframe>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex flex-wrap gap-5 mt-6">
        <div className={`${uniqueId}-prev text-color1 hover:text-black text-3xl md:text-4xl duration-200`}>
          <FaCircleChevronLeft />
        </div>
        <div className={`${uniqueId}-next text-color1 hover:text-black text-3xl md:text-4xl duration-200`}>
          <FaCircleChevronRight />
        </div>
      </div>
    </section>
  );
}
