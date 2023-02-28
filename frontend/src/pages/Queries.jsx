import Axios from "axios";
import React, { useEffect, useState } from "react";
import Accordion from "../components/Accordion";

const Queries = () => {
  const [clientId, setClientId] = useState("");
  const [mealDate, setMealDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

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

  const BASEURL = "http://localhost:3002/api";

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

  const query1cols = [
    "firstname",
    "surname",
    "weight",
    "height",
    "sex",
    "age",
    "telephone",
  ];
  const query2cols = ["Meal Name", "Meal Date", "Meal Time", "Client ID"];
  const query3cols = ["Food ID", "Name", "Categories", "Calories"];
  const query4cols = ["Firstname", "Surname"];
  const query6cols = query1cols;
  const query7cols = ["Food Name", "Num of Clients"];
  const query8cols = ["Ingredient", "Average Calories"];
  const query9cols = ["Sex", "Average Calories"];
  const query10cols = ["Food Name", "Calories", "Category", "Num of Consumers"];
  const query11cols = [...query1cols, "Weight Status"];
  const query12cols = ["Weight Status", "Meal Date", "Meal Time"];
  const query13cols = ["Ingredient", "Total Amount"];

  return (
    <div className="my-8 md:my-10 lg:my-12 px-4 ">
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
                {query1?.map((val, idx) => {
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
                <table className="min-w-full divide-y divide-gray-200 table-fixed ">
                  <thead className="bg-gray-100 ">
                    <tr>
                      {query2cols?.map((col, idx) => (
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
                    {query2?.map((val, idx) => {
                      return (
                        <tr key={idx}>
                          <td className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                            {val.mealName}
                          </td>
                          <td className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                            {formatDate(val.mealDate)}
                          </td>
                          <td className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                            {val.mealTime}
                          </td>
                          <td className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                            {val.clientID}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
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
              <table className="min-w-full divide-y divide-gray-200 table-fixed ">
                <thead className="bg-gray-100 ">
                  <tr>
                    {query4cols?.map((col, idx) => (
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
                  {query4?.map((val, idx) => {
                    return (
                      <tr key={idx}>
                        <td className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                          {val.firstname}
                        </td>
                        <td className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                          {val.surname}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
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
                <table className="min-w-full divide-y divide-gray-200 table-fixed ">
                  <thead className="bg-gray-100 ">
                    <tr>
                      {query12cols?.map((col, idx) => (
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
                    {query12?.map((val, idx) => {
                      return (
                        <tr key={idx}>
                          <td className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                            {val.weight_status}
                          </td>
                          <td className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                            {formatDate(val.mealDate)}
                          </td>
                          <td className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                            {val.average_time}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
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
                  <tbody>
                    {query13?.map((val, idx) => {
                      return (
                        <tr key={idx}>
                          <td className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                            {val.ingredient_name}
                          </td>
                          <td className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                            {val.total_amount}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </>
          }
        />
      </section>
    </div>
  );
};

export default Queries;
