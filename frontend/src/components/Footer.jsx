import React from 'react';
import Logo from '../assets/whiteLogo.png';
import './styles/Footer.sass';

const Footer = () => (
  <>
    <div className="Footer">
      <div className="Footer__container">
        <div className="Footer__logo">
          <img src={Logo} alt="" />
        </div>
        <div className="Footer__menu">
          <div className="Footer__menu__item">
            <h4>Menu 1</h4>
            <ul>
              <li>Item1</li>
              <li>Item2</li>
              <li>Item3</li>
            </ul>
          </div>
          <div className="Footer__menu__item">
            <h4>Menu 1</h4>
            <ul>
              <li>Item1</li>
              <li>Item2</li>
              <li>Item3</li>
            </ul>
          </div>
          <div className="Footer__menu__item">
            <h4>Menu 1</h4>
            <ul>
              <li>Item1</li>
              <li>Item2</li>
              <li>Item3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="Footer__Bottom">
      <div className="Footer__container">
        <div className="Footer__Bottom__copyrights">
          <h4>Derechos reservados</h4>
        </div>
        <div className="Footer__Bottom__socialicons">
          <span>Nuestras redes son:</span>
          <span className="material-icons">star_rate</span>
          <span className="material-icons">star_rate</span>
          <span className="material-icons">star_rate</span>
        </div>
      </div>
    </div>
  </>
);

export default Footer;
