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

