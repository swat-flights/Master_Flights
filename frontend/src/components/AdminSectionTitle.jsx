import React from 'react';
import './styles/AdminSectionTitle.sass';

const AdminSectionTitle = ({ title }) => {
  return (
    <div className="SectionTitles">
      <h1>{title}</h1>
    </div>
  );
};

export default AdminSectionTitle;
