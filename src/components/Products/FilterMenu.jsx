import React from 'react'

export default function FilterMenu() {
  return (
    <div className="clearfix filters-container m-t-10">
    <div className="row">
      <div className="col col-sm-6 col-md-3 col-lg-3 col-xs-6">
        <div className="filter-tabs">
          <ul
            id="filter-tabs"
            className="nav nav-tabs nav-tab-box nav-tab-fa-icon"
          >
            <li className="active">
              {" "}
              <a data-toggle="tab" href="#grid-container">
                <i className="icon fa fa-th-large" />
                Grid
              </a>{" "}
            </li>
            <li>
              <a data-toggle="tab" href="#list-container">
                <i className="icon fa fa-bars" />
                List
              </a>
            </li>
          </ul>
        </div>
        {/* /.filter-tabs */}
      </div>
      {/* /.col */}
      <div className="col col-sm-12 col-md-5 col-lg-5 hidden-sm">
        <div className="col col-sm-6 col-md-6 no-padding">
          <div className="lbl-cnt">
            {" "}
            <span className="lbl">Sort by</span>
            <div className="fld inline">
              <div className="dropdown dropdown-small dropdown-med dropdown-white inline">
                <button
                  data-toggle="dropdown"
                  type="button"
                  className="btn dropdown-toggle"
                >
                  {" "}
                  Position <span className="caret" />{" "}
                </button>
                <ul role="menu" className="dropdown-menu">
                  <li role="presentation">
                    <a href="#">position</a>
                  </li>
                  <li role="presentation">
                    <a href="#">Price:Lowest first</a>
                  </li>
                  <li role="presentation">
                    <a href="#">Price:HIghest first</a>
                  </li>
                  <li role="presentation">
                    <a href="#">Product Name:A to Z</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* /.fld */}
          </div>
          {/* /.lbl-cnt */}
        </div>
        {/* /.col */}
        <div className="col col-sm-6 col-md-6 no-padding hidden-sm hidden-md">
          <div className="lbl-cnt">
            {" "}
            <span className="lbl">Show</span>
            <div className="fld inline">
              <div className="dropdown dropdown-small dropdown-med dropdown-white inline">
                <button
                  data-toggle="dropdown"
                  type="button"
                  className="btn dropdown-toggle"
                >
                  {" "}
                  1 <span className="caret" />{" "}
                </button>
                <ul role="menu" className="dropdown-menu">
                  <li role="presentation">
                    <a href="#">1</a>
                  </li>
                  <li role="presentation">
                    <a href="#">2</a>
                  </li>
                  <li role="presentation">
                    <a href="#">3</a>
                  </li>
                  <li role="presentation">
                    <a href="#">4</a>
                  </li>
                  <li role="presentation">
                    <a href="#">5</a>
                  </li>
                  <li role="presentation">
                    <a href="#">6</a>
                  </li>
                  <li role="presentation">
                    <a href="#">7</a>
                  </li>
                  <li role="presentation">
                    <a href="#">8</a>
                  </li>
                  <li role="presentation">
                    <a href="#">9</a>
                  </li>
                  <li role="presentation">
                    <a href="#">10</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* /.fld */}
          </div>
          {/* /.lbl-cnt */}
        </div>
        {/* /.col */}
      </div>
      {/* /.col */}
      <div className="col col-sm-6 col-md-4 col-xs-6 col-lg-4 text-right">
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
      {/* /.col */}
    </div>
    {/* /.row */}
  </div>
  
  )
}
