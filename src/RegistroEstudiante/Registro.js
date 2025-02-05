import React, { useState } from 'react';
import { FaUser, FaCalendar, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaSchool, FaTint, FaMale, FaFemale, FaHeart, FaGlobe } from 'react-icons/fa';
import './registro.css';
const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    fecha_nacimiento: '',
    gmail: '',
    telefono: '',
    estado_civil: '',
    direccion: '',
    carrera_id: '',
    colegio_id: '',
    tipo_sangre: '',
    sexo: '',
    nacionalidad: ''
  });

  

  const carreras = [
    { id: 1, nombre: 'Ingeniería de Software' },
    { id: 2, nombre: 'Medicina' },
    { id: 3, nombre: 'Arquitectura' }
  ];

  const colegios = [
    { id: 1, nombre: 'Colegio San Agustín' },
    { id: 2, nombre: 'Colegio Santa María' },
    { id: 3, nombre: 'Colegio San José' }
  ];

  const tiposSangre = [
    { id: 1, tipo: 'A+' },
    { id: 2, tipo: 'A-' },
    { id: 3, tipo: 'B+' },
    { id: 4, tipo: 'B-' },
    { id: 5, tipo: 'O+' },
    { id: 6, tipo: 'O-' },
    { id: 7, tipo: 'AB+' },
    { id: 8, tipo: 'AB-' }
  ];

  const sexos = [
    { id: 1, tipo: 'Masculino' },
    { id: 2, tipo: 'Femenino' }
  ];

  const estadosCiviles = [
    { id: 1, tipo: 'Soltero/a' },
    { id: 2, tipo: 'Casado/a' },
    { id: 3, tipo: 'Divorciado/a' },
    { id: 4, tipo: 'Viudo/a' }
  ];

  const nacionalidades = [
    { id: 1, nombre: 'Peruana' },
    { id: 2, nombre: 'Colombiana' },
    { id: 3, nombre: 'Chilena' },
    { id: 4, nombre: 'Argentina' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
  };

  return (
    <div className="registro123">
      <div className="contenedorPrincipal505">
        <div className="contenedorFormulario606">
          <h2 className="tituloSeccion707">
            Registro de Estudiantes
          </h2>

          <form onSubmit={handleSubmit} className="formularioRegistro808">
            <div className="cuadriculaFormulario1010">
              <div className="grupoFormulario1111">
                <label htmlFor="nombre">
                  <FaUser className="iconoFormulario909" /> Nombre Completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Ingrese su nombre completo"
                  className="campoEntrada1212"
                />
              </div>

              <div className="grupoFormulario1111">
                <label htmlFor="fecha_nacimiento">
                  <FaCalendar className="iconoFormulario909" /> Fecha de Nacimiento
                </label>
                <input
                  type="date"
                  id="fecha_nacimiento"
                  name="fecha_nacimiento"
                  value={formData.fecha_nacimiento}
                  onChange={handleChange}
                  className="campoEntrada1212"
                />
              </div>

              <div className="grupoFormulario1111">
                <label htmlFor="gmail">
                  <FaEnvelope className="iconoFormulario909" /> Email
                </label>
                <input
                  type="email"
                  id="gmail"
                  name="gmail"
                  value={formData.gmail}
                  onChange={handleChange}
                  placeholder="ejemplo@email.com"
                  className="campoEntrada1212"
                />
              </div>

              <div className="grupoFormulario1111">
                <label htmlFor="telefono">
                  <FaPhone className="iconoFormulario909" /> Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="(+51) 999-999-999"
                  className="campoEntrada1212"
                />
              </div>
              <div className="grupoFormulario1111">
                <label htmlFor="carrera_id">
                  <FaGraduationCap className="iconoFormulario909" /> Carrera
                </label>
                <select
                  id="carrera_id"
                  name="carrera_id"
                  value={formData.carrera_id}
                  onChange={handleChange}
                  className="campoSeleccion1414"
                >
                  <option value="">Seleccione una carrera</option>
                  {carreras.map(carrera => (
                    <option key={carrera.id} value={carrera.id}>{carrera.nombre}</option>
                  ))}
                </select>
              </div>
              <div className="grupoFormulario1111">
                <label htmlFor="colegio_id">
                  <FaSchool className="iconoFormulario909" /> Colegio de Procedencia
                </label>
                <select
                  id="colegio_id"
                  name="colegio_id"
                  value={formData.colegio_id}
                  onChange={handleChange}
                  className="campoSeleccion1414"
                >
                  <option value="">Seleccione un colegio</option>
                  {colegios.map(colegio => (
                    <option key={colegio.id} value={colegio.id}>{colegio.nombre}</option>
                  ))}
                </select>
              </div>
            
              
            </div>
          
        

            <div className="cuadriculaFormulario1010">
              <div className="grupoFormulario1111">
                <label htmlFor="tipo_sangre">
                  <FaTint className="iconoFormulario909" /> Tipo de Sangre
                </label>
                <select
                  id="tipo_sangre"
                  name="tipo_sangre"
                  value={formData.tipo_sangre}
                  onChange={handleChange}
                  className="campoSeleccion1414"
                >
                  <option value="">Seleccione tipo de sangre</option>
                  {tiposSangre.map(tipo => (
                    <option key={tipo.id} value={tipo.tipo}>{tipo.tipo}</option>
                  ))}
                </select>
              </div>

              <div className="grupoFormulario1111">
                <label htmlFor="sexo">
                  <FaMale className="iconoFormulario909" />
                  <FaFemale className="iconoFormulario909" /> Sexo
                </label>
                <select
                  id="sexo"
                  name="sexo"
                  value={formData.sexo}
                  onChange={handleChange}
                  className="campoSeleccion1414"
                >
                  <option value="">Seleccione sexo</option>
                  {sexos.map(sexo => (
                    <option key={sexo.id} value={sexo.id}>{sexo.tipo}</option>
                  ))}
                </select>
              </div>

              <div className="grupoFormulario1111">
                <label htmlFor="estado_civil">
                  <FaHeart className="iconoFormulario909" /> Estado Civil
                </label>
                <select
                  id="estado_civil"
                  name="estado_civil"
                  value={formData.estado_civil}
                  onChange={handleChange}
                  className="campoSeleccion1414"
                >
                  <option value="">Seleccione estado civil</option>
                  {estadosCiviles.map(estado => (
                    <option key={estado.id} value={estado.tipo}>{estado.tipo}</option>
                  ))}
                </select>
              </div>

              <div className="grupoFormulario1111">
                <label htmlFor="nacionalidad">
                  <FaGlobe className="iconoFormulario909" /> Nacionalidad
                </label>
                <select
                  id="nacionalidad"
                  name="nacionalidad"
                  value={formData.nacionalidad}
                  onChange={handleChange}
                  className="campoSeleccion1414"
                >
                  <option value="">Seleccione nacionalidad</option>
                  {nacionalidades.map(nacionalidad => (
                    <option key={nacionalidad.id} value={nacionalidad.id}>
                      {nacionalidad.nombre}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grupoFormularioCompleto1313">
                <label htmlFor="direccion">
                  <FaMapMarkerAlt className="iconoFormulario909" /> Dirección
                </label>
                <input
                  type="text"
                  id="direccion"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                  placeholder="Ingrese su dirección completa"
                  className="campoEntrada1212"
                />
              </div>

            <div className="contenedorBotones1515">
              <button type="submit" className="botonRegistro1616">
                Registrar Estudiante
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  
  );
};

export default Registro;