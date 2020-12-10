import React from 'react';
import AdminInput from './AdminInput';

import './styles/PaymentForm.sass';

const PaymentForm = () => {
  return (
    <div className="paymentCard">
      <h1>Metodo de Pago</h1>
      <form action="" className="paymentCard__form">
        <AdminInput
          title="BANCO"
          type="select"
          id="bank"
          placeHolder="Banco"
          menuOptions={['Banco1', 'Banco2', 'Banco3']}
        />
        <AdminInput
          title="Numero de Tarjeta"
          type="text"
          id="cardNumber"
          placeHolder="XXXX XXXX XXXX XXXX"
        />
        <AdminInput
          title="TITULAR TARJETA"
          type="text"
          id="cardOwner"
          placeHolder="Nombre y Apellido"
        />
        <AdminInput
          title="VENCIMIENTO"
          type="text"
          id="expiration"
          placeHolder="mm/aa"
        />
        <AdminInput
          title="COD. VERF."
          type="text"
          id="verificationCode"
          placeHolder="XXX"
        />
        <AdminInput
          title="DOCUMENTO TITULAR"
          type="text"
          id="OwnerDocument"
          placeHolder="# Document"
        />
      </form>
    </div>
  );
};

export default PaymentForm;
