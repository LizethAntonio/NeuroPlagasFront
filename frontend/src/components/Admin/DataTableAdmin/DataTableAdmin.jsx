import React, { Profiler, useState } from 'react';
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import './DataTableAdmin.css'; 
import RegisterFarmer from '../Register/RegisterFarmer';
import ModifyFarmer from '../Modify/ModifyFarmer';
import DeleteFarmer from '../Delete/DeleteFarmer';
import ProfileFarmer from '../Profile/ProfileFarmer';

const DataTableAdmin = () => {
    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true
        },
        {
            name: 'Nombre',
            selector: row => row.nombre,
            sortable: true
        },
        {
            name: 'Primer apellido',
            selector: row => row.primerApellido,
            sortable: true
        },
        {
            name: 'Segundo apellido',
            selector: row => row.segundoApellido,
            sortable: true
        },
        {
            name: 'Teléfono',
            selector: row => row.telefono
        },
        {
            name: 'Correo electrónico',
            selector: row => row.correo
        },
        {
            name: 'Usuario',
            selector: row => row.usuario,
            sortable: true
        },
        {
            name: 'Contraseña',
            selector: row => '********'
        },
        {
            name: 'Acciones',
            cell: row => (
                <div className='icons-container'>
                    <FontAwesomeIcon icon={faPencilAlt} onClick={() => handleEditClick(row)} className='edit-icon' size='lg'/>
                    <FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteClick(row)} className='delete-icon' size='lg' />
                </div>
            )
        }
    ];

    const data = [
        {
            id: 1,
            nombre: 'lizeth',
            primerApellido: 'Antonio',
            segundoApellido: 'López',
            telefono: '9512488426',
            correo: 'lizeth2_intel@gmail.com',
            usuario: 'zeti',
            contrasenia: '123',
        }
    ];

    const [records, setRecords] = useState(data);
    const [showForm, setShowForm] = useState(false); //Form de register
    const [showEditForm, setShowEditForm] = useState(false); //Form de edicion
    const [showDeleteForm, setShowDeleteForm] = useState(false); //Form de eliminacion
    const [showProfileForm, setShowProfileForm] = useState(false);

    const handleFilter = (event) => {
        const newData = data.filter(row => {
            return row.nombre.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setRecords(newData);
    };

    const handleRegisterClick = () => {
        setShowForm(true);
      };
      
      const handleCancelClick = () => {
        setShowForm(false);
        setShowEditForm(false);
        setShowDeleteForm(false);
      };


      const handleEditClick = (row) => {
        setShowEditForm(true);
      };

      const handleDeleteClick = (row) => {
        setShowDeleteForm(true);
      };


    return (
        <div className='responsive-table'>
          <DataTable 
            title="Agricultores"
            columns={columns}
            data={records}
            responsive={true}
            selectableRows
            fixedHeader
            pagination
            actions={
                <div className='header-table'>
                <FontAwesomeIcon icon={faSearch} className='search' />
                <input type="text" placeholder='Buscar...' onChange={handleFilter} />
                <button type="button" className='buttonAgricultor' onClick={handleRegisterClick}>Registrar agricultor</button>
              </div>
            }
          />
          {showForm && <RegisterFarmer onCancelClick={handleCancelClick} />} {/* Mostrar el formulario si showForm es true */}
          {showEditForm && <ModifyFarmer onCancelClick={handleCancelClick} />}
          {showDeleteForm && <DeleteFarmer onCancelClick={handleCancelClick} />}
          
        </div>
    );
    
};

export default DataTableAdmin;
