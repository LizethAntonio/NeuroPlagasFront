import React, { useState, useEffect, useRef } from 'react';
import { RiAdminFill } from "react-icons/ri";
import './NavbarAdmin.css';
import ProfileFarmer from '../Profile/ProfileFarmer';

const NavbarAdmin = ({onConfigureProfileClick}) => {
  const [showProfileForm, setShowProfileForm] = useState(false);
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

  const handleLogout = () => {
    localStorage.setItem('token', ''); // Establece el token como una cadena vacía
    window.location.href = '/login'; // Redirige al usuario a la página de inicio de sesión
  };

  const handleConfigureProfileClick = () => {
    setShowProfileForm(true);
  };

  const handleProfileFormCancel = () => {
    setShowProfileForm(false);
  };

  return (
    <div className='navbar-container'>
      <div className='menu--nav'>
        <img src="/images/tomatito.png"/> {/*Imagen*/}
        <h2>NeuroPlagas</h2>              {/*Titulo*/}
        <div className='notify' ref={menuRef}>
            <RiAdminFill className='icon' onClick={toggleMenu}/>   
            {menuVisible && (
              <div className="menu-options">
                <p onClick={onConfigureProfileClick}>Configurar perfil</p> {/* Llama a la función desde las props */}
                <p onClick={handleLogout}>Cerrar sesión</p>
              </div>
            )}
        </div>
        <div className='user-info'>
          <label>Miguel Sanchez</label>
          <br />
          <label>1916@gmail.com</label>
        </div>
      </div>
      
      {showProfileForm && <ProfileFarmer onCancelClick={handleProfileFormCancel} />} {/* Mostrar el formulario si showProfileForm es true */}
    </div>
  );
};

export default NavbarAdmin;
