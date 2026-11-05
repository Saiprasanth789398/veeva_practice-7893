import React from 'react'
import mobileData from '../data/mobiles.js'
import "../App.css"

const Mobile = () => {  

  const firstfiveMobiles = mobileData.slice(0, 5);
  return (
    <>
    <div className="mobilecontainer">
      {firstfiveMobiles.map((item) => (
        <div className="mobile" key={item.id || item.model}>
          <div className="mobileimg">
            <img src={item.image} alt={item.model} />
          </div>
          <div className="mobileinfo">
            <h3>{item.model}</h3>
            <p>{item.price}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Mobile