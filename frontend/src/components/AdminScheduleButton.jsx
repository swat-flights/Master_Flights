import React from 'react';
import './styles/AdminScheduleButton.sass';

const AdminScheduleButton = ({ day, id, name }) => {
  return (
    <label htmlFor={id} className="radio-input" required>
      <input type="radio" name={name} id={id} defaultValue={id} />
      <span>{day}</span>
    </label>
  );
};

export default AdminScheduleButton;
