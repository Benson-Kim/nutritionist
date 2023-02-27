import Axios from "axios";
import React, { useEffect, useState } from "react";
import Accordion from "../components/Accordion";
import Table from "../components/Table";

const Queries = () => {
  const [clientId, setClientId] = useState("");
  const [mealDate, setMealDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [query1, setQuery1] = useState([]);
  const [query2, setQuery2] = useState([]);
  const [query3, setQuery3] = useState([]);
  const [query4, setQuery4] = useState([]);
  const [query6, setQuery6] = useState([]);
  const [query7, setQuery7] = useState([]);
  const [query8, setQuery8] = useState([]);
  const [query9, setQuery9] = useState([]);
  const [query10, setQuery10] = useState([]);
  const [query11, setQuery11] = useState([]);
  const [query12, setQuery12] = useState([]);
  const [query13, setQuery13] = useState([]);

  const BASEURL = "http://localhost:3002/api";

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.get(`${BASEURL}/query2/${clientId}/${mealDate}`).then((data) => {
      setQuery2(data.data);
    });
    Axios.get(`${BASEURL}/query4/${mealDate}`).then((data) => {
      setQuery4(data.data);
    });

    Axios.get(`${BASEURL}/query12/${mealDate}`).then((data) => {
      setQuery12(data.data);
    });
    Axios.get(`${BASEURL}/query13/${startDate}/${endDate}`).then((data) => {
      setQuery13(data.data);
    });
  };

  useEffect(() => {
    Axios.get(`${BASEURL}/query1`).then((data) => {
      setQuery1(data.data);
    });
    Axios.get(`${BASEURL}/query3`).then((data) => {
      setQuery3(data.data);
    });
    Axios.get(`${BASEURL}/query6`).then((data) => {
      setQuery6(data.data);
    });
    Axios.get(`${BASEURL}/query7`).then((data) => {
      setQuery7(data.data);
    });
    Axios.get(`${BASEURL}/query8`).then((data) => {
      setQuery8(data.data);
    });
    Axios.get(`${BASEURL}/query9`).then((data) => {
      setQuery9(data.data);
    });
    Axios.get(`${BASEURL}/query10`).then((data) => {
      setQuery10(data.data);
    });
    Axios.get(`${BASEURL}/query11`).then((data) => {
      setQuery11(data.data);
    });
  }, []);

  return (
    <div className="my-8 md:my-10 lg:my-12 px-4 bg-blue-600">
      <section className="max-w-6xl mx-auto text-center">
        <Accordion title="All Clients" content={<Table data={query1} />} />
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
                    value={clientId}
                    onChange={(event) => setClientId(event.target.value)}
                  />
                </label>

                <label className="flex gap-1 items-center font-semibold text-lg">
                  Date:
                  <input
                    type="date"
                    name="MEAL_DATE"
                    className=" px-2 py-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                    value={mealDate}
                    onChange={(event) => setMealDate(event.target.value)}
                  />
                </label>

                <input
                  type="submit"
                  className="bg-gray-700 text-white font-normal px-2 py-1 rounded bg-opacity-70 cursor-pointer hover:bg-opacity-100 transition ease-in-out duration-300"
                />
              </form>
              {query2.length <= 0 ? (
                "No results found"
              ) : (
                <Table data={query2} />
              )}
            </>
          }
        />
        <Accordion
          title="information of the foods which their calories are less than the average of foods registered in the database"
          content={<Table data={query3} />}
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
                  Date:
                  <input
                    type="date"
                    name="MEAL_DATE"
                    className=" px-2 py-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                    value={mealDate}
                    onChange={(event) => setMealDate(event.target.value)}
                  />
                </label>

                <input
                  type="submit"
                  className="bg-gray-700 text-white font-normal px-2 py-1 rounded bg-opacity-70 cursor-pointer hover:bg-opacity-100 transition ease-in-out duration-300"
                />
              </form>
              <Table data={query4} />
            </>
          }
        />
        <Accordion
          title="show information of the youngest and oldest client"
          content={<Table data={query6} />}
        />
        <Accordion
          title="for each food that their calorie is higher than average, show the number of clients who consumed that food"
          content={<Table data={query7} />}
        />
        <Accordion
          title="show the average of calories of the foods that contain that specific ingredient."
          content={<Table data={query8} />}
        />
        <Accordion
          title="the average calorie consumption of females and males"
          content={<Table data={query9} />}
        />
        <Accordion
          title="what was the most consumed food, along with its calorie, category, number of people consumed"
          content={<Table data={query10} />}
        />
        <Accordion
          title="calculate weight status of each of each client "
          content={<Table data={query11} />}
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
                  Date:
                  <input
                    type="date"
                    name="MEAL_DATE"
                    className=" px-2 py-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                    value={mealDate}
                    onChange={(event) => setMealDate(event.target.value)}
                  />
                </label>

                <input
                  type="submit"
                  className="bg-gray-700 text-white font-normal px-2 py-1 rounded bg-opacity-70 cursor-pointer hover:bg-opacity-100 transition ease-in-out duration-300"
                />
              </form>
              {query12.length <= 0 ? (
                "No results found"
              ) : (
                <Table data={query12} />
              )}
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
                    value={startDate}
                    onChange={(event) => setStartDate(event.target.value)}
                  />
                </label>

                <label className="flex gap-1 items-center font-semibold text-lg">
                  End Date:
                  <input
                    type="date"
                    name="end_date"
                    className=" px-2 py-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                    value={endDate}
                    onChange={(event) => setEndDate(event.target.value)}
                  />
                </label>

                <input
                  type="submit"
                  className="bg-gray-700 text-white font-normal px-2 py-1 rounded bg-opacity-70 cursor-pointer hover:bg-opacity-100 transition ease-in-out duration-300"
                />
              </form>
              {query13.length <= 0 ? (
                "No results found"
              ) : (
                <Table data={query13} />
              )}
            </>
          }
        />
      </section>
    </div>
  );
};

export default Queries;
