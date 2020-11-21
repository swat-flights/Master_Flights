import React from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import AdminSidebarButton from '../components/AdminSidebarButton';
import AdminFooter from '../components/AdminFooter';
import AdminSearchFlight from '../components/AdminSearchFlight';
import TravelCard from '../components/TravelCard';
import './styles/AdminDeleteFlights.sass';

const AdminDeleteFligths = () => {
  return (
    <>
      <AdminHeader headerTitle="Edición de Vuelos" />

      <main className="MainView">
        <AdminSidebar>
          <AdminSidebarButton icon="add_circle_outline" action="Crear Vuelos" />
          <AdminSidebarButton icon="create" action="Editar Vuelos" />
        </AdminSidebar>

        <section className="searchSection">
          <AdminSearchFlight />
          <div className="searchSection__title">
            <h1>Recientes:</h1>
          </div>
          <div>
            <TravelCard />
            <TravelCard />
            <TravelCard />
          </div>
        </section>
      </main>

      <AdminFooter />
    </>
  );
};

export default AdminDeleteFligths;
