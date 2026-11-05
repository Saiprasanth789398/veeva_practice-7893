import React from 'react'
import Navbar from '../components/navbar.jsx'
import {womanData} from '../data/woman'
const Womanwearpage = ({search = ' ' }) => {

  const filteredWomanwear = womanData.filter((woman) =>
    {
      const searchText = search.toLowerCase();  

      const matchesSearch =
        woman.product.toLowerCase().includes(searchText) ||
        woman.description.toLowerCase().includes(searchText) ||
        woman.price.toString().includes(searchText) ||
        woman.category.toLowerCase().includes(searchText);

        return matchesSearch;
    });
  return (
    <>
    <div className='womanwearpage'>
        {filteredWomanwear.map((item) => (
            <div className='womanwear-item' key={item.id}>
                <img src={item.image} alt={item.name} />
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <h3 className='price'>${item.price}</h3>
                <button className='buybtn'>Buy Now</button>
            </div>
        ))}
    </div>
    </>
  )
}

export default Womanwearpage