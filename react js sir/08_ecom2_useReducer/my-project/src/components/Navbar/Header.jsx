import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { CartListContext } from "../../context/cartContext";
import logo from "../../../src/assets/img/logo.svg";
import { useAuth, useDispatchAuth } from "../../context/authContext";
import Search from "../Search/Search";

function Header() {
  let { cartDetails } = useContext(CartListContext);
  let { loginUser } = useAuth();
  let { dispatch } = useDispatchAuth();



  function handleLogout() {
    dispatch({ type: "logout" });
    navigate("/login");
  }

  return (
    <div className="navbar flex justify-between bg-base-100 shadow-md">
      <div className="flex">
        <Link to={"/"}>
          {" "}
          <img src={logo} alt="logo" className="h-12 w-48" />{" "}
        </Link>
      </div>
      <div className="flex">
      <Search/>
        <div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cartDetails.Cartlength ? cartDetails.Cartlength : 0}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">
                  {cartDetails.Cartlength ? cartDetails.Cartlength : 0} Items
                </span>
                <span className="text-info">
                  Subtotal: $
                  {Math.floor(
                    cartDetails.totalPrice
                      ? cartDetails.totalPrice + cartDetails.deliveryCharge
                      : 0
                  )}
                </span>
                <div className="card-actions">
                  <NavLink to="/cart" className="btn btn-primary btn-block">
                    View cart
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div
                className={`w-10 rounded-full border-4 ${
                  loginUser ? "border-green-400" : "border-red-600"
                }`}
              >
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                {loginUser ? (
                  <a className="justify-between text-orange-400">
                    {loginUser.name}
                    <span className="badge bg-green-500 text-white">New</span>
                  </a>
                ) : (
                  <a className="justify-between">
                    USER
                    <span className="badge bg-green-500 text-white">New</span>
                  </a>
                )}
              </li>
              <li>
                <a>WishList ⭐</a>
              </li>

              {loginUser ? (
                <li>
                  <Link onClick={handleLogout}>SignOut</Link>
                </li>
              ) : (
                <li>
                  <Link to={"login"}>Login</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
