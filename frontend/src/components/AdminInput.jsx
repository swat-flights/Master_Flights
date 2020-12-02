import React from 'react';
import './styles/AdminInput.sass';

const AdminInput = ({ title, type, id, name, value, placeHolder }) => {
  return (
    <label htmlFor={id} className="Labels">
      <span>{title}</span>
      <input
        type={type || 'text'}
        id={id}
        name={name}
        defaultValue={value}
        placeholder={placeHolder}
      />
    </label>
  );
};

export default AdminInput;
