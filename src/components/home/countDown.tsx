"use client";
import React from "react";
import CountUp from "react-countup";
import { countDownData as data } from "@/data/homeData";

function CountDown() {
  return (
    <section className="bg-gradient-to-tr md:-mt-28 z-30 sticky from-color1 to-color2 w-[90vw] shadow-lg lg:px-24 mb-6 sm:mb-14 md:p-16 sm:p-12 p-7 max-w-[1350px] mx-auto text-white rounded-3xl flex flex-wrap gap-6 md:justify-between justify-center">
      {data?.map((counts: any) => (
        <div key={counts.id} className="items-center flex gap-4 space-y-2 max-sm:min-w-64">
          <div className="text-3xl md:text-6xl font-bold">{counts.icon}</div>
          <div>
            <div className="text-3xl font1 md:text-5xl font-bold">
              <CountUp
                start={0}
                end={counts.Value}
                delay={0.2}
                duration={2.75}
                separator=","
              />
              {counts.value2 || "+"}
            </div>
            <h3 className="font-semibold text-xl">{counts.title}</h3>
          </div>
        </div>
      ))}
    </section>
  );
}

export default CountDown;
