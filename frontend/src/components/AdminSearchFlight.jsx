import React from 'react';
import './styles/AdminSearchFlight.sass';

function AdminSearchFlight() {
  const handleSubmit = e => {
    e.preventDefault();
    const route = `http://localhost:3000/editFlights/${
      document.getElementById('idflight').value
    }`;
    const search = window.location.replace(route);
    return search;
  };

  return (
    <form action="" className="Search" onSubmit={handleSubmit}>
      <h1 className="Search__title">Busqueda</h1>
      <p>DIGITA EL NUMERO DE VUELO AQUI</p>
      <label htmlFor="idflight" className="Search__input">
        <input type="search" id="idflight" name="q" placeholder="Buscar..." />
        <button onClick={handleSubmit} type="submit">
          <span className="material-icons">search</span>
        </button>
      </label>
    </form>
  );
}

export default AdminSearchFlight;
