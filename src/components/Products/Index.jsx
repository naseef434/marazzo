
import React, { useState, useEffect, useContext } from "react";
import { urlGateWay } from "../../services/service";
import * as serviceEndPoint from "../../services/serviceEndPoint";
import BreadCrumb from '../breadcrumb/BreadCrumb'

import Page from './Page'

export default function Index() {
    useEffect(async() => {
      const result = await urlGateWay.get(serviceEndPoint.productsEndpoints.getCategory)
      console.log(result);
    }, [])
    
  return (
      <>
      <BreadCrumb />
        <Page />
        
      </>
    

  )
}
