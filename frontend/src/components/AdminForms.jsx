import React from 'react';
import AdminInput from './AdminInput';
import AdminScheduleButton from './AdminScheduleButton';
import AdminSectionTitle from './AdminSectionTitle';
import './styles/AdminForms.sass';

const AdminForms = ({ children }) => {
  return (
    <form action="" className="AdminForms">
      <div className="AdminForms__Item">
        <AdminSectionTitle title="Información de Aerolinea" />
        <AdminInput
          title="AEROLINEA"
          type="text"
          id="airline"
          placeHolder="Nombre"
        />
        <AdminInput title="NÚMERO DE VUELO" id="flightNumber" placeHolder="#" />
      </div>

      <div className="AdminForms__Item">
        <AdminSectionTitle title="Trayecto de Vuelo" />
        <AdminInput
          title="CIUDAD ORIGEN"
          id="cityStart"
          placeHolder="Ciudad..."
        />
        <AdminInput
          title="CIUDAD DESTINO"
          id="cityEnd"
          placeHolder="Ciudad..."
        />
        <AdminInput
          title="PRECIO"
          type="number"
          id="flightPrice"
          placeHolder="$ DLS"
        />
        <AdminInput
          title="DURACIÓN"
          type="time"
          id="flightDuration"
          value="12:00"
        />
      </div>

      <div className="AdminForms__Item">
        <AdminSectionTitle title="Horario de Vuelo" />
        <p> Días </p>
        <ul className="days__container">
          <li>
            <AdminScheduleButton
              type="radio"
              day="Lunes"
              id="lunes"
              name="dia"
            />
          </li>
          <li>
            <AdminScheduleButton
              type="radio"
              day="Martes"
              id="martes"
              name="dia"
            />
          </li>
          <li>
            <AdminScheduleButton
              type="radio"
              day="Miércoles"
              id="miercoles"
              name="dia"
            />
          </li>
          <li>
            <AdminScheduleButton
              type="radio"
              day="Jueves"
              id="jueves"
              name="dia"
            />
          </li>
          <li>
            <AdminScheduleButton
              type="radio"
              day="Viernes"
              id="viernes"
              name="dia"
            />
          </li>
          <li>
            <AdminScheduleButton
              type="radio"
              day="Sábado"
              id="sabado"
              name="dia"
            />
          </li>
          <li>
            <AdminScheduleButton
              type="radio"
              day="Domingo"
              id="domingo"
              name="dia"
            />
          </li>
        </ul>
        <div className="AdminForms__TimeInput">
          <AdminInput title="HORA" type="time" id="departure" value="12:00" />
        </div>
      </div>
      {children}
    </form>
  );
};

export default AdminForms;
