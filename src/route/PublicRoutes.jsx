import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navabr from "../components/navbar";
import {NavBarProvider} from '../context/NavbarContex';
export default function PublicRoutes() {
  return (
    <>
      <NavBarProvider>
        <Navabr />
        <Outlet />
        <Footer />
      </NavBarProvider>
    </>
  );
}
