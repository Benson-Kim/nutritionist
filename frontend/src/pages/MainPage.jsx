import React, { useState, useEffect } from "react";
import Axios from "axios";
import Queries from "./Queries";
import Accordion from "../components/Accordion";

function MainPage() {
  const [clientList, setClientList] = useState([]);

  const query1cols = [
    "firstname",
    "surname",
    "weight",
    "height",
    "sex",
    "age",
    "telephone",
  ];

  useEffect(() => {
    Axios.get("http://localhost:3002/api/query1").then((data) => {
      // console.log(data)
      setClientList(data.data);
    });
  }, []);

  // console.log(clientList);

  return (
    <div className="MainPage flex flex-col">
      <div className="my-1 sm:my-2 md:my-3 shadow-md  rounded bg-slate-50">
        <div className="px-6 text-left items-center h-14 select-none flex justify-between flex-row">
          <h5 className="flex-1 font-semibold ">Clients</h5>
          <div
            className="flex-none pl-2 text-3xl font-semibold cursor-pointer "
            // onClick={toggleExpanded}
          >
            <button className="bg-gray-700 text-white font-normal px-2 py-1 rounded bg-opacity-70 cursor-pointer hover:bg-opacity-100 transition ease-in-out duration-300">
              Add Client
            </button>
          </div>
        </div>
        <div
          className="px-6 pt-0 overflow-hidden transition-[max-height] duration-500 ease-in ${
           max-h-min"
        >
          <section className="pb-4 text-left font-light">
            <table className="min-w-full divide-y divide-gray-200 table-fixed ">
              <thead className="bg-gray-100 ">
                <tr>
                  {query1cols?.map((col, idx) => (
                    <th
                      key={idx}
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {clientList?.map((val, idx) => {
                  return (
                    <tr key={idx}>
                      <td className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                        {val.firstname}
                      </td>
                      <td className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                        {val.surname}
                      </td>
                      <td className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                        {val.weight}
                      </td>
                      <td className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                        {val.height}
                      </td>
                      <td className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                        {val.sex}
                      </td>
                      <td className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                        {val.age}
                      </td>
                      <td className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                        {val.telephone}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        </div>
      </div>
      <Queries />
    </div>
  );
}

export default MainPage;
