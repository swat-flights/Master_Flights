import React from 'react';

import './styles/PriceCard.sass';

const PriceCard = () => {
  return (
    <div className="priceCard">
      <h1>Detalles de Compra</h1>
      <div className="priceCard__row">
        <span>Pasaje una persona</span>
        <span>300$</span>
      </div>
      <div className="priceCard__row">
        <span>Impuestos y otros</span>
        <span>100$</span>
      </div>
      <div className="priceCard__lastRow">
        <span>Total</span>
        <span>400$</span>
      </div>
    </div>
  );
};

export default PriceCard;
