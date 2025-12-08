"use client";
import { logo } from "@/assets";
import React, { useState } from "react";
import { RiWhatsappFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

function PopUp() {
  const [showPop, setShowPop] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => setShowForm(!showForm);
  const togglePop = () => setShowPop(!showPop);

  return (
    <div>
      {/* WhatsApp Button */}
      <a
        title="Best immigration consultants in Delhi"
        className="w-max fixed bottom-8 z-50 right-3 rounded-full bg-white"
        href="https://wa.me/+919220292921?text="
      >
        <RiWhatsappFill className="text-5xl text-green-600" />
      </a>

      <div className={`pop shadow-xl ${showPop ? "!hidden" : "block"}`}>
        <div className="relative ">
          <div
            className="text-white bg-black absolute -top-2 -right-2 cursor-pointer border border-white rounded-full px-2 py-1"
            onClick={togglePop}
          >
            ✕
          </div>
          <Image
            src="https://globeswayimmigration.com/pop.png"
            width={350}
            height={250}
            className="w-[60vw] max-w-80 cursor-pointer"
            alt="Best immigration consultants in Delhi"
            title="Best immigration consultants in Delhi"
            onClick={() =>
              (window.location.href =
                "https://globeswayimmigration.com/contact-us/")
            }
          />
        </div>
      </div>

      {/* Book Site Visit Button */}
      <div
        style={{
          padding: "7px 9px 23px",
          transform: "rotate(-90deg)",
          right: "10px",
          top: "35vh",
          zIndex: 40,
          width: "240px",
          transformOrigin: "right center",
        }}
        className="cursor-pointer rounded-lg  text-white hover:bg-color2 fixed text-center bg-color1 font-medium text-lg"
        onClick={toggleForm}
      >
        Book An Appointment
      </div>

      {/* Modal Form */}
      {showForm && (
        <div
          className="fixed top-0 left-0 z-[230] flex flex-col items-center justify-center bg-black/70"
          style={{ width: "100vw", height: "104vh" }}
        >
          <div
            className="text-white mb-2 cursor-pointer border-2 border-white rounded-full px-3 py-1"
            onClick={toggleForm}
          >
            ✕
          </div>
          <form
            className="bg-zinc-100 p-7 rounded-lg shadow-lg w-[90vw] max-w-[600px]"
            action="https://globeswayimmigration.com/contact.php"
            method="POST"
          >
            <div className="flex items-center justify-between mb-2">
              <Image
                title="Best immigration consultants in Delhi"
                src={logo}
                alt="Best immigration consultants in Delhi"
                width={150}
                height={80}
                className="mr-3 w-[25vw] max-w-[100px]"
              />
              <h2 className="text-xl sm:text-2xl text-color2 font-bold w-max">
                Book An Appointment
              </h2>
            </div>

            <div className="w-full flex justify-between flex-wrap gap-y-5">
              <div className="w-[48%]">
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-3 rounded-md text-base shadow-lg text-zinc-700 placeholder:text-zinc-700 border"
                  placeholder="Your Name"
                />
              </div>

              <div className="w-[48%]">
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-3 rounded-md text-base shadow-lg text-zinc-700 placeholder:text-zinc-700 border"
                  placeholder="Your Email"
                />
              </div>

              <div className="w-full">
                <input
                  type="number"
                  name="phone"
                  required
                  className="w-full p-3 rounded-md text-base shadow-lg text-zinc-700 placeholder:text-zinc-700 border"
                  placeholder="Contact No."
                />
              </div>

              <div className="w-full">
                <input
                  type="text"
                  name="country"
                  required
                  className="w-full p-3 rounded-md text-base shadow-lg text-zinc-700 placeholder:text-zinc-700 border"
                  placeholder="Country"
                />
              </div>

              <div className="w-[48%]">
                <select
                  name="education"
                  required
                  className="w-full p-3 bg-white rounded-md text-base shadow-lg text-zinc-700 border"
                >
                  <option value="">Select Education Level</option>
                  <option value="highschool">High School</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="master">Master's Degree</option>
                  <option value="phd">PhD</option>
                </select>
              </div>

              <div className="w-[48%]">
                <select
                  name="visa"
                  required
                  className="w-full p-3 bg-white rounded-md text-base shadow-lg text-zinc-700 border"
                >
                  <option value="">Visa Type</option>
                  <option value="pr">PR Visa</option>
                  <option value="study">Study Visa</option>
                  <option value="work">Work Visa</option>
                  <option value="tourist">Tourist Visa</option>
                  <option value="jobseeker">Job Seeker Visa</option>
                  <option value="visitors">Visitors Visa</option>
                </select>
              </div>

              <div className="w-full">
                <select
                  name="destination"
                  required
                  className="w-full p-3 rounded-md bg-white text-base shadow-lg text-zinc-700 border"
                >
                  <option value="">Country to Migrate</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="UK">UK</option>
                  <option value="Germany">Germany</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="UAE">UAE</option>
                </select>
              </div>

              <button
                type="submit"
                className="rounded-full w-full mb-3 -mt-1 text-white font-bold text-base py-3 px-6 bg-color1 hover:bg-black duration-300"
              >
                Submit Now &nbsp;→
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default PopUp;
