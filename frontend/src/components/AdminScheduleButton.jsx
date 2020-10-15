import React from 'react';
import './styles/AdminScheduleButton.sass';

const AdminScheduleButton = ({ day }) => {
  return (
    <div className="Select">
      <input className="Select__input" type="checkbox" />
      <p>{day}</p>
    </div>
  );
};

export default AdminScheduleButton;
