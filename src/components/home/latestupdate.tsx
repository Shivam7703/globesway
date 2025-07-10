import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function Latestupdate() {
  return (
    <section className="bg-color2 flex items-center text-white">
      <div className="text-center md:text-xl min-w-max font-bold text-base font1 bg-color1 p-2 sm:px-7">
Latest Update </div>

        <Marquee
          className=" h-full text-base sm:text-xl space-x-7"
          speed={80}
          pauseOnHover={true}
          gradient={false}
        >
        <p>We Are Official Channel Partner of</p>
        <p>Lorem ipsum dolor sit amet consectetur </p>
        <p> adipisicing elit. Natus, necessitatibus a atque dignissimos</p>
        <p> ullam fuga blanditiis architecto fugiat. Odio temporibus incidunt</p>
        <p> iusto cum, modi consequuntur enim! Aut dolor fugit voluptas?</p>
        </Marquee>
    </section>
  );
}


