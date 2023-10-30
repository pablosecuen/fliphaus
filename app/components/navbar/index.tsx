"use client";
import { useCallback, useEffect, useState } from "react";

import Image from "next/image";

import UseAnimations from "react-useanimations";
import menu2 from "react-useanimations/lib/menu2";
import logo from "@/public/assets/logo/Logo.svg";
import NavnarMenuDesktop from "./menu-desktop";
import NavbarMenu from "./menu-mobile";
import ButtonSignIn from "../buttons/sign-in";
import Logo from "@/public/assets/logo";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscapeKey = (event: any) => {
      if (event.key === "Escape") {
        toggleMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isMenuOpen, toggleMenu]);

  return (
    <nav>
      <div className="z-50 xs:h-full border-2 font-semibold md:text-lg  tracking-wide px-8 w-full flex items-center justify-between align-middle lg:pr-8 bg-metal2 bg-center bg-contain backdrop-blur-3xl">
        <div className="hidden md:block">
          <Logo size="lg" />
        </div>
        <div className="md:hidden block">
          <Logo size="md" />
        </div>
        <button onClick={toggleMenu} className=" animation-container sm:hidden">
          <UseAnimations animation={menu2} size={50} fillColor="#a1d1cf" strokeColor="#a1d1cf" />
        </button>
        <NavnarMenuDesktop />
        <div className="hidden sm:block">
          {" "}
          <ButtonSignIn />
        </div>
      </div>
      <NavbarMenu
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </nav>
  );
};

export default Navbar;
