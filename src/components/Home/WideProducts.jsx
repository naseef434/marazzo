import React from 'react'

export default function WideProducts() {
  return (
    <>
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
    </>
  )
}
