import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
