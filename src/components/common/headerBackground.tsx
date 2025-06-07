import { TbClick } from "react-icons/tb";
import { FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";

function HeaderBackground() {
  const [mobileHeader, setMobileHeader] = useState(false);

  return (
    <>
      <header className="w-full z-50 hidden lg:flex relative">
        <div className="flex flex-row items-center justify-between px-24 py-4 w-full">
          <a className="" title="Strona główna" href="/">
            <img
              src="https://ifil-group-spaces.fra1.cdn.digitaloceanspaces.com/Projects/crew-core/white_1.png"
              alt=""
              className="h-14"
            />
          </a>
          <nav className="flex flex-row items-center justify-center gap-6">
            <Link
              to="/#funkcje"
              className="text-black hover:opacity-40 transition duration-300 ease-linear text-lg opacity-80"
            >
              Funkcje
            </Link>
            <Link
              to="/#dlaczego-warto"
              className="text-black hover:opacity-40 transition duration-300 ease-linear text-lg opacity-80"
            >
              Dlaczego warto
            </Link>
            <Link
              to="/#cennik"
              className="text-black hover:opacity-40 transition duration-300 ease-linear text-lg opacity-80"
            >
              Cennik
            </Link>
            <Link
              to="/kontakt"
              className="text-black hover:opacity-40 transition duration-300 ease-linear text-lg opacity-80"
            >
              Kontakt
            </Link>
          </nav>
          <a href="/demo">
            <button className="button-main">
              <span>Zamów demo</span>
              <TbClick />
            </button>
          </a>
        </div>
      </header>
      <header className="lg:hidden w-full bg-main p-2 flex flex-row items-center justify-between z-50 relative">
        <a href="/">
          <img
            className="h-6"
            src="https://ifil-group-spaces.fra1.cdn.digitaloceanspaces.com/Projects/crew-core/white_1.png"
            alt=""
          />
        </a>
        <CgMenuRightAlt
          onClick={() => setMobileHeader(true)}
          className="cursor-pointer text-4xl text-white"
        />
      </header>
      {mobileHeader && (
        <div className="fixed w-screen h-screen bg-main top-0 z-[99999999999]">
          <nav className="w-full h-full relative flex flex-col items-center justify-center gap-2 p-12">
            <IoIosCloseCircle
              onClick={() => setMobileHeader(false)}
              className="cursor-pointer text-4xl text-white top-2 right-2 absolute"
            />
            <Link
              to="/"
              className="text-white hover:opacity-40 transition duration-300 ease-linear text-lg opacity-80"
            >
              Strona główna
            </Link>
            <Link
              to="/#funkcje"
              className="text-white hover:opacity-40 transition duration-300 ease-linear text-lg opacity-80"
            >
              Funkcje
            </Link>
            <Link
              to="/#dlaczego-warto"
              className="text-white hover:opacity-40 transition duration-300 ease-linear text-lg opacity-80"
            >
              Dlaczego warto
            </Link>
            <Link
              to="/#cennik"
              className="text-white hover:opacity-40 transition duration-300 ease-linear text-lg opacity-80"
            >
              Cennik
            </Link>
            <Link
              to="/kontakt"
              className="text-white hover:opacity-40 transition duration-300 ease-linear text-lg opacity-80"
            >
              Kontakt
            </Link>
            <a
              className="w-full mt-6"
              onClick={() => setMobileHeader(false)}
              href="/demo"
            >
              <button className="button-white flex flex-row items-center text-sm justify-center gap-2 uppercase tracking-[1px] w-full">
                <span>Zamów demo</span>
                <TbClick className="color-main text-lg" />
              </button>
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

export default HeaderBackground;
