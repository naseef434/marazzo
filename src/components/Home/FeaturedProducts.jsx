import React from 'react'

export default function FeaturedProducts() {
  return (
    <>
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
    </>
  )
}
