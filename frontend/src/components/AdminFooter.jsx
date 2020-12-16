import React from 'react';
import './styles/AdminFooter.sass';

const AdminFooter = () => {
  return (
    <footer className="AdminFooter">
      <hr />
      <div className="AdminFooter__container">
        <p>Sparrow S.A. Derechos reservados</p>
        <div className="AdminFooter__socialicons">
          <p>Nuestras redes son:</p>
          <nav>
            <span className="material-icons">star_rate</span>
            <span className="material-icons">star_rate</span>
            <span className="material-icons">star_rate</span>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default AdminFooter;
