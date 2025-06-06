import { Navigate, Outlet } from "react-router";

function Protected() {
  let isLOggedIn = localStorage.getItem("login");

  let login = JSON.parse(isLOggedIn);

  console.log(login);

  return login ? <Outlet /> : <Navigate to="/login" />;
}

export default Protected;
