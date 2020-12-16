import React from 'react';
import airplane from '../assets/airplane_icon.svg';
import './styles/FlightCard.sass';

const FlightCard = ({ data }) => {
  return (
    <div className="flightCard">
      <div className="flightCard__container">
        <div className="flightCard__image">
          <img
            src="https://co.staticontent.com/flights-images/18.83.6/common/airlines/25x25/AA.png"
            alt=""
          />
        </div>
        <div className="flightCard__departure">
          <h3 className="flightCard__departure__time">{data.departure_time}</h3>
          <h3 className="flightCard__departure__city">
            {data.departure_city_name}
          </h3>
          <h3 className="flightCard__departure__airport">
            {data.departure_airport_name}
          </h3>
        </div>
        <div className="flightCard__duration">
          <p>{data.flight_duration}</p>
          <hr />
          <img src={airplane} alt="" />
        </div>
        <div className="flightCard__destination">
          <h3 className="flightCard__destination__time">{data.arrival_time}</h3>
          <h3 className="flightCard__destination__city">
            {data.arrival_city_name}
          </h3>
          <h3 className="flightCard__destination__airport">
            {data.arrival_airport_name}
          </h3>
        </div>
      </div>
      <div className="flightCard__price">
        <hr />
        <span className="flightCard__price__title">Precio: </span>
        <span>{data.price}</span>
      </div>
    </div>
  );
};

export default FlightCard;
