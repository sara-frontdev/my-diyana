import Image from "next/image";

// components
import TitleLanding from "@/components/commonComponents/TItleLanding/TitleLanding";
import CustomCloudButton from "@/components/commonComponents/Button/CustomCloudButton/CustomCloudButton";

const AboutLandingLaptop = () => {
  return (
    <>
      <section
        className=" hidden lg:grid lg:grid-cols-12 items-center mx-auto  xl:w-[1200px] lg:px-16 mt-44"
        aria-labelledby="about-landing-title-laptop"
      >
        <h2 id="about-landing-title-laptop" className="sr-only">
          در مورد مرکز ما
        </h2>

        <div className="col-span-6">
          <TitleLanding>درمورد مرکز ما</TitleLanding>

          <p className="text-customeBlack mt-4 leading-7 text-justify">
            ما در آکادمی کودک دیانا همواره درتلاش برای رشد درست واصولی دلبندتان
            ، هستیم. کودک شما درکنارما مسیر یادگیری مهارت ها شناخت هوش
            هشتگانه،ارتباط باگروه همسالان بازی و شادی را طی میکند
          </p>
          <p className="text-customeBlack leading-7">
            ما اینجا هستیم تا با آموزش های غیر مستقیم در دل بازی،موسیقی و فعالیت
            های دست ورزی وریتمیک، اجرای کار دستی ها و نقاشی ، بازی های هدفمند
            گروهی،کودکانی خلاق،بااعتماد به نفس،مستقل وشادرا به اجتماع تحویل دهیم
          </p>

          <div className="w-[132px] mt-4">
            <CustomCloudButton href="/" text="اطلاعات بیشتر" />
          </div>
        </div>

        <div className="col-span-6 flex justify-center  text-justify">
          <Image
            src="/images/landing/about/about.webp"
            alt="در مورد مرکز آکادمی دیانا"
            width={500}
            height={500}
            className="object-contain w-[500px] h-[500px]"
          />
        </div>
      </section>
    </>
  );
};

export default AboutLandingLaptop;
