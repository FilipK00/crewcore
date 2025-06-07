import { TbClick } from "react-icons/tb";

function Pricing() {
  return (
    <>
      <section
        id="cennik"
        className="p-6 lg:px-24 lg:pb-36 z-20 bg-transparent relative mt-6 lg:mt-0"
      >
        <div className="p-6 lg:p-12 rounded-xl bg-gradient-main flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 lg:gap-12">
          <div className="flex flex-col items-start justify-start gap-6 w-full">
            <h3 className="px-12 py-1 rounded-lg color-main bg-white text-sm flex flex-row items-center justify-center shadow-lg">
              • Cennik
            </h3>
            <h2 className="text-[3vh] lg:text-[5vh] leading-[1.2em] text-white text-left">
              Jasność i prostota
              <br />
              <span className="font-semibold text-white">
                zakupu oraz utrzymania.
              </span>
            </h2>
            <p className="text-white opacity-80 text-left max-w-[500px] text-base lg:text-lg">
              W kwocie 59 zł otrzymujesz cztery konta dla handlowców oraz konto
              administratora. Potrzebujesz więcej? Dodaj więcej stanowisk
              podczas składania zamówienia!
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white rounded-xl p-6 lg:p-12 w-full lg:w-1/2 relative overflow-hidden">
            <div className="absolute z-10 w-full h-full gradient-box-1"></div>
            <p className="font-semibold text-gray-700 opacity-80 mb-6 z-20">
              Jedna cena. Pełnia możliwości.
            </p>
            <p className="text-6xl color-main font-semibold z-20 color-gradient-main">
              59 zł
            </p>
            <p className="text-gray-700 opacity-80 mb-2 z-20 text-xs">
              miesięcznie
            </p>
            <p className="mb-6 color-gradient-main font-semibold text-2xl z-20">
              Za pięć stanowisk
            </p>
            <a href="/kontakt" className="z-20 mb-6">
              <button className="button-main">
                <span>Zamów demo</span>
                <TbClick />
              </button>
            </a>
            <p className="text-sm text-gray-700 opacity-80 z-20">
              Podana cena jest ceną netto. Płatne na rok z góry. Faktura VAT dla
              firm.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
