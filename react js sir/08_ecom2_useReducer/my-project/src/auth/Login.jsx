import React, { useState } from "react";

import Authimg from "../../src/assets/img/auth-background.jpg";
import { toast } from "react-toastify";

import { NavLink, useLocation, useNavigate } from "react-router";
import { useDispatchAuth } from "../context/authContext";

function Login() {
  let { user, dispatch, setLoginUser } = useDispatchAuth();

  let navigate = useNavigate();
  const location = useLocation();
  // const pathURL = location.state?.from || "/";
let  pathURL =   "/";
  if (localStorage.getItem("redirectUrl")) {
    pathURL = localStorage.getItem("redirectUrl")
    localStorage.removeItem("redirectUrl");
  }

  let initlogin = {
    email: "",
    password: "",
  };
  let [userData, setUserData] = useState(initlogin);

  function handleChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.email === "" || userData.password === "") {
      toast.warn("enter proper user data !");
    } else {
      let loginUserDetails = user.find(
        (singleuser) =>
          singleuser.email === userData?.email &&
          singleuser.password === userData?.password
      );

      if (loginUserDetails) {
        dispatch({ type: "login", payload: loginUserDetails });
        setLoginUser(loginUserDetails);
        toast.success("Login successfully !");
        navigate(pathURL, { replace: true });
      } else {
        toast.warn("user does't exists !");
      }
    }
    setUserData(initlogin);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Section - Form */}
        <form
          className="w-1/2 p-8 flex flex-col justify-center"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold text-gray-800">SIGN IN</h1>
          <p className="text-gray-600 text-sm mt-2">
            Welcome back! Please enter your credentials to log in.
          </p>

          <div className="mt-6">
            <label className="block text-gray-700 text-sm font-medium">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300">
            SIGN IN
          </button>

          <div className="mt-4 flex items-center justify-center text-sm">
            <p className="text-gray-600">Not a member?</p>
            <NavLink
              className="ml-2 text-blue-500 hover:underline"
              to={"/register"}
            >
              Sign Up
            </NavLink>
          </div>
        </form>

        {/* Right Section - Image */}
        <div className="w-1/2">
          <img
            src={Authimg}
            alt="Auth"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
