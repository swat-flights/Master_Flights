import React from 'react';
import './styles/AdminInput.sass';

const AdminInput = ({ title, type, id, placeHolder, defaultValue }) => {
  return (
    <label htmlFor={id} className="Labels">
      <span>{title}</span>
      <input
        type={type || 'text'}
        id={id}
        name={id}
        placeholder={placeHolder}
        defaultValue={defaultValue}
        required
      />
    </label>
  );
};

export default AdminInput;
