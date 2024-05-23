import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <h1>Error 404</h1>
      <p>Error!!!
        Esta pagina no existe.
      </p>
      <Link to="/inicio">Volver al inicio!</Link>
    </div>
  )
}

export default Error
