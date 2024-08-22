import { useState } from "react";
import { SelectList } from "./SelectList";

export const Selects = () => {
  //const TOKEN = "1ed14169-444b-4903-a3b2-6d8631517331";

  const [departamento, setDepartamento] = useState("");
  const [municipio, setMuncipio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  
  console.log('Departamento ID', departamento)
  console.log('Municipio ID', municipio)

  return (
    <>
      <SelectList
        title="Departamento"
        url="https://api-colombia.com/api/v1/Department"
        manejadorcambio={(event) => {
          setDepartamento(event.target.value);
        }}
      />
      <SelectList
        title="Municipio"
        url={`https://api-colombia.com/api/v1/Department/${departamento}/cities`}
        manejadorcambio={(event) => {
          setMuncipio(event.target.value);
          setMuncipio(event.target.description);
        }}
      />
      <div className="label-select">
        <label htmlFor="ciudad-description">Descripción de la Ciudad</label>
        <input
          type="text"
          id="ciudad-description"
          value={municipio}
          readOnly
          className="text-description"
          url={`https://api-colombia.com/api/v1/City/${municipio}`}
            manejadorcambio={(event) => {
          setMuncipio(event.target.description);
        }}
        />
      </div>
      
      {/* <SelectList
        title="Ciudad"
        url={`https://api-colombia.com/api/v1/Department/${municipio}/cities`}
        manejadorcambio={(event) => {
            setCiudad(event.target.description);
        }}
      /> */}

      
    </>
  );
};
