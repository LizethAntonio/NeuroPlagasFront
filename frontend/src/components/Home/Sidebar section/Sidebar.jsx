import React from 'react';
import './Sidebar.css';
import { BiSolidBoltCircle } from 'react-icons/bi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeUser, faUser, faChartBar, faWarehouse, faBug, faVirus } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className='menu'>
            <div className='menu--list'>
                <a href="#" className='item'>
                    <FontAwesomeIcon icon={faHomeUser} className='icon'/> {/* Icono de trabajador */}
                    Agricultor
                </a>
                <a href="#" className='item'>
                    <FontAwesomeIcon icon={faWarehouse} className='icon'/> {/* Icono de invernadero */}
                    Invernadero
                </a>
                <a href="#" className='item'>
                    <FontAwesomeIcon icon={faUser} className='icon'/> {/* Icono de trabajador */}
                    Trabajador
                </a>
                <a href="#" className='item'>
                    <FontAwesomeIcon icon={faChartBar} className='icon'/> {/* Icono de reportes */}
                    Reporte
                </a>
                <a href="#" className='item'>
                    <FontAwesomeIcon icon={faBug} className='icon'/> {/* Icono de plagas */}
                    Plaga
                </a>
                <a href="#" className='item'>
                    <FontAwesomeIcon icon={faVirus} className='icon'/> {/* Icono de enfermedades */}
                    Enfermedad
                </a>
            </div>
        </div>
    );
};

export default Sidebar;



