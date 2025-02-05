import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:4000', 
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const iniciarSesion = async (usuario, password1) => {
  try {
    const response = await apiClient.post('/usuario/login', {
      usuario,
      password1,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message; 
  }
};

export const obtenerCarreras = async () => {
    try {
      const response = await apiClient.get(`/carrera/obtenerCarrera`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener carreras:', error);
      throw error;
    }
  };
  
  
  export const obtenerColegios = async () => {
    try {
      const response = await apiClient.get(`/colegio/obtenerColegio`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener colegios:', error);
      throw error;
    }
  };
  
  
  export const obtenerTiposSangre = async () => {
    try {
      const response = await apiClient.get(`/tipo_sangre/obtenerTodosTiposSangre`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener tipos de sangre:', error);
      throw error;
    }
  };
  
  
  export const obtenerSexos = async () => {
    try {
      const response = await apiClient.get(`/sexo/obtenerTodosSexos`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener sexos:', error);
      throw error;
    }
  };
  export const obtenerNacionalidades = async () => {
    try {
      const response = await apiClient.get(`/nacionalidad/obtenerTodasNacionalidades`);
      return response.data; 
    } catch (error) {
      console.error('Error al obtener nacionalidades:', error);
      throw error; 
    }
  };
  export const crearEstudiante = async (estudiante) => {
    try {
      const response = await axios.post(estudiante);
      
      return response.data; 
    } catch (error) {
      console.error('Error al crear el estudiante:', error);
      return { success: false, mensaje: 'Error al enviar la solicitud' };
    }
  };