import React from "react";
import { Quote } from "lucide-react";
import { founder } from "@/assets";
import Image from "next/image";
const Aboutsec2 = () => {
  return (
    <section className="relative overflow-hidden pb-16 p-6">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-12 ">
          {/* Image Section */}
          <div className="relative group col-span-1">
            {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div> */}
            <div className="relative overflow-hidden rounded-3xl mt-3">
              <div className="aspect-[4/5] relative">
                {/* Replace this with your Image component */}

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

              {/* Decorative border */}
              <div className="absolute inset-0 rounded-3xl border border-white/20"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="md:space-y-14 space-y-6 col-span-1 lg:col-span-2">
            {/* Header */}
            <div className="">
              {/* <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                <span>Featured Speaker</span>
              </div> */}

              <h2 className="text-4xl -mt-2  lg:text-5xl font-bold text-black">
                Meet Our Founder
              </h2>
            </div>

            {/* Quote Section */}
            <div className="relative ">
              <div className="absolute -top-4 -left-4">
                <Quote className="w-12 h-12 text-color1/60  transform rotate-180" />
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
                <Quote className="w-12 h-12 text-color1/60" />
              </div>
            </div>

            {/* Call to Action */}
            {/* <div className="pt-4">
              <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="relative z-10">Schedule Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutsec2;
