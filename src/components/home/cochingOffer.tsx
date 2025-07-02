import Image from "next/image";
import Link from "next/link";
import { coachingofferdata } from "@/data/homeData";
import { SiBookstack } from "react-icons/si";
import { LuArrowDownRight } from "react-icons/lu";


export default function CoachingOffer() {


  return (
    <section className="lg:px-28 md:px-20 sm:p-14 p-7 relative">
      {/* Top Heading */}

<div className="flex justify-between flex-wrap ">
  <div className="md:w-[48%] w-full">
     {coachingofferdata?.title1 && <h4 className='text-color1 font-medium text-lg w-max'>{coachingofferdata?.title1}</h4>}
     <h2 className='text-zinc-800 font-extrabold text-3xl md:text-5xl !leading-[1.1]'>{coachingofferdata?.title2} </h2>
  </div>

  <div className="md:w-[48%] w-full mt-5 md:mt-12 md:text-lg font-normal text-zinc-700">
    <p>{coachingofferdata?.para}</p>
  </div>
   </div>

      {/* Swiper */}
      <div
        className={`flex gap-y-6 flex-wrap justify-between md:mt-16 mt-9 w-full`}
      >
        {coachingofferdata?.coaching?.map((cards: any) => (
          <div
            key={cards.id}
            className="lg:w-[23%] sm:w-[48%] text-center w-full shadow-lg group"
          >
            {/* Card Content */}
            <div className="md:h-72 mx-auto h-56 overflow-hidden relative">
             <Image
                            src={cards.img}
                            alt="tour"
                            fill
                            className="transition-all duration-500 w-full h-full object-center object-cover group-hover:scale-110"
                          />

                                      <div className="h-max absolute bottom-0 -right-2  w-[88%]">
<div className="bg-color1 group-hover:hidden  text-white text-lg font-medium md:text-2xl w-full py-2 px-4 bg-opacity-85">{cards?.name}</div>

<div className="max-h-0 space-y-4 text-left h-full overflow-hidden group-hover:max-h-64 bg-white w-full duration-300 group-hover:p-5">
<SiBookstack  className="text-3xl text-color1"/>
<h5 className="text-2xl font-bold text-black">{cards?.name}</h5>
<p className="text-sm text-zinc-600 font-medium ">
              {cards?.para.slice(0 , 95)}...
            </p>
<Link href={""} className="float-right text-3xl text-color2"><LuArrowDownRight />
</Link>
</div>
                                      </div>
            </div>
          </div>
        ))}
      </div>

     
    </section>
  );
}
