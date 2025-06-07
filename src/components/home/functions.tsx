function Functions() {
  return (
    <>
      <section
        id="funkcje"
        className="p-6 lg:p-24 relative flex flex-col items-center justify-center gap-12 z-20 bg-transparent"
      >
        <div className="flex flex-col items-center justify-center">
          <h3 className="px-12 py-1 rounded-lg text-white bg-gradient-main mb-6 text-sm flex flex-row items-center justify-center shadow-lg">
            • Funkcje
          </h3>
          <h2 className="text-[3vh] lg:text-[5vh] leading-[1.2em] text-gray-700">
            Najważniejsze funkcje
            <br />
            <span className="font-semibold color-gradient-main">
              bez zbędnych elementów
            </span>
          </h2>
        </div>
        <div className="relative flex w-full items-center justify-center overflow-hidden pb-12 lg:pb-24">
          <img
            src="https://ifil-group-spaces.fra1.cdn.digitaloceanspaces.com/Projects/crew-core/funkcjonalnosci-crm-notatki.webp"
            className="rounded-xl w-[24vw] absolute top-6 left-12 drop-shadow-md lg:drop-shadow-xl"
          ></img>
          <img
            src="https://ifil-group-spaces.fra1.cdn.digitaloceanspaces.com/Projects/crew-core/full-ui.webp"
            className="rounded-xl w-[60vw] shadow-md lg:shadow-2xl"
          ></img>
          <img
            src="https://ifil-group-spaces.fra1.cdn.digitaloceanspaces.com/Projects/crew-core/funkcjonalnosci-tabela.webp"
            className="rounded-xl w-[35vw] absolute top-24 right-12 shadow-md lg:shadow-2xl"
          ></img>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 w-full px-0 lg:px-12 lg:-translate-y-12">
          <div className="flex flex-col gap-2 text-left">
            <p className="color-gradient-main font-semibold text-xl lg:text-2xl">
              Baza klientów
            </p>
            <p className="opacity-80 text-base lg:text-lg">
              Wszyscy Twoi obecni oraz potencjalni Klienci w jednym miejscu.
              Skorzystaj z wyszukiwarki, filtrowania oraz sortowania.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-left">
            <p className="color-gradient-main font-semibold text-xl lg:text-2xl">
              System notatek
            </p>
            <p className="opacity-80 text-base lg:text-lg">
              Oś czasu wszystkich działań budujących realację z klientem.
              Kontroluj współpracę dzięki notatnikowi.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-left">
            <p className="color-gradient-main font-semibold text-xl lg:text-2xl">
              Integracja z GUS
            </p>
            <p className="opacity-80 text-base lg:text-lg">
              Pobieraj wszystkie dane o kliencie tylko na podstawie NIP-u.
              Uwolnij czas swoich handlowców od przepisywania danych.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Functions;
