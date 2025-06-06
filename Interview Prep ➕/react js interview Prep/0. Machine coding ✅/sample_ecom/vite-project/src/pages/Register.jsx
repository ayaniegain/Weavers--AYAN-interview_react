import React, { useState } from "react";

function Register() {
  let initial = {
    username: "",
    password: "",
  };
  let [auth, setAuth] = useState(initial);

  function handleRegister(e) {
    e.preventDefault();

    const result= JSON.stringify(auth)
    localStorage.setItem("user", result)

    setAuth(initial)
  }

  function handleChange(e) {

    let {name,value}=e.target

    setAuth({...auth,[name]:value})

    
  }

  console.log(auth)

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm transition-shadow hover:shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={auth.username}
            onChange={(e)=>handleChange(e)}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition-shadow hover:shadow"
          />
          <input
            type="password"
            placeholder="Password"
            value={auth.password}
            name="password"
                        onChange={(e)=>handleChange(e)}

            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition-shadow hover:shadow"
          />
          <button className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600 transition">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
