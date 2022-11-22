import React, { useState } from "react";
import Actualizar from "../../forms/agricultor/perfil/actualizar";

export default function Index() {
  const [actualizarOpen, setActualizarOpen] = useState(false);
  const [data, setData] = useState({
    email: "pedro@gmail.com",
  });
  const [email, setEmail] = useState("");

  function openUpdate() {
    setEmail(data.email);
    setActualizarOpen(true);
  }

  function modify() {
    setActualizarOpen(false);
    let tempData = { ...data };
    tempData.email = email;
    setData(tempData);
  }

  return (
    <>
      <Actualizar
        open={actualizarOpen}
        setOpen={(value) => setActualizarOpen(value)}
        email={email}
        setEmail={(value) => setEmail(value.target.value)}
        onModify={() => modify()}
      />
      <div className="bg-white shadow sm:rounded-lg lg:m-20">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Informacion personal
          </h3>
          <div className="flex flex-row justify-between items-center">
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Tus productos
            </p>
            <button
              className="bg-orange-500 p-2 rounded text-gray-50  min-w-20 hover:bg-orange-400"
              onClick={() => openUpdate()}
            >
              Cambiar email
            </button>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Nombre completo
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                Pedro Lopez Torres
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Tipo de usuario
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                Transportista
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {data.email}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Fecha de entrada
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                20/10/2022
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}
