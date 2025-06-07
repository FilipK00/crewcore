import Footer from "../components/common/footer";
import HeaderBackground from "../components/common/headerBackground";
import RegulaminSerwisu from "../components/documents/regulaminSerwisu";

function DocumentRegulaminSerwisu() {
  return (
    <>
      <HeaderBackground />
      <div className="relative">
        <div className="gradient-main w-screen h-screen z-10 fixed top-0 left-0"></div>
        <main className="z-50 relative">
          <div className="max-w-[800px] mx-auto py-12 lg:py-24 px-6">
            <RegulaminSerwisu />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default DocumentRegulaminSerwisu;
