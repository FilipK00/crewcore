import Footer from "../components/common/footer";
import Header from "../components/common/header";
import ScrollToElement from "../components/common/scroll";
import CaseStudy from "../components/home/caseStudy";
import Control from "../components/home/control";
import { Cta } from "../components/home/cta";
import { Faq } from "../components/home/faq";
import Functions from "../components/home/functions";
import Hero from "../components/home/hero";
import Pricing from "../components/home/pricing";
import Why from "../components/home/why";

function Home() {
  return (
    <>
      <Header />
      <div className="relative">
        <div className="gradient-main w-screen h-screen z-10 fixed top-0 left-0"></div>
        <main>
          <ScrollToElement />
          <Hero />
          <Functions />
          <Why />
          <Control />
          <Cta />
          <Pricing />
          <CaseStudy />
          <Faq />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Home;
