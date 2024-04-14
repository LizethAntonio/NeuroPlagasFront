import React, { useState } from 'react';
import './DeleteFarmer.css';

const DeleteFarmer = ({ onCancelClick }) => {
  

  return (
    <div className="farmer-form">
      <div className='container-delete'>
      <h4>Eliminar agricultor</h4>
        <label>¿Está seguro que desea eliminar este agricultor?</label>
      </div>
      <div className='button-container'>
        <button className='button-delete' type="submit" >Eliminar</button>
        <button className='button-delete-cancel' onClick={onCancelClick}>Cancelar</button>
      </div>
    </div>
  );
};

export default DeleteFarmer;
