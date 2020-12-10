import React from 'react';

import './styles/FlightDetailsCard.sass';

const FlightDetailsCard = () => {
  return (
    <div className="FlightDetailsCard">
      <h1>Detalle de Vuelo</h1>
      <h3>Bogota- Medellin</h3>
      <h4>IDA</h4>
      <p>22 de Septiembre de 2020</p>
      <p>Latam Airlines</p>
      <div className="FlightDetailsCard__schedule">
        <div>
          <p>Salida</p>
          <p>06:30</p>
        </div>
        <div>
          <p>Llegada</p>
          <p>08:30</p>
        </div>
      </div>
    </div>
  );
};

export default FlightDetailsCard;
