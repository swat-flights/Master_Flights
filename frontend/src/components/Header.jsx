import React from 'react';
import Logo from '../assets/logo.png';
import './styles/Header.sass';

const Header = () => (
  <div className="Header">
    <div className="Header__container">
      <div className="Header__leftMenu">
        <img src={Logo} alt="" />
        <div className="Header__leftMenu__items">
          <ul>
            <li>Descuentos</li>
            <li>Nosotros</li>
          </ul>
        </div>
      </div>
      <div className="Header__rightMenu">
        <span className="material-icons">call</span>
        <span className="Header__rightMenu__callNumber">0800 700 1429</span>
        <span className="material-icons">account_circle</span>
        <span className="material-icons">help</span>
      </div>
    </div>
  </div>
);

export default Header;
