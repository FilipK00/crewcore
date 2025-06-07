import Footer from "../components/common/footer";
import HeaderAdditional from "../components/common/headerAdditional";
import Hero from "../components/ifil/hero";

function GroupCustomers() {
  return (
    <>
      <HeaderAdditional />
      <div className="relative">
        <div className="gradient-main w-screen h-screen z-10 fixed top-0 left-0"></div>
        <main>
          <Hero />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default GroupCustomers;
