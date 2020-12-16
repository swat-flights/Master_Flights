import React from 'react';
import './styles/TravelCardButton.sass';

const TravelCardButton = () => {
  return (
    <button
      className="TravelCard__delete"
      type="button"
      onClick={() => window.alert('Lorem Ipsum')}
    >
      <i className="material-icons">delete</i>
    </button>
  );
};

export default TravelCardButton;
