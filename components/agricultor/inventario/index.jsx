import { PaperClipIcon } from "@heroicons/react/20/solid";

export default function Hero() {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg lg:m-20">
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
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-6">
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0">Elote</dd>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0">Toneladas</dd>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0">5</dd>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0">5000.00$</dd>
            <dd className="mt-1 text-sm text-gray-900 flex flex-row justify-between  sm:mt-0">
              <div>Hola</div>
              <div>Adios</div>
              <div>Si</div>
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-6">
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0">
              margotfoster@example.com
            </dd>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0">
              margotfoster@example.com
            </dd>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0">
              margotfoster@example.com
            </dd>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0">
              margotfoster@example.com
            </dd>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0">
              margotfoster@example.com
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
