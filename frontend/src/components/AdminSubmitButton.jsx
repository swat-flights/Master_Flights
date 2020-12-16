import React from 'react';
import './styles/AdminSubmitButton.sass';

const EditFlightsButton = ({ action, type }) => {
  return (
    // Desactive la regla "react/button-has-type" en eslint para hacer este boton dinámico
    <button className="admin-submit-button" type={type}>
      {action}
    </button>
  );
};

export default EditFlightsButton;
