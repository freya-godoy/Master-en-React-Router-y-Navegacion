import React from 'react'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'

const PaneldeControl = () => {
  return (
    <div>
      <h1>PANEL DE CONTROL</h1>
      <p>Elige una de estas opciones</p>
      <nav>
        <ul>
            <li>
                <NavLink to="/panel/inicio">Inicio</NavLink>
            </li>
            <li>
                <NavLink to="/panel/crear-articulos">Crear articulos</NavLink>
            </li>
            <li>
                <NavLink to="/panel/gestion-usuario">Gestion usuarios</NavLink>
            </li>
            <li>
                <NavLink to="/panel/acerca-de">Acerca de</NavLink>
            </li>
        </ul>
      </nav>
      {/* Componentes de sub rutas / Outlet funciona para llamar/cargar las sub rutas*/}
      <div>
      <Outlet></Outlet>
      </div>
    </div>
  )
}

export default PaneldeControl
