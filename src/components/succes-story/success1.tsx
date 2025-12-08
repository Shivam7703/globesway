"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import Link from "next/link";

type Success1Props = {
  isHome: boolean;
};

export default function Success1({ isHome }: Success1Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // ensures client-only rendering
  }, []);

  const successstory = [
    { id: 1, text: "https://youtube.com/shorts/74vlFTJkSA0?si=_2hDpBGZIBLAONgO" },
    { id: 2, text: "https://youtube.com/shorts/rP8UpKoWWP0?si=vpZsHgjt9yZV6HiG" },
    { id: 3, text: "https://youtube.com/shorts/erYgw-0lnjg?si=kYIvH3SbN0K2iy0S" },
    { id: 4, text: "https://youtube.com/shorts/DyHzebnvPJ8?si=IeFw-u5UQrSL88-i" },
    { id: 5, text: "https://youtube.com/shorts/KrV69bSlsLM?si=OKx3YcjGs0C57S1c" },
    { id: 7, text: "https://youtube.com/shorts/9b42YXKQi4w?si=YDmRk2fmQZ_W-ETL" },
    { id: 10, text: "https://youtube.com/shorts/NEEO3qsxHmA?si=y5dJNjQH9LP_0Iuz" },

  ];

  const uniqueId = "success123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: { delay: 5000, disableOnInteraction: false },
    speed: 1200,
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Navigation],
    breakpoints: {
      468: { slidesPerView: 2 },
      824: { slidesPerView: 3 },
      1080: { slidesPerView: 4 },
    },
  };

  const getEmbedHtml = (url: string, id: number) => {
    const videoId = url.split("/shorts/")[1]?.split("?")[0];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return `
      <iframe
        width="100%"
        height="100%"
        src="${embedUrl}"
        title="YouTube video ${id}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy"
        class="rounded-xl"
      ></iframe>
    `;
  };

  return (
    <section className="lg:px-24 md:px-20 sm:p-10 p-7 text-center relative slider1 flex flex-col items-center">
      {/* Heading */}
      {!isHome ? (
        <>
          <h4 className="text-color1 mx-auto font-medium text-lg w-max">
            Top Success Stories
          </h4>
          <h2 className="text-zinc-800 font-extrabold text-3xl md:text-5xl max-w-2xl mx-auto !leading-[1.1]">
            Clients Stories
          </h2>
        </>
      ) : (
        <div className="flex justify-between max-w-7xl mx-auto w-full gap-y-4 flex-wrap items-end">
          <div className="max-w-3xl">
            <h4 className="text-color1 font-medium text-lg w-max">
              Top Success Stories
            </h4>
            <h2 className="text-zinc-800 font-extrabold text-3xl md:text-5xl !leading-[1.1]">
              Clients Stories
            </h2>
          </div>
          <Link title="Best immigration consultants in Delhi" href={"/success-stories"} className="w-max">
            <div className="flex gap-2 p-2 text-white border rounded-[29px] group relative bg-gradient-to-l from-red-900 to-color1 overflow-hidden h-full">
              <p className="mx-5 font-semibold font1 text-sm md:text-base z-20">
                View All {">"}
              </p>
              <div className="group-hover:w-full duration-300 h-full bg-gradient-to-l from-blue-900 to-color2 absolute z-10 w-0 top-0 right-0"></div>
            </div>
          </Link>
        </div>
      )}

      {/* Swiper */}
      {mounted && (
        <Swiper
          {...swiperOptions}
          className={`mySwiper w-full max-w-7xl mx-auto md:mt-16 mt-9 ${uniqueId}`}
        >
          {(isHome ? successstory.slice(0, 6) : successstory).map((cards) => (
            <SwiperSlide
              key={cards.id}
              className="mb-12 w-full text-left rounded-2xl bg-white shadow-xl flex items-center justify-center"
            >
              <div
                className="relative w-full rounded-xl md:h-[400px] h-80 overflow-hidden"
                dangerouslySetInnerHTML={{ __html: getEmbedHtml(cards.text, cards.id) }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

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
