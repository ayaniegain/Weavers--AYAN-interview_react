import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import CartPage from "./page/CartPage";

import cartData from "./CartData/CartData.json"

function App() {
  return (
    <Navigation>
      <CartPage cartData={cartData}/>
    </Navigation>
  );
}

export default App;
