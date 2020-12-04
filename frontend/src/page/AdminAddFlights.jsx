import React from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSidebarButton from '../components/AdminSidebarButton';
import AdminSidebar from '../components/AdminSidebar';
import AdminForms from '../components/AdminForms';
import SubmitButton from '../components/AdminSubmitButton';
import AdminFooter from '../components/AdminFooter';

import './styles/AdminAddFlights.sass';

const AdminAddFlights = () => {
  return (
    <>
      <AdminHeader headerTitle="Creación de Vuelos" />

      <main className="MainView">
        <AdminSidebar>
          <AdminSidebarButton
            icon="add_circle_outline"
            action="Crear Vuelos"
            route="/createFlights"
          />
          <AdminSidebarButton
            icon="create"
            action="Editar Vuelos"
            route="/editFlights"
          />
        </AdminSidebar>

        <AdminForms>
          <SubmitButton action="CREAR VUELO" type="submit" />
        </AdminForms>
      </main>

      <AdminFooter />
    </>
  );
};

export default AdminAddFlights;
