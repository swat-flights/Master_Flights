import React from 'react';
import './styles/AdminInput.sass';

const AdminInput = ({ title, type, id, placeHolder, menuOptions }) => {
  return (
    <label htmlFor={id} className="Labels">
      <span>{title}</span>
      {type === 'select' ? (
        <select name="" id="">
          {menuOptions.map(item => {
            return <option value="">{item}</option>;
          })}
        </select>
      ) : (
        <input
          type={type || 'text'}
          id={id}
          name={id}
          placeholder={placeHolder}
          required
        />
      )}
    </label>
  );
};

export default AdminInput;
