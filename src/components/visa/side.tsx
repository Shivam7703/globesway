import { about1, about2 } from "@/assets";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { MdArrowCircleRight } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";

const data = [
  {
    id: 1,
    title: "Canada PR Visa",
    href: "/visa/canada-pr-visa",
  },
  {
    id: 2,
    title: "Australia PR Visa",
    href: "/visa/australia-pr-visa",
  },
  {
    id: 3,
    title: "Dubai Work Visa",
    href: "/visa/dubai-work-visa",
  },
  {
    id: 4,
    title: "Qatar Tourist Visa",
    href: "/visa/qatar-tourist-visa",
  },
  {
    id: 5,
    title: "Croatia Work Visa",
    href: "/visa/croatia-work-visa",
  },
  {
    id: 6,
    title: "Luxembourg Work Visa",
    href: "/visa/luxembourg-work-visa",
  },
];
function VisaAside() {
  return (
    <>
      <div className=" font-medium bg-zinc-100  p-5 md:p-9 rounded-2xl ">
        <h4 className="md:text-2xl text-xl text-black font2">
          Other Visa Categories
        </h4>
        <ul className="space-y-2 mt-4 ">
          {data?.map((service) => (
            <li key={service?.id} className="w-full bg-white group h-max">
              <Link
                title="Best immigration consultants in Delhi"
                className="flex "
                href={service?.href}
              >
                <div className=" pt-5 px-2 bg-zinc-200 text-zinc-700 group-hover:text-white group-hover:bg-black group-hover:px-4 duration-300 transition-all ">
                  <FaChevronRight />
                </div>
                <p className="p-4 w-full group-hover:text-white group-hover:bg-color1 text-zinc-800 duration-300 transition-all">
                  {service?.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 2nd section */}
      <div className="lg:h-[520px]  relative md:h-96 h-72 w-full group rounded-3xl overflow-hidden">
        <Image
          title="Best immigration consultants in Delhi"
          src={about2}
          alt="Best immigration consultants in Delhi"
          className="w-full h-full object-cover absolute z-10 top-0 left-0 group-hover:scale-110 duration-300"
        />
        <div className="absolute z-20 w-full group-hover:backdrop-blur-none backdrop-blur-sm p-10 flex  text-white items-end h-full bg-gradient-to-t from-black via-black/50 to-black/0 top-0 left-0 ">
          <div>
            <h4 className=" text-sm font-extrabold text-brown2">Need Help!</h4>
            <h2 className=" sm:text-4xl text-3xl  mt-3 font-medium">
              Contact Support
            </h2>
            <p className="text-sm mt-4 mb-5 !leading-normal">
              Contact our support team of friendly people and request fast
              assistance and professional advice concerning visas and travel
              plans.
            </p>

            <Link
              title="Best immigration consultants in Delhi"
              href={"/contact-us"}
              className="max-w-fit"
            >
              <div className="flex  gap-2 p-2 max-w-fit rounded-3xl text-black hover:text-color1 font-medium  group/btn relative bg-white overflow-hidden items-center flex-row h-full">
                <p className="ml-4 mr-1 font-semibold text-sm z-20">
                  Contact Now
                </p>
                <MdArrowCircleRight className="text-color1 text-3xl bg-white group-hover/btn:text-black duration-200 rounded-full z-20" />

                <div className="group-hover/btn:w-full duration-300 h-full bg-brown2 absolute z-10 w-0 top-0 right-0"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisaAside;
