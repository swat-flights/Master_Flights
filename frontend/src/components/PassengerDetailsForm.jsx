import React from 'react';
import AdminInput from './AdminInput';

import "./styles/PassengerDetailsForm.sass";

const PassengerDetailsForm = () => {
  return (
    <div className="passengerCard">
      <h1>Detalles de Pasajero</h1>
      <h3>Pasajero 1</h3>
      <form action="" className="passengerCard__form">
        <AdminInput
          title="NOMBRES"
          type="text"
          id="name"
          placeHolder="Nombres"
        />
        <AdminInput
          title="APELLIDOS"
          type="text"
          id="lastname"
          placeHolder="Apellidos"
        />
        <AdminInput
          title="PAIS DE RESIDENCIA"
          type="select"
          id="countryResidency"
          placeHolder="Pais"
          menuOptions={['Colombia', 'Mexico', 'USA']}
        />
        <AdminInput
          title="CONTACTO"
          type="text"
          id="contact"
          placeHolder="Tlf o Cel"
        />
        <AdminInput
          title="IDENTIFICACION"
          type="select"
          id="document"
          placeHolder="Document"
          menuOptions={['Cedula Ciudadania', 'Cedula Extranjeria', 'Pasaporte']}
        />
        <AdminInput
          title="DOCUMENTO"
          type="text"
          id="idDocument"
          placeHolder="# Documento"
        />
      </form>
    </div>
  );
};

export default PassengerDetailsForm;
