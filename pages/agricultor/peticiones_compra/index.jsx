import Inventario from "../../../components/agricultor/inventario";
import AgricultorLayout from "../../../components/layouts/agricultor";

export default function Index() {
  return (
    <div className="">
      <div className="bg-green-800 h-80">
        <hr className="bg-green-700 h-0.5 border-green-700 mx-5" />
        <h1 className="p-20 text-5xl">Peticiones de compra</h1>
      </div>
      <div className="-mt-48">
        <Inventario />
      </div>
    </div>
  );
}

Index.getLayout = function getLayout(page) {
  return <AgricultorLayout>{page}</AgricultorLayout>;
};
