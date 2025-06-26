"use client";

//base
import { FC, Suspense } from "react";

import { PasswordCode } from "./PasswordCode/PasswordCode";
import { SmsCode } from "./SmsCode/SmsCode";

// components
import { FullTab, ITabItems } from "@/components/common/FullTab/FullTab";
import { FullPageLoading } from "@/components/commonComponents/Loading/FullPageLoading/FullPageLoading";

const LoginContainer: FC = () => {
  const tabList: ITabItems[] = [
    {
      key: 1,
      label: "ورود با نام کاربری (شماره همراه)",
      children: (
        <Suspense fallback={<FullPageLoading />}>
          <PasswordCode />
        </Suspense>
      ),
    },
    {
      key: 2,
      label: "ورود با رمز یک بارمصرف",
      children: (
        <Suspense fallback={<FullPageLoading />}>
          <SmsCode />
        </Suspense>
      ),
    },
  ];

  return (
    <section className="">
      <FullTab items={tabList} />
    </section>
  );
};

export { LoginContainer };
