import React, { useState } from 'react';
import './HomeAdmin.css';
import SidebarAdmin from '../SidebarAdmin/SidebarAdmin';
import NavbarAdmin from '../NavbarAdmin/NavbarAdmin';
import DataTableAdmin from '../DataTableAdmin/DataTableAdmin';
import ProfileFarmer from '../Profile/ProfileFarmer';

const HomeAdmin = () => {
  const [showProfileForm, setShowProfileForm] = useState(false);

  const handleConfigureProfileClick = () => {
    setShowProfileForm(true);
  };

  const handleProfileFormCancel = () => {
    setShowProfileForm(false);
  };


  return (
    <div>
      <NavbarAdmin onConfigureProfileClick={handleConfigureProfileClick} />
      <div className='dashboard'>
          <SidebarAdmin />
        <div className='table-container'>
          <div className='space'>
          <h2>Bienvenido <span className='rol'>administrador</span></h2>
          </div>
          <DataTableAdmin/>
        </div>
      </div>
      {showProfileForm && <ProfileFarmer onCancelClick={handleProfileFormCancel} />}
    </div>

  );
};

export default HomeAdmin;