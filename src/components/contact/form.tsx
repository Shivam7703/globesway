import React from "react";
import { contactsec1 as data } from "@/data/homeData";

function Form() {
  return (
    <>
      <div className="lg:px-28 md:p-20 sm:p-12 p-7">
        <div className="flex items-stretch flex-wrap mx-auto shadow-xl z-20">
          <div className="md:w-[52%] md:px-16  p-7  w-full bg-white">
            <h4 className="text-color1 font-medium text-lg w-max">
              Enquiry Form{" "}
            </h4>
            <h2 className="text-zinc-800 font-extrabold text-3xl md:text-5xl ">
              Send your query
            </h2>
            <form
              action="form.php"
              method="POST"
              className=" w-full mt-6 md:mt-12"
            >
              <div className="w-full flex justify-between flex-wrap gap-y-5">
                <div className="w-[48%]">
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full p-3 rounded-md text-base shadow-lg text-zinc-700 border"
                    placeholder="Your Name"
                  />
                </div>

                <div className="w-[48%]">
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full p-3 rounded-md text-base shadow-lg text-zinc-700 border"
                    placeholder="Your Email"
                  />
                </div>

                <div className="w-full">
                  <input
                    name="phone"
                    type="number"
                    maxLength={15}
                    minLength={7}
                    required
                    className="w-full p-3 rounded-md text-base shadow-lg text-zinc-700 border"
                    placeholder="Contact No."
                  />
                </div>

                <div className="w-full">
                  <input
                    name="subject"
                    type="text"
                    required
                    className="w-full p-3 rounded-md text-base shadow-lg text-zinc-700 border"
                    placeholder="Subject"
                  />
                </div>

                <div className="w-full">
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full p-3 rounded-md text-base shadow-lg text-zinc-700 border"
                    placeholder="Your Query"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="rounded-lg mb-3 -mt-1 text-white font-bold text-base py-4 px-6 w-max bg-color1 hover:bg-black duration-300"
                >
                  Submit Now &nbsp;→
                </button>
              </div>
            </form>
          </div>

          {data && (
            <div className="md:w-[42%] p-7 w-full">
              <h4 className="text-color1 font-medium text-lg w-max">
                Need any help?
              </h4>
              <h2 className="text-zinc-800 font-extrabold text-3xl md:text-5xl ">
                Get in touch with us!
              </h2>
              <p className="text-zinc-600">
                Have questions or need help? Contact our support team of
                friendly people and request fast assistance and professional
                advice concerning visas and travel plans. We are here to assist
                you all the way around.
              </p>
              <div className="mt-6 space-y-6">
                {data?.detail?.map((data: any) => (
                  <div
                    key={data.id}
                    className="flex group  gap-5 md:gap-8  items-center"
                  >
                    <div className="text-3xl md:text-4xl bg-color1 group-hover:bg-black text-white flex items-center justify-center p-5  md:p-7  duration-300">
                      {data?.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font2 font-bold text-black group-hover:text-color1 duration-300 mb-1">
                        {data?.title}
                      </h3>
                      <a
                        title="Best immigration consultants in Delhi"
                        className="text-zinc-600 hover:text-zinc-200"
                        href={data?.slug || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {data?.text}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full md:h-[550px] h-80">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.861245838251!2d77.14724467529143!3d28.693796975631276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d034f8893d0cd%3A0x9f30cf26433038ae!2sGlobesway%20Immigration%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1755867321711!5m2!1sen!2sin"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  );
}

export default Form;
