import { about1, about2 } from "@/assets";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { MdArrowCircleRight } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";

const data = [
  {
    id: 1,
    title: "Student Visa",
  },
  {
    id: 2,
    title: "Work Visa",
  },
  {
    id: 3,
    title: "Student Visa",
  },
  {
    id: 4,
    title: "Work Visa",
  },
  {
    id: 5,
    title: "Student Visa",
  },
  {
    id: 6,
    title: "Work Visa",
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
              <Link className="flex "
                href={`/services/${service?.title
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
              ><div className=" pt-5 px-2 bg-zinc-200 text-zinc-700 group-hover:text-white group-hover:bg-black group-hover:px-4 duration-300 transition-all ">
                <FaChevronRight />
              </div>
              <p className="p-4 w-full group-hover:text-white group-hover:bg-color1 text-zinc-800 duration-300 transition-all">{service?.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>


      {/* 2nd section */}
      <div className="lg:h-[520px]  relative md:h-96 h-72 w-full group rounded-3xl overflow-hidden">
        <Image
          src={about2}
          alt=""
          className="w-full h-full object-cover absolute z-10 top-0 left-0 group-hover:scale-110 duration-300"
        />
        <div className="absolute z-20 w-full group-hover:backdrop-blur-none backdrop-blur-sm p-10 flex  text-white items-end h-full bg-gradient-to-t from-black via-black/50 to-black/0 top-0 left-0 ">
          <div>
            <h4 className=" text-sm font-extrabold text-brown2">
              Need Help!
            </h4>
            <h2 className=" sm:text-4xl text-3xl  mt-3 font-medium">
              Contact Support
            </h2>
            <p className="text-sm mt-4 mb-5 !leading-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              ipsum officiis sint?
            </p>

            <Link href={"/"} className="max-w-fit">
              <div className="flex  gap-2 p-2 max-w-fit rounded-3xl text-black hover:text-color1 font-medium  group/btn relative bg-white overflow-hidden items-center flex-row h-full">
                <p className="ml-4 mr-1 font-semibold text-sm z-20">
                  Call Now
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
