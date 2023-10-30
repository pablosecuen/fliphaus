/* eslint-disable @next/next/no-img-element */
import React from "react";
import foto from "@/public/assets/Rectangle 7.png";
import Image from "next/image";
import Link from "next/link";
function Soon() {
  return (
    <div className="flex flex-col w-screen items-center text-black py-24 gap-20 bg-[#f0f2f2] relative">
      <div className=" absolute bottom-0 right-0 w-full opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0099ff" fill-opacity="1" d="M0,224L1440,64L1440,320L0,320Z"></path>
        </svg>
      </div>
      <h2 className="text-center tracking-widest text-3xl">Disponible en fechas proximas</h2>
      <div className="flex gap-8 z-20">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl shadow-black/20">
          <Link href="#">
            <Image width={0} height={0} className="rounded-t-lg w-full" src={foto} alt="" />
          </Link>
          <div className="p-5">
            <Link href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                PISO EXCLUSIVO
              </h5>
            </Link>
            <span className="mb-3 font-normal text-sm opacity-80 text-gray-700 dark:text-gray-400">
              1,2 km del Centro
            </span>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              2 habitaciones, 1 baño, amplia cocina. El edificio cuenta con Gimnasio y pileta
              descubierta en su terraza.
            </p>
            <Link
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black/80 bg-[#a1d1cf] rounded-lg hover:bg-blue-300 transition duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#a1d1cf]dark:hover:bg-blue-700 dark:focus:ring-blue-500"
            >
              Consultar
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl shadow-black/20">
          <Link href="#">
            <Image width={0} height={0} className="rounded-t-lg w-full" src={foto} alt="" />
          </Link>
          <div className="p-5">
            <Link href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                PISO EXCLUSIVO
              </h5>
            </Link>
            <span className="mb-3 font-normal text-sm opacity-80 text-gray-700 dark:text-gray-400">
              1,2 km del Centro
            </span>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              2 habitaciones, 1 baño, amplia cocina. El edificio cuenta con Gimnasio y pileta
              descubierta en su terraza.
            </p>
            <Link
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black/80 bg-[#a1d1cf] rounded-lg hover:bg-blue-300 transition duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#a1d1cf]dark:hover:bg-blue-700 dark:focus:ring-blue-500"
            >
              Consultar
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl shadow-black/20">
          <Link href="#">
            <Image width={0} height={0} className="rounded-t-lg w-full" src={foto} alt="" />
          </Link>
          <div className="p-5">
            <Link href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                PISO EXCLUSIVO
              </h5>
            </Link>
            <span className="mb-3 font-normal text-sm opacity-80 text-gray-700 dark:text-gray-400">
              1,2 km del Centro
            </span>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              2 habitaciones, 1 baño, amplia cocina. El edificio cuenta con Gimnasio y pileta
              descubierta en su terraza.
            </p>
            <Link
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black/80 bg-[#a1d1cf] rounded-lg hover:bg-blue-300 transition duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#a1d1cf]dark:hover:bg-blue-700 dark:focus:ring-blue-500"
            >
              Consultar
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Soon;
