import { logo, pay, payu, razor } from "@/assets";
import React from "react";
import Image from "next/image";

export async function generateMetadata() {
  const pageUrl = "https://globeswayimmigration.com/payment";

  return {
    title: "Secure Payment – Globesway Immigration Services",
    description:
      "Make safe and hassle-free payments for Globesway Immigration services. Your data is protected with secure transactions and trusted payment options.",
    keywords: [
      "Secure Payment",
      "Immigration Services Payment",
      "Globesway Immigration",
      "Online Payment Immigration",
    ],
    alternates: {
      canonical: pageUrl, // ✅ Canonical Tag
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
    openGraph: {
      title: "Secure Payment – Globesway Immigration Services",
      description:
        "Make safe and hassle-free payments for Globesway Immigration services. Your data is protected with secure transactions and trusted payment options.",
      url: pageUrl,
      siteName: "Globesway Immigration",
      images: [
        {
          url: "https://globeswayimmigration.com/default.webp",
          width: 1200,
          height: 630,
          alt: "Globesway Immigration",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Secure Payment – Globesway Immigration Services",
      description:
        "Make safe and hassle-free payments for Globesway Immigration services. Your data is protected with secure transactions and trusted payment options.",
      images: ["https://globeswayimmigration.com/default.webp"],
    },
    authors: [{ name: "Globesway Immigration Team" }],
    viewport:
      "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes",
  };
}

function page() {
  return (
    <section className="lg:px-28 md:px-20 sm:p-12 p-7 relative">
      <div className="flex items-stretch flex-wrap mx-auto shadow-xl z-20">
        <div className="md:w-[42%] p-7 w-full">
          <Image
            title="Best immigration consultants in Delhi"
            src={pay}
            alt="Payment"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="md:w-[52%] md:px-16  p-7  w-full bg-white">
          <h4 className="text-color1 font-medium text-lg w-max">
            Payment Form
          </h4>
          <h2 className="text-zinc-800 font-extrabold text-3xl md:text-5xl ">
            Pay Now
          </h2>
          <form method="POST" className=" w-full mt-6 md:mt-12">
            <div className="w-full flex justify-between flex-wrap gap-y-5">
              <div className="w-full">
                <input
                  type="number"
                  required
                  name="amount"
                  className="w-full p-3 rounded-md text-base shadow-lg placeholder:text-zinc-700 text-zinc-700 border"
                  placeholder="Enter Amount"
                />
              </div>
              <div className="w-[48%]">
                <input
                  type="text"
                  required
                  name="name"
                  className="w-full p-3 rounded-md placeholder:text-zinc-700 text-base shadow-lg text-zinc-700 border"
                  placeholder="Your Name"
                />
              </div>

              <div className="w-[48%]">
                <input
                  type="email"
                  required
                  name="email"
                  className="w-full p-3 rounded-md placeholder:text-zinc-700  text-base shadow-lg text-zinc-700 border"
                  placeholder="Your Email"
                />
              </div>

              <div className="w-full">
                <input
                  type="number"
                  required
                  name="phone"
                  className="w-full p-3 rounded-md placeholder:text-zinc-700 text-base shadow-lg text-zinc-700 border"
                  placeholder="Contact No."
                />
              </div>

              <div className="w-full">
                <input
                  type="text"
                  required
                  name="subject"
                  className="w-full p-3 rounded-md text-base placeholder:text-zinc-700 text-zinc-700 shadow-lg  border"
                  placeholder="Subject"
                />
              </div>

              <div className="w-full">
                <textarea
                  rows={3}
                  name="query"
                  className="w-full p-3 rounded-md text-base shadow-lg placeholder:text-zinc-700 text-zinc-700 border"
                  placeholder="Your Query"
                ></textarea>
              </div>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
                {/* Razorpay Button */}
                <button
                  type="submit"
                  className="border border-zinc-400 shadow-lg hover:scale-110 duration-300 overflow-hidden rounded-lg"
                  formAction="https://globeswayimmigration.com/razor.php"
                >
                  <Image
                    title="Best immigration consultants in Delhi"
                    src={razor}
                    alt="Razorpay"
                    className="w-full h-full max-w-44 object-contain"
                  />
                </button>

                {/* PayU Button */}
                <a
                  href="https://u.payu.in/pIfM2bLKIJPL"
                  className="border border-zinc-400 overflow-hidden shadow-lg  rounded-lg hover:scale-110 duration-300"
                >
                  <Image
                    title="Best immigration consultants in Delhi"
                    src={payu}
                    alt="PayU"
                    className="w-full h-full max-w-44 object-contain"
                  />
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default page;
