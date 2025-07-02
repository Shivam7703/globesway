"use client";
import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6';

function Queans({ faqData }:any) {
      const [expandedCity, setExpandedCity] = useState<number | null>(null);

  function toggleCity(cityId: number) {
    setExpandedCity((prev) => (prev === cityId ? null : cityId)); // Toggles FAQ visibility for cities
  }
  return (
    <>
       <div
        className=' w-full space-y-4'>
     {faqData?.title1 && <h4 className='text-color1 font-medium text-lg w-max'>{faqData?.title1}</h4>}
         {faqData?.title2 && <h2 className='text-zinc-800 font-bold text-3xl md:text-5xl !leading-[1.1]'>{faqData?.title2} </h2>}
       {/* Cities as FAQ */}
       {faqData?.questions.map((city :any) => (
                <div key={city.id} className=" bg-zinc-100 p-5 rounded-lg">
                  {/* FAQ Question */}
                  <div
                    onClick={() => toggleCity(city.id)}
                    className="flex justify-between items-center cursor-pointer text-base md:text-lg text-zinc-800  font-bold"
                  >
                  <p> <span className='text-color1'>0{city.id} {" "}</span> {" "}{city.que}</p>

                    <FaChevronDown className={`min-w-9 duration-300 ${expandedCity === city.id ?  "rotate-180 text-color1" :"text-zinc-700"}`} />
                   
                  </div>

                  {/* FAQ Answer with Transition */}
                  <div
                    className={`overflow-hidden transition-all duration-1000 ${
                      expandedCity === city.id
                        ? "max-h-32 mt-3 space-y-4"
                        : "max-h-0"
                    }`}
                  >
                    <p className=" max-md:text-sm leading-normal font-medium text-zinc-400">
                      {city.ans}
                    </p>
                   
                  </div>
                </div>
              ))}
      </div>
    </>
  )
}

export default Queans;
