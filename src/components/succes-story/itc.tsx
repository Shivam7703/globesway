"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { itc1, itc10, itc11, itc2, itc3, itc4, itc5, itc6, itc7, itc8, itc9, itc12, itc13, itc14, itc15, itc16, itc17, itc18, itc19, itc20, itc21 } from "@/assets";
import Image from "next/image";

export default function Itc() {
  const stamp = [
    { id: 12, img: itc12, text: "PNP Approval" },
    { id: 13, img: itc13, text: "Federal Skilled Worker Program Approved" },
    { id: 14, img: itc14, text: "PNP Approval" },
    { id: 15, img: itc15, text: "Canada PR Approved" },
    { id: 16, img: itc16, text: "Federal Skilled Worker Program Approved" },
    { id: 17, img: itc17, text: "Vetassess Positive Skill Assessment Report" },
    { id: 18, img: itc18, text: "Vetassess Positive Skill Assessment Report" },
    { id: 19, img: itc19, text: "Canada Temporary Resident Visa Approved" },
    { id: 20, img: itc20, text: "Visitor Subclass 600 Visa Approved" },
    { id: 21, img: itc21, text: "Visitor Subclass 600 Visa Approved" },
    { id: 1, img: itc1, text: "Australia Positive Skill Assessment Report" },
    { id: 2, img: itc2, text: "Subclass 482 Visa Approved" },
    { id: 3, img: itc3, text: "Visitor Subclass 600 Visa Approved" },
    { id: 4, img: itc4, text: "Subclass 482 Visa Approved" },
    { id: 5, img: itc5, text: "Vetassess Positive Skill Assessment Report" },
    { id: 6, img: itc6, text: "Vetassess Positive Skill Assessment Report" },
    { id: 7, img: itc7, text: "PNP Approval" },
    { id: 8, img: itc8, text: "CEC Approval" },
    { id: 9, img: itc9, text: "PNP Approval" },
    { id: 10, img: itc10, text: "EE ITA Approval" },
    { id: 11, img: itc11, text: "Canada Visitor Visa Approved" },
  ];

  const uniqueId = "itc123";
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

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const handleNext = () => {
    setPhotoIndex((photoIndex + 1) % stamp.length);
  };

  const handlePrev = () => {
    setPhotoIndex((photoIndex + stamp.length - 1) % stamp.length);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // Close on Escape key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") handleClose();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "ArrowLeft") handlePrev();
  };

  return (
    <section className="lg:px-24 md:px-20 sm:p-10 p-7 text-center relative slider1 flex flex-col items-center">
      <h2 className="text-zinc-800 font-extrabold text-3xl md:text-5xl max-w-2xl mx-auto !leading-[1.1]">
        Client Approvals
      </h2>

      {/* Swiper */}
      <Swiper
        {...swiperOptions}
        className={`mySwiper w-full max-w-7xl mx-auto md:mt-16 mt-9 ${uniqueId}`}
      >
        {stamp.map((cards, index) => (
          <SwiperSlide
            key={cards.id}
            className="mb-12 w-full text-left relative rounded-2xl shadow-xl flex items-center justify-center"
          >
            <div onClick={() => handleImageClick(index)} className="cursor-pointer relative">
              <Image src={cards.img} alt="Best Immigration Consultants" className="w-full h-full object-cover" />
              <div className="text-white bg-color1 bg-opacity-80 p-4 absolute bottom-0 left-0 w-full">
                <p className="text-sm font-semibold">{cards.text}</p>
              </div>
            </div>
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

      {/* Custom Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={handleClose}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10"
          >
            <IoClose />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 text-white text-5xl hover:text-gray-300 z-10"
          >
            <FaCircleChevronLeft />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-5xl max-h-[90vh] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={stamp[photoIndex].img}
              alt={stamp[photoIndex].text}
              className="w-full h-full object-contain"
              width={1200}
              height={800}
            />
            {/* Image Caption */}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-4 text-center">
              <p className="text-lg font-semibold">{stamp[photoIndex].text}</p>
              <p className="text-sm text-gray-300 mt-1">
                {photoIndex + 1} / {stamp.length}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 text-white text-5xl hover:text-gray-300 z-10"
          >
            <FaCircleChevronRight />
          </button>
        </div>
      )}
    </section>
  );
}