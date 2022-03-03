import React, { useState, createContext, useEffect } from "react";
import { urlGateWay } from "../services/service";
import * as serviceEndPoint from "../services/serviceEndPoint";

export const navbarContext = createContext();

export const NavBarProvider = (props) => {
  const [navbarItem, setnavbarItem] = useState([]);
  useEffect(async () => {
    const result = await urlGateWay.get(
      serviceEndPoint.sportsEndpoints.getNavbarItems
    );
    setnavbarItem(result?.data);
  }, []);

return(
    <navbarContext.Provider value={navbarItem}>
       {props.children}
    </navbarContext.Provider>
)
  
};
