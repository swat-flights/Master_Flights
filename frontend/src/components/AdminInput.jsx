import React from 'react';
import './styles/AdminInput.sass';

const AdminInput = ({ title, placeHolder }) => {
  return (
    <div className="Labels">
      <p>{title}</p>
      <input placeholder={placeHolder} />
    </div>
  );
};

export default AdminInput;
