import React from 'react';
import './styles/AdminSidebar.sass';

const AdminSidebar = ({ children }) => {
  return <nav className="Sidebar">{children}</nav>;
};

export default AdminSidebar;
