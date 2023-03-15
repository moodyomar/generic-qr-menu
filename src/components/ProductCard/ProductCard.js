import React, { useState } from 'react';
import './ProductCard.css';

export default function ProductCard({ product: { name, price, picture,desc }, endPoint }) {
  const [showDetails, setShowDetails] = useState(false);
  const defaultPic = picture ? picture : 'default.jpg';

  const handleMouseEnter = () => {
    setShowDetails(true);
  };

  const handleMouseLeave = () => {
    setShowDetails(false);
  };

  return (
    <div className="food-card" data-aos={`zoom-in`} data-aos-duration="1000">
      <div
        className="food-card-img-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className="logo" src={`${endPoint}logo.png`} alt="Logo" />
        <img src={`${endPoint}${defaultPic}`} alt="Product" />
        <div className={`food-card-details${showDetails ? ' show' : ''}`}>
          <p className="food-card-details-text">{desc}</p>
        </div>
        <div className="food-card-title-container">
          <h3 className="food-card-title">{name}</h3>
          <p className="food-card-price">₪{price}</p>
        </div>
      </div>
    </div>
  );
}
