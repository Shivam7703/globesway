import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6';
import Image from 'next/image';
import { contact } from '@/assets';

export default function Contactsec1() {

    const data = [{
        id:1,
        para:"Expert travel planning that ensures a stress-free journey by crafting personalized itineraries tailored to individual preferences and needs."
    },
    {
        id:2,
        para:"Seamless bookings for flights, hotels, and activities, making your trip easy and convenient from start to finish."
    },
    {
        id:3,
        para:"Exceptional service with continuous support before, during, and after your journey, ensuring a smooth travel experience."
    },
    {
        id:4,
        para:"Affordable and transparent pricing with no hidden costs, providing the best value for your dream trip."
    },
    {
        id:5,
        para:"Worldwide destinations with expert recommendations and well-crafted itineraries designed to create unforgettable travel experiences."
    },
]

  return (
    <section className='lg:px-28 md:-20 sm:px-12 p-7  max-w-[1580px] mx-auto flex flex-wrap items-stretch justify-between gap-y-7  overflow-hidden'>
      <div className='lg:w-[48%] w-full py-6'>
        <h2 className='text-color1 sm:text-4xl font1 text-2xl font-semibold !leading-[1.3] mb-5'>Why Choose GlobesWay for best immigration consultants</h2>
        <ul className='space-y-4 p-3'>
        {data?.map((points:any)=>(
            <li key={points.id} className='flex gap-2 text-color2 !text-[1.35rem] !sm:text-[25px]'><FaCircleCheck className='mt-2 min-w-4 '/>
 <p className=' sm:text-xl text-lg text-zinc-700'>{points.para}</p>
</li>
        ))}
        </ul>
      </div>

      <div className='lg:w-[45%] w-full'>
        <Image src={contact} width={460} alt='' className='object-cover mx-auto'/>
      </div>
    </section>
  )
}

