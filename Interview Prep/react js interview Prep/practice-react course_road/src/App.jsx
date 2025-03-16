import { useState } from "react";
import "./App.css";
// import Book from "./components/Book";
// import People from "./components/People";
// import Counter from "./components/Counter";
// import DoM from "./components/DoM";
import One from "./components/FIRST/One";
import FormState from "./components/FIRST/FormState";

function App({ children }) {
  // const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-300 h-screen">
      {/* <h1 className="text-3xl font-bold underline">
        <p>Home</p>
        <Book>{children}</Book>
      </h1>
      <People title="physciology " author="paul jesson" />
      <Counter />
      <DoM/> */}
      {/* <One/> */}
      <FormState/>
    </div>
  );
}

export default App;
