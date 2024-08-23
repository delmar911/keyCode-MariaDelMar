import { useState } from "react";
import { SelectList } from "./SelectList";
import { useFetch } from "../hooks/useFetch";

export const Selects = () => {
  //const TOKEN = "1ed14169-444b-4903-a3b2-6d8631517331";

  const [departamento, setDepartamento] = useState("");
  const [municipio, setMuncipio] = useState("");

  console.log("Departamento ID", departamento);
  console.log("Municipio ID", municipio);
  const urlCiudad = `https://api-colombia.com/api/v1/City/${municipio}`;

  const { data } = useFetch(urlCiudad);
  console.log(data);
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
        }}
      />
      <div className="label-select">
        <label htmlFor="ciudad-description">Descripción de la Ciudad</label>
        <textarea
          type="text"
          id="ciudad-description"
          //   manejadorcambio={(event) => {
          //     setMuncipio(event.target.value);
          //   }}

          value={
            data
              ? `${data.description || ""}\n 
              Población:${data.population || ""}\n
              Código postal: ${data.postalCode || ""} `
              : "No se ha elegido una ciudad"
          }
          readOnly
          className="text-description"
        />
      </div>
    </>
  );
};
