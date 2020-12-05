import React from 'react';
import AdminInput from './AdminInput';
import AdminScheduleButton from './AdminScheduleButton';
import AdminSectionTitle from './AdminSectionTitle';
import './styles/AdminForms.sass';

const AdminForms = props => {
  const { children, name, id } = props;
  return (
    <form action="" className="AdminForms">
      <section className="AdminForms__Item">
        <AdminSectionTitle title="Información de Aerolinea" />
        <AdminInput
          title="AEROLINEA"
          type="text"
          id="airline"
          placeHolder="Nombre"
          defaultValue={name}
        />
        <AdminInput
          title="NÚMERO DE VUELO"
          id="flightNumber"
          placeHolder="#"
          defaultValue={name}
        />
      </section>

      <section className="AdminForms__Item">
        <AdminSectionTitle title="Trayecto de Vuelo" />
        <AdminInput
          title="CIUDAD ORIGEN"
          id="cityStart"
          placeHolder="Ciudad..."
          defaultValue={name}
        />
        <AdminInput
          title="CIUDAD DESTINO"
          id="cityEnd"
          placeHolder="Ciudad..."
          defaultValue={name}
        />
        <AdminInput
          title="PRECIO"
          type="number"
          id="flightPrice"
          placeHolder="$ DLS"
          defaultValue={id}
        />
        <AdminInput
          title="DURACIÓN"
          type="time"
          id="flightDuration"
          defaultValue="12:00"
        />
      </section>

      <section className="AdminForms__Item">
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
            defaultValue="12:00"
          />
        </div>
      </section>
      {children}
    </form>
  );
};

export default AdminForms;
