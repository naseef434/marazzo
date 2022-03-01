import React from 'react'

export default function WideProductsNew() {
  return (
    <>
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
    </>
  )
}
