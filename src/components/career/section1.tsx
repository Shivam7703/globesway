import React from 'react'
import { IoRocketSharp } from 'react-icons/io5'

function Careersec1() {
    const data =[
        {
        id:1,
        icon:<IoRocketSharp />,
        title: "Join Our Team",
        description: "We are looking for talented individuals to join our team and help us achieve our mission. If you are passionate about your work and want to make a difference, we would love to hear from you.",
        buttonText: "View Openings",
    },
      {
        id:2,
        icon:<IoRocketSharp />,
        title: "Join Our Team",
        description: "We are looking for talented individuals to join our team and help us achieve our mission. If you are passionate about your work and want to make a difference, we would love to hear from you.",
        buttonText: "View Openings",
    },
    {
        id:3,
        icon:<IoRocketSharp />,
        title: "Join Our Team",
        description: "We are looking for talented individuals to join our team and help us achieve our mission. If you are passionate about your work and want to make a difference, we would love to hear from you.",
        buttonText: "View Openings",
    },
]
  return (
    <div className="lg:px-28 md:px-20 sm:p-14 p-7 flex flex-wrap justify-between gap-y-6">
        {data.map((item) => (
            <div key={item.id} className="w-full md:w-[30%] bg-white shadow-lg p-6 rounded-lg">
            <div className="text-color1 text-4xl mb-4">
                {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-zinc-700 mb-4">{item.description}</p>
            <button className="bg-color1 text-white px-4 py-2 rounded hover:bg-color2 transition duration-300">
                {item.buttonText}
            </button>
            </div>
        ))}
    </div>
  )
}

export default Careersec1
