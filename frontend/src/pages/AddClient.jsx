import React, { useState } from "react";
import axios from "axios";

const AddClient = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    surname: "",
    weight: "",
    height: "",
    sex: "",
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
      await axios.post("/api/client/create", formData);
      alert("Client added successfully!");
    } catch (error) {
      console.error(error);
      alert("Error adding client!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstname">First Name:</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="surname">Surname:</label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="weight">Weight:</label>
        <input
          type="text"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          type="text"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="sex">Sex:</label>
        <input
          type="text"
          id="sex"
          name="sex"
          value={formData.sex}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="telephone">Telephone:</label>
        <input
          type="text"
          id="telephone"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Client</button>
    </form>
  );
};

export default AddClient;
