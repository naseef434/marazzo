import React from 'react'

export default function Banner() {
  return (
    <div id="category" className="category-carousel hidden-xs">
    <div className="item">
      <div className="image">
        {" "}
        <img
          src="assets/images/banners/cat-banner-1.jpg"
          alt=""
          className="img-responsive"
        />{" "}
      </div>
      <div className="container-fluid">
        <div className="caption vertical-top text-left">
          <div className="big-text"> Big Sale </div>
          <div className="excerpt hidden-sm hidden-md"> Save up to 49% off </div>
          <div className="excerpt-normal hidden-sm hidden-md">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
          </div>
          <div className="buy-btn">
            <a href="#" className="lnk btn btn-primary">
              Show Now
            </a>
          </div>
        </div>
        {/* /.caption */}
      </div>
      {/* /.container-fluid */}
    </div>
  </div>
  
  )
}
