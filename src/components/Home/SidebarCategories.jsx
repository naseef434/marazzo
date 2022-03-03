import React, { useContext } from "react";
import { navbarContext } from "../../context/NavbarContex";
export default function SidebarCtegories() {
  const sportsItems1  = useContext(navbarContext);
  return (
    <>        
             
                {/* ================================== TOP NAVIGATION ================================== */}
                <div className="side-menu animate-dropdown outer-bottom-xs">
              <div className="head"><i className="icon fa fa-align-justify fa-fw" /> Categories</div>
              <nav className="yamm megamenu-horizontal">
            
                   <ul className="nav">
                  
                   {sportsItems1?.map((sports)=>(
                            <li className="dropdown menu-item" key={sports.id}> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-shopping-bag" aria-hidden="true"/>{sports.name}</a>
                            <ul className="dropdown-menu mega-menu">
                              <li className="yamm-content">
                                <div className="row">
                                  <div className="col-sm-12 col-md-3">
                                    <ul className="links list-unstyled">
                                      {sports?.category?.map((cat)=>(
                                        <li key={cat.id}><a href="#">{cat.name}</a></li>
                                      ))}
                                      
                                     
                                    </ul>
                                  </div>
                                  
                                  {/* /.col */}
                                </div>
                                {/* /.row */} 
                              </li>
                              {/* /.yamm-content */}
                            </ul>
                            {/* /.dropdown-menu */} 
                            </li>
                          /* /.menu-item */
                    ))}
                 
                 
              
                
               
                  <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-envira" />Home and Garden</a> 
                    {/* /.dropdown-menu */} </li>
                  {/* /.menu-item */}
                </ul>
             
             
                {/* /.nav */} 
              </nav>
              {/* /.megamenu-horizontal */} 
            </div>
            {/* /.side-menu */} 
            {/* ================================== TOP NAVIGATION : END ================================== */} 
   </>
  )
}
