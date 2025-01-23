import "./App.css";
import { Routes, Route } from "react-router";
import Header from "./components/Navbar/Header";
import Footer from "./components/Navbar/Footer";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NoPageFound from "./pages/NoPageFound";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details" element={<Details />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
