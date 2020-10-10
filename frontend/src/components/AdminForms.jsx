import React from 'react';
import AdminInput from './AdminInput';
import AdminScheduleButton from './AdminScheduleButton';
import AdminSectionTitle from './AdminSectionTitle';
import './styles/AdminForms.sass';

const AdminForms = ({ children }) => {
  return (
    <div className="Forms">
      <div className="Forms__Container">
        <div className="Forms__Item">
          <AdminSectionTitle title="Información de Aerolinea" />
          <div className="Item__Data">
            <AdminInput title="AEROLINEA" placeHolder="..." />
            <AdminInput title="NÚMERO DE VUELO" placeHolder="..." />
          </div>
        </div>

        <div className="Forms__Item">
          <AdminSectionTitle title="Trayecto de Vuelo" />
          <div className="Item__Data">
            <AdminInput title="CIUDAD ORIGEN" placeHolder="..." />
            <AdminInput title="CIUDAD DESTINO" placeHolder="..." />
            <AdminInput title="PRECIO" placeHolder="..." />
            <AdminInput title="DURACIÓN" placeHolder="..." />
          </div>
        </div>

        <div className="Forms__Item">
          <AdminSectionTitle title="Horario de Vuelo" />
          <p> Días </p>
          <ul>
            <AdminScheduleButton day="Lunes" />
            <AdminScheduleButton day="Martes" />
            <AdminScheduleButton day="Miércoles" />
            <AdminScheduleButton day="Jueves" />
            <AdminScheduleButton day="Viernes" />
            <AdminScheduleButton day="Sábado" />
            <AdminScheduleButton day="Domingo" />
          </ul>
          <div className="Forms__TimeInput">
            <p>HORA</p>
            <input placeholder="..." />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AdminForms;
