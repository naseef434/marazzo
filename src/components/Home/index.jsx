import React, { useContext } from "react";
import Sidebar from '../navbar/Sidebar'
import { navbarContext } from "../../context/NavbarContex";
import { HomepageProvider } from "../../context/HomepageContex";
export default function Index() {
  const sportsItems  = useContext(navbarContext);
 
  return (
      <HomepageProvider>
        
        <Sidebar sportsItems={sportsItems} />
      </HomepageProvider>
    
    
  )
}
