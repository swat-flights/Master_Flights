import React from 'react';
import './styles/AdminSidebar.sass';

const AdminSidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Sidebar__newFly">
        <a className="Sidebar__newFly-button" href="url">
          <span className="material-icons">add_circle_outline</span>
          Crear vuelos
        </a>
      </div>
      <div className="Sidebar__newFly">
        <a className="Sidebar__updateFly-button" href="url">
          <span className="material-icons">create</span>
          Crear vuelos
        </a>
      </div>
    </div>
  );
};

export default AdminSidebar;
