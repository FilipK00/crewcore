import Footer from "../components/common/footer";
import HeaderBackground from "../components/common/headerBackground";
import PolitykaPrywatnosci from "../components/documents/politykaPrywatnosci";

function DocumentPolitykaPrywatnosci() {
  return (
    <>
      <HeaderBackground />
      <div className="relative">
        <div className="gradient-main w-screen h-screen z-10 fixed top-0 left-0"></div>
        <main className="z-50 relative">
          <div className="max-w-[800px] mx-auto py-12 lg:py-24 px-6">
            <PolitykaPrywatnosci />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default DocumentPolitykaPrywatnosci;
