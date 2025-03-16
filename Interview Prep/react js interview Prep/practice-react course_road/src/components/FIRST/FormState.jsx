import React, { useState } from "react";

function FormState() {
  let [formData, setFromData] = useState({
    firstname: "",
    lastName: "",
    email: "",
  });

  function handleChange(e) {
    console.log(e.target.name);
    console.log(e.target.value);

    setFromData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);

    setFromData(formData);
  }

  return (
    <form onClick={(e) => handleSubmit(e)}>
      <input
        name="firstname"
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder="first Name"
        value={formData.firstname}
      />
      <input
        name="lastName"
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder="last Name"
        value={formData.lastName}
      />
      <input
        name="email"
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder="Email"
        value={formData.email}
      />
      <button type="submit">submit</button>
    </form>
  );
}

export default FormState;
