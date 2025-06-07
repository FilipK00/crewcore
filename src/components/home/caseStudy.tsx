import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}
const slides: Slide[] = [
  {
    id: 1,
    image:
      "https://ifil-group-spaces.fra1.cdn.digitaloceanspaces.com/Projects/crew-core/firma-marketingowa.jpeg",
    title: "Agencja Marketingowa",
    description:
      "Skutecznie śledź klientów i potencjalnych leadów, zarządzaj kontaktami oraz analizuj skuteczność kampanii.",
  },
  {
    id: 2,
    image:
      "https://ifil-group-spaces.fra1.cdn.digitaloceanspaces.com/Projects/crew-core/biuro-nieruchomosci.jpeg",
    title: "Biuro Nieruchomości",
    description:
      "Organizuj kontakty z właścicielami nieruchomości i potencjalnymi kupującymi, aby szybko finalizować transakcje.",
  },
  {
    id: 3,
    image:
      "https://ifil-group-spaces.fra1.cdn.digitaloceanspaces.com/Projects/crew-core/firma-rekrutacyjna.jpeg",
    title: "Firma Rekrutacyjna",
    description:
      "Zarządzaj relacjami z firmami oraz kandydatami, śledząc cały proces od pierwszego kontaktu do zatrudnienia.",
  },
  {
    id: 4,
    image:
      "https://ifil-group-spaces.fra1.cdn.digitaloceanspaces.com/Projects/crew-core/ecommerce.jpeg",
    title: "E-commerce",
    description:
      "Monitoruj klientów i leady, aby zidentyfikować najlepsze okazje do sprzedaży.",
  },
  {
    id: 5,
    image:
      "https://ifil-group-spaces.fra1.cdn.digitaloceanspaces.com/Projects/crew-core/firma-it.jpeg",
    title: "Firma IT",
    description:
      "Organizuj kontakty z klientami, śledź rozwój leadów i usprawniaj procesy wdrażania rozwiązań technologicznych.",
  },
  {
    id: 6,
    image:
      "https://ifil-group-spaces.fra1.cdn.digitaloceanspaces.com/Projects/crew-core/kancelaria-prawna.jpeg",
    title: "Kancelaria Prawna",
    description:
      "Zarządzaj klientami i przypadkami prawnymi, ułatwiając kontakt z kontrahentami i potencjalnymi klientami.",
  },
  {
    id: 7,
    image:
      "https://ifil-group-spaces.fra1.cdn.digitaloceanspaces.com/Projects/crew-core/firma-transportowa.jpeg",
    title: "Firma Transportowa",
    description:
      "Śledź relacje z kontrahentami oraz potencjalnymi klientami, aby lepiej zarządzać współpracami i ofertami.",
  },
  {
    id: 8,
    image:
      "https://ifil-group-spaces.fra1.cdn.digitaloceanspaces.com/Projects/crew-core/agencja-reklamowa.jpeg",
    title: "Agencja Reklamowa",
    description:
      "Zarządzaj leadami i kontaktami, aby skutecznie koordynować projekty reklamowe i budować długotrwałe relacje z klientami.",
  },
  {
    id: 9,
    image:
      "https://ifil-group-spaces.fra1.cdn.digitaloceanspaces.com/Projects/crew-core/firma-ubezpieczeniowa.jpeg",
    title: "Firma Ubezpieczeniowa",
    description:
      "Zarządzaj portfelem klientów i monitoruj leady w celu skutecznego pozyskiwania nowych kontrahentów.",
  },
  {
    id: 10,
    image:
      "https://ifil-group-spaces.fra1.cdn.digitaloceanspaces.com/Projects/crew-core/cleaning.jpeg",
    title: "Firma Sprzątająca",
    description:
      "Zarządzaj klientami, kontraktami i pozyskuj nowych klientów poprzez skuteczną organizację leadów.",
  },
  {
    id: 11,
    image:
      "https://ifil-group-spaces.fra1.cdn.digitaloceanspaces.com/Projects/crew-core/firma-budowlana.jpeg",
    title: "Firma Budowlana",
    description:
      "Organizuj relacje z inwestorami i dostawcami, aby usprawniać procesy zarządzania projektami i leadami.",
  },
  {
    id: 12,
    image:
      "https://ifil-group-spaces.fra1.cdn.digitaloceanspaces.com/Projects/crew-core/biuro-tlumaczen.jpeg",
    title: "Biuro Tłumaczeń",
    description:
      "Śledź projekty tłumaczeniowe, rozwijaj bazę klientów i buduj długoterminowe relacje z partnerami.",
  },
];

const CaseStudy: React.FC = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="px-6 lg:px-[5.5rem] pb-6 lg:pb-36 flex flex-col gap-6 lg:gap-12 bg-transparent z-20 relative mt-6 lg:mt-0">
      <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-2 lg:gap-12 px-2">
        <div className="flex flex-col items-start justify-center w-full gap-6">
          <h3 className="px-12 py-1 rounded-lg text-white bg-gradient-main text-sm flex flex-row items-center justify-center shadow-lg">
            • Dla kogo
          </h3>
          <h2 className="text-[3vh] lg:text-[5vh] leading-[1.2em] text-gray-700 text-left">
            Zaprojektowane dla
            <br />
            <span className="font-semibold color-gradient-main">
              małych i rozwijających się firm
            </span>
          </h2>
        </div>
        <div className="flex flex-col items-start justify-center w-full">
          <p className="text-base lg:text-lg text-gray-700 opacity-80 text-left w-full lg:max-w-[500px]">
            CrewCore kierowane jest do mniejszych firm handlowych oraz
            usługowych, które chcą zapanować nad swoją sprzedażą bez dużych
            nakładów finansowych.
          </p>
        </div>
      </div>
      <Slider {...settings} className="relative">
        {slides.map((slide) => (
          <div key={slide.id} className="px-4">
            <div className="bg-gradient-main rounded-xl border border-[#40B0E7] overflow-hidden">
              <div className="h-[350px]">
                <img
                  className="w-full h-full object-cover"
                  src={slide.image}
                  alt={slide.title}
                />
              </div>
              <div className="items-start justify-start flex flex-col p-6 gap-2 min-h-[175px]">
                <h5 className="text-white text-2xl font-semibold">
                  {slide.title}
                </h5>
                <p className="text-white text-left">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CaseStudy;
