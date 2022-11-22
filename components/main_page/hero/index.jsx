export default function Hero() {
  return (
      <div className="container min-w-full p-10 mx-auto bg-custom-green">
        <div className="grid grid-cols-2">
          <div className="grid grid-cols-1 text-white pr-5">
            <h1 className="font-bold text-center text-3xl">Acercando los agricultores al comercio externo</h1>
            <p className="font-light text-justify text-xl opacity-80">
              La principal función de este proyecto es darle poder de elección y negociación
              a los agricultores frente a los distribuidores de alimentos, así como crear conexiones directas 
              entre productores y consumidores. 
            </p>
            <button className="mt-5 bg-custom-orange sm:w-[100px] lg:w-[200px] max-w-[300px] h-10 rounded-xl">Registrarse</button>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 mt-5">
              <div>
                <h2>💪</h2>
                <p>Poder</p>
              </div>
              <div>
                <h2>✋</h2>
                <p>Elección</p>
              </div>
              <div>
                <h2>👨🏿‍🤝‍👨🏼👩🏼‍🤝‍🧑🏻</h2>
                <p>Conexiones</p>
              </div>
            </div>
          </div>
          <div className="pl-5">
            <img className="rounded-2xl object-cover h-full w-full" src="farmland.jpg" alt = "Imagen del campo"/>
          </div>
        </div>
      </div>
  );
}
