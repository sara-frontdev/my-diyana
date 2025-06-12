import Image from "next/image";

// componnets
import QuickAccess from "./QuickAccess/QuickAccess";
import SocialLinks from "./SocialLinks/SocialLinks";

const Footer = () => {
  return (
    <footer>
      <div className="relative w-full  2xl:w-[1400px] mx-auto ">
        <Image
          src="/images/footer/footer.webp"
          alt="بک گراند فوتر"
          width={1920}
          height={550}
          sizes="100vw"
          className="w-full h-auto"
        />
        <div className="absolute bottom-[50%] xl:bottom-[75%] left-1/2 -translate-x-1/2 flex flex-row gap-4 sm:gap-6 items-start">
          <QuickAccess
            titleQuickLink="دسترسی سریع"
            type="quick"
            arialabel="دسترسی سریع"
          />
          <QuickAccess
            titleQuickLink="خدمات مشتریان"
            type="customer"
            arialabel="خدمات مشتریان"
          />
        </div>

        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
