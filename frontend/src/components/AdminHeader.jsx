import React from 'react';
import Logo from '../assets/logo.png';
import './styles/AdminHeader.sass';

const AdminHeader = ({ headerTitle }) => {
  return (
    <>
      <header className="AdminHeader">
        <figure className="AdminHeader__logo">
          <a href="/">
            <picture>
              <img src={Logo} alt="" />
            </picture>
            <p>ADMINISTRADOR</p>
          </a>
        </figure>
        <ul className="AdminHeader__logout">
          <a href="/">
            <li>
              <i className="material-icons">account_circle</i>
            </li>
            <li>Cerrar Sesión</li>
          </a>
        </ul>
        <h1 className="AdminHeader__title">{headerTitle}</h1>
        <hr />
      </header>
    </>
  );
};

export default AdminHeader;
