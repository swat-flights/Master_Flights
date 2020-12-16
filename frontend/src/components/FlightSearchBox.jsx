import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/FlightSearchBox.sass';

const FlightSearchBox = ({ noShadow }) => {
  const [flight, setFlightInfo] = useState({
    departure: '',
    from: '',
    destination: '',
  });

  const handleChange = e => {
    setFlightInfo({
      ...flight,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="SearchBox">
      <div
        className={`SearchBox__container ${noShadow ? 'withoutShadow' : ''}`}
      >
        <h3>Asi volamos en Sparrow, volar es enamorarse</h3>
        <h5>Busca aca el vuelo que mas te convenga</h5>
        <div>
          <form action="" className="SearchBox__form">
            <div className="SearchBox__form__item">
              <label htmlFor="from">Origen</label>
              <span className="material-icons">trip_origin</span>
              <input
                id="from"
                name="from"
                type="text"
                placeholder="Ciudad Origen"
                onChange={handleChange}
              />
            </div>

            <div className="SearchBox__form__item">
              <label htmlFor="destination">Destino</label>
              <span className="material-icons">location_on</span>
              <input
                id="destination"
                name="destination"
                type="text"
                placeholder="Ciudad Destino"
                onChange={handleChange}
              />
            </div>

            <div className="SearchBox__form__item">
              <label htmlFor="departure">Fecha Ida</label>
              <span className="material-icons">today</span>
              <input
                id="departure"
                name="departure"
                type="text"
                placeholder="dd/mm/aa"
                onChange={handleChange}
              />
            </div>

            <div className="SearchBox__form__item">
              <label htmlFor="return">Fecha Regreso</label>
              <span className="material-icons">today</span>
              <input id="return" type="text" placeholder="dd/mm/aa" />
            </div>

            <Link
              to={{
                pathname: '/flightResults',
                state: flight,
              }}
            >
              <div className="SearchBox__form__button">
                <input type="button" value="Buscar" />
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FlightSearchBox;
