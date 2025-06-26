import Image from "next/image";

const DianaActivitiesLaptop = () => {
  return (
    <section
      aria-labelledby="diana-activities-laptop-title"
      className="relative w-full flex justify-center"
    >
      <div className="hidden lg:flex  lg:flex-row-reverse justify-center mt-[-15rem] z-10">
        {/* 1 */}
        <article
          className="relative"
          role="region"
          aria-labelledby="title-activity-1"
        >
          <div className="relative w-[350px] lg:w-[340px] xl:w-[400px] h-[350px] lg:right-[-3rem]">
            <Image
              src="/images/landing/DianaActivitiesSection/1.webp"
              alt=""
              aria-hidden="true"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 80vw, 500px"
            />
          </div>

          <div className="absolute top-[42%] max-w-[215px] left-[63px] right-[13px]  mx-auto">
            <h3
              className="text-2xl text-customeBlack font-yekan-fat text-center mb-2"
              id="title-activity-1"
            >
              آموزش و پرورش
            </h3>
            <p className="text-base text-customeBlack text-center">
              مرکزما فعالیت های آموزشی بسیاری رابرای درگیرنگه داشتن فرزندان شما
              ارائه می دهد
            </p>
          </div>
        </article>

        {/* 2 */}
        <article
          className="relative"
          role="region"
          aria-labelledby="title-activity-2"
        >
          <div className="relative w-[350px]  lg:w-[340px] xl:w-[400px] h-[350px]">
            <Image
              src="/images/landing/DianaActivitiesSection/2.webp"
              alt=""
              aria-hidden="true"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 80vw, 500px"
            />
          </div>

          <div className="absolute top-[42%] max-w-[215px] left-[48px] right-[51px]  mx-auto">
            <h3
              className="text-2xl text-customeBlack font-yekan-fat text-center mb-2"
              id="title-activity-2"
            >
              فعالیت ها
            </h3>
            <p className="text-base text-customeBlack text-center">
              فرزندانتان با فعالیت های ما به چالش کشیده و توسعه خواهد یافت
              خلاقیت تخیل ، مهارت های تفکر و مهارت های اجتماعی فرزند شما
            </p>
          </div>
        </article>

        {/* 3 */}
        <article
          className="relative"
          role="region"
          aria-labelledby="title-activity-3"
        >
          <div className="relative  w-[350px]  lg:w-[340px] xl:w-[400px] h-[350px] lg:right-[3rem]">
            <Image
              src="/images/landing/DianaActivitiesSection/3.webp"
              alt=""
              aria-hidden="true"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 80vw, 500px"
            />
          </div>

          <div className="absolute top-[42%] max-w-[215px] left-[10px] right-[51px]  mx-auto">
            <h3
              className="text-2xl text-customeBlack font-yekan-fat text-center mb-2"
              id="title-activity-3"
            >
              بازی و تفریح
            </h3>
            <p className="text-base text-customeBlack text-center">
              بازی در اوایل کودکی بهترین پایه برای موفقیت در مدرسه هست. تمام
              مهارت‌های یادگیری را توضیح می‌دهد.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default DianaActivitiesLaptop;
