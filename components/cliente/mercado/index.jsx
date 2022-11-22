import React, { useState } from "react";
import Berenjena from "../../icons/NotoEggplant";
import Aguacate from "../../icons/NotoAvocado";
import Frijol from "../../icons/NotoBeans";
import Brocoli from "../../icons/NotoBrocoli";
import Carrot from "../../icons/NotoCarrot";
import MoraAzul from "../../icons/NotoBlueberries";
import Maiz from "../../icons/NotoCorn";
import Lechuga from "../../icons/NotoLeafy";
import Ejote from "../../icons/NotoPea";
import Cebolla from "../../icons/NotoOnion";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();

  function goToVendedores(nombre) {
    router.push({
      pathname: "/cliente/mercado/vendedores",
      query: { nombre: nombre },
    });
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 lg:m-20">
      <button
        className="bg-gray-50 m-5 shadow flex flex-row  justify-around items-center p-5 transition ease-in-out delay-150 hover:scale-110 sm:rounded-lg"
        onClick={() => goToVendedores("Berenjenas")}
      >
        <Berenjena width={"7em"} height={"7em"} />
        <p className="text-xl font-semibold text-gray-800 md:text-2xl lg:text-3xl xl:text-4xl">
          Berenjenas
        </p>
      </button>
      <button
        onClick={() => console.log("Hola")}
        className="bg-gray-50 m-5 shadow flex flex-row  justify-around items-center p-5 transition ease-in-out delay-150 hover:scale-110 sm:rounded-lg"
      >
        <Aguacate width={"7em"} height={"7em"} />
        <p className="text-xl font-semibold text-gray-800 md:text-2xl lg:text-3xl xl:text-4xl">
          Aguacates
        </p>
      </button>
      <button
        onClick={() => console.log("Hola")}
        className="bg-gray-50 m-5 shadow flex flex-row  justify-around items-center p-5 transition ease-in-out delay-150 hover:scale-110 sm:rounded-lg"
      >
        <Frijol width={"7em"} height={"7em"} />
        <p className="text-xl font-semibold text-gray-800 md:text-2xl lg:text-3xl xl:text-4xl">
          Frijoles
        </p>
      </button>
      <button
        onClick={() => console.log("Hola")}
        className="bg-gray-50 m-5 shadow flex flex-row  justify-around items-center p-5 transition ease-in-out delay-150 hover:scale-110 sm:rounded-lg"
      >
        <Brocoli width={"7em"} height={"7em"} />
        <p className="text-4xl font-semibold text-gray-800">Brocoli</p>
      </button>
      <button
        onClick={() => console.log("Hola")}
        className="bg-gray-50 m-5 shadow flex flex-row  justify-around items-center p-5 transition ease-in-out delay-150 hover:scale-110 sm:rounded-lg"
      >
        <Carrot width={"7em"} height={"7em"} />
        <p className="text-4xl font-semibold text-gray-800">Zanahoria</p>
      </button>
      <button
        onClick={() => console.log("Hola")}
        className="bg-gray-50 m-5 shadow flex flex-row  justify-around items-center p-5 transition ease-in-out delay-150 hover:scale-110 sm:rounded-lg"
      >
        <MoraAzul width={"7em"} height={"7em"} />
        <p className="text-4xl font-semibold text-gray-800">Mora azul</p>
      </button>
      <button
        onClick={() => console.log("Hola")}
        className="bg-gray-50 m-5 shadow flex flex-row  justify-around items-center p-5 transition ease-in-out delay-150 hover:scale-110 sm:rounded-lg"
      >
        <Maiz width={"7em"} height={"7em"} />
        <p className="text-4xl font-semibold text-gray-800">Maiz</p>
      </button>
      <button
        onClick={() => console.log("Hola")}
        className="bg-gray-50 m-5 shadow flex flex-row  justify-around items-center p-5 transition ease-in-out delay-150 hover:scale-110 sm:rounded-lg"
      >
        <Lechuga width={"7em"} height={"7em"} />
        <p className="text-4xl font-semibold text-gray-800">Lechuga</p>
      </button>
      <button
        onClick={() => console.log("Hola")}
        className="bg-gray-50 m-5 shadow flex flex-row  justify-around items-center p-5 transition ease-in-out delay-150 hover:scale-110 sm:rounded-lg"
      >
        <Ejote width={"7em"} height={"7em"} />
        <p className="text-4xl font-semibold text-gray-800">Ejote</p>
      </button>
      <button
        onClick={() => console.log("Hola")}
        className="bg-gray-50 m-5 shadow flex flex-row  justify-around items-center p-5 transition ease-in-out delay-150 hover:scale-110 sm:rounded-lg"
      >
        <Cebolla width={"7em"} height={"7em"} />
        <p className="text-4xl font-semibold text-gray-800">Cebolla</p>
      </button>
    </div>
  );
}
