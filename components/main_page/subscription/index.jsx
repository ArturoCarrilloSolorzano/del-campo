export default function Hero() {
  return (
    <div className="container min-w-full mt-40 mx-auto bg-custom-green">
      <div className="grid grid-rows-3 text-center text-white p-5">
        <h1 className="text-xl">Suscríbete para saber más 💌</h1>
        <div className="grid grid-cols-4 h-10">
          <textarea className="col-span-3 pt-2 bg-white rounded-bl-xl rounded-tl-xl text-black text-center" />
          <button
            type="button"
            className="bg-custom-orange rounded-br-xl rounded-tr-xl w-full"
          >
            Suscríbirse
          </button>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
