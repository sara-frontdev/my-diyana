import Image from "next/image";

const DianaActivitiesMobile = () => {
  return (
    <div
      className="relative w-full flex justify-center"
      aria-labelledby="diana-activities-mobile-title"
    >
      <div className="flex flex-col lg:hidden   mt-[-14rem] z-10">
        {/* 1 */}
        <article
          className="relative"
          role="region"
          aria-labelledby="title-activity"
        >
          <div className="relative   xxs2:w-[300px] xs3:w-[350px] sm:w-[400px]  h-[350px] xxs2:top-[3.5rem] xs3:top-[2rem] sm:top-[2rem]">
            <Image
              src="/images/landing/DianaActivitiesSection/blueMobile.webp"
              alt=""
              aria-hidden="true"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 80vw, 500px"
            />
          </div>

          <div className="absolute xxs:top-[58%] xs3:top-[50%] sm:top-[50%] max-w-[263px]  left-0 right-0  mx-auto">
            <h3
              className="text-2xl text-customeBlack font-yekan-fat text-center mb-2"
              id="title-activity"
            >
              بازی و تفریح
            </h3>
            <p className="text-base text-customeBlack text-center">
              بازی در اوایل کودکی بهترین پایه برای موفقیت در مدرسه هست. تمام
              مهارت‌های یادگیری را توضیح می‌دهد.
            </p>
          </div>
        </article>

        {/* 2 */}
        <article
          className="relative"
          role="region"
          aria-labelledby="title-activity-2"
        >
          <div className="relative xxs2:w-[300px] xs3:w-[350px] sm:w-[400px]  h-[350px]">
            <Image
              src="/images/landing/DianaActivitiesSection/yellowMobile.webp"
              alt=""
              aria-hidden="true"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 80vw, 500px"
            />
          </div>

          <div className="absolute top-[45%] max-w-[215px]  left-0 right-0   mx-auto">
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
          <div className="relative xxs2:w-[300px] xs3:w-[350px] sm:w-[400px]  h-[350px] xxs2:top-[-3.5rem] xs3:top-[-2rem] sm:top-[-2rem]">
            <Image
              src="/images/landing/DianaActivitiesSection/pinkMobile.webp"
              alt=""
              aria-hidden="true"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 80vw, 500px"
            />
          </div>

          <div className="absolute  xxs:top-[36%] xs3:top-[50%] sm:top-[50%] max-w-[263px]  left-0 right-0   mx-auto">
            <h3
              className="text-2xl text-customeBlack font-yekan-fat text-center mb-2"
              id="title-activity-3"
            >
              آموزش و پرورش
            </h3>
            <p className="text-base text-customeBlack text-center">
              مرکزما فعالیت های آموزشی بسیاری رابرای درگیرنگه داشتن فرزندان شما
              ارائه می دهد
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default DianaActivitiesMobile;
