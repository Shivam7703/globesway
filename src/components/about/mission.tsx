import { missionbg } from '@/assets';
import React from 'react'
import { FaBullseye, FaEye, FaHandshake } from 'react-icons/fa6';
import Image from 'next/image';

export default function Mission() {
  const data = [
    {
      id: 1,
      title: "Our Mission",
      para: "At Globesway Immigration, we ensure that we open the world to all opportunities. We are determined to make the immigration process easier by providing clear instructions, factual advice and full support. We aspire to help individuals and families to create lasting futures in a foreign country, whether to study, advance their careers, or settle there permanently, with credible, honorable and skilled immigration services depending on their distinct objectives and requirements.",
      icon: <FaBullseye />,
    },
    {
      id: 2,
      title: "Our Vision",
      para: "We see ourselves as one of the most preferred immigration consultants worldwide on reputation building in terms of trust, innovation and success. Our vision is to become the customer favorite since we will always give awesome outcomes and unmatched experiences to our customers. We are dreaming of the world where all those people who want to live, work, or study abroad realize their dreams with certainty and supported by the experienced help of Globesway Immigration.",
      icon: <FaEye />,
    },
    {
      id: 3,
      title: "Our Values",
      para: "Globesway Immigration is driven by core values in the form of integrity, commitment, transparency, and excellence. We are committed to doing it right, honoring our promises, and always following the needs of clients. We perform our duties with professionalism and care and take all cases and all steps of consultations with honesty and accuracy. These help in every decision that we take and they help us to establish lasting relationships with our clients.",
      icon: <FaHandshake />,
    },
  ];
  return (
    <section className='lg:px-28 sm:p-12 p-7 sm:py-14 max-w-[1580px] mx-auto bg-white '>
      
      <div className='flex relative gap-y-6 z-10  justify-between items-stretch flex-wrap'>
{data && data.map((card :any)=>(
  <div key={card.id} className='p-3 md:w-[31.6%] sm:w-[48.5%] w-full sm:p-5 rounded-lg border-2 shadow-lg relative'>
    <Image src={missionbg} alt={"mission"} className='absolute z-0 bottom-0 w-full h-auto object-cover left-0 opacity-100' />
    <div className='flex justify-center rounded-full items-center mx-auto sm:w-24 shadow-md sm:h-24 bg-gradient-to-l from-blue-900 to-color2 w-14 h-14 sticky sm:-mt-16 -mt-7 text-white  text-xl sm:!text-3xl'>{card.icon}</div>
    <h2 className='text-xl my-3 leading-[1.9] text-center sm:text-2xl text-black'>{card?.title}</h2> 
    <div className='border-b border-zinc-800 max-w-44 mx-auto'></div>
    <p className='text-center text-zinc-600 my-3'>{card?.para}</p></div>
))}
      </div>
    </section>
  )
}

