import { Route, Routes } from "react-router";
import "./App.css";
import Cart from "./page/Cart";
import Details from "./page/Details";
import Home from "./page/Home";
import Header from "./components/Header";
import ProtecTedCard from "./page/ProtecTedCard";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />

        <Route path="/cart" element={<ProtecTedCard />}>
          <Route index element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
