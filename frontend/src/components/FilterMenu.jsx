import React from 'react';
import './styles/FilterMenu.sass';

const FilterMenu = () => {
  return (
    <div className="filterMenu">
      <div className="filterMenu__container">
        <div className="filterMenu__orderBy">
          <p className="filterMenu__subtitle">Ordenar por:</p>
          <label htmlFor="">
            <input type="radio" name="sortBy" />
            Precio
          </label>
          <label htmlFor="">
            <input type="radio" name="sortBy" />
            Duracion
          </label>
        </div>
        <div className="filterMenu__byAirlines">
          <p className="filterMenu__subtitle">Aerolineas:</p>
          <label htmlFor="">
            <input type="checkbox" />
            Aerolinea1
          </label>
          <label htmlFor="">
            <input type="checkbox" />
            Aerolinea2
          </label>
          <label htmlFor="">
            <input type="checkbox" />
            Aerolinea3
          </label>
        </div>
        <div className="filterMenu__byPrice">
          <p className="filterMenu__subtitle">Precio:</p>
          <div className="slidecontainer">
            <input
              type="range"
              min="1"
              max="100"
              defaultValue="50"
              className="slider"
              id="myRange"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
