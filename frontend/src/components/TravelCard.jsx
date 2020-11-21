import React from 'react';
import TravelCardButton from './TravelCardButton';
import CardIcon from '../assets/CardIcon.png';
import TravelCardDetails from './TravelCardDetails';
import './styles/TravelCard.sass';

const TravelCard = () => {
  return (
    <div className="TravelCard">
      <div className="TravelCard__container">
        <div className="TravelCard__container__img">
          <img src={CardIcon} alt="cardIcon" />
        </div>
        <TravelCardDetails />
        <div className="TravelCard__container__time">
          <p>1h 30m</p>
          <div className="TravelCard__container__time-icon">
            <hr />
            <i className="material-icons">send</i>
          </div>
        </div>
        <TravelCardDetails />
        <hr className="TravelCard__divider" />
        <div className="TravelCard__container__cost">
          <h2>$100 USD</h2>
        </div>
      </div>
      <TravelCardButton />
    </div>
  );
};

export default TravelCard;
