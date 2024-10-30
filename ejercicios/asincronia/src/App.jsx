import { useState } from "react";
import "./App.css";

function App() {

  const obtenerDatos = async () => {
    try {
      const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await respuesta.json();  // se espera la respuesta 
      console.log(data);
    } catch (error) {
      console.log('Again F en el chat');
    }
  };

  return (
    <>
      <h1>Programacion asincrona</h1>
      <caption>Promesas</caption>
      <p>En consola</p>
      <hr />
      <caption>Async / Await</caption>
      <button onClick={obtenerDatos}>
        Consumir API
      </button>
    </>
  );
}

export default App;