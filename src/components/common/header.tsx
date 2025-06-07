import { Link } from "react-router-dom";
import { TbClick } from "react-icons/tb";
import { FaQuestionCircle, FaRegUser } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoIosCloseCircle, IoMdLogIn } from "react-icons/io";

const MarqueeAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
`;

const MarqueeContent = styled.div<{ duration: number }>`
  display: inline-block;
  animation: ${MarqueeAnimation} linear infinite;
  animation-duration: ${({ duration }) => duration}s;
`;

function Header() {
  const [header, setHeader] = useState(true);
  const [mobileHeader, setMobileHeader] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setHeader(false);
  };

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      const speed = 50;
      const animationDuration = marquee.scrollWidth / speed;
      marquee.style.animationDuration = `${animationDuration}s`;
    }
  }, []);

  return (
    <>
      <div className="lg:hidden w-full bg-white p-2 flex flex-row items-center justify-between z-50 relative">
        <MarqueeContainer>
          <MarqueeContent ref={marqueeRef} duration={50}>
            <div className="flex flex-row items-center justify-center gap-2">
              <p>Projekt realizowany na potrzeby przedmiotu "Techniki Internetu w biznesie internetowym"</p>
            </div>
          </MarqueeContent>
        </MarqueeContainer>
      </div>
      <div className="py-2 bg-gradient-main z-50 relative hidden lg:flex flex-row items-center justify-center gap-2">
        <p className="text-white">
          Projekt realizowany na potrzeby przedmiotu "Techniki Internetu w biznesie internetowym"
        </p>
      </div>
      <header className="hidden lg:flex absolute w-full top-12 left-0 z-50">
        <div className="blur-header absolute z-10"></div>
        <div className="absolute flex flex-row items-center justify-between px-24 py-4 w-full">
          <a className="" title="Strona główna" href="/">
            <img
              src="https://ifil-group-spaces.fra1.cdn.digitaloceanspaces.com/Projects/crew-core/white_1.png"
              alt=""
              className="h-14"
            />
          </a>
          <nav className="flex flex-row items-center justify-center gap-6">
            <Link
              to="/#funkcje"
              className="text-white hover:opacity-40 transition duration-300 ease-linear text-lg opacity-80"
            >
              Funkcje
            </Link>
            <Link
              to="/#dlaczego-warto"
              className="text-white hover:opacity-40 transition duration-300 ease-linear text-lg opacity-80"
            >
              Dlaczego warto
            </Link>
            <Link
              to="/#cennik"
              className="text-white hover:opacity-40 transition duration-300 ease-linear text-lg opacity-80"
            >
              Cennik
            </Link>
            <Link
              to="/kontakt"
              className="text-white hover:opacity-40 transition duration-300 ease-linear text-lg opacity-80"
            >
              Kontakt
            </Link>
          </nav>
          <a href="/kontakt">
            <button className="button-main">
              <span>Zamów demo</span>
              <TbClick />
            </button>
          </a>
        </div>
      </header>
      <header className="lg:hidden w-full bg-main p-2 flex flex-row items-center justify-between z-50 relative">
        <img
          className="h-12"
          src="https://ifil-group-spaces.fra1.cdn.digitaloceanspaces.com/Projects/crew-core/white_1.png"
          alt=""
        />
        <CgMenuRightAlt
          onClick={() => setMobileHeader(true)}
          className="cursor-pointer text-4xl text-white"
        />
      </header>
      {mobileHeader && (
        <div className="fixed w-screen h-screen bg-main top-0 z-[99999999999]">
          <nav className="w-full h-full relative flex flex-col items-center justify-center gap-2 p-12">
            <IoIosCloseCircle
              onClick={() => setMobileHeader(false)}
              className="cursor-pointer text-4xl text-white top-2 right-2 absolute"
            />
            <Link
              onClick={() => setMobileHeader(false)}
              to="/#funkcje"
              className="text-white hover:opacity-40 transition duration-300 ease-linear text-lg opacity-80"
            >
              Funkcje
            </Link>
            <Link
              onClick={() => setMobileHeader(false)}
              to="/#dlaczego-warto"
              className="text-white hover:opacity-40 transition duration-300 ease-linear text-lg opacity-80"
            >
              Dlaczego warto
            </Link>
            <Link
              onClick={() => setMobileHeader(false)}
              to="/#cennik"
              className="text-white hover:opacity-40 transition duration-300 ease-linear text-lg opacity-80"
            >
              Cennik
            </Link>
            <Link
              onClick={() => setMobileHeader(false)}
              to="/kontakt"
              className="text-white hover:opacity-40 transition duration-300 ease-linear text-lg opacity-80"
            >
              Kontakt
            </Link>
            <a
              className="w-full mt-6"
              onClick={() => setMobileHeader(false)}
              href="/demo"
            >
              <button className="button-white flex flex-row items-center text-sm justify-center gap-2 uppercase tracking-[1px] w-full">
                <span>Zamów demo</span>
                <TbClick className="color-main text-lg" />
              </button>
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

export default Header;
