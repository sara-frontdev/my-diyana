import Image from "next/image";

// components
import NavbarLogoDecoration from "./NavbarLogoDecoration/NavbarLogoDecoration";
import NavbarLaptop from "./NavbarLaptop/NavbarLaptop";
import NavbarMobile from "./NavbarMobile/NavbarMobile";

const Navbar = () => {
  return (
    <>
      <div className="absolute right-[95px] top-[9rem] z-30">
        <Image
          src="/images/header/abr.webp"
          alt="ابر گرافیکی"
          aria-hidden="true"
          role="presentation"
          width={200}
          height={200}
          priority
          className="h-auto w-auto"
        />
      </div>

      <div className="bg-[#ddf2fc] h-48">
        <div className="xs:mx-8 xs1:mx-8  xs2:mx-16 sm:mx-16 md:mx-20 pt-24 relative">
          <NavbarLogoDecoration />

          <NavbarLaptop />

          <NavbarMobile />
        </div>
      </div>
    </>
  );
};

export default Navbar;
