import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
import Register from '../pages/Register'
import { useState } from 'react'
import MObilepage from '../pages/Mobilepage'
import Computerpage from '../pages/Computerpage'
import watchespage from '../pages/watchespage'
import Menswearpage from '../pages/Menswearpage'
import Womanwearpage from '../pages/Womanwearpage'
import Furniturepage from '../pages/Furniturepage'
import Kitchenpage from '../pages/Kitchenpage'

import { useContext } from 'react';
import {useCart} from '../context/Cartcontext';

const Navbar = ({search , setSearch}) => {
  const { cartItems } = useCart();


  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }

  return (
    
    <>
    <div className="navsection">
        
        <div className="title">
            <h1>E-MART</h1>
        </div>
        <div className="search">
            <input type="text" value={search} onChange={handleSearchChange} placeholder="Search products..." />
        </div>
        <div className="user">
            <div className="userdetail">
                <button onClick={() => window.location.href = '/register'}>Register</button>
                <button onClick={() => window.location.href = '/login'}>Login</button>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
        <div className="cartsection">
            </div>


            <Link to="/cart" className="custom-link">
            <div className="cart">
                <p>Cart</p>
                {cartItems.length > 0 && (
                    <span className="cart-count">{cartItems.length}</span>
                )}
            </div>
            </Link>
            
        </div>

 <div className="submenuu">  
        <div className="submenu">
            <ul>
                <Link to="/Mobilepage" className="custom-link">
                    <li>Mobiles</li>
                </Link> 
                <Link to="/Computerpage" className="custom-link">
                    <li>Computers</li>
                </Link> 
                <Link to="/watchespage" className="custom-link">
                    <li>Watches</li>
                </Link> 
                <Link to="/Menswearpage" className="custom-link">
                    <li>Mens Wear</li>
                </Link> 
                <Link to="/Womanwearpage" className="custom-link">
                    <li>Woman Wear</li>
                </Link> 
                <Link to="/Furniturepage" className="custom-link">
                    <li>Furniture</li>
                </Link> 
                <Link to="/Kitchenpage" className="custom-link">
                    <li>Kitchen</li>
                </Link> 
            </ul>
        </div>
</div>
   
    </>
  )
}

export default Navbar