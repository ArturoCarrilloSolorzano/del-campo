import Peticiones from "../../../components/transportista/peticiones_compra";
import TransportistaLayout from "../../../components/layouts/transportista";

export default function Index() {
  return (
    <div className="">
      <div className="bg-green-800 h-80">
        <hr className="bg-green-700 h-0.5 border-green-700 mx-5" />
        <h1 className="p-20 text-5xl">Peticiones de transporte</h1>
      </div>
      <div className="-mt-48">
        <Peticiones />
      </div>
    </div>
  );
}

Index.getLayout = function getLayout(page) {
  return <TransportistaLayout>{page}</TransportistaLayout>;
};
