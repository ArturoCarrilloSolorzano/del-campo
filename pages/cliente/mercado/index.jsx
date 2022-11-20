import Mercado from "../../../components/cliente/mercado";
import ClienteLayout from "../../../components/layouts/cliente";

export default function Index() {
  return (
    <div className="">
      <div className="bg-green-800 h-80">
        <hr className="bg-green-700 h-0.5 border-green-700 mx-5" />
        <h1 className="p-20 text-5xl">Mercado</h1>
      </div>
      <div className="-mt-48">
        <Mercado />
      </div>
    </div>
  );
}

Index.getLayout = function getLayout(page) {
  return <ClienteLayout>{page}</ClienteLayout>;
};
