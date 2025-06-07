"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/useOutsideClick";

export function Faq() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <section id="faq" className="z-50 bg-transparent relative lg:pb-12">
      <div className="flex flex-col items-center justify-center">
        <h3 className="px-12 py-1 rounded-lg text-white bg-gradient-main mb-6 text-sm flex flex-row items-center justify-center shadow-lg">
          • FAQ
        </h3>
        <h2 className="text-[3vh] lg:text-[5vh] leading-[1.2em] text-gray-700">
          Poznaj odpowiedzi na
          <br />
          <span className="font-semibold color-gradient-main">
            najczęściej zadawane pytania
          </span>
        </h2>
      </div>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white bg-gradient-main sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>
              <div className="z-50">
                <div className="flex flex-row justify-center items-center pt-6 px-4 z-50">
                  <motion.h3
                    layoutId={`title-${active.title}-${id}`}
                    className="font-bold text-white text-lg lg:text-xl"
                  >
                    {active.title}
                  </motion.h3>
                </div>
                <div className="relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-white p-6 text-sm leading-[1.5em]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-[1000px] mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-[#e1f5ff] hover:shadow-lg transition duration-300 ease-linear rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="color-gradient-main text-lg lg:text-xl text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="button-main mt-4 md:mt-0 text-sm lg:text-base"
            >
              Sprawdź
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </section>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    title: "Ilu pracowników może korzystać z systemu?",
    src: "https://ifil-group-spaces.fra1.cdn.digitaloceanspaces.com/Projects/crew-core/faq-ilosc-pracownikow.jpeg",
    content: () => {
      return (
        <p>
          Oprogramowanie nie posiada limitu pracowników. W podstawowym pakiecie
          otrzymujesz 5 stanowisk w kwocie 59 zł miesięcznie. Ilość stanowisk
          możesz zwiększyć w każdej chwili.
        </p>
      );
    },
  },
  {
    title: "Jak wygląda płatność?",
    src: "https://ifil-group-spaces.fra1.cdn.digitaloceanspaces.com/Projects/crew-core/faq-jak-wyglada-platnosc.jpeg",
    content: () => {
      return (
        <p>
          Po przetestowaniu demo wystarczy, że klikniesz przycisk "Zamawiam" i
          uzupełnisz dane firmy. Na swojego maila otrzymasz fakturę, po której
          opłaceniu uzyskasz dostęp do swojego konta.
        </p>
      );
    },
  },
  {
    title: "Czy dane firm pobierają się automatycznie?",
    src: "https://ifil-group-spaces.fra1.cdn.digitaloceanspaces.com/Projects/crew-core/faq-dane-firm.jpeg",
    content: () => {
      return (
        <p>
          Tak. CrewCore posiada integrację z bazą GUS. Dzięki tej
          funkcjonalności wystarczy wprowadzić NIP a pozostałe dane zostaną
          pobrane z bazy.
        </p>
      );
    },
  },
  {
    title: "Czy mogę zamówić dodatkową funkcjonalność?",
    src: "https://ifil-group-spaces.fra1.cdn.digitaloceanspaces.com/Projects/crew-core/faq-funkcjonalnosci.png",
    content: () => {
      return (
        <p>
          Tak. Dodatkowe funkcjonalności wyceniane są indywidualnie. W tym celu
          skontaktuj się z nami na adres hello@crewcore.pl.
        </p>
      );
    },
  },
];
