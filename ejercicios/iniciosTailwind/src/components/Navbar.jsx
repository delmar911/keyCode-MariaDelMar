import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [estaAbierto, setEstaAbierto] = useState(false);

  const menuCelular = () => {
    setEstaAbierto(!estaAbierto);
  };

  return (
    /** la clase myNav esta en index.css pero es tailwind! */
    <nav className="myNav">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">MyLogo</div>
        {/* Botones */}
        <div className="hidden space-x-4 md:flex">
          <button className="p-1 text-black transition ease-in-out bg-white border rounded hover:text-gray-200 hover:bg-black">
            Inicio
          </button>
          <button className="p-1 text-black transition ease-in-out bg-white border rounded hover:text-gray-200 hover:bg-black">
            Servicios
          </button>
          <button className="p-1 text-black transition ease-in-out bg-white border rounded hover:text-gray-200 hover:bg-black">
            Nosotros
          </button>
          <button className="p-1 text-black transition ease-in-out bg-white border rounded hover:text-gray-200 hover:bg-black">
            PQR
          </button>
          <button className="p-1 text-black transition ease-in-out bg-white border rounded hover:text-gray-200 hover:bg-black">
            Contacto
          </button>
          <button className="p-1 text-black transition ease-in-out bg-white border rounded hover:text-gray-200 hover:bg-black">
            Ubicacion
          </button>
        </div>
        {/* Usuario */}
        <div className="hidden p-2 text-2xl border md:flex rounded-2xl">
          <i class="fa-solid fa-user"></i>
        </div>
        {/* Menu hamburguesa para celular */}
        <div className="text-2xl md:hidden">
          <button onClick={menuCelular}>
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>

        {estaAbierto && (
          <div className="absolute left-0 w-full text-center bg-blue-600 md:hidden top-16">
            <button className="block w-full p-1 py-2 rounded hover:text-gray-200 ">
              Inicio
            </button>
            <button className="block w-full p-1 py-2 rounded hover:text-gray-200 ">
              Servicios
            </button>
            <button className="block w-full p-1 py-2 rounded hover:text-gray-200 ">
              Nosotros
            </button>
            <button className="block w-full p-1 py-2 rounded hover:text-gray-200 ">
              PQR
            </button>
            <button className="block w-full p-1 py-2 rounded hover:text-gray-200 ">
              Contacto
            </button>
            <button className="block w-full p-1 py-2 rounded hover:text-gray-200 ">
              Ubicacion
            </button>
          </div>
        )}
      </div>
    </nav>
  );

  
};

export default Navbar;