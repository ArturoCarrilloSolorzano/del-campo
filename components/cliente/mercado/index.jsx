import React, { useState } from "react";
import Berenjena from "../../icons/NotoEggplant";
import Aguacate from "../../icons/NotoAvocado";
import Actualizar from "../../forms/agricultor/perfil/actualizar";

export default function Index() {
  return (
    <div className="grid grid-cols-4 m-20">
      <div className="bg-white m-2 shadow flex justify-center sm:rounded-lg">
        <Berenjena width={"10em"} height={"10em"} />
      </div>
      <div className="bg-white m-2 shadow flex justify-center sm:rounded-lg">
        <Aguacate width={"10em"} height={"10em"} />
      </div>
      <div className="bg-white m-2 shadow flex justify-center sm:rounded-lg">
        <Berenjena width={"10em"} height={"10em"} />
      </div>
      <div className="bg-white m-2 shadow flex justify-center sm:rounded-lg">
        <Berenjena width={"10em"} height={"10em"} />
      </div>
      <div className="bg-white m-2 shadow flex justify-center sm:rounded-lg">
        <Berenjena width={"10em"} height={"10em"} />
      </div>
    </div>
  );
}
