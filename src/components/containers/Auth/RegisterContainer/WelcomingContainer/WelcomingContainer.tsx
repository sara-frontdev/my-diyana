"use client";

//base
import { FC, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

//lib
import Confetti from "react-confetti";
import Countdown from "react-countdown";

import { FiLogIn } from "react-icons/fi";
import { FaHandHolding } from "react-icons/fa";

//core
import { authUrlEnum } from "@/core/enums/auth-url.enum";
import { projectConfig } from "@/configs/project.config";

//assets
import welcoming_logo from "$/images/auth/welcoming_logo.webp";

const WelcomingContainer: FC = () => {
  //hooks
  const router = useRouter();
  const searchParams = useSearchParams();

  const searchParam_fullName = searchParams.get("fullName");

  //*** چک میکنه ک بدون تکمیل مراحل قبلی وارد این مرحله نشه
  if (!searchParam_fullName) router.replace(authUrlEnum.register);

  //auto redirect
  useEffect(() => {
    setTimeout(() => {
      window.location.href = authUrlEnum.login;
    }, 10 * 1000);
  });

  return (
    <section className="h-screen">
      <Confetti
        width={window.innerWidth - 100}
        height={window.innerHeight}
        numberOfPieces={60}
        wind={0.01}
        recycle
      />

      <section className="flex flex-col justify-center items-center h-full">
        <section
          className="w-full lg:!w-[650px] mx-auto flex flex-col justify-center items-center
          bg-white shadow-lg rounded-lg p-7"
        >
          <Image
            src={welcoming_logo.src}
            alt="خوش آمدید"
            width={150}
            height={150}
            className="rounded-full border border-dashed"
            style={{ objectFit: "contain" }}
          />

          <section className="flex items-center gap-2 mt-6">
            <p className="font-bold text-xl">
              سلام {searchParam_fullName} عزیز
            </p>
            <FaHandHolding size={30} className="text-yellow-700" /> //!
          </section>

          <p className="font-bold text-xl">
            به سامانه {projectConfig.title} خوش آمدید
          </p>

          <section className="mt-5">
            <span>تا</span>
            <Countdown
              date={Date.now() + 10000}
              autoStart
              renderer={({ seconds }) => (
                <strong className="text-sky-700 text-xl mx-2">
                  {seconds + " ثانیـــه ی"}
                </strong>
              )}
            />{" "}
            <span>
              دیگر به صورت اتومات وارد برنامه میشوید، در غیر این صورت لینک زیر
              را کلیک کنید !
            </span>
          </section>

          <section
            className="w-[150px] bg-sky-700 text-white rounded-full py-2 px-4 flex 
            justify-center items-center gap-2 mt-4 hover:bg-sky-600 cursor-pointer"
            onClick={() => (window.location.href = authUrlEnum.login)}
          >
            <span>ورود به برنامه</span>
            <FiLogIn size={20} />
          </section>
        </section>
      </section>
    </section>
  );
};

export { WelcomingContainer };
