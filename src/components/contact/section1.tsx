import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6';
import Image from 'next/image';
import { contact } from '@/assets';

export default function Contactsec1() {

    const data = [{
        id:1,
        para:"Depending on your purpose, whether you want to study, work, or travel globally, GlobesWay will provide you with specific advice on how to go about it. Our professionals help you to get high probabilities of approval with step-by-step support."
    },
    {
        id:2,
        para:"We make it easier to deal with documents, forms, and checks as well as submissions. With our team, everything is properly done and at the right time and without any problem."
    },
    {
        id:3,
        para:"At GlobesWay, it does not charge any cover-ups. There are no hidden costs in our price structure, and you will always be clear on what you pay. "
    },
    {
        id:4,
        para:"We take care of all the arrangements for your trip, including visa procedures, booking flights, hotels, etc. You have a stress-free journey, and we take care of all the details carefully and meticulously."
    },
    {
        id:5,
        para:"We offer continued support throughout your journey, including updates, follow-ups, and post-arrival guidance. You're never alone when you choose GlobesWay."
    },
]

  return (
    <section className='lg:px-28 md:-20 sm:px-12 p-7  max-w-[1580px] mx-auto flex flex-wrap items-stretch justify-between gap-y-7  overflow-hidden'>
      <div className='lg:w-[48%] w-full py-6'>
        <h2 className='text-color1 sm:text-4xl font1 text-2xl font-semibold !leading-[1.3] mb-5'>Why Choose GlobesWay for the Best Immigration Consultants?</h2>
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

