import React from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import AdminFooter from '../components/AdminFooter';
import AdminInput from '../components/AdminInput';
import AdminScheduleButton from '../components/AdminScheduleButton';
import './styles/AdminAddFlights.sass';

const AdminAddFlights = () => {
  return (
    <>
      <AdminHeader />
      <div className="Main">
        <AdminSidebar />
        <div className="Forms">
          <div className="Forms__data">
            <h1>Información de Aerolinea</h1>
            <div className="Forms__AirlineFields">
              <AdminInput />
              <AdminInput />
            </div>
          </div>
          <div className="Forms__data">
            <h1>Trayecto de Vuelo</h1>
            <div className="Forms__JourneyFields">
              <div className="duples">
                <AdminInput />
                <AdminInput />
              </div>
              <div className="duples2">
                <AdminInput />
                <AdminInput />
              </div>
            </div>
          </div>
          <div className="Forms__data">
            <h1>Horario de Vuelo</h1>
            <p> Días </p>
            <ul>
              <AdminScheduleButton />
              <AdminScheduleButton />
              <AdminScheduleButton />
              <AdminScheduleButton />
              <AdminScheduleButton />
              <AdminScheduleButton />
              <AdminScheduleButton />
            </ul>
            <div className="Forms__TimeButton">
              <p>Lorem ipsum</p>
              <input placeholder="Lorem ipsum" />
            </div>
          </div>
          <button className="Forms__button" type="button">
            CREAR VUELO
          </button>
        </div>
      </div>
      <AdminFooter />
    </>
  );
};

export default AdminAddFlights;
