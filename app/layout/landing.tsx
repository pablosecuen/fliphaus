import React from "react";

function Landing() {
  return (
    <div className="h-[90vh] bg-white  w-full flex justify-center items-center">
      <div className="w-1/2 flex flex-col gap-8">
        <div className="flex flex-col text-2xl ">
          <h1>
            Reserva una propiedad
            <br />
            para tu alquiler temporal
            <br />
            en Rosario
          </h1>

          <span className="text-base opacity-80">descubri que propiedades tenemos disponibles</span>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <span>fecha de estadia</span>
            calendario
          </div>
          <div className="flex flex-col">
            <span>cant personas</span>2
          </div>
          <div className="flex flex-col">
            <span>dias</span>2
          </div>
          <div className="flex flex-col">
            <span>tipo</span>casa
          </div>
          <div>
            <button>buscar</button>
          </div>
        </div>
      </div>
      <div className="w-1/2"> fotos</div>
    </div>
  );
}

export default Landing;
