import Image from "next/image";

// components
import CustomCloudButton from "@/components/commonComponents/Button/CustomCloudButton/CustomCloudButton";

// images
import childeren from "$/images/header/new1.webp";

const WelcomeBanner = () => {
  return (
    <div>
      <div className="relative w-full">
        <Image
          src={childeren.src}
          alt="تصویر هدر اول"
          width={1920}
          height={550}
          sizes="100vw"
          priority
          className="object-contain w-full"
        />

        <div
          className="absolute
               
                 xxs: bottom-[-8.5rem]  xxs1:bottom-[-6.5rem] xs1:bottom-[-6.5rem] xs2:bottom-[-6.5rem]
                sm:bottom-[-6.5rem] md:bottom-[-5.5rem] lg:bottom-[-3.5rem] xl:bottom-0
                left-1/2 -translate-x-1/2
                text-center z-10
                w-[87%] sm:w-full px-4"
        >
          <h1 className="text-base sm:text-[1.8rem] lg:text-[2rem] 2xl:text-4xl font-yekan-fat text-customeBlack leading-relaxed">
            به آکادمی کودک دیانا، بهشت کودکان خوش آمدید
          </h1>

          <div className="mt-[-1rem] sm:mt-[1rem]">
            <CustomCloudButton href="/login" text="ثبت نام آنلاین" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
