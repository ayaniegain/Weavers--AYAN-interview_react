import { BrowserRouter } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CartContext from "./context/cartContext.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CartContext>
    <App />
  </CartContext>
  </BrowserRouter>
)
