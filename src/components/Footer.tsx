"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";

export default function Footer({ footer }: any) {
  return (
    <>
    <footer className="pt-6 px-6 pb-32 md:px-24  w-full z-20  text-white bg-color1 overflow-hidden  relative">
      {/* NewsLetter Section  */}
    
      {/* Footer links section  */}
      <div className="grid grid-cols-3 pb-5 sm:grid-cols-6 lg:grid-cols-12">
        <div className="col-span-3 flex flex-col gap-y-2">
          <Image
            src={footer?.logo}
            alt="logo"
            className="max-w-28 w-[70vw] object-contain"
          />
          <p className=" w-full text-base mt-3  max-sm:mt-3">{footer?.text}</p>
          {/* Socials  */}
          {footer?.socials && (
            <div className="flex  gap-2 md:gap-x-3 mt-3  text-4xl text-white">
              {footer?.socials?.facebook && (
                <FaFacebook
                  className=" hover:text-color1 p-2 bg-[#ffffff2d] rounded-full duration-300 "
                  onClick={() =>
                    window.open(footer?.socials?.facebook, "_blank")
                  }
                />
              )}
              {footer?.socials?.instagram && (
                <AiFillInstagram
                  className="hover:text-color1 p-2 bg-[#ffffff2d] rounded-full duration-300"
                  onClick={() =>
                    window.open(footer?.socials?.instagram, "_blank")
                  }
                />
              )}
              {footer?.socials?.linkedin && (
                <FaLinkedinIn
                  className="hover:text-color1 p-2 bg-[#ffffff2d] rounded-full duration-300"
                  onClick={() =>
                    window.open(footer?.socials?.linkedin, "_blank")
                  }
                />
              )}
              {footer?.socials?.youtube && (
                <TbBrandYoutubeFilled
                  className="hover:text-color1 p-2 bg-[#ffffff2d] rounded-full duration-300"
                  onClick={() =>
                    window.open(footer?.socials?.youtube, "_blank")
                  }
                />
              )}
              {footer?.socials?.twitter && (
                <FaXTwitter
                  className="hover:text-color1 p-2 bg-[#ffffff2d] rounded-full duration-300"
                  onClick={() =>
                    window.open(footer?.socials?.twitter, "_blank")
                  }
                />
              )}
            </div>
          )}
        </div>
        <div className="col-span-1 flex flex-col gap-y-2 max-md:hidden"></div>
        <div className="col-span-2 flex flex-col gap-y-2 mt-5">
          <h4 className="my-2 text-xl font-semibold">{footer?.list2?.title}</h4>
          <ul className="space-y-2">
            {footer?.list2?.links?.map((d: any, i: number) => (
              <li key={i}>
                <Link
                  href={d?.href}
                  className=" transition:all text-base text-zinc-200 duration-300 hover:text-color2 "
                >
                  {"-"} {d?.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 flex flex-col gap-y-2 md:pl-10 mt-5">
          <h4 className="my-2 text-xl font-semibold">{footer?.list3?.title}</h4>
          <ul className="space-y-2">
            {footer?.list3?.links?.map((d: any, i: number) => (
              <li key={i}>
                <Link href={d?.href}  className=" transition:all text-base text-zinc-200 duration-300 hover:text-color2">
                  {"-"} {d?.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 flex flex-col gap-y-2 max-md:hidden"></div>

        <div className=" flex flex-col mt-5 space-y-2  col-span-3">
          <h4 className="my-2  text-xl font-semibold">
            {footer?.newLetter?.title}
          </h4>
          <p className=" transition:all text-base text-zinc-200 duration-300 hover: hover:text-main ">
            <strong>Phone: </strong>&nbsp;+91 1234567890
          </p>
          <p className=" transition:all text-base text-zinc-200 duration-300 hover: hover:text-main ">
            <strong>E-mail: </strong>&nbsp;ops@terrifictrip.com
          </p>
          <p className=" transition:all text-base text-zinc-200 duration-300 hover: hover:text-main ">
            <strong>Address: </strong>&nbsp;A-60, SECTOR-58 NOIDA, UP-201301,
            UTTAR PRADESH
          </p>
        </div>
      </div>
      {/* copyright  */}
      
    </footer>
    <div className=" p-4 text-center text-zinc-800 font-semibold">
    <p className="text-center text-sm">
      {footer?.copyrightText}{" "}
      <span className="hover:text-main transition-all font-extrabold cursor-pointer">
        <a href="https://skywarddigitalsolutions.com">Skyward Digital Solutions</a>
      </span>
    </p>
  </div>
  </>
  );
}
