export default function Index(props) {
  return (
    <div className=" flex flex-row m-20 justify-center">
      <div className="mt-2 bg-white w-1/4 shadow p-5 rounded-sm">
        <div className="mt-10 flex justify-center bg">
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
        </div>
        <div className="mt-10 flex justify-center bg">
          <div className="mr-10">
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
              placeholder="contraseña"
            />
          </div>
        </div>

        <div className="mt-10 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}
