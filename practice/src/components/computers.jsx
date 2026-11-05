import React from 'react';
import { computerData } from '../data/computers.js';
import "../App.css";

const Computers = () => {
  const firstfivecomputers = computerData.slice(0, 5);

  return (
    <div className="computercontainer">
      {firstfivecomputers.map((item) => (
        <div className="computer" key={item.id || item.model}>
          <div className="computerimg">
            <img src={item.image} alt={item.model} />
          </div>

          <div className="computerinfo">
            <h3>{item.model}</h3>
            <p>{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Computers;