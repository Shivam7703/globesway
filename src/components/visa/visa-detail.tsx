import VisaAside from "./side";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import Queans from "../home/queans";
import { FaRegCheckCircle } from "react-icons/fa";

export default function Visadetails({data}: any) {
  return (
    <div className="flex flex-wrap justify-between gap-y-7 lg:px-28 md:p-20 sm:p-16 p-7 relative min-h-screen w-full">
      <div className="text-zinc-600 md:w-[64%] w-full space-y-6 md:space-y-9">
        <Image
          src={data?.img}
          alt=""
          className="w-full h-auto object-contain max-h-[560px] mx-auto"
        />
        <h1 className="text-black md:text-5xl font-bold text-3xl">
          {data?.title}
        </h1>
        {data?.desc?.map((detail: any) => (
  <div key={detail.id} className="space-y-4">
    {detail.heading && (
      <h2 className="text-black md:text-3xl font-normal text-2xl">
        {detail.heading}
      </h2>
    )}

    {detail.para && detail.para.map((datatext: any) => (
      <p className="text-black" key={datatext?.id}>{datatext.text}</p>
    ))}

    {detail.list && (
      <ul className="space-y-3 mb-3  w-full">
        {detail.list.map((lists: any) => (
          <li
            key={lists?.id}
            className="text-zinc-600 font-medium flex gap-2"
          >
            <FaRegCheckCircle className="text-color1 mt-1 min-w-4" />
            {lists?.text}
          </li>
        ))}
      </ul>
    )}
    {detail.table &&(
            <div className="overflow-x-auto">
    <table className="min-w-full table-auto border border-gray-300 bg-gray-50">
        <thead>
            <tr>
              {detail.table?.heading.map((head: any) => (
                <th key={head.id} className="font-bold text-lg text-left text-white bg-color1 p-4 border-b border-r">
                  {head.text}
                </th>))}
            </tr>
        </thead>
        <tbody>
          {detail.table?.heading.map((rows: any) => (
            <tr key={rows.id}>
              {rows?.data.map((row: any) => (
                <td key={row.id} className="p-4 border-b border-r">
                  {row.text}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
    </table>
</div>
    )}
  </div>
))}


        <br />
       {data?.questions && data?.questions.length > 0 && (
         <Queans
           title1={"FAQ's"}
           title2={"Briefly Asked Question"}
           faqData={data?.questions}
         />
       )}
      </div>

      <div className="md:w-[30%] w-full md:sticky top-10 space-y-5 sm:space-y-12 h-full">
        <VisaAside />
      </div>
    </div>
  );
}
