import Axios from "axios";
import React, { useEffect, useState } from "react";
import Accordion from "../components/Accordion";
import Table from "../components/Table";

const Queries = ({ clientList }) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log();
  };

  const [query1, setQuery1] = useState([]);
  const [query2, setQuery2] = useState([]);
  const [query3, setQuery3] = useState([]);
  const [query4, setQuery4] = useState([]);
  const [query5, setQuery5] = useState([]);
  const [query6, setQuery6] = useState([]);
  const [query7, setQuery7] = useState([]);
  const [query8, setQuery8] = useState([]);
  const [query9, setQuery9] = useState([]);
  const [query10, setQuery10] = useState([]);
  const [query11, setQuery11] = useState([]);
  const [query12, setQuery12] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3002/api/query3").then((data) => {
      setQuery3(data.data);
    });
    Axios.get("http://localhost:3002/api/query6").then((data) => {
      setQuery6(data.data);
    });
    Axios.get("http://localhost:3002/api/query7").then((data) => {
      setQuery7(data.data);
    });
    Axios.get("http://localhost:3002/api/query8").then((data) => {
      setQuery8(data.data);
    });
    Axios.get("http://localhost:3002/api/query9").then((data) => {
      setQuery9(data.data);
    });
    Axios.get("http://localhost:3002/api/query10").then((data) => {
      setQuery10(data.data);
    });
    Axios.get("http://localhost:3002/api/query11").then((data) => {
      setQuery11(data.data);
    });
  }, []);

  const query1cols = [
    "firstname",
    "surname",
    "weight",
    "height",
    "sex",
    "age",
    "telephone",
  ];
  const query2cols = ["Food ID", "Name", "Categories", "Calories"];
  const query3cols = ["Food ID", "Name", "Categories", "Calories"];
  const query4cols = ["Food ID", "Name", "Categories", "Calories"];
  const query5cols = ["Food ID", "Name", "Categories", "Calories"];
  const query6cols = query1cols;
  const query7cols = ["Food Name", "Num of Clients"];
  const query8cols = ["Ingredient", "Average Calories"];
  const query9cols = ["Sex", "Average Calories"];
  const query10cols = ["Food Name", "Calories", "Category", "Num of Consumers"];
  const query11cols = [...query1cols, "Weight Status"];
  const query12cols = [...query1cols, "Weight Status"];
  const query13cols = ["Ingredient", "Total Amount"];

  return (
    <div className="my-8 md:my-10 lg:my-12 px-4 bg-blue-600">
      <section className="max-w-6xl mx-auto text-center">
        <Accordion
          title="All Clients"
          content={
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
              </table>
            </>
          }
        />
        <Accordion
          title="information of the foods which their calories are less than the average of foods registered in the database"
          // content={<Table columns={query3cols} data={query3} />}
          content={
            <table className="min-w-full divide-y divide-gray-200 table-fixed ">
              <thead className="bg-gray-100 ">
                <tr>
                  {query3cols?.map((col, idx) => (
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
                {query3?.map((val, idx) => {
                  return (
                    <tr key={idx}>
                      <td className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                        {val.FoodID}
                      </td>
                      <td className="py-0.5 capitalize px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                        {val.Name}
                      </td>
                      <td className="py-0.5 capitalize px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                        {val.category}
                      </td>
                      <td className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                        {val.calories}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          }
        />
        <Accordion
          title="show information of the foods which their calories are less than the average of foods registered in the database"
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
              </table>
            </>
          }
        />
        <Accordion
          title="show the name of the client who consumed the highest amount of calorie in a specific date"
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
              </table>
            </>
          }
        />
        <Accordion
          title="show information of the youngest and oldest client"
          content={
            <table className="min-w-full divide-y divide-gray-200 table-fixed ">
              <thead className="bg-gray-100 ">
                <tr>
                  {query6cols?.map((col, idx) => (
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
                {query6?.map((val, idx) => {
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
          title="for each food that their calorie is higher than average, show the number of clients who consumed that food"
          content={
            <table className="min-w-full divide-y divide-gray-200 table-fixed ">
              <thead className="bg-gray-100 ">
                <tr>
                  {query7cols?.map((col, idx) => (
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
                {query7?.map((val, idx) => {
                  return (
                    <tr key={idx}>
                      <td className="py-0.5 px-6 capitalize text-sm font-medium text-gray-900 whitespace-nowrap">
                        {val.name}
                      </td>
                      <td className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                        {val.num_clients}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          }
        />
        <Accordion
          title="show the average of calories of the foods that contain that specific ingredient."
          content={
            <table className="min-w-full divide-y divide-gray-200 table-fixed ">
              <thead className="bg-gray-100 ">
                <tr>
                  {query8cols?.map((col, idx) => (
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
                {query8?.map((val, idx) => {
                  return (
                    <tr key={idx}>
                      <td className="py-0.5 px-6 capitalize text-sm font-medium text-gray-900 whitespace-nowrap">
                        {val.ingredient}
                      </td>
                      <td className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                        {val.avg_calories}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          }
        />
        <Accordion
          title="the average calorie consumption of females and males"
          content={
            <table className="min-w-full divide-y divide-gray-200 table-fixed ">
              <thead className="bg-gray-100 ">
                <tr>
                  {query9cols?.map((col, idx) => (
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
                {query9?.map((val, idx) => {
                  return (
                    <tr key={idx}>
                      <td className="py-0.5 px-6 capitalize text-sm font-medium text-gray-900 whitespace-nowrap">
                        {val.sex}
                      </td>
                      <td className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                        {val.avg_calories}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          }
        />
        <Accordion
          title="what was the most consumed food, along with its calorie, category, number of people consumed"
          content={
            <table className="min-w-full divide-y divide-gray-200 table-fixed ">
              <thead className="bg-gray-100 ">
                <tr>
                  {query10cols?.map((col, idx) => (
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
                {query10?.map((val, idx) => {
                  return (
                    <tr key={idx}>
                      <td className="py-0.5 px-6 capitalize text-sm font-medium text-gray-900 whitespace-nowrap">
                        {val.food_name}
                      </td>
                      <td className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                        {val.calories}
                      </td>
                      <td className="py-0.5 px-6 capitalize text-sm font-medium text-gray-900 whitespace-nowrap">
                        {val.category}
                      </td>
                      <td className="py-0.5 px-6 capitalize text-sm font-medium text-gray-900 whitespace-nowrap">
                        {val.num_consumers}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          }
        />
        <Accordion
          title="calculate weight status of each of each client "
          content={
            <table className="min-w-full divide-y divide-gray-200 table-fixed ">
              <thead className="bg-gray-100 ">
                <tr>
                  {query11cols?.map((col, idx) => (
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
                {query11?.map((val, idx) => {
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
                      <td className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                        {val.weight_status}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          }
        />
        <Accordion
          title="for each client weight status (underweight, healthy, overweight, obese) show the average time of the day that have consume their food on a specific date"
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
              </table>
            </>
          }
        />
        <Accordion
          title="show the ingredient which is used mostly in a specific week for obese clients"
          content={
            <>
              <form
                onSubmit={handleSubmit}
                className="shadow-md flex items-center justify-between border border-gray-900 px-4 py-2 rounded-md border-opacity-25 border-b-0 rounded-b-none mb-2"
              >
                <label className="flex gap-1 items-center font-semibold text-lg">
                  Start Date:
                  <input
                    type="date"
                    name="start_date"
                    className=" px-2 py-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                    value={inputs.start_date || ""}
                    onChange={handleChange}
                  />
                </label>

                <label className="flex gap-1 items-center font-semibold text-lg">
                  End Date:
                  <input
                    type="date"
                    name="end_date"
                    className=" px-2 py-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                    value={inputs.end_date || ""}
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
                    {query13cols?.map((col, idx) => (
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
              </table>
            </>
          }
        />
      </section>
    </div>
  );
};

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export default Queries;
