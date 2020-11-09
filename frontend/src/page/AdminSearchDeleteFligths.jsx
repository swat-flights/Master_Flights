import React from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import AdminSidebarButton from '../components/AdminSidebarButton';
import AdminFooter from '../components/AdminFooter';
import './styles/AdminSearchDeleteFlights.sass';

const AdminSearchDeleteFligths = () => {
  return (
    <>
      <AdminHeader headerTitle="Edición de Vuelos" />

      <div className="MainView">
        <AdminSidebar>
          <AdminSidebarButton action="Crear Vuelos" />
          <AdminSidebarButton action="Editar Vuelos" />
        </AdminSidebar>

        <div className="Search">
          <div className="Search__Container">
            <h1 className="Search__Container__title">Busqueda</h1>
            <p className="Search__Container__p">
              DIGITA EL NUMERO DE VUELO AQUI
            </p>
            <div className="Search__Container__input">
              <input
                className="inputMain"
                type="text"
                placeholder="Buscar..."
              />
              <div className="input--side">
                <span className="material-icons">search</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdminFooter />
    </>
  );
};

export default AdminSearchDeleteFligths;
