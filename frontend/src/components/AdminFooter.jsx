import React from 'react';
import './styles/AdminFooter.sass';

const AdminFooter = () => {
  return (
    <div className="Footer">
      <div className="Footer__highlighter" />
      <div className="Footer__container">
        <div className="Footer__copyrights">
          <h4>Sparrow S.A. Derechos reservados</h4>
        </div>
        <div className="Footer__socialicons">
          <span>Nuestras redes son:</span>
          <span className="material-icons">star_rate</span>
          <span className="material-icons">star_rate</span>
          <span className="material-icons">star_rate</span>
        </div>
      </div>
    </div>
  );
};

export default AdminFooter;
