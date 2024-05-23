import React from "react";
//forma nueva. el "createRoot" remplaza el "ReactDOM"
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
//forma nueva. En lugar de usar el ReactDOM creamos una variable que se llama root y le  pasamos la etiqueta de donde cargamos la aplicacion
const container = document.getElementById("root"); //Seleccionamos la etiqueta de donde vamos a cargar la raiz
const root = createRoot(container); // RAiz de la aplicacion. CreateRoot para indicar que es la etiqueta donde se va cargar todo

root.render(<App/>) // Render del componente principal. Dentro de la etiqueta que actua como raiz de la aplicacion

// Forma "vieja" de renderizar nuestra aplicacion
//import ReactDOM from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );
