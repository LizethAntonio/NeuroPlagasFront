import React from 'react';
import { FaBell, FaUser } from 'react-icons/fa';
import './Navbar.css';  // Importa el archivo de estilos CSS

/*Este componente recibirá la cantidad de notificaciones (count) como una prop y mostrará ese número en un elemento 
<span> con la clase notification-badge.
const NotificationBadge = ({ count }) => {
  return (
    <span className="notification-badge">{count}</span>
  );
};

export default NotificationBadge;
*/

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='menu--nav'>
        <img src="/images/tomatito.png"/>
        <h2>NeuroPlagas</h2>
          <div className='notify'>
          <FaBell className='icon'/>
          </div>
          <div>
          </div>
      </div>
    </div>
  );
  
};

export default Navbar;