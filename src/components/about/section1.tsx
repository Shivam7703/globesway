"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { fadeIn,  staggerContainer} from '@/utils/motion';
import { aboutsec1 as data } from '@/data/homeData';
import { FaCheck} from 'react-icons/fa6';
import { IoMedalOutline } from 'react-icons/io5';
import Link from 'next/link';

function Section1() {
  return (
    
    <motion.div  variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }} className='xl:px-32 lg:p-28 sm:p-12 px-7 py-11 max-w-[1530px] mx-auto flex flex-wrap items-stretch justify-between gap-y-7 bg-white overflow-hidden' >
      
          <motion.div
       variants={fadeIn("left", "tween", 0.3, 1)} className='sm:w-[47%] w-full space-y-4'>
      {data?.title1 && <h4 className='text-color1 font-medium text-lg w-max'>{data?.title1}</h4>}
     <h2 className='text-zinc-800 font-bold text-3xl md:text-5xl '>{data?.title2} </h2>

<div className='flex items-center gap-3'>
  <IoMedalOutline className='text-3xl md:text-4xl text-black'/> <h3 className='text-color1 text-xl md:text-2xl'>{data?.title3}</h3>
</div>

      {data?.para && <p className='text-zinc-600 text-sm md:text-base'>{data?.para}</p>}
      <div className='flex flex-wrap justify-between'>
        <ul className='sm:w-[46%] space-y-3 mb-3 text-lg w-full'>
          {data?.points.slice(0,3).map((point:any)=>(
            <li key={point?.id} className='text-black font-medium flex gap-2'><FaCheck className='text-color1 mt-1' />{point?.text} </li>
          ))}
        </ul>

 <ul className='sm:w-[46%] space-y-3 mb-3 text-lg w-full'>
          {data?.points.slice(3,6).map((point:any)=>(
            <li key={point?.id} className='text-black font-medium flex gap-2'><FaCheck className='text-color1 mt-1' />{point?.text} </li>
          ))}
        </ul>
      </div>

      <div className="max-w-max max-h-max mt-2">  <Link href={"/"} >
            <div className="flex gap-2 p-3 text-white border rounded-[29px] group relative bg-gradient-to-l from-red-900 to-color1 overflow-hidden  h-full">
              <p className="mx-5 font-semibold font1 text-sm md:text-base z-20">View All Country {">"}</p>
             
              <div className="group-hover:w-full duration-300 h-full bg-gradient-to-l from-blue-900 to-color2 absolute z-10 w-0 top-0 right-0"></div>
            </div>
          </Link></div>
     
    
    
      </motion.div>


      <motion.div variants={fadeIn("right", "tween", 0.3, 1)}
 className="sm:w-[45%] w-full min-h-[450px] relative group"
    ><div
    className="space-y-7 overflow-hidden hover14 relative h-full "
  >{data?.img1 && <Image src={data?.img1} alt='About' className='absolute top-0 left-0 h-[80%] w-[49%] object-cover'/>}

                 </div>

                 <div className='absolute py-3 px-5 border-l-4 border-color1 bg-white -left-4  bottom-10 shadow-xl'> <h5 className='text-2xl md:text-4xl text-color1 font-bold'>28+</h5>
                 <p className='text-md md:text-xl  text-zinc-800 '>Years of Experience</p></div>
                
                 {data?.img2 && <Image src={data?.img2} alt='About' className=' absolute z-10 top-0 right-0 w-[49%] h-[100%] border-2 border-white object-cover'/>}
 
 </motion.div>

    </motion.div>
  )
}

export default Section1;
