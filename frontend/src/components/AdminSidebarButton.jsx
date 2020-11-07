import React from 'react';
import './styles/AdminSidebarButton.sass';

const AdminSidebarButton = ({ action }) => {
  return (
    <div className="Sidebar__newFly">
      <button
        onClick={() => {
          window.alert('lorem ipsum');
        }}
        className="Sidebar__newFly_button"
        type="button"
      >
        <span className="material-icons">add_circle_outline</span>
        {action}
      </button>
    </div>
  );
};

export default AdminSidebarButton;
