import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";

import "./index.css";
import App from "./App.jsx";
import CartContext from "./context/cartContext.jsx";
import AuthContext from "./context/authContext.jsx";
import FetchProductContext from "./context/fetchProduct.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <FetchProductContext>

    <AuthContext>
      <CartContext>
        <ToastContainer position="top-center" />
        <App />
      </CartContext>
    </AuthContext>
  </FetchProductContext>
  </BrowserRouter>
);
