import React from 'react';
import './styles/AdminFooter.sass';

const AdminFooter = () => {
  return (
    <div className="AdminFooter">
      <div className="AdminFooter__highlighter" />
      <div className="AdminFooter__container">
        <div className="AdminFooter__copyrights">
          <p>Sparrow S.A. Derechos reservados</p>
        </div>
        <div className="AdminFooter__socialicons">
          <p>Nuestras redes son:</p>
          <span className="material-icons">star_rate</span>
          <span className="material-icons">star_rate</span>
          <span className="material-icons">star_rate</span>
        </div>
      </div>
    </div>
  );
};

export default AdminFooter;
