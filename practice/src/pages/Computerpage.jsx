  import React from 'react'
  import '../App.css'
  import {computerData} from '../data/computers.js'
  import Navbar from '../components/navbar.jsx'

  const Computerpage = ({search}) => {
    

    const filteredComputers = computerData.filter((computer) => {

    const searchText = search.toLowerCase();

    const matchesSearch =
      computer.product.toLowerCase().includes(searchText) ||
      computer.company.toLowerCase().includes(searchText) ||
      computer.model.toLowerCase().includes(searchText) ||
      computer.price.toString().includes(searchText) ||
      computer.category.toLowerCase().includes(searchText) ||
      computer.description.toLowerCase().includes(searchText);


    return matchesSearch;
});
    return (
      <>  
      <div className='computerpage'>
          {filteredComputers.map((item) => (
              <div className="computer-item" key={item.id || item.model}>
                <div className="computerimg">
                  <img src={item.image} alt={item.model} />
                </div>
                <div className="computerinfo">
                  <h2>{item.model}</h2>
                  <p>{item.description}</p>
                  <h3 className="price">${item.price}</h3>
                  <button className="buybtn">Buy Now</button>
                </div>
              </div>
            ))}
      </div>
      </>
    )
  }

  export default Computerpage