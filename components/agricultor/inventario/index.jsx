import { PaperClipIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import Agregar from "../../forms/agricultor/inventario/agregar";
import Ver from "../../forms/agricultor/inventario/ver";
import Borrar from "../../forms/agricultor/inventario/borrar";

export default function Hero() {
  const [inventory, setInventory] = useState([
    { producto: "Elote", medida: "Toneladas", cantidad: 500, precio: 3500 },
    { producto: "Jitomate", medida: "Kilos", cantidad: 300, precio: 4000 },
    { producto: "Frijol", medida: "Toneladas", cantidad: 400, precio: 2500 },
  ]);

  const [agregarOpen, setAgregarOpen] = useState(false);
  const [verOpen, setVerOpen] = useState(false);
  const [borrarOpen, setBorrarOpen] = useState(false);

  return (
    <div className="-mt-48">
      <Agregar open={agregarOpen} setOpen={(value) => setAgregarOpen(value)} />
      <Ver open={verOpen} setOpen={(value) => setVerOpen(value)} />
      <Borrar open={borrarOpen} setOpen={(value) => setBorrarOpen(value)} />
      <div className=" bg-white shadow sm:rounded-lg lg:m-20">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Inventario
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details and application.
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Producto</dt>
              <dt className="text-sm font-medium text-gray-500">Medida</dt>
              <dt className="text-sm font-medium text-gray-500">Cantidad</dt>
              <dt className="text-sm font-medium text-gray-500">
                Precio por unidad
              </dt>
              <dt className="text-sm font-medium text-gray-500">Opciones</dt>
            </div>
            {inventory.map((inv, index) => {
              let color;
              index % 2 ? (color = "bg-gray-50") : (color = "bg-white");
              return (
                <div
                  key={index}
                  className={`${color} px-4 py-5 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-6`}
                >
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0">
                    {inv.producto}
                  </dd>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0">
                    {inv.medida}
                  </dd>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0">
                    {inv.cantidad}
                  </dd>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0">
                    5000.00$
                  </dd>
                  <dd className="mt-1 text-sm text-gray-900 flex flex-row justify-between  sm:mt-0">
                    <div>
                      <button
                        className="bg-orange-500 p-2 rounded text-gray-50  w-20 hover:bg-orange-400"
                        onClick={() => setAgregarOpen(true)}
                      >
                        Agregar
                      </button>
                    </div>
                    <div>
                      <button
                        className="bg-orange-500 p-2 rounded text-gray-50  w-20 hover:bg-orange-400"
                        onClick={() => setVerOpen(true)}
                      >
                        Ver
                      </button>
                    </div>
                    <div>
                      <button
                        className="bg-orange-500 p-2 rounded text-gray-50  w-20 hover:bg-orange-400"
                        onClick={() => setBorrarOpen(true)}
                      >
                        Borrar
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
