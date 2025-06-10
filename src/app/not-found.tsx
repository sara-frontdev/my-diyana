import { FC } from "react";

import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

// images
import notFound from "$/images/general/404.webp";

export const metadata: Metadata = {
  title: "صفحه یافت نشد | مهد کودک دیانا",
  description: "صفحه مورد نظر شما یافت نشد. به صفحه اصلی بازگردید.",
};

const NotFoundPage: FC = (): JSX.Element => {
  return (
    <section
      role="main"
      className="flex flex-col items-center justify-center min-h-screen px-4"
    >
      <div className="w-full flex justify-center">
        <Image
          src={notFound}
          alt="صفحه مورد نظر یافت نشد"
          width={400}
          height={400}
          quality={100}
          priority
          className="object-cover rounded-xl animate-floatUpDown"
          sizes="(max-width: 640px) 80vw, 500px"
        />
      </div>

      <div className="flex flex-col justify-center items-center mt-4">
        <h1 className="text-3xl font-semibold text-gray-800 text-center">
          صفحه مورد نظر شما یافت نشد
        </h1>
        <p className="text-gray-500 mt-2 text-center max-w-md">
          متأسفیم! آدرسی که دنبال آن هستید وجود ندارد یا ممکن است جابه‌جا شده
          باشد.
        </p>
        <Link
          href="/"
          aria-label="بازگشت به صفحه اصلی"
          className="inline-block bg-customeBlue text-white px-6 py-2 rounded-lg mt-5 hover:bg-customeOrange transition"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
