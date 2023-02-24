import Axios from "axios";
import React, { useEffect, useState } from "react";
import Accordion from "./Accordion";

const Queries = ({ clientList }) => {
  const [inputs, setInputs] = useState({});

  const CLIENT_ID = inputs.CLIENT_ID;
  const MEAL_DATE = inputs.MEAL_DATE;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(CLIENT_ID);
    Axios.get(`http://localhost:3002/api/query2`, {
      CLIENT_ID,
      MEAL_DATE,
    }).then((data) => {
      console.log(data);
      // setQuery2(data.data);
    });
  };

  const [query2, setQuery2] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3002/api/query2`, {
      CLIENT_ID,
      MEAL_DATE,
    }).then((data) => {
      console.log(data);
      // setQuery2(data.data);
    });
  }, []);

  return (
    <div className="my-8 md:my-10 lg:my-12 px-4 bg-blue-600">
      <section className="max-w-6xl mx-auto text-center">
        <Accordion
          title="All Clients"
          content={
            <table className="min-w-full divide-y divide-gray-200 table-fixed ">
              <thead className="bg-gray-100 ">
                <tr>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                  >
                    firstname
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                  >
                    surname
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                  >
                    weight
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                  >
                    height
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                  >
                    sex
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                  >
                    age
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                  >
                    telephone
                  </th>
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
          }
        />
        <Accordion
          title="meal information of a specific client for a specific date"
          content={
            <>
              <form
                onSubmit={handleSubmit}
                className="shadow-md flex items-center justify-between border border-gray-900 px-4 py-2 rounded-md border-opacity-25 border-b-0 rounded-b-none mb-2"
              >
                <label className="flex gap-1 items-center font-semibold text-lg">
                  Client ID:
                  <input
                    type="number"
                    name="CLIENT_ID"
                    className=" px-2 py-1.5 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                    value={inputs.CLIENT_ID || ""}
                    onChange={handleChange}
                  />
                </label>

                <label className="flex gap-1 items-center font-semibold text-lg">
                  Date:
                  <input
                    type="date"
                    name="MEAL_DATE"
                    className=" px-2 py-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                    value={inputs.MEAL_DATE || ""}
                    onChange={handleChange}
                  />
                </label>

                <input
                  type="submit"
                  className="bg-gray-700 text-white font-normal px-2 py-1 rounded bg-opacity-70 cursor-pointer hover:bg-opacity-100 transition ease-in-out duration-300"
                />
              </form>
              <table className="min-w-full divide-y divide-gray-200 table-fixed ">
                <thead className="bg-gray-100 ">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                    >
                      firstname
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                    >
                      surname
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                    >
                      weight
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                    >
                      height
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                    >
                      sex
                    </th>
                  </tr>
                </thead>
                {/*  
                <tbody>
                  {query2?.map((val, idx) => {
                    return (
                      <tr key={idx}>
                        <td className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                          {val.mealid}
                        </td>
                        <td className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                          {val.clientid}
                        </td>
                        <td className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                          {val.mealname}
                        </td>
                        <td className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                          {val.mealdate}
                        </td>
                        <td className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                          {val.mealtime}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>*/}
              </table>
            </>
          }
        />
        <Accordion
          title="information of the foods which their calories are less than the average of foods registered in the database"
          content={lorem}
        />
        <Accordion
          title="show information of the foods which their calories are less than the average of foods registered in the database"
          content={lorem}
        />
        <Accordion
          title="show the name of the client who consumed the highest amount of calorie in a specific date"
          content={lorem}
        />
        <Accordion
          title="show information of the youngest and oldest client"
          content={lorem}
        />
        <Accordion
          title="for each food that their calorie is higher than average, show the number of clients who consumed that food"
          content={lorem}
        />
        <Accordion
          title="show the average of calories of the foods that contain that specific ingredient."
          content={lorem}
        />
        <Accordion
          title="the average calorie consumption of females and males"
          content={lorem}
        />
        <Accordion
          title="what was the most consumed food, along with its calorie, category, number of people consumed"
          content={lorem}
        />
        <Accordion
          title="calculate weight status of each of each client "
          content={lorem}
        />
        <Accordion
          title="for each client weight status (underweight, healthy, overweight, obese) show the average time of the day that have consume their food on a specific date"
          content={lorem}
        />
        <Accordion
          title="show the ingredient which is used mostly in a specific week for obese clients"
          content={lorem}
        />
      </section>
    </div>
  );
};

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export default Queries;
