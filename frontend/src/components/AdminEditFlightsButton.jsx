import React from 'react';
import './styles/AdminEditFlightsButton.sass';

const EditFlightsButton = ({ action }) => {
  return (
    <>
      <button
        className="Button"
        type="button"
        onClick={() => {
          window.alert('lorem ipsum');
        }}
      >
        {action}
      </button>
    </>
  );
};

export default EditFlightsButton;
