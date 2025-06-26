"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

// components
import NavbarLogoDecoration from "./NavbarLogoDecoration/NavbarLogoDecoration";
import NavbarLaptop from "./NavbarLaptop/NavbarLaptop";
import NavbarMobile from "./NavbarMobile/NavbarMobile";

const Navbar = () => {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  return (
    <>
      {isLandingPage && (
        <div className=" absolute top-[8rem] sm:top-[9rem] right-16 sm:right-[170px] md:right-[110px] xl:right-[170px] z-30">
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
      )}

      <div className={` ${isLandingPage ? "bg-[#ddf2fc]" : "bg-white"} h-48 `}>
        <div className="xs:mx-8 xs1:mx-8  xs2:mx-16 sm:mx-16 md:mx-20 pt-24 relative custome2xl:w-[1400px] custome2xl:mx-auto">
          <NavbarLogoDecoration />

          <NavbarLaptop />

          <NavbarMobile />
        </div>
      </div>
    </>
  );
};

export default Navbar;
