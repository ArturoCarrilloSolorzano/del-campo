import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-w-full bg-green-800 grid grid-cols-2">
      <div className=" text-white  lg:m-10">
        <h1 className="font-bold text-left text-3xl mt-32">
          Acercando los agricultores al comercio externo
        </h1>
        <p className="font-light text-justify text-xl opacity-80 mt-10">
          La principal función de este proyecto es darle poder de elección y
          negociación a los agricultores frente a los distribuidores de
          alimentos, así como crear conexiones directas entre productores y
          consumidores.
        </p>
        <button className="mt-5 mr-5 bg-custom-orange sm:w-[100px] lg:w-[200px] max-w-[300px] h-10 rounded-xl">
          Registrarse
        </button>
        <button className="mt-5 bg-custom-orange sm:w-[100px] lg:w-[200px] max-w-[300px] h-10 rounded-xl">
          Entrar
        </button>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 mt-5 mb-32">
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
      <div className="relative">
        <Image
          className="object-cover h-full"
          src="/farmland.jpg"
          alt="Imagen del campo"
          layout="fill"
        />
      </div>
    </div>
  );
}
