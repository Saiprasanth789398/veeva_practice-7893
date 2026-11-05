import React from 'react'
import {mobileData} from '../data/mobiles'
import { useParams } from 'react-router-dom'
import '../App.css'
import Navbar from '../components/navbar'
import { useContext } from 'react'
import { useCart } from '../context/Cartcontext'

const Mobilesingle = () => {
  const { id } = useParams();

  const { addToCart , cartItems } = useCart();

  const mobile = mobileData.find((m) => m.id === id);

  if (!mobile) {
    return <div>Mobile not found</div>;
  }

  return (
    <>
    <div className='single'>
        <div className='singleimg'>     
            <img src = {mobile.image} alt={mobile.model} />
        </div>
        <div className='singleinfo'>
            <h2>{mobile.model}</h2>
            <p>{mobile.description}</p>
            <h3>${mobile.price}</h3>
            <button onClick = {() => {addToCart(mobile)}} className='buybtn'>Buy Now</button>
        </div>
      
    </div>
    </>
  )
}

export default Mobilesingle