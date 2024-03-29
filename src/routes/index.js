import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

//Pages
import RegistarUtilizador from "../pages/RegistarUtilizador";
import Login from "../pages/Login";
import Conta from "../pages/Conta";
import Home from "../pages/Home";
import Filme from "../pages/Filme";
import Favoritos from "../pages/Favoritos";

import './Routes.css'

//Hoolk
import useAuth from "../hoolk/useAuth";


const RoutesApp = () => {
    const { user, loadingUser } = useAuth();

    if (loadingUser) {
      return <p>A carregar ...</p>;
    }
  return (
    <div className="container-routesApp">
      <Routes>
        <Route 
          path="/" 
          element={<Login />} 
          className={
            window.innerWidth <= 600 ? 'container-routesApp-responsive' : 'container-routesApp'
          }
        />
          
        <Route path="/registo" element={<RegistarUtilizador />} />

        <Route
          path="/home"
          element={user ? <Home /> : <Login to="/login" />}
        />

        <Route
          path="/conta"
          element={user ? <Conta /> : <Login to="/login" />}
        />
        <Route
          path="/filme/:id"
          element={user ? <Filme /> : <Login to="/login" />}
        />

        <Route 
          path="/favoritos"
          element={user ? <Favoritos /> : <Login to="/login" />}
        />
      </Routes>
    </div>
  )
}

export default RoutesApp