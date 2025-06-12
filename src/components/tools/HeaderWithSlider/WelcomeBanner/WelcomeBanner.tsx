import Image from "next/image";

// components
import CustomeButton from "@/components/commonComponents/CustomeButton/CustomeButton";

const WelcomeBanner = () => {
  return (
    <>
      <div className="relative w-full">
        <Image
          src="/images/header/childerenBack.webp"
          alt="تصویر هدر"
          width={1920}
          height={550}
          sizes="100vw"
          priority
          className="object-contain w-full"
        />

        {/* متن روی تصویر */}
        <div className="absolute top-[96%] sm:top-[90%] 2xl:top-[94%] left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-yekan-fat text-customeBlack">
            به آکادمی کودک دیانا، بهشت کودکان خوش آمدید
          </h1>
        </div>

        <div className="absolute top-[242px] sm:top-[98%] 2xl:top-[103%] left-1/2 transform -translate-x-1/2 w-full flex justify-center  z-50">
          <CustomeButton href="/login" text="ثبت نام آنلاین" />
        </div>
      </div>
    </>
  );
};

export default WelcomeBanner;
