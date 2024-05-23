import React from "react";
import { Routes, Route, NavLink, BrowserRouter, Navigate } from "react-router-dom";
import Inicio from "../components/Inicio";
import Contacto from "../components/Contacto";
import Articulos from "../components/Articulos";
import Error from "../components/Error";
import Persona from "../components/Persona";
import PaneldeControl from "../components/PaneldeControl";
import InicioComponent from "../components/panel/InicioComponent";
import GestionComponent from "../components/panel/GestionComponent";
import CrearComponent from "../components/panel/CrearComponent";
import AcercaComponent from "../components/panel/AcercaComponent";


const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <h1>Cabecera</h1>
      <hr />
      <nav>
        <ul>
          <li>
            <NavLink
              to="/inicio"
              className={({ isActive }) => (isActive ? "resaltado" : "")}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) => (isActive ? "resaltado" : "")}
            >
              Contacto
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/articulos"
              className={({ isActive }) => (isActive ? "resaltado" : "")}
            >
              Articulos
            </NavLink>
          </li>
          <li>
            <NavLink
            to="/panel"
            className={({isActive}) => (isActive ? "resaltado" : "")}
            >
              Panel de control
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <section className="contenido-principal">
        {/*Cargar componentes*/}
        {/*Aqui se carga el componente que coincide con el path*/}
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/inicio" element={<Inicio />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/articulos" element={<Articulos />}></Route>
          <Route
            path={"/persona/:nombre/:apellido"}
            element={<Persona />}
          ></Route>
          <Route path={"/persona/:nombre"} element={<Persona />}></Route>
          <Route path={"/persona/:apellido"} element={<Persona />}></Route>
          <Route path={"/persona"} element={<Persona />}></Route>
          <Route path={"/redirigir"} element={<Navigate to="/persona/gatito/espacial"/>}></Route>
          <Route path={"/panel"} element={<PaneldeControl/>}>
            <Route path="inicio/*" element={<InicioComponent/>}/>
            <Route path="gestion-usuario/*" element={<GestionComponent/>}/>
            <Route path="crear-articulos/*" element={<CrearComponent/>}/>
            <Route path="acerca-de/*" element={<AcercaComponent/>}/>
          </Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </section>
    </BrowserRouter> // Aca se puede establecer/definir una estructura para la pagina
  );
};

export default RouterPrincipal;
{/* <Route path={"/redirigir"} element={<Navigate to="/persona/gatito/espacial"/>}></Route> */} //Redireccion usando Navigate dentro de react
