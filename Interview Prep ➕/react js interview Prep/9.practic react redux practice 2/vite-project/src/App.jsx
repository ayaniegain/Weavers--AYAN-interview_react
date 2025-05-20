import { Route, Routes } from "react-router";

import { lazy, Suspense } from "react";
import Layout from "./Layout";
import SearchResults from "./components/SearchResults";

const Todo = lazy(() => import("./page/Todo"));
const Product = lazy(() => import("./page/Product"));

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/product" element={<Product />} />
          <Route path="/search-results" element={<SearchResults />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
