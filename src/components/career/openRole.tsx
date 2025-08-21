import React from 'react'

function OpenRole() {
     const data = [
        {
          id: 1,
          
          title: "HR Executive",
          description:
            "We are looking for a dedicated HR Executive to join our team. Your role will be to handle recruitment, employee relations, and day-to-day HR operations. If you are organized, people-friendly, and passionate about building a positive workplace, then this role is for you.",
          buttonText: "Apply Now",
        },
        {
          id: 2,
          
          title: "Immigration Consultant",
          description:
            "We are looking for skilled Immigration Consultants who can guide clients with the right visa solutions. Your role will be to assess eligibility, explain processes, and support clients in their journey abroad. If you have strong communication skills and a passion for helping people achieve global opportunities, this role is for you.",
          buttonText: "Apply Now",
        },
        {
          id: 3,
          
          title: "Visa Case Manager",
          description:
            "We are looking for detail-oriented Visa Case Managers to manage client applications and documentation. Your role will involve coordinating with clients, preparing files, and ensuring smooth visa processing. If you are organized, accurate, and eager to grow in the immigration industry, this is for you.",
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
