import { PaperClipIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import Añadir from "../../forms/cliente/vendedores/añadir";

export default function Vendedores(props) {
  const nombreProducto = props.nombre;
  console.log(nombreProducto, "XD");
  const [vendedores, setVendedores] = useState([
    {
      nombre: "Julian Torres",
      medida: "Toneladas",
      precio: 500,
      ubicacion: "Guadalajara Jal",
    },
    {
      nombre: "Pedro Gutierrez",
      medida: "Kilos",
      precio: 300,
      ubicacion: "Zapotlanejo Jal",
    },
    {
      nombre: "Frida Lopez",
      medida: "Toneladas",
      precio: 400,
      ubicacion: "Ocotlan Jal",
    },
  ]);

  const [actualizarOpen, setActualizarOpen] = useState(false);
  const [añadirOpen, setAñadirOpen] = useState(false);
  const [borrarOpen, setBorrarOpen] = useState(false);

  const [nombre, setNombre] = useState("");
  const [medida, setMedida] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [precio, setPrecio] = useState(0);
  const [ubicacion, setUbicacion] = useState("");
  const [position, setPosition] = useState("");

  function openUpdate(objeto, index) {
    setNombre(objeto.nombre);
    setMedida(objeto.medida);
    setCantidad(1);
    setPrecio(objeto.precio);
    setUbicacion(objeto.ubicacion);
    setPosition(index);
    setActualizarOpen(true);
  }

  return (
    <div>
      <Añadir
        open={actualizarOpen}
        setOpen={(value) => setActualizarOpen(value)}
        producto={nombreProducto}
        ubicacion={ubicacion}
        medida={medida}
        cantidad={cantidad}
        setCantidad={(value) => setCantidad(value.target.value)}
        precio={precio}
        vendedor={nombre}
      />

      <div className=" bg-white shadow sm:rounded-lg lg:m-20">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Vendedores
          </h3>
          <div className="flex flex-row justify-between items-center">
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Lista de vendedores
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Nombre del vendedor
              </dt>
              <dt className="text-sm font-medium text-gray-500">Medida</dt>
              <dt className="text-sm font-medium text-gray-500">
                Precio por unidad
              </dt>
              <dt className="text-sm font-medium text-gray-500">Ubicacion</dt>
              <dt className="text-sm font-medium text-gray-500">Compra</dt>
            </div>
            {vendedores.map((inv, index) => {
              let color;
              index % 2 ? (color = "bg-gray-50") : (color = "bg-white");
              return (
                <div
                  key={index}
                  className={`${color} px-4 py-5 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-6`}
                >
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0">
                    {inv.nombre}
                  </dd>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0">
                    {inv.medida}
                  </dd>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0">
                    {inv.precio} $
                  </dd>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0">
                    {inv.ubicacion}
                  </dd>
                  <dd className="mt-1 text-sm text-gray-900 flex flex-row justify-start  sm:mt-0">
                    <div className="mr-10">
                      <button
                        className="bg-orange-500 p-2 rounded text-gray-50  w-20 hover:bg-orange-400"
                        onClick={() => openUpdate(inv, index)}
                      >
                        Comprar
                      </button>
                    </div>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}
