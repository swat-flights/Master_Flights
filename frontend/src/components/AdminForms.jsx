import React from 'react';
import AdminInput from './AdminInput';
import AdminScheduleButton from './AdminScheduleButton';
import AdminSectionTitle from './AdminSectionTitle';
import AdminSubmitInput from './AdminEditFlightsButton';
import './styles/AdminForms.sass';

const AdminForms = () => {
  return (
    <form action="" className="AdminForms">
      <div className="AdminForms__Item">
        <AdminSectionTitle title="Información de Aerolinea" />
        <AdminInput
          title="AEROLINEA"
          type="text"
          id="airline"
          name="arelinea-info"
          placeHolder="Nombre"
        />
        <AdminInput
          title="NÚMERO DE VUELO"
          id="flightNumber"
          name="arelinea-info"
          placeHolder="#"
        />
      </div>

      <div className="AdminForms__Item">
        <AdminSectionTitle title="Trayecto de Vuelo" />
        <AdminInput
          title="CIUDAD ORIGEN"
          id="cityStart"
          name="trayecto-info"
          placeHolder="Ciudad..."
        />
        <AdminInput
          title="CIUDAD DESTINO"
          id="cityEnd"
          name="trayecto-info"
          placeHolder="Ciudad..."
        />
        <AdminInput
          title="PRECIO"
          type="number"
          id="flightPrice"
          name="trayecto-info"
          placeHolder="$ DLS"
        />
        <AdminInput
          title="DURACIÓN"
          type="time"
          id="flightDuration"
          name="trayecto-info"
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
          <AdminInput
            title="HORA"
            type="time"
            id="departure"
            name="hora"
            value="12:00"
          />
        </div>
      </div>
      <AdminSubmitInput action="CREAR VUELO" />
    </form>
  );
};

export default AdminForms;
