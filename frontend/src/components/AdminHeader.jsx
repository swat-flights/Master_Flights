import React from 'react';
import Logo from '../assets/logo.png';
import './styles/AdminHeader.sass';

const AdminHeader = ({ headerTitle }) => {
  return (
    <div className="Header">
      <div className="Header__container">
        <div className="Header__logo">
          <img className="Header__logo-img" src={Logo} alt="logo" />
          <p className="Header__logo-title">ADMINISTRADOR</p>
        </div>
        <h1 className="Header__title">{headerTitle}</h1>
        <div className="Header__userItems">
          <a className="Header__logout" href="/">
            Cerrar Sesión
          </a>
          <span className="material-icons">account_circle</span>
        </div>
      </div>
      <div className="Header__highlighter" />
    </div>
  );
};

export default AdminHeader;
