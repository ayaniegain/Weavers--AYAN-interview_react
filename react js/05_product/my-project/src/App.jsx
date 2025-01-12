import NavMain from "./components/navbar/NavMain";
import ProductPage from "./page/Product.Page";
import productsList from "./data/sample.data.json";

export default function App() {
  return (
     <div className="min-h-screen flex flex-col bg-white" > 
    <NavMain>
      <ProductPage products={productsList.products} />
    </NavMain>
    </div>
  );
}
