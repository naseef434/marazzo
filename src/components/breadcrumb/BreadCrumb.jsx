import React from 'react'

export default function BreadCrumb() {
  return (
    <div className="breadcrumb">
  <div className="container">
    <div className="breadcrumb-inner">
      <ul className="list-inline list-unstyled">
        <li><a href="#">Home</a></li>
        <li className="active">Products</li>
      </ul>
    </div>
    {/* /.breadcrumb-inner */} 
  </div>
  {/* /.container */} 
</div>

  )
}
