import React from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import AdminFooter from '../components/AdminFooter';
import AdminInput from '../components/AdminInput';
import './styles/AdminAddFlights.sass';

const AdminAddFlights = () => {
  return (
    <>
      <AdminHeader />
      <div className="Forms">
        <AdminSidebar />
        <AdminInput />
      </div>
      <AdminFooter />
    </>
  );
};

export default AdminAddFlights;
