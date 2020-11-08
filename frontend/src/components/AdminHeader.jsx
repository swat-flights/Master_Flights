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
        <div className="Header__title">
          <h1>{headerTitle}</h1>
        </div>
        <div className="Header__userItems">
          <a className="Header__logout" href="/">
            <div>Cerrar Sesión</div>
            <i>
              <span className="material-icons">account_circle</span>
            </i>
          </a>
        </div>
      </div>
      <div className="Header__highlighter" />
    </div>
  );
};

export default AdminHeader;
