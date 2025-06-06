import {  useState } from "react";
import { useNavigate } from "react-router";

function Login() {
  let initial = {
    username: "",
    password: "",
  };
  let [auth, setAuth] = useState(initial);

  let navigate = useNavigate();


  function handleLogin(e) {
    e.preventDefault();
    let userDetails = localStorage.getItem("user");

    const result = JSON.parse(userDetails);

    if (result.username == auth.username && result.password == auth.password) {
      localStorage.setItem("login", JSON.stringify({ login: true }));
      navigate("/blog");
    } else {
      alert("invalid input");
    }

    setAuth(initial);
  }

  function handleChange(e) {
    let { name, value } = e.target;

    setAuth({ ...auth, [name]: value });
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm mb-6 md:mb-0 md:mr-8 transition-shadow hover:shadow-xl border border-gray-100"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Login
        </h2>
        <div className="flex flex-col gap-5">
          <input
            type="text"
            name="username"
            value={auth.username}
            onChange={handleChange}
            placeholder="Username"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow hover:shadow placeholder-gray-400"
          />
          <input
            name="password"
            value={auth.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow hover:shadow placeholder-gray-400"
          />
          <button className="bg-blue-500 text-white rounded-md px-4 py-2 font-semibold hover:bg-blue-600 transition-colors shadow hover:shadow-lg">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
