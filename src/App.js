import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Encabezado/encabezado'; // Asegúrate de que este sea el componente del encabezado
import InicioSesion from './InicioSesion/InicioSesion';
import Registro from './RegistroEstudiante/Registro';
import TablaEstudiantes from './TablaDeRegistros/tablaRegistros';
import TarjetaPerfil from './Perfil/perfil';
function Layout() {
  const location = useLocation();  // Hook para obtener la ubicación actual

  return (
    <>
      {/* Mostrar Header solo si no estamos en la ruta de inicio de sesión */}
      {location.pathname !== '/' && <Header />}
      
      <Routes>
        <Route path="/" element={<InicioSesion />} />
        <Route path="/pantallaRegistrar" element={<Registro />} />
        <Route path="/tabla" element={<TablaEstudiantes />} />
        <Route path="/perfil" element={<TarjetaPerfil />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
