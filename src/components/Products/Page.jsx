import React from 'react'

import Banner from './Banner'
import Categories from './Categories'
import FilterMenu from './FilterMenu'
import LogoSlider from './LogoSlider'
import ProductGridView from './ProductGridView'
import ProductListView from './ProductListView'
import SidebarProducts from './SidebarProducts'

export default function Page() {
  return (
    <>
    <div className="body-content outer-top-xs">
  <div className="container">
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-3 sidebar">
         1
         <Categories />
          
          2
         <SidebarProducts /> 
    </div>
      {/* /.sidebar */}
      <div className="col-xs-12 col-sm-12 col-md-9 rht-col">
        {/* ========================================== SECTION – HERO ========================================= */}
        3
        <Banner />

        4
        <FilterMenu />
        <div className="search-result-container ">
          <div id="myTabContent" className="tab-content category-list">
            5

            <ProductGridView />
            <div className="tab-pane " id="list-container">
              <div className="category-product">
                  6
                  <ProductListView />
                </div>
              {/* /.category-product */}
            </div>
            {/* /.tab-pane #list-container */}
          </div>
          {/* /.tab-content */}
          <div className="clearfix filters-container bottom-row">
            <div className="text-right">
              <div className="pagination-container">
                <ul className="list-inline list-unstyled">
                  <li className="prev">
                    <a href="#">
                      <i className="fa fa-angle-left" />
                    </a>
                  </li>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li className="active">
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li className="next">
                    <a href="#">
                      <i className="fa fa-angle-right" />
                    </a>
                  </li>
                </ul>
                {/* /.list-inline */}
              </div>
              {/* /.pagination-container */}{" "}
            </div>
            {/* /.text-right */}
          </div>
          {/* /.filters-container */}
        </div>
        {/* /.search-result-container */}
      </div>
      {/* /.col */}
    </div>
    {/* /.row */}7
    <LogoSlider />
  </div>
  {/* /.body-content */}
</div>

    </>
  )
}
