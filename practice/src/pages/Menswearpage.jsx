import React from 'react'
import Navbar from '../components/navbar.jsx'
import {menData} from '../data/men'

const Menswearpage = ({search = ' ' }) => {

  const filteredMenswear = menData.filter((men) =>
    {
      const searchText = search.toLowerCase();  

      const matchesSearch =
        men.product.toLowerCase().includes(searchText) ||
        men.description.toLowerCase().includes(searchText) ||
        men.price.toString().includes(searchText) ||
        men.category.toLowerCase().includes(searchText);

        return matchesSearch;
    });

  return (
    <>
    <div className='menswearpage'>
        
        {filteredMenswear.map((item) => (
            <div className='menswear-item' key={item.id}>
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

export default Menswearpage