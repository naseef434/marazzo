import React from 'react'
import BlogSlider from '../Home/BlogSlider'
import CarouselBanner from '../Home/CarouselBanner'
import FeaturedProducts from '../Home/FeaturedProducts'
import FeauturedProductNew from '../Home/FeauturedProductNew'
import HotDeals from '../Home/HotDeals'
import NewProduct from '../Home/NewProduct'
import NewsLetter from '../Home/NewsLetter'
import SidebarCtegories from '../Home/SidebarCategories'
import SpecialDeals from '../Home/SpecialDeals'
import SpecialOffer from '../Home/SpecialOffer'
import Tags from '../Home/Tags'
import Testmonial from '../Home/Testmonial'
import WideProducts from '../Home/WideProducts'
import WideProductsNew from '../Home/WideProductsNew'

export default function Sidebar() {
 
  return (
    <div>
    {/* ============================================== HEADER : END ============================================== */}
    <div className="body-content outer-top-vs" id="top-banner-and-menu">
      <div className="container">
        <div className="row"> 
          {/* ============================================== SIDEBAR ============================================== */}
          <div className="col-xs-12 col-sm-12 col-md-3 sidebar"> 
            
            <SidebarCtegories />

            <HotDeals />

            <SpecialOffer />
           
           {/* <Tags /> */}

            {/* <SpecialDeals /> */}
            
            {/* <NewsLetter /> */}
       
            <Testmonial />
          </div>
          {/* /.sidemenu-holder */} 
          {/* ============================================== SIDEBAR : END ============================================== */} 
          {/* ============================================== CONTENT ============================================== */}
          <div className="col-xs-12 col-sm-12 col-md-9 homebanner-holder"> 
            <CarouselBanner />
            <NewProduct />
            <WideProducts />
            <FeaturedProducts />
            <WideProductsNew /> 
            <BlogSlider />
            {/* <FeauturedProductNew /> */}
          </div>
          {/* /.homebanner-holder */} 
          {/* ============================================== CONTENT : END ============================================== */} 
        </div>
        {/* /.row */} 
        {/* ============================================== BRANDS CAROUSEL ============================================== */}
        <div id="brands-carousel" className="logo-slider">
          <div className="logo-slider-inner">
            <div id="brand-slider" className="owl-carousel brand-slider custom-carousel owl-theme">
              <div className="item m-t-15"> <a href="#" className="image"> <img data-echo="assets/images/brands/brand1.png" src="assets/images/blank.gif" alt="" /> </a> </div>
              {/*/.item*/}
              <div className="item m-t-10"> <a href="#" className="image"> <img data-echo="assets/images/brands/brand2.png" src="assets/images/blank.gif" alt="" /> </a> </div>
              {/*/.item*/}
              <div className="item"> <a href="#" className="image"> <img data-echo="assets/images/brands/brand3.png" src="assets/images/blank.gif" alt="" /> </a> </div>
              {/*/.item*/}
              <div className="item"> <a href="#" className="image"> <img data-echo="assets/images/brands/brand4.png" src="assets/images/blank.gif" alt="" /> </a> </div>
              {/*/.item*/}
              <div className="item"> <a href="#" className="image"> <img data-echo="assets/images/brands/brand5.png" src="assets/images/blank.gif" alt="" /> </a> </div>
              {/*/.item*/}
              <div className="item"> <a href="#" className="image"> <img data-echo="assets/images/brands/brand6.png" src="assets/images/blank.gif" alt="" /> </a> </div>
              {/*/.item*/}
              <div className="item"> <a href="#" className="image"> <img data-echo="assets/images/brands/brand2.png" src="assets/images/blank.gif" alt="" /> </a> </div>
              {/*/.item*/}
              <div className="item"> <a href="#" className="image"> <img data-echo="assets/images/brands/brand4.png" src="assets/images/blank.gif" alt="" /> </a> </div>
              {/*/.item*/}
              <div className="item"> <a href="#" className="image"> <img data-echo="assets/images/brands/brand1.png" src="assets/images/blank.gif" alt="" /> </a> </div>
              {/*/.item*/}
              <div className="item"> <a href="#" className="image"> <img data-echo="assets/images/brands/brand5.png" src="assets/images/blank.gif" alt="" /> </a> </div>
              {/*/.item*/} 
            </div>
            {/* /.owl-carousel #logo-slider */} 
          </div>
          {/* /.logo-slider-inner */} 
        </div>
        {/* /.logo-slider */} 
        {/* ============================================== BRANDS CAROUSEL : END ============================================== */} 
      </div>
      {/* /.container */} 
    </div>
    {/* /#top-banner-and-menu */} 
    {/* ============================================== INFO BOXES ============================================== */}
    <div className="row our-features-box">
      <div className="container">
        <ul>
          <li>
            <div className="feature-box">
              <div className="icon-truck" />
              <div className="content-blocks">We ship worldwide</div>
            </div>
          </li>
          <li>
            <div className="feature-box">
              <div className="icon-support" />
              <div className="content-blocks">call 
                +1 800 789 0000</div>
            </div>
          </li>
          <li>
            <div className="feature-box">
              <div className="icon-money" />
              <div className="content-blocks">Money Back Guarantee</div>
            </div>
          </li>
          <li>
            <div className="feature-box">
              <div className="icon-return" />
              <div className="content">30 days return</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    {/* /.info-boxes */} 
    {/* ============================================== INFO BOXES : END ============================================== */}
  </div>
  
  
  )
}
