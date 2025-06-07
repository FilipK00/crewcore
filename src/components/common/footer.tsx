function Footer() {
  return (
    <>
      <footer className="px-6 lg:px-36 flex flex-col py-12 relative z-20 bg-transparent">
        <div className="flex flex-col items-center justify-center w-full gap-6 lg:gap-12">
          <span className="w-full bg-gray-300 h-[1px]"></span>
          <img
            className="w-12"
            src="https://ifil-group-spaces.fra1.cdn.digitaloceanspaces.com/Projects/crew-core/sygnet.png"
            alt=""
          />
        </div>
        <div className="py-6 lg:py-12 flex flex-col lg:flex-row justify-between gap-6 lg:gap-0 text-left">
          <div className="flex text-sm flex-col gap-1 lg:gap-2">
            <p className="">Dokumenty</p>
            <a
              className="opacity-50 hover:opacity-80 cursor-pointer transition duration-300 ease-in"
              href="#"
            >
              Polityka Prywatności
            </a>
            <a
              className="opacity-50 hover:opacity-80 cursor-pointer transition duration-300 ease-in"
              href="#"
            >
              Regulamin Serwisu
            </a>
            <a
              className="opacity-50 hover:opacity-80 cursor-pointer transition duration-300 ease-in"
              href="#"
            >
              Obowiązek Informacyjny
            </a>
          </div>
          <div className="flex text-sm flex-col gap-1 lg:gap-2">
            <p className="">Dodatkowe usługi</p>
            <a
              className="opacity-50 hover:opacity-80 cursor-pointer transition duration-300 ease-in"
              href="#"
            >
              Aplikacje internetowe dla firm
            </a>
            <a
              className="opacity-50 hover:opacity-80 cursor-pointer transition duration-300 ease-in"
              href="#"
            >
              Szybkie serwery dla firm
            </a>
            <a
              className="opacity-50 hover:opacity-80 cursor-pointer transition duration-300 ease-in"
              href="#"
            >
              Tanie domeny internetowe
            </a>
          </div>
          <div className="flex text-sm flex-col gap-1 lg:gap-2">
            <p className="">Przydatne linki</p>
            <a
              className="opacity-50 hover:opacity-80 cursor-pointer transition duration-300 ease-in"
              href="/"
            >
              Home
            </a>
            <a
              className="opacity-50 hover:opacity-80 cursor-pointer transition duration-300 ease-in"
              href="/#cennik"
            >
              Cennik
            </a>
            <a
              className="opacity-50 hover:opacity-80 cursor-pointer transition duration-300 ease-in"
              href="/kontakt"
            >
              Kontakt
            </a>
            <a
              className="opacity-50 hover:opacity-80 cursor-pointer transition duration-300 ease-in"
              href="/#faq"
            >
              FAQ
            </a>
          </div>
          <div className="flex text-sm flex-col gap-1 lg:gap-2">
            <p className="">Baza wiedzy</p>
            <a
              className="opacity-50 hover:opacity-80 cursor-pointer transition duration-300 ease-in"
              href="#"
            >
              Pierwsza konfiguracja
            </a>
            <a
              className="opacity-50 hover:opacity-80 cursor-pointer transition duration-300 ease-in"
              href="#"
            >
              Podstawowa obsługa
            </a>
            <a
              className="opacity-50 hover:opacity-80 cursor-pointer transition duration-300 ease-in"
              href="#"
            >
              Integracje
            </a>
          </div>
        </div>
        <div className="w-full mt-12 flex flex-col lg:flex-row items-center justify-between text-sm">
          <a
            href="#"
            className="opacity-50 hover:opacity-80 cursor-pointer transition duration-300 ease-in mb-4 lg:mb-0"
          >
            Filip Kania, 340 781, Politechnika Warszawska OKNO
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
