import React from 'react'

export default function Test() {
  return (
    <div>
  {/* ============================================== HEADER ============================================== */}
  <header className="header-style-1"> 
    {/* ============================================== TOP MENU ============================================== */}
    <div className="top-bar animate-dropdown">
      <div className="container">
        <div className="header-top-inner">
          <div className="cnt-account">
            <ul className="list-unstyled">
              <li className="myaccount"><a href="#"><span>My Account</span></a></li>
              <li className="wishlist"><a href="#"><span>Wishlist</span></a></li>
              <li className="header_cart hidden-xs"><a href="#"><span>My Cart</span></a></li>
              <li className="check"><a href="#"><span>Checkout</span></a></li>
              <li className="login"><a href="#"><span>Login</span></a></li>
            </ul>
          </div>
          {/* /.cnt-account */}
          <div className="cnt-block">
            <ul className="list-unstyled list-inline">
              <li className="dropdown dropdown-small"> <a href="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown"><span className="value">USD </span><b className="caret" /></a>
                <ul className="dropdown-menu">
                  <li><a href="#">USD</a></li>
                  <li><a href="#">INR</a></li>
                  <li><a href="#">GBP</a></li>
                </ul>
              </li>
              <li className="dropdown dropdown-small lang"> <a href="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown"><span className="value">English </span><b className="caret" /></a>
                <ul className="dropdown-menu">
                  <li><a href="#">English</a></li>
                  <li><a href="#">French</a></li>
                  <li><a href="#">German</a></li>
                </ul>
              </li>
            </ul>
            {/* /.list-unstyled */} 
          </div>
          {/* /.cnt-cart */}
          <div className="clearfix" />
        </div>
        {/* /.header-top-inner */} 
      </div>
      {/* /.container */} 
    </div>
    {/* /.header-top */} 
    {/* ============================================== TOP MENU : END ============================================== */}
    <div className="main-header">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-3 logo-holder"> 
            {/* ============================================================= LOGO ============================================================= */}
            <div className="logo"> <a href="home.html"> <img src="assets/images/logo.png" alt="logo" /> </a> </div>
            {/* /.logo */} 
            {/* ============================================================= LOGO : END ============================================================= */} </div>
          {/* /.logo-holder */}
          <div className="col-lg-7 col-md-6 col-sm-8 col-xs-12 top-search-holder"> 
            {/* /.contact-row */} 
            {/* ============================================================= SEARCH AREA ============================================================= */}
            <div className="search-area">
              <form>
                <div className="control-group">
                  <ul className="categories-filter animate-dropdown">
                    <li className="dropdown"> <a className="dropdown-toggle" data-toggle="dropdown" href="category.html">Categories <b className="caret" /></a>
                      <ul className="dropdown-menu" role="menu">
                        <li className="menu-header">Computer</li>
                        <li role="presentation"><a role="menuitem" tabIndex={-1} href="category.html">- Clothing</a></li>
                        <li role="presentation"><a role="menuitem" tabIndex={-1} href="category.html">- Electronics</a></li>
                        <li role="presentation"><a role="menuitem" tabIndex={-1} href="category.html">- Shoes</a></li>
                        <li role="presentation"><a role="menuitem" tabIndex={-1} href="category.html">- Watches</a></li>
                      </ul>
                    </li>
                  </ul>
                  <input className="search-field" placeholder="Search here..." />
                  <a className="search-button" href="#" /> </div>
              </form>
            </div>
            {/* /.search-area */} 
            {/* ============================================================= SEARCH AREA : END ============================================================= */} </div>
          {/* /.top-search-holder */}
          <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12 animate-dropdown top-cart-row"> 
            {/* ============================================================= SHOPPING CART DROPDOWN ============================================================= */}
            <div className="dropdown dropdown-cart"> <a href="#" className="dropdown-toggle lnk-cart" data-toggle="dropdown">
                <div className="items-cart-inner">
                  <div className="basket">
                    <div className="basket-item-count"><span className="count">2</span></div>
                    <div className="total-price-basket"> <span className="lbl">Shopping Cart</span> <span className="value">$4580</span> </div>
                  </div>
                </div>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <div className="cart-item product-summary">
                    <div className="row">
                      <div className="col-xs-4">
                        <div className="image"> <a href="detail.html"><img src="assets/images/products/p4.jpg" alt="" /></a> </div>
                      </div>
                      <div className="col-xs-7">
                        <h3 className="name"><a href="index8a95.html?page-detail">Simple Product</a></h3>
                        <div className="price">$600.00</div>
                      </div>
                      <div className="col-xs-1 action"> <a href="#"><i className="fa fa-trash" /></a> </div>
                    </div>
                  </div>
                  {/* /.cart-item */}
                  <div className="clearfix" />
                  <hr />
                  <div className="clearfix cart-total">
                    <div className="pull-right"> <span className="text">Sub Total :</span><span className="price">$600.00</span> </div>
                    <div className="clearfix" />
                    <a href="checkout.html" className="btn btn-upper btn-primary btn-block m-t-20">Checkout</a> </div>
                  {/* /.cart-total*/} 
                </li>
              </ul>
              {/* /.dropdown-menu*/} 
            </div>
            {/* /.dropdown-cart */} 
            {/* ============================================================= SHOPPING CART DROPDOWN : END============================================================= */} </div>
          {/* /.top-cart-row */} 
        </div>
        {/* /.row */} 
      </div>
      {/* /.container */} 
    </div>
    {/* /.main-header */} 
    {/* ============================================== NAVBAR ============================================== */}
    <div className="header-nav animate-dropdown">
      <div className="container">
        <div className="yamm navbar navbar-default" role="navigation">
          <div className="navbar-header">
            <button data-target="#mc-horizontal-menu-collapse" data-toggle="collapse" className="navbar-toggle collapsed" type="button"> 
              <span className="sr-only">Toggle navigation</span> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
          </div>
          <div className="nav-bg-class">
            <div className="navbar-collapse collapse" id="mc-horizontal-menu-collapse">
              <div className="nav-outer">
                <ul className="nav navbar-nav">
                  <li className="active dropdown"> <a href="home.html">Home</a> </li>
                  <li className="dropdown yamm mega-menu"> <a href="home.html" data-hover="dropdown" className="dropdown-toggle" data-toggle="dropdown">Clothing</a>
                    <ul className="dropdown-menu container">
                      <li>
                        <div className="yamm-content ">
                          <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                              <h2 className="title">Men</h2>
                              <ul className="links">
                                <li><a href="#">Dresses</a></li>
                                <li><a href="#">Shoes </a></li>
                                <li><a href="#">Jackets</a></li>
                                <li><a href="#">Sunglasses</a></li>
                                <li><a href="#">Sport Wear</a></li>
                                <li><a href="#">Blazers</a></li>
                                <li><a href="#">Shirts</a></li>
                              </ul>
                            </div>
                            {/* /.col */}
                            <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                              <h2 className="title">Women</h2>
                              <ul className="links">
                                <li><a href="#">Handbags</a></li>
                                <li><a href="#">Jwellery</a></li>
                                <li><a href="#">Swimwear </a></li>
                                <li><a href="#">Tops</a></li>
                                <li><a href="#">Flats</a></li>
                                <li><a href="#">Shoes</a></li>
                                <li><a href="#">Winter Wear</a></li>
                              </ul>
                            </div>
                            {/* /.col */}
                            <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                              <h2 className="title">Boys</h2>
                              <ul className="links">
                                <li><a href="#">Toys &amp; Games</a></li>
                                <li><a href="#">Jeans</a></li>
                                <li><a href="#">Shirts</a></li>
                                <li><a href="#">Shoes</a></li>
                                <li><a href="#">School Bags</a></li>
                                <li><a href="#">Lunch Box</a></li>
                                <li><a href="#">Footwear</a></li>
                              </ul>
                            </div>
                            {/* /.col */}
                            <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                              <h2 className="title">Girls</h2>
                              <ul className="links">
                                <li><a href="#">Sandals </a></li>
                                <li><a href="#">Shorts</a></li>
                                <li><a href="#">Dresses</a></li>
                                <li><a href="#">Jwellery</a></li>
                                <li><a href="#">Bags</a></li>
                                <li><a href="#">Night Dress</a></li>
                                <li><a href="#">Swim Wear</a></li>
                              </ul>
                            </div>
                            {/* /.col */}
                            <div className="col-xs-12 col-sm-6 col-md-4 col-menu banner-image"> <img className="img-responsive" src="assets/images/banners/top-menu-banner.jpg" alt="" /> </div>
                            {/* /.yamm-content */} 
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown mega-menu"> 
                    <a href="category.html" data-hover="dropdown" className="dropdown-toggle" data-toggle="dropdown">Electronics <span className="menu-label hot-menu hidden-xs">hot</span> </a>
                    <ul className="dropdown-menu container">
                      <li>
                        <div className="yamm-content">
                          <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                              <h2 className="title">Laptops</h2>
                              <ul className="links">
                                <li><a href="#">Gaming</a></li>
                                <li><a href="#">Laptop Skins</a></li>
                                <li><a href="#">Apple</a></li>
                                <li><a href="#">Dell</a></li>
                                <li><a href="#">Lenovo</a></li>
                                <li><a href="#">Microsoft</a></li>
                                <li><a href="#">Asus</a></li>
                                <li><a href="#">Adapters</a></li>
                                <li><a href="#">Batteries</a></li>
                                <li><a href="#">Cooling Pads</a></li>
                              </ul>
                            </div>
                            {/* /.col */}
                            <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                              <h2 className="title">Desktops</h2>
                              <ul className="links">
                                <li><a href="#">Routers &amp; Modems</a></li>
                                <li><a href="#">CPUs, Processors</a></li>
                                <li><a href="#">PC Gaming Store</a></li>
                                <li><a href="#">Graphics Cards</a></li>
                                <li><a href="#">Components</a></li>
                                <li><a href="#">Webcam</a></li>
                                <li><a href="#">Memory (RAM)</a></li>
                                <li><a href="#">Motherboards</a></li>
                                <li><a href="#">Keyboards</a></li>
                                <li><a href="#">Headphones</a></li>
                              </ul>
                            </div>
                            {/* /.col */}
                            <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                              <h2 className="title">Cameras</h2>
                              <ul className="links">
                                <li><a href="#">Accessories</a></li>
                                <li><a href="#">Binoculars</a></li>
                                <li><a href="#">Telescopes</a></li>
                                <li><a href="#">Camcorders</a></li>
                                <li><a href="#">Digital</a></li>
                                <li><a href="#">Film Cameras</a></li>
                                <li><a href="#">Flashes</a></li>
                                <li><a href="#">Lenses</a></li>
                                <li><a href="#">Surveillance</a></li>
                                <li><a href="#">Tripods</a></li>
                              </ul>
                            </div>
                            {/* /.col */}
                            <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                              <h2 className="title">Mobile Phones</h2>
                              <ul className="links">
                                <li><a href="#">Apple</a></li>
                                <li><a href="#">Samsung</a></li>
                                <li><a href="#">Lenovo</a></li>
                                <li><a href="#">Motorola</a></li>
                                <li><a href="#">LeEco</a></li>
                                <li><a href="#">Asus</a></li>
                                <li><a href="#">Acer</a></li>
                                <li><a href="#">Accessories</a></li>
                                <li><a href="#">Headphones</a></li>
                                <li><a href="#">Memory Cards</a></li>
                              </ul>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4 col-menu custom-banner"> <a href="#"><img alt="" src="assets/images/banners/top-menu-banner1.jpg" /></a> </div>
                          </div>
                          {/* /.row */} 
                        </div>
                        {/* /.yamm-content */} </li>
                    </ul>
                  </li>
                  <li className="dropdown hidden-sm"> <a href="category.html">Health &amp; Beauty <span className="menu-label new-menu hidden-xs">new</span> </a> </li>
                  <li className="dropdown hidden-sm"> <a href="category.html">Watches</a> </li>
                  <li className="dropdown"> <a href="contact.html">Jewellery</a> </li>
                  <li className="dropdown"> <a href="contact.html">Shoes</a> </li>
                  <li className="dropdown"> <a href="contact.html">Kids &amp; Girls</a> </li>
                  <li className="dropdown"> <a href="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">Pages</a>
                    <ul className="dropdown-menu pages">
                      <li>
                        <div className="yamm-content">
                          <div className="row">
                            <div className="col-xs-12 col-menu">
                              <ul className="links">
                                <li><a href="home.html">Home</a></li>
                                <li><a href="category.html">Category</a></li>
                                <li><a href="detail.html">Detail</a></li>
                                <li><a href="shopping-cart.html">Shopping Cart Summary</a></li>
                                <li><a href="checkout.html">Checkout</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="blog-details.html">Blog Detail</a></li>
                                <li><a href="contact.html">Contact</a></li>
                                <li><a href="sign-in.html">Sign In</a></li>
                                <li><a href="my-wishlist.html">Wishlist</a></li>
                                <li><a href="terms-conditions.html">Terms and Condition</a></li>
                                <li><a href="track-orders.html">Track Orders</a></li>
                                <li><a href="product-comparison.html">Product-Comparison</a></li>
                                <li><a href="faq.html">FAQ</a></li>
                                <li><a href="404.html">404</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown  navbar-right special-menu"> <a href="#">Get 30% off on selected items</a> </li>
                </ul>
                {/* /.navbar-nav */}
                <div className="clearfix" />
              </div>
              {/* /.nav-outer */} 
            </div>
            {/* /.navbar-collapse */} 
          </div>
          {/* /.nav-bg-class */} 
        </div>
        {/* /.navbar-default */} 
      </div>
      {/* /.container-class */} 
    </div>
    {/* /.header-nav */} 
    {/* ============================================== NAVBAR : END ============================================== */} 
  </header>
  {/* ============================================== HEADER : END ============================================== */}
  <div className="body-content outer-top-vs" id="top-banner-and-menu">
    <div className="container">
      <div className="row"> 
        {/* ============================================== SIDEBAR ============================================== */}
        <div className="col-xs-12 col-sm-12 col-md-3 sidebar"> 
          {/* ================================== TOP NAVIGATION ================================== */}
          <div className="side-menu animate-dropdown outer-bottom-xs">
            <div className="head"><i className="icon fa fa-align-justify fa-fw" /> Categories</div>
            <nav className="yamm megamenu-horizontal">
              <ul className="nav">
                <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-shopping-bag" aria-hidden="true" />Clothing</a>
                  <ul className="dropdown-menu mega-menu">
                    <li className="yamm-content">
                      <div className="row">
                        <div className="col-sm-12 col-md-3">
                          <ul className="links list-unstyled">
                            <li><a href="#">Dresses</a></li>
                            <li><a href="#">Shoes </a></li>
                            <li><a href="#">Jackets</a></li>
                            <li><a href="#">Sunglasses</a></li>
                            <li><a href="#">Sport Wear</a></li>
                            <li><a href="#">Blazers</a></li>
                            <li><a href="#">Shirts</a></li>
                            <li><a href="#">Shorts</a></li>
                          </ul>
                        </div>
                        {/* /.col */}
                        <div className="col-sm-12 col-md-3">
                          <ul className="links list-unstyled">
                            <li><a href="#">Handbags</a></li>
                            <li><a href="#">Jwellery</a></li>
                            <li><a href="#">Swimwear </a></li>
                            <li><a href="#">Tops</a></li>
                            <li><a href="#">Flats</a></li>
                            <li><a href="#">Shoes</a></li>
                            <li><a href="#">Winter Wear</a></li>
                            <li><a href="#">Night Suits</a></li>
                          </ul>
                        </div>
                        {/* /.col */}
                        <div className="col-sm-12 col-md-3">
                          <ul className="links list-unstyled">
                            <li><a href="#">Toys &amp; Games</a></li>
                            <li><a href="#">Jeans</a></li>
                            <li><a href="#">Shirts</a></li>
                            <li><a href="#">Shoes</a></li>
                            <li><a href="#">School Bags</a></li>
                            <li><a href="#">Lunch Box</a></li>
                            <li><a href="#">Footwear</a></li>
                            <li><a href="#">Wipes</a></li>
                          </ul>
                        </div>
                        {/* /.col */}
                        <div className="col-sm-12 col-md-3">
                          <ul className="links list-unstyled">
                            <li><a href="#">Sandals </a></li>
                            <li><a href="#">Shorts</a></li>
                            <li><a href="#">Dresses</a></li>
                            <li><a href="#">Jwellery</a></li>
                            <li><a href="#">Bags</a></li>
                            <li><a href="#">Night Dress</a></li>
                            <li><a href="#">Swim Wear</a></li>
                            <li><a href="#">Toys</a></li>
                          </ul>
                        </div>
                        {/* /.col */} 
                      </div>
                      {/* /.row */} 
                    </li>
                    {/* /.yamm-content */}
                  </ul>
                  {/* /.dropdown-menu */} </li>
                {/* /.menu-item */}
                <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-laptop" aria-hidden="true" />Electronics</a> 
                  {/* ================================== MEGAMENU VERTICAL ================================== */}
                  <ul className="dropdown-menu mega-menu">
                    <li className="yamm-content">
                      <div className="row">
                        <div className="col-xs-12 col-sm-12 col-lg-4">
                          <ul>
                            <li><a href="#">Gaming</a></li>
                            <li><a href="#">Laptop Skins</a></li>
                            <li><a href="#">Apple</a></li>
                            <li><a href="#">Dell</a></li>
                            <li><a href="#">Lenovo</a></li>
                            <li><a href="#">Microsoft</a></li>
                            <li><a href="#">Asus</a></li>
                            <li><a href="#">Adapters</a></li>
                            <li><a href="#">Batteries</a></li>
                            <li><a href="#">Cooling Pads</a></li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-lg-4">
                          <ul>
                            <li><a href="#">Routers &amp; Modems</a></li>
                            <li><a href="#">CPUs, Processors</a></li>
                            <li><a href="#">PC Gaming Store</a></li>
                            <li><a href="#">Graphics Cards</a></li>
                            <li><a href="#">Components</a></li>
                            <li><a href="#">Webcam</a></li>
                            <li><a href="#">Memory (RAM)</a></li>
                            <li><a href="#">Motherboards</a></li>
                            <li><a href="#">Keyboards</a></li>
                            <li><a href="#">Headphones</a></li>
                          </ul>
                        </div>
                        <div className="dropdown-banner-holder"> <a href="#"><img alt="" src="assets/images/banners/banner-side.png" /></a> </div>
                      </div>
                      {/* /.row */} 
                    </li>
                    {/* /.yamm-content */}
                  </ul>
                  {/* /.dropdown-menu */} 
                  {/* ================================== MEGAMENU VERTICAL ================================== */} </li>
                {/* /.menu-item */}
                <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-paw" aria-hidden="true" />Shoes</a>
                  <ul className="dropdown-menu mega-menu">
                    <li className="yamm-content">
                      <div className="row">
                        <div className="col-sm-12 col-md-3">
                          <ul className="links list-unstyled">
                            <li><a href="#">Dresses</a></li>
                            <li><a href="#">Shoes </a></li>
                            <li><a href="#">Jackets</a></li>
                            <li><a href="#">Sunglasses</a></li>
                            <li><a href="#">Sport Wear</a></li>
                            <li><a href="#">Blazers</a></li>
                            <li><a href="#">Shirts</a></li>
                            <li><a href="#">Shorts</a></li>
                          </ul>
                        </div>
                        {/* /.col */}
                        <div className="col-sm-12 col-md-3">
                          <ul className="links list-unstyled">
                            <li><a href="#">Handbags</a></li>
                            <li><a href="#">Jwellery</a></li>
                            <li><a href="#">Swimwear </a></li>
                            <li><a href="#">Tops</a></li>
                            <li><a href="#">Flats</a></li>
                            <li><a href="#">Shoes</a></li>
                            <li><a href="#">Winter Wear</a></li>
                            <li><a href="#">Night Suits</a></li>
                          </ul>
                        </div>
                        {/* /.col */}
                        <div className="col-sm-12 col-md-3">
                          <ul className="links list-unstyled">
                            <li><a href="#">Toys &amp; Games</a></li>
                            <li><a href="#">Jeans</a></li>
                            <li><a href="#">Shirts</a></li>
                            <li><a href="#">Shoes</a></li>
                            <li><a href="#">School Bags</a></li>
                            <li><a href="#">Lunch Box</a></li>
                            <li><a href="#">Footwear</a></li>
                            <li><a href="#">Wipes</a></li>
                          </ul>
                        </div>
                        {/* /.col */}
                        <div className="col-sm-12 col-md-3">
                          <ul className="links list-unstyled">
                            <li><a href="#">Sandals </a></li>
                            <li><a href="#">Shorts</a></li>
                            <li><a href="#">Dresses</a></li>
                            <li><a href="#">Jwellery</a></li>
                            <li><a href="#">Bags</a></li>
                            <li><a href="#">Night Dress</a></li>
                            <li><a href="#">Swim Wear</a></li>
                            <li><a href="#">Toys</a></li>
                          </ul>
                        </div>
                        {/* /.col */} 
                      </div>
                      {/* /.row */} 
                    </li>
                    {/* /.yamm-content */}
                  </ul>
                  {/* /.dropdown-menu */} </li>
                {/* /.menu-item */}
                <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-clock-o" />Watches</a>
                  <ul className="dropdown-menu mega-menu">
                    <li className="yamm-content">
                      <div className="row">
                        <div className="col-xs-12 col-sm-12 col-lg-4">
                          <ul>
                            <li><a href="#">Gaming</a></li>
                            <li><a href="#">Laptop Skins</a></li>
                            <li><a href="#">Apple</a></li>
                            <li><a href="#">Dell</a></li>
                            <li><a href="#">Lenovo</a></li>
                            <li><a href="#">Microsoft</a></li>
                            <li><a href="#">Asus</a></li>
                            <li><a href="#">Adapters</a></li>
                            <li><a href="#">Batteries</a></li>
                            <li><a href="#">Cooling Pads</a></li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-lg-4">
                          <ul>
                            <li><a href="#">Routers &amp; Modems</a></li>
                            <li><a href="#">CPUs, Processors</a></li>
                            <li><a href="#">PC Gaming Store</a></li>
                            <li><a href="#">Graphics Cards</a></li>
                            <li><a href="#">Components</a></li>
                            <li><a href="#">Webcam</a></li>
                            <li><a href="#">Memory (RAM)</a></li>
                            <li><a href="#">Motherboards</a></li>
                            <li><a href="#">Keyboards</a></li>
                            <li><a href="#">Headphones</a></li>
                          </ul>
                        </div>
                        <div className="dropdown-banner-holder"> <a href="#"><img alt="" src="assets/images/banners/banner-side.png" /></a> </div>
                      </div>
                      {/* /.row */} 
                    </li>
                    {/* /.yamm-content */}
                  </ul>
                  {/* /.dropdown-menu */} </li>
                {/* /.menu-item */}
                <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-diamond" />Jewellery</a>
                  <ul className="dropdown-menu mega-menu">
                    <li className="yamm-content">
                      <div className="row">
                        <div className="col-sm-12 col-md-3">
                          <ul className="links list-unstyled">
                            <li><a href="#">Dresses</a></li>
                            <li><a href="#">Shoes </a></li>
                            <li><a href="#">Jackets</a></li>
                            <li><a href="#">Sunglasses</a></li>
                            <li><a href="#">Sport Wear</a></li>
                            <li><a href="#">Blazers</a></li>
                            <li><a href="#">Shirts</a></li>
                            <li><a href="#">Shorts</a></li>
                          </ul>
                        </div>
                        {/* /.col */}
                        <div className="col-sm-12 col-md-3">
                          <ul className="links list-unstyled">
                            <li><a href="#">Handbags</a></li>
                            <li><a href="#">Jwellery</a></li>
                            <li><a href="#">Swimwear </a></li>
                            <li><a href="#">Tops</a></li>
                            <li><a href="#">Flats</a></li>
                            <li><a href="#">Shoes</a></li>
                            <li><a href="#">Winter Wear</a></li>
                            <li><a href="#">Night Suits</a></li>
                          </ul>
                        </div>
                        {/* /.col */}
                        <div className="col-sm-12 col-md-3">
                          <ul className="links list-unstyled">
                            <li><a href="#">Toys &amp; Games</a></li>
                            <li><a href="#">Jeans</a></li>
                            <li><a href="#">Shirts</a></li>
                            <li><a href="#">Shoes</a></li>
                            <li><a href="#">School Bags</a></li>
                            <li><a href="#">Lunch Box</a></li>
                            <li><a href="#">Footwear</a></li>
                            <li><a href="#">Wipes</a></li>
                          </ul>
                        </div>
                        {/* /.col */}
                        <div className="col-sm-12 col-md-3">
                          <ul className="links list-unstyled">
                            <li><a href="#">Sandals </a></li>
                            <li><a href="#">Shorts</a></li>
                            <li><a href="#">Dresses</a></li>
                            <li><a href="#">Jwellery</a></li>
                            <li><a href="#">Bags</a></li>
                            <li><a href="#">Night Dress</a></li>
                            <li><a href="#">Swim Wear</a></li>
                            <li><a href="#">Toys</a></li>
                          </ul>
                        </div>
                        {/* /.col */} 
                      </div>
                      {/* /.row */} 
                    </li>
                    {/* /.yamm-content */}
                  </ul>
                  {/* /.dropdown-menu */} </li>
                {/* /.menu-item */}
                <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-heartbeat" />Health and Beauty</a>
                  <ul className="dropdown-menu mega-menu">
                    <li className="yamm-content">
                      <div className="row">
                        <div className="col-xs-12 col-sm-12 col-lg-4">
                          <ul>
                            <li><a href="#">Gaming</a></li>
                            <li><a href="#">Laptop Skins</a></li>
                            <li><a href="#">Apple</a></li>
                            <li><a href="#">Dell</a></li>
                            <li><a href="#">Lenovo</a></li>
                            <li><a href="#">Microsoft</a></li>
                            <li><a href="#">Asus</a></li>
                            <li><a href="#">Adapters</a></li>
                            <li><a href="#">Batteries</a></li>
                            <li><a href="#">Cooling Pads</a></li>
                          </ul>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-lg-4">
                          <ul>
                            <li><a href="#">Routers &amp; Modems</a></li>
                            <li><a href="#">CPUs, Processors</a></li>
                            <li><a href="#">PC Gaming Store</a></li>
                            <li><a href="#">Graphics Cards</a></li>
                            <li><a href="#">Components</a></li>
                            <li><a href="#">Webcam</a></li>
                            <li><a href="#">Memory (RAM)</a></li>
                            <li><a href="#">Motherboards</a></li>
                            <li><a href="#">Keyboards</a></li>
                            <li><a href="#">Headphones</a></li>
                          </ul>
                        </div>
                        <div className="dropdown-banner-holder"> <a href="#"><img alt="" src="assets/images/banners/banner-side.png" /></a> </div>
                      </div>
                      {/* /.row */} 
                    </li>
                    {/* /.yamm-content */}
                  </ul>
                  {/* /.dropdown-menu */} </li>
                {/* /.menu-item */}
                <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-paper-plane" />Kids and Babies</a> 
                  {/* /.dropdown-menu */} </li>
                {/* /.menu-item */}
                <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-futbol-o" />Sports</a> 
                  {/* ================================== MEGAMENU VERTICAL ================================== */} 
                  {/* /.dropdown-menu */} 
                  {/* ================================== MEGAMENU VERTICAL ================================== */} </li>
                {/* /.menu-item */}
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
          {/* ============================================== HOT DEALS ============================================== */}
          <div className="sidebar-widget hot-deals outer-bottom-xs">
            <h3 className="section-title">Hot deals</h3>
            <div className="owl-carousel sidebar-carousel custom-carousel owl-theme outer-top-ss">
              <div className="item">
                <div className="products">
                  <div className="hot-deal-wrapper">
                    <div className="image"> 
                      <a href="#">
                        <img src="assets/images/hot-deals/p13.jpg" alt="" /> 
                        <img src="assets/images/hot-deals/p13_hover.jpg" alt="" className="hover-image" />
                      </a>
                    </div>
                    <div className="sale-offer-tag"><span>49%<br />
                        off</span></div>
                    <div className="timing-wrapper">
                      <div className="box-wrapper">
                        <div className="date box"> <span className="key">120</span> <span className="value">DAYS</span> </div>
                      </div>
                      <div className="box-wrapper">
                        <div className="hour box"> <span className="key">20</span> <span className="value">HRS</span> </div>
                      </div>
                      <div className="box-wrapper">
                        <div className="minutes box"> <span className="key">36</span> <span className="value">MINS</span> </div>
                      </div>
                      <div className="box-wrapper">
                        <div className="seconds box"> <span className="key">60</span> <span className="value">SEC</span> </div>
                      </div>
                    </div>
                  </div>
                  {/* /.hot-deal-wrapper */}
                  <div className="product-info text-left m-t-20">
                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div className="rating rateit-small" />
                    <div className="product-price"> <span className="price"> $600.00 </span> <span className="price-before-discount">$800.00</span> </div>
                    {/* /.product-price */} 
                  </div>
                  {/* /.product-info */}
                  <div className="cart clearfix animate-effect">
                    <div className="action">
                      <div className="add-cart-button btn-group">
                        <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                        <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                      </div>
                    </div>
                    {/* /.action */} 
                  </div>
                  {/* /.cart */} 
                </div>
              </div>
              <div className="item">
                <div className="products">
                  <div className="hot-deal-wrapper">
                    <div className="image"> 
                      <a href="#">
                        <img src="assets/images/hot-deals/p14.jpg" alt="" /> 
                        <img src="assets/images/hot-deals/p14_hover.jpg" alt="" className="hover-image" />
                      </a>
                    </div>
                    <div className="sale-offer-tag"><span>35%<br />
                        off</span></div>
                    <div className="timing-wrapper">
                      <div className="box-wrapper">
                        <div className="date box"> <span className="key">120</span> <span className="value">Days</span> </div>
                      </div>
                      <div className="box-wrapper">
                        <div className="hour box"> <span className="key">20</span> <span className="value">HRS</span> </div>
                      </div>
                      <div className="box-wrapper">
                        <div className="minutes box"> <span className="key">36</span> <span className="value">MINS</span> </div>
                      </div>
                      <div className="box-wrapper">
                        <div className="seconds box"> <span className="key">60</span> <span className="value">SEC</span> </div>
                      </div>
                    </div>
                  </div>
                  {/* /.hot-deal-wrapper */}
                  <div className="product-info text-left m-t-20">
                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div className="rating rateit-small" />
                    <div className="product-price"> <span className="price"> $600.00 </span> <span className="price-before-discount">$800.00</span> </div>
                    {/* /.product-price */} 
                  </div>
                  {/* /.product-info */}
                  <div className="cart clearfix animate-effect">
                    <div className="action">
                      <div className="add-cart-button btn-group">
                        <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                        <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                      </div>
                    </div>
                    {/* /.action */} 
                  </div>
                  {/* /.cart */} 
                </div>
              </div>
              <div className="item">
                <div className="products">
                  <div className="hot-deal-wrapper">
                    <div className="image">
                      <a href="#">
                        <img src="assets/images/hot-deals/p15.jpg" alt="" /> 
                        <img src="assets/images/hot-deals/p15_hover.jpg" alt="" className="hover-image" />
                      </a>
                    </div>
                    <div className="sale-offer-tag"><span>35%<br />
                        off</span></div>
                    <div className="timing-wrapper">
                      <div className="box-wrapper">
                        <div className="date box"> <span className="key">120</span> <span className="value">Days</span> </div>
                      </div>
                      <div className="box-wrapper">
                        <div className="hour box"> <span className="key">20</span> <span className="value">HRS</span> </div>
                      </div>
                      <div className="box-wrapper">
                        <div className="minutes box"> <span className="key">36</span> <span className="value">MINS</span> </div>
                      </div>
                      <div className="box-wrapper">
                        <div className="seconds box"> <span className="key">60</span> <span className="value">SEC</span> </div>
                      </div>
                    </div>
                  </div>
                  {/* /.hot-deal-wrapper */}
                  <div className="product-info text-left m-t-20">
                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div className="rating rateit-small" />
                    <div className="product-price"> <span className="price"> $600.00 </span> <span className="price-before-discount">$800.00</span> </div>
                    {/* /.product-price */} 
                  </div>
                  {/* /.product-info */}
                  <div className="cart clearfix animate-effect">
                    <div className="action">
                      <div className="add-cart-button btn-group">
                        <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                        <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                      </div>
                    </div>
                    {/* /.action */} 
                  </div>
                  {/* /.cart */} 
                </div>
              </div>
            </div>
            {/* /.sidebar-widget */} 
          </div>
          {/* ============================================== HOT DEALS: END ============================================== */} 
          {/* ============================================== SPECIAL OFFER ============================================== */}
          <div className="sidebar-widget outer-bottom-small">
            <h3 className="section-title">Special Offer</h3>
            <div className="sidebar-widget-body outer-top-xs">
              <div className="owl-carousel sidebar-carousel special-offer custom-carousel owl-theme outer-top-xs">
                <div className="item">
                  <div className="products special-product">
                    <div className="product">
                      <div className="product-micro">
                        <div className="row product-micro-row">
                          <div className="col col-xs-5">
                            <div className="product-image">
                              <div className="image"> <a href="#"> <img src="assets/images/products/p5.jpg" alt="" /> </a> </div>
                              {/* /.image */} 
                            </div>
                            {/* /.product-image */} 
                          </div>
                          {/* /.col */}
                          <div className="col col-xs-7">
                            <div className="product-info">
                              <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                              <div className="rating rateit-small" />
                              <div className="product-price"> <span className="price"> $450.99 </span> </div>
                              {/* /.product-price */} 
                            </div>
                          </div>
                          {/* /.col */} 
                        </div>
                        {/* /.product-micro-row */} 
                      </div>
                      {/* /.product-micro */} 
                    </div>
                    <div className="product">
                      <div className="product-micro">
                        <div className="row product-micro-row">
                          <div className="col col-xs-5">
                            <div className="product-image">
                              <div className="image"> <a href="#"> <img src="assets/images/products/p9.jpg" alt="" /> </a> </div>
                              {/* /.image */} 
                            </div>
                            {/* /.product-image */} 
                          </div>
                          {/* /.col */}
                          <div className="col col-xs-7">
                            <div className="product-info">
                              <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                              <div className="rating rateit-small" />
                              <div className="product-price"> <span className="price"> $450.99 </span> </div>
                              {/* /.product-price */} 
                            </div>
                          </div>
                          {/* /.col */} 
                        </div>
                        {/* /.product-micro-row */} 
                      </div>
                      {/* /.product-micro */} 
                    </div>
                    <div className="product">
                      <div className="product-micro">
                        <div className="row product-micro-row">
                          <div className="col col-xs-5">
                            <div className="product-image">
                              <div className="image"> <a href="#"> <img src="assets/images/products/p11.jpg" alt="" /> </a> </div>
                              {/* /.image */} 
                            </div>
                            {/* /.product-image */} 
                          </div>
                          {/* /.col */}
                          <div className="col col-xs-7">
                            <div className="product-info">
                              <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                              <div className="rating rateit-small" />
                              <div className="product-price"> <span className="price"> $450.99 </span> </div>
                              {/* /.product-price */} 
                            </div>
                          </div>
                          {/* /.col */} 
                        </div>
                        {/* /.product-micro-row */} 
                      </div>
                      {/* /.product-micro */} 
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="products special-product">
                    <div className="product">
                      <div className="product-micro">
                        <div className="row product-micro-row">
                          <div className="col col-xs-5">
                            <div className="product-image">
                              <div className="image"> <a href="#"> <img src="assets/images/products/p15.jpg" alt="" /> </a> </div>
                              {/* /.image */} 
                            </div>
                            {/* /.product-image */} 
                          </div>
                          {/* /.col */}
                          <div className="col col-xs-7">
                            <div className="product-info">
                              <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                              <div className="rating rateit-small" />
                              <div className="product-price"> <span className="price"> $450.99 </span> </div>
                              {/* /.product-price */} 
                            </div>
                          </div>
                          {/* /.col */} 
                        </div>
                        {/* /.product-micro-row */} 
                      </div>
                      {/* /.product-micro */} 
                    </div>
                    <div className="product">
                      <div className="product-micro">
                        <div className="row product-micro-row">
                          <div className="col col-xs-5">
                            <div className="product-image">
                              <div className="image"> <a href="#"> <img src="assets/images/products/p13.jpg" alt="" /> </a> </div>
                              {/* /.image */} 
                            </div>
                            {/* /.product-image */} 
                          </div>
                          {/* /.col */}
                          <div className="col col-xs-7">
                            <div className="product-info">
                              <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                              <div className="rating rateit-small" />
                              <div className="product-price"> <span className="price"> $450.99 </span> </div>
                              {/* /.product-price */} 
                            </div>
                          </div>
                          {/* /.col */} 
                        </div>
                        {/* /.product-micro-row */} 
                      </div>
                      {/* /.product-micro */} 
                    </div>
                    <div className="product">
                      <div className="product-micro">
                        <div className="row product-micro-row">
                          <div className="col col-xs-5">
                            <div className="product-image">
                              <div className="image"> <a href="#"> <img src="assets/images/products/p12.jpg" alt="" /> </a> </div>
                              {/* /.image */} 
                            </div>
                            {/* /.product-image */} 
                          </div>
                          {/* /.col */}
                          <div className="col col-xs-7">
                            <div className="product-info">
                              <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                              <div className="rating rateit-small" />
                              <div className="product-price"> <span className="price"> $450.99 </span> </div>
                              {/* /.product-price */} 
                            </div>
                          </div>
                          {/* /.col */} 
                        </div>
                        {/* /.product-micro-row */} 
                      </div>
                      {/* /.product-micro */} 
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="products special-product">
                    <div className="product">
                      <div className="product-micro">
                        <div className="row product-micro-row">
                          <div className="col col-xs-5">
                            <div className="product-image">
                              <div className="image"> <a href="#"> <img src="assets/images/products/p1.jpg" alt="" /> </a> </div>
                              {/* /.image */} 
                            </div>
                            {/* /.product-image */} 
                          </div>
                          {/* /.col */}
                          <div className="col col-xs-7">
                            <div className="product-info">
                              <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                              <div className="rating rateit-small" />
                              <div className="product-price"> <span className="price"> $450.99 </span> </div>
                              {/* /.product-price */} 
                            </div>
                          </div>
                          {/* /.col */} 
                        </div>
                        {/* /.product-micro-row */} 
                      </div>
                      {/* /.product-micro */} 
                    </div>
                    <div className="product">
                      <div className="product-micro">
                        <div className="row product-micro-row">
                          <div className="col col-xs-5">
                            <div className="product-image">
                              <div className="image"> <a href="#"> <img src="assets/images/products/p3.jpg" alt="" /> </a> </div>
                              {/* /.image */} 
                            </div>
                            {/* /.product-image */} 
                          </div>
                          {/* /.col */}
                          <div className="col col-xs-7">
                            <div className="product-info">
                              <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                              <div className="rating rateit-small" />
                              <div className="product-price"> <span className="price"> $450.99 </span> </div>
                              {/* /.product-price */} 
                            </div>
                          </div>
                          {/* /.col */} 
                        </div>
                        {/* /.product-micro-row */} 
                      </div>
                      {/* /.product-micro */} 
                    </div>
                    <div className="product">
                      <div className="product-micro">
                        <div className="row product-micro-row">
                          <div className="col col-xs-5">
                            <div className="product-image">
                              <div className="image"> <a href="#"> <img src="assets/images/products/p7.jpg" alt="" /> </a> </div>
                              {/* /.image */} 
                            </div>
                            {/* /.product-image */} 
                          </div>
                          {/* /.col */}
                          <div className="col col-xs-7">
                            <div className="product-info">
                              <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                              <div className="rating rateit-small" />
                              <div className="product-price"> <span className="price"> $450.99 </span> </div>
                              {/* /.product-price */} 
                            </div>
                          </div>
                          {/* /.col */} 
                        </div>
                        {/* /.product-micro-row */} 
                      </div>
                      {/* /.product-micro */} 
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.sidebar-widget-body */} 
          </div>
          {/* /.sidebar-widget */} 
          {/* ============================================== SPECIAL OFFER : END ============================================== */} 
          {/* ============================================== PRODUCT TAGS ============================================== */}
          <div className="sidebar-widget product-tag">
            <h3 className="section-title">Product tags</h3>
            <div className="sidebar-widget-body outer-top-xs">
              <div className="tag-list"> <a className="item" title="Phone" href="category.html">Phone</a> <a className="item active" title="Vest" href="category.html">Vest</a> <a className="item" title="Smartphone" href="category.html">Smartphone</a> <a className="item" title="Furniture" href="category.html">Furniture</a> <a className="item" title="T-shirt" href="category.html">T-shirt</a> <a className="item" title="Sweatpants" href="category.html">Sweatpants</a> <a className="item" title="Sneaker" href="category.html">Sneaker</a> <a className="item" title="Toys" href="category.html">Toys</a> <a className="item" title="Rose" href="category.html">Rose</a> </div>
              {/* /.tag-list */} 
            </div>
            {/* /.sidebar-widget-body */} 
          </div>
          {/* /.sidebar-widget */} 
          {/* ============================================== PRODUCT TAGS : END ============================================== */} 
          {/* ============================================== SPECIAL DEALS ============================================== */}
          <div className="sidebar-widget outer-bottom-small">
            <h3 className="section-title">Special Deals</h3>
            <div className="sidebar-widget-body outer-top-xs">
              <div className="owl-carousel sidebar-carousel special-offer custom-carousel owl-theme outer-top-xs">
                <div className="item">
                  <div className="products special-product">
                    <div className="product">
                      <div className="product-micro">
                        <div className="row product-micro-row">
                          <div className="col col-xs-5">
                            <div className="product-image">
                              <div className="image"> <a href="#"> <img src="assets/images/products/p8.jpg" alt="" /> </a> </div>
                              {/* /.image */} 
                            </div>
                            {/* /.product-image */} 
                          </div>
                          {/* /.col */}
                          <div className="col col-xs-7">
                            <div className="product-info">
                              <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                              <div className="rating rateit-small" />
                              <div className="product-price"> <span className="price"> $450.99 </span> </div>
                              {/* /.product-price */} 
                            </div>
                          </div>
                          {/* /.col */} 
                        </div>
                        {/* /.product-micro-row */} 
                      </div>
                      {/* /.product-micro */} 
                    </div>
                    <div className="product">
                      <div className="product-micro">
                        <div className="row product-micro-row">
                          <div className="col col-xs-5">
                            <div className="product-image">
                              <div className="image"> <a href="#"> <img src="assets/images/products/p5.jpg" alt="" /> </a> </div>
                              {/* /.image */} 
                            </div>
                            {/* /.product-image */} 
                          </div>
                          {/* /.col */}
                          <div className="col col-xs-7">
                            <div className="product-info">
                              <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                              <div className="rating rateit-small" />
                              <div className="product-price"> <span className="price"> $450.99 </span> </div>
                              {/* /.product-price */} 
                            </div>
                          </div>
                          {/* /.col */} 
                        </div>
                        {/* /.product-micro-row */} 
                      </div>
                      {/* /.product-micro */} 
                    </div>
                    <div className="product">
                      <div className="product-micro">
                        <div className="row product-micro-row">
                          <div className="col col-xs-5">
                            <div className="product-image">
                              <div className="image"> <a href="#"> <img src="assets/images/products/p6.jpg" alt="image" /> </a> </div>
                              {/* /.image */} 
                            </div>
                            {/* /.product-image */} 
                          </div>
                          {/* /.col */}
                          <div className="col col-xs-7">
                            <div className="product-info">
                              <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                              <div className="rating rateit-small" />
                              <div className="product-price"> <span className="price"> $450.99 </span> </div>
                              {/* /.product-price */} 
                            </div>
                          </div>
                          {/* /.col */} 
                        </div>
                        {/* /.product-micro-row */} 
                      </div>
                      {/* /.product-micro */} 
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="products special-product">
                    <div className="product">
                      <div className="product-micro">
                        <div className="row product-micro-row">
                          <div className="col col-xs-5">
                            <div className="product-image">
                              <div className="image"> <a href="#"> <img src="assets/images/products/p8.jpg" alt="" /> </a> </div>
                              {/* /.image */} 
                            </div>
                            {/* /.product-image */} 
                          </div>
                          {/* /.col */}
                          <div className="col col-xs-7">
                            <div className="product-info">
                              <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                              <div className="rating rateit-small" />
                              <div className="product-price"> <span className="price"> $450.99 </span> </div>
                              {/* /.product-price */} 
                            </div>
                          </div>
                          {/* /.col */} 
                        </div>
                        {/* /.product-micro-row */} 
                      </div>
                      {/* /.product-micro */} 
                    </div>
                    <div className="product">
                      <div className="product-micro">
                        <div className="row product-micro-row">
                          <div className="col col-xs-5">
                            <div className="product-image">
                              <div className="image"> <a href="#"> <img src="assets/images/products/p7.jpg" alt="" /> </a> </div>
                              {/* /.image */} 
                            </div>
                            {/* /.product-image */} 
                          </div>
                          {/* /.col */}
                          <div className="col col-xs-7">
                            <div className="product-info">
                              <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                              <div className="rating rateit-small" />
                              <div className="product-price"> <span className="price"> $450.99 </span> </div>
                              {/* /.product-price */} 
                            </div>
                          </div>
                          {/* /.col */} 
                        </div>
                        {/* /.product-micro-row */} 
                      </div>
                      {/* /.product-micro */} 
                    </div>
                    <div className="product">
                      <div className="product-micro">
                        <div className="row product-micro-row">
                          <div className="col col-xs-5">
                            <div className="product-image">
                              <div className="image"> <a href="#"> <img src="assets/images/products/p6.jpg" alt="" /> </a> </div>
                              {/* /.image */} 
                            </div>
                            {/* /.product-image */} 
                          </div>
                          {/* /.col */}
                          <div className="col col-xs-7">
                            <div className="product-info">
                              <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                              <div className="rating rateit-small" />
                              <div className="product-price"> <span className="price"> $450.99 </span> </div>
                              {/* /.product-price */} 
                            </div>
                          </div>
                          {/* /.col */} 
                        </div>
                        {/* /.product-micro-row */} 
                      </div>
                      {/* /.product-micro */} 
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="products special-product">
                    <div className="product">
                      <div className="product-micro">
                        <div className="row product-micro-row">
                          <div className="col col-xs-5">
                            <div className="product-image">
                              <div className="image"> <a href="#"> <img src="assets/images/products/p5.jpg" alt="images" />
                                  <div className="zoom-overlay" />
                                </a> </div>
                              {/* /.image */} 
                            </div>
                            {/* /.product-image */} 
                          </div>
                          {/* /.col */}
                          <div className="col col-xs-7">
                            <div className="product-info">
                              <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                              <div className="rating rateit-small" />
                              <div className="product-price"> <span className="price"> $450.99 </span> </div>
                              {/* /.product-price */} 
                            </div>
                          </div>
                          {/* /.col */} 
                        </div>
                        {/* /.product-micro-row */} 
                      </div>
                      {/* /.product-micro */} 
                    </div>
                    <div className="product">
                      <div className="product-micro">
                        <div className="row product-micro-row">
                          <div className="col col-xs-5">
                            <div className="product-image">
                              <div className="image"> <a href="#"> <img src="assets/images/products/p4.jpg" alt="" />
                                  <div className="zoom-overlay" />
                                </a> </div>
                              {/* /.image */} 
                            </div>
                            {/* /.product-image */} 
                          </div>
                          {/* /.col */}
                          <div className="col col-xs-7">
                            <div className="product-info">
                              <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                              <div className="rating rateit-small" />
                              <div className="product-price"> <span className="price"> $450.99 </span> </div>
                              {/* /.product-price */} 
                            </div>
                          </div>
                          {/* /.col */} 
                        </div>
                        {/* /.product-micro-row */} 
                      </div>
                      {/* /.product-micro */} 
                    </div>
                    <div className="product">
                      <div className="product-micro">
                        <div className="row product-micro-row">
                          <div className="col col-xs-5">
                            <div className="product-image">
                              <div className="image"> <a href="#"> <img src="assets/images/products/p13.jpg" alt="image" /> </a> </div>
                              {/* /.image */} 
                            </div>
                            {/* /.product-image */} 
                          </div>
                          {/* /.col */}
                          <div className="col col-xs-7">
                            <div className="product-info">
                              <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                              <div className="rating rateit-small" />
                              <div className="product-price"> <span className="price"> $450.99 </span> </div>
                              {/* /.product-price */} 
                            </div>
                          </div>
                          {/* /.col */} 
                        </div>
                        {/* /.product-micro-row */} 
                      </div>
                      {/* /.product-micro */} 
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.sidebar-widget-body */} 
          </div>
          {/* /.sidebar-widget */} 
          {/* ============================================== SPECIAL DEALS : END ============================================== */} 
          {/* ============================================== NEWSLETTER ============================================== */}
          <div className="sidebar-widget newsletter outer-bottom-small">
            <h3 className="section-title">Newsletters</h3>
            <div className="sidebar-widget-body outer-top-xs">
              <p>Sign Up for Our Newsletter!</p>
              <form>
                <div className="form-group">
                  <label className="sr-only" htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Subscribe to our newsletter" />
                </div>
                <button className="btn btn-primary">Subscribe</button>
              </form>
            </div>
            {/* /.sidebar-widget-body */} 
          </div>
          {/* /.sidebar-widget */} 
          {/* ============================================== NEWSLETTER: END ============================================== */} 
          {/* ============================================== Testimonials============================================== */}
          <div className="sidebar-widget outer-top-vs ">
            <div id="advertisement" className="advertisement">
              <div className="item">
                <div className="avatar"><img src="assets/images/testimonials/member1.png" alt="Image" /></div>
                <div className="testimonials"><em>"</em> Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc condime tum metus eud molest sed consectetuer. Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat.<em>"</em></div>
                <div className="clients_author">John Doe <span>Abc Company</span> </div>
                {/* /.container-fluid */} 
              </div>
              {/* /.item */}
              <div className="item">
                <div className="avatar"><img src="assets/images/testimonials/member3.png" alt="Image" /></div>
                <div className="testimonials"><em>"</em>Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc condime tum metus eud molest sed consectetuer. Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat.<em>"</em></div>
                <div className="clients_author">Stephen Doe <span>Xperia Designs</span> </div>
              </div>
              {/* /.item */}
              <div className="item">
                <div className="avatar"><img src="assets/images/testimonials/member2.png" alt="Image" /></div>
                <div className="testimonials"><em>"</em>Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc condime tum metus eud molest sed consectetuer. Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat.<em>"</em></div>
                <div className="clients_author">Saraha Smith <span>Datsun &amp; Co</span> </div>
                {/* /.container-fluid */} 
              </div>
              {/* /.item */} 
            </div>
            {/* /.owl-carousel */} 
          </div>
          {/* ============================================== Testimonials: END ============================================== */}
        </div>
        {/* /.sidemenu-holder */} 
        {/* ============================================== SIDEBAR : END ============================================== */} 
        {/* ============================================== CONTENT ============================================== */}
        <div className="col-xs-12 col-sm-12 col-md-9 homebanner-holder"> 
          {/* ========================================== SECTION – HERO ========================================= */}
          <div id="hero">
            <div id="owl-main" className="owl-carousel owl-inner-nav owl-ui-sm">
              <div className="item" style={{backgroundImage: 'url(assets/images/sliders/01.jpg)'}}>
                <div className="container-fluid">
                  <div className="caption bg-color vertical-center text-left">
                    <div className="slider-header fadeInDown-1">Top Brands</div>
                    <div className="big-text fadeInDown-1"> New Collections </div>
                    <div className="excerpt fadeInDown-2 hidden-xs"> <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span> </div>
                    <div className="button-holder fadeInDown-3"> <a href="index6c11.html?page=single-product" className="btn-lg btn btn-uppercase btn-primary shop-now-button">Shop Now</a> </div>
                  </div>
                  {/* /.caption */} 
                </div>
                {/* /.container-fluid */} 
              </div>
              {/* /.item */}
              <div className="item" style={{backgroundImage: 'url(assets/images/sliders/02.jpg)'}}>
                <div className="container-fluid">
                  <div className="caption bg-color vertical-center text-left">
                    <div className="slider-header fadeInDown-1">Spring 2018</div>
                    <div className="big-text fadeInDown-1"> Women Fashion </div>
                    <div className="excerpt fadeInDown-2 hidden-xs"> <span>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</span> </div>
                    <div className="button-holder fadeInDown-3"> <a href="index6c11.html?page=single-product" className="btn-lg btn btn-uppercase btn-primary shop-now-button">Shop Now</a> </div>
                  </div>
                  {/* /.caption */} 
                </div>
                {/* /.container-fluid */} 
              </div>
              {/* /.item */} 
            </div>
            {/* /.owl-carousel */} 
          </div>
          {/* ========================================= SECTION – HERO : END ========================================= */} 
          {/* ============================================== SCROLL TABS ============================================== */}
          <div id="product-tabs-slider" className="scroll-tabs outer-top-vs">
            <div className="more-info-tab clearfix ">
              <h3 className="new-product-title pull-left">New Products</h3>
              <ul className="nav nav-tabs nav-tab-line pull-right" id="new-products-1">
                <li className="active"><a data-transition-type="backSlide" href="#all" data-toggle="tab">All</a></li>
                <li><a data-transition-type="backSlide" href="#smartphone" data-toggle="tab">Clothing</a></li>
                <li><a data-transition-type="backSlide" href="#laptop" data-toggle="tab">Electronics</a></li>
                <li><a data-transition-type="backSlide" href="#apple" data-toggle="tab">Shoes</a></li>
              </ul>
              {/* /.nav-tabs */} 
            </div>
            <div className="tab-content outer-top-xs">
              <div className="tab-pane in active" id="all">
                <div className="product-slider">
                  <div className="owl-carousel home-owl-carousel custom-carousel owl-theme">
                    <div className="item item-carousel">
                      <div className="products">
                        <div className="product">
                          <div className="product-image">
                            <div className="image"> 
                              <a href="detail.html">
                                <img src="assets/images/products/p1.jpg" alt="" /> 
                                <img src="assets/images/products/p1_hover.jpg" alt="" className="hover-image" />
                              </a> 
                            </div>
                            {/* /.image */}
                            <div className="tag new"><span>new</span></div>
                          </div>
                          {/* /.product-image */}
                          <div className="product-info text-left">
                            <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                            <div className="rating rateit-small" />
                            <div className="description" />
                            <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                            {/* /.product-price */} 
                          </div>
                          {/* /.product-info */}
                          <div className="cart clearfix animate-effect">
                            <div className="action">
                              <ul className="list-unstyled">
                                <li className="add-cart-button btn-group">
                                  <button data-toggle="tooltip" className="btn btn-primary icon" type="button" title="Add Cart"> <i className="fa fa-shopping-cart" /> </button>
                                  <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                                </li>
                                <li className="lnk wishlist"> <a data-toggle="tooltip" className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                                <li className="lnk"> <a data-toggle="tooltip" className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                              </ul>
                            </div>
                            {/* /.action */} 
                          </div>
                          {/* /.cart */} 
                        </div>
                        {/* /.product */} 
                      </div>
                      {/* /.products */} 
                    </div>
                    {/* /.item */}
                    <div className="item item-carousel">
                      <div className="products">
                        <div className="product">
                          <div className="product-image">
                            <div className="image"> 
                              <a href="detail.html">
                                <img src="assets/images/products/p4.jpg" alt="" /> 
                                <img src="assets/images/products/p4_hover.jpg" alt="" className="hover-image" />
                              </a>
                            </div>
                            {/* /.image */}
                          </div>
                          {/* /.product-image */}
                          <div className="product-info text-left">
                            <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                            <div className="rating rateit-small" />
                            <div className="description" />
                            <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                            {/* /.product-price */} 
                          </div>
                          {/* /.product-info */}
                          <div className="cart clearfix animate-effect">
                            <div className="action">
                              <ul className="list-unstyled">
                                <li className="add-cart-button btn-group">
                                  <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                                  <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                                </li>
                                <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                                <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                              </ul>
                            </div>
                            {/* /.action */} 
                          </div>
                          {/* /.cart */} 
                        </div>
                        {/* /.product */} 
                      </div>
                      {/* /.products */} 
                    </div>
                    {/* /.item */}
                    <div className="item item-carousel">
                      <div className="products">
                        <div className="product">
                          <div className="product-image">
                            <div className="image"> 
                              <a href="detail.html">
                                <img src="assets/images/products/p3.jpg" alt="" /> 
                                <img src="assets/images/products/p3_hover.jpg" alt="" className="hover-image" />
                              </a>
                            </div>
                            {/* /.image */}
                            <div className="tag sale"><span>sale</span></div>
                          </div>
                          {/* /.product-image */}
                          <div className="product-info text-left">
                            <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                            <div className="rating rateit-small" />
                            <div className="description" />
                            <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                            {/* /.product-price */} 
                          </div>
                          {/* /.product-info */}
                          <div className="cart clearfix animate-effect">
                            <div className="action">
                              <ul className="list-unstyled">
                                <li className="add-cart-button btn-group">
                                  <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                                  <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                                </li>
                                <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                                <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                              </ul>
                            </div>
                            {/* /.action */} 
                          </div>
                          {/* /.cart */} 
                        </div>
                        {/* /.product */} 
                      </div>
                      {/* /.products */} 
                    </div>
                    {/* /.item */}
                    <div className="item item-carousel">
                      <div className="products">
                        <div className="product">
                          <div className="product-image">
                            <div className="image"> 
                              <a href="detail.html">
                                <img src="assets/images/products/p2.jpg" alt="" /> 
                                <img src="assets/images/products/p2_hover.jpg" alt="" className="hover-image" />
                              </a> 
                            </div>
                            {/* /.image */}
                          </div>
                          {/* /.product-image */}
                          <div className="product-info text-left">
                            <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                            <div className="rating rateit-small" />
                            <div className="description" />
                            <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                            {/* /.product-price */} 
                          </div>
                          {/* /.product-info */}
                          <div className="cart clearfix animate-effect">
                            <div className="action">
                              <ul className="list-unstyled">
                                <li className="add-cart-button btn-group">
                                  <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                                  <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                                </li>
                                <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                                <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                              </ul>
                            </div>
                            {/* /.action */} 
                          </div>
                          {/* /.cart */} 
                        </div>
                        {/* /.product */} 
                      </div>
                      {/* /.products */} 
                    </div>
                    {/* /.item */}
                    <div className="item item-carousel">
                      <div className="products">
                        <div className="product">
                          <div className="product-image">
                            <div className="image"> 
                              <a href="detail.html">
                                <img src="assets/images/products/p6.jpg" alt="" /> 
                                <img src="assets/images/products/p6_hover.jpg" alt="" className="hover-image" />
                              </a> 
                            </div>
                            {/* /.image */}
                            <div className="tag hot"><span>hot</span></div>
                          </div>
                          {/* /.product-image */}
                          <div className="product-info text-left">
                            <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                            <div className="rating rateit-small" />
                            <div className="description" />
                            <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                            {/* /.product-price */} 
                          </div>
                          {/* /.product-info */}
                          <div className="cart clearfix animate-effect">
                            <div className="action">
                              <ul className="list-unstyled">
                                <li className="add-cart-button btn-group">
                                  <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                                  <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                                </li>
                                <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                                <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                              </ul>
                            </div>
                            {/* /.action */} 
                          </div>
                          {/* /.cart */} 
                        </div>
                        {/* /.product */} 
                      </div>
                      {/* /.products */} 
                    </div>
                    {/* /.item */}
                    <div className="item item-carousel">
                      <div className="products">
                        <div className="product">
                          <div className="product-image">
                            <div className="image"> 
                              <a href="detail.html">
                                <img src="assets/images/products/p5.jpg" alt="" /> 
                                <img src="assets/images/products/p5_hover.jpg" alt="" className="hover-image" />
                              </a>
                            </div>
                            {/* /.image */}
                            <div className="tag new"><span>new</span></div>
                          </div>
                          {/* /.product-image */}
                          <div className="product-info text-left">
                            <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                            <div className="rating rateit-small" />
                            <div className="description" />
                            <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                            {/* /.product-price */} 
                          </div>
                          {/* /.product-info */}
                          <div className="cart clearfix animate-effect">
                            <div className="action">
                              <ul className="list-unstyled">
                                <li className="add-cart-button btn-group">
                                  <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                                  <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                                </li>
                                <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                                <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                              </ul>
                            </div>
                            {/* /.action */} 
                          </div>
                          {/* /.cart */} 
                        </div>
                        {/* /.product */} 
                      </div>
                      {/* /.products */} 
                    </div>
                    {/* /.item */} 
                  </div>
                  {/* /.home-owl-carousel */} 
                </div>
                {/* /.product-slider */} 
              </div>
              {/* /.tab-pane */}
              <div className="tab-pane" id="smartphone">
                <div className="product-slider">
                  <div className="owl-carousel home-owl-carousel custom-carousel owl-theme">
                    <div className="item item-carousel">
                      <div className="products">
                        <div className="product">
                          <div className="product-image">
                            <div className="image"> 
                              <a href="detail.html">
                                <img src="assets/images/products/p7.jpg" alt="" /> 
                                <img src="assets/images/products/p7_hover.jpg" alt="" className="hover-image" />
                              </a>
                            </div>
                            {/* /.image */}
                            <div className="tag sale"><span>sale</span></div>
                          </div>
                          {/* /.product-image */}
                          <div className="product-info text-left">
                            <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                            <div className="rating rateit-small" />
                            <div className="description" />
                            <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                            {/* /.product-price */} 
                          </div>
                          {/* /.product-info */}
                          <div className="cart clearfix animate-effect">
                            <div className="action">
                              <ul className="list-unstyled">
                                <li className="add-cart-button btn-group">
                                  <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                                  <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                                </li>
                                <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                                <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                              </ul>
                            </div>
                            {/* /.action */} 
                          </div>
                          {/* /.cart */} 
                        </div>
                        {/* /.product */} 
                      </div>
                      {/* /.products */} 
                    </div>
                    {/* /.item */}
                    <div className="item item-carousel">
                      <div className="products">
                        <div className="product">
                          <div className="product-image">
                            <div className="image"> 
                              <a href="detail.html">
                                <img src="assets/images/products/p8.jpg" alt="" /> 
                                <img src="assets/images/products/p8_hover.jpg" alt="" className="hover-image" />
                              </a>
                            </div>
                            {/* /.image */}
                            <div className="tag new"><span>new</span></div>
                          </div>
                          {/* /.product-image */}
                          <div className="product-info text-left">
                            <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                            <div className="rating rateit-small" />
                            <div className="description" />
                            <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                            {/* /.product-price */} 
                          </div>
                          {/* /.product-info */}
                          <div className="cart clearfix animate-effect">
                            <div className="action">
                              <ul className="list-unstyled">
                                <li className="add-cart-button btn-group">
                                  <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                                  <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                                </li>
                                <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                                <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                              </ul>
                            </div>
                            {/* /.action */} 
                          </div>
                          {/* /.cart */} 
                        </div>
                        {/* /.product */} 
                      </div>
                      {/* /.products */} 
                    </div>
                    {/* /.item */}
                    <div className="item item-carousel">
                      <div className="products">
                        <div className="product">
                          <div className="product-image">
                            <div className="image"> 
                              <a href="detail.html">
                                <img src="assets/images/products/p9.jpg" alt="" /> 
                                <img src="assets/images/products/p9_hover.jpg" alt="" className="hover-image" />
                              </a>
                            </div>
                            {/* /.image */}
                            <div className="tag sale"><span>sale</span></div>
                          </div>
                          {/* /.product-image */}
                          <div className="product-info text-left">
                            <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                            <div className="rating rateit-small" />
                            <div className="description" />
                            <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                            {/* /.product-price */} 
                          </div>
                          {/* /.product-info */}
                          <div className="cart clearfix animate-effect">
                            <div className="action">
                              <ul className="list-unstyled">
                                <li className="add-cart-button btn-group">
                                  <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                                  <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                                </li>
                                <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                                <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                              </ul>
                            </div>
                            {/* /.action */} 
                          </div>
                          {/* /.cart */} 
                        </div>
                        {/* /.product */} 
                      </div>
                      {/* /.products */} 
                    </div>
                    {/* /.item */}
                    <div className="item item-carousel">
                      <div className="products">
                        <div className="product">
                          <div className="product-image">
                            <div className="image"> 
                              <a href="detail.html">
                                <img src="assets/images/products/p10.jpg" alt="" /> 
                                <img src="assets/images/products/p10_hover.jpg" alt="" className="hover-image" />
                              </a>
                            </div>
                            {/* /.image */}
                            <div className="tag new"><span>new</span></div>
                          </div>
                          {/* /.product-image */}
                          <div className="product-info text-left">
                            <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                            <div className="rating rateit-small" />
                            <div className="description" />
                            <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                            {/* /.product-price */} 
                          </div>
                          {/* /.product-info */}
                          <div className="cart clearfix animate-effect">
                            <div className="action">
                              <ul className="list-unstyled">
                                <li className="add-cart-button btn-group">
                                  <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                                  <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                                </li>
                                <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                                <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                              </ul>
                            </div>
                            {/* /.action */} 
                          </div>
                          {/* /.cart */} 
                        </div>
                        {/* /.product */} 
                      </div>
                      {/* /.products */} 
                    </div>
                    {/* /.item */}
                    <div className="item item-carousel">
                      <div className="products">
                        <div className="product">
                          <div className="product-image">
                            <div className="image"> 
                              <a href="detail.html">
                                <img src="assets/images/products/p11.jpg" alt="" /> 
                                <img src="assets/images/products/p11_hover.jpg" alt="" className="hover-image" />
                              </a>
                            </div>
                            {/* /.image */}
                            <div className="tag hot"><span>hot</span></div>
                          </div>
                          {/* /.product-image */}
                          <div className="product-info text-left">
                            <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                            <div className="rating rateit-small" />
                            <div className="description" />
                            <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                            {/* /.product-price */} 
                          </div>
                          {/* /.product-info */}
                          <div className="cart clearfix animate-effect">
                            <div className="action">
                              <ul className="list-unstyled">
                                <li className="add-cart-button btn-group">
                                  <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                                  <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                                </li>
                                <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                                <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                              </ul>
                            </div>
                            {/* /.action */} 
                          </div>
                          {/* /.cart */} 
                        </div>
                        {/* /.product */} 
                      </div>
                      {/* /.products */} 
                    </div>
                    {/* /.item */}
                    <div className="item item-carousel">
                      <div className="products">
                        <div className="product">
                          <div className="product-image">
                            <div className="image"> 
                              <a href="detail.html">
                                <img src="assets/images/products/p12.jpg" alt="" /> 
                                <img src="assets/images/products/p12_hover.jpg" alt="" className="hover-image" />
                              </a>
                            </div>
                            {/* /.image */}
                            <div className="tag hot"><span>hot</span></div>
                          </div>
                          {/* /.product-image */}
                          <div className="product-info text-left">
                            <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                            <div className="rating rateit-small" />
                            <div className="description" />
                            <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                            {/* /.product-price */} 
                          </div>
                          {/* /.product-info */}
                          <div className="cart clearfix animate-effect">
                            <div className="action">
                              <ul className="list-unstyled">
                                <li className="add-cart-button btn-group">
                                  <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                                  <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                                </li>
                                <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                                <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                              </ul>
                            </div>
                            {/* /.action */} 
                          </div>
                          {/* /.cart */} 
                        </div>
                        {/* /.product */} 
                      </div>
                      {/* /.products */} 
                    </div>
                    {/* /.item */} 
                  </div>
                  {/* /.home-owl-carousel */} 
                </div>
                {/* /.product-slider */} 
              </div>
              {/* /.tab-pane */}
              <div className="tab-pane" id="laptop">
                <div className="product-slider">
                  <div className="owl-carousel home-owl-carousel custom-carousel owl-theme">
                    <div className="item item-carousel">
                      <div className="products">
                        <div className="product">
                          <div className="product-image">
                            <div className="image"> 
                              <a href="detail.html">
                                <img src="assets/images/products/p15.jpg" alt="" /> 
                                <img src="assets/images/products/p15_hover.jpg" alt="" className="hover-image" />
                              </a>
                            </div>
                            {/* /.image */}
                            <div className="tag new"><span>new</span></div>
                          </div>
                          {/* /.product-image */}
                          <div className="product-info text-left">
                            <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                            <div className="rating rateit-small" />
                            <div className="description" />
                            <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                            {/* /.product-price */} 
                          </div>
                          {/* /.product-info */}
                          <div className="cart clearfix animate-effect">
                            <div className="action">
                              <ul className="list-unstyled">
                                <li className="add-cart-button btn-group">
                                  <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                                  <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                                </li>
                                <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                                <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                              </ul>
                            </div>
                            {/* /.action */} 
                          </div>
                          {/* /.cart */} 
                        </div>
                        {/* /.product */} 
                      </div>
                      {/* /.products */} 
                    </div>
                    {/* /.item */}
                    <div className="item item-carousel">
                      <div className="products">
                        <div className="product">
                          <div className="product-image">
                            <div className="image"> 
                              <a href="detail.html">
                                <img src="assets/images/products/p2.jpg" alt="" /> 
                                <img src="assets/images/products/p2_hover.jpg" alt="" className="hover-image" />
                              </a>
                            </div>
                            {/* /.image */}
                            <div className="tag new"><span>new</span></div>
                          </div>
                          {/* /.product-image */}
                          <div className="product-info text-left">
                            <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                            <div className="rating rateit-small" />
                            <div className="description" />
                            <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                            {/* /.product-price */} 
                          </div>
                          {/* /.product-info */}
                          <div className="cart clearfix animate-effect">
                            <div className="action">
                              <ul className="list-unstyled">
                                <li className="add-cart-button btn-group">
                                  <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                                  <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                                </li>
                                <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                                <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                              </ul>
                            </div>
                            {/* /.action */} 
                          </div>
                          {/* /.cart */} 
                        </div>
                        {/* /.product */} 
                      </div>
                      {/* /.products */} 
                    </div>
                    {/* /.item */}
                    <div className="item item-carousel">
                      <div className="products">
                        <div className="product">
                          <div className="product-image">
                            <div className="image"> 
                              <a href="detail.html">
                                <img src="assets/images/products/p8.jpg" alt="" /> 
                                <img src="assets/images/products/p8_hover.jpg" alt="" className="hover-image" />
                              </a>
                            </div>
                            {/* /.image */}
                            <div className="tag sale"><span>sale</span></div>
                          </div>
                          {/* /.product-image */}
                          <div className="product-info text-left">
                            <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                            <div className="rating rateit-small" />
                            <div className="description" />
                            <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                            {/* /.product-price */} 
                          </div>
                          {/* /.product-info */}
                          <div className="cart clearfix animate-effect">
                            <div className="action">
                              <ul className="list-unstyled">
                                <li className="add-cart-button btn-group">
                                  <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                                  <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                                </li>
                                <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                                <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                              </ul>
                            </div>
                            {/* /.action */} 
                          </div>
                          {/* /.cart */} 
                        </div>
                        {/* /.product */} 
                      </div>
                      {/* /.products */} 
                    </div>
                    {/* /.item */}
                    <div className="item item-carousel">
                      <div className="products">
                        <div className="product">
                          <div className="image"> 
                            <a href="detail.html">
                              <img src="assets/images/products/p14.jpg" alt="" /> 
                              <img src="assets/images/products/p14_hover.jpg" alt="" className="hover-image" />
                            </a>
                          </div>
                          {/* /.product-image */}
                          <div className="product-info text-left">
                            <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                            <div className="rating rateit-small" />
                            <div className="description" />
                            <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                            {/* /.product-price */} 
                          </div>
                          {/* /.product-info */}
                          <div className="cart clearfix animate-effect">
                            <div className="action">
                              <ul className="list-unstyled">
                                <li className="add-cart-button btn-group">
                                  <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                                  <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                                </li>
                                <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                                <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                              </ul>
                            </div>
                            {/* /.action */} 
                          </div>
                          {/* /.cart */} 
                        </div>
                        {/* /.product */} 
                      </div>
                      {/* /.products */} 
                    </div>
                    {/* /.item */}
                    <div className="item item-carousel">
                      <div className="products">
                        <div className="product">
                          <div className="product-image">
                            <div className="image"> 
                              <a href="detail.html">
                                <img src="assets/images/products/p12.jpg" alt="" /> 
                                <img src="assets/images/products/p12_hover.jpg" alt="" className="hover-image" />
                              </a>
                            </div>
                            {/* /.image */}
                            <div className="tag hot"><span>hot</span></div>
                          </div>
                          {/* /.product-image */}
                          <div className="product-info text-left">
                            <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                            <div className="rating rateit-small" />
                            <div className="description" />
                            <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                            {/* /.product-price */} 
                          </div>
                          {/* /.product-info */}
                          <div className="cart clearfix animate-effect">
                            <div className="action">
                              <ul className="list-unstyled">
                                <li className="add-cart-button btn-group">
                                  <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                                  <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                                </li>
                                <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                                <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                              </ul>
                            </div>
                            {/* /.action */} 
                          </div>
                          {/* /.cart */} 
                        </div>
                        {/* /.product */} 
                      </div>
                      {/* /.products */} 
                    </div>
                    {/* /.item */}
                    <div className="item item-carousel">
                      <div className="products">
                        <div className="product">
                          <div className="product-image">
                            <div className="image"> 
                              <a href="detail.html">
                                <img src="assets/images/products/p9.jpg" alt="" /> 
                                <img src="assets/images/products/p9_hover.jpg" alt="" className="hover-image" />
                              </a>
                            </div>
                            {/* /.image */}
                            <div className="tag sale"><span>sale</span></div>
                          </div>
                          {/* /.product-image */}
                          <div className="product-info text-left">
                            <h3 className="name"><a href="detail.html">Apple Iphone 5s 32GB</a></h3>
                            <div className="rating rateit-small" />
                            <div className="description" />
                            <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                            {/* /.product-price */} 
                          </div>
                          {/* /.product-info */}
                          <div className="cart clearfix animate-effect">
                            <div className="action">
                              <ul className="list-unstyled">
                                <li className="add-cart-button btn-group">
                                  <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                                  <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                                </li>
                                <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                                <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                              </ul>
                            </div>
                            {/* /.action */} 
                          </div>
                          {/* /.cart */} 
                        </div>
                        {/* /.product */} 
                      </div>
                      {/* /.products */} 
                    </div>
                    {/* /.item */} 
                  </div>
                  {/* /.home-owl-carousel */} 
                </div>
                {/* /.product-slider */} 
              </div>
              {/* /.tab-pane */}
              <div className="tab-pane" id="apple">
                <div className="product-slider">
                  <div className="owl-carousel home-owl-carousel custom-carousel owl-theme">
                    <div className="item item-carousel">
                      <div className="products">
                        <div className="product">
                          <div className="product-image">
                            <div className="image"> 
                              <a href="detail.html">
                                <img src="assets/images/products/p13.jpg" alt="" /> 
                                <img src="assets/images/products/p13_hover.jpg" alt="" className="hover-image" />
                              </a>
                            </div>
                            {/* /.image */}
                            <div className="tag sale"><span>sale</span></div>
                          </div>
                          {/* /.product-image */}
                          <div className="product-info text-left">
                            <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                            <div className="rating rateit-small" />
                            <div className="description" />
                            <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                            {/* /.product-price */} 
                          </div>
                          {/* /.product-info */}
                          <div className="cart clearfix animate-effect">
                            <div className="action">
                              <ul className="list-unstyled">
                                <li className="add-cart-button btn-group">
                                  <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                                  <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                                </li>
                                <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                                <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                              </ul>
                            </div>
                            {/* /.action */} 
                          </div>
                          {/* /.cart */} 
                        </div>
                        {/* /.product */} 
                      </div>
                      {/* /.products */} 
                    </div>
                    {/* /.item */}
                    <div className="item item-carousel">
                      <div className="products">
                        <div className="product">
                          <div className="product-image">
                            <div className="image"> 
                              <a href="detail.html">
                                <img src="assets/images/products/p11.jpg" alt="" /> 
                                <img src="assets/images/products/p11_hover.jpg" alt="" className="hover-image" />
                              </a>
                            </div>
                            {/* /.image */}
                            <div className="tag hot"><span>hot</span></div>
                          </div>
                          {/* /.product-image */}
                          <div className="product-info text-left">
                            <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                            <div className="rating rateit-small" />
                            <div className="description" />
                            <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                            {/* /.product-price */} 
                          </div>
                          {/* /.product-info */}
                          <div className="cart clearfix animate-effect">
                            <div className="action">
                              <ul className="list-unstyled">
                                <li className="add-cart-button btn-group">
                                  <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                                  <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                                </li>
                                <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                                <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                              </ul>
                            </div>
                            {/* /.action */} 
                          </div>
                          {/* /.cart */} 
                        </div>
                        {/* /.product */} 
                      </div>
                      {/* /.products */} 
                    </div>
                    {/* /.item */}
                    <div className="item item-carousel">
                      <div className="products">
                        <div className="product">
                          <div className="product-image">
                            <div className="image"> 
                              <a href="detail.html">
                                <img src="assets/images/products/p4.jpg" alt="" /> 
                                <img src="assets/images/products/p4_hover.jpg" alt="" className="hover-image" />
                              </a>
                            </div>
                            {/* /.image */}
                            <div className="tag sale"><span>sale</span></div>
                          </div>
                          {/* /.product-image */}
                          <div className="product-info text-left">
                            <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                            <div className="rating rateit-small" />
                            <div className="description" />
                            <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                            {/* /.product-price */} 
                          </div>
                          {/* /.product-info */}
                          <div className="cart clearfix animate-effect">
                            <div className="action">
                              <ul className="list-unstyled">
                                <li className="add-cart-button btn-group">
                                  <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                                  <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                                </li>
                                <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                                <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                              </ul>
                            </div>
                            {/* /.action */} 
                          </div>
                          {/* /.cart */} 
                        </div>
                        {/* /.product */} 
                      </div>
                      {/* /.products */} 
                    </div>
                    {/* /.item */}
                    <div className="item item-carousel">
                      <div className="products">
                        <div className="product">
                          <div className="product-image">
                            <div className="image"> 
                              <a href="detail.html">
                                <img src="assets/images/products/p1.jpg" alt="" /> 
                                <img src="assets/images/products/p1_hover.jpg" alt="" className="hover-image" />
                              </a>
                            </div>
                            {/* /.image */}
                            <div className="tag new"><span>new</span></div>
                          </div>
                          {/* /.product-image */}
                          <div className="product-info text-left">
                            <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                            <div className="rating rateit-small" />
                            <div className="description" />
                            <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                            {/* /.product-price */} 
                          </div>
                          {/* /.product-info */}
                          <div className="cart clearfix animate-effect">
                            <div className="action">
                              <ul className="list-unstyled">
                                <li className="add-cart-button btn-group">
                                  <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                                  <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                                </li>
                                <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                                <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                              </ul>
                            </div>
                            {/* /.action */} 
                          </div>
                          {/* /.cart */} 
                        </div>
                        {/* /.product */} 
                      </div>
                      {/* /.products */} 
                    </div>
                    {/* /.item */}
                    <div className="item item-carousel">
                      <div className="products">
                        <div className="product">
                          <div className="product-image">
                            <div className="image"> 
                              <a href="detail.html">
                                <img src="assets/images/products/p10.jpg" alt="" /> 
                                <img src="assets/images/products/p10_hover.jpg" alt="" className="hover-image" />
                              </a>
                            </div>
                            {/* /.image */}
                            <div className="tag new"><span>new</span></div>
                          </div>
                          {/* /.product-image */}
                          <div className="product-info text-left">
                            <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                            <div className="rating rateit-small" />
                            <div className="description" />
                            <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                            {/* /.product-price */} 
                          </div>
                          {/* /.product-info */}
                          <div className="cart clearfix animate-effect">
                            <div className="action">
                              <ul className="list-unstyled">
                                <li className="add-cart-button btn-group">
                                  <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                                  <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                                </li>
                                <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                                <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                              </ul>
                            </div>
                            {/* /.action */} 
                          </div>
                          {/* /.cart */} 
                        </div>
                        {/* /.product */} 
                      </div>
                      {/* /.products */} 
                    </div>
                    {/* /.item */}
                    <div className="item item-carousel">
                      <div className="products">
                        <div className="product">
                          <div className="product-image">
                            <div className="image"> 
                              <a href="detail.html">
                                <img src="assets/images/products/p6.jpg" alt="" /> 
                                <img src="assets/images/products/p6_hover.jpg" alt="" className="hover-image" />
                              </a>
                            </div>
                            {/* /.image */}
                            <div className="tag hot"><span>hot</span></div>
                          </div>
                          {/* /.product-image */}
                          <div className="product-info text-left">
                            <h3 className="name"><a href="detail.html">Samsung Galaxy S4</a></h3>
                            <div className="rating rateit-small" />
                            <div className="description" />
                            <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                            {/* /.product-price */} 
                          </div>
                          {/* /.product-info */}
                          <div className="cart clearfix animate-effect">
                            <div className="action">
                              <ul className="list-unstyled">
                                <li className="add-cart-button btn-group">
                                  <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                                  <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                                </li>
                                <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                                <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                              </ul>
                            </div>
                            {/* /.action */} 
                          </div>
                          {/* /.cart */} 
                        </div>
                        {/* /.product */} 
                      </div>
                      {/* /.products */} 
                    </div>
                    {/* /.item */} 
                  </div>
                  {/* /.home-owl-carousel */} 
                </div>
                {/* /.product-slider */} 
              </div>
              {/* /.tab-pane */} 
            </div>
            {/* /.tab-content */} 
          </div>
          {/* /.scroll-tabs */} 
          {/* ============================================== SCROLL TABS : END ============================================== */} 
          {/* ============================================== WIDE PRODUCTS ============================================== */}
          <div className="wide-banners outer-bottom-xs">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <div className="wide-banner cnt-strip">
                  <div className="image"> <img className="img-responsive" src="assets/images/banners/home-banner1.jpg" alt="" /> </div>
                </div>
                {/* /.wide-banner */} 
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="wide-banner cnt-strip">
                  <div className="image"> <img className="img-responsive" src="assets/images/banners/home-banner3.jpg" alt="" /> </div>
                </div>
                {/* /.wide-banner */} 
              </div>
              {/* /.col */}
              <div className="col-md-4 col-sm-4">
                <div className="wide-banner cnt-strip">
                  <div className="image"> <img className="img-responsive" src="assets/images/banners/home-banner2.jpg" alt="" /> </div>
                </div>
                {/* /.wide-banner */} 
              </div>
              {/* /.col */} 
            </div>
            {/* /.row */} 
          </div>
          {/* /.wide-banners */} 
          {/* ============================================== WIDE PRODUCTS : END ============================================== */} 
          {/* ============================================== FEATURED PRODUCTS ============================================== */}
          <section className="section featured-product">
            <div className="row">
              <div className="col-lg-3">
                <h3 className="section-title">Electronics &amp; Digital</h3>
                <ul className="sub-cat">
                  <li><a href="#">Computers</a></li>
                  <li><a href="#">Air Condtion</a></li>
                  <li><a href="#">Mobile Phones</a></li>
                  <li><a href="#">Camera</a></li>
                  <li><a href="#">Television</a></li>
                  <li><a href="#">Sound &amp; Speakers</a></li>
                  <li><a href="#">Games &amp; Audio Music</a></li>
                  <li><a href="#">Digital Watches</a></li>
                  <li><a href="#">Washing Machines</a></li>
                  <li><a href="#">Office Electronics</a></li>
                </ul>
              </div>
              <div className="col-lg-9">
                <div className="owl-carousel homepage-owl-carousel custom-carousel owl-theme outer-top-xs">
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> 
                            <a href="detail.html">
                              <img src="assets/images/products/p13.jpg" alt="" /> 
                              <img src="assets/images/products/p13_hover.jpg" alt="" className="hover-image" />
                            </a>
                          </div>
                          {/* /.image */}
                          <div className="tag hot"><span>hot</span></div>
                        </div>
                        {/* /.product-image */}
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                          <div className="rating rateit-small" />
                          <div className="description" />
                          <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                          {/* /.product-price */} 
                        </div>
                        {/* /.product-info */}
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                              </li>
                              <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                              <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                            </ul>
                          </div>
                          {/* /.action */} 
                        </div>
                        {/* /.cart */} 
                      </div>
                      {/* /.product */} 
                    </div>
                    {/* /.products */} 
                  </div>
                  {/* /.item */}
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> 
                            <a href="detail.html">
                              <img src="assets/images/products/p15.jpg" alt="" /> 
                              <img src="assets/images/products/p15_hover.jpg" alt="" className="hover-image" />
                            </a>
                          </div>
                          {/* /.image */}
                          <div className="tag new"><span>new</span></div>
                        </div>
                        {/* /.product-image */}
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                          <div className="rating rateit-small" />
                          <div className="description" />
                          <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                          {/* /.product-price */} 
                        </div>
                        {/* /.product-info */}
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                              </li>
                              <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                              <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                            </ul>
                          </div>
                          {/* /.action */} 
                        </div>
                        {/* /.cart */} 
                      </div>
                      {/* /.product */} 
                    </div>
                    {/* /.products */} 
                  </div>
                  {/* /.item */}
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> 
                            <a href="detail.html">
                              <img src="assets/images/products/p10.jpg" alt="" /> 
                              <img src="assets/images/products/p10_hover.jpg" alt="" className="hover-image" />
                            </a>
                          </div>
                          {/* /.image */}
                          <div className="tag sale"><span>sale</span></div>
                        </div>
                        {/* /.product-image */}
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                          <div className="rating rateit-small" />
                          <div className="description" />
                          <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                          {/* /.product-price */} 
                        </div>
                        {/* /.product-info */}
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                              </li>
                              <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                              <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                            </ul>
                          </div>
                          {/* /.action */} 
                        </div>
                        {/* /.cart */} 
                      </div>
                      {/* /.product */} 
                    </div>
                    {/* /.products */} 
                  </div>
                  {/* /.item */}
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> 
                            <a href="detail.html">
                              <img src="assets/images/products/p11.jpg" alt="" /> 
                              <img src="assets/images/products/p11_hover.jpg" alt="" className="hover-image" />
                            </a>
                          </div>
                          {/* /.image */}
                          <div className="tag hot"><span>hot</span></div>
                        </div>
                        {/* /.product-image */}
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                          <div className="rating rateit-small" />
                          <div className="description" />
                          <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                          {/* /.product-price */} 
                        </div>
                        {/* /.product-info */}
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                              </li>
                              <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                              <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                            </ul>
                          </div>
                          {/* /.action */} 
                        </div>
                        {/* /.cart */} 
                      </div>
                      {/* /.product */} 
                    </div>
                    {/* /.products */} 
                  </div>
                  {/* /.item */}
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> 
                            <a href="detail.html">
                              <img src="assets/images/products/p8.jpg" alt="" /> 
                              <img src="assets/images/products/p8_hover.jpg" alt="" className="hover-image" />
                            </a>
                          </div>
                          {/* /.image */}
                          <div className="tag new"><span>new</span></div>
                        </div>
                        {/* /.product-image */}
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                          <div className="rating rateit-small" />
                          <div className="description" />
                          <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                          {/* /.product-price */} 
                        </div>
                        {/* /.product-info */}
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                              </li>
                              <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                              <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                            </ul>
                          </div>
                          {/* /.action */} 
                        </div>
                        {/* /.cart */} 
                      </div>
                      {/* /.product */} 
                    </div>
                    {/* /.products */} 
                  </div>
                  {/* /.item */}
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> 
                            <a href="detail.html">
                              <img src="assets/images/products/p7.jpg" alt="" /> 
                              <img src="assets/images/products/p7_hover.jpg" alt="" className="hover-image" />
                            </a>
                          </div>
                          {/* /.image */}
                          <div className="tag sale"><span>sale</span></div>
                        </div>
                        {/* /.product-image */}
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                          <div className="rating rateit-small" />
                          <div className="description" />
                          <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                          {/* /.product-price */} 
                        </div>
                        {/* /.product-info */}
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                              </li>
                              <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                              <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                            </ul>
                          </div>
                          {/* /.action */} 
                        </div>
                        {/* /.cart */} 
                      </div>
                      {/* /.product */} 
                    </div>
                    {/* /.products */} 
                  </div>
                  {/* /.item */} 
                </div>
              </div>
            </div>
            {/* /.home-owl-carousel */} 
          </section>
          {/* /.section */} 
          {/* ============================================== FEATURED PRODUCTS : END ============================================== */} 
          {/* ============================================== WIDE PRODUCTS ============================================== */}
          <div className="wide-banners outer-bottom-xs">
            <div className="row">
              <div className="col-md-8">
                <div className="wide-banner1 cnt-strip">
                  <div className="image"> <img className="img-responsive" src="assets/images/banners/home-banner.jpg" alt="" /> </div>
                  <div className="strip strip-text">
                    <div className="strip-inner">
                      <h2 className="text-right">Amazing Sunglasses<br />
                        <span className="shopping-needs">Get 40% off on selected items</span></h2>
                    </div>
                  </div>
                  <div className="new-label">
                    <div className="text">NEW</div>
                  </div>
                  {/* /.new-label */} 
                </div>
                {/* /.wide-banner */} 
              </div>
              {/* /.col */} 
              <div className="col-md-4">
                <div className="wide-banner cnt-strip">
                  <div className="image"> <img className="img-responsive" src="assets/images/banners/home-banner4.jpg" alt="" /> </div>
                  {/* /.new-label */} 
                </div>
                {/* /.wide-banner */} 
              </div>
            </div>
            {/* /.row */} 
          </div>
          {/* /.wide-banners */} 
          {/* ============================================== WIDE PRODUCTS : END ============================================== */} 
          {/* /.sidebar-widget */} 
          {/* ============================================== BEST SELLER : END ============================================== */} 
          {/* ============================================== BLOG SLIDER ============================================== */}
          <section className="section latest-blog outer-bottom-vs">
            <h3 className="section-title">Latest form Blog</h3>
            <div className="blog-slider-container outer-top-xs">
              <div className="owl-carousel blog-slider custom-carousel">
                <div className="item">
                  <div className="blog-post">
                    <div className="blog-post-image">
                      <div className="image"> <a href="blog.html"><img src="assets/images/blog-post/blog_big_01.jpg" alt="" /></a> </div>
                    </div>
                    {/* /.blog-post-image */}
                    <div className="blog-post-info text-left">
                      <h3 className="name"><a href="#">Voluptatem accusantium doloremque laudantium</a></h3>
                      <span className="info">By Jone Doe &nbsp;|&nbsp; 21 March 2016 </span>
                      <p className="text">Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>
                    {/* /.blog-post-info */} 
                  </div>
                  {/* /.blog-post */} 
                </div>
                {/* /.item */}
                <div className="item">
                  <div className="blog-post">
                    <div className="blog-post-image">
                      <div className="image"> <a href="blog.html"><img src="assets/images/blog-post/blog_big_02.jpg" alt="" /></a> </div>
                    </div>
                    {/* /.blog-post-image */}
                    <div className="blog-post-info text-left">
                      <h3 className="name"><a href="#">Dolorem eum fugiat quo voluptas nulla pariatur</a></h3>
                      <span className="info">By Saraha Smith &nbsp;|&nbsp; 21 March 2016 </span>
                      <p className="text">Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>
                    {/* /.blog-post-info */} 
                  </div>
                  {/* /.blog-post */} 
                </div>
                {/* /.item */} 
                {/* /.item */}
                <div className="item">
                  <div className="blog-post">
                    <div className="blog-post-image">
                      <div className="image"> <a href="blog.html"><img src="assets/images/blog-post/blog_big_03.jpg" alt="" /></a> </div>
                    </div>
                    {/* /.blog-post-image */}
                    <div className="blog-post-info text-left">
                      <h3 className="name"><a href="#">Dolorem eum fugiat quo voluptas nulla pariatur</a></h3>
                      <span className="info">By Saraha Smith &nbsp;|&nbsp; 21 March 2016 </span>
                      <p className="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                    </div>
                    {/* /.blog-post-info */} 
                  </div>
                  {/* /.blog-post */} 
                </div>
                {/* /.item */}
                <div className="item">
                  <div className="blog-post">
                    <div className="blog-post-image">
                      <div className="image"> <a href="blog.html"><img src="assets/images/blog-post/blog_big_01.jpg" alt="" /></a> </div>
                    </div>
                    {/* /.blog-post-image */}
                    <div className="blog-post-info text-left">
                      <h3 className="name"><a href="#">Dolorem eum fugiat quo voluptas nulla pariatur</a></h3>
                      <span className="info">By Saraha Smith &nbsp;|&nbsp; 21 March 2016 </span>
                      <p className="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                    </div>
                    {/* /.blog-post-info */} 
                  </div>
                  {/* /.blog-post */} 
                </div>
                {/* /.item */}
                <div className="item">
                  <div className="blog-post">
                    <div className="blog-post-image">
                      <div className="image"> <a href="blog.html"><img src="assets/images/blog-post/blog_big_02.jpg" alt="" /></a> </div>
                    </div>
                    {/* /.blog-post-image */}
                    <div className="blog-post-info text-left">
                      <h3 className="name"><a href="#">Dolorem eum fugiat quo voluptas nulla pariatur</a></h3>
                      <span className="info">By Saraha Smith &nbsp;|&nbsp; 21 March 2016 </span>
                      <p className="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                    </div>
                    {/* /.blog-post-info */} 
                  </div>
                  {/* /.blog-post */} 
                </div>
                {/* /.item */} 
              </div>
              {/* /.owl-carousel */} 
            </div>
            {/* /.blog-slider-container */} 
          </section>
          {/* /.section */} 
          {/* ============================================== BLOG SLIDER : END ============================================== */} 
          {/* ============================================== FEATURED PRODUCTS ============================================== */}
          <section className="section new-arriavls">
            <h3 className="section-title">Featured Products</h3>
            <div className="owl-carousel home-owl-carousel custom-carousel owl-theme outer-top-xs">
              <div className="item item-carousel">
                <div className="products">
                  <div className="product">
                    <div className="product-image">
                      <div className="image"> 
                        <a href="detail.html">
                          <img src="assets/images/products/p10.jpg" alt="" /> 
                          <img src="assets/images/products/p10_hover.jpg" alt="" className="hover-image" />
                        </a>
                      </div>
                      {/* /.image */}
                      <div className="tag new"><span>new</span></div>
                    </div>
                    {/* /.product-image */}
                    <div className="product-info text-left">
                      <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                      <div className="rating rateit-small" />
                      <div className="description" />
                      <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                      {/* /.product-price */} 
                    </div>
                    {/* /.product-info */}
                    <div className="cart clearfix animate-effect">
                      <div className="action">
                        <ul className="list-unstyled">
                          <li className="add-cart-button btn-group">
                            <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                            <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                          </li>
                          <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                          <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                        </ul>
                      </div>
                      {/* /.action */} 
                    </div>
                    {/* /.cart */} 
                  </div>
                  {/* /.product */} 
                </div>
                {/* /.products */} 
              </div>
              {/* /.item */}
              <div className="item item-carousel">
                <div className="products">
                  <div className="product">
                    <div className="product-image">
                      <div className="image"> 
                        <a href="detail.html">
                          <img src="assets/images/products/p2.jpg" alt="" /> 
                          <img src="assets/images/products/p2_hover.jpg" alt="" className="hover-image" />
                        </a>
                      </div>
                      {/* /.image */}
                      <div className="tag new"><span>new</span></div>
                    </div>
                    {/* /.product-image */}
                    <div className="product-info text-left">
                      <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                      <div className="rating rateit-small" />
                      <div className="description" />
                      <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                      {/* /.product-price */} 
                    </div>
                    {/* /.product-info */}
                    <div className="cart clearfix animate-effect">
                      <div className="action">
                        <ul className="list-unstyled">
                          <li className="add-cart-button btn-group">
                            <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                            <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                          </li>
                          <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                          <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                        </ul>
                      </div>
                      {/* /.action */} 
                    </div>
                    {/* /.cart */} 
                  </div>
                  {/* /.product */} 
                </div>
                {/* /.products */} 
              </div>
              {/* /.item */}
              <div className="item item-carousel">
                <div className="products">
                  <div className="product">
                    <div className="product-image">
                      <div className="image"> 
                        <a href="detail.html">
                          <img src="assets/images/products/p3.jpg" alt="" /> 
                          <img src="assets/images/products/p3_hover.jpg" alt="" className="hover-image" />
                        </a>
                      </div>
                      {/* /.image */}
                      <div className="tag hot"><span>hot</span></div>
                    </div>
                    {/* /.product-image */}
                    <div className="product-info text-left">
                      <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                      <div className="rating rateit-small" />
                      <div className="description" />
                      <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                      {/* /.product-price */} 
                    </div>
                    {/* /.product-info */}
                    <div className="cart clearfix animate-effect">
                      <div className="action">
                        <ul className="list-unstyled">
                          <li className="add-cart-button btn-group">
                            <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                            <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                          </li>
                          <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                          <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                        </ul>
                      </div>
                      {/* /.action */} 
                    </div>
                    {/* /.cart */} 
                  </div>
                  {/* /.product */} 
                </div>
                {/* /.products */} 
              </div>
              {/* /.item */}
              <div className="item item-carousel">
                <div className="products">
                  <div className="product">
                    <div className="product-image">
                      <div className="image"> 
                        <a href="detail.html">
                          <img src="assets/images/products/p1.jpg" alt="" /> 
                          <img src="assets/images/products/p1_hover.jpg" alt="" className="hover-image" />
                        </a>
                      </div>
                      {/* /.image */}
                      <div className="tag hot"><span>hot</span></div>
                    </div>
                    {/* /.product-image */}
                    <div className="product-info text-left">
                      <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                      <div className="rating rateit-small" />
                      <div className="description" />
                      <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                      {/* /.product-price */} 
                    </div>
                    {/* /.product-info */}
                    <div className="cart clearfix animate-effect">
                      <div className="action">
                        <ul className="list-unstyled">
                          <li className="add-cart-button btn-group">
                            <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                            <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                          </li>
                          <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                          <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                        </ul>
                      </div>
                      {/* /.action */} 
                    </div>
                    {/* /.cart */} 
                  </div>
                  {/* /.product */} 
                </div>
                {/* /.products */} 
              </div>
              {/* /.item */}
              <div className="item item-carousel">
                <div className="products">
                  <div className="product">
                    <div className="product-image">
                      <div className="image"> 
                        <a href="detail.html">
                          <img src="assets/images/products/p7.jpg" alt="" /> 
                          <img src="assets/images/products/p7_hover.jpg" alt="" className="hover-image" />
                        </a>
                      </div>
                      {/* /.image */}
                      <div className="tag sale"><span>sale</span></div>
                    </div>
                    {/* /.product-image */}
                    <div className="product-info text-left">
                      <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                      <div className="rating rateit-small" />
                      <div className="description" />
                      <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                      {/* /.product-price */} 
                    </div>
                    {/* /.product-info */}
                    <div className="cart clearfix animate-effect">
                      <div className="action">
                        <ul className="list-unstyled">
                          <li className="add-cart-button btn-group">
                            <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                            <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                          </li>
                          <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                          <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                        </ul>
                      </div>
                      {/* /.action */} 
                    </div>
                    {/* /.cart */} 
                  </div>
                  {/* /.product */} 
                </div>
                {/* /.products */} 
              </div>
              {/* /.item */}
              <div className="item item-carousel">
                <div className="products">
                  <div className="product">
                    <div className="product-image">
                      <div className="image"> 
                        <a href="detail.html">
                          <img src="assets/images/products/p9.jpg" alt="" /> 
                          <img src="assets/images/products/p9_hover.jpg" alt="" className="hover-image" />
                        </a>
                      </div>
                      {/* /.image */}
                      <div className="tag sale"><span>sale</span></div>
                    </div>
                    {/* /.product-image */}
                    <div className="product-info text-left">
                      <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                      <div className="rating rateit-small" />
                      <div className="description" />
                      <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                      {/* /.product-price */} 
                    </div>
                    {/* /.product-info */}
                    <div className="cart clearfix animate-effect">
                      <div className="action">
                        <ul className="list-unstyled">
                          <li className="add-cart-button btn-group">
                            <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                            <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                          </li>
                          <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                          <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                        </ul>
                      </div>
                      {/* /.action */} 
                    </div>
                    {/* /.cart */} 
                  </div>
                  {/* /.product */} 
                </div>
                {/* /.products */} 
              </div>
              {/* /.item */} 
            </div>
            {/* /.home-owl-carousel */} 
          </section>
          {/* /.section */} 
          {/* ============================================== FEATURED PRODUCTS : END ============================================== */} 
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
  {/* ============================================================= FOOTER ============================================================= */}
  <footer id="footer" className="footer color-bg">
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="address-block">
              {/* /.module-heading */}
              <div className="module-body">
                <ul className="toggle-footer" style={{}}>
                  <li className="media">
                    <div className="pull-left"> <span className="icon fa-stack fa-lg"> <i className="fa fa-map-marker fa-stack-1x fa-inverse" /> </span> </div>
                    <div className="media-body">
                      <p>ThemesGround, 789 Main rd, Anytown, CA 12345 USA</p>
                    </div>
                  </li>
                  <li className="media">
                    <div className="pull-left"> <span className="icon fa-stack fa-lg"> <i className="fa fa-mobile fa-stack-1x fa-inverse" /> </span> </div>
                    <div className="media-body">
                      <p> + (888) 123-4567 / + (888) 456-7890</p>
                    </div>
                  </li>
                  <li className="media">
                    <div className="pull-left"> <span className="icon fa-stack fa-lg"> <i className="fa fa-envelope fa-stack-1x fa-inverse" /> </span> </div>
                    <div className="media-body"> <span><a href="#">marazzo@themesground.com</a></span> </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* /.module-body */} 
          </div>
          {/* /.col */}
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="module-heading">
              <h4 className="module-title">Customer Service</h4>
            </div>
            {/* /.module-heading */}
            <div className="module-body">
              <ul className="list-unstyled">
                <li className="first"><a href="#" title="Contact us">My Account</a></li>
                <li><a href="#" title="About us">Order History</a></li>
                <li><a href="#" title="faq">FAQ</a></li>
                <li><a href="#" title="Popular Searches">Specials</a></li>
                <li className="last"><a href="#" title="Where is my order?">Help Center</a></li>
              </ul>
            </div>
            {/* /.module-body */} 
          </div>
          {/* /.col */}
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="module-heading">
              <h4 className="module-title">Corporation</h4>
            </div>
            {/* /.module-heading */}
            <div className="module-body">
              <ul className="list-unstyled">
                <li className="first"><a title="Your Account" href="#">About us</a></li>
                <li><a title="Information" href="#">Customer Service</a></li>
                <li><a title="Addresses" href="#">Company</a></li>
                <li><a title="Addresses" href="#">Investor Relations</a></li>
                <li className="last"><a title="Orders History" href="#">Advanced Search</a></li>
              </ul>
            </div>
            {/* /.module-body */} 
          </div>
          {/* /.col */}
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="module-heading">
              <h4 className="module-title">Why Choose Us</h4>
            </div>
            {/* /.module-heading */}
            <div className="module-body">
              <ul className="list-unstyled">
                <li className="first"><a href="#" title="About us">Shopping Guide</a></li>
                <li><a href="#" title="Blog">Blog</a></li>
                <li><a href="#" title="Company">Company</a></li>
                <li><a href="#" title="Investor Relations">Investor Relations</a></li>
                <li className=" last"><a href="contact-us.html" title="Suppliers">Contact Us</a></li>
              </ul>
            </div>
            {/* /.module-body */} 
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-bar">
      <div className="container">
        <div className="col-xs-12 col-sm-4 no-padding social">
          <ul className="link">
            <li className="fb pull-left"><a target="_blank" rel="nofollow" href="#" title="Facebook" /></li>
            <li className="tw pull-left"><a target="_blank" rel="nofollow" href="#" title="Twitter" /></li>
            <li className="googleplus pull-left"><a target="_blank" rel="nofollow" href="#" title="GooglePlus" /></li>
            <li className="rss pull-left"><a target="_blank" rel="nofollow" href="#" title="RSS" /></li>
            <li className="pintrest pull-left"><a target="_blank" rel="nofollow" href="#" title="PInterest" /></li>
            <li className="linkedin pull-left"><a target="_blank" rel="nofollow" href="#" title="Linkedin" /></li>
            <li className="youtube pull-left"><a target="_blank" rel="nofollow" href="#" title="Youtube" /></li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-4 no-padding copyright"><a target="_blank" href="https://www.templateshub.net">Templates Hub</a> </div>
        <div className="col-xs-12 col-sm-4 no-padding">
          <div className="clearfix payment-methods">
            <ul>
              <li><img src="assets/images/payments/1.png" alt="" /></li>
              <li><img src="assets/images/payments/2.png" alt="" /></li>
              <li><img src="assets/images/payments/3.png" alt="" /></li>
              <li><img src="assets/images/payments/4.png" alt="" /></li>
              <li><img src="assets/images/payments/5.png" alt="" /></li>
            </ul>
          </div>
          {/* /.payment-methods */} 
        </div>
      </div>
    </div>
  </footer>
  {/* ============================================================= FOOTER : END============================================================= */} 
  {/* For demo purposes – can be removed on production */}
</div>

  )
}
