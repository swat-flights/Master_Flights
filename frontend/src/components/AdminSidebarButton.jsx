import React from 'react';
import './styles/AdminSidebarButton.sass';

const AdminSidebarButton = ({ action }) => {
  return (
    <div className="Sidebar__newFly">
      <a className="Sidebar__newFly-button" href="/">
        <span className="material-icons">add_circle_outline</span>
        {action}
      </a>
    </div>
  );
};

export default AdminSidebarButton;
