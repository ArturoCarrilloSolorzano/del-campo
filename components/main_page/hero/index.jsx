export default function Hero() {
  return (
      <div className='container h-[480px] mx-auto mt-2 shadow-2xl bg-[url("../public/farmland.jpg")] 
      bg-center bg-no-repeat bg-cover rounded-xl flex items-center text-center flex-col'>
        
        <img src = 'logo.jpg' alt = "logo" className="sm:w-1/6 w-3/12 rounded-bl-lg hover:w-1/5"/>

        <div className="flex items-center w-full flex-auto">
          <div className='bg-gradient-to-br from-green-50 to-green-600 font-medium 
                          p-0.5 rounded-br-xl rounded-tl-xl w-1/2 sm:text-2xl text-sm
                          hover:animate-bounce'> 
            Acercando a los agricultores <br/>
            al comercio externo
          </div >

          <div className="w-1/2 flex justify-around">
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
