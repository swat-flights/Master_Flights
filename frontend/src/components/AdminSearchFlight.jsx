import React from 'react';
import './styles/AdminSearchFlight.sass';

const AdminSearchFlight = () => {
  return (
    <form action="" className="Search">
      <h1 className="Search__title">Busqueda</h1>
      <p>DIGITA EL NUMERO DE VUELO AQUI</p>
      <label htmlFor="idflight" className="Search__input">
        <input type="search" id="idflight" name="q" placeholder="Buscar..." />
        <button onClick={() => window.alert('Lorem impsum')} type="submit">
          <span className="material-icons">search</span>
        </button>
      </label>
    </form>
  );
};

export default AdminSearchFlight;
