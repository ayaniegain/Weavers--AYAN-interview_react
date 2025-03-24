import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function NavMain({ children }) {
  return (
    <div>
      {/* <Header /> */}
      <div className="min-h-screen pt-16  bg-white">{children}</div>
      <Footer />
    </div>
  );
}

export default NavMain;
