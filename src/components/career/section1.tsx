import React from "react";
import { IoRocketSharp } from "react-icons/io5";

function Careersec1() {
  const data = [
    {
      id: 1,
      icon: <IoRocketSharp />,
      title: "Visa Officers",
      description:
        "We are looking for Visa Officers to join our team. Your role will be to handle visa applications, check documents, and guide clients through the process. If you are detail-oriented, good with communication, and want to grow in the immigration field, this role is for you.",
      buttonText: "View Openings",
    },
    {
      id: 2,
      icon: <IoRocketSharp />,
      title: "Immigration Consultants",
      description:
        "We are looking for Immigration Consultants who can advise and support clients in choosing the right visa pathway. The role includes assessing eligibility, preparing applications, and providing clear guidance. If you have knowledge of immigration rules, strong communication skills, and enjoy helping people achieve their goals, we’d love to have you on our team.",
      buttonText: "View Openings",
    },
    {
      id: 3,
      icon: <IoRocketSharp />,
      title: "Legal Assistants",
      description:
        "We are looking for Legal Assistants to help our consultants and lawyers with immigration cases. The role involves preparing documents, keeping records, and assisting in research. If you are organized, reliable, and interested in legal work, this position is a great way to start your career.",
      buttonText: "View Openings",
    },
  ];
  return (
    <div className="lg:px-28 md:px-20 sm:p-12 p-7 flex flex-wrap justify-between gap-y-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="w-full md:w-[32%] bg-zinc-100 border hover:translate-y-[-15px] duration-300 shadow-lg p-6 rounded-lg"
        >
          <div className="text-color1 text-4xl mb-4">{item.icon}</div>
          <h3 className="text-xl text-black font-bold mb-2">{item.title}</h3>
          <p className="text-zinc-700 mb-4">{item.description}</p>
          <button className="bg-color1 text-white px-4 py-2 rounded hover:bg-color2 transition duration-300">
            {item.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Careersec1;
