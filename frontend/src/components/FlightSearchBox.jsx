import React from 'react';
import './styles/FlightSearchBox.sass';

const FlightSearchBox = ({ noShadow }) => (
  <div className="SearchBox">
    <div className={`SearchBox__container ${noShadow ? 'withoutShadow' : ''}`}>
      <h3>Asi volamos en Sparrow, volar es enamorarse</h3>
      <h5>Busca aca el vuelo que mas te convenga</h5>
      <div>
        <form action="" className="SearchBox__form">
          <div className="SearchBox__form__item">
            <label htmlFor="from">Origen</label>
            <span className="material-icons">trip_origin</span>
            <input id="from" type="text" placeholder="Ciudad Origen" />
          </div>

          <div className="SearchBox__form__item">
            <label htmlFor="to">Destino</label>
            <span className="material-icons">location_on</span>
            <input id="to" type="text" placeholder="Ciudad Destino" />
          </div>

          <div className="SearchBox__form__item">
            <label htmlFor="departure">Fecha Ida</label>
            <span className="material-icons">today</span>
            <input id="departure" type="text" placeholder="dd/mm/aa" />
          </div>

          <div className="SearchBox__form__item">
            <label htmlFor="return">Fecha Regreso</label>
            <span className="material-icons">today</span>
            <input id="return" type="text" placeholder="dd/mm/aa" />
          </div>
          <div className="SearchBox__form__button">
            <input type="button" value="Buscar" />
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default FlightSearchBox;
