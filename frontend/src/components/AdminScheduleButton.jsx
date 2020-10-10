import React from 'react';
import './styles/AdminScheduleButton.sass';

const AdminScheduleButton = ({ day }) => {
  return (
    <div className="Select">
      <input type="button" />
      <p>{day}</p>
    </div>
  );
};

export default AdminScheduleButton;
