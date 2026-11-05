import React from 'react'
import Navbar from '../components/navbar'
import { furnitureData } from '../data/furniture'

const Furniturepage = ({search = ' ' }) => {
  

    const filteredFurniture = furnitureData.filter((furniture) =>
    {
      const searchText = search.toLowerCase();
      const matchesSearch =
        furniture.model.toLowerCase().includes(searchText) ||
        furniture.description.toLowerCase().includes(searchText) ||
        furniture.price.toString().includes(searchText) ||
        furniture.category.toLowerCase().includes(searchText);

        return matchesSearch;
    });
return (
    <>
    <div className='furniturepage'>
        {filteredFurniture.map((item) => (
            <div className='furniture-item' key={item.id}>
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

export default Furniturepage