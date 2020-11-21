import React from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSidebarButton from '../components/AdminSidebarButton';
import AdminSidebar from '../components/AdminSidebar';
import AdminForms from '../components/AdminForms';
import AdminFooter from '../components/AdminFooter';
import './styles/AdminAddFlights.sass';

const AdminAddFlights = () => {
  return (
    <>
      <AdminHeader headerTitle="Creación de Vuelos" />

      <div className="MainView">
        <AdminSidebar>
          <AdminSidebarButton icon="add_circle_outline" action="Crear Vuelos" />
          <AdminSidebarButton icon="create" action="Editar Vuelos" />
        </AdminSidebar>

        <AdminForms>
          <button
            onClick={() => {
              window.alert('lorem ipsum');
            }}
            className="Button__Create"
            type="button"
          >
            CREAR VUELO
          </button>
        </AdminForms>
      </div>

      <AdminFooter />
    </>
  );
};

export default AdminAddFlights;
