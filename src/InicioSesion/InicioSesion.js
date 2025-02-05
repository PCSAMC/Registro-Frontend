import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InicioSesion.css';

const InicioSesion = () => {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');


  const cuenta = {
    correo: 'sergio@gmail.com',
    contrasena: '123456'
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (correo === cuenta.correo && contrasena === cuenta.contrasena) {
      navigate('/pantallaRegistrar'); 
    } else {
      alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };

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
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>

          <h1 className='tituloFormulario'>Inicio Sesión</h1>
          
          <form className="formulario" onSubmit={handleSubmit}>
            <div className="grupoForm">
              <input 
                type="text" 
                id="correo" 
                className='campoEntrada'
                placeholder="" 
                value={correo} 
                onChange={(e) => setCorreo(e.target.value)} 
                required 
              />
              <label htmlFor="correo" className='etiquetaForm'>Correo Electrónico</label>
            </div>

            <div className="grupoForm">
              <input 
                type="password" 
                className='campoEntrada'
                id="contrasena" 
                placeholder="" 
                value={contrasena} 
                onChange={(e) => setContrasena(e.target.value)} 
                required 
              />
              <label htmlFor="contrasena" className='etiquetaForm'>Contraseña</label>
            </div>

            <button type="submit" className="botonFormulario">
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InicioSesion;
