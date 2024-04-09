import React from 'react';
import './HomeAdmin.css';
import Sidebar from './Sidebar section/Sidebar';
import Navbar from './Navbar section/Navbar';
import DataTables from './Table/DataTables';

const HomeAdmin = () => {
  const handleLogout = () => {
    localStorage.setItem('token', ''); // Establece el token como una cadena vacía
    window.location.href = '/login'; // Redirige al usuario a la página de inicio de sesión
  };

  return (
    <div>
      <Navbar />
      <div className='dashboard'>
          <Sidebar />
        <div className='table-container'>
          <div className='space'>
          <h2>Bienvenido <span className='rol'>administrador</span></h2>
          </div>
          <DataTables/>
      </div>
      </div>
    </div>

  );
};

export default HomeAdmin;