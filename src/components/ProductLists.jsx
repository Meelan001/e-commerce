import React, { useEffect, useState } from 'react';
import ProductCard from './productCard';

import axios from 'axios';
function ProductLists() {
  const [allProduct, setAllProduct] = useState([]);
  useEffect(() => {
    axios({
      url: "https://nepaligardencms.creatudevelopers.com.np/api/v1/product/get",
      method: "GET",

    }).then((response) => {
      setAllProduct(response.data.products.data);
    })




  }, []);

  console.log("hello", allProduct);
  return (
    <>
      <div className='row'>


        {
          allProduct.map((e,index) => {
            return(
              <>
              <div className='col-3' key={index}>
              <ProductCard image={e.image}
                name={e.name}
                price={e.price}
               detail={e.detail}
                slug={e.slug}
                />
                 </div> 
              </>
            )
            
              })
             
             
            
        

          }
           
          
        
        
    </div>

    </>
  )
}

export default ProductLists;