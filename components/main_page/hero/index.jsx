export default function Hero() {
  return (
    <div className= 'container h-40 mx-auto mt-2 shadow-2xl'>
      <div className='h-full bg-[url("../public/farmland.jpg")] bg-center bg-no-repeat bg-cover grid grid-cols-2 items-center text-center'>
        <div className='bg-gradient-to-br from-green-50 to-green-600 font-medium'> 
          Acercando a los agricultores <br/>
          al comercio externo
        </div >
        <div className="flex justify-evenly">
          <button className="bg-orange-500 p-2 rounded text-gray-50  w-30 hover:bg-orange-400"
              onClick={() => setAgregarOpen(true)}>
              Ingresar
          </button>
          <button className="bg-orange-500 p-2 rounded text-gray-50  w-30 hover:bg-orange-400"
              onClick={() => setAgregarOpen(true)}>
              Registrarse
          </button>
        </div>
      </div>
    </div> 
  );
}
