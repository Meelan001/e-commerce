import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function PaymentProcess() {
    const [bankDetail,setBankDetail]=useState("");
    const [address,setAddress]=useState("");
    const [secondAddress,setSecondAddress]=useState("");

    function handleBank(e){
        setBankDetail(e.target.value);
    }
    function handleAddress(e){
        setAddress(e.target.value);
    }
    function handleSecond(e){
        setSecondAddress(e.target.value);
    }
  return (
    
    <div className='allpage'>

<Navbar/>
    <h3 className='payment-head'>Enter Your Paymnet Details</h3>
    <form>
        <div>
        <input type="text" className='input-box' value={bankDetail} onChange={handleBank} placeholder="Card Number                                                                  MM/YY/CVC"/>
        </div>
        <div>
        <input type="text" className='input-box' value={address} onChange={handleAddress} placeholder="Street Address"/>
        </div>
        <div>
        <input type="text" className='input-box' value={secondAddress} onChange={handleSecond} placeholder="Second Address(OPT)"/>
        </div>
        
        <div>
        <select className='input-box'>
            <option value="np">Nepal</option>
            <option value="in">India</option>
            <option value="bd">Bangaladesh</option>
            <option value="jpn">Japan</option>
            <option value="us">America</option>
            <option value="aus">Australia</option>
        </select>
        </div>
        <input type="text" placeholder='City' className='city'/>
        <select name="" id="" className='state'>
            <option value="">bagmati</option>
            <option value="">sagarmatha</option>
            <option value="">gandagi</option>
            <option value="">seti</option>
        </select>
        <input type="text" placeholder='zip code' className='zip'/>
        <div>
        <button className='button1 buttons'>Buy Now</button>
        <button className='button2 buttons'><Link to="/">Back to Homepage</Link> </button>

        </div>
        
    </form>
    </div>
    
  )
}

export default PaymentProcess;