import React, { useState, useEffect, useRef } from 'react';
import { RiAdminFill } from "react-icons/ri";
import './Navbar.css';  // Importa el archivo de estilos CSS

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleProfile = () => {
    // Lógica para configurar perfil
    console.log('Configurar perfil');
  };

  const handleLogout = () => {
    // Lógica para cerrar sesión
    console.log('Cerrar sesión');
  };

  return (
    <div className='navbar-container'>
      <div className='menu--nav'>
        <img src="/images/tomatito.png"/> {/*Imagen*/}
        <h2>NeuroPlagas</h2>              {/*Titulo*/}
        <div className='notify' ref={menuRef}>
          <RiAdminFill className='icon' onClick={toggleMenu}/>   {/*Icono del rol*/}
          {menuVisible && (
            <div className="menu-options">
              <p onClick={handleProfile}>Configurar perfil</p>
              <p onClick={handleLogout}>Cerrar sesión</p>
            </div>
          )}
        </div>
        <div className='user-info'>
          <label>Miguel Angel Sanchez Gonzalez</label>
          <br />
          <label>19161407@gmail.com</label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
