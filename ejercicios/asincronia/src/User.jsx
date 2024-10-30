import { useState, useEffect } from "react";

const User = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);

  const obtenerUsuarios = async () => {
    try {
      const respuesta = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await respuesta.json(); //se espera la respuesta
      console.log(respuesta);
      console.log(data);
      setUsuarios(data);
      setCargando(false);
    } catch (error) {
      setCargando(false);
      console.error("Hubo un error");
    }
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  if (cargando) {
    return <p>Cargando...</p>;
  } else {
    return (
      <div>
        <h1>Lista de usuarios</h1>
        <ul>
          {usuarios.map((usuario) => (
            <li key={usuario.id}>{usuario.name}</li> // Muestra el nombre de cada usuario
          ))}
        </ul>
      </div>
    );
  }
};

export default User;
