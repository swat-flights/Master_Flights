import React from 'react';
import './styles/AdminEditFlightsButton.sass';

const EditFlightsButton = ({ action }) => {
  return (
    <>
      <button className="admin-submit-button" type="submit">
        {action}
      </button>
    </>
  );
};

export default EditFlightsButton;
