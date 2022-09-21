import React from 'react'

import './ProductCard.css'
import {Link} from 'react-router-dom'
import parse from 'html-react-parser'
function ProductCard({image,name,price,slug,detail}) {
  return (
    <>
    <div className="card" style={{width: '18rem', height:"500px" ,margin:"10px"}}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className='price'>Rs. {price}</p>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">  </p>

          <Link to={"/product_detail/"+slug} className="btn btn-primary">View Details...</Link>
        </div>
      </div>
    </>
  )
}

export default ProductCard;