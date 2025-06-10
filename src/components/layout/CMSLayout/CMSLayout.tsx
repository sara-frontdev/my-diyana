// components
import HeaderWithSlider from "@/components/tools/HeaderWithSlider/HeaderWithSlider ";
import Footer from "@/components/tools/Footer/Footer";

const CMSLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HeaderWithSlider />

      <main id="main-content" role="main">
        {children}
      </main>

      <Footer />
    </>
  );
};

export { CMSLayout };
