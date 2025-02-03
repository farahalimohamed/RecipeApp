import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import SideMenu from "../../Components/SideMenu/SideMenu";
import "./MainLayout.css";

export default function MainLayout() {
  return (
    <div>
    <div className="main-layout">
      <SideMenu className="side-menu" />
      <div className="content">
        <Outlet />
      </div>
    </div>
        <Footer />
    </div>
  );
}
