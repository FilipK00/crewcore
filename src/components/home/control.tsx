import { TbClick } from "react-icons/tb";
import { CompareTablet } from "../additional/compareTablet";

function Control() {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 lg:px-24 z-20 bg-transparent relative mt-12 lg:mt-0">
        <div className="flex flex-col items-start justify-center lg:gap-6">
          <h3 className="px-12 py-1 rounded-lg text-white bg-gradient-main text-sm flex flex-row items-center justify-center shadow-lg mb-6 lg:mb-0">
            • Migracja danych
          </h3>
          <h2 className="text-[3vh] lg:text-[5vh] leading-[1.2em] text-gray-700 text-left mb-2 lg:mb-0">
            Uwolnij swoich handlowców
            <br />
            <span className="font-semibold color-gradient-main">
              od przeszukiwania arkuszy
            </span>
          </h2>
          <p className="text-base lg:text-lg text-gray-700 opacity-80 text-left w-full lg:w-3/4 mb-6 lg:mb-0">
            Dostarcz swojej firmie jedno spójne narzędzie, które pozwoli na
            zarządzanie bazą Twoich Klientów oraz potencjalnymi szansami
            sprzedaży. Skorzystaj z naszej bezpłatnej migracji danych do
            CrewCore. Przeniesiemy listę Twoich wszystkich Klientów!
          </p>
          <a href="/kontakt">
            <button className="button-main">
              <span>Zleć migrację danych</span>
              <TbClick />
            </button>
          </a>
        </div>
        <div className="mt-6 lg:mt-0">
          <CompareTablet />
        </div>
      </section>
    </>
  );
}

export default Control;
