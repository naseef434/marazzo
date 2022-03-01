import React from 'react'

export default function ProductGridView() {
  return (
    <>
  <div className="tab-pane active " id="grid-container">
    <div className="category-product">
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="item">
            <div className="products">
              <div className="product">
                <div className="product-image">
                  <div className="image">
                    <a href="detail.html">
                      <img src="assets/images/products/p12.jpg" alt="" />
                      <img
                        src="assets/images/products/p12_hover.jpg"
                        alt=""
                        className="hover-image"
                      />
                    </a>
                  </div>
                  {/* /.image */}
                  <div className="tag hot">
                    <span>hot</span>
                  </div>
                </div>
                {/* /.product-image */}
                <div className="product-info text-left">
                  <h3 className="name">
                    <a href="detail.html">Floral Print Buttoned</a>
                  </h3>
                  <div className="rating rateit-small" />
                  <div className="description" />
                  <div className="product-price">
                    {" "}
                    <span className="price"> $450.99 </span>{" "}
                    <span className="price-before-discount">$ 800</span>{" "}
                  </div>
                  {/* /.product-price */}
                </div>
                {/* /.product-info */}
                <div className="cart clearfix animate-effect">
                  <div className="action">
                    <ul className="list-unstyled">
                      <li className="add-cart-button btn-group">
                        <button
                          className="btn btn-primary icon"
                          data-toggle="dropdown"
                          type="button"
                        >
                          {" "}
                          <i className="fa fa-shopping-cart" />{" "}
                        </button>
                        <button
                          className="btn btn-primary cart-btn"
                          type="button"
                        >
                          Add to cart
                        </button>
                      </li>
                      <li className="lnk wishlist">
                        {" "}
                        <a
                          className="add-to-cart"
                          href="detail.html"
                          title="Wishlist"
                        >
                          {" "}
                          <i className="icon fa fa-heart" />{" "}
                        </a>{" "}
                      </li>
                      <li className="lnk">
                        {" "}
                        <a
                          className="add-to-cart"
                          href="detail.html"
                          title="Compare"
                        >
                          {" "}
                          <i className="fa fa-signal" />{" "}
                        </a>{" "}
                      </li>
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
        </div>
        {/* /.item */}
      </div>
      {/* /.row */}
    </div>
    {/* /.category-product */}
  </div>
  {/* /.tab-pane */}
</>

  )
}
