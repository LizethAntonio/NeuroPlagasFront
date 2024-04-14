import React, { useState } from 'react';
import './ModifyFarmer.css';

const ModifyFarmer = ({ rowData, onCancelClick }) => {
  const [values, setValues] = useState({
    nombre: "",
    primerApellido: "",
    segundoApellido: "",
    telefono: "",
    correo: "",
    nombreUsuario: "",
    contrasenia:""
  });

  const handdleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSaveChanges = () => {
    // Lógica para guardar los cambios realizados en el formulario
    console.log("Valores modificados:", values);
  };


  return (
    <div className="farmer-form">
      <div className='centrar'>
      <h4>Editar agricultor</h4>
      <h5>*Campos requeridos</h5>
      <label className='label-datos'>Edita sus datos personales</label>
      <div className="form-section">
        <div className="column">
          <label>Nombre*</label>
          <input
            className='inputs'
            type="text"
            required
            name="nombre"
            placeholder="Nombre"
            onChange={handdleInputChange}
          />
        </div>
        <div className="column">
          <label>Teléfono*</label>
          <input
            className='inputs'
            type="text"
            required
            name="telefono"
            placeholder="Teléfono"
            onChange={handdleInputChange}
          />
        </div>
        <div className="column">
          <label>Primer apellido*</label>
          <input
            className='inputs'
            type="text"
            required
            name="primerApellido"
            placeholder="Primer apellido"
            onChange={handdleInputChange}
          />
        </div>
      </div>
      <div className="form-section">
        <div className="column">
          <label>Correo*</label>
          <input
            className='inputs'
            type="text"
            required
            name="correo"
            placeholder="Correo"
            onChange={handdleInputChange}
          />
        </div>
        <div className="column">
          <label>Segundo apellido*</label>
          <input
            className='inputs'
            type="text"
            required
            name="segundoApellido"
            placeholder="Segundo apellido"
            onChange={handdleInputChange}
          />
        </div>
        <div className="column"></div>
      </div>

      <h4>Edita sus datos de inicio de sesión</h4>
      <div className="form-section">
        <div className="column">
          <label>Nombre de usuario*</label>
          <input
            className='inputs2'
            type="text"
            required
            name="nombreUsuario"
            placeholder="Nombre de usuario"
            onChange={handdleInputChange}
          />
        </div>
        <div className="column">
          <label>Contraseña*</label>
          <input
            className='inputs2'
            type="password"
            required
            name="contrasenia"
            placeholder="Contraseña"
            onChange={handdleInputChange}
          />
        </div>
      </div>
      
      <div className='button-container'>
          <button className='button' type="submit" onClick={handleSaveChanges}>Guardar cambios</button>
          <button className='button-cancel ' onClick={onCancelClick}>Cancelar</button>
        </div>
    </div>
    </div>
  );
};

export default ModifyFarmer;
