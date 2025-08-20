import React from 'react'

function OpenRole() {
     const data = [
        {
          id: 1,
          
          title: "HR Executive",
          description:
            "We are looking for talented individuals to join our team and help us achieve our mission. If you are passionate about your work and want to make a difference, we would love to hear from you.",
          buttonText: "Apply Now",
        },
        {
          id: 2,
          
          title: "Immigration Consultant",
          description:
            "We are looking for talented individuals to join our team and help us achieve our mission. If you are passionate about your work and want to make a difference, we would love to hear from you.",
          buttonText: "Apply Now",
        },
        {
          id: 3,
          
          title: "Visa Case Manager",
          description:
            "We are looking for talented individuals to join our team and help us achieve our mission. If you are passionate about your work and want to make a difference, we would love to hear from you.",
          buttonText: "Apply Now",
        },
      ];

     return (
       <section className="lg:px-28 md:px-20 sm:p-10 p-7 text-center relative slider1 flex flex-col items-center">
        
         <h2 className="text-zinc-800 font-extrabold text-3xl md:text-5xl max-w-2xl mx-auto mt-3 !leading-[1.1]">
Open Roles
         </h2>
   
         <div className="flex flex-wrap justify-between mt-5 gap-y-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="w-full md:w-[32%] bg-white border border-zinc-400 hover:shadow-xl duration-500 p-6 "
        >
          <h3 className="text-xl text-black font-bold mb-2">{item.title}</h3>
          <p className="text-zinc-700 mb-4">{item.description}</p>
          <button className="bg-color2 text-white px-4 py-2 rounded hover:bg-zinc-700 transition duration-300">
            {item.buttonText}
          </button>
        </div>
      ))}
    </div>
       </section>
     );
}

export default OpenRole
