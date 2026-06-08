"use client";
import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6';

function Queans({ faqData, title1, title2 }:any) {
      const [expandedCity, setExpandedCity] = useState<number | null>(null);

  function toggleCity(cityId: number) {
    setExpandedCity((prev) => (prev === cityId ? null : cityId)); // Toggles FAQ visibility for cities
  }
  return (
    <>
       <div
        className=' w-full space-y-4'>
     {title1 && <h4 className='text-color1 font-medium text-lg w-max'>{title1}</h4>}
         {title2 && <h6 className='text-zinc-800 font-bold text-3xl md:text-5xl !leading-[1.1]'>{title2} </h6>}
       {/* Cities as FAQ */}
       {faqData?.map((city :any , index: number) => (
                <div key={index} className=" bg-zinc-100 p-5 rounded-lg">
                  {/* FAQ Question */}
                  <div
                    onClick={() => toggleCity(index)}
                    className="flex justify-between items-center cursor-pointer text-base md:text-lg text-zinc-800  font-bold"
                  >
                  <p>                                          <span dangerouslySetInnerHTML={{ __html: city.que }} />
</p>

                    <FaChevronDown className={`min-w-9 duration-300 ${expandedCity === index ?  "rotate-180 text-color1" :"text-zinc-700"}`} />
                   
                  </div>

                  {/* FAQ Answer with Transition */}
                  <div
                    className={`overflow-hidden transition-all duration-1000 ${
                      expandedCity === index
                        ? "max-h-32 mt-3 space-y-4"
                        : "max-h-0"
                    }`}
                  >
                    <p className=" max-md:text-sm leading-normal font-medium text-zinc-700">
                                          <span dangerouslySetInnerHTML={{ __html: city.ans }} />

                    </p>
                   
                  </div>
                </div>
              ))}
      </div>
    </>
  )
}

export default Queans;
