import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function MainLayout(props) {
  return (
    <div className=" min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
