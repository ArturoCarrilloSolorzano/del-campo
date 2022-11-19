import { PaperClipIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import Actualizar from "../../forms/agricultor/inventario/actualizar";
import Añadir from "../../forms/agricultor/inventario/añadir";
import Borrar from "../../forms/agricultor/inventario/borrar";

export default function Hero() {
  const [inventory, setInventory] = useState([
    { producto: "Elote", medida: "Toneladas", cantidad: 500, precio: 3500 },
    { producto: "Jitomate", medida: "Kilos", cantidad: 300, precio: 4000 },
    { producto: "Frijol", medida: "Toneladas", cantidad: 400, precio: 2500 },
  ]);

  const [actualizarOpen, setActualizarOpen] = useState(false);
  const [añadirOpen, setAñadirOpen] = useState(false);
  const [borrarOpen, setBorrarOpen] = useState(false);

  const [producto, setProducto] = useState("");
  const [medida, setMedida] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState(0);
  const [position, setPosition] = useState("");

  function openUpdate(objeto, index) {
    setProducto(objeto.producto);
    setMedida(objeto.medida);
    setCantidad(objeto.cantidad);
    setPrecio(objeto.precio);
    setPosition(index);
    setActualizarOpen(true);
  }

  function modify() {
    setActualizarOpen(false);
    let tempInventory = [...inventory];
    tempInventory[position] = { producto, medida, cantidad, precio };
    setInventory(tempInventory);
  }

  function openDelete(index) {
    setPosition(index);
    setBorrarOpen(true);
  }

  function deleteInv() {
    setBorrarOpen(false);
    let tempInventory = [...inventory];
    tempInventory.splice(position, 1);
    setInventory(tempInventory);
  }

  function openAdd() {
    setProducto("");
    setMedida("");
    setCantidad("");
    setPrecio("");
    setAñadirOpen(true);
  }

  function addInv() {
    setAñadirOpen(false);
    let tempInventory = [...inventory];
    tempInventory.push({ producto, medida, cantidad, precio });
    setInventory(tempInventory);
  }
  return (
    <div>
      <Actualizar
        open={actualizarOpen}
        setOpen={(value) => setActualizarOpen(value)}
        producto={producto}
        setProducto={(value) => setProducto(value.target.value)}
        medida={medida}
        setMedida={(value) => setMedida(value.target.value)}
        cantidad={cantidad}
        setCantidad={(value) => setCantidad(value.target.value)}
        precio={precio}
        setPrecio={(value) => setPrecio(value.target.value)}
        onModify={() => modify()}
      />
      <Añadir
        open={añadirOpen}
        setOpen={(value) => setAñadirOpen(value)}
        producto={producto}
        setProducto={(value) => setProducto(value.target.value)}
        medida={medida}
        setMedida={(value) => setMedida(value.target.value)}
        cantidad={cantidad}
        setCantidad={(value) => setCantidad(value.target.value)}
        precio={precio}
        setPrecio={(value) => setPrecio(value.target.value)}
        onAdd={() => addInv()}
      />
      <Borrar
        open={borrarOpen}
        setOpen={(value) => setBorrarOpen(value)}
        onDelete={() => deleteInv()}
      />
      <div className=" bg-white shadow sm:rounded-lg lg:m-20">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Inventario
          </h3>
          <div className="flex flex-row justify-between items-center">
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Tus productos
            </p>
            <button
              className="bg-orange-500 p-2 rounded text-gray-50  w-20 hover:bg-orange-400"
              onClick={() => openAdd(true)}
            >
              Añadir
            </button>
          </div>
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
                    {inv.precio} $
                  </dd>
                  <dd className="mt-1 text-sm text-gray-900 flex flex-row justify-start  sm:mt-0">
                    <div className="mr-10">
                      <button
                        className="bg-orange-500 p-2 rounded text-gray-50  w-20 hover:bg-orange-400"
                        onClick={() => openUpdate(inv, index)}
                      >
                        Actualizar
                      </button>
                    </div>
                    <div>
                      <button
                        className="bg-orange-500 p-2 rounded text-gray-50  w-20 hover:bg-orange-400"
                        onClick={() => openDelete(index)}
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
