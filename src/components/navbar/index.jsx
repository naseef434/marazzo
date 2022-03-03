import React, { useState, useEffect, useContext } from "react";

import Navbar from "./Navbar";
import { navbarContext } from "../../context/NavbarContex";
export default function Index() {
  const navbarItem = useContext(navbarContext);

  return (
    <>
    
      <Navbar navbarItem={navbarItem} />
    </>
  );
}
