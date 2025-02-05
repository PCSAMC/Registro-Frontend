import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link
import './encabezado.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="UCB Erección Canónica_Variacion Reducida-34.png" alt="Logo de la Universidad" />
      </div>
      <div className="menu-items">
        <div className="menu-item">
          <Link to="/pantallaRegistrar">Registro de Estudiantes</Link>
        </div>
        <div className="menu-item">
          <Link to="/tabla">Ver Estudiantes</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
