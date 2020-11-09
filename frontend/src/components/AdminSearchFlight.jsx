import React from 'react';
import './styles/AdminSearchFlight.sass';

const AdminSearchFlight = () => {
  return (
    <div className="Search">
      <div className="Search__Container">
        <div className="Search__Container-title">
          <h1>Busqueda</h1>
          <p>DIGITA EL NUMERO DE VUELO AQUI</p>
        </div>
        <div className="Search__Container-input">
          <input type="text" placeholder="Buscar..." />
          <button
            className="Search__button"
            onClick={() => window.alert('Lorem impsum')}
            type="button"
          >
            <span className="material-icons">search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSearchFlight;
