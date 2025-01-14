import React from "react";
import { useNavigate, useParams } from "react-router";

function Persona() {
  //Valores por defecto en caracteres opcionales
  //let { nombre = "Gatito", apellido = "Espacial" } = useParams();

  // Parametros opcionales
  const { nombre, apellido } = useParams();
  const navegar = useNavigate();

  const enviar = (e) => {
    e.preventDefault();
    let nombre = e.target.nombre.value;
    let apellido = e.target.apellido.value;
    let url = `/persona/${nombre}/${apellido}`;

    if (nombre.length <= 0 && apellido.length <= 0) {
      navegar("/inicio");
    } else if (nombre === "contacto") {
      navegar("/contacto");
    } else {
      navegar(url);
    }
  };
  return (
    <div>
      {!nombre && <h1>No hay ninguna persona que mostrar</h1>}
      {nombre && (
        <h1>
          Pagina P de:{nombre} {apellido}
        </h1>
      )}
      <p>Pagina Persona</p>

      <form onSubmit={enviar}>
        <input type="text" name="nombre"></input>
        <input type="text" name="apellido"></input>
        <input type="submit" name="enviar" value="enviar"></input>
      </form>
    </div>
  );
}

export default Persona;
