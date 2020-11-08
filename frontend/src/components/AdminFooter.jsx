import React from 'react';
import './styles/AdminFooter.sass';

const AdminFooter = () => {
  return (
    <div className="Footer">
      <div className="Footer__highlighter" />
      <div className="Footer__container">
        <div className="Footer__copyrights">
          <p>Sparrow S.A. Derechos reservados</p>
        </div>
        <div className="Footer__socialicons">
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
