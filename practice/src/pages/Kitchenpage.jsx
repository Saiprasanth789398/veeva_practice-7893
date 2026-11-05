import React from 'react'
import Navbar from '../components/navbar.jsx'
import {kitchenData} from '../data/kitchen'
const Kitchenpage = ({search = ' ' }) => {


  const filteredKitchen = kitchenData.filter((kitchen) =>
    {
      const searchText = search.toLowerCase();  

      const matchesSearch =
        kitchen.product.toLowerCase().includes(searchText) ||
        kitchen.description.toLowerCase().includes(searchText) ||
        kitchen.price.toString().includes(searchText) ||
        kitchen.category.toLowerCase().includes(searchText);

        return matchesSearch;
    });
  return (


    <>
    <div className='kitchenpage'>
      {filteredKitchen.map((item) => (
        <div key={item.id} className='kitchen-item'>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default Kitchenpage;