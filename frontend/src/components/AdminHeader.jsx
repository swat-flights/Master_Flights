import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import './styles/AdminHeader.sass';

const AdminHeader = ({ headerTitle }) => {
  return (
    <>
      <header className="AdminHeader">
        <figure className="AdminHeader__logo">
          <Link to="/editFlights">
            <picture>
              <img src={Logo} alt="" />
            </picture>
            <p>ADMINISTRADOR</p>
          </Link>
        </figure>
        <h1 className="AdminHeader__title">{headerTitle}</h1>
        <ul className="AdminHeader__logout">
          <Link to="/">
            <li>
              <i className="material-icons">account_circle</i>
            </li>
            <li>Cerrar Sesión</li>
          </Link>
        </ul>
        <hr />
      </header>
    </>
  );
};

export default AdminHeader;
