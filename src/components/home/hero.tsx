import { FaSliders } from "react-icons/fa6";
import { TbClick } from "react-icons/tb";

function Hero() {
  return (
    <>
      <section className="h-[85vh] lg:h-screen relative flex overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="w-full h-screen object-cover z-10"
          src="https://ifil-group-spaces.fra1.cdn.digitaloceanspaces.com/Projects/crew-core/hero-video.mp4"
        ></video>
        <div className="w-full h-full absolute z-20 bg-gradient-to-r from-black/90 from-20% to-transparent"></div>
        <div className="gradient-hero z-30"></div>
        <div className="absolute top-0 left-0 z-40 w-full h-full p-6 lg:p-24 flex flex-col items-start justify-center gap-6 text-left">
          <h1 className="text-3xl lg:text-7xl font-semibold text-white">
            Wszyscy kontrahenci<br></br>w jednym miejscu
          </h1>
          <h2 className="opacity-80 text-lg lg:text-2xl text-white max-w-[450px]">
            Zapewnij swojemu zespołowi wygodne narzędzie do zarządzania
            sprzedażą.
          </h2>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start gap-6">
            <a href="/demo">
              <button className="button-main text-base lg:text-lg">
                <span>Zamów demo</span>
                <TbClick />
              </button>
            </a>
            <a
              className="text-white flex flex-row items-center justify-start gap-2 text-lg hover:opacity-50 transition duration-300 ease-linear"
              href="#funkcje"
            >
              <FaSliders />
              <span>Poznaj funkcjonalności</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
