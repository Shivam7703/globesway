"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { VscChromeClose } from "react-icons/vsc";
import { IoMenu } from "react-icons/io5";
import Image from "next/image";
import { logo, logo2 } from "@/assets";
import { BiSolidPhoneCall } from "react-icons/bi";
import { navigationMenu } from "@/data/homeData";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";


const Header = ({ header }: any) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [navItems, setNavItems] = useState<any[]>([]);
 


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 80) {
        setIsAtTop(true);
        setIsVisible(true);
      } else {
        setIsAtTop(false);
        setIsVisible(currentScrollY < lastScrollY || currentScrollY < 150);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setNavItems(header?.navItems || []);
  };

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = () => {
  
    setIsMobileMenuOpen(false);
  };

  return (
    <>
   <div className="w-full md:h-32 h-14"></div>
    <header
      className={`fixed  left-0 w-screen z-50 transition-all duration-300  
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        ${isAtTop ? "text-color1 top-0" : "md:-top-32 -top-1"}`}
    >
      <div className="hidden md:flex items-center justify-between shadow-lg bg-red-50 h-32 px-5 lg:px-10">
        <Link className="w-[10%]" href={header?.href || "/"}>
          <Image
            src={isAtTop ? logo : logo}
            alt="logo"
            className=" h-16 w-min object-contain md:h-32 my-1"
          />
        </Link>
        <div className=" max-md:hidden lg:w-[66%]">
          <ul className="flex gap-4 bg-red-50 p-3">
            <li className="flex gap-2 text-sm"><IoIosMail className="text-color1 text-lg"/>
<p className="text-zinc-700">info@example.com</p></li>

  <li className="flex gap-2 text-sm"><FaLocationDot 
 className="text-color1 text-lg"/>
<p className="text-zinc-700">30 Broklyn Golden Street. USA</p></li>
          </ul>
          <div className="p-4 w-full bg-white ">
        <Menu
          navItemsArray={navItems}
          onTop={isAtTop}
          Items={navigationMenu?.primaryMenu}
          Isprimary={true}
        />
        </div>
        </div>
        <RightSide onTop={isAtTop}/>
      </div>
      <div className="hidden md:flex justify-center max-w-6xl bg-color1 py-1 shadow-lg rounded-b-xl mx-auto">
         <Menu
          navItemsArray={navItems}
          onTop={isAtTop}
          Items={navigationMenu?.secondaryMenu}
          Isprimary={false}
        />
      </div>


      {/* Mobile Section */}
      <div className={`flex md:!hidden w-screen items-center  justify-between h-24 px-3 ${
        isAtTop ? "bg-black bg-opacity-70  backdrop-blur-[7px]" : "bg-opacity-100 bg-white"
      }`}>
        <div className="flex items-center relative cursor-pointer text-3xl justify-between w-full">
        <Link href={header?.href || "/"}>
            <Image src={isAtTop ? logo2 : logo} alt="logo" className="w-[80px] object-contain" />
          </Link>
          {isMobileMenuOpen ? (
            <VscChromeClose onClick={handleMobileMenu} className={isAtTop ? "text-white" : "text-black"} />
          ) : (
            <IoMenu onClick={handleMobileMenu} className={isAtTop ? "text-white" : "text-black"} />
          )}
         
        </div>
        {/* <RightSide /> */}
      </div>

      {/* Mobile Menu */}
         <div className={`fixed h-screen left-0 top-24  md:hidden  overflow-x-hidden duration-300 transition-all ${
          isAtTop ? "bg-color1 bg-opacity-70 backdrop-blur-[7px]" : "bg-opacity-100 bg-white"
        }${
          isMobileMenuOpen ? " !w-full" : " !w-0"
        }`}>
          <MenuMobile
          onTop={isAtTop}
            // navItemsArray={navItems}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            onItemClick={handleNavItemClick}
          />
        </div>
    </header>
    </>
  );
};

export default Header;

function RightSide(onTop :any) {
  return (
    <div className="h-max border-2 border-red-100">
      <a href="tel:+911234567890" className={` text-center shadow-lg flex text-white group relative bg-gradient-to-l from-red-900 to-color1 overflow-hidden rounded-sm font1 gap-2  md:text-lg font-bold   
 px-6 py-4  w-max h-max`}>
   
        <div className="group-hover:w-full duration-300 h-full bg-gradient-to-l from-blue-900 to-color2 absolute z-10 w-0 top-0 right-0"></div>
       <BiSolidPhoneCall className="mt-1 z-20 text-xl group-hover:scale-x-[-1] transition-all"/>
       <p className="z-20">Call Now</p>  
      </a>
    </div>
  );
}

