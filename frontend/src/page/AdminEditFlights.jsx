import React from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import AdminSidebarButton from '../components/AdminSidebarButton';
import AdminForms from '../components/AdminForms';
import AdminFooter from '../components/AdminFooter';
import './styles/AdminEditFlights.sass';

const AdminEditFlights = () => {
  return (
    <>
      <AdminHeader headerTitle="Edición de Vuelos" />

      <div className="MainView">
        <AdminSidebar>
          <AdminSidebarButton action="Crear Vuelos" />
          <AdminSidebarButton action="Editar Vuelos" />
        </AdminSidebar>

        <AdminForms>
          <div className="Forms--edit__button">
            <button className="Button" type="button">
              CREAR VUELO
            </button>
            <button className="Button" type="button">
              CANCELAR
            </button>
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
