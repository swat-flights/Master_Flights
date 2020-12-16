import React from 'react';
import './styles/DiscountCard.sass';
import foto from '../assets/foto1.png';

const DiscountCard = () => (
  <div className="DiscountCard">
    <figure className="DiscountCard__image">
      <img src={foto} alt="" />
    </figure>
    <div className="DiscountCard__description">
      <h3>Text Here</h3>
      <div className="DiscountCard__score">
        <span className="material-icons">star_rate</span>
        <span>4.5</span>
      </div>
    </div>
    <span className="DiscountCard__price">300$</span>
  </div>
);

export default DiscountCard;
