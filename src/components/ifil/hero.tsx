import { IoIosMail } from "react-icons/io";
import { TbClick } from "react-icons/tb";

function Hero() {
  return (
    <>
      <section className="h-[90vh] lg:h-screen relative flex overflow-hidden">
        <video
          src="https://ifil-group-spaces.fra1.cdn.digitaloceanspaces.com/Projects/2024/ifil-pl/Home/herovideo-speedup.mp4"
          className="w-full h-screen object-cover z-10"
          loop
          autoPlay
          muted
        ></video>
        <div className="w-full h-full absolute z-20 bg-gradient-to-r from-black/90 from-20% to-transparent"></div>
        <div className="gradient-hero z-30"></div>
        <div className="absolute top-0 left-0 z-40 w-full h-full p-6 lg:p-24 flex flex-col items-start justify-center gap-6 text-left">
          <h1 className="text-7xl font-semibold text-white leading-[1.2em] hidden lg:block">
            Bezpłatny dostęp<br></br>do ContractorFlow
          </h1>
          <h1 className="text-3xl font-semibold text-white leading-[1.2em] block lg:hidden">
            Bezpłatny dostęp do ContractorFlow
          </h1>
          <h2 className="opacity-80 text-lg lg:text-xl text-white max-w-[600px]">
            Skorzystaj z usług iFil Group i zyskaj dożywotni dostęp do
            ContractorFlow za darmo! W naszej ofercie znajdziesz m.in. tworzenie
            sklepów internetowych, aplikacje internetowe i mobilne oraz strony
            internetowe.
          </h2>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start gap-6">
            <a href="https://ifil.pl">
              <button className="button-main text-base lg:text-lg">
                <span>Sprawdź usługi iFil Group</span>
                <TbClick />
              </button>
            </a>
            <a
              className="text-white flex flex-row items-center justify-start gap-2 text-lg hover:opacity-50 transition duration-300 ease-linear"
              href="/kontakt"
            >
              <IoIosMail />
              <span>Skontaktuj się z nami</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
