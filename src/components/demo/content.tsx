import { IoIosMail } from "react-icons/io";
import ContactForm from "./form";

function Content() {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 lg:p-24 z-20 bg-transparent relative">
        <div className="flex flex-col items-start justify-center lg:gap-6">
          <h1 className="px-12 py-1 rounded-lg text-white bg-gradient-main text-sm flex flex-row items-center justify-center shadow-lg mb-6 lg:mb-0">
            • Demo
          </h1>
          <h2 className="text-[3vh] lg:text-[4vh] leading-[1.2em] text-gray-700 text-left mb-2 lg:mb-0">
            Zamów bezpłatną
            <br />
            <span className="font-semibold color-gradient-main">
              wersję demonstracyjną
            </span>
          </h2>
          <p className="text-lg text-gray-700 opacity-80 text-left w-full lg:w-3/4 mb-6 lg:mb-0">
            Skorzystaj z 14-dniowej wersji próbnej!<br></br>
            <strong>Bez</strong> karty płatniczej. <strong>Bez</strong>{" "}
            zobowiązań.
          </p>
          <a href="mailto:hello@contractorflow.pl">
            <button className="button-main">
              <IoIosMail className="text-xl" />
              <span>hello@contractorflow.pl</span>
            </button>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center">
          <ContactForm />
        </div>
      </section>
    </>
  );
}

export default Content;
