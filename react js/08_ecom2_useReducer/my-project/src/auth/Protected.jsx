import React from "react";
import { Navigate, useLocation, Outlet } from "react-router";
import { useAuth } from "../context/authContext";

function Protected() {
  const location = useLocation();
  let { loginUser } = useAuth();

  console.log(loginUser)

  if (!loginUser) {
    localStorage.setItem("redirectUrl", location.pathname);
  }
  return loginUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} replace />
  );
}

export default Protected;
