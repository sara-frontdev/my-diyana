import Image from "next/image";

// components
import CustomeButton from "@/components/commonComponents/CustomeButton/CustomeButton";

const AboutLandingMobile = () => {
  return (
    <section
      className=" flex flex-col-reverse lg:hidden mt-8 sm:mt-16"
      aria-labelledby="about-landing-title-mobile"
    >
      <h2 id="about-landing-title-mobile" className="sr-only">
        در مورد مرکز ما
      </h2>

      <div className="mx-8 sm:mx-16">
        <h2 className="font-yekan-bold text-2xl text-customeBlack">
          درمورد مرکز ما
        </h2>
        <p className="text-customeBlack mt-4 leading-7 text-justify">
          ما در آکادمی کودک دیانا همواره درتلاش برای رشد درست واصولی دلبندتان ،
          هستیم. کودک شما درکنارما مسیر یادگیری مهارت ها شناخت هوش
          هشتگانه،ارتباط باگروه همسالان بازی و شادی را طی میکند
        </p>
        <p className="text-customeBlack leading-7">
          ما اینجا هستیم تا با آموزش های غیر مستقیم در دل بازی،موسیقی و فعالیت
          های دست ورزی وریتمیک، اجرای کار دستی ها و نقاشی ، بازی های هدفمند
          گروهی،کودکانی خلاق،بااعتماد به نفس،مستقل وشادرا به اجتماع تحویل دهیم
        </p>

        <div className="w-[132px] mt-4">
          <CustomeButton href="/" text="اطلاعات بیشتر" />
        </div>
      </div>

      <div className=" flex justify-center text-center">
        <Image
          src="/images/landing/about/aboutMobile.webp"
          alt="در مورد مرکز آکادمی دیانا"
          width={500}
          height={500}
          className="w-[500px] h-auto object-contain px-8"
        />
      </div>
    </section>
  );
};

export default AboutLandingMobile;
