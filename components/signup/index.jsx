import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function Index(props) {
  const {} = props;

  const cancelButtonRef = useRef(null);

  return (
    <div className=" flex flex-row m-20 justify-center">
      <div className="mt-2 bg-white w-1/4 shadow p-5 rounded-sm">
        <div className="flex justify-start bg">
          <div className="mr-10">
            <label
              for="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="pepe@gmail.com"
            />
          </div>
          <div>
            <label
              for="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="password"
            />
          </div>
        </div>
        <div className="flex justify-start mt-5">
          <div className="mr-10">
            <label
              for="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Nombre completo
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Juan Perez"
            />
          </div>
          <div>
            <label
              for="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Ciudad
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Guadalajara Jal."
            />
          </div>
        </div>
        <div className="flex justify-start mt-5">
          <div className="mr-10">
            <label
              for="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Tipo de usuario
            </label>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5">
              <option value="pedido">Agricultor</option>
              <option value="pagado">Cliente</option>
              <option value="entregado">Transportista</option>
            </select>
          </div>
        </div>
        <div className="mt-10 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Registro
          </button>
        </div>
      </div>
    </div>
  );
}
