import React, { useState } from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import AdminSidebarButton from '../components/AdminSidebarButton';
import AdminForms from '../components/AdminForms';
import AdminFooter from '../components/AdminFooter';
import SubmitButton from '../components/AdminSubmitButton';
import './styles/AdminEditFlights.sass';

const API = 'https://rickandmortyapi.com/api/character/';

const AdminEditFlights = () => {
  const [flightData, setFlightData] = useState({});

  function getData() {
    return new Promise((resolve, reject) => {
      const result = window
        .fetch(API)
        .then(response => response.json())
        .then(data => setFlightData(data.results[0]))
        .catch(error => reject(error));
      resolve(result);
    });
  }

  window.onload = () => getData();
  console.log(flightData);
  return (
    <>
      <AdminHeader headerTitle="Edición de Vuelos" />

      <div className="MainView">
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

        <AdminForms {...flightData}>
          <div className="Forms--edit__button">
            <SubmitButton action="EDITAR VUELO" type="submit" />
            <SubmitButton action="CANCELAR" type="reset" />
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
