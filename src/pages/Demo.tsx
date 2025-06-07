import Footer from "../components/common/footer";
import HeaderBackground from "../components/common/headerBackground";
import Content from "../components/demo/content";

function Demo() {
  return (
    <>
      <HeaderBackground />
      <div className="relative">
        <div className="gradient-main w-screen h-screen z-10 fixed top-0 left-0"></div>
        <main>
          <Content />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Demo;
