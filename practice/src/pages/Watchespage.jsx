import React from 'react'
import Navbar from '../components/navbar.jsx'
import {watchData} from '../data/watch'

const Watchespage = ({search = ' ' }) => {

  const filteredWatches = watchData.filter((watch) =>
    {
      const searchText = search.toLowerCase();  

      const matchesSearch =
        watch.product.toLowerCase().includes(searchText) ||
        watch.description.toLowerCase().includes(searchText) ||
        watch.price.toString().includes(searchText) ||
        watch.category.toLowerCase().includes(searchText);

        return matchesSearch;
    });

  return (
    <>
    <div className='watchespage'>
        {filteredWatches.map((item) => (
            <div className='watches-item' key={item.id}>
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

export default Watchespage