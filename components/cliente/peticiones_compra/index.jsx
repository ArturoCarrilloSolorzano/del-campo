import React, { useState } from "react";

export default function Index() {
  const [data, setData] = useState([
    {
      producto: "Berenjenas",
      cantidad: "100",
      medida: "Kilos",
      total: "3000",
      estado: "pedido",
      fecha: "10/12/2022",
    },
    {
      producto: "Maiz",
      cantidad: "100",
      medida: "Kilos",
      total: "10000",
      estado: "aceptado",
      fecha: "8/12/2022",
    },
  ]);

  return (
    <>
      {data.map((pedido, index) => {
        return (
          <div key={index} className="bg-white shadow sm:rounded-lg lg:m-20">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Pedido
              </h3>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row justify-start">
                  <p className="mt-1 max-w-2xl text-sm text-gray-500 mr-5">
                    Estado: {pedido.estado}
                  </p>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Fecha: {pedido.fecha}
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Producto
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {pedido.producto}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Medida</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {pedido.medida}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Cantidad
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {pedido.cantidad}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Total</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {pedido.total} $
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        );
      })}
    </>
  );
}
