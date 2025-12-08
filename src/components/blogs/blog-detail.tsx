import Image from "next/image";
import Queans from "../home/queans";
import { FaRegCheckCircle } from "react-icons/fa";
import BlogAside from "./blog-side";

export default function Blogdetails({ data }: any) {
  return (
    <div className="flex flex-wrap justify-between gap-y-7 lg:px-28 md:p-20 sm:p-12 p-7 relative min-h-screen w-full">
      <div className="text-zinc-600 md:w-[64%] w-full space-y-6 md:space-y-9">
        <Image
          title={data?.imgAlt}
          src={`https://globeswayimmigration.com/backend/uploads/${data?.img}`}
          alt={data?.imgAlt}
          className="w-full object-cover lg:h-[450px] sm:h-[400px] h-52 mx-auto" 
          width={700} 
          height={400}
        />
        {data?.content?.map((detail: any, index: number) => (
          <div key={index} className="space-y-4">
            {detail.heading && (
              <div className="md:text-3xl font-semibold text-zinc-800 text-2xl">
                {/* {detail.heading} */}
                <span dangerouslySetInnerHTML={{ __html: detail.heading }} />
              </div>
            )}

            {detail.para &&
              detail.para.map((datatext: any, paraIndex: number) => (
                <p className="text-zinc-700 font-medium" key={paraIndex}>
                  <span dangerouslySetInnerHTML={{ __html: datatext }} />
                </p>
              ))}

            {detail.list && (
              <ul className="space-y-3 mb-3 w-full">
                {detail.list.map((lists: any, listIndex: number) => (
                  <li key={listIndex} className="text-zinc-600 flex font-medium gap-2">
                    <FaRegCheckCircle className="text-color1 mt-1 min-w-4" />
                    <span dangerouslySetInnerHTML={{ __html: lists }} />
                  </li>
                ))}
              </ul>
            )}

            {detail.table && detail.table.length > 0 && (
              <div className="my-8 space-y-6">
                {detail.table.map((tableData: any, tableIndex: number) => (
                  <div key={tableIndex}>
                    {tableData.heading && tableData.heading.length > 0 && (
                      <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
                        <div className="overflow-x-auto">
                          <table className="min-w-full">
                            <thead className="bg-gradient-to-r from-color1 to-color2">
                              <tr>
                                {tableData.heading.map((header: string, headerIndex: number) => (
                                  <th
                                    key={headerIndex}
                                    className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider border-r border-white/20 last:border-r-0"
                                  >
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-200">
                              {tableData.row && tableData.row.map((row: string[], rowIndex: number) => (
                                <tr
                                  key={rowIndex}
                                  className="hover:bg-gray-50 transition-colors duration-150"
                                >
                                  {row.map((cell: string, cellIndex: number) => (
                                    <td
                                      key={cellIndex}
                                      className={`px-6 py-4 text-sm border-r border-gray-200 last:border-r-0 text-gray-900 font-medium`}
                                    >
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        {tableData.note && tableData.note.trim() !== "" && (
                          <div className="bg-blue-50 border-t border-blue-100 px-6 py-4">
                            <div className="flex items-start gap-3">
                              <svg
                                className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <p className="text-sm md:text-base text-blue-800 leading-relaxed">
                                <span className="font-semibold">Note:</span> {tableData.note}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
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
        <BlogAside />
      </div>
    </div>
  );
}