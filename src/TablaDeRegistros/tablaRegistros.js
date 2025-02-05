import React from 'react';
import { Link } from 'react-router-dom';
import './TablaRegistros.css'; // Asegúrate de que la hoja de estilo esté importada
import { FaEye, FaTrashAlt } from 'react-icons/fa'; // Importamos los iconos de React Icons
const estudiantes = [
  { nombre: 'Juan Pérez', correo: 'juan.perez@example.com', carrera: 'Ciencias Políticas', foto: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' },
  { nombre: 'Ana Gómez', correo: 'ana.gomez@example.com', carrera: 'Relaciones Internacionales', foto: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' },
  { nombre: 'Carlos Díaz', correo: 'carlos.diaz@example.com', carrera: 'Ciencias Políticas', foto: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' },
  // Agrega más estudiantes según lo necesites
];


const TablaEstudiantes = () => {
  return (
    
<div className="contenedor-tabla">
  <table className="tabla-personalizada">
    <thead className="cabecera-tabla">
      <tr>
        <th className="celda-tabla">Foto</th>
        <th className="celda-tabla">Nombre</th>
        <th className="celda-tabla">Correo</th>
        <th className="celda-tabla">Carrera</th>
        <th className="celda-tabla">Acciones</th> {/* Nueva columna para las acciones */}
      </tr>
    </thead>
    <tbody className="cuerpo-tabla">
      {estudiantes.map((estudiante, index) => (
        <tr key={index} className="fila-tabla">
          <td className="celda-tabla">
            <img src={estudiante.foto} alt={estudiante.nombre} className="foto-usuario" />
          </td>
          <td className="celda-tabla">{estudiante.nombre}</td>
          <td className="celda-tabla">{estudiante.correo}</td>
          <td className="celda-tabla">{estudiante.carrera}</td>
          <td className="celda-tabla acciones">
            {/* Botones con iconos de React Icons */}
            <Link to={`/perfil`} className="boton-accion ver-perfil">
                  <FaEye /> Ver Perfil
                </Link>
            <button className="boton-accion eliminar">
              <FaTrashAlt /> Eliminar
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
};

export default TablaEstudiantes;
