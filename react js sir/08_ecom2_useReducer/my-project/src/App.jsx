import "./App.css";
import { Routes, Route } from "react-router";
import Header from "./components/Navbar/Header";
import Footer from "./components/Navbar/Footer";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NoPageFound from "./pages/NoPageFound";
import Login from "./auth/Login";
import Register from "./auth/Register";
import PayentPage from "./pages/PayentPage";
import Protected from "./auth/Protected";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details" element={<Details />} />
        <Route path="cart" element={<Cart />} />
        <Route element={<Protected />}>
          <Route path="cart/payment" element={<PayentPage />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
