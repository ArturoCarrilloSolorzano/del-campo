import Mercado from "../../../components/cliente/mercado";
import ClienteLayout from "../../../components/layouts/cliente";
import Vendedores from "../../../components/cliente/mercado/vendedores";
import { useRouter } from "next/router";

export default function Index(props) {
  const router = useRouter();
  const { nombre } = router.query;
  console.log(nombre);
  return (
    <div className="">
      <div className="bg-green-800 h-80">
        <hr className="bg-green-700 h-0.5 border-green-700 mx-5" />
        <h1 className="p-20 text-5xl">Vendedores de {nombre}</h1>
      </div>
      <div className="-mt-48">
        <Vendedores nombre={nombre} />
      </div>
    </div>
  );
}

Index.getLayout = function getLayout(page) {
  return <ClienteLayout>{page}</ClienteLayout>;
};
