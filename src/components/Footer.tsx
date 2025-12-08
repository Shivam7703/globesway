"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { FootsecMenu, navigationMenu } from "@/data/homeData";
import { datalist } from "motion/react-client";
import { logoall } from "@/assets";

export default function Footer({ footer }: any) {
  return (
    <>
      <footer className="  w-full z-20  overflow-hidden  relative">
        {/* NewsLetter Section  */}

        {/* Footer links section  */}
        <div className="  text-white bg-color1 py-6 px-6 md:px-24 grid grid-cols-3 pb-5 sm:grid-cols-6 lg:grid-cols-12">
          <div className="col-span-3 flex flex-col gap-y-2">
            <Image
              title="Best immigration consultants in Delhi"
              src={footer?.logo}
              alt="Best immigration consultants in Delhi"
              className="max-w-28 w-[70vw] object-contain"
            />
            <p className=" w-full text-base mt-3  max-sm:mt-3">
              {footer?.text}
            </p>
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
                {/* {footer?.socials?.twitter && (
                  <FaXTwitter
                    className="hover:text-color1 p-2 bg-[#ffffff2d] rounded-full duration-300"
                    onClick={() =>
                      window.open(footer?.socials?.twitter, "_blank")
                    }
                  />
                )} */}
              </div>
            )}
          </div>
          <div className="col-span-1 flex flex-col gap-y-2 max-md:hidden"></div>
          <div className="col-span-2 flex flex-col gap-y-2 mt-5">
            <h4 className="my-2 text-xl after:!bg-red-200 font-semibold">
              {footer?.list2?.title}
            </h4>
            <ul className="space-y-2">
              {footer?.list2?.links?.map((d: any, i: number) => (
                <li key={i}>
                  <Link
                    title={d?.label}
                    href={d?.href}
                    className=" transition:all text-base text-zinc-50 duration-300 hover:text-zinc-300 "
                  >
                    {"-"} {d?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 flex flex-col gap-y-2 md:pl-10 mt-5">
            <h4 className="my-2 text-xl font-semibold after:!bg-red-200">
              {footer?.list3?.title}
            </h4>
            <ul className="space-y-2">
              {footer?.list3?.links?.map((d: any, i: number) => (
                <li key={i}>
                  <Link
                    title={d?.label}
                    href={d?.href}
                    className=" transition:all text-base text-zinc-50 duration-300 hover:text-zinc-300"
                  >
                    {"-"} {d?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 flex flex-col gap-y-2 max-md:hidden"></div>

          <div className=" flex flex-col mt-5 space-y-2  col-span-3">
            <h4 className="my-2  text-xl font-semibold after:!bg-red-200">
              {footer?.newLetter?.title}
            </h4>
            <p className=" transition:all text-base text-zinc-50 duration-300">
              <strong>Phone: </strong>&nbsp;<a href="tel:+919220292921" target="_blank" rel="noopener noreferrer">+91 92202 92921</a>
            </p>
            <p className=" transition:all text-base text-zinc-50 duration-300">
              <strong>E-mail: </strong>&nbsp; <a href="mailto:info@globeswayimmigration.com" target="_blank" rel="noopener noreferrer">info@globeswayimmigration.com</a>
            </p>
            <p className=" transition:all text-base text-zinc-50 duration-300">
              <strong>Address: </strong>&nbsp;<a href="https://www.google.com/maps/place/Globesway+Immigration+Pvt.+Ltd./@28.6937074,77.1472447,17z/data=!3m1!4b1!4m6!3m5!1s0x390d034f8893d0cd:0x9f30cf26433038ae!8m2!3d28.6937074!4d77.1498196!16s%2Fg%2F11x7qhnmst?entry=ttu&g_ep=EgoyMDI1MTEzMC4wIKXMDSoASAFQAw%3D%3D" target="_blank"> Office no. 886-887, 8th Floor,
              AGGARWAL MILLENNIUM TOWER 2, Netaji Subhash Place, Pitampura, New
              Delhi, Delhi, 110034</a>
            </p>
          </div>
        </div>
        {/* copyright  */}

        <div className="text-black space-y-7 bg-white py-6 px-6 md:px-24 ">
          {FootsecMenu?.map((item: any) => (
            <div key={item.id}>
              <span className="font-bold">{item?.label}: </span>
              {item?.subNav?.map((navitem: any) => (
                <React.Fragment key={navitem?.id}>
                  <Link
                    title={navitem?.label}
                    className="text-zinc-700"
                    href={navitem?.href}
                  >
                    {navitem?.label}
                    {"  "}&nbsp; | {"  "}&nbsp;
                  </Link>
                  {navitem?.subNav?.map((subNavItem: any) => (
                    <>
                      <Link
                        title={subNavItem?.label}
                        className="text-zinc-700"
                        key={subNavItem?.id}
                        href={subNavItem?.href}
                      >
                        {subNavItem?.label}
                        {"  "}&nbsp; | {"  "}&nbsp;
                      </Link>
                      {subNavItem?.subNavv?.map((data: any) => (
                        <Link
                          title={data?.label}
                          className="text-zinc-700"
                          key={data?.id}
                          href={data?.href}
                        >
                          {data?.label}
                          {"  "}&nbsp; | {"  "}&nbsp;
                        </Link>
                      ))}
                    </>
                  ))}
                </React.Fragment>
              ))}
            </div>
          ))}
          <Image
            src={logoall}
            alt="Logo"
            title="Best Immigration Consultants"
            className="max-w-[500px] w-[80vw] mx-auto"
          />
        </div>
      </footer>

      <div className=" p-4 text-center text-white bg-color1 font-semibold">
        <p className="text-center text-sm">
          {footer?.copyrightText}{" "}
          <span className="hover:text-main transition-all font-extrabold cursor-pointer">
            <a
              title="Best immigration consultants in Delhi"
              href="https://skywarddigitalsolutions.com"
            >
              Skyward Digital Solutions
            </a>
          </span>
        </p>
      </div>
    </>
  );
}
