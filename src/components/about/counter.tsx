"use client";
import React from "react";
import CountUp from "react-countup";
import { countDownData as data } from "@/data/homeData";

export default function Counter() {
  return (
    <section className=" bg-color1 w-full shadow-lg lg:px-24 md:p-16 sm:p-12 p-7  text-white flex flex-wrap gap-6 md:justify-between justify-center">
      {data?.map((counts: any) => (
        <div key={counts.id} className="items-center p-4 counter relative flex gap-3 space-y-2 border border-white border-l-0">
          <div className="text-3xl md:text-6xl font-bold ">{counts.icon}</div>
                      <div className="w-[1px] h-full bg-white"></div>

          <div>
            <div className="text-3xl font1 md:text-4xl font-semibold ">
              <CountUp
                start={0}
                end={counts.Value}
                delay={0.2}
                duration={2.75}
                separator=","
              />
              {counts.value2 || "+"}
            </div>
            <h3 className="font-medium text-lg">{counts.title}</h3>
          </div>
        </div>
      ))}
    </section>
  );
}


