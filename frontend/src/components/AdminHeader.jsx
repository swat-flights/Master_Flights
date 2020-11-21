import React from 'react';
import Logo from '../assets/logo.png';
import './styles/AdminHeader.sass';

const AdminHeader = ({ headerTitle }) => {
  return (
    <div className="AdminHeader">
      <div className="AdminHeader__container">
        <div className="AdminHeader__logo">
          <img className="AdminHeader__logo-img" src={Logo} alt="logo" />
          <p className="AdminHeader__logo-title">ADMINISTRADOR</p>
        </div>
        <div className="AdminHeader__title">
          <h1>{headerTitle}</h1>
        </div>
        <div className="AdminHeader__userItems">
          <a className="AdminHeader__logout" href="/">
            <div>Cerrar Sesión</div>
            <i>
              <span className="material-icons">account_circle</span>
            </i>
          </a>
        </div>
      </div>
      <hr className="AdminHeader__highlighter" />
    </div>
  );
};

export default AdminHeader;
