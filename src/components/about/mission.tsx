import React from 'react'
import { FaBullseye, FaEye, FaHandshake } from 'react-icons/fa6';


export default function Mission() {
  const data = [
    {
      id: 1,
      title: "Our Mission",
      para: "The company plans expert journeys along with personal service to achieve effortless travel that delivers unforgettable experiences to all vacationers.",
      icon: <FaBullseye />,
    },
    {
      id: 2,
      title: "Our Vision",
      para: "Our independence means we have access to a wide choice of tour operators and airlines, and we always endeavor to find your perfect holiday for the best possible price.",
      icon: <FaEye />,
    },
    {
      id: 3,
      title: "Our Values",
      para: "Customer-first approach combined with transparent practices, along with reliable services, trusted expertise, innovative ideas, and passionate dedication to providing world-class travel experiences.",
      icon: <FaHandshake />,
    },
  ];
  return (
    <section className='lg:px-28 sm:p-12 p-7 sm:py-14  bg-white '>
      
      <div className='flex relative gap-y-6 z-10 max-w-[1580px] justify-between items-stretch flex-wrap'>
{data && data.map((card :any)=>(
  <div key={card.id} className='p-3 md:w-[31.6%] sm:w-[48.5%] w-full sm:p-5 rounded-lg bg-zinc-100 shadow-lg'>
    <div className='flex justify-center rounded-full items-center mx-auto sm:w-24 shadow-md sm:h-24 bg-gradient-to-l from-blue-900 to-color2 w-14 h-14 sticky sm:-mt-16 -mt-7 text-white  text-xl sm:!text-3xl'>{card.icon}</div>
    <h2 className='text-xl my-3 leading-[1.9] text-center sm:text-2xl text-black'>{card?.title}</h2> 
    <div className='border-b border-zinc-800 max-w-44 mx-auto'></div>
    <p className='text-center text-zinc-600 my-3'>{card?.para}</p></div>
))}
      </div>
    </section>
  )
}

