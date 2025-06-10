import Image from "next/image";
import Link from "next/link";

// logo
import logo from "$/logo.png";

const NavbarLogoDecoration = () => {
  return (
    <>
      <div className="absolute top-[5rem]  w-[52%] left-[50%] h-2 bg-[#cbd2ea] rounded-full z-0" />

      <div className="absolute top-[5rem]   w-[52%] right-[50%] h-2 bg-[#cbd2ea] rounded-full z-0" />

      {/* نیم دایره لوگو */}
      <div
        className="flex items-center justify-center 
                      absolute xs:left-[62.5%] xs1:left-[57%] xs2:left-[55.5%] sm:left-[58%] md:left-[57%] lg:left-[55%] xl:left-[53%]
                      w-[5rem] h-[2rem]
                      md:w-[6.2rem] md:h-[2.5rem] 
                      transform -translate-x-full
                      rounded-b-full border-l border-r border-b border-customeBlack
                      z-20 bg-[#e2f5fc]"
      >
        <Link
          href="/"
          aria-label="بازگشت به صفحه اصلی"
          className=" w-full h-full absolute right-[1px] bottom-[49px] sm:right-0 sm:bottom-[48px] md:bottom-[60px] xl:bottom-[61px]"
        >
          <Image
            src={logo.src}
            alt=" لوگوی آکادمی کودک دیانا"
            width="100"
            height="100"
            priority
            style={{ height: "auto" }}
            className="object-cover"
          />
        </Link>
      </div>
    </>
  );
};

export default NavbarLogoDecoration;
