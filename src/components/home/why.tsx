import { FaHandshake, FaEdit, FaCalendarAlt } from "react-icons/fa";

function Why() {
  return (
    <>
      <section
        id="dlaczego-warto"
        className="p-6 lg:px-24 flex flex-col items-start justify-start gap-6 lg:pb-36 relative z-20 bg-transparent"
      >
        <div className="rounded-xl bg-gradient-main p-6 lg:p-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-6 lg:gap-12 text-left">
          <div className="w-full lg:w-4/5 relative">
            <img
              className="rounded-xl drop-shadow-2xl"
              src="https://ifil-group-spaces.fra1.cdn.digitaloceanspaces.com/Projects/contractorflow-pl/box-3.webp"
              alt=""
            />
            <img
              className="rounded-xl drop-shadow-xl absolute bottom-24 -left-0 lg:-left-6"
              src="https://ifil-group-spaces.fra1.cdn.digitaloceanspaces.com/Projects/contractorflow-pl/box-2.webp"
              alt=""
            />
          </div>
          <div className="text-white w-full flex flex-col items-start justify-center gap-6">
            <h3 className="px-12 py-1 rounded-lg color-main bg-white text-sm flex flex-row items-center justify-center shadow-lg">
              • Dlaczego warto
            </h3>
            <h2 className="hidden lg:block text-white text-[3vh] lg:text-[5vh] leading-[1.2em] text-left">
              Zapanuj nad szansami sprzedaży
              <br />
              <span className="font-semibold text-white">
                i zwiększ dochód swojej marki.
              </span>
            </h2>
            <h2 className="block lg:hidden text-white text-[3vh] lg:text-[5vh] leading-[1.2em] text-left">
              Zapanuj nad szansami sprzedaży{" "}
              <span className="font-semibold text-white">
                i zwiększ dochód swojej marki.
              </span>
            </h2>
            <div className="flex flex-col">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start gap-2">
                <FaEdit className="text-3xl lg:text-5xl scale-90 text-white" />
                <p className="text-base lg:text-lg">
                  <b>Szybka edycja kontrahentów.</b> Podgląd i modyfikacja
                  danych kontrahenta z jednego poziomu.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start gap-2">
                <FaHandshake className="text-3xl lg:text-5xl text-white" />
                <p className="text-base lg:text-lg">
                  <b>Współpraca na lini handlowiec-biuro.</b> Pozwól pracownikom
                  składać zamówienia i zgłoszenia z jednego panelu.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start gap-2">
                <FaCalendarAlt className="text-3xl lg:text-4xl scale-90 text-white" />
                <p className="text-base lg:text-lg">
                  <b>Kontroluj daty spotkań.</b> Zarządzaj datą następnego
                  kontaktu i sortuj kontrahentów po dacie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Why;
