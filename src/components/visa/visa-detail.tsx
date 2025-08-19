import VisaAside from "./side";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import Queans from "../home/queans";
import { FaRegCheckCircle } from "react-icons/fa";

export default function Visadetails({ data }: any) {
  return (
    <div className="flex flex-wrap justify-between gap-y-7 lg:px-28 md:p-20 sm:p-12 p-7 relative min-h-screen w-full">
      <div className="text-zinc-600 md:w-[64%] w-full space-y-6 md:space-y-9">
        <Image
          src={data?.img}
          alt=""
          className="w-full object-cover lg:h-[450px] sm:h-[400px] h-52 mx-auto"
        />
        <h1 className="text-zinc-900 md:text-5xl font-bold text-3xl">
          {data?.title}
        </h1>
        {data?.desc?.map((detail: any) => (
          <div key={detail.id} className="space-y-4 ">
            {detail.heading && (
              <h2 className="md:text-3xl font-semibold text-zinc-700 text-2xl">
                <span dangerouslySetInnerHTML={{ __html: detail.heading }} />
              </h2>
            )}

            {detail.para &&
              detail.para.map((datatext: any) => (
                <p className="text-zinc-700 font-medium" key={datatext?.id}>
                  <span dangerouslySetInnerHTML={{ __html: datatext.text }} />
                </p>
              ))}

            {detail.list && (
              <ul className="space-y-3 mb-3  w-full">
                {detail.list.map((lists: any) => (
                  <li key={lists?.id} className="text-zinc-600 flex gap-2">
                    <FaRegCheckCircle className="text-color1 mt-1 min-w-4" />
                    <span dangerouslySetInnerHTML={{ __html: lists.text }} />
                  </li>
                ))}
              </ul>
            )}
            {detail.table && (
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto border border-gray-300 bg-gray-50">
                  <thead>
                    <tr>
                      {detail.table?.theading?.map((head: any) => (
                        <th
                          key={head.id}
                          className="font-bold text-lg text-left text-white bg-color1   p-4 border-b border-r"
                        >
                          {head.text}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {detail.table?.trows?.map((rows: any) => (
                      <tr key={rows.id}>
                        {rows?.tcols?.map((row: any) => (
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

            {detail.img && (
              <Image
                src={detail?.img}
                alt=""
                className="w-full object-cover lg:h-[450px] sm:h-[400px] h-52 mx-auto"
              />
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
