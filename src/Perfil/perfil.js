import React from 'react';
import { 
  FaUser, FaMapMarkerAlt, FaPhone, FaEnvelope, 
  FaCalendar, FaFlag, FaHeartbeat, FaHome, 
  FaPencilAlt, FaSync
} from 'react-icons/fa';
import './perfil.css';

const TarjetaPerfil = () => {
  return (
    <div className="contenedor-perfil">
      <div className="tarjeta">
        <div className="tarjeta-encabezado">
          <div className="contenido-encabezado">
            <h2 className="titulo">Perfil Personal</h2>
            <button className="boton-actualizar">
              <FaSync className="icono-girar" />
              Actualizar Datos
            </button>
          </div>
          <div className="contenedor-avatar">
            <div className="avatar">
              <FaUser className="icono-avatar rebotar" />
            </div>
          </div>
        </div>
        
        <div className="tarjeta-contenido">
          <div className="cuadricula-perfil">
            <div className="seccion-perfil">
              <h3 className="titulo-seccion">Datos Personales</h3>
              
              <div className="grupo-info">
                <div className="item-info">
                  <FaUser className="icono pulsar" />
                  <div className="contenido-info">
                    <p className="etiqueta-info">Nombre Completo</p>
                    <p className="valor-info">Sergio Alexander Mendoza Choque</p>
                  </div>
                </div>
                
                <div className="item-info">
                  <FaCalendar className="icono pulsar" />
                  <div className="contenido-info">
                    <p className="etiqueta-info">Fecha de Nacimiento</p>
                    <p className="valor-info">23/10/2004</p>
                  </div>
                </div>
                
                <div className="item-info">
                  <FaFlag className="icono pulsar" />
                  <div className="contenido-info">
                    <p className="etiqueta-info">Nacionalidad</p>
                    <p className="valor-info">Boliviana</p>
                  </div>
                </div>
                
                <div className="item-info">
                  <FaHeartbeat className="icono pulsar" />
                  <div className="contenido-info">
                    <p className="etiqueta-info">Tipo de Sangre</p>
                    <p className="valor-info">O RH+</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="seccion-perfil">
              <h3 className="titulo-seccion">Información de Contacto</h3>
              
              <div className="grupo-info">
                <div className="item-info">
                  <FaHome className="icono flotar" />
                  <div className="contenido-info">
                    <p className="etiqueta-info">Dirección</p>
                    <p className="valor-info">Villa Nuevo Potosí Villa Antofagasta 30</p>
                  </div>
                </div>
                
                <div className="item-info">
                  <FaPhone className="icono flotar" />
                  <div className="contenido-info">
                    <p className="etiqueta-info">Teléfono</p>
                    <p className="valor-info">77790511</p>
                  </div>
                </div>
                
                <div className="item-info">
                  <FaEnvelope className="icono flotar" />
                  <div className="contenido-info">
                    <p className="etiqueta-info">Correo Institucional</p>
                    <p className="valor-info">sergio.mendoza.c@ucb.edu</p>
                  </div>
                </div>
                
                <div className="item-info">
                  <FaMapMarkerAlt className="icono flotar" />
                  <div className="contenido-info">
                    <p className="etiqueta-info">Ciudad</p>
                    <p className="valor-info">La Paz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <button className="boton-editar">
            <FaPencilAlt className="icono-agitar" />
            Editar Perfil
          </button>
        </div>
      </div>
    </div>
  );
};

export default TarjetaPerfil;