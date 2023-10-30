import React from "react";
import Link from "next/link";
import handleNavItemClick from "@/utils";

function NavnarMenuDesktop() {
  const liclass = "my-2 hover:text-secondary  transition duration-700 drop-shadow-xl shadow-black";
  return (
    <div className="hidden sm:block">
      {" "}
      <ul className="flex gap-10  transition duration-500 ">
        <li className={liclass}>
          <Link href="#reservar">Reservar</Link>
        </li>
        <li className={liclass}>
          <Link href="/disponibles" onClick={(e) => handleNavItemClick(e, "disponibles")}>
            Disponibles
          </Link>
        </li>
        <li className={liclass}>
          <Link href="#experiencias" onClick={(e) => handleNavItemClick(e, "experiencias")}>
            Experiencias
          </Link>
        </li>

        <li className={liclass}>
          <Link href="#contacto" onClick={(e) => handleNavItemClick(e, "contacto")}>
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavnarMenuDesktop;
