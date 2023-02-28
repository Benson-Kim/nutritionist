import React, { useState } from "react";
import axios from "axios";

const AddClient = () => {
  const [formData, setFormData] = useState({
    clientid: "",
    firstname: "",
    surname: "",
    weight: "",
    height: "",
    sex: "",
    age: "",
    telephone: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3002/api/client/create", formData);
      alert("Client added successfully!");
    } catch (error) {
      console.error(error.message);
      alert("Error adding client!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-md border border-gray-900 px-4 py-2 rounded-lg rounded-t-none border-opacity-25 border-b-0 rounded-b-none mb-2"
    >
      <div className="flex items-center justify-between mb-2">
        <label htmlFor="clientid" className="text-lg">
          Client ID:
        </label>
        <input
          type="number"
          id="clientid"
          name="clientid"
          className=" px-3 py-2 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded outline-none focus:border-slate-900 block"
          value={formData.clientid}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center justify-between mb-2">
        <label htmlFor="firstname" className="text-lg">
          First Name:
        </label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          className=" px-3 py-2 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded outline-none focus:border-slate-900 block"
          value={formData.firstname}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center justify-between mb-2">
        <label htmlFor="surname" className="text-lg">
          Surname:
        </label>
        <input
          type="text"
          id="surname"
          name="surname"
          className=" px-3 py-2 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded outline-none focus:border-slate-900 block"
          value={formData.surname}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center justify-between mb-2">
        <label htmlFor="weight" className="text-lg">
          Weight:
        </label>
        <input
          type="text"
          id="weight"
          name="weight"
          className=" px-3 py-2 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded outline-none focus:border-slate-900 block"
          value={formData.weight}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center justify-between mb-2">
        <label htmlFor="height" className="text-lg">
          Height:
        </label>
        <input
          type="text"
          id="height"
          name="height"
          className=" px-3 py-2 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded outline-none focus:border-slate-900 block"
          value={formData.height}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center justify-between mb-2">
        <label htmlFor="sex" className="text-lg">
          Sex:
        </label>
        <input
          type="text"
          id="sex"
          name="sex"
          className=" px-3 py-2 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded outline-none focus:border-slate-900 block"
          value={formData.sex}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center justify-between mb-2">
        <label htmlFor="age" className="text-lg">
          Age:
        </label>
        <input
          type="number"
          id="age"
          name="age"
          className=" px-3 py-2 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded outline-none focus:border-slate-900 block"
          value={formData.age}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center justify-between mb-2">
        <label htmlFor="telephone" className="text-lg">
          Telephone:
        </label>
        <input
          type="text"
          id="telephone"
          name="telephone"
          className=" px-3 py-2 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded outline-none focus:border-slate-900 block"
          value={formData.telephone}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="bg-gray-700 text-white font-normal px-3 py-2 rounded bg-opacity-70 cursor-pointer hover:bg-opacity-100 transition ease-in-out duration-300"
      >
        Add Client
      </button>
    </form>
  );
};

export default AddClient;
