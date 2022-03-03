import React, { useState, createContext, useEffect } from "react";
import { urlGateWay } from "../services/service";
import * as serviceEndPoint from "../services/serviceEndPoint";

export const homepageContext = createContext();

export const HomepageProvider = (props)=>{
    const [myCurousal, setmyCarousel] = useState([]);
    useEffect(async () => {
        try {
          const response = await urlGateWay.get(
            `${serviceEndPoint.homePageEndpoints.getShoweCase}`
          );
          setmyCarousel(response?.data?.curosal)
        } catch (error) {
          console.log("showcase api rice an error ", error);
        }
      }, []);
      return(
        <homepageContext.Provider value={myCurousal}>
           {props.children}
      </homepageContext.Provider>
      )
}