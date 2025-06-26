import { FC, ReactNode } from "react";
import Image from "next/image";

import topImage from "$/images/auth/icon1.webp";
import bottomImage from "$/images/auth/icon2.webp"; // عکس پایین

import pic1 from "$/images/auth/pic1.webp";
import pic2 from "$/images/auth/pic2.webp";
import pic3 from "$/images/auth/pic3.webp";

interface IPropType {
  children: ReactNode;
}

const AuthLayout: FC<IPropType> = ({ children }): JSX.Element => {
  return (
    <section className="h-screen flex flex-col md:flex-row-reverse bg-white     custome2xl1:w-[1400px] custome2xl1:mx-auto ">
      {/*  سمت چپ (فرم لاگین/ثبت‌نام با عکس بالا و پایین) */}
      <section className="w-full lg:w-1/2 h-full flex flex-col">
        <div className="relative w-full h-1/3">
          <Image
            src={pic2.src}
            alt="تصویر تزئینی بالای فرم ورودهمراه با لوگوی مهد کودک دیانا"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative w-full h-2/3">
          <Image
            src={pic3.src}
            alt="پس‌زمینه فرم ورود با المان‌های گرافیکی"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 flex justify-center items-center px-4">
            <h1 className="text-xl font-bold text-center mb-4">
              ورود به پنل کاربری دیانا
            </h1>
            <main className="w-full max-w-md p-6">{children}</main>
          </div>
        </div>
      </section>

      {/* سمت راست (تصویر مستقل یا هر چیز دیگر) */}
      <section className="w-full lg:w-1/2 h-[300px] md:h-[600px] lg:h-full relative hidden md:flex">
        <Image
          src={pic1.src}
          alt="تصویر پس‌زمینه صفحه لاگین مهد کودک دیانا"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover" // ❗ تغییر این خط
        />
      </section>
    </section>
  );
};

export { AuthLayout };
