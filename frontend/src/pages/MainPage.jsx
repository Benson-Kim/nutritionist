import React, { useState, useEffect } from "react";
import Axios from "axios";
import Modal from "./Modal";
import AddClient from "./AddClient";

function MainPage() {
  const [clientList, setClientList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const deleteClient = async (clientId) => {
    try {
      const res = await Axios.delete(
        "http://localhost:3002/api/client/" + clientId
      );
      alert(`Client with id ${clientId} deleted`);
      return res.data;
    } catch (error) {
      console.error(error.message);
    }
  };

  const query1cols = [
    "firstname",
    "surname",
    "weight",
    "height",
    "sex",
    "age",
    "telephone",
    "action",
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
        <div className="container mx-auto py-4">
          <div className="flex justify-between mx-5 my-2 py-1 bg-slate-100 items-center ">
            <h2 className="py-1 px-4 text-slate-800 font-semibold text-lg">
              Clients
            </h2>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
              onClick={handleOpenModal}
            >
              Add Client
            </button>{" "}
          </div>
          <Modal isOpen={isOpen} onClose={handleCloseModal}>
            <AddClient />
          </Modal>
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
                      <td className="py-0.5 px-6 flex gap-0.5 text-sm font-medium text-gray-900 whitespace-nowrap">
                        <button className="rounded bg-blue-500 bg-opacity-50 text-white hover:bg-opacity-100 transition ease-in duration-300 px-1.5 py-0.5">
                          Edit
                        </button>
                        <button
                          className="rounded bg-orange-500 bg-opacity-50 text-white hover:bg-opacity-100 transition ease-in duration-300 px-1.5 py-0.5"
                          onClick={async () => {
                            await deleteClient(val.ClientID);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
