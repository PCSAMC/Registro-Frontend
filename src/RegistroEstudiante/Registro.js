import React, { useState , useEffect} from 'react';
import { FaUser, FaCalendar, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaSchool, FaTint, FaMale, FaFemale, FaHeart, FaGlobe } from 'react-icons/fa';
import './registro.css';
import { obtenerCarreras,obtenerColegios,obtenerSexos,obtenerTiposSangre,obtenerNacionalidades } from '../Peticiones/peticiones';
const Registro = () => {
    const [estudiante, setEstudiante] = useState({
        nombre_completo: '',
        direccion:'',
        fecha_nacimiento: '',
        ci:'',
        gmail: '',
        telefono: '',
        estado_civil:'',
        carrera_id_carrera: '',
        colegios_id_col: '',
        id_tiposang: '',
        id_sexo: '',
        id_nacionalidad: '' // Nuevo campo para nacionalidad
      });
    
      const [carreras, setCarreras] = useState([]);
      const [colegios, setColegios] = useState([]);
      const [tiposSangre, setTiposSangre] = useState([]);
      const [sexos, setSexos] = useState([]);
      const [nacionalidades, setNacionalidades] = useState([]);  // Estado para nacionalidades
    
      // Función para obtener carreras
      const fetchCarreras = async () => {
        try {
          const carrerasData = await obtenerCarreras();
          setCarreras(carrerasData);
        } catch (error) {
          console.error('Error al obtener carreras:', error);
        }
      };
    
      // Función para obtener colegios
      const fetchColegios = async () => {
        try {
          const colegiosData = await obtenerColegios();
          setColegios(colegiosData);
        } catch (error) {
          console.error('Error al obtener colegios:', error);
        }
      };
    
      // Función para obtener tipos de sangre
      const fetchTiposSangre = async () => {
        try {
          const tiposSangreData = await obtenerTiposSangre();
          setTiposSangre(tiposSangreData);
        } catch (error) {
          console.error('Error al obtener tipos de sangre:', error);
        }
      };
    
      // Función para obtener sexos
      const fetchSexos = async () => {
        try {
          const sexosData = await obtenerSexos();
          setSexos(sexosData);
        } catch (error) {
          console.error('Error al obtener sexos:', error);
        }
      };
    
      // Función para obtener nacionalidades
      const fetchNacionalidades = async () => {
        try {
          const nacionalidadesData = await obtenerNacionalidades();
          setNacionalidades(nacionalidadesData);
        } catch (error) {
          console.error('Error al obtener nacionalidades:', error);
        }
      };
    
      useEffect(() => {
        fetchCarreras();
        fetchColegios();
        fetchTiposSangre();
        fetchSexos();
        fetchNacionalidades();
      }, []);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setEstudiante(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
      const estadosCiviles = [
        { id: 1, nombre: 'Soltero' },
        { id: 2, nombre: 'Casado' },
        { id: 3, nombre: 'Divorciado' },
        { id: 4, nombre: 'Viudo' },
      ];
    
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', estudiante);
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
                  value={estudiante.nombre}
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
                  value={estudiante.fecha_nacimiento}
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
                  value={estudiante.gmail}
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
                  value={estudiante.telefono}
                  onChange={handleChange}
                  placeholder="(+51) 999-999-999"
                  className="campoEntrada1212"
                />
              </div>
              <div className="grupoFormulario1111">
                <label htmlFor="telefono">
                  <FaPhone className="iconoFormulario909" /> Teléfono
                </label>
                <input
                  type="number"
                  id="ci"
                  name="carnet"
                  value={estudiante.ci}
                  onChange={handleChange}
                  placeholder="13056824"
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
                  value={estudiante.carrera_id_carrera}
                  onChange={handleChange}
                  className="campoSeleccion1414"
                >
                  <option value="">Seleccione una carrera</option>
                  {carreras.map(carrera => (
                    <option key={carrera.id_carrera} value={carrera.id_carrera}>{carrera.carrera}</option>
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
        value={estudiante.colegios_id_col}
        onChange={handleChange}
        className="campoSeleccion1414"
      >
        <option value="">Seleccione un colegio</option>
        {colegios.map(colegio => (
          <option key={colegio.id_col} value={colegio.id_col}>
            {colegio.colegio}
          </option>
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
        id="tipo_sangre_id"
        name="tipo_sangre_id"
        value={estudiante.id_tiposang}
        onChange={handleChange}
        className="campoSeleccion1414"
      >
        <option value="">Seleccione un tipo de sangre</option>
        {tiposSangre.map(tipo => (
          <option key={tipo.id_tiposang} value={tipo.id_tiposang}>
            {tipo.tipo}
          </option>
        ))}
      </select>
              </div>

              <div className="grupoFormulario1111">
                <label htmlFor="sexo">
                  <FaMale className="iconoFormulario909" />
                  <FaFemale className="iconoFormulario909" /> Sexo
                </label>
                <select
        id="sexo_id"
        name="sexo_id"
        value={estudiante.id_sexo}
        onChange={handleChange}
        className="campoSeleccion1414"
      >
        <option value="">Seleccione un sexo</option>
        {sexos.map(sexo => (
          <option key={sexo.id_sexo} value={sexo.id_sexo}>
            {sexo.sexo}
          </option>
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
                  value={estudiante.estado_civil}
                  onChange={handleChange}
                  className="campoSeleccion1414"
                >
                  <option value="">Seleccione estado civil</option>
                  {estadosCiviles.map(estado => (
                    <option key={estado.id} value={estado.nombre}>{estado.nombre}</option>
                  ))}
                </select>
              </div>

              <div className="grupoFormulario1111">
                <label htmlFor="nacionalidad">
                  <FaGlobe className="iconoFormulario909" /> Nacionalidad
                </label>
                <select
        id="nacionalidad_id"
        name="nacionalidad_id"
        value={estudiante.id_nacionalidad}
        onChange={handleChange}
        className="campoSeleccion1414"
      >
        <option value="">Seleccione una nacionalidad</option>
        {nacionalidades.map(nacionalidad => (
          <option key={nacionalidad.id_nacionalidad} value={nacionalidad.id_nacionalidad}>
            {nacionalidad.nacionalidad}
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
                  value={estudiante.direccion}
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