import React from "react";
import { founder, rakshita } from "@/assets";
import Image from "next/image";
import { LuQuote } from "react-icons/lu"; 
const Aboutsec2 = () => {
  return (
    <section className="relative overflow-hidden pb-16 p-6">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center gap-12 ">
          {/* Image Section */}
          <div className="relative group col-span-1">
           
            <div className="relative overflow-hidden rounded-3xl mt-3">
              <div className="aspect-[4/5] relative">

                <Image
                  src={founder}
                  alt="Best Immigration Consultants - Shreshth Taneja"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  fill
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-sm font-semibold text-gray-800">
                      Mr. Shreshth Taneja
                    </p>
                    <p className="text-xs text-gray-600">Founder & CEO</p>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 rounded-3xl border border-white/20"></div>
            </div>
          </div>

          <div className="md:space-y-14 space-y-6 col-span-1 lg:col-span-2">
            {/* Header */}
            <div className="">
              
              <h2 className="text-4xl -mt-2  lg:text-5xl font-bold text-black">
                Meet Our Founder
              </h2>
            </div>

            {/* Quote Section */}
            <div className="relative ">
              <div className="absolute -top-4 -left-4">
                <LuQuote className="w-12 h-12 text-color1/60  transform rotate-180" />
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 relative overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-800  to-color2"></div>

                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                  I'm{" "}
                  <span className="font-semibold text-color2">
                    Shreshth Taneja
                  </span>
                  , the proud founder of{" "}
                  <span className="font-semibold text-color2">
                    Globesway Immigration
                  </span>
                  . With over{" "}
                  <span className="font-semibold text-color2">
                    8 years of unparalleled experience
                  </span>{" "}
                  in the immigration industry, I've dedicated my career to
                  helping people just like you navigate the complexities of
                  immigration, with a deep expertise in{" "}
                  <span className="font-semibold text-color2">
                    Canadian Immigration
                  </span>
                  .
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-xl text-gray-900">
                      Mr. Shreshth Taneja
                    </p>
                    <p className="text-color1 font-medium">Founder & CEO</p>
                  </div>

                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-color1 rounded-full"></div>
                    <div className="w-2 h-2 bg-color2 rounded-full"></div>
                    <div className="w-2 h-2 bg-zinc-700 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4">
                <LuQuote className="w-12 h-12 text-color1/60" />
              </div>
            </div>
          </div>
        </div>
      </div>
     <div className="max-w-7xl mx-auto relative z-10 mt-8">
  <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 items-center">

    {/* TEXT SECTION */}
    <div className="md:space-y-14 space-y-6 col-span-1 lg:col-span-2 order-2 md:order-1">
     {/* Header */}
            <div className="">
              <h2 className="text-4xl -mt-2  lg:text-5xl font-bold text-black">
                Meet Our Co-founder
              </h2>
            </div>

            {/* Quote Section */}
            <div className="relative ">
              <div className="absolute -top-4 -left-4">
                <LuQuote className="w-12 h-12 text-color1/60  transform rotate-180" />
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 relative overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-800  to-color2"></div>

                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                  <span className="font-semibold text-color2">
Rakshita Sobti {" "}
                  </span>
                   is the guiding force behind our commitment to excellence in{" "}
                  <span className="font-semibold text-color2">
global migration.                  </span>
                  With deep expertise in Canada & Australia PR and Europe work visas, she delivers strategic, discreet, and highly personalized guidance for families and professionals seeking international opportunities. <br /> <br />
                  <span className="font-semibold text-black">
“Migration is not just about moving countries—it’s about securing a future. Every client deserves honest guidance, thoughtful strategy, and complete confidence at every step.”                  </span>{" "}
                 
                  .
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-xl text-gray-900">
— Rakshita Sobti                    </p>
                    <p className="text-color1 font-medium">Co-founder</p>
                  </div>

                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-color1 rounded-full"></div>
                    <div className="w-2 h-2 bg-color2 rounded-full"></div>
                    <div className="w-2 h-2 bg-zinc-700 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4">
                <LuQuote className="w-12 h-12 text-color1/60" />
              </div>
            </div>
    </div>

    {/* IMAGE SECTION */}
    <div className=" col-span-1 order-1 md:order-2">
      <div className="relative overflow-hidden rounded-3xl mt-3">
              <div className="aspect-[4/5] relative">

                <Image
                  src={rakshita}
                  alt="Best Immigration Consultants - Rakshita Sobti"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  fill
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-sm font-semibold text-gray-800">
                      Ms. Rakshita Sobti
                    </p>
                    <p className="text-xs text-gray-600">Co-founder</p>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 rounded-3xl border border-white/20"></div>
            </div>
    </div>

  </div>
</div>

    </section>
  );
};

export default Aboutsec2;
