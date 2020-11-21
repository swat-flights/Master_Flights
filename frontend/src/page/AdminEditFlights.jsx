import React from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import AdminSidebarButton from '../components/AdminSidebarButton';
import AdminForms from '../components/AdminForms';
import AdminFooter from '../components/AdminFooter';
import EditFlightsButton from '../components/AdminEditFlightsButton';
import './styles/AdminEditFlights.sass';

const AdminEditFlights = () => {
  return (
    <>
      <AdminHeader headerTitle="Edición de Vuelos" />

      <div className="MainView">
        <AdminSidebar>
          <AdminSidebarButton icon="add_circle_outline" action="Crear Vuelos" />
          <AdminSidebarButton icon="create" action="Editar Vuelos" />
        </AdminSidebar>

        <AdminForms>
          <div className="Forms--edit__button">
            <EditFlightsButton action="CREAR VUELO" />
            <EditFlightsButton action="CANCELAR" />
          </div>
          <a className="EliminarButton" href="/">
            Eliminar Vuelo
          </a>
        </AdminForms>
      </div>

      <AdminFooter />
    </>
  );
};

export default AdminEditFlights;
