import React from 'react';
import airplane from '../assets/airplane_icon.svg';
import './styles/FlightCard.sass';

const FlightCard = () => {
  return (
    <div className="flightCard">
      <div className="flightCard__container">
        <div className="flightCard__image">
          <img
            src="https://co.staticontent.com/flights-images/18.67.5/common/airlines/25x25/UA.png"
            alt=""
          />
        </div>
        <div className="flightCard__departure">
          <h3 className="flightCard__departure__time">19:30</h3>
          <h3 className="flightCard__departure__city">Bogota</h3>
          <h3 className="flightCard__departure__airport">El dorado (DOR)</h3>
        </div>
        <div className="flightCard__duration">
          <p>1h 30m</p>
          <hr />
          <img src={airplane} alt="" />
        </div>
        <div className="flightCard__destination">
          <h3 className="flightCard__destination__time">19:30</h3>
          <h3 className="flightCard__destination__city">Bogota</h3>
          <h3 className="flightCard__destination__airport">El dorado (DOR)</h3>
        </div>
        <hr />
        <div className="flightCard__price">
          <h2>$ 100</h2>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
