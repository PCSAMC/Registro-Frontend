import React from 'react';
import './InicioSesion.css';

const InicioSesion = () => {
  return (
    <div className="Inicio">
      {/* Sección de Imagen */}
      <div className="imagenDerecha">
        <img 
          src="/api/placeholder/800/600" 
          alt="imagen" 
          className="BienvenidaImagen"
        />
      </div>

      {/* Sección de Inicio de Sesión */}
      <div className="InicioSesion">
        <div className="cartaInicio">
          <div className="avatarPrincipal">
            <div className="avatar">
              <svg viewBox="0 0 24 24" className="user-icono" fill="white">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>

          <h1>Inicio Sesión</h1>
          
          <form className="formulario">
            <div className="grupoForm">
              <input type="text" id="correo" placeholder="" required />
              <label htmlFor="correo">Correo Electrónico</label>
            </div>

            <div className="grupoForm">
              <input type="password" id="contrasena" placeholder="" required />
              <label htmlFor="contrasena">Contraseña</label>
            </div>

            <button type="submit">
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InicioSesion;
