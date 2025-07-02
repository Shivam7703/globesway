
import { about1 } from "@/assets";
import VisaAside from "./side";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import Queans from "../home/queans";
import { faqData } from "@/data/homeData";


export default function Visadetails() {
  return (
    <div className='flex flex-wrap justify-between gap-y-7 lg:px-28 md:p-20 sm:p-16 p-7 relative min-h-screen w-full'>

    <div className='text-zinc-600 md:w-[64%] w-full space-y-4 md:space-y-7'>
     <Image src={about1} alt="" className="w-full h-auto object-contain max-h-[560px] mx-auto" />

     <h1 className="text-black md:text-5xl font-bold text-3xl">Visa Overview
</h1>
<p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
</p>
<p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
</p>
 <h2 className="text-black md:text-4xl font-normal text-3xl">Visa Center
</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint pariatur consequatur perferendis dicta, magni tenetur ratione, culpa eius possimus omnis id repellendus quos quia inventore aperiam reprehenderit ipsum ipsa eaque recusandae corporis! Deleniti, sapiente?</p>

 <div className='flex gap-y-3 flex-wrap justify-between'>
        <ul className='sm:w-[46%] space-y-3 mb-3 text-lg w-full'>
<li className='text-black font-medium flex gap-2'><FaCheck className='text-color1 mt-1' />Fast Processing</li>
<li className='text-black font-medium flex gap-2'><FaCheck className='text-color1 mt-1' />Guarantee Approval</li>
<li className='text-black font-medium flex gap-2'><FaCheck className='text-color1 mt-1' />Fast Processing</li>
        </ul>

         <ul className='sm:w-[46%] space-y-3  text-lg w-full'>
<li className='text-black font-medium flex gap-2'><FaCheck className='text-color1 mt-1' />Fast Processing</li>
<li className='text-black font-medium flex gap-2'><FaCheck className='text-color1 mt-1' />Guarantee Approval</li>
<li className='text-black font-medium flex gap-2'><FaCheck className='text-color1 mt-1' />Fast Processing</li>
        </ul>
      </div>
          <Queans faqData={faqData}/>
    </div>

    <div className='md:w-[30%] w-full md:sticky top-10 space-y-5 sm:space-y-12 h-full'>
      <VisaAside/>
    </div>
  </div>
  )
}