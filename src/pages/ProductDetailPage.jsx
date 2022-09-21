import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom';
import parse from 'html-react-parser';
import axios from 'axios';
import {Routes,Route} from 'react-router-dom';
import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom';
import PaymentProcess from '../components/paymentProcess';
function ProductDetailPage({name}) {
    const param=useParams();

    const [detail,setDetail]=useState({});
    useEffect(()=>{
      window.scrollTo(0,0);
        axios({
            url:"https://nepaligardencms.creatudevelopers.com.np/api/v1/product/get/"+param.productSlug,
            method: "GET",
        }).then((response)=>{
            setDetail(response.data.data.product);
        })
        
        
    },[])

    function handleCart(){
      alert("added to the cart",{name})
    }
    console.log(detail);
  return (
    <>
    <Navbar/>
    
    <img src={detail.image} className="detail-image"/>
    <h4 className='detail-name'>{detail.name}</h4>
    <h5 className='detail-price'>Rs.{detail.price}</h5>
    <h6 className='detail-details'>Details:{parse(detail.detail ? detail.detail:" ")}</h6>
    <h6 className='detail-head'>Ingredeints:</h6>
    <p className='detail-ingre'>{parse(detail.ingredeints  ? detail.ingredeints:" ")}</p>
   <div className='btns'>
   <button className='btn-buy button' ><Link to="/paymentprocess">Buy Now</Link> </button>
    <button className='add-to-cart button' onClick={handleCart}>Add to Cart</button>
   </div>
   
    </>
  )
}

export default ProductDetailPage