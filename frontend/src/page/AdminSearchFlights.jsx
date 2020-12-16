import React from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import AdminSidebarButton from '../components/AdminSidebarButton';
import AdminFooter from '../components/AdminFooter';
import AdminSearchFlight from '../components/AdminSearchFlight';
// import TravelCard from '../components/TravelCard';
import './styles/AdminSearchFlights.sass';

const AdminSearchFligths = () => {
  return (
    <>
      <AdminHeader headerTitle="Edición de Vuelos" />

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

        <section className="searchSection">
          <AdminSearchFlight />
          <div className="recents">
            <h1 className="recents__title">Recientes:</h1>
            {/* <TravelCard />
            <TravelCard />
            <TravelCard /> */}
          </div>
        </section>
      </main>

      <AdminFooter />
    </>
  );
};

export default AdminSearchFligths;
