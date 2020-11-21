import React from 'react';
import './styles/AdminInput.sass';

const AdminInput = ({ title, placeHolder, type }) => {
  return (
    <div className="Labels">
      <p>{title}</p>
      <input placeholder={placeHolder} type={type || ''} />
    </div>
  );
};

export default AdminInput;
