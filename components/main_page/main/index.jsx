import Image from "next/image";
import Semilla from "../../../components/icons/NotoSeed";
import Planta from "../../../components/icons/NotoPlant";
import Telefono from "../../../components/icons/NotoPhone";
import Grafica from "../../../components/icons/NotoChart";

export default function Main() {
  return (
    <div className="text-gray-900 lg:m-40">
      <div className="grid grid-cols-4 text-center">
        <div className="grid col-span-2">
          <h2 className=" font-bold sm:text-2xl lg:text-3xl text-green-700">
            {" "}
            Los pasos que ya conoces
          </h2>
          <div className="grid grid-cols-2 text-lg  mt-10">
            <div className="flex flex-col items-center justify-center">
              <Semilla width={"7em"} height={"7em"} />
              <p className="font-semibold text-2xl mt-5">Siembra</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Planta width={"7em"} height={"7em"} />
              <p className="font-semibold text-2xl mt-5">Cosecha</p>
            </div>
          </div>
        </div>
        <div className="grid col-span-2">
          <h2 className="font-bold sm:text-2xl lg:text-3xl text-orange-500">
            {" "}
            Añadiendo las redes
          </h2>
          <div className="grid grid-cols-2 text-lg mt-10">
            <div className="flex flex-col items-center justify-center">
              <Telefono width={"7em"} height={"7em"} />
              <p className="font-semibold text-2xl mt-5">Publica</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Grafica width={"7em"} height={"7em"} />
              <p className="font-semibold text-2xl mt-5">Vende</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container min-w-full mx-auto mt-40">
        <div className="grid grid-cols-2">
          <div className=" bg-slate-100 relative mx-10">
            <Image
              className="object-cover mr-5"
              src="/farmer.jpg"
              alt="Frutos de tu trabajo"
              layout="fill"
            />
          </div>
          <div className="">
            <h1 className="font-bold sm:text-2xl lg:text-3xl text-center text-green-700">
              Deja que tu trabajo de sus frutos
            </h1>
            <p className="mt-10 font-medium text-lg lg:text-xl text-justify">
              &quot;Gran parte de los productores agrícolas de México venden sus
              productos a un intermediario por la especialización de este tipo
              de agentes económicos, porque carecen de una infraestructura
              básica de almacenamiento y transporte, o bien, porque no cuentan
              con ciertos conocimientos acerca de los procesos de
              comercialización&quot;
              <br />
              <br />
              &quot;del fenómeno de la intermediación: aporta poco valor
              agregado e implica prácticas abusivas de compra en perjuicio de
              los productores&quot;
              <br />
              <br />
              &quot;resulta paradójico que los agricultores sean los menos
              beneficiados...&quot;
            </p>
            <p className="mt-5 font-light lg:font-normal text-sm lg:text-lg text-justify">
              Intermediarios y poder de mercado en los mercados agrícolas de
              México: un enfoque de teoría de juegos Paradigma económico.
              Revista de economía regional y sectorial, vol. Vol.11, núm. 1, pp.
              5-40, 2019 Universidad Autónoma del Estado de México
            </p>
          </div>
        </div>
      </div>

      <div className="container min-w-full mx-auto mt-40">
        <div className="grid grid-cols-2">
          <div className="mx-5">
            <h1 className="font-bold sm:text-2xl lg:text-3xl text-center text-black-500">
              Problematicas
            </h1>
            <p className="mt-10 font-medium text-lg lg:text-xl text-justify">
              &quot;De acuerdo con la Comisión Federal de Competencia Económica
              (Cofece), los problemas de asimetría en el poder de negociación
              entre productores e intermediarios pueden agravarse en la medida
              en que estos últimos sean de mayor tamaño, o bien, cuando los
              productores se encuentren en las siguientes situaciones&quot;
            </p>
            <div className="mt-10 font-normal text-sm lg:text-lg text-justify">
              <ul>
                <li className="py-2">
                  {" "}
                  I) Tengan una escala de producción pequeña
                </li>
                <li className="py-2">
                  {" "}
                  II) No estén organizados de manera adecuada con otros
                  productores
                </li>
                <li className="py-2">
                  {" "}
                  III) Estén menos informados que sus compradores sobre los
                  precios y otras variables del mercado
                </li>
                <li className="py-2">
                  {" "}
                  IV) Tengan acceso a un número limitado de comercializadores
                </li>
              </ul>
            </div>
            <p className="mt-5 font-light lg:font-normal text-sm lg:text-lg text-justify">
              Intermediarios y poder de mercado en los mercados agrícolas de
              México: un enfoque de teoría de juegos Paradigma económico.
              Revista de economía regional y sectorial, vol. Vol.11, núm. 1, pp.
              5-40, 2019 Universidad Autónoma del Estado de México
            </p>
          </div>
          <div className="relative mx-40">
            <Image
              className="object-cover mr-5"
              src="/hand.jpg"
              alt="Solo en el campo"
              layout="fill"
            />
          </div>
        </div>
      </div>

      <div className="container min-w-full mx-auto mt-40">
        <div className="grid grid-cols-2">
          <div className="relative mx-40">
            <Image
              className="object-cover mr-5"
              src="/farming.jpg"
              alt="Frutos de tu trabajo"
              layout="fill"
            />
          </div>
          <div className="mx-5">
            <h1 className="mt-10 font-bold sm:text-2xl lg:text-3xl text-center text-orange-500">
              Propuesta
            </h1>
            <p className="mt-10 font-medium text-lg lg:text-xl text-justify">
              Como primer acercamiento,en este proyecto se intentará atacar
              directamente los puntos II,III y IV, con base a esto se podría dar
              un empujon al punto I.
              <br />
              Esta plataforma tiene como finalidad, ayudar a los agricultores de
              las siguentes maneras:
            </p>
            <div className="mt-10 font-normal text-sm lg:text-lg text-justify">
              <ul>
                <li className="py-2">
                  {" "}
                  🟢 Tener un mejor acercamiento hacía el mercado
                </li>
                <li className="py-2">
                  {" "}
                  🟢 Permitir conocer el mercado y sus precios
                </li>
                <li className="py-2">
                  {" "}
                  🟢 Dar a conocer sus productos a un mayor número de
                  potenciales clientes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
